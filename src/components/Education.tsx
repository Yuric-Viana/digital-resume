import { SectionTitle } from "./SectionTitleComponent";

export function Education() {
    return (
        <div>
            <SectionTitle title="Formação acadêmica"/>

            <h3 className="flex font-bold text-[#d3e4ed] pt-4.5 ">Engenharia de Software - PUC Minas (Coração Eucarístico)</h3>
            <strong className="text-[#d3e4ed]">2024 — 2028</strong>
            
            <ul className="pt-6 list-disc list-inside text-[#d3e4ed] flex flex-col gap-2">
                <li>Graduando em Engenharia de Software, com sólida base em lógica de programação.</li>
                <li>Conhecimentos iniciais em desenvolvimento de sistemas.</li>
                <li>Participação em projetos acadêmicos e atividades práticas.</li>
                <li>Familiaridade com tecnologias web e demais áreas da computação.</li>
            </ul>
        </div>
    )
}