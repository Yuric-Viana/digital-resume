type Props = {
    title: string
}

export function SectionTitle({ title }: Props) {
    return (
        <div>
            <h2 className="uppercase text-xl md:text-2xl text-white tracking-widest border-b-2 border-[#2D5166] pb-1">{title}</h2>
        </div>
    )
}