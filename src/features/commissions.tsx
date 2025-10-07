import CommissionTabs from "@/components/Commission-tabs"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Commissions() {
    return (
        <>
        <Header/>
        <main className="container mx-auto py-8">
            <h1 className="text-4xl mb-8 text-center">Comisiones</h1>
            <CommissionTabs />
        </main>
        <Footer />
        </>
    )
}


