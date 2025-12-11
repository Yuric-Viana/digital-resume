import { Profile } from "./Profile"
import { Contact } from "./Contact"

export function Sidebar() {
    return (
        <aside className="h-screen bg-[#0D2139] flex flex-1 flex-col gap-9 px-4 md:flex-2 lg:flex-1 py-2 lg:py-0">

            <Profile />
        </aside>
    )
}