type Props = {
    title: string
    color?: string
    borderColor?: "#2D5166" | "#0D2139" 
    weight?: "default" | "bold"
    size?: number
}

export function SectionTitle({ title, color = "white", weight = "default", borderColor = "#2D5166", size = 2 }: Props) {
    return (
        <div>
            <h2 className={`uppercase text-xl md:text-2xl font-${weight} text-${color} tracking-widest border-b-${size} border-[${borderColor}] border- pb-1`}>{title}</h2>
        </div>
    )
}