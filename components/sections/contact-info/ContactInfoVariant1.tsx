import { Phone, Mail, Clock } from "lucide-react";

interface ContactInfoVariant1Props {
  data?: {
    phone?: string;
    phoneDisplay?: string;
    email?: string;
    areasAndHours?: {
      display?: string;
    };
  };
}

export default function ContactInfoVariant1({
  data,
}: ContactInfoVariant1Props) {
  return (
    <div className="space-y-8">
      <div>
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight"
          style={{ color: "var(--color-text)" }}
        >
          Fastest Way to Reach Us
        </h2>
        <div
          className="mt-2 h-1 w-20 rounded-full"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
      </div>
      {/* </CHANGE> */}

      <div className="space-y-6">
        <a
          href={`tel:${data?.phone}`}
          className="group block p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          style={{
            backgroundColor: "var(--color-card)",
            border: "2px solid var(--color-border)",
          }}
        >
          <div className="flex items-start gap-6">
            <div
              className="p-4 rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3
                className="font-bold text-xl mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Call Us Now
              </h3>
              <p
                className="text-3xl md:text-4xl font-bold tracking-tight"
                style={{ color: "var(--color-primary)" }}
              >
                {data?.phoneDisplay}
              </p>
              <p
                className="text-sm mt-2 font-medium"
                style={{ color: "var(--color-text)" }}
              >
                Available 7 days a week
              </p>
            </div>
          </div>
        </a>
        {/* </CHANGE> */}

        <a
          href={`mailto:${data?.email}`}
          className="group block p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          style={{
            backgroundColor: "var(--color-card)",
            border: "2px solid var(--color-border)",
          }}
        >
          <div className="flex items-start gap-6">
            <div
              className="p-4 rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3
                className="font-bold text-xl mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Email Us
              </h3>
              <p
                className="text-xl md:text-2xl font-semibold break-all"
                style={{ color: "var(--color-primary)" }}
              >
                {data?.email}
              </p>
              <p
                className="text-sm mt-2 font-medium"
                style={{ color: "var(--color-text)" }}
              >
                We respond within 24 hours
              </p>
            </div>
          </div>
        </a>
        {/* </CHANGE> */}

        <div
          className="p-8 rounded-2xl"
          style={{
            backgroundColor: "var(--color-card)",
            border: "2px solid var(--color-border)",
          }}
        >
          <div className="flex items-start gap-6">
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3
                className="font-bold text-xl mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Working Hours
              </h3>
              <p
                className="text-xl font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                {data?.areasAndHours?.display}
              </p>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}
      </div>
    </div>
  );
}
