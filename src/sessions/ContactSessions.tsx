
import cellphoneIcon from "../assets/contact/cellphone.svg"
import mapsIcon from "../assets/contact/location.svg"
import emailIcon from "../assets/contact/email.svg"
import calendarIcon from "../assets/contact/calendar.svg"
import linkedinIcon from "../assets/contact/linkedin.svg"
import githubIcon from "../assets/contact/github.svg"

import { SectionTitle} from "../components/Curriculum/SectionTitle"
import { Contact, type ContactItem } from "../components/Curriculum/Contact" 

const contactData: ContactItem[] = [
    { 
        src: cellphoneIcon, 
        alt: "Ícone de celular", 
        description: "(31) 99364-0568" 
    },
    { 
        src: mapsIcon, 
        alt: "Ícone de mapa", 
        description: "Santa Helena - Contagem - MG" 
    },
    { 
        src: emailIcon, 
        alt: "Ícone de e-mail", 
        description: "yuricardosoviana@gmail.com"
    },
    { 
        src: calendarIcon, 
        alt: "Ícone de calendário", 
        description: "04/12/2004" 
    },
    { 
        src: linkedinIcon, 
        alt: "Ícone do linkedin", 
        description: "https://www.linkedin.com/in/yuri-viana-2a7468357/",
        url: "https://www.linkedin.com/in/yuri-viana-2a7468357/" 
    },
    { 
        src: githubIcon, 
        alt: "Ícone do git hub", 
        description: "https://github.com/Yuric-Viana", 
        url: "https://github.com/Yuric-Viana" 
    },
];

export function ContactSessions() {
    return (
        <div>
            <SectionTitle title="Contato" />

            <ul className="pt-4.5 flex flex-col gap-2">
                <Contact contact={contactData} />
            </ul>
        </div>
    )
}