"use client"

import { useState } from "react"

interface PricingData {
  [key: string]: {
    title: string
    images: string[]
    headers: string[]
    rows: string[][]
    note?: string
  }
}

const pricingData: PricingData = {
  normal: {
    title: "Normal",
    images: ["/anime-style-digital-art-lapis-character.jpg", "/anime-style-digital-art-teto-character.jpg", "/anime-style-digital-art-marie-character.jpg"],
    headers: ["Tamaño", "Lineart", "Color base", "Full color"],
    rows: [
      ["Headshot", "$8", "$10", "$25"],
      ["Halfbody", "$12", "$15", "$35"],
      ["Fullbody", "$20", "$22", "$40"],
    ],
    note: "*Hay descuento si son varios para Match Icon",
  },
  chibi: {
    title: "Chibi",
    images: ["/placeholder.svg?height=250&width=200"],
    headers: ["Tamaño", "Lineart", "Full color"],
    rows: [
      ["Headshot", "$12", "$25"],
      ["Halfbody", "$15", "$30"],
      ["Fullbody", "$20", "$40"],
    ],
  },
  vtuber: {
    title: "PNG Tubers - 4 Frames",
    images: [
      "/placeholder.svg?height=250&width=200",
      "/placeholder.svg?height=250&width=200",
      "/placeholder.svg?height=250&width=200",
    ],
    headers: ["Estilo", "Precio"],
    rows: [
      ["Chibi", "$45"],
      ["Normal", "$65"],
    ],
  },
  emotes: {
    title: "Emotes",
    images: [
      "/placeholder.svg?height=250&width=200",
      "/placeholder.svg?height=250&width=200",
      "/placeholder.svg?height=250&width=200",
    ],
    headers: ["Cantidad", "Precio (USD)"],
    rows: [
      ["5 Emotes", "$25"],
      ["10 Emotes", "$45"],
      ["15 Emotes", "$65"],
    ],
  },
}

export default function CommissionTabs() {
  const [activeTab, setActiveTab] = useState("normal")

  return (
    <section className="text-center">
      <div className="mb-8">
        {Object.keys(pricingData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`tab-button ${activeTab === key ? "active" : ""}`}
          >
            {key === "normal" ? "Normal" : key === "chibi" ? "Chibi" : key === "vtuber" ? "PNG Tubers" : "Emotes"}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl mb-4 text-[#2e2550]">{pricingData[activeTab].title}</h3>

        <div className="gallery-mini">
          {pricingData[activeTab].images.map((src, index) => (
            <img key={index} src={src || "/placeholder.svg"} alt={`Obra ${index + 1}`} />
          ))}
        </div>

        <table className="pricing-table mx-auto max-w-md">
          <thead>
            <tr>
              {pricingData[activeTab].headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingData[activeTab].rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {pricingData[activeTab].note && <p className="text-xs text-[#222] mt-2">{pricingData[activeTab].note}</p>}
      </div>
    </section>
  )
}
