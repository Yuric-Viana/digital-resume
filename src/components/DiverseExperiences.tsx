import cutlery from "../assets/experiences/cutlery.svg"
import coin from "../assets/experiences/coin.svg"
import truck from "../assets/experiences/truck.svg"

import { SectionTitle } from "./SectionTitle";

export function DiverseExperiences() {
    return (
        <div>
            <SectionTitle title="Experiências diversas" />

            <ul className="pt-4.5 flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={cutlery} alt="Ícone de talheres" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem] whitespace-nowrap">Garçom</span>
                </li>

                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={truck} alt="Ícone de caminhão" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem]">Ajudante de carga e descarga</span>
                </li>

                <li className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={coin} alt="Ícone de etiqueta" />
                    <span className="text-[#c3d0d5] text-lg md:text-[1rem]">Vendedor</span>
                </li>
            </ul>
        </div>
    )
}