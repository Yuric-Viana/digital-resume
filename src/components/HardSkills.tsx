import css from "../assets/languages/css.svg"
import js from "../assets/languages/javascript.svg"
import ts from "../assets/languages/typescript.svg"
import html from "../assets/languages/html.svg"

import react from "../assets/frameworks/react.svg"
import express from "../assets/frameworks/express.svg"
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


import { SectionTitle } from "./SectionTitle";

export function HardSkills() {
    return (
        <div>
            <SectionTitle color="[#0D2139]" borderColor="#0D2139" weight="bold" size={4} title="Habilidades Técnicas"/>
            
            <div className="pt-4.5 grid gap-8">
                <div className="pt-2">
                    <h4 className="text-xl font-semibold border-l-6 border-[#0A92AA] pl-2">Linguagens de Programação e Marcação</h4>
                    <ul className="pt-4 lg:pl-12 grid gap-2.5 md:grid-cols-2 lg:grid-cols-4">
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={html} alt="Ícone do HTML" />
                            <p className="font-bold">HTML</p>
                        </li>
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={css} alt="Ícone do CSS" />
                            <p className="font-bold">CSS</p>
                        </li>
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl flex gap-2 justify-center">
                            <img className="w-6" src={js} alt="Ícone do JavaScript" />
                            <p className="font-bold">JavaScript</p>
                        </li>
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl flex gap-2 justify-center">
                            <img className="w-6" src={ts} alt="Ícone do TypeScript" />
                            <p className="font-bold">Type Script</p>
                        </li>
                    </ul>
                </div>

                <div className="pt-2">
                    <h4 className="text-xl font-semibold border-l-6 border-[#0A92AA] pl-2">Framework e Bibliotecas</h4>
                    <ul className="pt-6 lg:pl-12 grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={express} alt="Ícone do Express" />
                            <p className="font-bold">Express</p>
                        </li>

                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={react} alt="Ícone do React" />
                            <p className="font-bold">React</p>
                        </li>
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={prisma} alt="Ícone do Prisma" />
                            <p className="font-bold">Prisma</p>
                        </li>
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={jest} alt="Ícone do Jest" />
                            <p className="font-bold">Jest</p>
                        </li>
                    </ul>
                </div>

                <div className="pt-2">
                    <h4 className="text-xl font-semibold border-l-6 border-[#0A92AA] pl-2">Ferramentas e IDEs</h4>
                    <ul className="pt-6 lg:pl-12 grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={git} alt="Ícone do Git" />
                            <p className="font-bold">Git</p>
                        </li>

                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={github} alt="Ícone do Git Hub" />
                            <p className="font-bold">Git Hub</p>
                        </li>
                        
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={intellij} alt="Ícone do Intellij" />
                            <p className="font-bold">Intellij</p>
                        </li>
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={vsCode} alt="Ícone do Jest" />
                            <p className="font-bold">VS Code</p>
                        </li>
                    </ul>
                </div>

                <div className="pt-2">
                    <h4 className="text-xl font-semibold border-l-6 border-[#0A92AA] pl-2">Ferramentas de Build, Runtime e Virtualização</h4>
                    <ul className="pt-6 lg:pl-12 grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={docker} alt="Ícone do Docker" />
                            <p className="font-bold">Docker</p>
                        </li>

                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={builder} alt="Ícone do Webpack" />
                            <p className="font-bold">Webpack</p>
                        </li>
                        
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl w-auto px-6 flex gap-2 justify-center">
                            <img className="w-6" src={node} alt="Ícone do Node js" />
                            <p className="font-bold">Node.js</p>
                        </li>
                        <li className="bg-[#EFE5EA] p-2 rounded-4xl flex gap-2 justify-center">
                            <img className="w-6" src={database} alt="Ícone de banco de dados" />
                            <p className="font-bold">Banco de dados</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}