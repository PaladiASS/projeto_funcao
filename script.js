const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você percebe que a temperatura está extremamente alta e o céu tem uma coloração incomum. Ao ouvir notícias, descobre que é consequência das mudanças climáticas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Estamos colhendo o que plantamos.",
                afirmacao: "afirmação de consciência ambiental,"
            },
            {
                texto: "Isso vai passar, é só uma fase da natureza.",
                afirmacao: "afirmação de negação,"
            }
        ]
    },
    {
        enunciado: "Sua professora propõe uma apresentação sobre ações sustentáveis no dia a dia. Como você decide elaborar seu trabalho?",
        alternativas: [
            {
                texto: "Pesquiso projetos reais e consulto fontes confiáveis, inclusive relatórios climáticos.",
                afirmacao: "ato de pesquisa crítica,"
            },
            {
                texto: "Procuro vídeos curtos e resumos em redes sociais para montar algo rápido.",
                afirmacao: "ato de praticidade imediata,"
            }
        ]
    },
    {
        enunciado: "Durante o debate da turma, surge a questão de responsabilidade: indivíduos ou governos? Qual a sua posição?",
        alternativas: [
            {
                texto: "A mudança começa em cada um de nós. Ações individuais importam.",
                afirmacao: "afirmação de protagonismo pessoal,"
            },
            {
                texto: "Os grandes responsáveis são as corporações e os governos, eles precisam agir primeiro.",
                afirmacao: "afirmação de responsabilidade institucional,"
            }
        ]
    },
    {
        enunciado: "A atividade final é criar um cartaz digital que estimule práticas sustentáveis. Como você faz isso?",
        alternativas: [
            {
                texto: "Crio algo autoral com programas de design e mensagens originais.",
                afirmacao: "ato de produção criativa,"
            },
            {
                texto: "Uso um modelo pronto e insiro algumas frases de impacto.",
                afirmacao: "ato de customização prática,"
            }
        ]
    },
    {
        enunciado: "Seu grupo propõe uma campanha de reciclagem na escola, mas nem todos colaboram. O que você faz?",
        alternativas: [
            {
                texto: "Persiste, dando exemplo e tentando envolver os colegas com ações visíveis e motivadoras.",
                afirmacao: "afirmação de perseverança,"
            },
            {
                texto: "Deixa para lá, é frustrante insistir quando ninguém se importa.",
                afirmacao: "afirmação de desmotivação,"
            }
        ]
    },
];

    


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
