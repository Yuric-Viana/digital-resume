import { SectionTitle} from "../components/Curriculum/SectionTitle";

type Props = {
    name: string
    percentage: number
    color?: string
}

const SkillBar = ({ name, percentage, color = "bg-yellow-500" }: Props) => {
    return (
        <div className="flex gap-2 pt-4.5 items-center">
            <span className="text-white w-32 shrink-0 text-end">{name}</span>
            <div className="w-full h-4 bg-white rounded-full">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}

export function SoftSkillsSessions() {

    return (
        <div>
            <SectionTitle title="Compentências" />

            <div>
                <SkillBar name="Comunicação" percentage={90} />
                <SkillBar name="Organização" percentage={88} />
                <SkillBar name="Ética" percentage={100} />
                <SkillBar name="Liderança" percentage={75} />
                <SkillBar name="Trabalho em equipe" percentage={85} />

            </div>
        </div>
    )
}