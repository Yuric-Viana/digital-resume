import { Certifications } from "./Certifications";
import { HardSkills } from "./HardSkills";
import { ProfessionalSummary } from "./ProfessionalSummary";

export function Main() {
    return (
        <div className="flex flex-col flex-3 gap-10 px-6 py-8">
            <ProfessionalSummary />
            <HardSkills />
            <Certifications />
        </div>
    )
}