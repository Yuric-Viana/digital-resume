import { Profile } from "../components/Profile"
import { Contact } from "../components/Contact"
import { Education } from "../components/Education"
import { SoftSkills } from "../Sessions/SoftSkills"
import { DiverseExperiences } from "../components/DiverseExperiences"

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