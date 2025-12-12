import certificate from "../assets/certificate.svg"

export interface CertificationItem {
    title: string
    description: string
    data: string
}

interface CertificationsComponentProps {
    certifications: CertificationItem[]
}

export function CertificationsComponent({ certifications }: CertificationsComponentProps) {
    return (
        <>
            {certifications.map((item, index) => (
                <div 
                    key={index}
                    className="flex gap-2.5 items-start cursor-pointer transition-transform hover:scale-105 bg-[#EFE5EA] rounded-2xl p-2"
                >
                    <img src={certificate} alt="Ícone de certificado" />
                    <div className="">
                        <h5>
                            <strong>{item.title}:</strong> {item.description}
                        </h5>
                        <p>{item.data}</p>
                    </div>
                </div>
            ))}
        </>
    )
}