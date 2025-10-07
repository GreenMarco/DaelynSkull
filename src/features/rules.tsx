import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function RulesPage() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="py-16">
        <div className="content-frame">
          <div className="content-section">
            <h2 className="text-3xl mb-8 text-[#2e2550] text-center">Términos y Condiciones</h2>

            <section className="text-left bg-[#f9f9f9] py-4 px-12 max-w-4xl mx-auto text-xl text-[#2e2550]">
              <h3 className="text-2xl mb-4">¿Cómo es el proceso para pedir una comisión?</h3>
              <p className="mb-6">
                Cuando hayas decidido lo que quieres llena el formulario con todos los detalles y correo para poder
                comunicarme contigo. Una vez ya hayamos hablado y estemos de acuerdo en lo que se realizará podrás
                proceder con el pago y mandar el comprobante para así iniciar con el dibujo.
              </p>

              <h3 className="text-2xl mb-4">Comunicación</h3>
              <p className="mb-6">
                La comunicación se realizará por medio de solo una de las siguientes opciones: por Correo, Discord o
                alguna red social para mejor fluidez y comodidad.
              </p>

              <h3 className="text-2xl mb-4">Proceso y corrección</h3>
              <ul className="list-disc pl-8 mb-6 space-y-4">
                <li>Se te estará mostrando el proceso para cualquier corrección (Boceto, lineart y coloreado).</li>
                <li>
                  En la etapa del lineart se deben de hacer la mayoría de correcciones estructurales (Pose, expresiones,
                  detalles, etc.)
                </li>
                <li>
                  En caso de que haya una corrección mayor de algo que no fue especificado desde un principio, se
                  cobrará extra.
                </li>
                <li>Cuando termine te mandaré como se ve para una última revisión y confirmación.</li>
                <li>Ya autorizado te lo mandaré a tu correo para que no pierda calidad.</li>
              </ul>

              <h3 className="text-2xl mb-4">Precios y Pagos</h3>
              <ul className="list-disc pl-8 mb-6 space-y-4">
                <li>Los precios estarán expresados en dólares estadounidenses (USD)</li>
                <li>Método de pago: Por Transferencia Interbancaria SPEI (Solo en México) o por PayPal.</li>
              </ul>

              <h3 className="text-2xl mb-4">Formato a entregar y tiempo</h3>
              <ul className="list-disc pl-8 mb-6 space-y-4">
                <li>Las comisiones se realizarán por orden de llegada</li>
                <li>
                  Los tiempos de entrega son de hasta 30 días una vez realizado el pago (esto va a variar en cuestión de
                  emotes/stickers y Vtubers)
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
