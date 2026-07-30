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
            { type: "diagram", diagram: "intro-chart", caption: "É assim que o preço de um ativo aparece num gráfico" },
          ],
          questions: [
            {
              prompt: "Qual é a diferença fundamental entre trading e investimento de longo prazo?",
              options: [
                "O trading está disponível apenas para bancos",
                "O trading envolve operações frequentes em horizontes curtos",
                "O trading não envolve risco",
              ],
              correctAnswer: "O trading envolve operações frequentes em horizontes curtos",
            },
            {
              prompt: "Quem, diferentemente do investidor clássico, também pode lucrar com a queda do preço de um ativo?",
              options: ["Somente os market makers", "O trader que abre posições vendidas", "Somente os bancos"],
              correctAnswer: "O trader que abre posições vendidas",
            },
            {
              prompt: "O que os market makers fornecem ao mercado?",
              options: ["Uma cotação fixa do ativo", "Regulação governamental", "Liquidez para as operações de outros participantes"],
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
            { type: "diagram", diagram: "market-types", caption: "O mesmo movimento de preço, resultado diferente conforme a alavancagem" },
          ],
          questions: [
            {
              prompt: "Em que o mercado cripto difere do mercado de ações?",
              options: ["É totalmente regulado pelo governo", "É negociado apenas em dias úteis durante o dia", "Funciona 24/7, sem fins de semana"],
              correctAnswer: "Funciona 24/7, sem fins de semana",
            },
            {
              prompt: "O que é negociado no mercado Forex?",
              options: ["Ações de empresas", "Commodities", "Pares de moedas"],
              correctAnswer: "Pares de moedas",
            },
            {
              prompt: "Qual dos mercados listados costuma apresentar a maior volatilidade?",
              options: ["O mercado de títulos públicos", "O mercado de criptomoedas", "Os pares de moedas do G7"],
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
            { type: "diagram", diagram: "chart-anatomy", caption: "Os elementos básicos de um gráfico de preços" },
          ],
          questions: [
            {
              prompt: "O que é representado no eixo vertical do gráfico de preços?",
              options: ["O preço do ativo", "O número de traders", "O volume de negociação"],
              correctAnswer: "O preço do ativo",
            },
            {
              prompt: "O que é um timeframe?",
              options: [
                "O nome de uma corretora",
                "O período de tempo representado por um único elemento do gráfico",
                "Um tipo de ordem",
              ],
              correctAnswer: "O período de tempo representado por um único elemento do gráfico",
            },
            {
              prompt: "Por que os traders analisam vários timeframes ao mesmo tempo?",
              options: [
                "Para enxergar o panorama geral da tendência e o ponto exato de entrada ao mesmo tempo",
                "Para driblar as taxas da corretora",
                "Isso não tem nenhum sentido prático",
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
            { type: "diagram", diagram: "candlestick-anatomy", caption: "Anatomia de uma vela japonesa" },
          ],
          questions: [
            {
              prompt: "O que o corpo do candle mostra?",
              options: [
                "O número de participantes do mercado",
                "A faixa entre o preço de abertura e o de fechamento",
                "O volume máximo de negociação",
              ],
              correctAnswer: "A faixa entre o preço de abertura e o de fechamento",
            },
            {
              prompt: "O que as sombras (pavios) do candle mostram?",
              options: [
                "O número de operações no dia",
                "A faixa de preço fora do corpo — a máxima e a mínima do período",
                "O volume médio de negociação",
              ],
              correctAnswer: "A faixa de preço fora do corpo — a máxima e a mínima do período",
            },
            {
              prompt: "O que uma sombra inferior longa após uma queda de preço pode indicar?",
              options: [
                "O volume de negociação foi zero",
                "Os compradores empurraram o preço de volta para cima com força — uma reversão é possível",
                "O mercado com certeza vai continuar caindo",
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
            { type: "diagram", diagram: "support-resistance", caption: "Um exemplo de níveis num gráfico" },
          ],
          questions: [
            {
              prompt: "O que é um nível de suporte?",
              options: [
                "A taxa cobrada pela operação",
                "O preço em que os compradores historicamente interromperam a queda",
                "O preço de abertura da bolsa",
              ],
              correctAnswer: "O preço em que os compradores historicamente interromperam a queda",
            },
            {
              prompt: "O que costuma acontecer com um nível de resistência depois que ele é rompido para cima?",
              options: [
                "O preço é obrigado a voltar imediatamente",
                "Desaparece e deixa de influenciar o preço",
                "Costuma se tornar um novo suporte",
              ],
              correctAnswer: "Costuma se tornar um novo suporte",
            },
            {
              prompt: "Como traçar corretamente níveis confiáveis no gráfico?",
              options: [
                "Com base em vários toques do preço, e não em um único ponto",
                "Apenas no timeframe de um minuto",
                "Estritamente no centro do gráfico",
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
            { type: "diagram", diagram: "trend-basic", caption: "Uma tendência de alta num gráfico" },
          ],
          questions: [
            {
              prompt: "Do que é formada uma tendência de alta?",
              options: [
                "Apenas de candles verdes consecutivos",
                "De uma sequência de topos e fundos cada vez mais altos",
                "De candles de mesma altura",
              ],
              correctAnswer: "De uma sequência de topos e fundos cada vez mais altos",
            },
            {
              prompt: "O que é uma tendência lateral (range)?",
              options: [
                "Uma queda brusca no preço",
                "O movimento do preço dentro de uma faixa, sem direção clara",
                "Um período de suspensão das negociações na bolsa",
              ],
              correctAnswer: "O movimento do preço dentro de uma faixa, sem direção clara",
            },
            {
              prompt: "Por que se diz que \"a tendência é sua amiga\"?",
              options: [
                "É apenas uma figura de linguagem sem sentido prático",
                "A tendência nunca muda de direção",
                "Operar a favor da tendência oferece estatisticamente mais chances de sucesso",
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
            { type: "diagram", diagram: "volume-liquidity", caption: "Volume abaixo do gráfico de preços" },
          ],
          questions: [
            {
              prompt: "O que indica uma alta de preço acompanhada de baixo volume de negociação?",
              options: [
                "É o sinal de entrada mais confiável que existe",
                "A liquidez do ativo está no máximo",
                "O movimento é fraco e pode não ser confirmado",
              ],
              correctAnswer: "O movimento é fraco e pode não ser confirmado",
            },
            {
              prompt: "O que é liquidez de mercado?",
              options: [
                "A facilidade de comprar/vender um ativo sem afetar muito o seu preço",
                "A taxa cobrada pela corretora na operação",
                "A quantidade total de moedas em circulação",
              ],
              correctAnswer: "A facilidade de comprar/vender um ativo sem afetar muito o seu preço",
            },
            {
              prompt: "O que ameaça o trader ao operar um ativo de baixa liquidez?",
              options: [
                "Lucro garantido",
                "Um slippage grande na execução da operação",
                "A ausência total de taxas",
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
            { type: "diagram", diagram: "risk-basic", caption: "Stop-loss e take-profit num gráfico" },
          ],
          questions: [
            {
              prompt: "Para que serve o stop-loss?",
              options: [
                "Para garantir lucro",
                "Para aumentar o tamanho da posição",
                "Para limitar a perda da operação com antecedência",
              ],
              correctAnswer: "Para limitar a perda da operação com antecedência",
            },
            {
              prompt: "Qual percentual do depósito costuma ser recomendado arriscar em uma única operação?",
              options: ["25–30%", "O depósito inteiro", "1–2%"],
              correctAnswer: "1–2%",
            },
            {
              prompt: "O que significa uma relação risco/retorno de 1:3?",
              options: [
                "A operação será encerrada em 3 horas",
                "O risco é 3 vezes maior que o lucro",
                "O lucro potencial é 3 vezes maior que o risco",
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
            { type: "diagram", diagram: "moving-averages", caption: "Um cruzamento de médias móveis num gráfico" },
          ],
          questions: [
            {
              prompt: "Qual é a diferença entre SMA e EMA?",
              options: [
                "Não há diferença, é a mesma coisa",
                "A EMA dá mais peso aos preços mais recentes",
                "A SMA só funciona no gráfico de minutos",
              ],
              correctAnswer: "A EMA dá mais peso aos preços mais recentes",
            },
            {
              prompt: "O que indica o preço estar acima da média móvel?",
              options: ["A tendência é provavelmente de alta", "O volume de negociação é zero", "O ativo está com certeza sobrevalorizado"],
              correctAnswer: "A tendência é provavelmente de alta",
            },
            {
              prompt: "O que se chama de \"cruz dourada\" (golden cross)?",
              options: [
                "O momento de listagem de uma nova moeda",
                "O cruzamento do preço com a linha zero",
                "O cruzamento da MA curta acima da longa — um sinal de alta",
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
            { type: "diagram", diagram: "rsi", caption: "O preço atinge uma nova máxima, mas o RSI não — uma divergência de baixa clássica" },
          ],
          questions: [
            {
              prompt: "Em que escala o indicador RSI opera?",
              options: ["De -1 a 1", "De 0 a 100", "De 0 a 10000"],
              correctAnswer: "De 0 a 100",
            },
            {
              prompt: "O que geralmente significa um RSI acima de 70?",
              options: ["O volume de negociação caiu a zero", "É impossível vender o ativo", "O ativo está em zona de sobrecompra"],
              correctAnswer: "O ativo está em zona de sobrecompra",
            },
            {
              prompt: "O que é a divergência do RSI?",
              options: [
                "Uma falha técnica do indicador",
                "O preço e o indicador se movem em direções diferentes — um sinal de possível reversão",
                "A coincidência total entre o movimento do preço e do indicador",
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
            { type: "diagram", diagram: "fibonacci", caption: "Níveis de Fibonacci num gráfico" },
          ],
          questions: [
            {
              prompt: "Qual nível de Fibonacci muitos traders consideram o mais importante para a retração?",
              options: ["61,8%", "100%", "10%"],
              correctAnswer: "61,8%",
            },
            {
              prompt: "Para que servem as retrações de Fibonacci?",
              options: [
                "Para buscar pontos de entrada durante o recuo dentro da tendência",
                "Para determinar o horário exato de publicação de notícias",
                "Para calcular a taxa da corretora",
              ],
              correctAnswer: "Para buscar pontos de entrada durante o recuo dentro da tendência",
            },
            {
              prompt: "Para que servem as extensões de Fibonacci?",
              options: [
                "Para mostrar o volume de negociação",
                "Para definir o tamanho do stop-loss em percentual",
                "Para definir alvos de preço além do impulso",
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
            { type: "diagram", diagram: "reversal-patterns", caption: "Um padrão de topo duplo num gráfico" },
          ],
          questions: [
            {
              prompt: "O que o padrão \"ombro-cabeça-ombro\" sinaliza?",
              options: [
                "A provável reversão de uma tendência de alta",
                "A suspensão das negociações na bolsa",
                "A continuação garantida da alta",
              ],
              correctAnswer: "A provável reversão de uma tendência de alta",
            },
            {
              prompt: "O que confirma a realização do padrão \"topo duplo\"?",
              options: ["O surgimento de um terceiro pico", "O rompimento da linha do pescoço para baixo", "O aumento de volume no próprio topo"],
              correctAnswer: "O rompimento da linha do pescoço para baixo",
            },
            {
              prompt: "Por que o volume é importante para confirmar o rompimento de um padrão?",
              options: [
                "O volume só é necessário no timeframe diário",
                "Sem volume, o rompimento costuma ser falso",
                "O volume não influencia os padrões de forma alguma",
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
            { type: "diagram", diagram: "continuation-patterns", caption: "Um padrão de bandeira de alta num gráfico" },
          ],
          questions: [
            {
              prompt: "Em que direção o padrão \"bandeira\" costuma se resolver com mais frequência?",
              options: ["Sempre estritamente para baixo", "Na direção da tendência anterior", "Em uma direção aleatória"],
              correctAnswer: "Na direção da tendência anterior",
            },
            {
              prompt: "O que triângulos, bandeiras e retângulos têm em comum?",
              options: [
                "São sempre sinais de reversão",
                "Só ocorrem no forex",
                "São pausas/consolidações dentro da tendência",
              ],
              correctAnswer: "São pausas/consolidações dentro da tendência",
            },
            {
              prompt: "O que costuma acompanhar uma saída verdadeira de um triângulo?",
              options: ["Um aumento de volume", "A suspensão das negociações", "A ausência total de volume"],
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
            { type: "diagram", diagram: "multi-timeframe", caption: "Timeframe maior e menor lado a lado" },
          ],
          questions: [
            {
              prompt: "Por qual timeframe normalmente se começa a análise no método \"de cima para baixo\"?",
              options: ["Por qualquer um, aleatoriamente", "Pelo maior (por exemplo, o diário)", "Pelo de um minuto"],
              correctAnswer: "Pelo maior (por exemplo, o diário)",
            },
            {
              prompt: "Para que serve o timeframe menor na análise multitimeframe?",
              options: ["Para a entrada precisa na operação", "Para calcular a taxa da corretora", "Para substituir completamente o timeframe maior"],
              correctAnswer: "Para a entrada precisa na operação",
            },
            {
              prompt: "O que pode acontecer ao se ignorar o timeframe maior?",
              options: [
                "Um aumento automático de lucro",
                "Nada, isso não faz diferença",
                "Operar contra a tendência principal",
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
                "A devolução da taxa pela corretora",
                "A tentativa de recuperar imediatamente uma perda com operações emocionais",
                "Uma estratégia oficial de fundos de hedge",
              ],
              correctAnswer: "A tentativa de recuperar imediatamente uma perda com operações emocionais",
            },
            {
              prompt: "Por que o trader deve manter um diário de trading?",
              options: [
                "Para analisar erros e aprimorar a estratégia",
                "Para reduzir impostos",
                "É uma exigência da corretora",
              ],
              correctAnswer: "Para analisar erros e aprimorar a estratégia",
            },
            {
              prompt: "Qual emoção mais frequentemente leva a manter uma posição perdedora por tempo demais?",
              options: ["O tédio", "A confiança de que a corretora está certa", "A esperança de uma reversão e o medo de assumir o prejuízo"],
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
                "Apenas o ponto de entrada",
                "O ponto de entrada, o stop-loss e o alvo de lucro",
                "Não é preciso definir nada com antecedência",
              ],
              correctAnswer: "O ponto de entrada, o stop-loss e o alvo de lucro",
            },
            {
              prompt: "Por que praticar primeiro com um saldo virtual?",
              options: [
                "O saldo virtual gera mais lucro",
                "É uma exigência legal obrigatória",
                "Para testar a estratégia sem arriscar dinheiro real",
              ],
              correctAnswer: "Para testar a estratégia sem arriscar dinheiro real",
            },
            {
              prompt: "O que é importante fazer logo após fechar uma operação?",
              options: [
                "Analisá-la e registrar o resultado no diário",
                "Excluir o histórico da operação",
                "Abrir imediatamente uma operação oposta",
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
                "O bitcoin sempre sobe quando a taxa aumenta",
                "O mercado cripto não reage de forma alguma à taxa de juros",
                "Os ativos de risco (incluindo cripto) costumam cair",
              ],
              correctAnswer: "Os ativos de risco (incluindo cripto) costumam cair",
            },
            {
              prompt: "O que é o FOMC?",
              options: [
                "A maior corretora de criptomoedas dos EUA",
                "O comitê do Fed que decide sobre a taxa de juros",
                "Um índice de volatilidade do mercado",
              ],
              correctAnswer: "O comitê do Fed que decide sobre a taxa de juros",
            },
            {
              prompt: "Como se chama, na gíria do mercado, o afrouxamento da política monetária?",
              options: ["Emissão \"neutra\"", "Política \"hawkish\"", "Política \"dovish\""],
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
                "O volume de negociação na bolsa",
                "A variação de preços de uma cesta de bens e serviços de consumo",
                "A cotação do bitcoin frente ao dólar",
              ],
              correctAnswer: "A variação de preços de uma cesta de bens e serviços de consumo",
            },
            {
              prompt: "Como o mercado costuma reagir quando o CPI sai acima do previsto?",
              options: [
                "O mercado cripto suspende as negociações automaticamente",
                "O mercado nunca reage ao CPI",
                "Os ativos de risco costumam cair",
              ],
              correctAnswer: "Os ativos de risco costumam cair",
            },
            {
              prompt: "Qual indicador de inflação é considerado o preferido do próprio Fed?",
              options: ["RSI", "PCE", "DXY"],
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
                "A capitalização total do mercado cripto",
                "A volatilidade do bitcoin",
              ],
              correctAnswer: "A força do dólar americano em relação a uma cesta de outras moedas",
            },
            {
              prompt: "Como costumam se relacionar os movimentos do DXY e do bitcoin?",
              options: [
                "Costumam se mover em direções opostas",
                "Não têm nenhuma relação",
                "Sempre se movem de forma absolutamente sincronizada",
              ],
              correctAnswer: "Costumam se mover em direções opostas",
            },
            {
              prompt: "O que uma alta brusca do índice DXY pode sinalizar?",
              options: [
                "Uma alta garantida do bitcoin",
                "Uma provável correção no mercado cripto",
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
                "Com títulos públicos",
                "Com ações de tecnologia (Nasdaq)",
                "Não se correlaciona com nada",
              ],
              correctAnswer: "Com ações de tecnologia (Nasdaq)",
            },
            {
              prompt: "O que significa uma alta correlação entre BTC e Nasdaq?",
              options: [
                "O BTC substitui completamente o índice Nasdaq",
                "Eles são obrigados a se mover em direções opostas",
                "Eles costumam se mover na mesma direção",
              ],
              correctAnswer: "Eles costumam se mover na mesma direção",
            },
            {
              prompt: "O que pode enfraquecer temporariamente a correlação do BTC com o mercado de ações?",
              options: [
                "A mudança de fuso horário",
                "Eventos específicos do universo cripto (invasão de corretora, notícias regulatórias)",
                "Um dia de folga na bolsa",
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
                "Para planejar férias pessoais",
                "Para acompanhar as datas de notícias importantes que afetam o mercado",
                "Para substituir completamente a análise técnica",
              ],
              correctAnswer: "Para acompanhar as datas de notícias importantes que afetam o mercado",
            },
            {
              prompt: "O que é o NFP?",
              options: [
                "O índice de medo e ganância",
                "Um novo protocolo criptográfico",
                "O relatório de empregos do setor não agrícola dos EUA",
              ],
              correctAnswer: "O relatório de empregos do setor não agrícola dos EUA",
            },
            {
              prompt: "O que é sensato fazer antes da divulgação de uma notícia de alta importância?",
              options: [
                "Aumentar ao máximo o tamanho da posição",
                "Reduzir o risco ou evitar novas operações",
                "Desativar os stop-loss",
              ],
              correctAnswer: "Reduzir o risco ou evitar novas operações",
            },
          ],
        },
        {
          slug: "etf",
          title: "ETF",
          summary: "O que é um fundo negociado em bolsa e por que as aprovações de ETF cripto movem o mercado.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Um ETF (Exchange-Traded Fund, fundo negociado em bolsa) é um instrumento financeiro negociado em bolsa como uma ação comum, mas que replica o valor de um ativo subjacente ou de uma cesta de ativos. Um ETF cripto à vista (spot) permite que investidores obtenham exposição ao preço de um ativo, como o bitcoin, sem comprá-lo ou custodiá-lo diretamente — a gestora do fundo é quem detém o ativo subjacente.",
            },
            {
              type: "paragraph",
              text: "A aprovação por reguladores (por exemplo, a SEC nos EUA) de ETFs à vista de bitcoin ou ethereum é considerada um evento importante para o mercado: ela abre o acesso ao ativo a investidores institucionais e de varejo para os quais é inconveniente ou proibido manter criptomoedas diretamente. Os traders usam as entradas e saídas diárias de capital nesses ETFs como indicador de demanda institucional.",
            },
            {
              type: "list",
              items: [
                "Um ETF replica o valor de um ativo subjacente, mas é negociado como uma ação comum em uma bolsa tradicional",
                "Um ETF à vista significa que a gestora realmente detém o ativo subjacente",
                "As entradas e saídas diárias em ETFs cripto são usadas como indicador de demanda institucional",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é um ETF?",
              options: [
                "Um tipo de carteira de criptomoedas",
                "Um protocolo de consenso de blockchain",
                "Um instrumento financeiro negociado como uma ação e que replica o valor de um ativo subjacente",
              ],
              correctAnswer: "Um instrumento financeiro negociado como uma ação e que replica o valor de um ativo subjacente",
            },
            {
              prompt: "O que um ETF cripto à vista oferece a um investidor?",
              options: [
                "Exposição ao preço de um ativo sem precisar comprá-lo e custodiá-lo ele mesmo",
                "Um retorno fixo garantido",
                "Direito de voto na governança de uma blockchain",
              ],
              correctAnswer: "Exposição ao preço de um ativo sem precisar comprá-lo e custodiá-lo ele mesmo",
            },
            {
              prompt: "Como os traders usam os dados de entradas/saídas dos ETFs cripto?",
              options: [
                "Como indicador da demanda institucional pelo ativo",
                "Como substituto da análise de volume e volatilidade",
                "Como uma previsão exata do preço do dia seguinte",
              ],
              correctAnswer: "Como indicador da demanda institucional pelo ativo",
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
                "Um indicador de volume",
                "Um nível de stop-loss",
              ],
              correctAnswer: "O vão entre os pavios do 1º e do 3º candle causado por um impulso brusco",
            },
            {
              prompt: "O que o mercado costuma fazer com a zona de imbalance mais tarde?",
              options: [
                "Retorna e a \"fecha\" parcial ou totalmente",
                "Remove-a automaticamente do gráfico",
                "Nunca mais a toca",
              ],
              correctAnswer: "Retorna e a \"fecha\" parcial ou totalmente",
            },
            {
              prompt: "Quantos candles compõem o padrão clássico de FVG?",
              options: ["Um", "Sete", "Três"],
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
            { type: "diagram", diagram: "liquidity-types", caption: "Zonas de liquidez num gráfico" },
          ],
          questions: [
            {
              prompt: "Onde a liquidez costuma se concentrar no gráfico?",
              options: [
                "Apenas em candles de notícias",
                "Perto de topos/fundos iguais e de níveis óbvios de suporte/resistência",
                "Estritamente no meio do range, sem motivo",
              ],
              correctAnswer: "Perto de topos/fundos iguais e de níveis óbvios de suporte/resistência",
            },
            {
              prompt: "O que é liquidez buy-side?",
              options: [
                "A taxa da corretora sobre a compra",
                "Os stops de comprados abaixo dos fundos locais",
                "Os stops de vendidos, localizados acima dos topos locais",
              ],
              correctAnswer: "Os stops de vendidos, localizados acima dos topos locais",
            },
            {
              prompt: "Por que os grandes players precisam de liquidez no mercado?",
              options: [
                "Para montar ou encerrar uma posição grande sem um slippage significativo",
                "Isso não tem relação com os grandes players",
                "Para paralisar completamente as negociações",
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
                "Nada, o volume cai a zero",
                "O preço sempre continua na direção da perfuração",
              ],
              correctAnswer: "Uma reversão brusca na direção oposta à da perfuração",
            },
            {
              prompt: "Qual zona costuma ser o alvo do liquidity sweep?",
              options: [
                "Uma zona com liquidez zero",
                "O meio de um range aleatório, sem níveis",
                "Uma zona com ordens pendentes — por exemplo, topos/fundos iguais",
              ],
              correctAnswer: "Uma zona com ordens pendentes — por exemplo, topos/fundos iguais",
            },
            {
              prompt: "Qual erro é típico de iniciantes ao ver um sweep?",
              options: [
                "Definir o stop-loss antes de entrar na operação",
                "Entrar na direção do rompimento sem considerar uma possível reversão",
                "Fechar uma posição lucrativa cedo demais",
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
                "A continuação da tendência com aceleração",
                "A ausência de liquidez no mercado",
                "Uma possível reversão da tendência atual",
              ],
              correctAnswer: "Uma possível reversão da tendência atual",
            },
            {
              prompt: "O que o Break of Structure (BOS) confirma?",
              options: [
                "A suspensão automática das negociações",
                "O cancelamento de todos os níveis anteriores",
                "A continuação da tendência atual",
              ],
              correctAnswer: "A continuação da tendência atual",
            },
            {
              prompt: "Do que é formada a estrutura de uma tendência de alta?",
              options: [
                "De candles de mesma altura",
                "De Lower High e Lower Low",
                "De Higher High e Higher Low",
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
            { type: "diagram", diagram: "order-block", caption: "Um order block de alta e a reação do preço ao voltar à zona" },
          ],
          questions: [
            {
              prompt: "O que é um order block?",
              options: [
                "Um indicador de volume de negociação",
                "Um tipo de ordem da corretora com execução atrasada",
                "O último candle de direção oposta antes de um forte movimento de impulso",
              ],
              correctAnswer: "O último candle de direção oposta antes de um forte movimento de impulso",
            },
            {
              prompt: "Como os traders costumam usar os order blocks?",
              options: [
                "Para calcular a taxa da corretora",
                "Como zonas potenciais de entrada quando o preço retorna",
                "Como um indicador de inflação",
              ],
              correctAnswer: "Como zonas potenciais de entrada quando o preço retorna",
            },
            {
              prompt: "Em que o order block de alta difere do de baixa?",
              options: [
                "Ele só aparece no timeframe diário",
                "Ele se forma antes de um impulso para cima, e não para baixo",
                "Ele é sempre maior em tamanho",
              ],
              correctAnswer: "Ele se forma antes de um impulso para cima, e não para baixo",
            },
          ],
        },
      ],
    },
    {
      title: "Gestão de Risco",
      lessons: [
        {
          slug: "risk-reward",
          title: "Risk/Reward",
          summary: "A relação entre risco e retorno, e por que ela é mais importante do que a taxa de acerto.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Risk/Reward (R/R) é a relação entre a perda potencial e o lucro potencial de uma operação. Se você arrisca 100$ para ganhar 300$, seu R/R é 1:3. Essa é uma das métricas-chave que determina se um sistema de trading será lucrativo no longo prazo.",
            },
            {
              type: "paragraph",
              text: "Mesmo um sistema com baixa taxa de acerto pode ser lucrativo se o R/R médio for suficientemente alto. Por exemplo, com um R/R de 1:3, basta acertar em apenas 30% dos casos para ficar no positivo. É por isso que traders experientes se concentram não na taxa de acerto, mas na expectativa matemática da operação.",
            },
            {
              type: "list",
              items: [
                "O R/R é calculado antes de entrar na operação, não depois",
                "Quanto maior o R/R, menor pode ser a taxa de acerto necessária",
                "Um bom R/R não garante lucro sem disciplina na execução",
              ],
            },
            { type: "diagram", diagram: "risk-reward", caption: "Relação risco/retorno num gráfico" },
          ],
          questions: [
            {
              prompt: "O que significa uma relação Risk/Reward de 1:3?",
              options: [
                "É preciso abrir 3 operações seguidas",
                "O lucro potencial é 3 vezes maior que o risco potencial",
                "A operação é encerrada após 3 horas",
              ],
              correctAnswer: "O lucro potencial é 3 vezes maior que o risco potencial",
            },
            {
              prompt: "Por que um sistema com R/R 1:3 pode ser lucrativo mesmo com uma taxa de acerto de 40%?",
              options: [
                "O lucro das operações vencedoras compensa as perdas das operações perdedoras",
                "Porque as taxas da corretora diminuem",
                "Porque 40% é sempre maior que 33%",
              ],
              correctAnswer: "O lucro das operações vencedoras compensa as perdas das operações perdedoras",
            },
            {
              prompt: "Quando o trader deve calcular o Risk/Reward da operação?",
              options: [
                "Antes de entrar na operação",
                "Não é necessário calcular o R/R",
                "Somente depois de fechar a operação",
              ],
              correctAnswer: "Antes de entrar na operação",
            },
          ],
        },
        {
          slug: "razmer-pozitsii",
          title: "Tamanho da posição",
          summary: "Como calcular o volume da operação com base no risco sobre o depósito, e não no lucro desejado.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O tamanho da posição (position sizing) é o volume de capital que você aloca em uma operação específica. Ele deve ser determinado não pelo lucro desejado, mas pelo risco aceitável: normalmente, os traders arriscam no máximo 1-2% do depósito por operação, independentemente de quão promissor pareça o setup.",
            },
            {
              type: "paragraph",
              text: "A fórmula é simples: tamanho da posição = (depósito × percentual de risco) / distância até o stop-loss em percentual. Essa abordagem leva automaticamente em conta a volatilidade do ativo e a distância do stop — quanto mais largo o stop, menor o volume da posição para o mesmo risco em dólares.",
            },
            {
              type: "list",
              items: [
                "Um percentual de risco fixo protege o depósito de uma sequência de operações perdedoras",
                "O volume da posição deve diminuir quando o stop-loss está posicionado mais longe",
                "O uso de alavancagem aumenta o volume, mas não elimina a necessidade de calcular o risco",
              ],
            },
            { type: "diagram", diagram: "position-size", caption: "Tamanho da posição conforme a distância do stop" },
          ],
          questions: [
            {
              prompt: "De que deve depender, em primeiro lugar, o tamanho da posição?",
              options: [
                "De quanto dinheiro há no cartão",
                "Do humor do trader",
                "Do risco aceitável em percentual do depósito",
              ],
              correctAnswer: "Do risco aceitável em percentual do depósito",
            },
            {
              prompt: "O que acontece com o tamanho da posição quando o stop-loss é colocado mais longe do preço de entrada?",
              options: [
                "O volume da posição deve diminuir para manter o mesmo risco em dólares",
                "O volume da posição não tem relação com a distância até o stop",
                "O volume da posição deve aumentar",
              ],
              correctAnswer: "O volume da posição deve diminuir para manter o mesmo risco em dólares",
            },
            {
              prompt: "Qual percentual do depósito costuma ser recomendado arriscar em uma única operação?",
              options: [
                "50%",
                "25-30%",
                "1-2%",
              ],
              correctAnswer: "1-2%",
            },
          ],
        },
        {
          slug: "stop-loss",
          title: "Stop-Loss",
          summary: "Para que serve o stop-loss, onde posicioná-lo corretamente e quais erros são mais comuns.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O stop-loss é um nível de preço definido com antecedência, no qual a operação é fechada automaticamente com prejuízo. É a principal ferramenta de proteção do capital: limita a perda a um valor conhecido de antemão, em vez de permitir que o prejuízo cresça de forma descontrolada.",
            },
            {
              type: "paragraph",
              text: "O stop-loss deve ser posicionado com base na estrutura do mercado — logo além do nível de suporte, resistência ou extremo de candle mais próximo — e não com base na quantia que o trader está disposto a perder. Um stop muito apertado tira o trader da operação por causa do ruído normal do mercado; um stop muito largo aumenta o risco da posição.",
            },
            {
              type: "list",
              items: [
                "O stop-loss protege contra decisões emocionais no momento de uma perda",
                "O nível do stop deve se basear na estrutura do gráfico, não no valor de perda desejado",
                "Mover o stop para mais longe do preço durante uma perda é um dos erros mais comuns entre iniciantes",
              ],
            },
            { type: "diagram", diagram: "stop-loss-chart", caption: "Um stop-loss a ser acionado num gráfico" },
          ],
          questions: [
            {
              prompt: "Qual é a função principal do stop-loss?",
              options: [
                "Dobrar automaticamente a posição",
                "Aumentar o lucro da operação",
                "Limitar a perda a um valor conhecido de antemão",
              ],
              correctAnswer: "Limitar a perda a um valor conhecido de antemão",
            },
            {
              prompt: "Com base em que é mais correto definir o nível do stop-loss?",
              options: [
                "Com base em um número aleatório",
                "Com base no valor de lucro desejado",
                "Com base na estrutura do mercado (níveis de suporte/resistência)",
              ],
              correctAnswer: "Com base na estrutura do mercado (níveis de suporte/resistência)",
            },
            {
              prompt: "Qual erro é típico de iniciantes durante uma perda em uma operação?",
              options: [
                "Mover o stop-loss para mais longe do preço para \"dar mais chances\" à operação",
                "Calcular o risco antes de entrar",
                "Fechar a operação estritamente no stop",
              ],
              correctAnswer: "Mover o stop-loss para mais longe do preço para \"dar mais chances\" à operação",
            },
          ],
        },
        {
          slug: "take-profit",
          title: "Take Profit",
          summary: "Como definir metas de lucro e quando vale a pena usar o fechamento parcial da posição.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Take Profit (TP) é um nível definido com antecedência no qual a operação é fechada automaticamente com lucro. Assim como o stop-loss, ele deve ser determinado pela lógica do mercado: o nível de resistência, suporte ou zona de liquidez mais próxima, e não por um desejo arbitrário de ganhar uma quantia específica.",
            },
            {
              type: "paragraph",
              text: "Muitos traders usam o fechamento parcial: encerram parte da posição na primeira meta e deixam o restante seguir com o stop movido para o ponto de equilíbrio (breakeven). Isso permite garantir lucro sem sair da operação cedo demais caso o movimento continue.",
            },
            {
              type: "list",
              items: [
                "O TP, assim como o stop, deve ser definido com base na estrutura do gráfico",
                "O fechamento parcial reduz a pressão psicológica durante a operação",
                "Mover o stop para o ponto de equilíbrio após a primeira meta protege o lucro já obtido",
              ],
            },
            { type: "diagram", diagram: "take-profit-chart", caption: "Um take-profit a ser acionado num gráfico" },
          ],
          questions: [
            {
              prompt: "Em que deve se basear o nível do Take Profit?",
              options: [
                "No número de horas passadas na operação",
                "Na estrutura do gráfico: níveis de resistência, suporte ou liquidez",
                "Em um número aleatório de que o trader gosta",
              ],
              correctAnswer: "Na estrutura do gráfico: níveis de resistência, suporte ou liquidez",
            },
            {
              prompt: "Por que os traders usam o fechamento parcial da posição?",
              options: [
                "Para garantir que a operação feche no prejuízo",
                "Para aumentar a taxa da corretora",
                "Para garantir parte do lucro e deixar o restante continuar se movendo",
              ],
              correctAnswer: "Para garantir parte do lucro e deixar o restante continuar se movendo",
            },
            {
              prompt: "O que costuma ser feito com o stop-loss depois que a primeira meta de lucro é atingida?",
              options: [
                "O stop-loss é removido completamente",
                "Ele é movido para mais longe do preço",
                "Ele é movido para o ponto de equilíbrio, para proteger o lucro obtido",
              ],
              correctAnswer: "Ele é movido para o ponto de equilíbrio, para proteger o lucro obtido",
            },
          ],
        },
        {
          slug: "psihologiya-ubytkov",
          title: "Psicologia das perdas",
          summary: "Como as operações perdedoras afetam as decisões do trader e por que é importante aceitar as perdas com calma.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "As perdas são parte inevitável do trading: até um sistema lucrativo perde dinheiro regularmente em operações individuais. O problema não está na perda em si, mas na reação a ela — a tentativa de \"se recuperar\" imediatamente com um volume maior ou a recusa em fechar a operação no stop na esperança de uma reversão.",
            },
            {
              type: "paragraph",
              text: "O trader que encara cada perda como um custo estatístico esperado do sistema, e não como um fracasso pessoal, toma decisões mais racionais. Manter um diário de trading e definir o risco por operação com antecedência ajuda a separar as emoções do processo.",
            },
            {
              type: "list",
              items: [
                "Uma sequência de perdas é uma parte normal até de um sistema de trading lucrativo",
                "A tentativa de \"se recuperar\" após uma perda costuma aumentar o risco, não o lucro",
                "Definir o risco da operação com antecedência reduz a pressão emocional no momento da perda",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual é a forma mais correta de encarar uma perda isolada no trading?",
              options: [
                "Como um motivo para parar de manter o diário de trading",
                "Como um custo estatístico esperado do sistema de trading",
                "Como um sinal de que é preciso dobrar imediatamente o volume da próxima operação",
              ],
              correctAnswer: "Como um custo estatístico esperado do sistema de trading",
            },
            {
              prompt: "Ao que geralmente leva a tentativa de \"se recuperar\" logo após uma perda?",
              options: [
                "Ao cancelamento automático da operação anterior",
                "Ao aumento do risco e a novas perdas",
                "A um lucro garantido",
              ],
              correctAnswer: "Ao aumento do risco e a novas perdas",
            },
            {
              prompt: "O que ajuda o trader a separar as emoções das decisões de trading?",
              options: [
                "Aumentar a alavancagem após cada perda",
                "Abandonar totalmente a análise das operações",
                "Definir o risco da operação com antecedência e manter um diário",
              ],
              correctAnswer: "Definir o risco da operação com antecedência e manter um diário",
            },
          ],
        },
      ],
    },
    {
      title: "Psicologia do Trader",
      lessons: [
        {
          slug: "fomo",
          title: "FOMO",
          summary: "O medo de ficar de fora do movimento e por que ele leva a entrar nas operações no pior momento.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "FOMO (Fear Of Missing Out) é o medo de perder um movimento de preço lucrativo. Ele surge quando um ativo sobe bruscamente e o trader vê outras pessoas \"lucrando\", enquanto ele não. Sob a influência do FOMO, as operações costumam ser abertas sem plano, no pico do movimento, sem considerar o risco.",
            },
            {
              type: "paragraph",
              text: "O problema do FOMO é que a entrada ocorre justamente quando o movimento já se realizou em grande parte e o risco de reversão é máximo. Um trader disciplinado segue condições de entrada definidas com antecedência e deixa passar o movimento se ele não corresponder à sua estratégia.",
            },
            {
              type: "list",
              items: [
                "O FOMO costuma empurrar o trader para uma entrada depois que o preço já se moveu fortemente",
                "Decisões tomadas por FOMO costumam ser feitas sem stop-loss e sem cálculo de risco",
                "Um plano de operação definido com antecedência reduz a influência do FOMO",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é FOMO no trading?",
              options: [
                "Um indicador técnico de volume",
                "O medo de perder um movimento de preço lucrativo",
                "Um tipo de ordem na corretora",
              ],
              correctAnswer: "O medo de perder um movimento de preço lucrativo",
            },
            {
              prompt: "Em que estágio do movimento de preço o trader costuma entrar na operação sob influência do FOMO?",
              options: [
                "Bem no início do movimento",
                "Perto do fim do movimento, quando o risco de reversão já é alto",
                "Antes mesmo de o movimento começar",
              ],
              correctAnswer: "Perto do fim do movimento, quando o risco de reversão já é alto",
            },
            {
              prompt: "O que ajuda a reduzir a influência do FOMO nas decisões do trader?",
              options: [
                "Acompanhar constantemente as operações lucrativas de outras pessoas",
                "Aumentar a alavancagem no momento de uma alta brusca",
                "Um plano e condições de entrada definidos com antecedência",
              ],
              correctAnswer: "Um plano e condições de entrada definidos com antecedência",
            },
          ],
        },
        {
          slug: "zhadnost",
          title: "Ganância",
          summary: "Como a ganância leva a manter uma operação lucrativa além do planejado e transforma lucro em prejuízo.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "A ganância no trading se manifesta como o desejo de extrair mais lucro da operação do que previa o plano inicial: não fechar a posição na meta definida, aumentar o volume após uma sequência de operações vencedoras ou cancelar um Take Profit definido com antecedência.",
            },
            {
              type: "paragraph",
              text: "Na maioria das vezes, a ganância faz com que uma operação lucrativa se reverta e feche no stop ou no zero a zero, quando poderia ter sido encerrada com um bom resultado. A disciplina em seguir o plano definido com antecedência é a principal ferramenta contra a ganância.",
            },
            {
              type: "list",
              items: [
                "A ganância frequentemente se manifesta como o cancelamento de um Take Profit já definido",
                "Aumentar o volume após uma sequência de vitórias sem alterar a gestão de risco também é uma manifestação de ganância",
                "Seguir o plano de operação previamente estabelecido reduz a influência da ganância",
              ],
            },
          ],
          questions: [
            {
              prompt: "Como a ganância costuma se manifestar na gestão de uma operação aberta?",
              options: [
                "O trader fecha a operação estritamente conforme o plano",
                "O trader reduz o volume da posição",
                "O trader cancela o Take Profit já definido, na esperança de um lucro maior",
              ],
              correctAnswer: "O trader cancela o Take Profit já definido, na esperança de um lucro maior",
            },
            {
              prompt: "A que resultado a ganância costuma levar em uma operação lucrativa?",
              options: [
                "A taxa da corretora diminui",
                "O lucro aumenta garantidamente",
                "A operação se reverte e fecha no stop ou no zero a zero",
              ],
              correctAnswer: "A operação se reverte e fecha no stop ou no zero a zero",
            },
            {
              prompt: "Qual é a principal ferramenta contra a ganância no trading?",
              options: [
                "Aumentar a alavancagem após cada operação lucrativa",
                "Abandonar totalmente a definição de Take Profit",
                "Seguir o plano de operação previamente estabelecido",
              ],
              correctAnswer: "Seguir o plano de operação previamente estabelecido",
            },
          ],
        },
        {
          slug: "strah",
          title: "Medo",
          summary: "Como o medo de perder atrapalha o cumprimento da estratégia e leva ao fechamento prematuro de operações.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O medo no trading costuma se manifestar como o receio de perder dinheiro: o trader fecha uma operação lucrativa cedo demais por causa da menor oscilação contrária, tem medo de entrar em uma operação com sinal confirmado ou evita completamente operar depois de uma sequência de perdas.",
            },
            {
              type: "paragraph",
              text: "Ao contrário da ganância, o medo faz o trader agir com cautela excessiva e perder oportunidades que se encaixam perfeitamente na estratégia. Operar com um volume em que o risco por operação é psicologicamente confortável ajuda a reduzir a influência do medo.",
            },
            {
              type: "list",
              items: [
                "O medo frequentemente se manifesta como o fechamento prematuro de uma operação lucrativa",
                "Um volume de posição excessivamente grande intensifica o medo e atrapalha o cumprimento do plano",
                "Um tamanho de risco confortável por operação reduz a pressão emocional do medo",
              ],
            },
          ],
          questions: [
            {
              prompt: "Como o medo costuma afetar a gestão de uma operação lucrativa?",
              options: [
                "O trader a fecha cedo demais por causa da menor oscilação contrária",
                "O trader aumenta o volume da posição",
                "O trader mantém a operação muito além do planejado",
              ],
              correctAnswer: "O trader a fecha cedo demais por causa da menor oscilação contrária",
            },
            {
              prompt: "O que intensifica o medo na gestão de uma posição aberta?",
              options: [
                "Manter um diário de trading",
                "Um volume de posição excessivamente grande em relação ao depósito",
                "Um risco definido com antecedência de 1-2% do depósito",
              ],
              correctAnswer: "Um volume de posição excessivamente grande em relação ao depósito",
            },
            {
              prompt: "Em que o medo no trading se diferencia fundamentalmente da ganância?",
              options: [
                "O medo aumenta o volume da posição mais do que a ganância",
                "O medo e a ganância levam exatamente às mesmas decisões",
                "O medo faz o trader agir com cautela excessiva e perder operações que se encaixam na estratégia",
              ],
              correctAnswer: "O medo faz o trader agir com cautela excessiva e perder operações que se encaixam na estratégia",
            },
          ],
        },
        {
          slug: "distsiplina",
          title: "Disciplina",
          summary: "Por que seguir as próprias regras é mais importante do que qualquer operação isolada.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Disciplina no trading é a capacidade de seguir consistentemente regras de entrada, saída e gestão de risco definidas com antecedência, mesmo quando, no momento, dá vontade de agir de outra forma. É a disciplina que diferencia um trader com sistema de uma pessoa que opera por emoção.",
            },
            {
              type: "paragraph",
              text: "Mesmo uma estratégia de trading perfeita não trará resultados se as regras forem quebradas toda vez que a operação sair do planejado. A disciplina se constrói com regras simples e claramente formuladas e com a análise regular do quanto elas foram cumpridas.",
            },
            {
              type: "list",
              items: [
                "A disciplina é mais importante do que o resultado de uma operação isolada",
                "Quebrar as próprias regras desvaloriza até uma boa estratégia",
                "A análise regular do cumprimento das regras ajuda a fortalecer a disciplina",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é disciplina no contexto do trading?",
              options: [
                "O uso da alavancagem máxima",
                "Seguir consistentemente regras definidas com antecedência",
                "A capacidade de adivinhar a direção do preço",
              ],
              correctAnswer: "Seguir consistentemente regras definidas com antecedência",
            },
            {
              prompt: "Por que mesmo uma boa estratégia não funciona sem disciplina?",
              options: [
                "Porque a disciplina não influencia o resultado",
                "Porque as estratégias sempre funcionam igualmente bem",
                "Porque as regras são quebradas justamente quando a operação sai do planejado",
              ],
              correctAnswer: "Porque as regras são quebradas justamente quando a operação sai do planejado",
            },
            {
              prompt: "O que ajuda a fortalecer a disciplina com o tempo?",
              options: [
                "Abandonar totalmente a análise das operações",
                "A análise regular do cumprimento das próprias regras",
                "Mudar constantemente as regras após cada operação",
              ],
              correctAnswer: "A análise regular do cumprimento das próprias regras",
            },
          ],
        },
        {
          slug: "emotsionalny-kontrol",
          title: "Controle emocional",
          summary: "Técnicas práticas que ajudam a tomar decisões com base no plano, e não nas emoções.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Controle emocional é a capacidade de reconhecer o estado emocional (euforia, medo, irritação após uma perda) e não permitir que ele influencie diretamente as decisões de trading. Não se trata da ausência de emoções, mas da habilidade de agir segundo o plano apesar delas.",
            },
            {
              type: "paragraph",
              text: "As ferramentas práticas de controle emocional incluem uma pausa antes de entrar na operação, um limite no número de operações ou perdas por dia, e também manter um diário em que se registra não apenas o resultado, mas também o estado emocional do trader no momento da operação.",
            },
            {
              type: "list",
              items: [
                "Controle emocional é o gerenciamento da reação às emoções, não sua ausência",
                "Um limite diário no número de operações ou perdas reduz a influência do tilt",
                "Registrar o estado emocional no diário ajuda a identificar erros recorrentes",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que se entende por controle emocional no trading?",
              options: [
                "A ausência completa de qualquer emoção durante a operação",
                "A capacidade de prever as emoções de outros traders",
                "A habilidade de agir segundo o plano apesar das emoções, e não a ausência total delas",
              ],
              correctAnswer: "A habilidade de agir segundo o plano apesar das emoções, e não a ausência total delas",
            },
            {
              prompt: "Como um limite diário no número de operações ajuda o trader?",
              options: [
                "Elimina totalmente a necessidade de stop-loss",
                "Garante lucro ao final do dia",
                "Reduz o risco de uma sequência de decisões emocionais seguidas (tilt)",
              ],
              correctAnswer: "Reduz o risco de uma sequência de decisões emocionais seguidas (tilt)",
            },
            {
              prompt: "Por que registrar o estado emocional durante a operação no diário de trading?",
              options: [
                "É uma exigência da corretora para abrir a operação",
                "Isso não ajuda em nada na análise do trading",
                "Para identificar erros emocionais recorrentes no futuro",
              ],
              correctAnswer: "Para identificar erros emocionais recorrentes no futuro",
            },
          ],
        },
      ],
    },
    {
      title: "Indicadores",
      lessons: [
        {
          slug: "rsi",
          title: "RSI",
          summary: "Índice de Força Relativa: como medir a sobrecompra e a sobrevenda de um ativo.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "RSI (Relative Strength Index) é um oscilador que mede a velocidade e a magnitude das variações recentes de preço em uma escala de 0 a 100. Valores acima de 70 são tradicionalmente considerados zona de sobrecompra, e abaixo de 30, zona de sobrevenda, embora em uma tendência forte o RSI possa permanecer por muito tempo nessas zonas.",
            },
            {
              type: "paragraph",
              text: "Além das zonas de sobrecompra/sobrevenda, os traders usam as divergências do RSI: se o preço atinge uma nova máxima, mas o RSI não, isso pode sinalizar um enfraquecimento do impulso. O RSI raramente é usado isoladamente e costuma ser combinado com a análise da estrutura de mercado.",
            },
            {
              type: "list",
              items: [
                "RSI acima de 70 indica potencial sobrecompra; abaixo de 30, sobrevenda",
                "Em uma tendência forte, o RSI pode permanecer por muito tempo em zona extrema sem reversão",
                "A divergência entre o preço e o RSI pode indicar um enfraquecimento da tendência",
              ],
            },
            { type: "diagram", diagram: "rsi", caption: "O preço atinge uma nova máxima, mas o RSI não — uma divergência de baixa clássica" },
          ],
          questions: [
            {
              prompt: "Em qual intervalo de valores o RSI é medido?",
              options: [
                "De -1 a 1",
                "De 0 a 10.000",
                "De 0 a 100",
              ],
              correctAnswer: "De 0 a 100",
            },
            {
              prompt: "O que tradicionalmente significa um valor de RSI acima de 70?",
              options: [
                "Uma potencial zona de sobrecompra",
                "Ausência de volume de negociação",
                "Uma reversão de preço garantida para baixo",
              ],
              correctAnswer: "Uma potencial zona de sobrecompra",
            },
            {
              prompt: "O que uma divergência entre o preço e o RSI pode sinalizar?",
              options: [
                "Um erro técnico do indicador",
                "A mudança da corretora de listagem do ativo",
                "O enfraquecimento do impulso atual do movimento",
              ],
              correctAnswer: "O enfraquecimento do impulso atual do movimento",
            },
          ],
        },
        {
          slug: "macd",
          title: "MACD",
          summary: "Indicador de convergência e divergência de médias móveis, e seus sinais de cruzamento e divergência.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O MACD (Moving Average Convergence Divergence) é construído a partir da diferença entre duas médias móveis exponenciais (geralmente de 12 e 26 períodos) e uma linha de sinal (EMA de 9 períodos do próprio MACD). O histograma mostra a diferença entre a linha do MACD e a linha de sinal.",
            },
            {
              type: "paragraph",
              text: "Os principais sinais do MACD são o cruzamento da linha do MACD com a linha de sinal (possível mudança de impulso) e o cruzamento da linha zero (mudança de direção da tendência). Assim como o RSI, o MACD pode apresentar divergências com o preço, o que costuma ser usado como confirmação adicional.",
            },
            {
              type: "list",
              items: [
                "O MACD é construído a partir da diferença entre duas EMAs e uma linha de sinal",
                "O cruzamento entre o MACD e a linha de sinal é um dos principais sinais de trading",
                "O cruzamento da linha zero costuma estar associado a uma mudança na direção da tendência",
              ],
            },
            { type: "diagram", diagram: "macd", caption: "MACD num gráfico" },
          ],
          questions: [
            {
              prompt: "Em que se baseia o indicador MACD?",
              options: [
                "No volume de open interest",
                "Na diferença entre duas médias móveis exponenciais",
                "No número de carteiras ativas na rede",
              ],
              correctAnswer: "Na diferença entre duas médias móveis exponenciais",
            },
            {
              prompt: "O que o histograma do MACD mostra?",
              options: [
                "A diferença entre a linha do MACD e a linha de sinal",
                "O número de posições abertas na corretora",
                "O volume total de negociação do dia",
              ],
              correctAnswer: "A diferença entre a linha do MACD e a linha de sinal",
            },
            {
              prompt: "A que costuma ser associado o cruzamento da linha do MACD com o nível zero?",
              options: [
                "Com uma mudança na direção da tendência",
                "Com a alteração da taxa da corretora",
                "Com a listagem de um novo token",
              ],
              correctAnswer: "Com uma mudança na direção da tendência",
            },
          ],
        },
        {
          slug: "ema",
          title: "EMA",
          summary: "Média móvel exponencial e por que ela reage mais rápido ao preço do que a simples.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "A EMA (Exponential Moving Average) é uma média móvel que dá mais peso aos preços mais recentes, o que a faz reagir mais rápido às mudanças de preço em comparação com a média móvel simples (SMA). Isso torna a EMA mais sensível, mas também mais suscetível a sinais falsos em mercados laterais.",
            },
            {
              type: "paragraph",
              text: "Os traders costumam usar várias EMAs de períodos diferentes ao mesmo tempo (por exemplo, 20 e 50) para determinar a direção da tendência e as zonas dinâmicas de suporte/resistência. O cruzamento entre uma EMA rápida e uma lenta é um sinal popular, embora atrasado.",
            },
            {
              type: "list",
              items: [
                "A EMA dá mais peso aos preços mais recentes em comparação com a SMA",
                "Várias EMAs de períodos diferentes ajudam a avaliar a direção da tendência",
                "O cruzamento entre EMA rápida e lenta é um sinal atrasado, mas popular",
              ],
            },
            { type: "diagram", diagram: "ema", caption: "EMA num gráfico de preços" },
          ],
          questions: [
            {
              prompt: "Em que a EMA se diferencia da média móvel simples (SMA)?",
              options: [
                "A EMA não leva o preço em conta de forma alguma",
                "A EMA dá mais peso aos preços mais recentes e reage mais rápido às mudanças",
                "A EMA é sempre calculada apenas com base no volume",
              ],
              correctAnswer: "A EMA dá mais peso aos preços mais recentes e reage mais rápido às mudanças",
            },
            {
              prompt: "Por que os traders usam várias EMAs de períodos diferentes ao mesmo tempo?",
              options: [
                "Isso não fornece nenhuma informação útil",
                "Para avaliar a direção da tendência e as zonas dinâmicas de suporte/resistência",
                "Para reduzir a taxa da corretora",
              ],
              correctAnswer: "Para avaliar a direção da tendência e as zonas dinâmicas de suporte/resistência",
            },
            {
              prompt: "Qual é a desvantagem do cruzamento entre EMA rápida e lenta como sinal?",
              options: [
                "O sinal não pode ser visto no gráfico",
                "O sinal aparece antes do início do movimento",
                "O sinal fica atrasado em relação ao movimento atual do preço",
              ],
              correctAnswer: "O sinal fica atrasado em relação ao movimento atual do preço",
            },
          ],
        },
        {
          slug: "sma",
          title: "SMA",
          summary: "Média móvel simples como base para determinar a direção geral da tendência.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "A SMA (Simple Moving Average) é uma média móvel simples, calculada como a média aritmética do preço de fechamento ao longo de N períodos. Ao contrário da EMA, todos os períodos na SMA têm o mesmo peso, o que faz com que ela reaja mais lentamente às mudanças de preço e suavize o ruído com mais intensidade.",
            },
            {
              type: "paragraph",
              text: "A SMA costuma ser usada para determinar a direção geral, de mais longo prazo, da tendência — por exemplo, a posição do preço em relação à SMA de 200 no timeframe diário é amplamente usada como referência para um mercado altista ou baixista em geral.",
            },
            {
              type: "list",
              items: [
                "A SMA é a média aritmética do preço ao longo de um número definido de períodos",
                "A SMA suaviza o ruído com mais intensidade do que a EMA, mas reage mais lentamente",
                "A SMA 200 no gráfico diário costuma ser usada como referência da tendência global",
              ],
            },
            { type: "diagram", diagram: "sma", caption: "SMA num gráfico de preços" },
          ],
          questions: [
            {
              prompt: "Como a SMA é calculada?",
              options: [
                "Como a média aritmética do preço de fechamento ao longo de um número definido de períodos",
                "Como a diferença entre a máxima e a mínima do dia",
                "Como a soma de todos os volumes de negociação do mês",
              ],
              correctAnswer: "Como a média aritmética do preço de fechamento ao longo de um número definido de períodos",
            },
            {
              prompt: "Em que a SMA se diferencia da EMA em termos de velocidade de reação ao preço?",
              options: [
                "Não há diferença na velocidade de reação",
                "A SMA sempre reage mais rápido que a EMA",
                "A SMA reage mais lentamente, pois todos os períodos têm o mesmo peso",
              ],
              correctAnswer: "A SMA reage mais lentamente, pois todos os períodos têm o mesmo peso",
            },
            {
              prompt: "Para que a SMA 200 no timeframe diário costuma ser usada?",
              options: [
                "Para calcular a taxa da corretora",
                "Para determinar o momento exato da listagem de um token",
                "Como referência de um mercado geral altista ou baixista",
              ],
              correctAnswer: "Como referência de um mercado geral altista ou baixista",
            },
          ],
        },
        {
          slug: "vwap",
          title: "VWAP",
          summary: "Preço médio ponderado pelo volume e seu papel como referência do preço \"justo\" do dia.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "VWAP (Volume Weighted Average Price) é o preço médio de um ativo em um período, ponderado pelo volume negociado em cada nível de preço. Ao contrário de uma média móvel simples, o VWAP mostra a que preço realmente ocorreu a maior parte do volume de operações.",
            },
            {
              type: "paragraph",
              text: "Traders institucionais costumam usar o VWAP como referência do preço \"justo\" do dia: um preço acima do VWAP é considerado relativamente caro, e abaixo, relativamente barato. O VWAP também é usado como nível dinâmico de suporte/resistência dentro da sessão de negociação.",
            },
            {
              type: "list",
              items: [
                "O VWAP leva em conta não apenas o preço, mas também o volume em cada nível",
                "Um preço acima do VWAP é interpretado como relativamente caro, e abaixo, como relativamente barato",
                "O VWAP normalmente é recalculado desde o início de cada sessão de negociação",
              ],
            },
            { type: "diagram", diagram: "vwap", caption: "VWAP num gráfico intradiário" },
          ],
          questions: [
            {
              prompt: "O que o VWAP leva em conta, diferentemente de uma média móvel simples?",
              options: [
                "Apenas o preço máximo do dia",
                "Apenas o preço de fechamento do dia anterior",
                "O volume de negociação em cada nível de preço",
              ],
              correctAnswer: "O volume de negociação em cada nível de preço",
            },
            {
              prompt: "Como se interpreta um preço que está acima do VWAP?",
              options: [
                "Como um sinal garantido de compra",
                "Como um sinal de interrupção das negociações",
                "Como relativamente caro em comparação ao nível médio ponderado por volume",
              ],
              correctAnswer: "Como relativamente caro em comparação ao nível médio ponderado por volume",
            },
            {
              prompt: "Quem mais costuma se orientar pelo VWAP ao executar grandes ordens?",
              options: [
                "Apenas traders iniciantes",
                "Apenas profissionais de marketing de projetos",
                "Traders institucionais",
              ],
              correctAnswer: "Traders institucionais",
            },
          ],
        },
        {
          slug: "atr",
          title: "ATR",
          summary: "Amplitude verdadeira média como ferramenta de medição de volatilidade para posicionar stops.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "O ATR (Average True Range) mede a volatilidade média de um ativo em um período definido, levando em conta os gaps entre candles. Não é um indicador de direção, mas de amplitude de movimento — um ATR alto significa que o preço está oscilando fortemente, e um ATR baixo indica que o mercado está relativamente calmo.",
            },
            {
              type: "paragraph",
              text: "O ATR é frequentemente usado para calcular o tamanho do stop-loss adaptado à volatilidade atual: em vez de um percentual fixo, o trader posiciona o stop a uma distância múltipla do ATR, o que reduz a probabilidade de ser tirado prematuramente pelo ruído normal do mercado.",
            },
            {
              type: "list",
              items: [
                "O ATR mede a amplitude do movimento de preço, não sua direção",
                "Um ATR alto indica volatilidade elevada do ativo",
                "Um stop-loss calculado com base no ATR se adapta à volatilidade atual do mercado",
              ],
            },
            { type: "diagram", diagram: "atr", caption: "ATR abaixo de um gráfico de preços" },
          ],
          questions: [
            {
              prompt: "O que o indicador ATR mede?",
              options: [
                "O número de endereços ativos na rede",
                "A direção da tendência",
                "A volatilidade média (amplitude de movimento) do ativo",
              ],
              correctAnswer: "A volatilidade média (amplitude de movimento) do ativo",
            },
            {
              prompt: "O que um valor alto de ATR indica?",
              options: [
                "Um delistamento iminente do ativo",
                "Baixa liquidez da corretora",
                "Volatilidade elevada e grandes oscilações de preço",
              ],
              correctAnswer: "Volatilidade elevada e grandes oscilações de preço",
            },
            {
              prompt: "Para que os traders costumam usar o ATR na prática?",
              options: [
                "Para determinar o preço exato de listagem de um token",
                "Para calcular a taxa da rede",
                "Para calcular o tamanho do stop-loss levando em conta a volatilidade atual",
              ],
              correctAnswer: "Para calcular o tamanho do stop-loss levando em conta a volatilidade atual",
            },
          ],
        },
        {
          slug: "bollinger-bands",
          title: "Bollinger Bands",
          summary: "Bollinger Bands como indicador de volatilidade e do quão caro ou barato o preço está relativamente.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "As Bollinger Bands consistem em uma média móvel (geralmente a SMA 20) e duas bandas afastadas dela por um número definido de desvios-padrão do preço. A largura das bandas muda dinamicamente com a volatilidade: elas se expandem em períodos de movimentos fortes e se contraem em períodos de calmaria.",
            },
            {
              type: "paragraph",
              text: "A contração das bandas (\"squeeze\") costuma preceder um movimento forte de preço em qualquer direção, e o toque do preço na banda superior ou inferior não é, por si só, um sinal de reversão — em uma tendência forte, o preço pode se mover ao longo da banda por muito tempo.",
            },
            {
              type: "list",
              items: [
                "As bandas são construídas em torno de uma média móvel com base no desvio-padrão",
                "A contração das bandas costuma preceder um movimento forte de preço",
                "Tocar a banda não garante uma reversão, especialmente em uma tendência forte",
              ],
            },
            { type: "diagram", diagram: "bollinger", caption: "Bandas de Bollinger num gráfico" },
          ],
          questions: [
            {
              prompt: "Do que as Bollinger Bands são compostas?",
              options: [
                "De três linhas independentes de volume",
                "De uma média móvel e duas bandas baseadas no desvio-padrão",
                "De uma única linha de preço de fechamento",
              ],
              correctAnswer: "De uma média móvel e duas bandas baseadas no desvio-padrão",
            },
            {
              prompt: "O que costuma preceder um movimento forte de preço segundo as Bollinger Bands?",
              options: [
                "A contração (squeeze) das bandas",
                "O desaparecimento completo das bandas do gráfico",
                "A expansão máxima das bandas",
              ],
              correctAnswer: "A contração (squeeze) das bandas",
            },
            {
              prompt: "O toque do preço na banda superior de Bollinger significa uma reversão garantida para baixo?",
              options: [
                "Sim, mas apenas no timeframe semanal",
                "Não, em uma tendência forte o preço pode se mover ao longo da banda por muito tempo",
                "Sim, é sempre um sinal de reversão cem por cento garantido",
              ],
              correctAnswer: "Não, em uma tendência forte o preço pode se mover ao longo da banda por muito tempo",
            },
          ],
        },
      ],
    },
    {
      title: "Análise de Volume",
      lessons: [
        {
          slug: "volume",
          title: "Volume",
          summary: "O volume de negociação como confirmação da força do movimento de preço.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Volume (volume de negociação) mostra a quantidade de um ativo negociada em um período. É um dos poucos indicadores que não é derivado do preço, mas reflete a atividade real dos participantes do mercado, por isso costuma ser usado como confirmação independente de um movimento.",
            },
            {
              type: "paragraph",
              text: "Um movimento de preço com alto volume é considerado mais confiável do que o mesmo movimento com baixo volume: o rompimento de um nível sem aumento de volume costuma se revelar falso com mais frequência. Picos bruscos de volume também costumam coincidir com pontos-chave de reversão do mercado.",
            },
            {
              type: "list",
              items: [
                "O volume reflete a atividade real dos participantes, e não uma derivação do preço",
                "Um rompimento de nível com baixo volume costuma se revelar falso com mais frequência",
                "Picos bruscos de volume costumam coincidir com pontos de reversão",
              ],
            },
            { type: "diagram", diagram: "volume-bars", caption: "Um pico de volume num gráfico" },
          ],
          questions: [
            {
              prompt: "Por que o volume é considerado uma confirmação independente do movimento de preço?",
              options: [
                "Porque o volume sempre aumenta junto com o preço",
                "Ele reflete a atividade real dos participantes, e não é derivado do próprio preço",
                "Porque o volume é medido em percentual da capitalização",
              ],
              correctAnswer: "Ele reflete a atividade real dos participantes, e não é derivado do próprio preço",
            },
            {
              prompt: "Qual rompimento de nível é considerado menos confiável?",
              options: [
                "A confiabilidade do rompimento não depende do volume",
                "O rompimento com baixo volume",
                "O rompimento com alto volume",
              ],
              correctAnswer: "O rompimento com baixo volume",
            },
            {
              prompt: "Com o que os picos bruscos de volume costumam coincidir?",
              options: [
                "Com a mudança de nome do token",
                "Com pontos-chave de reversão do mercado",
                "Apenas com falhas técnicas da corretora",
              ],
              correctAnswer: "Com pontos-chave de reversão do mercado",
            },
          ],
        },
        {
          slug: "delta",
          title: "Delta",
          summary: "A diferença entre o volume de compras e vendas como indicador de pressão sobre o preço.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Delta é a diferença entre o volume de compras agressivas (por ordens de mercado de compra) e vendas agressivas em um período. Um delta positivo indica predominância de compradores; negativo, de vendedores, independentemente de para onde o preço acabou se movendo.",
            },
            {
              type: "paragraph",
              text: "Uma divergência entre o delta e o movimento de preço — por exemplo, o preço sobe, mas o delta é negativo — pode indicar que a alta não é sustentada por compras de mercado, mas pelo fechamento de posições vendidas, tornando esse movimento menos sólido.",
            },
            {
              type: "list",
              items: [
                "Um delta positivo indica predominância de compras agressivas sobre vendas",
                "O delta mede a pressão dos participantes, não a variação final do preço",
                "A divergência entre preço e delta pode indicar instabilidade do movimento",
              ],
            },
            { type: "diagram", diagram: "delta", caption: "Delta de volume por vela" },
          ],
          questions: [
            {
              prompt: "O que um delta positivo mostra?",
              options: [
                "Um aumento de preço garantido no futuro",
                "A ausência de atividade de negociação",
                "A predominância de compras agressivas sobre vendas",
              ],
              correctAnswer: "A predominância de compras agressivas sobre vendas",
            },
            {
              prompt: "O que uma alta de preço com delta negativo pode indicar?",
              options: [
                "Que o delta está sendo calculado incorretamente",
                "Um erro técnico na corretora",
                "A alta pode ser sustentada pelo fechamento de posições vendidas, e não por novas compras",
              ],
              correctAnswer: "A alta pode ser sustentada pelo fechamento de posições vendidas, e não por novas compras",
            },
            {
              prompt: "O que exatamente o delta de volume mede?",
              options: [
                "O número de holders do token",
                "A capitalização total do ativo",
                "A pressão de compradores e vendedores por meio de ordens agressivas",
              ],
              correctAnswer: "A pressão de compradores e vendedores por meio de ordens agressivas",
            },
          ],
        },
        {
          slug: "open-interest",
          title: "Open Interest",
          summary: "Open interest como indicador do número de posições ativas no mercado de derivativos.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Open Interest (interesse em aberto, OI) é o número total de contratos abertos, ainda não fechados, no mercado de derivativos (futuros, perpétuos). Ao contrário do volume, que é zerado a cada período, o OI mostra a quantidade acumulada de posições ativas.",
            },
            {
              type: "paragraph",
              text: "O crescimento do OI junto com a alta do preço geralmente indica entrada de novo capital e fortalecimento da tendência. Uma alta de preço com OI em queda costuma indicar fechamento de posições vendidas, e não nova demanda. Uma queda brusca do OI costuma estar associada a liquidações em massa.",
            },
            {
              type: "list",
              items: [
                "O OI mostra o número de contratos abertos, ainda não fechados",
                "Uma alta de preço junto com o crescimento do OI geralmente indica entrada de novo capital",
                "Uma queda brusca do OI costuma acompanhar liquidações em massa de posições",
              ],
            },
            { type: "diagram", diagram: "open-interest", caption: "Open interest junto ao preço" },
          ],
          questions: [
            {
              prompt: "O que o Open Interest mostra?",
              options: [
                "O número total de contratos abertos, ainda não fechados",
                "O número de usuários registrados na corretora",
                "O volume total de todas as operações em toda a história da corretora",
              ],
              correctAnswer: "O número total de contratos abertos, ainda não fechados",
            },
            {
              prompt: "O que geralmente indica o crescimento simultâneo do preço e do Open Interest?",
              options: [
                "Entrada de novo capital e fortalecimento da tendência",
                "Uma queda da volatilidade a zero",
                "Uma falha técnica da corretora",
              ],
              correctAnswer: "Entrada de novo capital e fortalecimento da tendência",
            },
            {
              prompt: "Com o que uma queda brusca do Open Interest costuma estar associada?",
              options: [
                "Com a adição de um novo token à listagem",
                "Com liquidações em massa de posições abertas",
                "Com uma atualização programada da corretora",
              ],
              correctAnswer: "Com liquidações em massa de posições abertas",
            },
          ],
        },
        {
          slug: "funding-rate",
          title: "Funding Rate",
          summary: "A taxa de financiamento nos futuros perpétuos e o que ela indica sobre o sentimento do mercado.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Funding Rate é um pagamento periódico entre os detentores de posições compradas e vendidas em futuros perpétuos, um mecanismo que mantém o preço do contrato próximo do preço do mercado à vista. Um funding positivo significa que os comprados pagam os vendidos; negativo, o contrário.",
            },
            {
              type: "paragraph",
              text: "Um funding positivo persistentemente alto geralmente indica um mercado superaquecido com excesso de posições compradas, o que aumenta o risco de liquidações em cascata em uma reversão para baixo. Um funding fortemente negativo, por outro lado, pode sinalizar pessimismo excessivo e potencial para uma recuperação.",
            },
            {
              type: "list",
              items: [
                "O Funding Rate mantém o preço do futuro perpétuo próximo do preço à vista",
                "Um funding positivo persistentemente alto indica um mercado superaquecido por posições compradas",
                "Um funding fortemente negativo pode indicar pessimismo excessivo do mercado",
              ],
            },
            { type: "diagram", diagram: "funding-rate", caption: "Funding rate num gráfico" },
          ],
          questions: [
            {
              prompt: "Qual função o Funding Rate desempenha nos futuros perpétuos?",
              options: [
                "Determina a taxa da corretora para saque de fundos",
                "Estabelece a alavancagem máxima",
                "Mantém o preço do contrato próximo do preço do mercado à vista",
              ],
              correctAnswer: "Mantém o preço do contrato próximo do preço do mercado à vista",
            },
            {
              prompt: "O que significa um funding positivo persistentemente alto?",
              options: [
                "O mercado está superaquecido por excesso de posições compradas",
                "O preço do ativo vai garantidamente continuar subindo",
                "Não há traders no mercado",
              ],
              correctAnswer: "O mercado está superaquecido por excesso de posições compradas",
            },
            {
              prompt: "Quem paga a quem quando o Funding Rate é positivo?",
              options: [
                "A corretora paga igualmente a todos os traders",
                "Os detentores de posições vendidas pagam os detentores de posições compradas",
                "Os detentores de posições compradas pagam os detentores de posições vendidas",
              ],
              correctAnswer: "Os detentores de posições compradas pagam os detentores de posições vendidas",
            },
          ],
        },
        {
          slug: "liquidations",
          title: "Liquidations",
          summary: "O fechamento forçado de posições alavancadas e por que as liquidações intensificam o movimento de preço.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Liquidations (liquidações) são o fechamento forçado de uma posição pela corretora, quando o prejuízo atinge um nível em que a margem não é mais suficiente para mantê-la. As liquidações ocorrem a preço de mercado e independem da vontade do trader.",
            },
            {
              type: "paragraph",
              text: "Liquidações em massa em uma mesma direção (liquidações em cascata) intensificam por si só o movimento de preço: o fechamento de posições compradas cria pressão adicional de venda, e o fechamento de posições vendidas cria demanda adicional, o que explica os movimentos de preço bruscos e rápidos em momentos de forte volatilidade.",
            },
            {
              type: "list",
              items: [
                "Liquidação é o fechamento forçado de uma posição pela corretora por falta de margem",
                "As liquidações em cascata intensificam e aceleram o movimento de preço em uma direção",
                "Mapas de liquidação são usados pelos traders para avaliar zonas de risco elevado",
              ],
            },
            { type: "diagram", diagram: "liquidations", caption: "Uma cascata de liquidações num gráfico" },
          ],
          questions: [
            {
              prompt: "O que acontece quando uma posição é liquidada?",
              options: [
                "O trader fecha a posição voluntariamente com lucro",
                "A corretora fecha a posição à força por falta de margem",
                "A corretora dobra automaticamente o volume da posição",
              ],
              correctAnswer: "A corretora fecha a posição à força por falta de margem",
            },
            {
              prompt: "Por que as liquidações em cascata intensificam o movimento de preço?",
              options: [
                "As liquidações sempre interrompem completamente o movimento de preço",
                "O fechamento de posições cria pressão adicional na direção do movimento",
                "As liquidações não afetam o preço de forma alguma",
              ],
              correctAnswer: "O fechamento de posições cria pressão adicional na direção do movimento",
            },
            {
              prompt: "Para que os traders usam mapas (heatmap) de liquidação?",
              options: [
                "Para calcular impostos sobre o lucro",
                "Para avaliar zonas de risco elevado de movimento brusco de preço",
                "Para saber a data exata do próximo halving",
              ],
              correctAnswer: "Para avaliar zonas de risco elevado de movimento brusco de preço",
            },
          ],
        },
      ],
    },
    {
      title: "Análise On-Chain",
      lessons: [
        {
          slug: "koshelki-kitov",
          title: "Carteiras de baleias",
          summary: "Como o monitoramento de grandes carteiras ajuda a avaliar o sentimento dos grandes detentores.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "\"Baleias\" são endereços que possuem uma grande parcela da oferta total de um ativo. Como todas as transações na blockchain são públicas, os traders monitoram os movimentos dessas carteiras — por exemplo, grandes transferências para corretoras (possível preparação para venda) ou, ao contrário, de corretoras para armazenamento a frio.",
            },
            {
              type: "paragraph",
              text: "É importante considerar o contexto: uma transferência da corretora nem sempre significa um holding de longo prazo, e uma transferência para a corretora nem sempre significa uma venda imediata — pode ser apenas uma redistribuição entre carteiras do mesmo proprietário. Os dados sobre baleias são um sinal complementar, não autossuficiente.",
            },
            {
              type: "list",
              items: [
                "As carteiras de baleias podem ser monitoradas graças à publicidade das transações na blockchain",
                "Uma grande transferência para uma corretora costuma ser interpretada como uma possível preparação para venda",
                "Os dados sobre a movimentação de baleias devem ser usados junto com outros tipos de análise, não isoladamente",
              ],
            },
          ],
          questions: [
            {
              prompt: "Por que é possível monitorar os movimentos das carteiras de baleias?",
              options: [
                "Isso só é possível para os reguladores",
                "Todas as transações na blockchain são publicamente acessíveis",
                "As corretoras publicam diariamente os dados pessoais de seus clientes",
              ],
              correctAnswer: "Todas as transações na blockchain são publicamente acessíveis",
            },
            {
              prompt: "Como costuma ser interpretada uma grande transferência de tokens para uma corretora?",
              options: [
                "Como um sinal garantido de holding de longo prazo",
                "Como um erro técnico da rede",
                "Como uma possível preparação para venda",
              ],
              correctAnswer: "Como uma possível preparação para venda",
            },
            {
              prompt: "Qual é a forma mais correta de usar os dados sobre a movimentação de baleias?",
              options: [
                "Como o único sinal necessário para entrar em uma operação",
                "Esses dados são inúteis e não devem ser considerados",
                "Como um sinal complementar junto com outros tipos de análise",
              ],
              correctAnswer: "Como um sinal complementar junto com outros tipos de análise",
            },
          ],
        },
        {
          slug: "birzhevye-pritoki-i-ottoki",
          title: "Entradas e saídas de corretoras",
          summary: "O que o movimento de moedas de e para corretoras significa em termos de possível pressão sobre o preço.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Entradas em corretoras (exchange inflow) são o volume de moedas transferidas para as carteiras de corretoras; saídas (exchange outflow) são o volume de moedas retiradas das corretoras. O aumento das entradas costuma ser interpretado como um aumento da pressão potencial de venda, e o aumento das saídas, como acumulação e redução da oferta disponível.",
            },
            {
              type: "paragraph",
              text: "Uma saída líquida consistente das corretoras por um período prolongado costuma ser associada a uma fase de acumulação e à redução da oferta líquida disponível para venda. Já uma entrada única e brusca de um valor grande, ao contrário, costuma preceder volatilidade local.",
            },
            {
              type: "list",
              items: [
                "As entradas em corretoras costumam estar associadas ao aumento da oferta potencial de venda",
                "Uma saída consistente das corretoras costuma ser associada a uma fase de acumulação",
                "Uma entrada única e brusca de um valor grande costuma preceder volatilidade local",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que se chama de entrada em corretora (exchange inflow)?",
              options: [
                "O volume de moedas transferidas para as carteiras de corretoras",
                "O número de novos usuários da corretora",
                "O volume de moedas minerado em um dia",
              ],
              correctAnswer: "O volume de moedas transferidas para as carteiras de corretoras",
            },
            {
              prompt: "A que fase de mercado costuma ser associada uma saída consistente de moedas das corretoras?",
              options: [
                "À listagem de um novo token",
                "À fase de acumulação",
                "À fase de venda em pânico",
              ],
              correctAnswer: "À fase de acumulação",
            },
            {
              prompt: "O que costuma preceder uma entrada única e brusca de um valor grande em uma corretora?",
              options: [
                "A paralisação total das negociações",
                "Volatilidade local de preço",
                "A redução automática das taxas da corretora",
              ],
              correctAnswer: "Volatilidade local de preço",
            },
          ],
        },
        {
          slug: "tvl",
          title: "TVL",
          summary: "Valor total bloqueado como indicador de confiança em um protocolo DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "TVL (Total Value Locked) é o valor total dos ativos bloqueados nos smart contracts de um protocolo: em pools de liquidez, staking, plataformas de empréstimo. O TVL é frequentemente usado como indicador de escala e de confiança dos usuários em um protocolo ou em toda uma rede blockchain.",
            },
            {
              type: "paragraph",
              text: "É importante considerar que o crescimento do TVL pode ser causado não apenas pela entrada de novo capital, mas também pelo aumento do preço dos ativos já bloqueados. Já uma queda brusca do TVL pode sinalizar tanto uma saída de capital quanto uma queda no preço dos tokens bloqueados.",
            },
            {
              type: "list",
              items: [
                "O TVL mede o valor dos ativos bloqueados nos smart contracts do protocolo",
                "O crescimento do TVL pode refletir tanto a entrada de novo capital quanto o aumento do preço dos ativos",
                "Uma queda brusca do TVL costuma ser vista como um sinal de alerta para o protocolo",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que o indicador TVL mede?",
              options: [
                "O número de desenvolvedores trabalhando no projeto",
                "O número total de transações da rede de todos os tempos",
                "O valor total dos ativos bloqueados nos smart contracts do protocolo",
              ],
              correctAnswer: "O valor total dos ativos bloqueados nos smart contracts do protocolo",
            },
            {
              prompt: "Por que o TVL pode crescer mesmo sem entrada de novo capital?",
              options: [
                "O TVL não pode crescer sem entrada de novo capital",
                "Devido ao aumento do preço dos ativos já bloqueados",
                "Devido à queda da capitalização total do mercado",
              ],
              correctAnswer: "Devido ao aumento do preço dos ativos já bloqueados",
            },
            {
              prompt: "Como os traders costumam interpretar uma queda brusca do TVL de um protocolo?",
              options: [
                "O TVL não tem relação alguma com o estado do protocolo",
                "Como um possível sinal de alerta (saída de capital ou queda no preço dos ativos)",
                "Como um sinal claramente positivo de compra",
              ],
              correctAnswer: "Como um possível sinal de alerta (saída de capital ou queda no preço dos ativos)",
            },
          ],
        },
        {
          slug: "stablecoins",
          title: "Stablecoins",
          summary: "O papel das stablecoins no mercado cripto e suas reservas em corretoras como indicador de demanda potencial.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Stablecoins são criptomoedas cujo valor é atrelado a um ativo estável, geralmente o dólar americano (USDT, USDC). Elas funcionam como a principal \"unidade de conta\" do mercado cripto, permitindo a transição entre ativos e a preservação de valor sem sair para o sistema bancário tradicional.",
            },
            {
              type: "paragraph",
              text: "O volume total de stablecoins nas carteiras das corretoras costuma ser visto como um indicador de \"pólvora seca\" — o poder de compra potencial do mercado. O crescimento das reservas de stablecoins nas corretoras pode preceder um aumento de demanda por ativos de risco.",
            },
            {
              type: "list",
              items: [
                "As stablecoins são atreladas a um ativo estável, geralmente o dólar americano",
                "Elas funcionam como unidade de conta e reserva de valor dentro do mercado cripto",
                "O crescimento das reservas de stablecoins nas corretoras costuma ser associado a um potencial aumento do poder de compra",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que diferencia as stablecoins da maioria das outras criptomoedas?",
              options: [
                "Elas não podem ser transferidas entre carteiras",
                "Elas existem apenas fora da blockchain",
                "Seu valor é atrelado a um ativo estável, geralmente o dólar americano",
              ],
              correctAnswer: "Seu valor é atrelado a um ativo estável, geralmente o dólar americano",
            },
            {
              prompt: "Qual função as stablecoins desempenham no mercado cripto?",
              options: [
                "Unidade de conta e reserva de valor dentro do mercado",
                "A substituição do mecanismo de consenso da blockchain",
                "O único meio de mineração",
              ],
              correctAnswer: "Unidade de conta e reserva de valor dentro do mercado",
            },
            {
              prompt: "O que o crescimento das reservas de stablecoins nas corretoras pode indicar?",
              options: [
                "Um potencial aumento do poder de compra do mercado",
                "A paralisação total das negociações na corretora",
                "Uma falha técnica da stablecoin",
              ],
              correctAnswer: "Um potencial aumento do poder de compra do mercado",
            },
          ],
        },
        {
          slug: "onchain-metriki",
          title: "Métricas on-chain",
          summary: "Uma visão geral das principais métricas de rede: endereços ativos, taxas de rede e sua aplicação na análise.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Métricas on-chain são dados obtidos diretamente da blockchain: número de endereços ativos, volume de transferências, taxas de rede, número de novas carteiras. Ao contrário dos dados de mercado (preço, volume da corretora), elas refletem a atividade real da rede.",
            },
            {
              type: "paragraph",
              text: "O crescimento do número de endereços ativos e do volume de transferências com um preço relativamente calmo pode indicar um uso fundamental crescente da rede. Essas métricas são especialmente úteis para análises de médio e longo prazo, e não para o timing preciso de entrada.",
            },
            {
              type: "list",
              items: [
                "As métricas on-chain refletem a atividade real da rede, não apenas o preço na corretora",
                "O crescimento de endereços ativos com preço calmo pode indicar um aumento no uso fundamental",
                "A análise on-chain é mais adequada para conclusões de médio e longo prazo do que para o timing preciso",
              ],
            },
          ],
          questions: [
            {
              prompt: "Em que as métricas on-chain se diferenciam de dados puramente de mercado, como preço e volume da corretora?",
              options: [
                "Elas são obtidas diretamente da blockchain e refletem a atividade real da rede",
                "Elas só estão disponíveis para os donos da corretora",
                "Elas coincidem completamente com os dados de mercado",
              ],
              correctAnswer: "Elas são obtidas diretamente da blockchain e refletem a atividade real da rede",
            },
            {
              prompt: "O que o crescimento de endereços ativos da rede com um preço relativamente calmo pode indicar?",
              options: [
                "Uma falha técnica da blockchain",
                "A paralisação total das transações",
                "Um uso fundamental crescente da rede",
              ],
              correctAnswer: "Um uso fundamental crescente da rede",
            },
            {
              prompt: "Para qual horizonte de análise as métricas on-chain costumam ser mais adequadas?",
              options: [
                "Para análises de médio e longo prazo",
                "As métricas on-chain não são aplicadas na prática em lugar nenhum",
                "Exclusivamente para o timing de entrada com precisão de minutos",
              ],
              correctAnswer: "Para análises de médio e longo prazo",
            },
          ],
        },
      ],
    },
    {
      title: "Trading Profissional",
      lessons: [
        {
          slug: "torgovy-zhurnal",
          title: "Diário de trading",
          summary: "Por que registrar cada operação e o que deve constar em cada entrada do diário.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "O diário de trading é o registro sistemático de cada operação: o motivo da entrada, o tamanho da posição, o stop-loss e o take-profit, o resultado final e o estado emocional do trader. Sem um diário, o trader depende da memória, que registra seletivamente as operações bem-sucedidas e apaga as malsucedidas.",
            },
            {
              type: "paragraph",
              text: "A análise regular do diário permite identificar padrões: por exemplo, que a maioria das perdas ocorre em operações abertas sem um sinal claro, ou que determinado horário do dia é consistentemente menos lucrativo. Isso transforma sensações intuitivas em dados concretos e verificáveis.",
            },
            {
              type: "list",
              items: [
                "O diário deve registrar o motivo da entrada, não apenas o resultado da operação",
                "A análise regular do diário ajuda a identificar erros recorrentes",
                "Os dados do diário são mais objetivos do que a memória subjetiva do trader",
              ],
            },
          ],
          questions: [
            {
              prompt: "Por que o trader deve manter um diário de trading?",
              options: [
                "O diário só é necessário para a declaração de impostos",
                "É uma exigência da corretora para abrir operações",
                "Para registrar as operações de forma objetiva, em vez de depender de uma memória seletiva",
              ],
              correctAnswer: "Para registrar as operações de forma objetiva, em vez de depender de uma memória seletiva",
            },
            {
              prompt: "O que obrigatoriamente deve ser registrado em cada entrada do diário, além do resultado da operação?",
              options: [
                "O nome do dispositivo usado",
                "O motivo da entrada na operação",
                "Apenas o lucro final em dólares",
              ],
              correctAnswer: "O motivo da entrada na operação",
            },
            {
              prompt: "O que a análise regular do diário de trading proporciona?",
              options: [
                "Aumenta automaticamente o volume do depósito",
                "Garante a ausência de operações perdedoras no futuro",
                "Permite identificar padrões e erros recorrentes",
              ],
              correctAnswer: "Permite identificar padrões e erros recorrentes",
            },
          ],
        },
        {
          slug: "sozdanie-strategii",
          title: "Criação de estratégia",
          summary: "Quais elementos obrigatórios compõem uma estratégia de trading completa.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Uma estratégia de trading é um conjunto de regras claramente descrito: em que mercado operar, sob quais condições entrar em uma operação, onde posicionar o stop-loss e o take-profit, qual percentual do depósito arriscar. Sem essas regras definidas com antecedência, o trading se transforma em uma sequência de decisões aleatórias.",
            },
            {
              type: "paragraph",
              text: "Uma boa estratégia deve ser específica o suficiente para poder ser explicada a outra pessoa e testada em dados históricos. Ela não precisa funcionar em 100% dos casos — o importante é que as regras sejam reproduzíveis e que a expectativa matemática seja positiva.",
            },
            {
              type: "list",
              items: [
                "A estratégia obrigatoriamente inclui condições de entrada, saída e regras de gestão de risco",
                "As regras devem ser específicas o suficiente para serem testadas com dados históricos",
                "O objetivo da estratégia é uma expectativa matemática positiva, não 100% de precisão",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que obrigatoriamente deve constar na descrição de uma estratégia de trading?",
              options: [
                "A lista das criptomoedas favoritas do trader",
                "Condições de entrada, saída e regras de gestão de risco",
                "Apenas o valor de lucro desejado por mês",
              ],
              correctAnswer: "Condições de entrada, saída e regras de gestão de risco",
            },
            {
              prompt: "Por que a estratégia deve ser específica, e não vaga?",
              options: [
                "Para escondê-la de outros traders",
                "Para que possa ser explicada e testada com dados históricos",
                "A imprecisão das regras não tem importância",
              ],
              correctAnswer: "Para que possa ser explicada e testada com dados históricos",
            },
            {
              prompt: "Uma boa estratégia precisa ser lucrativa em 100% das operações?",
              options: [
                "Sim, mas apenas no timeframe diário",
                "Sim, caso contrário a estratégia é considerada inútil",
                "Não, o importante é uma expectativa matemática positiva no geral",
              ],
              correctAnswer: "Não, o importante é uma expectativa matemática positiva no geral",
            },
          ],
        },
        {
          slug: "backtest",
          title: "Backtest",
          summary: "Teste de uma estratégia de trading em dados históricos antes da aplicação real.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Backtest é o teste de uma estratégia de trading em dados históricos: as regras são aplicadas a dados de preço passados para avaliar se a estratégia teria sido lucrativa. É uma forma de obter estatísticas sobre a estratégia sem arriscar capital real.",
            },
            {
              type: "paragraph",
              text: "O backtest tem limitações: resultados passados não garantem resultados futuros, e um teste feito sem cuidado pode levar a um sobreajuste (overfitting) das regras a um período histórico específico. Ainda assim, o backtest é um primeiro passo necessário antes de confiar dinheiro real a uma estratégia.",
            },
            {
              type: "list",
              items: [
                "O backtest permite avaliar a estratégia em dados históricos sem risco real",
                "Os resultados passados do backtest não garantem um resultado semelhante no futuro",
                "O sobreajuste das regras a um período histórico específico é um erro típico de backtesting",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é um backtest de uma estratégia de trading?",
              options: [
                "Uma pesquisa com outros traders sobre a estratégia",
                "Trading real com um depósito mínimo",
                "O teste das regras da estratégia em dados históricos de preço",
              ],
              correctAnswer: "O teste das regras da estratégia em dados históricos de preço",
            },
            {
              prompt: "Um backtest bem-sucedido garante o mesmo resultado no futuro?",
              options: [
                "Não, resultados passados não garantem resultados futuros",
                "Garante, mas apenas para ações",
                "Sim, o resultado do backtest sempre se repete no trading real",
              ],
              correctAnswer: "Não, resultados passados não garantem resultados futuros",
            },
            {
              prompt: "O que é sobreajuste (overfitting) no contexto de backtesting?",
              options: [
                "Operar sem stop-loss",
                "O ajuste excessivo das regras a um período histórico específico",
                "O uso de um número muito pequeno de indicadores",
              ],
              correctAnswer: "O ajuste excessivo das regras a um período histórico específico",
            },
          ],
        },
        {
          slug: "forward-test",
          title: "Forward test",
          summary: "Teste da estratégia em dados novos, ainda não utilizados, depois do backtest.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "O forward test é o teste da estratégia em uma conta real ou de demonstração avançando no tempo, com dados que não foram usados no desenvolvimento e no backtesting das regras. É um passo fundamental que mostra se a estratégia funciona em dados verdadeiramente novos.",
            },
            {
              type: "paragraph",
              text: "O forward test ajuda a identificar um sobreajuste que pode ter passado despercebido no backtest: se os resultados do forward test divergirem muito dos resultados do backtest, é provável que a estratégia tenha sido ajustada de forma excessivamente precisa aos dados passados.",
            },
            {
              type: "list",
              items: [
                "O forward test é realizado com dados não utilizados no desenvolvimento da estratégia",
                "Ele permite identificar um sobreajuste que passa despercebido em um backtest comum",
                "Uma grande divergência entre os resultados do backtest e do forward test é um sinal de alerta",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual é a principal diferença entre o forward test e o backtest?",
              options: [
                "Não há diferença entre eles",
                "O forward test é realizado com dados novos, não utilizados no desenvolvimento da estratégia",
                "O forward test é sempre realizado apenas com um grande depósito real",
              ],
              correctAnswer: "O forward test é realizado com dados novos, não utilizados no desenvolvimento da estratégia",
            },
            {
              prompt: "O que o forward test ajuda a identificar, ao contrário do backtest?",
              options: [
                "A taxa da corretora para saque de fundos",
                "O sobreajuste da estratégia aos dados passados",
                "A data exata do próximo halving",
              ],
              correctAnswer: "O sobreajuste da estratégia aos dados passados",
            },
            {
              prompt: "O que uma grande divergência entre os resultados do backtest e do forward test indica?",
              options: [
                "Que a estratégia é absolutamente confiável",
                "Provavelmente a estratégia foi ajustada de forma excessivamente precisa aos dados passados",
                "Isso não tem importância para a avaliação da estratégia",
              ],
              correctAnswer: "Provavelmente a estratégia foi ajustada de forma excessivamente precisa aos dados passados",
            },
          ],
        },
        {
          slug: "statistika-sdelok",
          title: "Estatísticas de operações",
          summary: "As principais métricas a acompanhar para avaliar objetivamente o próprio trading.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "As estatísticas de operações são um conjunto de métricas objetivas calculadas com base no diário: a taxa de acerto (proporção de operações lucrativas), o R/R médio, a expectativa matemática da operação, o drawdown máximo, entre outras. Esses números mostram o quadro real do trading, e não uma sensação subjetiva.",
            },
            {
              type: "paragraph",
              text: "Nenhuma métrica deve ser avaliada isoladamente das demais: uma taxa de acerto alta com um R/R médio baixo pode gerar o mesmo resultado que uma taxa de acerto baixa com um R/R alto. É a expectativa matemática — a média do que uma operação traz — que serve como referência final da qualidade da estratégia.",
            },
            {
              type: "list",
              items: [
                "A taxa de acerto e o R/R médio devem ser analisados em conjunto, não separadamente",
                "A expectativa matemática da operação é a métrica final mais importante da qualidade da estratégia",
                "O drawdown máximo mostra o quanto o depósito caiu no pior período",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que a taxa de acerto de uma estratégia de trading mostra?",
              options: [
                "O número de operações abertas no momento",
                "O lucro total acumulado em dólares",
                "A proporção de operações lucrativas em relação ao total",
              ],
              correctAnswer: "A proporção de operações lucrativas em relação ao total",
            },
            {
              prompt: "Por que a taxa de acerto não pode ser avaliada isoladamente do R/R médio?",
              options: [
                "Uma taxa de acerto alta com R/R baixo pode gerar o mesmo resultado que uma taxa de acerto baixa com R/R alto",
                "O R/R não influencia o resultado final de forma alguma",
                "A taxa de acerto e o R/R são sempre absolutamente idênticos",
              ],
              correctAnswer: "Uma taxa de acerto alta com R/R baixo pode gerar o mesmo resultado que uma taxa de acerto baixa com R/R alto",
            },
            {
              prompt: "O que a métrica de drawdown máximo mostra?",
              options: [
                "O número de ativos na carteira",
                "O retorno anual final da estratégia",
                "O quanto o depósito caiu no pior período de trading",
              ],
              correctAnswer: "O quanto o depósito caiu no pior período de trading",
            },
          ],
        },
      ],
    },
    {
      title: "Altcoins e Tokenomics",
      lessons: [
        {
          slug: "tokenomics",
          title: "Tokenomics",
          summary: "O modelo econômico de um token: oferta, distribuição e incentivos para os detentores.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Tokenomics (tokenomia) descreve o modelo econômico de um token: a oferta total e máxima, a distribuição entre equipe, investidores e comunidade, os mecanismos de emissão e queima, além dos incentivos que levam os detentores a usar ou manter o token.",
            },
            {
              type: "paragraph",
              text: "Uma tokenomia fraca — por exemplo, uma grande parcela de tokens nas mãos da equipe com um período de bloqueio curto — cria pressão constante de venda sobre o mercado, independentemente da qualidade do próprio produto. A análise da tokenomia é tão importante para avaliar um projeto quanto a análise de sua tecnologia.",
            },
            {
              type: "list",
              items: [
                "A tokenomia descreve a oferta, a distribuição e os incentivos dos detentores do token",
                "Uma grande parcela de tokens nas mãos da equipe com vesting curto cria risco de pressão de venda",
                "A análise da tokenomia é tão importante quanto a análise da tecnologia do projeto",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que a tokenomia de um projeto descreve?",
              options: [
                "A lista de corretoras onde o token é negociado",
                "O modelo econômico do token: oferta, distribuição e incentivos dos detentores",
                "Apenas a stack técnica da blockchain",
              ],
              correctAnswer: "O modelo econômico do token: oferta, distribuição e incentivos dos detentores",
            },
            {
              prompt: "Que fator da tokenomia cria risco de pressão de venda constante?",
              options: [
                "A ausência total de tokens nas mãos da equipe",
                "Uma grande parcela de tokens nas mãos da equipe com um período de bloqueio curto",
                "Uma oferta máxima do token igual a zero",
              ],
              correctAnswer: "Uma grande parcela de tokens nas mãos da equipe com um período de bloqueio curto",
            },
            {
              prompt: "Quão importante é a análise da tokenomia em comparação com a análise da tecnologia do projeto?",
              options: [
                "A tokenomia não tem importância para a avaliação do projeto",
                "É importante apenas para projetos sem blockchain",
                "Ela é igualmente importante e deve ser considerada no mesmo nível que a tecnologia",
              ],
              correctAnswer: "Ela é igualmente importante e deve ser considerada no mesmo nível que a tecnologia",
            },
          ],
        },
        {
          slug: "fdv",
          title: "FDV",
          summary: "Avaliação totalmente diluída e por que ela é mais importante do que a capitalização de mercado para novos tokens.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "FDV (Fully Diluted Valuation) é a avaliação de um projeto calculada como se toda a oferta máxima de tokens já estivesse em circulação, ao preço atual. Ao contrário da capitalização de mercado, que considera apenas os tokens em circulação atual, o FDV mostra a avaliação potencial futura.",
            },
            {
              type: "paragraph",
              text: "Uma grande diferença entre a capitalização atual e o FDV significa que uma parcela significativa da oferta ainda não foi emitida e chegará ao mercado com o tempo, criando pressão potencial de venda no momento das desbloqueadas — algo especialmente importante para novos tokens com baixo percentual em circulação.",
            },
            {
              type: "list",
              items: [
                "O FDV é calculado com base na oferta máxima, não na oferta atual de tokens",
                "Uma grande diferença entre a capitalização e o FDV indica uma emissão futura significativa",
                "Tokens com baixo percentual em circulação e FDV alto exigem atenção redobrada ao cronograma de desbloqueios",
              ],
            },
          ],
          questions: [
            {
              prompt: "Como o FDV é calculado?",
              options: [
                "Com base apenas nos tokens negociados em uma única corretora específica",
                "Com base no volume de negociação das últimas 24 horas",
                "Com base na oferta máxima de tokens ao preço atual",
              ],
              correctAnswer: "Com base na oferta máxima de tokens ao preço atual",
            },
            {
              prompt: "O que uma grande diferença entre a capitalização de mercado e o FDV indica?",
              options: [
                "Uma parcela significativa da oferta que ainda não foi colocada em circulação",
                "Um erro técnico no cálculo do preço",
                "Que o token já está totalmente desbloqueado",
              ],
              correctAnswer: "Uma parcela significativa da oferta que ainda não foi colocada em circulação",
            },
            {
              prompt: "Para quais tokens é especialmente importante observar com atenção a relação entre capitalização e FDV?",
              options: [
                "Para novos tokens com baixo percentual da oferta em circulação",
                "A relação entre capitalização e FDV não tem importância prática",
                "Apenas para stablecoins",
              ],
              correctAnswer: "Para novos tokens com baixo percentual da oferta em circulação",
            },
          ],
        },
        {
          slug: "vesting",
          title: "Vesting",
          summary: "O desbloqueio gradual dos tokens de equipe e investidores segundo um cronograma definido.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Vesting é um mecanismo de desbloqueio gradual dos tokens alocados à equipe, investidores ou conselheiros do projeto, seguindo um cronograma definido com antecedência, em vez de uma entrega única. Isso deve reduzir o incentivo dos participantes iniciais de vender os tokens imediatamente após a listagem.",
            },
            {
              type: "paragraph",
              text: "A estrutura padrão de vesting inclui um \"cliff\" — um período durante o qual os tokens ficam totalmente bloqueados — seguido de um desbloqueio linear ou escalonado. Um cliff curto e um cronograma de vesting agressivo aumentam o risco de pressão de venda nas fases iniciais.",
            },
            {
              type: "list",
              items: [
                "O vesting desbloqueia os tokens da equipe e dos investidores gradualmente, não de uma vez",
                "O cliff é o período de bloqueio total dos tokens no início do cronograma de vesting",
                "Um cliff curto e um cronograma de desbloqueio agressivo aumentam o risco de pressão de venda",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é o vesting de tokens?",
              options: [
                "Um método de mineração de novos tokens",
                "Um mecanismo de desbloqueio gradual de tokens segundo um cronograma definido",
                "A venda única de todos os tokens do projeto",
              ],
              correctAnswer: "Um mecanismo de desbloqueio gradual de tokens segundo um cronograma definido",
            },
            {
              prompt: "O que é o cliff no cronograma de vesting?",
              options: [
                "O período de bloqueio total dos tokens no início do cronograma",
                "Uma taxa pelo saque antecipado de tokens",
                "O desbloqueio final de todos os tokens restantes",
              ],
              correctAnswer: "O período de bloqueio total dos tokens no início do cronograma",
            },
            {
              prompt: "Por que os projetos usam vesting para a equipe e os investidores?",
              options: [
                "É uma exigência técnica de qualquer blockchain",
                "Para reduzir o incentivo de vender os tokens imediatamente após a listagem",
                "Para eliminar completamente a participação da equipe no projeto",
              ],
              correctAnswer: "Para reduzir o incentivo de vender os tokens imediatamente após a listagem",
            },
          ],
        },
        {
          slug: "unlocks",
          title: "Unlocks",
          summary: "Os desbloqueios de tokens segundo o cronograma e seu impacto no preço do ativo.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Unlocks (desbloqueios) são os momentos em que mais uma parcela de tokens bloqueados (de equipe, investidores, fundos do ecossistema) se torna disponível para transferência e possível venda. As datas e os volumes dos desbloqueios geralmente são conhecidos com antecedência e divulgados pelo projeto.",
            },
            {
              type: "paragraph",
              text: "Um desbloqueio grande em relação ao volume de negociação atual pode criar uma pressão de venda perceptível sobre o preço, especialmente se os destinatários dos tokens não tiverem motivação de longo prazo para mantê-los. Os traders costumam acompanhar com antecedência o calendário de desbloqueios como parte da gestão de risco.",
            },
            {
              type: "list",
              items: [
                "O desbloqueio torna mais uma parcela de tokens disponível para transferência e venda",
                "Um desbloqueio grande em relação ao volume de negociação pode criar pressão sobre o preço",
                "O calendário de desbloqueios futuros é um elemento importante da gestão de risco para posições em altcoins",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que acontece no momento do desbloqueio (unlock) de tokens?",
              options: [
                "A corretora suspende temporariamente as negociações do ativo",
                "Mais uma parcela de tokens antes bloqueados se torna disponível para transferência",
                "Todos os tokens do projeto são destruídos",
              ],
              correctAnswer: "Mais uma parcela de tokens antes bloqueados se torna disponível para transferência",
            },
            {
              prompt: "Quando o desbloqueio de tokens pode criar uma pressão perceptível sobre o preço?",
              options: [
                "Quando seu volume é grande em relação ao volume de negociação atual",
                "Somente se o desbloqueio ocorrer à noite",
                "Os desbloqueios nunca afetam o preço",
              ],
              correctAnswer: "Quando seu volume é grande em relação ao volume de negociação atual",
            },
            {
              prompt: "Por que os traders acompanham o calendário de desbloqueios de um token?",
              options: [
                "O calendário de desbloqueios não tem aplicação prática",
                "É um elemento de gestão de risco ao manter uma posição em altcoin",
                "Para calcular com precisão os impostos sobre o lucro",
              ],
              correctAnswer: "É um elemento de gestão de risco ao manter uma posição em altcoin",
            },
          ],
        },
        {
          slug: "emissiya",
          title: "Emissão",
          summary: "A velocidade de emissão de novos tokens e seu impacto na pressão de longo prazo sobre o preço.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Emissão é o processo de colocar novos tokens em circulação, por exemplo, por meio de recompensas de mineração, staking ou concessões do ecossistema. A velocidade de emissão determina o quão rápido a oferta do token cresce ao longo do tempo, independentemente da demanda por ele.",
            },
            {
              type: "paragraph",
              text: "Uma emissão alta e constante sem um crescimento correspondente da demanda cria uma pressão persistente sobre o preço no longo prazo — essa é uma das razões pelas quais alguns projetos introduzem mecanismos de queima de tokens, para compensar parcialmente a emissão.",
            },
            {
              type: "list",
              items: [
                "A emissão aumenta a oferta do token independentemente da demanda atual",
                "Uma emissão alta sem crescimento da demanda cria pressão de longo prazo sobre o preço",
                "Os mecanismos de queima de tokens são introduzidos para compensar parcialmente a emissão",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é a emissão de um token?",
              options: [
                "O processo de verificação de autenticidade de uma carteira",
                "O processo de colocar novos tokens em circulação",
                "O processo de remoção total do token de uma corretora",
              ],
              correctAnswer: "O processo de colocar novos tokens em circulação",
            },
            {
              prompt: "O que acontece quando há emissão alta sem o crescimento correspondente da demanda?",
              options: [
                "A oferta total do token diminui",
                "Surge uma pressão persistente de longo prazo sobre o preço",
                "O preço do token garantidamente sobe",
              ],
              correctAnswer: "Surge uma pressão persistente de longo prazo sobre o preço",
            },
            {
              prompt: "Por que alguns projetos introduzem um mecanismo de queima de tokens?",
              options: [
                "Para interromper totalmente o funcionamento da rede",
                "Para compensar parcialmente o efeito da emissão sobre a oferta",
                "É uma exigência das corretoras para listar o token",
              ],
              correctAnswer: "Para compensar parcialmente o efeito da emissão sobre a oferta",
            },
          ],
        },
      ],
    },

    {
      title: "DeFi",
      lessons: [
        {
          slug: "dex",
          title: "DEX",
          summary: "Exchanges descentralizadas e a sua diferença fundamental em relação às centralizadas.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Uma DEX (Decentralized Exchange) é uma exchange que funciona através de contratos inteligentes, sem um operador central que detenha os fundos dos utilizadores. As operações são executadas diretamente entre as carteiras dos participantes, e não através de uma base de dados interna da exchange, como acontece nas plataformas centralizadas.",
            },
            {
              type: "paragraph",
              text: "A principal vantagem de uma DEX é que o utilizador mantém o controlo sobre os seus fundos até ao momento da operação (o princípio «not your keys, not your coins»). O contraponto é que toda a responsabilidade pela segurança da carteira e pela correta interação com o contrato inteligente recai sobre o próprio utilizador.",
            },
            {
              type: "list",
              items: [
                "Uma DEX funciona através de contratos inteligentes, sem um custodiante central dos fundos",
                "O utilizador mantém o controlo sobre os seus ativos até ao momento da operação",
                "A responsabilidade pela segurança da carteira numa DEX é inteiramente do utilizador",
              ],
            },
          ],
          questions: [
            {
              prompt: "Em que é que uma DEX se diferencia fundamentalmente de uma exchange centralizada?",
              options: [
                "Uma DEX funciona através de contratos inteligentes, sem um custodiante central dos fundos dos utilizadores",
                "As DEX estão disponíveis apenas para investidores institucionais",
                "Numa DEX não é possível realizar operações",
              ],
              correctAnswer: "Uma DEX funciona através de contratos inteligentes, sem um custodiante central dos fundos dos utilizadores",
            },
            {
              prompt: "Qual é a principal vantagem de negociar através de uma DEX em termos de controlo sobre os ativos?",
              options: [
                "O utilizador mantém o controlo sobre os fundos até ao momento da operação",
                "A DEX protege automaticamente contra todos os tipos de fraude",
                "A DEX garantidamente não cobra qualquer comissão",
              ],
              correctAnswer: "O utilizador mantém o controlo sobre os fundos até ao momento da operação",
            },
            {
              prompt: "Sobre quem recai a responsabilidade pela segurança da carteira ao utilizar uma DEX?",
              options: [
                "Inteiramente sobre os programadores do protocolo",
                "A responsabilidade é automaticamente segurada pela exchange",
                "Inteiramente sobre o próprio utilizador",
              ],
              correctAnswer: "Inteiramente sobre o próprio utilizador",
            },
          ],
        },
        {
          slug: "amm",
          title: "AMM",
          summary: "Market makers automáticos e o princípio de funcionamento dos pools de liquidez.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Um AMM (Automated Market Maker) é o mecanismo subjacente à maioria das DEX, no qual o preço de um ativo é determinado por uma fórmula matemática com base na proporção de tokens num pool de liquidez, e não por um livro de ordens, como nas exchanges tradicionais.",
            },
            {
              type: "paragraph",
              text: "O pool de liquidez é alimentado por utilizadores (fornecedores de liquidez), que depositam um par de tokens de valor equivalente e recebem uma parte das comissões de negociação. Operações grandes em relação ao tamanho do pool causam derrapagem (slippage) — um desvio significativo entre o preço de execução e o preço de mercado.",
            },
            {
              type: "list",
              items: [
                "Um AMM determina o preço através de uma fórmula baseada na proporção de tokens no pool, não num livro de ordens",
                "Os fornecedores de liquidez ganham uma parte das comissões de negociação do pool",
                "Uma operação grande em relação ao tamanho do pool causa uma derrapagem de preço significativa",
              ],
            },
          ],
          questions: [
            {
              prompt: "Como determina um AMM o preço de um ativo?",
              options: [
                "Através de um livro de ordens, como numa exchange centralizada",
                "Através de votação dos detentores do token",
                "Através de uma fórmula matemática baseada na proporção de tokens no pool",
              ],
              correctAnswer: "Através de uma fórmula matemática baseada na proporção de tokens no pool",
            },
            {
              prompt: "O que recebem os fornecedores de liquidez num pool AMM?",
              options: [
                "Uma percentagem anual fixa garantida sem qualquer risco",
                "O direito de gerir sozinhos o protocolo",
                "Uma parte das comissões de negociação do pool",
              ],
              correctAnswer: "Uma parte das comissões de negociação do pool",
            },
            {
              prompt: "O que é a derrapagem (slippage) no contexto de um AMM?",
              options: [
                "O atraso no processamento de uma transação por um nó da rede",
                "A comissão da rede pela confirmação de uma transação",
                "O desvio entre o preço de execução e o preço de mercado numa operação grande em relação ao tamanho do pool",
              ],
              correctAnswer: "O desvio entre o preço de execução e o preço de mercado numa operação grande em relação ao tamanho do pool",
            },
          ],
        },
        {
          slug: "staking",
          title: "Staking",
          summary: "Bloqueio de tokens para participar no consenso ou obter uma recompensa.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "O staking consiste em bloquear tokens para apoiar o funcionamento da rede (em blockchains com mecanismo Proof-of-Stake) ou participar num protocolo em troca de uma recompensa. Nas redes PoS, os stakers ajudam a validar transações e a garantir a segurança da rede.",
            },
            {
              type: "paragraph",
              text: "O rendimento do staking é geralmente expresso em percentagem anual (APR/APY), mas é importante ter em conta que é parcial ou totalmente formado através da emissão de novos tokens, o que pode anular o rendimento nominal através da diluição real da oferta.",
            },
            {
              type: "list",
              items: [
                "Nas redes Proof-of-Stake, o staking ajuda a validar transações e a proteger a rede",
                "O rendimento do staking é geralmente expresso em percentagem anual (APR/APY)",
                "O rendimento do staking é frequentemente formado, em parte, pela emissão, e não apenas pela procura real",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que papel desempenha o staking nas redes Proof-of-Stake?",
              options: [
                "É usado exclusivamente para marketing do projeto",
                "Ajuda a validar transações e a garantir a segurança da rede",
                "Substitui totalmente a necessidade da blockchain",
              ],
              correctAnswer: "Ajuda a validar transações e a garantir a segurança da rede",
            },
            {
              prompt: "Como é geralmente expresso o rendimento do staking?",
              options: [
                "Em percentagem anual (APR/APY)",
                "O rendimento do staking nunca é expresso numericamente",
                "Apenas num valor fixo em dólares por ano",
              ],
              correctAnswer: "Em percentagem anual (APR/APY)",
            },
            {
              prompt: "Através de que se forma frequentemente, em parte, o rendimento do staking?",
              options: [
                "Através da emissão de novos tokens",
                "Através de benefícios fiscais do Estado",
                "Exclusivamente através das comissões das exchanges centralizadas",
              ],
              correctAnswer: "Através da emissão de novos tokens",
            },
          ],
        },
        {
          slug: "lending",
          title: "Lending",
          summary: "Empréstimos descentralizados garantidos por criptoativos.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "O lending em DeFi permite que alguns utilizadores emprestem ativos através de um contrato inteligente e recebam juros, enquanto outros pedem emprestado com garantia dos seus próprios criptoativos, geralmente com sobrecolateralização (a garantia vale mais do que o valor do empréstimo).",
            },
            {
              type: "paragraph",
              text: "Se o valor da garantia cair abaixo de um determinado limite em relação ao valor do empréstimo, o protocolo liquida automaticamente a garantia para cobrir a dívida. Isto protege os credores, mas significa que os mutuários devem acompanhar atentamente o rácio de colateralização da sua posição.",
            },
            {
              type: "list",
              items: [
                "O empréstimo em DeFi geralmente exige uma garantia sobrecolateralizada por parte do mutuário",
                "A taxa de juro dos empréstimos e depósitos é determinada algoritmicamente pela oferta e procura no protocolo",
                "Se o valor da garantia cair abaixo de um limite, o protocolo liquida automaticamente a posição",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é geralmente exigido ao mutuário no lending DeFi?",
              options: [
                "Uma garantia sobrecolateralizada, superior ao valor do empréstimo",
                "Uma garantia de uma exchange centralizada",
                "Confirmação de identidade através de um banco",
              ],
              correctAnswer: "Uma garantia sobrecolateralizada, superior ao valor do empréstimo",
            },
            {
              prompt: "O que acontece se o valor da garantia cair abaixo de um determinado limite?",
              options: [
                "O empréstimo é automaticamente anulado sem consequências",
                "O protocolo aumenta automaticamente o valor do empréstimo",
                "O protocolo liquida automaticamente a garantia para cobrir a dívida",
              ],
              correctAnswer: "O protocolo liquida automaticamente a garantia para cobrir a dívida",
            },
            {
              prompt: "Quem recebe juros no sistema de lending DeFi?",
              options: [
                "No lending DeFi, não são pagos juros a ninguém",
                "Os utilizadores que emprestaram ativos através do protocolo",
                "Apenas os programadores do protocolo",
              ],
              correctAnswer: "Os utilizadores que emprestaram ativos através do protocolo",
            },
          ],
        },
        {
          slug: "yield-farming",
          title: "Yield Farming",
          summary: "Procura do rendimento máximo através da combinação de diferentes protocolos DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "O Yield Farming é uma estratégia de procura do rendimento máximo através da alocação de ativos em vários protocolos DeFi (pools de liquidez, empréstimos, staking), frequentemente transferindo capital entre protocolos à medida que o rendimento oferecido muda.",
            },
            {
              type: "paragraph",
              text: "Um rendimento anunciado elevado no farming está frequentemente associado a um risco acrescido: volatilidade dos próprios tokens de recompensa, risco do contrato inteligente do protocolo ou perdas impermanentes (impermanent loss) nos pools de liquidez. O rendimento e o risco em DeFi estão geralmente estreitamente ligados.",
            },
            {
              type: "list",
              items: [
                "O yield farming implica a movimentação ativa de capital entre protocolos em busca de rendimento",
                "Um rendimento anunciado elevado costuma vir acompanhado de risco acrescido",
                "As perdas impermanentes (impermanent loss) são um risco específico dos pools de liquidez",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que é o yield farming?",
              options: [
                "Um programa governamental de subsídio a projetos cripto",
                "Uma forma de minerar bitcoin com equipamento especializado",
                "Uma estratégia de procura do rendimento máximo através da alocação de ativos em diferentes protocolos DeFi",
              ],
              correctAnswer: "Uma estratégia de procura do rendimento máximo através da alocação de ativos em diferentes protocolos DeFi",
            },
            {
              prompt: "Com o que está geralmente associado um rendimento anunciado muito elevado no farming?",
              options: [
                "Com a ausência total de risco",
                "Com um risco acrescido (volatilidade do token, risco do contrato, impermanent loss)",
                "Com uma garantia estatal de rendimento",
              ],
              correctAnswer: "Com um risco acrescido (volatilidade do token, risco do contrato, impermanent loss)",
            },
            {
              prompt: "O que são as perdas impermanentes (impermanent loss)?",
              options: [
                "Uma comissão da rede pela transferência de tokens",
                "Uma perda garantida em qualquer staking",
                "Um risco específico dos pools de liquidez, relacionado com a alteração da relação de preços dos ativos",
              ],
              correctAnswer: "Um risco específico dos pools de liquidez, relacionado com a alteração da relação de preços dos ativos",
            },
          ],
        },
      ],
    },
    {
      title: "Memecoins e novos projetos",
      lessons: [
        {
          slug: "launchpad",
          title: "Launchpad",
          summary: "Plataformas para o lançamento inicial e venda de tokens de novos projetos.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Uma launchpad é uma plataforma que ajuda novos projetos a realizar a distribuição inicial de tokens e a atrair liquidez inicial, geralmente concedendo acesso antecipado aos participantes da plataforma em troca do cumprimento de determinadas condições (staking do token nativo, KYC, etc.).",
            },
            {
              type: "paragraph",
              text: "Participar através de uma launchpad não elimina os riscos do projeto — a reputação da plataforma influencia a seleção inicial, mas não garante o sucesso do token após o listing. É importante avaliar o próprio projeto separadamente da plataforma através da qual o lançamento ocorre.",
            },
            {
              type: "list",
              items: [
                "Uma launchpad ajuda os projetos na distribuição inicial de tokens e na atração de liquidez",
                "O acesso ao lançamento frequentemente exige o cumprimento de condições da plataforma (staking, KYC)",
                "A reputação de uma launchpad não garante o sucesso do token após o listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Para que usam os projetos as plataformas launchpad?",
              options: [
                "Para renunciar totalmente a atrair investidores",
                "Exclusivamente para suporte técnico da blockchain",
                "Para a distribuição inicial de tokens e a atração de liquidez",
              ],
              correctAnswer: "Para a distribuição inicial de tokens e a atração de liquidez",
            },
            {
              prompt: "O que é frequentemente exigido aos participantes para aceder a um lançamento numa launchpad?",
              options: [
                "Um diploma de analista financeiro",
                "O cumprimento de condições da plataforma, como o staking do token nativo",
                "O registo de uma pessoa coletiva",
              ],
              correctAnswer: "O cumprimento de condições da plataforma, como o staking do token nativo",
            },
            {
              prompt: "Uma boa reputação de uma launchpad garante o sucesso do token lançado através dela?",
              options: [
                "Sim, é uma garantia de sucesso a cem por cento",
                "Sim, mas apenas para projetos em Bitcoin",
                "Não, o projeto ainda assim precisa de ser avaliado separadamente",
              ],
              correctAnswer: "Não, o projeto ainda assim precisa de ser avaliado separadamente",
            },
          ],
        },
        {
          slug: "ico",
          title: "ICO",
          summary: "Oferta inicial de moedas como forma primitiva de captação de capital em projetos cripto.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Uma ICO (Initial Coin Offering) é um modelo de captação de capital em que um projeto vende um novo token diretamente a investidores, geralmente numa fase inicial de desenvolvimento, em troca de criptomoedas estabelecidas ou moeda fiduciária. Foi um dos primeiros mecanismos de crowdfunding na indústria cripto.",
            },
            {
              type: "paragraph",
              text: "A vaga de ICOs de 2017 demonstrou tanto o potencial do modelo para uma captação rápida de capital como os seus riscos: a falta de regulação levou a um grande número de projetos sem um produto real. Isto motivou o surgimento de formatos de lançamento mais estruturados, incluindo launchpads e IDOs.",
            },
            {
              type: "list",
              items: [
                "Uma ICO é um modelo de venda de um novo token diretamente a investidores numa fase inicial do projeto",
                "A ICO tornou-se uma das primeiras formas de crowdfunding na indústria cripto",
                "A fraca regulação das ICOs levou historicamente a uma elevada percentagem de projetos inviáveis",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que representa o modelo de ICO?",
              options: [
                "O processo de mineração de bitcoin",
                "A venda de um novo token diretamente a investidores numa fase inicial do projeto",
                "A regulação estatal das criptomoedas",
              ],
              correctAnswer: "A venda de um novo token diretamente a investidores numa fase inicial do projeto",
            },
            {
              prompt: "Que papel histórico desempenhou a ICO na indústria cripto?",
              options: [
                "Tornou-se uma das primeiras formas de crowdfunding em criptomoedas",
                "Levou à proibição total do blockchain",
                "Substituiu totalmente a negociação em exchanges",
              ],
              correctAnswer: "Tornou-se uma das primeiras formas de crowdfunding em criptomoedas",
            },
            {
              prompt: "A que levou a fraca regulação da vaga de ICOs de 2017?",
              options: [
                "À proibição imediata de todas as criptomoedas em todos os países",
                "À eliminação total dos riscos para os investidores",
                "A uma elevada percentagem de projetos sem um produto real",
              ],
              correctAnswer: "A uma elevada percentagem de projetos sem um produto real",
            },
          ],
        },
        {
          slug: "ido",
          title: "IDO",
          summary: "Oferta inicial numa exchange descentralizada como alternativa mais transparente à ICO.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Uma IDO (Initial DEX Offering) é o lançamento de um token diretamente através de uma exchange descentralizada ou de uma plataforma launchpad, na qual a liquidez é geralmente adicionada ao pool imediatamente após a venda, e o listing ocorre de forma mais rápida e transparente do que numa ICO tradicional.",
            },
            {
              type: "paragraph",
              text: "A IDO reduz parte dos riscos característicos das ICOs (por exemplo, o atraso entre a captação de fundos e o listing), mas não elimina os riscos do próprio projeto. Uma elevada procura por uma IDO frequentemente resulta numa volatilidade acentuada do preço logo após o início das negociações.",
            },
            {
              type: "list",
              items: [
                "A IDO é realizada através de uma exchange descentralizada ou de uma plataforma launchpad",
                "A liquidez do pool é geralmente adicionada imediatamente após a venda do token",
                "Uma procura elevada por uma IDO frequentemente causa volatilidade acentuada do preço após o listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Através do que é geralmente realizada uma IDO?",
              options: [
                "Através de um regulador central do mercado",
                "Através de uma exchange descentralizada ou de uma plataforma launchpad",
                "Apenas através de um banco tradicional",
              ],
              correctAnswer: "Através de uma exchange descentralizada ou de uma plataforma launchpad",
            },
            {
              prompt: "Em que se diferencia a IDO da ICO clássica em termos de listing?",
              options: [
                "Não existe qualquer diferença entre ICO e IDO",
                "A IDO nunca implica o listing de um token",
                "O listing ocorre de forma mais rápida e transparente graças à adição imediata de liquidez",
              ],
              correctAnswer: "O listing ocorre de forma mais rápida e transparente graças à adição imediata de liquidez",
            },
            {
              prompt: "O que acontece frequentemente com o preço do token logo após o início das negociações numa IDO?",
              options: [
                "As negociações são automaticamente interrompidas por um dia",
                "O preço mantém-se sempre perfeitamente estável",
                "Volatilidade acentuada devido à elevada procura",
              ],
              correctAnswer: "Volatilidade acentuada devido à elevada procura",
            },
          ],
        },
        {
          slug: "airdrop",
          title: "Airdrop",
          summary: "Distribuição gratuita de tokens entre utilizadores e a que prestar atenção.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Um airdrop é a distribuição gratuita de tokens de um projeto a um determinado grupo de utilizadores, frequentemente como recompensa pela utilização precoce do protocolo, participação numa rede de teste ou realização de determinadas ações. É uma forma de atrair atenção e criar uma comunidade inicial de detentores.",
            },
            {
              type: "paragraph",
              text: "A expectativa de um potencial airdrop atrai muitos utilizadores, mas também cria riscos: airdrops falsos são usados para phishing e roubo de fundos através de contratos inteligentes maliciosos. Um airdrop legítimo nunca exige o envio de fundos ou de chaves privadas para receber os tokens.",
            },
            {
              type: "list",
              items: [
                "Um airdrop é a distribuição gratuita de tokens a um determinado grupo de utilizadores",
                "Um airdrop frequentemente recompensa a utilização precoce do protocolo ou a participação numa rede de teste",
                "Um airdrop legítimo nunca exige o envio de fundos ou de chaves privadas",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que representa um airdrop de tokens?",
              options: [
                "Um imposto obrigatório sobre transações em criptomoeda",
                "Uma subscrição paga das notícias do projeto",
                "A distribuição gratuita de tokens a um determinado grupo de utilizadores",
              ],
              correctAnswer: "A distribuição gratuita de tokens a um determinado grupo de utilizadores",
            },
            {
              prompt: "Pelo que os projetos frequentemente recompensam os utilizadores através de um airdrop?",
              options: [
                "Por eliminar a carteira da rede",
                "Pela utilização precoce do protocolo ou pela participação numa rede de teste",
                "Por críticas negativas sobre o projeto",
              ],
              correctAnswer: "Pela utilização precoce do protocolo ou pela participação numa rede de teste",
            },
            {
              prompt: "Que sinal deve alertar um utilizador perante um potencial airdrop?",
              options: [
                "A ausência de qualquer exigência ao utilizador",
                "A exigência de enviar fundos ou chaves privadas para receber os tokens",
                "Uma simples verificação do endereço da carteira numa lista pública",
              ],
              correctAnswer: "A exigência de enviar fundos ou chaves privadas para receber os tokens",
            },
          ],
        },
        {
          slug: "kak-iskat-proekty",
          title: "Como procurar projetos",
          summary: "Checklist básico para a avaliação inicial de um novo projeto cripto antes de investir.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "A procura de projetos promissores começa com uma verificação básica: quem é a equipa e se tem reputação pública, se existe um produto funcional ou apenas uma apresentação, quem são os investidores nas rondas iniciais, quão transparente e equilibrada é a tokenomics.",
            },
            {
              type: "paragraph",
              text: "É também útil analisar a atividade da comunidade e o desenvolvimento em repositórios públicos, e não apenas as afirmações de marketing nas redes sociais. Um projeto com uma audiência ativa e crescente e atualizações regulares de código costuma merecer mais confiança do que um projeto com apenas um anúncio chamativo.",
            },
            {
              type: "list",
              items: [
                "A verificação da equipa, do produto e dos investidores é o primeiro passo básico na avaliação de um projeto",
                "A atividade de desenvolvimento em repositórios abertos é um sinal mais fiável do que o marketing",
                "Uma tokenomics equilibrada e transparente reduz o risco de futura pressão vendedora",
              ],
            },
          ],
          questions: [
            {
              prompt: "Com o que começa geralmente a verificação básica de um novo projeto cripto?",
              options: [
                "Com o estudo apenas do logótipo do projeto",
                "Com a análise da equipa, do produto e dos investidores iniciais",
                "Com a compra imediata do volume máximo do token",
              ],
              correctAnswer: "Com a análise da equipa, do produto e dos investidores iniciais",
            },
            {
              prompt: "Que sinal é geralmente considerado um indicador mais fiável do progresso real de um projeto?",
              options: [
                "O número de seguidores nas redes sociais sem qualquer outra verificação",
                "A atividade de desenvolvimento nos repositórios de código abertos",
                "A quantidade de promessas empolgantes em publicações de marketing",
              ],
              correctAnswer: "A atividade de desenvolvimento nos repositórios de código abertos",
            },
            {
              prompt: "Por que vale a pena prestar atenção à tokenomics na avaliação inicial de um projeto?",
              options: [
                "A tokenomics só é importante para projetos sem blockchain",
                "Uma tokenomics equilibrada reduz o risco de futura pressão vendedora",
                "A tokenomics não tem qualquer relação com os riscos do projeto",
              ],
              correctAnswer: "Uma tokenomics equilibrada reduz o risco de futura pressão vendedora",
            },
          ],
        },
      ],
    },
    {
      title: "Estratégias de trading",
      lessons: [
        {
          slug: "scalping",
          title: "Scalping",
          summary: "Estratégia de múltiplas operações curtas com pequeno lucro em timeframes de minutos.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "O scalping é uma estratégia em que o trader abre um grande número de operações num curto período de tempo (segundos a minutos), procurando obter um pequeno lucro em cada uma delas. O scalping exige elevada concentração, comissões baixas e boa liquidez do instrumento.",
            },
            {
              type: "paragraph",
              text: "Devido à elevada frequência de operações, mesmo uma pequena comissão da exchange afeta significativamente a rentabilidade final do scalper, daí a importância de um cálculo preciso dos custos. O scalping também exige requisitos elevados de velocidade de execução das ordens e estabilidade da ligação.",
            },
            {
              type: "list",
              items: [
                "O scalping baseia-se em muitas operações curtas com um pequeno objetivo de lucro",
                "As comissões da exchange têm um impacto significativo na rentabilidade final devido à elevada frequência de operações",
                "A estratégia exige elevada liquidez do instrumento e execução estável das ordens",
              ],
            },
            { type: "diagram", diagram: "scalping", caption: "Scalping num timeframe menor" },
          ],
          questions: [
            {
              prompt: "Qual é a característica chave do scalping como estratégia?",
              options: [
                "Manter uma posição durante vários meses",
                "O abandono total da análise do gráfico",
                "Um grande número de operações curtas com um pequeno lucro em cada uma",
              ],
              correctAnswer: "Um grande número de operações curtas com um pequeno lucro em cada uma",
            },
            {
              prompt: "Por que as comissões da exchange são particularmente importantes para um scalper?",
              options: [
                "O scalping está totalmente isento de comissões em qualquer exchange",
                "Devido à elevada frequência de operações, afetam significativamente a rentabilidade final",
                "As comissões só importam se a posição for mantida por mais de um mês",
              ],
              correctAnswer: "Devido à elevada frequência de operações, afetam significativamente a rentabilidade final",
            },
            {
              prompt: "O que é particularmente importante para um instrumento usado em scalping?",
              options: [
                "A ausência de gráfico de preços em tempo real",
                "A menor liquidez possível",
                "Elevada liquidez e execução rápida das ordens",
              ],
              correctAnswer: "Elevada liquidez e execução rápida das ordens",
            },
          ],
        },
        {
          slug: "day-trading",
          title: "Day Trading",
          summary: "Negociação intradiária com o encerramento de todas as posições antes do fim da sessão.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "O Day Trading é uma estratégia em que todas as operações são abertas e fechadas dentro do mesmo dia, sem transportar a posição para o dia seguinte. Isto elimina o risco de gaps noturnos e permite ao trader controlar totalmente a sua exposição ao mercado no final da sessão.",
            },
            {
              type: "paragraph",
              text: "O day trading exige mais tempo de análise e acompanhamento do mercado ao longo do dia em comparação com abordagens de mais longo prazo, mas oferece mais oportunidades de entrada do que o scalping, graças a objetivos de lucro mais amplos.",
            },
            {
              type: "list",
              items: [
                "Todas as posições no day trading são encerradas antes do final da sessão de negociação",
                "A ausência de transporte de posição elimina o risco de gaps noturnos",
                "O day trading exige um tempo considerável de acompanhamento ativo do mercado",
              ],
            },
            { type: "diagram", diagram: "day-trading", caption: "Uma operação dentro de um único dia" },
          ],
          questions: [
            {
              prompt: "Qual é a regra chave do day trading?",
              options: [
                "As posições são obrigatoriamente mantidas durante várias semanas",
                "As operações abrem-se apenas uma vez por mês",
                "Todas as posições são encerradas dentro da mesma sessão de negociação",
              ],
              correctAnswer: "Todas as posições são encerradas dentro da mesma sessão de negociação",
            },
            {
              prompt: "Que risco é eliminado pela ausência de transporte de posição para o dia seguinte?",
              options: [
                "O risco relacionado com as comissões da exchange",
                "O risco de mudança do nome do token",
                "O risco de gaps de preço noturnos",
              ],
              correctAnswer: "O risco de gaps de preço noturnos",
            },
            {
              prompt: "Em que é que o day trading se diferencia do scalping quanto aos objetivos de lucro?",
              options: [
                "O day trading não prevê qualquer objetivo de lucro",
                "Os objetivos de lucro das duas estratégias são absolutamente idênticos",
                "O day trading tem geralmente objetivos de lucro mais amplos por operação",
              ],
              correctAnswer: "O day trading tem geralmente objetivos de lucro mais amplos por operação",
            },
          ],
        },
        {
          slug: "swing-trading",
          title: "Swing Trading",
          summary: "Manutenção de uma posição de alguns dias a algumas semanas em movimentos de médio prazo.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "O Swing Trading é uma estratégia que consiste em manter posições de alguns dias a algumas semanas com o objetivo de captar um movimento de preço de médio prazo (um «swing»). Isto exige menos tempo de acompanhamento constante do que o day trading ou o scalping.",
            },
            {
              type: "paragraph",
              text: "Os swing traders baseiam-se com mais frequência em timeframes mais elevados (H4, D1) para determinar a tendência e os pontos de entrada, sabendo que a operação está inevitavelmente exposta a gaps noturnos e de fim de semana, o que o stop-loss e o tamanho da posição devem ter em conta.",
            },
            {
              type: "list",
              items: [
                "O swing trading pressupõe manter uma posição de alguns dias a algumas semanas",
                "A estratégia exige menos acompanhamento constante do que o day trading ou o scalping",
                "As posições em swing trading estão expostas ao risco de gaps noturnos e de fim de semana",
              ],
            },
            { type: "diagram", diagram: "swing-trading", caption: "Uma operação swing de vários dias" },
          ],
          questions: [
            {
              prompt: "Qual é o horizonte típico de manutenção de uma posição em swing trading?",
              options: [
                "De alguns segundos a alguns minutos",
                "De alguns dias a algumas semanas",
                "Vários anos sem exceção",
              ],
              correctAnswer: "De alguns dias a algumas semanas",
            },
            {
              prompt: "Que timeframes os swing traders usam mais frequentemente para a análise?",
              options: [
                "Exclusivamente o gráfico de tick a tick",
                "Timeframes mais elevados, como H4 e D1",
                "Apenas o timeframe de um minuto",
              ],
              correctAnswer: "Timeframes mais elevados, como H4 e D1",
            },
            {
              prompt: "A que risco específico estão expostas as posições em swing trading devido à sua duração?",
              options: [
                "Ao risco de execução instantânea da ordem",
                "À ausência total de qualquer volatilidade",
                "Ao risco de gaps de preço noturnos e de fim de semana",
              ],
              correctAnswer: "Ao risco de gaps de preço noturnos e de fim de semana",
            },
          ],
        },
        {
          slug: "position-trading",
          title: "Position Trading",
          summary: "Manutenção de posições a longo prazo baseada nas grandes tendências e nos fatores fundamentais.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "O Position Trading é uma estratégia que consiste em manter posições de algumas semanas a vários meses ou mais, orientada para captar as grandes tendências de longo prazo. Os position traders dão menos atenção ao ruído de preço de curto prazo e mais ao contexto macroeconómico e fundamental.",
            },
            {
              type: "paragraph",
              text: "Devido ao horizonte longo, o position trading exige uma maior tolerância a recuos intermédios dentro da tendência geral e utiliza geralmente stops mais amplos em relação ao capital envolvido, compensando com um número reduzido de posições simultâneas.",
            },
            {
              type: "list",
              items: [
                "O position trading está orientado para manter posições de algumas semanas a vários meses",
                "A estratégia baseia-se mais no contexto macroeconómico e fundamental do que no ruído de curto prazo",
                "Os position traders usam geralmente stops mais amplos e menos posições simultâneas",
              ],
            },
            { type: "diagram", diagram: "position-trading", caption: "Uma posição de longo prazo ao longo de uma tendência" },
          ],
          questions: [
            {
              prompt: "Em que se foca principalmente o position trading?",
              options: [
                "Nas flutuações de preço ao minuto",
                "Na arbitragem entre exchanges em tempo real",
                "Em captar as grandes tendências de longo prazo",
              ],
              correctAnswer: "Em captar as grandes tendências de longo prazo",
            },
            {
              prompt: "Para que deve estar preparado um position trader devido ao longo horizonte de manutenção?",
              options: [
                "Para a ausência total de qualquer flutuação de preço",
                "Para recuos intermédios dentro da tendência geral",
                "Para ter de encerrar a operação no final de cada dia",
              ],
              correctAnswer: "Para recuos intermédios dentro da tendência geral",
            },
            {
              prompt: "Que tipo de análise desempenha um papel particularmente importante no position trading?",
              options: [
                "Apenas a análise do livro de ordens do último minuto",
                "A análise macroeconómica e fundamental",
                "Nenhuma análise é necessária",
              ],
              correctAnswer: "A análise macroeconómica e fundamental",
            },
          ],
        },
        {
          slug: "liquidity-sweep-strategiya",
          title: "Liquidity Sweep",
          summary: "Estratégia de trading que consiste em entrar após uma varredura de liquidez além de um nível-chave.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Como estratégia de trading, o Liquidity Sweep baseia-se na ideia de que o preço frequentemente rompe falsamente um nível significativo (máximo, mínimo, zona de acumulação de stop-loss), recolhe liquidez nesse ponto e depois inverte na direção oposta — é precisamente esse ponto de reversão que serve como sinal de entrada.",
            },
            {
              type: "paragraph",
              text: "A diferença chave em relação a uma simples rutura de nível é que o trader não espera a continuação do movimento além do nível, mas sim um rápido regresso do preço para dentro do intervalo, o que confirma que a rutura foi causada por uma varredura de liquidez, e não por uma força real de tendência.",
            },
            {
              type: "list",
              items: [
                "A estratégia baseia-se numa falsa rutura de nível seguida de uma rápida reversão do preço",
                "A entrada ocorre após a confirmação do regresso do preço para dentro do intervalo, não no momento da própria rutura",
                "A estratégia exige paciência e confirmação para distinguir um sweep de uma rutura real",
              ],
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "Liquidity sweep como estratégia de trading" },
          ],
          questions: [
            {
              prompt: "Em que ideia se baseia a estratégia Liquidity Sweep?",
              options: [
                "Numa falsa rutura de nível com recolha de liquidez seguida de uma reversão do preço",
                "Na ignorância total dos níveis de suporte e resistência",
                "Na manutenção constante de uma posição sem análise dos níveis",
              ],
              correctAnswer: "Numa falsa rutura de nível com recolha de liquidez seguida de uma reversão do preço",
            },
            {
              prompt: "O que confirma que uma rutura de nível foi de facto um sweep, e não uma rutura real?",
              options: [
                "A ausência total de volume na rutura",
                "A continuação do movimento do preço bem além do nível",
                "O rápido regresso do preço para dentro do intervalo após a rutura",
              ],
              correctAnswer: "O rápido regresso do preço para dentro do intervalo após a rutura",
            },
            {
              prompt: "Quando é que um trader que usa esta estratégia geralmente abre uma operação?",
              options: [
                "Imediatamente no momento em que o preço toca o nível, sem esperar confirmação",
                "Após a confirmação do regresso do preço para dentro do intervalo",
                "Apenas após o fecho da semana de negociação",
              ],
              correctAnswer: "Após a confirmação do regresso do preço para dentro do intervalo",
            },
          ],
        },
        {
          slug: "breakout",
          title: "Breakout",
          summary: "Estratégia de entrada na direção de uma rutura confirmada de um nível-chave.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "O Breakout (estratégia de rutura) consiste em entrar na direção do movimento quando o preço ultrapassa um nível significativo de suporte, resistência ou um limite de consolidação com confirmação — geralmente um volume aumentado e o fecho de uma vela além do nível, e não apenas um simples toque.",
            },
            {
              type: "paragraph",
              text: "O principal risco da estratégia breakout é a falsa rutura, em que o preço ultrapassa brevemente o nível e regressa imediatamente para dentro. Por isso, os traders frequentemente esperam por um reteste do nível rompido (que se transforma de resistência em suporte, ou vice-versa) para uma entrada mais fiável.",
            },
            {
              type: "list",
              items: [
                "A estratégia breakout consiste em entrar na direção de uma rutura confirmada de um nível significativo",
                "A confirmação de uma rutura baseia-se geralmente num volume aumentado e no fecho de uma vela além do nível",
                "Esperar por um reteste do nível rompido reduz o risco de entrar numa falsa rutura",
              ],
            },
            { type: "diagram", diagram: "breakout", caption: "Um breakout num gráfico" },
          ],
          questions: [
            {
              prompt: "Em que se baseia a estratégia de rutura (breakout)?",
              options: [
                "Na entrada exclusivamente contra a direção da rutura",
                "Na ignorância total dos níveis de suporte e resistência",
                "Na entrada na direção de uma rutura confirmada de um nível significativo",
              ],
              correctAnswer: "Na entrada na direção de uma rutura confirmada de um nível significativo",
            },
            {
              prompt: "O que geralmente confirma uma rutura real em vez de falsa?",
              options: [
                "Uma diminuição do volume até zero",
                "Um simples toque do preço no nível sem fecho de vela",
                "Um volume aumentado e o fecho de uma vela além do nível",
              ],
              correctAnswer: "Um volume aumentado e o fecho de uma vela além do nível",
            },
            {
              prompt: "Por que os traders às vezes esperam por um reteste do nível rompido antes de entrar?",
              options: [
                "Para aumentar garantidamente a comissão da operação",
                "O reteste não tem qualquer importância para a entrada",
                "Para reduzir o risco de entrar numa falsa rutura",
              ],
              correctAnswer: "Para reduzir o risco de entrar numa falsa rutura",
            },
          ],
        },
        {
          slug: "mean-reversion",
          title: "Mean Reversion",
          summary: "Estratégia de regresso à média após um forte desvio do preço.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "O Mean Reversion (regresso à média) baseia-se na ideia de que um preço fortemente desviado do seu valor médio (por exemplo, de uma média móvel ou do VWAP) tende a regressar a ele com o tempo. A estratégia funciona geralmente melhor num mercado lateral do que numa forte tendência.",
            },
            {
              type: "paragraph",
              text: "Os traders que usam esta estratégia combinam frequentemente osciladores como o RSI com níveis de desvio em relação à média (por exemplo, as bandas de Bollinger), abrindo uma operação contra a direção de um forte movimento de curto prazo, na expectativa de uma correção em direção ao nível médio.",
            },
            {
              type: "list",
              items: [
                "A estratégia pressupõe o regresso do preço ao seu valor médio após um forte desvio",
                "O mean reversion é geralmente mais eficaz num mercado lateral do que numa forte tendência direcional",
                "Osciladores e bandas de desvio são frequentemente combinados para encontrar pontos de entrada",
              ],
            },
            { type: "diagram", diagram: "mean-reversion", caption: "O preço a regressar à média" },
          ],
          questions: [
            {
              prompt: "Em que ideia se baseia a estratégia Mean Reversion?",
              options: [
                "O preço nunca regressa ao seu valor médio",
                "Um preço fortemente desviado do seu valor médio tende a regressar a ele",
                "O preço continua sempre o seu movimento na mesma direção indefinidamente",
              ],
              correctAnswer: "Um preço fortemente desviado do seu valor médio tende a regressar a ele",
            },
            {
              prompt: "Em que tipo de mercado a estratégia mean reversion geralmente funciona melhor?",
              options: [
                "Num mercado sem qualquer outro participante além do próprio trader",
                "Num mercado lateral",
                "Exclusivamente em períodos de hiperinflação",
              ],
              correctAnswer: "Num mercado lateral",
            },
            {
              prompt: "Que ferramentas os traders frequentemente combinam para encontrar pontos de entrada em mean reversion?",
              options: [
                "Apenas notícias de redes sociais",
                "Osciladores como o RSI e bandas de desvio em relação à média",
                "Exclusivamente dados sobre comissões da exchange",
              ],
              correctAnswer: "Osciladores como o RSI e bandas de desvio em relação à média",
            },
          ],
        },
      ],
    },
    {
      title: "Exame final",
      lessons: [
        {
          slug: "polnaya-torgovlya-na-simulyatore",
          title: "Negociação completa no simulador",
          summary: "Prática final: aplicação de todos os conceitos estudados numa conta virtual.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Esta lição reúne toda a matéria do curso — desde os conceitos básicos do mercado até à gestão de risco, psicologia, indicadores e estratégias de trading. O objetivo é realizar uma série de operações numa conta virtual aplicando as regras de gestão de risco e um plano definido antecipadamente para cada operação.",
            },
            {
              type: "paragraph",
              text: "O objetivo desta fase não é um lucro avultado pontual, mas sim demonstrar uma abordagem consistente e disciplinada: cálculo correto do tamanho da posição, stop-loss e take-profit justificados, e o registo de cada operação, tal como fazem os traders profissionais.",
            },
            {
              type: "list",
              items: [
                "Cada operação deve ser acompanhada de um plano de entrada e saída definido antecipadamente",
                "O tamanho da posição é calculado com base no risco, não no lucro desejado",
                "O resultado de uma operação isolada importa menos do que a consistência no cumprimento das regras",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual é o principal objetivo da prática final em conta virtual?",
              options: [
                "Obter o máximo lucro possível a qualquer custo",
                "Demonstrar uma abordagem consistente e disciplinada ao trading",
                "Realizar o maior número possível de operações sem análise",
              ],
              correctAnswer: "Demonstrar uma abordagem consistente e disciplinada ao trading",
            },
            {
              prompt: "O que deve preceder a abertura de cada operação nesta fase?",
              options: [
                "O aumento máximo da alavancagem",
                "Um plano de entrada e saída definido antecipadamente",
                "A escolha aleatória de um ativo sem análise",
              ],
              correctAnswer: "Um plano de entrada e saída definido antecipadamente",
            },
            {
              prompt: "Segundo a matéria do curso, o que determina o tamanho da posição?",
              options: [
                "Exclusivamente a intuição do trader",
                "A taxa de câmbio do dólar no momento da operação",
                "O risco aceitável por operação, não o lucro desejado",
              ],
              correctAnswer: "O risco aceitável por operação, não o lucro desejado",
            },
          ],
        },
        {
          slug: "proyti-vse-zadaniya",
          title: "É preciso concluir todas as lições",
          summary: "Verificação final: por que é importante concluir cada módulo para terminar o curso.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Cada módulo do curso é construído para se basear no anterior: a compreensão da gestão de risco baseia-se na compreensão da volatilidade e da estrutura do mercado, a psicologia do trading na compreensão de como o risco funciona, e as estratégias no domínio dos indicadores e da análise de volume.",
            },
            {
              type: "paragraph",
              text: "Saltar módulos cria lacunas que se manifestam mais tarde — por exemplo, ao usar uma estratégia sem saber calcular corretamente o tamanho de posição adequado para ela. É por isso que concluir o curso exige finalizar todas as lições, e não apenas alguns módulos à escolha.",
            },
            {
              type: "list",
              items: [
                "Os módulos do curso são construídos sequencialmente e baseiam-se uns nos outros",
                "Saltar um módulo cria lacunas que se manifestam em fases posteriores da aprendizagem",
                "A conclusão total do curso exige finalizar todas as lições, e não apenas alguns módulos",
              ],
            },
          ],
          questions: [
            {
              prompt: "Por que se recomenda concluir os módulos do curso sequencialmente?",
              options: [
                "É exigido exclusivamente para obter XP",
                "A ordem dos módulos não tem qualquer importância",
                "Cada módulo seguinte baseia-se nos conhecimentos dos módulos anteriores",
              ],
              correctAnswer: "Cada módulo seguinte baseia-se nos conhecimentos dos módulos anteriores",
            },
            {
              prompt: "A que pode levar saltar determinados módulos do curso?",
              options: [
                "À obtenção automática de um certificado sem ter aprendido",
                "Isso não tem qualquer impacto na aprendizagem posterior",
                "A lacunas de conhecimento que se manifestarão em fases posteriores",
              ],
              correctAnswer: "A lacunas de conhecimento que se manifestarão em fases posteriores",
            },
            {
              prompt: "O que é necessário para concluir totalmente o curso?",
              options: [
                "Basta simplesmente abrir a primeira lição do curso",
                "Finalizar todas as lições, e não apenas alguns módulos à escolha",
                "Finalizar qualquer módulo à escolha",
              ],
              correctAnswer: "Finalizar todas as lições, e não apenas alguns módulos à escolha",
            },
          ],
        },
        {
          slug: "poluchenie-sertifikata",
          title: "Obtenção do certificado",
          summary: "O que significa concluir o curso «O caminho do trader» e como usar esse conhecimento a seguir.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Concluir todos os módulos do curso «O caminho do trader» significa ter percorrido o caminho completo, desde os conceitos básicos do mercado até tópicos avançados: indicadores, análise de volume, dados on-chain, DeFi, tokenomics e a construção da própria estratégia de trading validada com dados históricos.",
            },
            {
              type: "paragraph",
              text: "Concluir o curso por si só não substitui a experiência prática: as condições reais de mercado, a psicologia vivida sob pressão e o trabalho com capital real exigem prática contínua. O conhecimento do curso é a base sobre a qual se constrói a evolução contínua como trader.",
            },
            {
              type: "list",
              items: [
                "O curso abrange o caminho desde os conceitos básicos do mercado até tópicos avançados de análise e estratégia",
                "Concluir o curso constitui uma base, não um substituto de uma experiência de trading real",
                "Progredir mais exige prática, o registo num diário e a análise constante das próprias decisões",
              ],
            },
          ],
          questions: [
            {
              prompt: "O que abrange a conclusão total do curso «O caminho do trader»?",
              options: [
                "Apenas os fundamentos do uso de uma carteira",
                "Exclusivamente os aspetos legais das criptomoedas",
                "O caminho desde os conceitos básicos do mercado até tópicos avançados de análise e estratégia",
              ],
              correctAnswer: "O caminho desde os conceitos básicos do mercado até tópicos avançados de análise e estratégia",
            },
            {
              prompt: "Concluir o curso substitui uma experiência de trading real?",
              options: [
                "Sim, o curso substitui totalmente qualquer prática",
                "Não, o curso constitui uma base, e a experiência real exige prática contínua",
                "Sim, mas apenas para operações com alavancagem superior a 10x",
              ],
              correctAnswer: "Não, o curso constitui uma base, e a experiência real exige prática contínua",
            },
            {
              prompt: "O que se recomenda continuar a fazer após concluir o curso?",
              options: [
                "Abandonar imediatamente qualquer gestão de risco",
                "Manter um diário de trading e analisar constantemente as próprias decisões",
                "Deixar completamente de analisar a própria negociação",
              ],
              correctAnswer: "Manter um diário de trading e analisar constantemente as próprias decisões",
            },
          ],
        },
      ],
    },
  ],
};
