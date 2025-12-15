export interface ExperiencesItem {  
    src: string
    alt: string
    title: string
}

interface ExperiencesProps {
    experiences: ExperiencesItem[]
}

export function Experiences({ experiences }: ExperiencesProps) {
    return (
        <>
            {experiences.map((experience, index) => (
                <li className="flex gap-2 items-center" key={index}>
                    <img className="w-6 h-6" src={experience.src} alt={experience.alt} />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem] whitespace-nowrap">{experience.title}</span>
                </li>
            ))}
        </>
    )
}