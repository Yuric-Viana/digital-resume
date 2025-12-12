import { Main } from "./Layout/Main"
import { Sidebar } from "./Layout/Sidebar"

export default function App() {
  return (
    <div className="md:flex">
      <Sidebar />
      <Main />
    </div>
  )
}