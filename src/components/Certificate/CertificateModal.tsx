import { CertificationsSidebar } from ".";
import { CertificateMain } from "../Main/CertificateMain";

import close from "../../assets/close.svg"

import { allCertificates, type CertificateItem } from "../../utils/certificatesData"
import { type CertificateImageKey } from "../../assets/certificates/certificateImages";

type CertificateModalProps = {
    certificate: CertificateItem
    onClose: () => void;
    onCertificateChange: (item: CertificateItem) => void
}

export function CertificateModal({ onClose, certificate, onCertificateChange }: CertificateModalProps) {
    
    function handleSelectCertificate(key: CertificateImageKey) {
        const selectedItem = allCertificates.find(item => item.id === key)

        if (selectedItem) {
            onCertificateChange(selectedItem)
        }
    }

    return (
        <div className="fixed inset-0 w-full bg-black/50 flex items-center justify-center">
            <div className="max-w-2xl lg:max-w-4xl w-full h-max md:h-[75vh] bg-white rounded-xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="p-2 grid grid-rows-[auto_auto_auto] md:grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-3 h-80vh">
                    <header className="flex justify-between border-b-2 col-span-1 md:col-span-3">
                        <h2 className="text-xl font-semibold">Certificado: {certificate.name}</h2>

                        <button type="button" className="cursor-pointer transition-all ease-linear rounded-2xl hover:scale-105" onClick={onClose}>
                            <img src={close} alt="Ícone de fechar" />
                        </button>
                    </header>

                    <div className="p-4 col-span-2">
                        <CertificateMain imageKey={certificate.id as CertificateImageKey} />
                    </div>

                    <aside className="bg-gray-100 col-span-1 pt-2 border-l w-full border-gray-300">
                        <h3 className="font-semibold text-center mb-4">Mais certificados</h3>

                        <ul className="grid grid-cols-1 gap-4 p-4 max-h-56 md:max-h-96 overflow-y-auto overflow-x-hidden">
                            <CertificationsSidebar certificates={allCertificates} onSelectCertificate={handleSelectCertificate} />
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    )
}