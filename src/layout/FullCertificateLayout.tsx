import { SectionTitle } from "../components/SectionTitle";
import { CertificateSessions } from "../sessions/Certificate/CertificateSessions";
import { MoreCertificationsSessions } from "../sessions/Certificate/MoreCertificationsSessions";

export function FullCertificateLayout() {
    return (
        <div className="p-6">
            <SectionTitle color="text-[#0D2139]" borderColor="white" fontSize="6xl" weight="bold" size={4} title="Certificado completo"/>
            <p className="text-4xl text-[#4A5F76] tracking-widest">Detalhes do certificado</p>

            <div>
                <CertificateSessions />
                <MoreCertificationsSessions />
            </div>
        </div>
    )
}