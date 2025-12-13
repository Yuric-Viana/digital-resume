import certificateIcon from "../../assets/certificate.svg"
interface CertificateItem {
    name: string
    data: string
}

type CertificateSidebarProps = {
    certificates: CertificateItem[]
}

export function CertificateSidebar({ certificates }: CertificateSidebarProps) {
    return (
        <>
            {
                certificates.map((certificate, index) => (
                    <li key={index} className="grid gap-2 p-3 bg-white rounded-xl" >
                        <img src={certificateIcon} alt="Ícone de certificado" />
                        <h3>{certificate.name}</h3>
                        <p>{certificate.data}</p>
                    </li>
                ))
            }
        </>
    )
}