import { CurriculumMain } from "../components/Main/CurriculumMain"
import { CurriculumSidebar } from "../components/Sidebar/CurriculumSidebar"

export function Resume() {
  return (
    <div className="md:flex">
      <CurriculumSidebar />
      <CurriculumMain />
    </div>
  )
}