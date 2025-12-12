export interface ContactItem {
    src: string
    alt: string
    description: string
}

interface ContactComponentProps {
    contact: ContactItem[]
}

export function ContactComponent({ contact }: ContactComponentProps) {
    return (
        <>
            {
                contact.map((item, index) => (
                    <li className="flex gap-2 items-center" key={index}>
                        <img className="w-6 h-6" src={item.src} alt={item.alt} />
                        <span className="text-[#c3d0d5] text-lg md:text-[1rem]">{item.description}</span>
                    </li>
                ))
            }
        </>
    )
}