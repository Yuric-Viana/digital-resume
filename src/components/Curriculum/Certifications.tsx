import certificate from "../../assets/certificate.svg"
import { allCertificates, type CertificateItem } from "../../utils/certificatesData"
import { useEffect, useState } from "react"
import { CertificateModal } from "../Certificate/CertificateModal"

export function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null)

    useEffect(() => {
        const body = document.body;

        if (selectedCertificate) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            body.style.overflow = "hidden";
            body.style.paddingRight = `${scrollbarWidth}px`;

        } else {
            body.style.overflow = "";  
            body.style.paddingRight = ""; 
        }

        return () => {
            body.style.overflow = "";
            body.style.paddingRight = "";
        };

    }, [selectedCertificate]); 

    function handleSelectCertificate(item: CertificateItem) {
        setSelectedCertificate(item)

        const slug = item.name.toLowerCase().replace(/\s+/g, '-')
        const newPath = `/certificate/${slug}`;

        window.history.replaceState(null, '', newPath);
    }

    function handleCloseModal() {
        setSelectedCertificate(null)
        document.body.classList.remove("no-scroll")

        window.history.replaceState(null, '', '/');
    }

    return (
        <>
            {
                allCertificates.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        className="flex gap-2.5 items-center cursor-pointer transition-transform hover:scale-105 bg-[#EFE5EA] rounded-2xl p-2"

                        onClick={() => handleSelectCertificate(item)}
                    >
                        <img src={certificate} alt="Ícone de certificado" />
                        <div>
                            <h5>
                                <strong>{item.name}:</strong> {item.title}
                            </h5>
                            <p>{item.data}</p>
                        </div>
                    </button>
                ))
            }
            {
                selectedCertificate && (
                    <CertificateModal onCertificateChange={handleSelectCertificate} onClose={handleCloseModal} certificate={selectedCertificate} />
                )
            }
        </>
    )
}