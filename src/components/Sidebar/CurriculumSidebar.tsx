import { ProfileSessions } from "../../sessions/Curriculum/ProfileSessions"
import { ContactSessions } from "../../sessions/Curriculum/ContactSessions"
import { Education } from "../../sessions/Curriculum/EducationSessionsSessions"
import { SoftSkillsSessions } from "../../sessions/Curriculum/SoftSkillsSessions"
import { DiverseExperiencesSessions } from "../../sessions/Curriculum/DiverseExperiencesSessions"

export function Sidebar() {
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