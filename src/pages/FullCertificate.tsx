import { useNavigate, useParams } from "react-router";

import { SectionTitle } from "../components/Curriculum/SectionTitle";

import type { CertificateImageKey } from "../assets/certificates/certificateImages";
import { CertificateMain } from "../components/Main/CertificateMain";
import { CertificationsSidebar } from "../components/Certificate";

import { allCertificates } from "../components/certificatesData";

import { useEffect, useState } from "react";

export function FullCertificate() {
    const { name } = useParams<{ name: CertificateImageKey }>()
    const navigate = useNavigate()

    const initialKey = (name && name in allCertificates) ? name as CertificateImageKey : null

    const [selectedCertificateKey, setSelectedCertificateKey] = useState<CertificateImageKey | null>(initialKey)

    useEffect(() => {
        if (name && !selectedCertificateKey) {
            setSelectedCertificateKey(name as CertificateImageKey)
        }
    }, [name, selectedCertificateKey])

    function handleSelectCertificate(key: CertificateImageKey) {
        setSelectedCertificateKey(key)

        navigate(`/full-certificate/${key}`, { replace: true })
    }

    return (
        <div className="p-6 min-h-screen bg-[#E6E9EB]">
            <SectionTitle color="text-[#0D2139]" borderColor="white" fontSize="6xl" weight="bold" size={4} title="Certificado completo" />
            <p className="text-4xl pt-4 text-[#4A5F76] tracking-widest">Detalhes do certificado</p>

            <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <aside className="lg:col-span-4">
                    <div className="bg-[#0D2139] p-4 rounded-xl grid gap-6">
                        <h2 className="text-2xl font-bold text-white border-b">Mais certificados</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <CertificationsSidebar certificates={allCertificates} onSelectCertificate={handleSelectCertificate} />
                        </ul>
                    </div>
                </aside>

                <main className="lg:col-span-8 lg:col-start-6">
                    <div className="grid gap-20">
                        {
                            selectedCertificateKey && (
                                <CertificateMain imageKey={selectedCertificateKey} />
                            )
                        }
        
                    </div>
                </main>
            </div>
        </div>
    )
}