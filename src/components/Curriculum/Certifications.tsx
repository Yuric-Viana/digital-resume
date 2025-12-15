import { useNavigate } from "react-router"

import certificate from "../../assets/certificate.svg"
import { allCertificates } from "../certificatesData"

export interface CertificationItem {
    title: string
    description: string
    data: string
}

export function Certifications() {
    const navigate = useNavigate()

    function handleRedirect(title: string) {
        navigate(`/full-certificate/${title}`)
    }

    return (
        <>
            {allCertificates.map((item, index) => (
                <button
                    key={index}
                    type="button"
                    className="flex gap-2.5 items-center cursor-pointer transition-transform hover:scale-105 bg-[#EFE5EA] rounded-2xl p-2"
                    onClick={() => handleRedirect(item.id)}
                >
                    <img src={certificate} alt="Ícone de certificado" />
                    <div>
                        <h5>
                            <strong>{item.name}:</strong> {item.title}
                        </h5>
                        <p>{item.data}</p>
                    </div>
                </button>
            ))}
        </>
    )
}