import ContactFormVariant1 from "./ContactFormVariant1"
import ContactFormVariant2 from "./ContactFormVariant2"
import ContactFormVariant3 from "./ContactFormVariant3"
import ContactFormVariant4 from "./ContactFormVariant4"

interface ContactFormProps {
  variant?: number
  [key: string]: unknown
}

export default function ContactForm({ variant = 1, ...props }: ContactFormProps) {
  switch (variant) {
    case 2:
      return <ContactFormVariant2 {...props} />
    case 3:
      return <ContactFormVariant3 {...props} />
    case 4:
      return <ContactFormVariant4 {...props} />
    case 1:
    default:
      return <ContactFormVariant1 {...props} />
  }
}

export { ContactForm }
