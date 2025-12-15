import { Certifications } from "../components/Curriculum/Certifications" 

import { SectionTitle} from "../components/Curriculum/SectionTitle"

export function CertificationsSessions() {
    return (
        <div>
            <SectionTitle color="text-[#0D2139]" borderColor="#0D2139" weight="bold" size={4} title="Certificações" />

            <div className="pt-4 grid gap-6.5 w-full lg:grid-cols-2">
                <Certifications />
            </div>
        </div>
    )
} 