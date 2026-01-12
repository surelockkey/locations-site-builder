import { useState } from "react";
import { usePathname } from "next/navigation";
import { sendManageSitesHtmlEmail } from "@/lib/email/queries";
import { generateHtmlContent } from "@/lib/email/mail-template";

interface ContactFormData {
  name?: string;
  email?: string;
  phone: string;
  service?: string;
  message?: string;
}

interface UseContactFormOptions {
  siteUrl: string;
  siteEmail: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useContactForm = ({ siteUrl, siteEmail, onSuccess, onError }: UseContactFormOptions) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const url = "https://dev-api-crm.tech-slk.com/graphql";

      const htmlContent = generateHtmlContent({
        site: siteUrl,
        state: pathname.slice(1, 3),
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        service: formData.service,
        message: formData.message,
        callback: "YES",
        url: pathname,
      });

      // Send to system email
      const systemEmailVariables = {
        to: "system@surelockkey.com",
        subject: `New request from ${formData.name || "a visitor"} - ${siteUrl}`,
        html: htmlContent,
      };

      // Send to site email
      const siteEmailVariables = {
        to: siteEmail,
        subject: `New contact form submission from ${formData.name || "a visitor"}`,
        html: htmlContent,
      };

      // Send both emails in parallel
      const [systemResponse, siteResponse] = await Promise.all([
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: sendManageSitesHtmlEmail,
            variables: systemEmailVariables,
          }),
        }),
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: sendManageSitesHtmlEmail,
            variables: siteEmailVariables,
          }),
        }),
      ]);

      const systemData = await systemResponse.json();
      const siteData = await siteResponse.json();

      console.log("System email response:", systemData);
      console.log("Site email response:", siteData);

      if (systemData.errors || siteData.errors) {
        console.error("API errors:", {
          systemErrors: systemData.errors,
          siteErrors: siteData.errors,
        });
        throw new Error(
          `Failed to send email: ${JSON.stringify(systemData.errors || siteData.errors)}`
        );
      }

      // Check if the mutation returned true (success)
      if (systemData.data?.sendManageSitesHtmlEmail === false || siteData.data?.sendManageSitesHtmlEmail === false) {
        throw new Error("Email sending failed");
      }

      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form:", error);
      onError?.(error instanceof Error ? error : new Error("Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
  };
};
