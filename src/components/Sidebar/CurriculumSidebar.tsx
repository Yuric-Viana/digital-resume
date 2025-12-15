import { ProfileSessions } from "../../sessions/ProfileSessions"
import { ContactSessions } from "../../sessions/ContactSessions"
import { Education } from "../../sessions/EducationSessionsSessions"
import { SoftSkillsSessions } from "../../sessions/SoftSkillsSessions"
import { DiverseExperiencesSessions } from "../../sessions/DiverseExperiencesSessions"

export function CurriculumSidebar() {
    return (
        <aside className="min-h-full bg-[#0D2139] flex flex-1 flex-col gap-12 px-4 md:flex-2 lg:flex-1 py-8">
            <ProfileSessions />
            <ContactSessions />
            <Education />
            <SoftSkillsSessions />
            <DiverseExperiencesSessions />
        </aside>
    )
}