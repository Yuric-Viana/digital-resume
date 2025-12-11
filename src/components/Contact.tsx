import cellphoneIcon from "../assets/cellphone.svg"
import mapsIcon from "../assets/location.svg"
import emailIcon from "../assets/email.svg"
import calendarIcon from "../assets/calendar.svg"
import linkedinIcon from "../assets/linkedin.svg"
import githubIcon from "../assets/github.svg"

export function Contact() {
    return (
        <div>
            <h2 className="uppercase text-xl md:text-2xl text-[#c3d0d5] tracking-widest border-b-2 border-[#2D5166] pb-1">Contato</h2>

            <ul className="pt-4.5 flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={cellphoneIcon} alt="Ícone de celular" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem] whitespace-nowrap">(31) 99364-0568</span>
                </li>

                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={mapsIcon} alt="Ícone de mapa" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem]">Santa Helena - Contagem - MG</span>
                </li>

                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={emailIcon} alt="Ícone de e-mail" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem]">yuricardosoviana@gmail.com</span>
                </li>

                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={calendarIcon} alt="Ícone de calendário" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem]">04/12/2004</span>
                </li>

                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={linkedinIcon} alt="Ícone do linkedin" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem]">https://www.linkedin.com/in/yuri-viana-2a7468357/</span>
                </li>

                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={githubIcon} alt="Ícone do git hub" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem]">https://github.com/Yuric-Viana</span>
                </li>
            </ul>
        </div>
    )
}