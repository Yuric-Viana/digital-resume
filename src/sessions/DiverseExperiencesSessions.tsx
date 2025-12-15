import cutlery from "../assets/experiences/cutlery.svg"
import coin from "../assets/experiences/coin.svg"
import truck from "../assets/experiences/truck.svg"

import { SectionTitle} from "../components/Curriculum/SectionTitle";
import { Experiences, type ExperiencesItem } from "../components/Curriculum/Experiences";

const experiencesData: ExperiencesItem[] = [
    { title: "Garçom", alt: "Ícone de talheres", src: cutlery },
    { title: "Ajudante de carga e descarga", alt: "Ícone de caminhão", src: truck },
    { title: "Vendedor", alt: "Ícone de moeda", src: coin },
]

export function DiverseExperiencesSessions() {
    return (
        <div>
            <SectionTitle title="Experiências diversas" />

            <ul className="pt-4.5 flex flex-col gap-2">
                <Experiences experiences={experiencesData}/>
            </ul>
        </div>
    )
}