import { CertificationsSessions } from "../../sessions/Curriculum/CertificationsSessions";
import { HardSkillsSessions } from "../../sessions/Curriculum/HardSkillsSession";
import { ProfessionalSummary } from "../../sessions/Curriculum/ProfessionalSummary";

export function CurriculumMain() {
    return (
        <div className="flex flex-col flex-3 gap-10 px-6 py-8">
            <ProfessionalSummary />
            <HardSkillsSessions />
            <CertificationsSessions />
        </div>
    )
}