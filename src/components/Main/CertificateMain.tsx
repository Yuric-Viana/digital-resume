import { useParams } from "react-router"

import { certificateImages, type CertificateImageKey } from "../../assets/certificates/certificateImages"

const isCertificateKey = (key: string | undefined): key is CertificateImageKey => {
    if (!key) return false
    return key in certificateImages
}

type CertificateMainProps = {
    imageKey?: CertificateImageKey
}

export function CertificateMain({ imageKey }: CertificateMainProps) {
    const { name } = useParams()

    const keyCandidate = name || imageKey

    if (!isCertificateKey(keyCandidate)) {
        return (
            <div className="p-8 text-center bg-red-100 border border-red-400 rounded-lg">
                <h2 className="text-xl font-bold text-red-700">Certificado Não Encontrado</h2>
                <p className="text-red-600 mt-2">
                    A chave de certificado fornecida ({keyCandidate ? `"${keyCandidate}"` : 'nenhuma'}) não é válida.
                </p>
            </div>
        )
    }

    const certificate = certificateImages[keyCandidate]

    return (
        <div className="grid items-center md:items-start gap-2">
            <div className="bg-white p-8 rounded-2xl">
                <img className="rounded-2xl" src={certificate.image} />
            </div>

            <div className="flex justify-between">
                <button className="font-bold w-full md:text-left uppercase cursor-pointer" type="button">
                    <a href={certificate.url} target="_blank">Ver certificado original</a>
                </button>
            </div>
        </div>
    )
}
