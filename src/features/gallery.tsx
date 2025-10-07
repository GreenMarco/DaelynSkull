import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function GalleryPage() {
    const artworks = [
        { src: "/anime-style-digital-art-lapis-lazuli-character.jpg", alt: "Lapis" },
        { src: "/anime-style-digital-art-teto-character-pink-hair.jpg", alt: "Teto" },
        { src: "/anime-style-digital-art-marie-character-blonde.jpg", alt: "Marie" },
        { src: "/anime-style-digital-art-star-themed-character.jpg", alt: "Lyn Star" },
        { src: "/anime-style-chibi-mango-girl-character.jpg", alt: "Mango Girl" },
        { src: "/anime-style-digital-art-mao-mao-character.jpg", alt: "Mao Mao" },
        { src: "/cute-anime-emote-expression-1.jpg", alt: "Emote 1" },
        { src: "/anime-style-coraline-character-art.jpg", alt: "Coraline" },
        { src: "/anime-style-madeline-character-horizontal-art.jpg", alt: "Madeline" },
    ]

    return (
        <>
        <Header />
        <Navigation />

        <main className="py-16">
            <div className="content-frame">
            <section className="content-section">
                <h2 className="text-3xl mb-8 text-[#2e2550] text-center">Galería</h2>
                <div className="gallery-grid">
                {artworks.map((artwork, index) => (
                    <img
                    key={index}
                    src={artwork.src || "/placeholder.svg"}
                    alt={artwork.alt}
                    className="w-full rounded-lg object-cover border border-gray-300 transition-transform duration-200 hover:scale-105"
                    />
                ))}
                </div>
            </section>
            </div>
        </main>

        <Footer />
        </>
    )
}
