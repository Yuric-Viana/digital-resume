import { Certifications } from "./Certifications";
import { HardSkillsSessions } from "../Sessions/HardSkillsSession";
import { ProfessionalSummary } from "./ProfessionalSummary";

export function Main() {
    return (
        <div className="flex flex-col flex-3 gap-10 px-6 py-8">
            <ProfessionalSummary />
            <HardSkillsSessions />
            <Certifications />
        </div>
    )
}