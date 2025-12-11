import { SectionTitle } from "./SectionTitle";

export function ProfessionalSummary() {
    return (
        <div>
            <SectionTitle color="[#0D2139]" borderColor="#0D2139" weight="bold" size={4} title="Sobre mim"/>

            <p className="pt-4.5">Engenheiro de Software em busca da primeira oportunidade profissional na área de desenvolvimento. Possuo sólida base em JavaScript, HTML e CSS, com certificações nessas tecnologias, e estou me especializando na formação Full Stack, aprimorando minhas habilidades tanto no front-endquanto no back-end. Busco integrar uma equipe onde possa aplicar meus conhecimentos, evoluir com novas tecnologias e contribuir para o desenvolvimento de soluções inovadoras e eficientes.</p>

            <p className="leading-snug pt-4.5"><strong>Pessoa com Deficiência (PCD)</strong>, com plena capacidade técnica para atuar como Engenheiro de Software. Possuo sólida experiência em análise, desenvolvimento e manutenção de sistemas, seguindo boas práticas de arquitetura e qualidade de código. Apesar de apresentar algumas limitações relacionadas à memória, mantenho alta performance por meio de organização, uso de ferramentas de apoio e metodologias que garantem precisão, produtividade e confiabilidade no trabalho.</p>
        </div>
    )
}