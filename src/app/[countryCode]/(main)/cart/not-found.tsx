// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Oops! Panier introuvable",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page introuvable</h1>
      <p className="text-small-regular text-ui-fg-base">
      Le panier auquel vous avez tenté d&apos;accéder n&apos;existe plus. Effacez vos cookies et essayez
      encore.
      </p>
      <InteractiveLink href="/">Retourner a l&apos;accueil</InteractiveLink>
    </div>
  )
}
