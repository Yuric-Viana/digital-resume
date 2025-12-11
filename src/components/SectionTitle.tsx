type Props = {
    title: string
    color?: string
}

export function SectionTitle({ title, color = "white" }: Props) {
    return (
        <div>
            <h2 className={`uppercase text-xl md:text-2xl text-${color} tracking-widest border-b-2 border-[#2D5166] pb-1`}>{title}</h2>
        </div>
    )
}