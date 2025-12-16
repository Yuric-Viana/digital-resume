import { type CertificateImageKey } from "../../assets/certificates/certificateImages"
import { type CertificateItem } from "../certificatesData"

import certificateIcon from "../../assets/certificate.svg"

type CertificationsSidebarProps = {
    onSelectCertificate: (id: CertificateImageKey) => void
    certificates: CertificateItem[]
}

export function CertificationsSidebar({ onSelectCertificate, certificates }: CertificationsSidebarProps) {
    return (
        <>
            {
                certificates.map((certificate, index) => (
                    <li key={index} onClick={() => {
                        onSelectCertificate(certificate.id)
                    }
                    } className="grid gap-2 p-3 justify-center cursor-pointer transition-transform hover:scale-106 bg-white rounded-xl " >
                        <img src={certificateIcon} alt="Ícone de certificado" />
                        <h3 className="font-bold">{certificate.name}</h3>
                        <p>{certificate.data}</p>
                    </li>
                ))
            }
        </>
    )
}