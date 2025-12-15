type Props = {
    title: string
    color?: "text-white" | "text-[#0D2139]"
    borderColor?: "#2D5166" | "#0D2139" | "white"
    weight?: "default" | "bold"
    size?: number
    fontSize?: "2xl" | "6xl"
}

export function SectionTitle({ title, color = "text-white", weight = "default", borderColor = "#2D5166", size = 2, fontSize = "2xl" }: Props) {
    return (
        <div>
            <h2
                className={`uppercase text-xl md:text-${fontSize} font-${weight} ${color} tracking-widest pb-1`}
                style={{ borderBottomWidth: size, borderColor, borderStyle: "solid" }}
            >
                {title}
            </h2>
        </div>
    )
}