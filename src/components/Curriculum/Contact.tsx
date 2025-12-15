export interface ContactItem {
    src: string
    alt: string
    description: string

    url?: string
}

interface ContactProps {
    contact: ContactItem[]
}

export function Contact({ contact }: ContactProps) {
    return (
        <>
            {
                contact.map((item, index) => (
                    <li className="flex gap-2 items-center" key={index}>
                        <img className="w-6 h-6" src={item.src} alt={item.alt} />

                        {
                            item.url ? (   
                                <a className="text-[#c3d0d5] text-lg md:text-[1rem] hover:text-white hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer" href={item.url}>
                                    {item.description}
                                </a>
                            ) : (
                                <span className="text-[#c3d0d5] text-lg md:text-[1rem]">{item.description}</span>
                            )
                        }

                    </li>
                ))
            }
        </>
    )
}