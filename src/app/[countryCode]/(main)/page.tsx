import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import MaterialsPremium from "@modules/home/components/material"
import CandleMakingStory from "@modules/home/components/conception"
import Newsletter from "@modules/home/components/newsletters"

export const metadata: Metadata = {
  title: "Candlesandpots",
  description:
    "Découvrez l'alliance parfaite entre artisanat authentique et élégance intemporelle. Chaque bougie et pot qui sort de notre atelier raconte une histoire unique, façonnée avec passion.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <MaterialsPremium />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <CandleMakingStory />
      <Newsletter />
    </>
  )
}
