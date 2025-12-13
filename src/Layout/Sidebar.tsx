import { Profile } from "../componentsessions/Profile"
import { ContactSessions } from "../componentsessions/ContactSessions"
import { Education } from "../componentsessions/Education"
import { SoftSkills } from "../componentsessions/SoftSkills"
import { DiverseExperiencesSessions } from "../componentsessions/DiverseExperiencesSessions"

export function Sidebar() {
    return (
        <aside className="min-h-full bg-[#0D2139] flex flex-1 flex-col gap-12 px-4 md:flex-2 lg:flex-1 py-8">
            <Profile />
            <ContactSessions />
            <Education />
            <SoftSkills />
            <DiverseExperiencesSessions />
        </aside>
    )
}