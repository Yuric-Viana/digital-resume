import { SectionTitle} from "../components/Curriculum/SectionTitle";
import { HardSkills, type SkillItem } from "../components/Curriculum/HardSkills"

import { hardSkillsData } from "./hardSkill"

export function HardSkillsSessions() {
    return (
        <div>
            <SectionTitle color="text-[#0D2139]" borderColor="#0D2139" weight="bold" size={4} title="Habilidades Técnicas"/>
            
            <div className="pt-4.5 grid gap-8">

                <HardSkills title="Linguagens de Programação e Marcação" skills={hardSkillsData.languagesData}/>
                <HardSkills title="Framework e Bibliotecas" skills={hardSkillsData.frameworksData}/>
                <HardSkills title="Ferramentas e IDEs" skills={hardSkillsData.toolsData}/>
                <HardSkills title="Ferramentas de Build, Runtime e Virtualização" skills={hardSkillsData.toolsBuildData}/>
            </div>
        </div>
    )
}