import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Footer() {
  return (
    <footer className="bg-white text-[#3b1b00] py-16 border-t border-[#f5d6c3]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Conteneur principal du footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          
          {/* Logo et Description */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-2 tracking-wide">Candlesandpots</h2>
            <Text className="txt-small text-[#3b1b00] opacity-80">
              Découvrez l&apos;alliance parfaite entre artisanat authentique et élégance intemporelle. Chaque bougie et pot qui sort de notre atelier raconte une histoire unique, façonnée avec passion.
            </Text>
          </div>

          {/* Navigation avec LocalizedClientLink */}
          <div className="lg:w-1/3 flex flex-col lg:flex-row items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-8">
            <LocalizedClientLink 
              href="/" 
              className={clx("text-sm hover:underline hover:text-[#3b1b00] transition")}
            >
              Accueil
            </LocalizedClientLink>
            <LocalizedClientLink 
              href="/nos-bougies" 
              className={clx("text-sm hover:underline hover:text-[#3b1b00] transition")}
            >
              Nos Bougies
            </LocalizedClientLink>
            <LocalizedClientLink 
              href="/a-propos" 
              className={clx("text-sm hover:underline hover:text-[#3b1b00] transition")}
            >
              À Propos
            </LocalizedClientLink>
            <LocalizedClientLink 
              href="/contact" 
              className={clx("text-sm hover:underline hover:text-[#3b1b00] transition")}
            >
              Contact
            </LocalizedClientLink>
          </div>

          {/* Réseaux Sociaux */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={clx("px-4 py-2 bg-[#3b1b00] text-white rounded-full hover:bg-[#f5d6c3] hover:text-[#3b1b00] transition")}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={clx("px-4 py-2 bg-[#3b1b00] text-white rounded-full hover:bg-[#f5d6c3] hover:text-[#3b1b00] transition")}
            >
              Instagram
            </a>
          </div>
        </div>
        
        {/* Section Copyright */}
        <div className="mt-12 pt-4 text-center">
          <Text className="txt-compact-small text-[#3b1b00] opacity-70">
            &copy; {new Date().getFullYear()} Candlesandpots. Tous droits réservés.
          </Text>
        </div>
      </div>
    </footer>
  )
}
