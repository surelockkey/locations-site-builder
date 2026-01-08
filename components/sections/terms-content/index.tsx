import { TermsContentVariant1 } from "./TermsContentVariant1"
import { TermsContentVariant2 } from "./TermsContentVariant2"
import { TermsContentVariant3 } from "./TermsContentVariant3"
import { TermsContentVariant4 } from "./TermsContentVariant4"

interface TermsContentProps {
  variant: string
  data: any
}

export function TermsContent({ variant, data }: TermsContentProps) {
  switch (variant) {
    case "1":
      return <TermsContentVariant1 data={data} />
    case "2":
      return <TermsContentVariant2 data={data} />
    case "3":
      return <TermsContentVariant3 data={data} />
    case "4":
      return <TermsContentVariant4 data={data} />
    default:
      return <TermsContentVariant1 data={data} />
  }
}
