
/* Desta maneira é inserido conteúdo na página através de um script */


/*  Lista Formação Acadêmica */
const formacao = ["Análise e desenvolvimento de sistemas - UNINTER (cursando 2° período)", "Tecnólogo em redes de computadores - UNIP (cursado 1 ano)",
    "Técnico em eletrônica - SENAI/PR (2010-2012)"];

let textoFormacao = "<ul>";

for (let i = 0; i < formacao.length; i++) {
    textoFormacao += "<li>" + formacao[i] + "</li>";
}

textoFormacao += "</ul>";
document.getElementById("listaFormacao").innerHTML = textoFormacao;




/* Lista Cursos */

const cursos = ["Desvendando o 5G - Senai SP (15 horas)","Fibra óptica - FTTx Solution Planning (20 horas)",
"NDG Linux Unhatched na Cisco Networking Academy (8 horas)","Huawei Certified IoT Engineer Online Course HCIA-IoT V2.5 (8 hours)",
"Introduction to Packet Tracer English (10 hours)"];

let textoCursos = "<ul>";

for (let j = 0; j < cursos.length; j++) {
    textoCursos += "<li>" + cursos[j] + "</li>";
}

textoCursos += "</ul>";
document.getElementById("listaCursos").innerHTML = textoCursos;



/* Lista Competências */
const competencias = ["Excel intermediário","Inglês técnico","Manutenção de computadores (hardware/software)",
"Linguagem C++ (microcontroladores)","Node-Red - pequenos projetos"];

let textoCompetencias = "<ul>";

for(let k = 0; k < competencias.length; k++){
    textoCompetencias += "<li>" + competencias[k] + "</li>";
}

textoCompetencias += "</ul>";
document.getElementById("listaCompetencias").innerHTML = textoCompetencias;