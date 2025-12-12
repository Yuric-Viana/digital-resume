import { Profile } from "../Sessions/Profile"
import { ContactSessions } from "../Sessions/ContactSessions"
import { Education } from "../Sessions/Education"
import { SoftSkills } from "../Sessions/SoftSkills"
import { DiverseExperiencesSessions } from "../Sessions/DiverseExperiencesSessions"

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