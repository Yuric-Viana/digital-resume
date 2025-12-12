import cutlery from "../assets/experiences/cutlery.svg"
import coin from "../assets/experiences/coin.svg"
import truck from "../assets/experiences/truck.svg"

import { SectionTitleComponent} from "../components/SectionTitleComponent";
import { ExperiencesComponent, type ExperiencesItem } from "../components/ExperiencesComponent";

const experiencesData: ExperiencesItem[] = [
    { title: "Garçom", alt: "Ícone de talheres", src: cutlery },
    { title: "Ajudante de carga e descarga", alt: "Ícone de caminhão", src: truck },
    { title: "Vendedor", alt: "Ícone de moeda", src: coin },
]

export function DiverseExperiencesSessions() {
    return (
        <div>
            <SectionTitleComponent title="Experiências diversas" />

            <ul className="pt-4.5 flex flex-col gap-2">
                <ExperiencesComponent experiences={experiencesData}/>
            </ul>
        </div>
    )
}