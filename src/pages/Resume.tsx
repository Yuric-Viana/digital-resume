import { CurriculumMain } from "../components/Main/CurriculumMain"
import { Sidebar } from "../components/Sidebar/CurriculumSidebar"

export function Resume() {
  return (
    <div className="md:flex">
      <Sidebar />
      <CurriculumMain />
    </div>
  )
}