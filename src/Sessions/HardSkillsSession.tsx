import css from "../assets/languages/css.svg"
import js from "../assets/languages/javascript.svg"
import ts from "../assets/languages/typescript.svg"
import html from "../assets/languages/html.svg"

import react from "../assets/frameworks/react.svg"
import express from "../assets/frameworks/express.svg"
import tailwind from "../assets/frameworks/tailwind.svg"
import prisma from "../assets/frameworks/prisma.svg"
import jest from "../assets/frameworks/jest.svg"

import git from "../assets/tools/git.svg"
import vsCode from "../assets/tools/vs-code.svg"
import intellij from "../assets/tools/intellij.svg"
import github from "../assets/tools/github.svg"

import database from "../assets/tools-build/database.png"
import builder from "../assets/tools-build/webpack.svg"
import node from "../assets/tools-build/nodejs.svg"
import docker from "../assets/tools-build/docker.svg"
import vite from "../assets/tools-build/vitejs.svg"

import { SectionTitle } from "../components/SectionTitleComponent";
import { HardSkillsComponent, type SkillItem } from "../components/HardSkillsComponent"

const languagesData: SkillItem[] = [
    { name: "HTML", iconSrc: html, iconAlt: "Ícone do HTML" },
    { name: "CSS", iconSrc: css, iconAlt: "Ícone do CSS" },
    { name: "Java Script", iconSrc: js, iconAlt: "Ícone do JavaScript" },
    { name: "Type Script", iconSrc: ts, iconAlt: "Ícone do TypeScript" },
]

const frameworksData: SkillItem[] = [
    { iconSrc: express, iconAlt: "Ícone do Express", name: "Express" },
    { iconSrc: tailwind, iconAlt: "Ícone do Tailwind", name: "Tailwind" },
    { iconSrc: react, iconAlt: "Ícone do React", name: "React" },
    { iconSrc: prisma, iconAlt: "Ícone do Prisma", name: "Prisma" },
    { iconSrc: jest, iconAlt: "Ícone do Jest", name: "Jest" },
]

const toolsData: SkillItem[] = [
    { iconSrc: git, name: "Git", iconAlt: "Ícone do Git" },
    { iconSrc: github, name: "Git Hub", iconAlt: "Ícone do Git Hub" },
    { iconSrc: intellij, name: "Intellij", iconAlt: "Ícone do Intellij" },
    { iconSrc: vsCode, name: "VS Code", iconAlt: "Ícone do VS Code" },
]

const toolsBuildData: SkillItem[] = [
    { iconSrc: docker, name: "Docker", iconAlt: "Ícone do Docker" },
    { iconSrc: builder, name: "Webpack", iconAlt: "Ícone do Webpack" },
    { iconSrc: node, name: "Node.js", iconAlt: "Ícone do Node.js" },
    { iconSrc: vite, name: "Vite", iconAlt: "Ícone do Vite" },
    { iconSrc: database, name: "Banco de dados", iconAlt: "Ícone de Banco de dados" },
]

export function HardSkillsSessions() {
    return (
        <div>
            <SectionTitle color="[#0D2139]" borderColor="#0D2139" weight="bold" size={4} title="Habilidades Técnicas"/>
            
            <div className="pt-4.5 grid gap-8">

                <HardSkillsComponent title="Linguagens de Programação e Marcação" skills={languagesData}/>
                <HardSkillsComponent title="Framework e Bibliotecas" skills={frameworksData}/>
                <HardSkillsComponent title="Ferramentas e IDEs" skills={toolsData}/>
                <HardSkillsComponent title="Ferramentas de Build, Runtime e Virtualização" skills={toolsBuildData}/>
            </div>
        </div>
    )
}