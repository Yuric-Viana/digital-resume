export interface SkillItem {
    name: string
    iconSrc: string
    iconAlt?: string
}

interface HardSkillsProps {
    title: string
    skills: SkillItem[]
}

export function HardSkillsComponent({ skills, title }: HardSkillsProps) {
    return (
        <div className="pt-2">
            <h4 className="text-xl font-semibold border-l-6 border-[#0A92AA] pl-2">{title}</h4>
            <ul className="pt-4 lg:pl-12 grid gap-4.5 md:grid-cols-2 lg:grid-cols-4">
                {
                    skills.map((skill) => (
                        <li className=" cursor-pointer transition-all scale-100 lg:hover:scale-110 bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center duration-400 hover:text-white shadow-lg card-fill-effect ease-linear">
                            <img className="w-6" src={skill.iconSrc} alt={skill.iconAlt} />
                            <p className="font-bold">{skill.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}