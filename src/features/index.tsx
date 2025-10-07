import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="py-16">
        <div className="content-frame">
          <section className="content-section">
            <div className="flex justify-between items-center max-md:flex-col-reverse">
              <div className="flex-1">
                <h1 className="text-3xl mb-4 text-[#2e2550]">Bienvenid@</h1>
                <p className="text-xl text-left mr-12 mb-6 text-[#2e2550]">
                  Soy Daelyn una artista con un estilo cartoon/anime que tiene muchas ideas y poco tiempo. Pero con el
                  ánimo de seguir creciendo y aprendiendo.
                </p>
                <p className="text-xl text-left mr-12 mb-6 text-[#2e2550]">
                  Aparte de dibujar me gusta jugar, escribir historias/poemas y experimentar nuevas formas de hacer
                  arte. Espero que mi trabajo sea de tu agrado ₍ᐢ.ˬ.ᐢ₎♡.
                </p>
                <p className="text-xl text-left mr-12 text-[#2e2550]">¡Agradecería mucho que apoyes mi arte!</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/anime-style-digital-art-portrait-of-female-artist-.jpg"
                  alt="DaelynSkull"
                  className="block mx-auto mb-4 max-w-[300px] w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>
        </div>

        <img src="/cute-anime-character-decorative-element.jpg" alt="Fondo decorativo" className="decorative-bg" />
      </main>

      <Footer />
    </>
  )
}
