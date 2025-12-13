import { CertificationsSessions } from "../componentsessions/CertificationsSessions";
import { HardSkillsSessions } from "../componentsessions/HardSkillsSession";
import { ProfessionalSummary } from "../componentsessions/ProfessionalSummary";

export function Main() {
    return (
        <div className="flex flex-col flex-3 gap-10 px-6 py-8">
            <ProfessionalSummary />
            <HardSkillsSessions />
            <CertificationsSessions />
        </div>
    )
}