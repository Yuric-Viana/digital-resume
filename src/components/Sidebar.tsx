import { Profile } from "./Profile"
import { Contact } from "./Contact"
import { Education } from "./Education"
import { SoftSkills } from "./SoftSkills"
import { DiverseExperiences } from "./DiverseExperiences"

export function Sidebar() {
    return (
        <aside className="min-h-full bg-[#0D2139] flex flex-1 flex-col gap-12 px-4 md:flex-2 lg:flex-1 py-8">
            <Profile />
            <Contact />
            <Education />
            <SoftSkills />
            <DiverseExperiences />
        </aside>
    )
}