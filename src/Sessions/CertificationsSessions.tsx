import { CertificationsComponent, type CertificationItem } from "../components/CertificationsComponent" 

import { SectionTitleComponent} from "../components/SectionTitleComponent"

const certificationsData: CertificationItem[] = [
    { title: "Git e GitHub", description: "compartilhando e colaborando em projetos", data: "Alura – Abril 2025" },
    { title: "Lógica de programação", description: "mergulhe em programação com JavaScript", data: "Alura – Abril 2025" },
    { title: "Lógica de programação", description: "explore funções e listas", data: "Alura – Abril 2025" },
    { title: "JavaScript", description: "manipulando elementos no DOM", data: "Alura – Maio 2025" },
    { title: "JavaScript", description: "utilizando tipos, variáveis e funções", data: "Alura – Maio 2025" },
    { title: "JavaScript", description: "entendendo promisese async/await", data: "Alura – Maio 2025" },
    { title: "JavaScript", description: "explorando a manipulação de elementos e da localStorage", data: "Alura – Maio 2025" },
    { title: "JavaScript", description: "construindo páginas dinâmicas", data: "Alura – Abril 2025" },
    { title: "JavaScript", description: "métodos de array", data: "Alura – Abril 2025" }, // Corrigido
    { title: "HTML e CSS", description: "ambientes de desenvolvimento, estrutura de arquivos e tags", data: "Alura - Março 2025" },
    { title: "HTML e CSS", description: "responsividade com mobile-first", data: "Alura – Março 2025" },
    { title: "HTML e CSS", description: "praticando HTML/CSS", data: "Alura – Março 2025" },
    { title: "HTML e CSS", description: "cabeçalho, footere variáveis CSS", data: "Alura – Março 2025" },
    { title: "HTML e CSS", description: "Classes, posicionamento e Flexbox", data: "Alura – Março 2025" },
    { title: "Figma", description: "conhecendo a ferramenta", data: "Alura – Abril 2025" }
];

export function CertificationsSessions() {
    return (
        <div>
            <SectionTitleComponent color="[#0D2139]" borderColor="#0D2139" weight="bold" size={4} title="Certificações" />

            <div className="pt-4 grid gap-4.5 w-full lg:grid-cols-2">
                <CertificationsComponent certifications={certificationsData}/>
            </div>
        </div>
    )
} 