import { useNavigate } from "react-router"

import certificate from "../assets/certificate.svg"

export interface CertificationItem {
    title: string
    description: string
    data: string
}

interface CertificationsProps {
    certifications: CertificationItem[]
}

export function Certifications({ certifications }: CertificationsProps) {
    const navigate = useNavigate()

    function handleRedirect(title: string) {
        navigate(`/full-certificate/${title}`)
    }

    return (
        <>
            {certifications.map((item, index) => (
                <button
                    key={index}
                    type="button"
                    className="flex gap-2.5 items-start cursor-pointer transition-transform hover:scale-105 bg-[#EFE5EA] rounded-2xl p-2"
                    onClick={() => handleRedirect(item.title)}
                >
                    <img src={certificate} alt="Ícone de certificado" />
                    <div>
                        <h5>
                            <strong>{item.title}:</strong> {item.description}
                        </h5>
                        <p>{item.data}</p>
                    </div>
                </button>
            ))}
        </>
    )
}