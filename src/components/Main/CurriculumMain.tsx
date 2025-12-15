import { CertificationsSessions } from "../../sessions/CertificationsSessions";
import { HardSkillsSessions } from "../../sessions/HardSkillsSession";
import { ProfessionalSummary } from "../../sessions/ProfessionalSummary";

export function CurriculumMain() {
    return (
        <div className="flex flex-col flex-3 gap-10 px-6 py-8">
            <ProfessionalSummary />
            <HardSkillsSessions />
            <CertificationsSessions />
        </div>
    )
}