import type { CourseSeed } from "./types";

export const COURSE_PT: CourseSeed = {
  slug: "put-treydera",
  title: "O Caminho do Trader",
  description:
    "Um caminho estruturado, desde os conceitos básicos do mercado até a prática em uma conta virtual.",
  modules: [
    {
      title: "Fundamentos do Trading",
      lessons: [
        {
          slug: "chto-takoe-treyding",
          title: "O que é trading",
          summary: "A diferença entre investimento e trading, e os principais participantes do mercado.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Trading é a compra e venda de ativos financeiros (criptomoedas, ações, moedas) com o objetivo de lucrar com a variação de seus preços. Ao contrário do investimento clássico, em que o ativo é mantido por anos na expectativa de valorização, o trader lucra com o próprio movimento do preço — tanto de alta quanto de baixa.",
            },
            {
              type: "paragraph",
              text: "No mercado atuam simultaneamente diferentes participantes: traders de varejo (pessoas físicas), investidores institucionais (fundos, bancos), market makers (que fornecem liquidez) e sistemas algorítmicos. Entender quem realiza as operações e por quê ajuda a explicar por que o preço se move de determinada forma.",
            },
            {
              type: "list",
              items: [
                "O investidor costuma manter o ativo por muito tempo e se baseia no valor fundamental",
                "O trader abre e fecha operações com mais frequência — de minutos a semanas",
                "O trader também pode lucrar com a queda do preço por meio de posições vendidas (short)",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual é a diferença fundamental entre trading e investimento de longo prazo?",
              options: [
                "O trading envolve operações frequentes em horizontes curtos",
                "O trading está disponível apenas para bancos",
                "O trading não envolve risco",
              ],
              correctAnswer: "O trading envolve operações frequentes em horizontes curtos",
            },
            {
              prompt: "Quem, diferentemente do investidor clássico, também pode lucrar com a queda do preço de um ativo?",
              options: ["O trader que abre posições vendidas", "Somente os bancos", "Somente os market makers"],
              correctAnswer: "O trader que abre posições vendidas",
            },
            {
              prompt: "O que os market makers fornecem ao mercado?",
              options: ["Liquidez para as operações de outros participantes", "Regulação governamental", "Uma cotação fixa do ativo"],
              correctAnswer: "Liquidez para as operações de outros participantes",
            },
          ],
        },
        {
          slug: "vidy-rynkov",
          title: "Tipos de mercado",
          summary: "Cripto, forex, ações e mercados de commodities — quais são as diferenças.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "O mercado cripto é negociado 24 horas por dia, sem fins de semana, e é descentralizado — não existe uma única bolsa que determine o preço. O Forex é o maior mercado de pares de moedas do mundo, com liquidez enorme, mas com horários de negociação limitados nos fins de semana. O mercado de ações funciona conforme o horário de bolsas específicas e é fortemente regulado. Os mercados de commodities (petróleo, ouro) refletem o equilíbrio real entre oferta e demanda de matérias-primas.",
            },
            {
              type: "list",
              items: [
                "Cripto: 24/7, alta volatilidade, baixa barreira de entrada",
                "Forex: liquidez enorme, funciona 5 dias por semana",
                "Ações: vinculadas ao negócio da empresa, horário de negociação da bolsa",
                "Commodities: dependem da oferta/demanda real e da geopolítica",
              ],
            },
          ],
          questions: [
            {
              prompt: "Em que o mercado cripto difere do mercado de ações?",
              options: ["Funciona 24/7, sem fins de semana", "É negociado apenas em dias úteis durante o dia", "É totalmente regulado pelo governo"],
              correctAnswer: "Funciona 24/7, sem fins de semana",
            },
            {
              prompt: "O que é negociado no mercado Forex?",
              options: ["Pares de moedas", "Ações de empresas", "Commodities"],
              correctAnswer: "Pares de moedas",
            },
            {
              prompt: "Qual dos mercados listados costuma apresentar a maior volatilidade?",
              options: ["O mercado de criptomoedas", "O mercado de títulos públicos", "Os pares de moedas do G7"],
              correctAnswer: "O mercado de criptomoedas",
            },
          ],
        },
        {
          slug: "kak-chitat-grafik",
          title: "Como ler o gráfico",
          summary: "Eixos, timeframes, preço de abertura/fechamento.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "No gráfico de preços, o eixo vertical representa o preço do ativo, e o eixo horizontal, o tempo. Cada ponto de dados (candle ou barra) contém o preço de abertura, de fechamento, a máxima e a mínima do período escolhido — isso é chamado de timeframe.",
            },
            {
              type: "paragraph",
              text: "Timeframe é o intervalo de tempo representado por um único elemento do gráfico: minuto, hora, dia, semana. A escolha do timeframe depende do estilo de negociação: scalpers observam os gráficos de minutos, enquanto swing traders acompanham os de hora e diários.",
            },
            {
              type: "list",
              items: [
                "Gráfico de linha — o mais simples, mostra apenas o preço de fechamento",
                "Gráfico de candles — mostra open/high/low/close, o mais popular entre os traders",
                "Gráfico de barras — parecido com o de candles, mas visualmente menos claro",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é representado no eixo vertical do gráfico de preços?",
              options: ["O preço do ativo", "O volume de negociação", "O número de traders"],
              correctAnswer: "O preço do ativo",
            },
            {
              prompt: "O que é um timeframe?",
              options: [
                "O período de tempo representado por um único elemento do gráfico",
                "O nome de uma corretora",
                "Um tipo de ordem",
              ],
              correctAnswer: "O período de tempo representado por um único elemento do gráfico",
            },
            {
              prompt: "Por que os traders analisam vários timeframes ao mesmo tempo?",
              options: [
                "Para enxergar o panorama geral da tendência e o ponto exato de entrada ao mesmo tempo",
                "Isso não tem nenhum sentido prático",
                "Para driblar as taxas da corretora",
              ],
              correctAnswer: "Para enxergar o panorama geral da tendência e o ponto exato de entrada ao mesmo tempo",
            },
          ],
        },
        {
          slug: "svechnoy-analiz",
          title: "Análise de candles",
          summary: "Anatomia do candle japonês e padrões básicos de candle.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "O candle japonês é a principal ferramenta de visualização de preço usada pelos traders. Ele é composto pelo corpo (a faixa entre o preço de abertura e o de fechamento) e pelas sombras/pavios acima e abaixo (a máxima e a mínima do período). Um candle verde (de alta) significa que o fechamento ficou acima da abertura; um candle vermelho (de baixa) indica o contrário.",
            },
            {
              type: "paragraph",
              text: "Um único candle já conta a história da disputa entre compradores e vendedores: um corpo longo indica um movimento firme, enquanto sombras longas mostram que o preço foi ativamente \"rejeitado\" na direção oposta.",
            },
          ],
          questions: [
            {
              prompt: "O que o corpo do candle mostra?",
              options: [
                "A faixa entre o preço de abertura e o de fechamento",
                "O volume máximo de negociação",
                "O número de participantes do mercado",
              ],
              correctAnswer: "A faixa entre o preço de abertura e o de fechamento",
            },
            {
              prompt: "O que as sombras (pavios) do candle mostram?",
              options: [
                "A faixa de preço fora do corpo — a máxima e a mínima do período",
                "O volume médio de negociação",
                "O número de operações no dia",
              ],
              correctAnswer: "A faixa de preço fora do corpo — a máxima e a mínima do período",
            },
            {
              prompt: "O que uma sombra inferior longa após uma queda de preço pode indicar?",
              options: [
                "Os compradores empurraram o preço de volta para cima com força — uma reversão é possível",
                "O mercado com certeza vai continuar caindo",
                "O volume de negociação foi zero",
              ],
              correctAnswer: "Os compradores empurraram o preço de volta para cima com força — uma reversão é possível",
            },
          ],
        },
        {
          slug: "podderzhka-i-soprotivlenie",
          title: "Suporte e resistência",
          summary: "Como encontrar níveis-chave no gráfico.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "O nível de suporte é o preço em que, no passado, os compradores repetidamente interromperam uma queda. O nível de resistência, por sua vez, é o preço em que os vendedores interromperam uma alta. Esses níveis formam a \"memória\" do mercado: o preço costuma reagir a eles repetidamente.",
            },
            {
              type: "paragraph",
              text: "Um princípio importante: após o rompimento, o nível costuma trocar de papel — uma antiga resistência se torna suporte, e vice-versa. Níveis confiáveis são traçados não a partir de um único ponto, mas de vários toques do preço.",
            },
          ],
          questions: [
            {
              prompt: "O que é um nível de suporte?",
              options: [
                "O preço em que os compradores historicamente interromperam a queda",
                "O preço de abertura da bolsa",
                "A taxa cobrada pela operação",
              ],
              correctAnswer: "O preço em que os compradores historicamente interromperam a queda",
            },
            {
              prompt: "O que costuma acontecer com um nível de resistência depois que ele é rompido para cima?",
              options: [
                "Costuma se tornar um novo suporte",
                "Desaparece e deixa de influenciar o preço",
                "O preço é obrigado a voltar imediatamente",
              ],
              correctAnswer: "Costuma se tornar um novo suporte",
            },
            {
              prompt: "Como traçar corretamente níveis confiáveis no gráfico?",
              options: [
                "Com base em vários toques do preço, e não em um único ponto",
                "Estritamente no centro do gráfico",
                "Apenas no timeframe de um minuto",
              ],
              correctAnswer: "Com base em vários toques do preço, e não em um único ponto",
            },
          ],
        },
        {
          slug: "trend-i-ego-struktura",
          title: "A tendência e sua estrutura",
          summary: "Tendência de alta, de baixa e lateral, e a estrutura de topos/fundos.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Uma tendência de alta é formada por uma sequência de topos mais altos (Higher High) e fundos mais altos (Higher Low). A tendência de baixa é o espelho disso: Lower High e Lower Low. Quando o preço se move dentro de uma faixa sem direção clara, isso é chamado de tendência lateral ou range.",
            },
            {
              type: "paragraph",
              text: "Operar na direção da tendência oferece, estatisticamente, mais chances de sucesso do que tentar pegar uma reversão contra ela — daí a conhecida regra \"a tendência é sua amiga\".",
            },
          ],
          questions: [
            {
              prompt: "Do que é formada uma tendência de alta?",
              options: [
                "De uma sequência de topos e fundos cada vez mais altos",
                "De candles de mesma altura",
                "Apenas de candles verdes consecutivos",
              ],
              correctAnswer: "De uma sequência de topos e fundos cada vez mais altos",
            },
            {
              prompt: "O que é uma tendência lateral (range)?",
              options: [
                "O movimento do preço dentro de uma faixa, sem direção clara",
                "Uma queda brusca no preço",
                "Um período de suspensão das negociações na bolsa",
              ],
              correctAnswer: "O movimento do preço dentro de uma faixa, sem direção clara",
            },
            {
              prompt: "Por que se diz que \"a tendência é sua amiga\"?",
              options: [
                "Operar a favor da tendência oferece estatisticamente mais chances de sucesso",
                "A tendência nunca muda de direção",
                "É apenas uma figura de linguagem sem sentido prático",
              ],
              correctAnswer: "Operar a favor da tendência oferece estatisticamente mais chances de sucesso",
            },
          ],
        },
        {
          slug: "obyom-i-likvidnost",
          title: "Volume e liquidez",
          summary: "Por que acompanhar o volume e o que é a liquidez de mercado.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "O volume de negociação mostra quanto de um ativo foi comprado e vendido em determinado período. Movimentos fortes de preço confirmados por alto volume são considerados mais confiáveis do que movimentos semelhantes com volume baixo.",
            },
            {
              type: "paragraph",
              text: "Liquidez é a capacidade de comprar ou vender um ativo rapidamente e sem afetar muito o seu preço. Em ativos de baixa liquidez, até mesmo uma operação pequena pode movimentar significativamente o preço e causar slippage — a execução da ordem a um preço pior do que o esperado.",
            },
          ],
          questions: [
            {
              prompt: "O que indica uma alta de preço acompanhada de baixo volume de negociação?",
              options: [
                "O movimento é fraco e pode não ser confirmado",
                "É o sinal de entrada mais confiável que existe",
                "A liquidez do ativo está no máximo",
              ],
              correctAnswer: "O movimento é fraco e pode não ser confirmado",
            },
            {
              prompt: "O que é liquidez de mercado?",
              options: [
                "A facilidade de comprar/vender um ativo sem afetar muito o seu preço",
                "A quantidade total de moedas em circulação",
                "A taxa cobrada pela corretora na operação",
              ],
              correctAnswer: "A facilidade de comprar/vender um ativo sem afetar muito o seu preço",
            },
            {
              prompt: "O que ameaça o trader ao operar um ativo de baixa liquidez?",
              options: [
                "Um slippage grande na execução da operação",
                "A ausência total de taxas",
                "Lucro garantido",
              ],
              correctAnswer: "Um slippage grande na execução da operação",
            },
          ],
        },
        {
          slug: "risk-menedzhment-osnovy",
          title: "Gestão de risco: fundamentos",
          summary: "Tamanho da posição, stop-loss, relação risco/retorno.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "A gestão de risco é o que diferencia um trader profissional de um apostador de cassino. O stop-loss é um nível definido com antecedência no qual a operação é encerrada com uma perda limitada, caso o mercado se mova contra a previsão.",
            },
            {
              type: "paragraph",
              text: "A maioria dos traders experientes arrisca no máximo 1–2% do depósito em uma única operação — isso permite suportar uma sequência de operações perdedoras sem perder todo o capital. A relação risco/retorno (risk/reward) mostra quantas vezes o lucro potencial supera o risco: por exemplo, 1:3 significa que o lucro é três vezes maior do que a possível perda.",
            },
            {
              type: "list",
              items: [
                "O stop-loss é definido antes de entrar na operação, não depois",
                "O tamanho da posição é calculado a partir do risco em dinheiro, e não o contrário",
                "Mesmo uma estratégia lucrativa pode quebrar o trader sem controle de risco",
              ],
            },
          ],
          questions: [
            {
              prompt: "Para que serve o stop-loss?",
              options: [
                "Para limitar a perda da operação com antecedência",
                "Para aumentar o tamanho da posição",
                "Para garantir lucro",
              ],
              correctAnswer: "Para limitar a perda da operação com antecedência",
            },
            {
              prompt: "Qual percentual do depósito costuma ser recomendado arriscar em uma única operação?",
              options: ["1–2%", "25–30%", "O depósito inteiro"],
              correctAnswer: "1–2%",
            },
            {
              prompt: "O que significa uma relação risco/retorno de 1:3?",
              options: [
                "O lucro potencial é 3 vezes maior que o risco",
                "O risco é 3 vezes maior que o lucro",
                "A operação será encerrada em 3 horas",
              ],
              correctAnswer: "O lucro potencial é 3 vezes maior que o risco",
            },
          ],
        },
      ],
    },
    {
      title: "Análise Técnica",
      lessons: [
        {
          slug: "skolzyashchie-srednie",
          title: "Indicadores: médias móveis",
          summary: "SMA e EMA — como usá-las para identificar a tendência.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "A média móvel (Moving Average) suaviza o preço ao longo de um período escolhido, ajudando a enxergar a direção geral da tendência sem o \"ruído\" de candles individuais. A SMA (simples) dá peso igual a todos os preços do período, enquanto a EMA (exponencial) reage com mais força aos preços mais recentes.",
            },
            {
              type: "paragraph",
              text: "Quando o preço está acima da média móvel, a tendência costuma ser considerada de alta; abaixo dela, de baixa. O cruzamento entre uma média móvel curta e uma longa (por exemplo, a MA50 cruzando a MA200 de baixo para cima) é um sinal popular conhecido como \"cruz dourada\" (golden cross).",
            },
          ],
          questions: [
            {
              prompt: "Qual é a diferença entre SMA e EMA?",
              options: [
                "A EMA dá mais peso aos preços mais recentes",
                "A SMA só funciona no gráfico de minutos",
                "Não há diferença, é a mesma coisa",
              ],
              correctAnswer: "A EMA dá mais peso aos preços mais recentes",
            },
            {
              prompt: "O que indica o preço estar acima da média móvel?",
              options: ["A tendência é provavelmente de alta", "O ativo está com certeza sobrevalorizado", "O volume de negociação é zero"],
              correctAnswer: "A tendência é provavelmente de alta",
            },
            {
              prompt: "O que se chama de \"cruz dourada\" (golden cross)?",
              options: [
                "O cruzamento da MA curta acima da longa — um sinal de alta",
                "O momento de listagem de uma nova moeda",
                "O cruzamento do preço com a linha zero",
              ],
              correctAnswer: "O cruzamento da MA curta acima da longa — um sinal de alta",
            },
          ],
        },
        {
          slug: "rsi-i-oscillyatory",
          title: "RSI e osciladores",
          summary: "Sobrecompra, sobrevenda e divergências.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "O RSI (Relative Strength Index, Índice de Força Relativa) é um oscilador que mede a velocidade e a intensidade da variação de preço em uma escala de 0 a 100. Valores acima de 70 costumam ser considerados zona de sobrecompra, e abaixo de 30, zona de sobrevenda.",
            },
            {
              type: "paragraph",
              text: "A divergência ocorre quando o preço e o RSI se movem em direções diferentes: por exemplo, o preço atinge uma nova máxima, mas o RSI não. Isso costuma ser interpretado como um aviso antecipado de enfraquecimento da tendência e de uma possível reversão.",
            },
          ],
          questions: [
            {
              prompt: "Em que escala o indicador RSI opera?",
              options: ["De 0 a 100", "De -1 a 1", "De 0 a 10000"],
              correctAnswer: "De 0 a 100",
            },
            {
              prompt: "O que geralmente significa um RSI acima de 70?",
              options: ["O ativo está em zona de sobrecompra", "É impossível vender o ativo", "O volume de negociação caiu a zero"],
              correctAnswer: "O ativo está em zona de sobrecompra",
            },
            {
              prompt: "O que é a divergência do RSI?",
              options: [
                "O preço e o indicador se movem em direções diferentes — um sinal de possível reversão",
                "A coincidência total entre o movimento do preço e do indicador",
                "Uma falha técnica do indicador",
              ],
              correctAnswer: "O preço e o indicador se movem em direções diferentes — um sinal de possível reversão",
            },
          ],
        },
        {
          slug: "urovni-fibonachchi",
          title: "Níveis de Fibonacci",
          summary: "Retrações e extensões de Fibonacci na marcação do gráfico.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Os níveis de retração de Fibonacci (23,6%, 38,2%, 50%, 61,8%, 78,6%) são traçados entre o início e o fim de um movimento de impulso e ajudam a estimar onde o preço pode interromper o recuo antes de retomar a tendência. Muitos traders consideram o nível de 61,8% o mais importante.",
            },
            {
              type: "paragraph",
              text: "As extensões de Fibonacci, diferentemente das retrações, são usadas para projetar alvos de preço além do impulso inicial — ou seja, até onde o preço pode ir em seguida.",
            },
          ],
          questions: [
            {
              prompt: "Qual nível de Fibonacci muitos traders consideram o mais importante para a retração?",
              options: ["61,8%", "10%", "100%"],
              correctAnswer: "61,8%",
            },
            {
              prompt: "Para que servem as retrações de Fibonacci?",
              options: [
                "Para buscar pontos de entrada durante o recuo dentro da tendência",
                "Para calcular a taxa da corretora",
                "Para determinar o horário exato de publicação de notícias",
              ],
              correctAnswer: "Para buscar pontos de entrada durante o recuo dentro da tendência",
            },
            {
              prompt: "Para que servem as extensões de Fibonacci?",
              options: [
                "Para definir alvos de preço além do impulso",
                "Para definir o tamanho do stop-loss em percentual",
                "Para mostrar o volume de negociação",
              ],
              correctAnswer: "Para definir alvos de preço além do impulso",
            },
          ],
        },
        {
          slug: "patterny-razvorota",
          title: "Padrões de reversão",
          summary: "Ombro-cabeça-ombro, topo/fundo duplo.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "O padrão \"ombro-cabeça-ombro\" (head and shoulders) é um dos sinais mais conhecidos de reversão de uma tendência de alta: o preço forma três picos, em que o do meio (cabeça) é mais alto que os dois vizinhos (ombros). O topo/fundo duplo é um padrão de sentido semelhante, formado por dois picos ou vales aproximadamente iguais.",
            },
            {
              type: "paragraph",
              text: "O padrão só é considerado confirmado após o rompimento da \"linha do pescoço\" (neckline) — o nível que conecta as mínimas locais entre os picos. Um rompimento sem volume costuma se revelar falso.",
            },
          ],
          questions: [
            {
              prompt: "O que o padrão \"ombro-cabeça-ombro\" sinaliza?",
              options: [
                "A provável reversão de uma tendência de alta",
                "A continuação garantida da alta",
                "A suspensão das negociações na bolsa",
              ],
              correctAnswer: "A provável reversão de uma tendência de alta",
            },
            {
              prompt: "O que confirma a realização do padrão \"topo duplo\"?",
              options: ["O rompimento da linha do pescoço para baixo", "O surgimento de um terceiro pico", "O aumento de volume no próprio topo"],
              correctAnswer: "O rompimento da linha do pescoço para baixo",
            },
            {
              prompt: "Por que o volume é importante para confirmar o rompimento de um padrão?",
              options: [
                "Sem volume, o rompimento costuma ser falso",
                "O volume não influencia os padrões de forma alguma",
                "O volume só é necessário no timeframe diário",
              ],
              correctAnswer: "Sem volume, o rompimento costuma ser falso",
            },
          ],
        },
        {
          slug: "patterny-prodolzheniya",
          title: "Padrões de continuação",
          summary: "Bandeiras, triângulos, retângulos.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Os padrões de continuação — bandeiras, triângulos, retângulos — representam uma pausa ou consolidação dentro de uma tendência já existente. Ao contrário dos padrões de reversão, eles costumam se resolver na direção do movimento anterior.",
            },
            {
              type: "paragraph",
              text: "A saída do preço dessa consolidação costuma vir acompanhada de um aumento de volume, o que ajuda a diferenciar um rompimento verdadeiro de um falso.",
            },
          ],
          questions: [
            {
              prompt: "Em que direção o padrão \"bandeira\" costuma se resolver com mais frequência?",
              options: ["Na direção da tendência anterior", "Sempre estritamente para baixo", "Em uma direção aleatória"],
              correctAnswer: "Na direção da tendência anterior",
            },
            {
              prompt: "O que triângulos, bandeiras e retângulos têm em comum?",
              options: [
                "São pausas/consolidações dentro da tendência",
                "São sempre sinais de reversão",
                "Só ocorrem no forex",
              ],
              correctAnswer: "São pausas/consolidações dentro da tendência",
            },
            {
              prompt: "O que costuma acompanhar uma saída verdadeira de um triângulo?",
              options: ["Um aumento de volume", "A ausência total de volume", "A suspensão das negociações"],
              correctAnswer: "Um aumento de volume",
            },
          ],
        },
        {
          slug: "multitaymfreym-analiz",
          title: "Timeframes e análise multitimeframe",
          summary: "Como alinhar sinais em diferentes timeframes.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "A análise multitimeframe é uma abordagem \"de cima para baixo\": primeiro identifica-se a tendência geral em um timeframe maior (por exemplo, o diário), e depois busca-se o ponto de entrada em um timeframe menor (por exemplo, o de 1 hora ou 15 minutos).",
            },
            {
              type: "paragraph",
              text: "Ignorar o timeframe maior é um erro comum entre iniciantes: uma operação pode parecer ótima no gráfico de 5 minutos, mas estar contra a tendência diária dominante, o que reduz drasticamente as chances de sucesso.",
            },
          ],
          questions: [
            {
              prompt: "Por qual timeframe normalmente se começa a análise no método \"de cima para baixo\"?",
              options: ["Pelo maior (por exemplo, o diário)", "Pelo de um minuto", "Por qualquer um, aleatoriamente"],
              correctAnswer: "Pelo maior (por exemplo, o diário)",
            },
            {
              prompt: "Para que serve o timeframe menor na análise multitimeframe?",
              options: ["Para a entrada precisa na operação", "Para substituir completamente o timeframe maior", "Para calcular a taxa da corretora"],
              correctAnswer: "Para a entrada precisa na operação",
            },
            {
              prompt: "O que pode acontecer ao se ignorar o timeframe maior?",
              options: [
                "Operar contra a tendência principal",
                "Um aumento automático de lucro",
                "Nada, isso não faz diferença",
              ],
              correctAnswer: "Operar contra a tendência principal",
            },
          ],
        },
        {
          slug: "psikhologiya-treydera",
          title: "Psicologia do trader",
          summary: "Controle emocional, disciplina e diário de trading.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Medo e ganância são as duas emoções que mais frequentemente destroem estratégias de trading. O medo leva a fechar operações lucrativas cedo demais ou a nem sequer entrar no mercado; a ganância leva a manter a posição além do planejado ou a aumentar o risco depois de uma sequência de acertos.",
            },
            {
              type: "paragraph",
              text: "O \"revenge trading\" — a tentativa de recuperar imediatamente uma perda por meio de uma série de operações emocionais e sem análise — é uma das formas mais rápidas de zerar o depósito. Manter um diário de trading ajuda a analisar os erros e a desenvolver disciplina aos poucos.",
            },
          ],
          questions: [
            {
              prompt: "O que é \"revenge trading\"?",
              options: [
                "A tentativa de recuperar imediatamente uma perda com operações emocionais",
                "Uma estratégia oficial de fundos de hedge",
                "A devolução da taxa pela corretora",
              ],
              correctAnswer: "A tentativa de recuperar imediatamente uma perda com operações emocionais",
            },
            {
              prompt: "Por que o trader deve manter um diário de trading?",
              options: [
                "Para analisar erros e aprimorar a estratégia",
                "É uma exigência da corretora",
                "Para reduzir impostos",
              ],
              correctAnswer: "Para analisar erros e aprimorar a estratégia",
            },
            {
              prompt: "Qual emoção mais frequentemente leva a manter uma posição perdedora por tempo demais?",
              options: ["A esperança de uma reversão e o medo de assumir o prejuízo", "O tédio", "A confiança de que a corretora está certa"],
              correctAnswer: "A esperança de uma reversão e o medo de assumir o prejuízo",
            },
          ],
        },
        {
          slug: "pervaya-virtualnaya-sdelka",
          title: "A primeira operação virtual",
          summary: "Aplicando tudo o que foi aprendido em um saldo virtual.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Chegou a hora de unir toda a teoria: antes de abrir uma operação, defina o ponto de entrada (com base em níveis e na estrutura da tendência), o stop-loss (a perda máxima aceitável) e o alvo de lucro — tudo isso antes de clicar em Long ou Short.",
            },
            {
              type: "paragraph",
              text: "A seção \"Mercado Virtual\" da ASTREX permite praticar todo o processo com dados simulados, sem risco de dinheiro real — essa é a melhor forma de desenvolver disciplina antes de partir para o trading com capital real.",
            },
          ],
          questions: [
            {
              prompt: "O que é preciso definir antes de abrir uma operação?",
              options: [
                "O ponto de entrada, o stop-loss e o alvo de lucro",
                "Apenas o ponto de entrada",
                "Não é preciso definir nada com antecedência",
              ],
              correctAnswer: "O ponto de entrada, o stop-loss e o alvo de lucro",
            },
            {
              prompt: "Por que praticar primeiro com um saldo virtual?",
              options: [
                "Para testar a estratégia sem arriscar dinheiro real",
                "O saldo virtual gera mais lucro",
                "É uma exigência legal obrigatória",
              ],
              correctAnswer: "Para testar a estratégia sem arriscar dinheiro real",
            },
            {
              prompt: "O que é importante fazer logo após fechar uma operação?",
              options: [
                "Analisá-la e registrar o resultado no diário",
                "Abrir imediatamente uma operação oposta",
                "Excluir o histórico da operação",
              ],
              correctAnswer: "Analisá-la e registrar o resultado no diário",
            },
          ],
        },
      ],
    },
    {
      title: "Macroeconomia e o Mercado Cripto",
      lessons: [
        {
          slug: "frs-i-protsentnye-stavki",
          title: "O Fed e as taxas de juros",
          summary: "Como as decisões do Fed dos EUA sobre a taxa de juros movimentam todo o mercado, incluindo as criptomoedas.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "O Fed (Federal Reserve, o banco central dos EUA) define a taxa básica de juros, da qual depende o custo do dinheiro em toda a economia mundial. Quando a taxa sobe, o crédito fica mais caro, e os investidores migram de ativos de risco — ações e criptomoedas — para títulos e depósitos.",
            },
            {
              type: "paragraph",
              text: "Quando o Fed reduz a taxa ou sinaliza um afrouxamento da política monetária, os ativos de risco costumam subir: o dinheiro fica mais barato, e os investidores voltam a assumir risco em busca de retorno.",
            },
            {
              type: "list",
              items: [
                "As reuniões do FOMC acontecem 8 vezes ao ano — são datas-chave para o mercado",
                "O mercado reage não apenas à decisão em si, mas também ao tom do discurso (\"hawkish\" ou \"dovish\")",
                "O mercado cripto é especialmente sensível à taxa de juros devido à alta proporção de capital especulativo",
              ],
            },
          ],
          questions: [
            {
              prompt: "Como o mercado costuma reagir a uma alta na taxa do Fed?",
              options: [
                "Os ativos de risco (incluindo cripto) costumam cair",
                "O mercado cripto não reage de forma alguma à taxa de juros",
                "O bitcoin sempre sobe quando a taxa aumenta",
              ],
              correctAnswer: "Os ativos de risco (incluindo cripto) costumam cair",
            },
            {
              prompt: "O que é o FOMC?",
              options: [
                "O comitê do Fed que decide sobre a taxa de juros",
                "A maior corretora de criptomoedas dos EUA",
                "Um índice de volatilidade do mercado",
              ],
              correctAnswer: "O comitê do Fed que decide sobre a taxa de juros",
            },
            {
              prompt: "Como se chama, na gíria do mercado, o afrouxamento da política monetária?",
              options: ["Política \"dovish\"", "Política \"hawkish\"", "Emissão \"neutra\""],
              correctAnswer: "Política \"dovish\"",
            },
          ],
        },
        {
          slug: "inflyatsiya-i-cpi",
          title: "Inflação e o índice CPI",
          summary: "Por que os dados de inflação movimentam o mercado mais do que muitas outras notícias.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "O CPI (índice de preços ao consumidor) é o principal indicador de inflação nos EUA, publicado mensalmente. Se a inflação vem acima do esperado, o mercado passa a precificar uma política mais rígida do Fed — os ativos de risco caem. Se a inflação desacelera, o mercado comemora e sobe.",
            },
            {
              type: "list",
              items: [
                "A divulgação do CPI é um dos momentos de maior volatilidade do mês no mercado cripto",
                "O que importa não é o número em si, mas a diferença em relação à previsão dos analistas",
                "Além do CPI, existe o PCE — o indicador de inflação preferido do Fed",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que o índice CPI mede?",
              options: [
                "A variação de preços de uma cesta de bens e serviços de consumo",
                "A cotação do bitcoin frente ao dólar",
                "O volume de negociação na bolsa",
              ],
              correctAnswer: "A variação de preços de uma cesta de bens e serviços de consumo",
            },
            {
              prompt: "Como o mercado costuma reagir quando o CPI sai acima do previsto?",
              options: [
                "Os ativos de risco costumam cair",
                "O mercado nunca reage ao CPI",
                "O mercado cripto suspende as negociações automaticamente",
              ],
              correctAnswer: "Os ativos de risco costumam cair",
            },
            {
              prompt: "Qual indicador de inflação é considerado o preferido do próprio Fed?",
              options: ["PCE", "DXY", "RSI"],
              correctAnswer: "PCE",
            },
          ],
        },
        {
          slug: "indeks-dollara-dxy",
          title: "Índice do dólar (DXY)",
          summary: "A correlação inversa entre o dólar e as criptomoedas.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "O DXY mede a força do dólar americano em relação a uma cesta de outras moedas. Historicamente, o DXY e o bitcoin costumam se mover em direções opostas: um dólar forte pressiona as criptomoedas e outros ativos de risco, enquanto um dólar fraco favorece a alta deles.",
            },
            {
              type: "paragraph",
              text: "Traders experientes mantêm o gráfico do DXY em um painel separado, ao lado do BTC — uma alta brusca do índice do dólar costuma antecipar uma correção no mercado cripto antes mesmo que isso apareça no próprio gráfico do bitcoin.",
            },
          ],
          questions: [
            {
              prompt: "O que o índice DXY mede?",
              options: [
                "A força do dólar americano em relação a uma cesta de outras moedas",
                "A volatilidade do bitcoin",
                "A capitalização total do mercado cripto",
              ],
              correctAnswer: "A força do dólar americano em relação a uma cesta de outras moedas",
            },
            {
              prompt: "Como costumam se relacionar os movimentos do DXY e do bitcoin?",
              options: [
                "Costumam se mover em direções opostas",
                "Sempre se movem de forma absolutamente sincronizada",
                "Não têm nenhuma relação",
              ],
              correctAnswer: "Costumam se mover em direções opostas",
            },
            {
              prompt: "O que uma alta brusca do índice DXY pode sinalizar?",
              options: [
                "Uma provável correção no mercado cripto",
                "Uma alta garantida do bitcoin",
                "Uma falha técnica na corretora",
              ],
              correctAnswer: "Uma provável correção no mercado cripto",
            },
          ],
        },
        {
          slug: "korrelyatsiya-s-fondovym-rynkom",
          title: "Correlação com o mercado de ações",
          summary: "A relação entre o bitcoin, o índice Nasdaq e o apetite por risco.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Nos últimos anos, o bitcoin tem se comportado cada vez mais como um ativo de risco de tecnologia, e não como \"ouro digital\" — seu preço frequentemente se correlaciona com o índice Nasdaq. Quando os investidores compram ações de empresas de tecnologia com apetite, o mercado cripto costuma subir também, e vice-versa.",
            },
            {
              type: "paragraph",
              text: "Essa correlação não é constante: durante eventos específicos do universo cripto (invasão de uma corretora, notícias regulatórias, uma grande listagem), o mercado cripto pode se mover de forma independente das ações.",
            },
          ],
          questions: [
            {
              prompt: "Com qual classe de ativos o bitcoin mais se correlaciona nos últimos anos?",
              options: [
                "Com ações de tecnologia (Nasdaq)",
                "Com títulos públicos",
                "Não se correlaciona com nada",
              ],
              correctAnswer: "Com ações de tecnologia (Nasdaq)",
            },
            {
              prompt: "O que significa uma alta correlação entre BTC e Nasdaq?",
              options: [
                "Eles costumam se mover na mesma direção",
                "Eles são obrigados a se mover em direções opostas",
                "O BTC substitui completamente o índice Nasdaq",
              ],
              correctAnswer: "Eles costumam se mover na mesma direção",
            },
            {
              prompt: "O que pode enfraquecer temporariamente a correlação do BTC com o mercado de ações?",
              options: [
                "Eventos específicos do universo cripto (invasão de corretora, notícias regulatórias)",
                "Um dia de folga na bolsa",
                "A mudança de fuso horário",
              ],
              correctAnswer: "Eventos específicos do universo cripto (invasão de corretora, notícias regulatórias)",
            },
          ],
        },
        {
          slug: "ekonomicheskiy-kalendar",
          title: "Calendário econômico e notícias",
          summary: "Quais eventos é indispensável acompanhar antes de operar.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "O calendário econômico é a programação de divulgação dos principais dados macroeconômicos: reuniões do Fed, relatórios de inflação (CPI), do mercado de trabalho (NFP) e outros indicadores capazes de elevar bruscamente a volatilidade.",
            },
            {
              type: "paragraph",
              text: "Os eventos do calendário costumam ser marcados por nível de impacto (alto/médio/baixo). Antes de divulgações de alta importância, traders experientes costumam reduzir o risco, diminuir o tamanho das posições ou simplesmente evitar novas operações — a volatilidade nesses momentos pode ser imprevisível.",
            },
          ],
          questions: [
            {
              prompt: "Para que o trader precisa do calendário econômico?",
              options: [
                "Para acompanhar as datas de notícias importantes que afetam o mercado",
                "Para planejar férias pessoais",
                "Para substituir completamente a análise técnica",
              ],
              correctAnswer: "Para acompanhar as datas de notícias importantes que afetam o mercado",
            },
            {
              prompt: "O que é o NFP?",
              options: [
                "O relatório de empregos do setor não agrícola dos EUA",
                "Um novo protocolo criptográfico",
                "O índice de medo e ganância",
              ],
              correctAnswer: "O relatório de empregos do setor não agrícola dos EUA",
            },
            {
              prompt: "O que é sensato fazer antes da divulgação de uma notícia de alta importância?",
              options: [
                "Reduzir o risco ou evitar novas operações",
                "Aumentar ao máximo o tamanho da posição",
                "Desativar os stop-loss",
              ],
              correctAnswer: "Reduzir o risco ou evitar novas operações",
            },
          ],
        },
      ],
    },
    {
      title: "Conceitos de Smart Money",
      lessons: [
        {
          slug: "imbalans-i-fvg",
          title: "Imbalance e Fair Value Gap (FVG)",
          summary: "Zonas de ineficiência de preço e como encontrá-las no gráfico.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O imbalance é uma zona do gráfico em que o preço se moveu rápido demais em uma direção, sem dar aos dois lados (compradores e vendedores) a chance de negociar plenamente. O mercado costuma \"voltar para fechar\" essas zonas mais tarde.",
            },
            {
              type: "paragraph",
              text: "O Fair Value Gap (FVG) é um caso específico de imbalance formado por três candles: entre o pavio do primeiro e o pavio do terceiro candle fica um vão visível. É uma das zonas de interesse mais populares dentro do Smart Money Concepts.",
            },
            { type: "diagram", diagram: "fvg", caption: "FVG de alta clássico em três candles" },
            { type: "diagram", diagram: "imbalance", caption: "Uma zona de imbalance mais ampla em um único candle de impulso" },
          ],
          questions: [
            {
              prompt: "O que é o Fair Value Gap (FVG)?",
              options: [
                "O vão entre os pavios do 1º e do 3º candle causado por um impulso brusco",
                "Um nível de stop-loss",
                "Um indicador de volume",
              ],
              correctAnswer: "O vão entre os pavios do 1º e do 3º candle causado por um impulso brusco",
            },
            {
              prompt: "O que o mercado costuma fazer com a zona de imbalance mais tarde?",
              options: [
                "Retorna e a \"fecha\" parcial ou totalmente",
                "Nunca mais a toca",
                "Remove-a automaticamente do gráfico",
              ],
              correctAnswer: "Retorna e a \"fecha\" parcial ou totalmente",
            },
            {
              prompt: "Quantos candles compõem o padrão clássico de FVG?",
              options: ["Três", "Um", "Sete"],
              correctAnswer: "Três",
            },
          ],
        },
        {
          slug: "likvidnost-na-rynke",
          title: "Liquidez e seus tipos",
          summary: "Onde no gráfico se acumulam as ordens pendentes dos grandes players.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Liquidez é o acúmulo de ordens pendentes (stop-loss e ordens limitadas) em níveis de preço específicos. Ela costuma se concentrar além de topos/fundos iguais e de níveis óbvios de suporte/resistência, que todo mundo enxerga.",
            },
            {
              type: "list",
              items: [
                "Liquidez buy-side — stops de vendidos (short) acima dos topos locais",
                "Liquidez sell-side — stops de comprados (long) abaixo dos fundos locais",
                "Os grandes players precisam de liquidez para montar ou encerrar uma posição sem um slippage grande",
              ],
            },
          ],
          questions: [
            {
              prompt: "Onde a liquidez costuma se concentrar no gráfico?",
              options: [
                "Perto de topos/fundos iguais e de níveis óbvios de suporte/resistência",
                "Estritamente no meio do range, sem motivo",
                "Apenas em candles de notícias",
              ],
              correctAnswer: "Perto de topos/fundos iguais e de níveis óbvios de suporte/resistência",
            },
            {
              prompt: "O que é liquidez buy-side?",
              options: [
                "Os stops de vendidos, localizados acima dos topos locais",
                "Os stops de comprados abaixo dos fundos locais",
                "A taxa da corretora sobre a compra",
              ],
              correctAnswer: "Os stops de vendidos, localizados acima dos topos locais",
            },
            {
              prompt: "Por que os grandes players precisam de liquidez no mercado?",
              options: [
                "Para montar ou encerrar uma posição grande sem um slippage significativo",
                "Para paralisar completamente as negociações",
                "Isso não tem relação com os grandes players",
              ],
              correctAnswer: "Para montar ou encerrar uma posição grande sem um slippage significativo",
            },
          ],
        },
        {
          slug: "snyatie-likvidnosti",
          title: "Captura de liquidez (Liquidity Sweep)",
          summary: "Por que o preço primeiro varre os stops e só depois reverte.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O Liquidity Sweep é a situação em que o preço perfura deliberadamente um nível com liquidez (por exemplo, topos iguais), captura as ordens pendentes e, em seguida, reverte bruscamente na direção oposta — para onde o grande movimento realmente pretendia ir desde o início.",
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "Perfuração de topos iguais seguida de uma reversão brusca para baixo" },
            {
              type: "paragraph",
              text: "Entender o sweep ajuda a não cair na armadilha: o rompimento de um nível, por si só, não garante a continuação do movimento naquela direção — muitas vezes é apenas uma caça à liquidez.",
            },
          ],
          questions: [
            {
              prompt: "O que costuma acontecer com o preço logo após um liquidity sweep?",
              options: [
                "Uma reversão brusca na direção oposta à da perfuração",
                "O preço sempre continua na direção da perfuração",
                "Nada, o volume cai a zero",
              ],
              correctAnswer: "Uma reversão brusca na direção oposta à da perfuração",
            },
            {
              prompt: "Qual zona costuma ser o alvo do liquidity sweep?",
              options: [
                "Uma zona com ordens pendentes — por exemplo, topos/fundos iguais",
                "O meio de um range aleatório, sem níveis",
                "Uma zona com liquidez zero",
              ],
              correctAnswer: "Uma zona com ordens pendentes — por exemplo, topos/fundos iguais",
            },
            {
              prompt: "Qual erro é típico de iniciantes ao ver um sweep?",
              options: [
                "Entrar na direção do rompimento sem considerar uma possível reversão",
                "Fechar uma posição lucrativa cedo demais",
                "Definir o stop-loss antes de entrar na operação",
              ],
              correctAnswer: "Entrar na direção do rompimento sem considerar uma possível reversão",
            },
          ],
        },
        {
          slug: "struktura-trenda-bos-choch",
          title: "Estrutura da tendência: BOS e CHoCH",
          summary: "Como usar topos e fundos para saber se a tendência ainda está viva ou já foi rompida.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Uma tendência de alta é formada por uma sequência de Higher High (HH) e Higher Low (HL). Enquanto essa estrutura se mantém, a tendência é considerada válida.",
            },
            {
              type: "paragraph",
              text: "O Break of Structure (BOS) é o rompimento do topo anterior, confirmando a continuação da tendência. O Change of Character (CHoCH) é o rompimento na direção oposta, o primeiro sinal de uma possível reversão da tendência.",
            },
            { type: "diagram", diagram: "trend-structure", caption: "Estrutura HH/HL de uma tendência de alta e o BOS" },
          ],
          questions: [
            {
              prompt: "O que o Change of Character (CHoCH) sinaliza?",
              options: [
                "Uma possível reversão da tendência atual",
                "A continuação da tendência com aceleração",
                "A ausência de liquidez no mercado",
              ],
              correctAnswer: "Uma possível reversão da tendência atual",
            },
            {
              prompt: "O que o Break of Structure (BOS) confirma?",
              options: [
                "A continuação da tendência atual",
                "A suspensão automática das negociações",
                "O cancelamento de todos os níveis anteriores",
              ],
              correctAnswer: "A continuação da tendência atual",
            },
            {
              prompt: "Do que é formada a estrutura de uma tendência de alta?",
              options: [
                "De Higher High e Higher Low",
                "De Lower High e Lower Low",
                "De candles de mesma altura",
              ],
              correctAnswer: "De Higher High e Higher Low",
            },
          ],
        },
        {
          slug: "order-bloki",
          title: "Order blocks",
          summary: "Zonas de onde os grandes players deram início a um movimento forte de preço.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O order block é o último candle de direção oposta antes de um forte movimento de impulso do preço. Por exemplo, o último candle vermelho antes de uma alta brusca é considerado um order block de alta: presume-se que foi ali que os grandes players montaram a posição.",
            },
            {
              type: "paragraph",
              text: "Os traders usam os order blocks como zonas potenciais de entrada: se o preço voltar a essa zona no futuro, espera-se uma reação — a continuação do movimento na direção original.",
            },
          ],
          questions: [
            {
              prompt: "O que é um order block?",
              options: [
                "O último candle de direção oposta antes de um forte movimento de impulso",
                "Um indicador de volume de negociação",
                "Um tipo de ordem da corretora com execução atrasada",
              ],
              correctAnswer: "O último candle de direção oposta antes de um forte movimento de impulso",
            },
            {
              prompt: "Como os traders costumam usar os order blocks?",
              options: [
                "Como zonas potenciais de entrada quando o preço retorna",
                "Como um indicador de inflação",
                "Para calcular a taxa da corretora",
              ],
              correctAnswer: "Como zonas potenciais de entrada quando o preço retorna",
            },
            {
              prompt: "Em que o order block de alta difere do de baixa?",
              options: [
                "Ele se forma antes de um impulso para cima, e não para baixo",
                "Ele é sempre maior em tamanho",
                "Ele só aparece no timeframe diário",
              ],
              correctAnswer: "Ele se forma antes de um impulso para cima, e não para baixo",
            },
          ],
        },
      ],
    },
  ],
};
