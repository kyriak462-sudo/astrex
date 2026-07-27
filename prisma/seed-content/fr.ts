import type { CourseSeed } from "./types";

export const COURSE_FR: CourseSeed = {
  slug: "put-treydera",
  title: "Le chemin du trader",
  description:
    "Un parcours structuré, des notions de base du marché jusqu'à la pratique sur un compte virtuel.",
  modules: [
    {
      title: "Les fondamentaux du trading",
      lessons: [
        {
          slug: "chto-takoe-treyding",
          title: "Qu'est-ce que le trading",
          summary: "La différence entre investissement et trading, les principaux acteurs du marché.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Le trading consiste à acheter et vendre des actifs financiers (cryptomonnaies, actions, devises) dans le but de profiter de la variation de leur prix. Contrairement à l'investissement classique, où l'actif est conservé pendant des années en misant sur sa croissance, le trader gagne sur le mouvement du prix lui-même — à la hausse comme à la baisse.",
            },
            {
              type: "paragraph",
              text: "Sur le marché coexistent différents acteurs : les traders particuliers (personnes physiques), les investisseurs institutionnels (fonds, banques), les market makers (teneurs de marché, qui assurent la liquidité) et les systèmes algorithmiques. Comprendre qui effectue des transactions et pourquoi aide à expliquer pourquoi le prix évolue de telle ou telle manière.",
            },
            {
              type: "list",
              items: [
                "L'investisseur conserve généralement l'actif longtemps et se base sur sa valeur fondamentale",
                "Le trader ouvre et ferme ses positions plus fréquemment — de quelques minutes à quelques semaines",
                "Le trader peut aussi gagner sur la baisse du prix grâce aux positions courtes (short)",
              ],
            },
          ],
          questions: [
            {
              prompt: "En quoi le trading diffère-t-il fondamentalement de l'investissement à long terme ?",
              options: [
                "Le trading implique des transactions fréquentes sur des horizons courts",
                "Le trading n'est accessible qu'aux banques",
                "Le trading ne comporte aucun risque",
              ],
              correctAnswer: "Le trading implique des transactions fréquentes sur des horizons courts",
            },
            {
              prompt: "Contrairement à l'investisseur classique, qui peut aussi gagner sur la baisse du prix d'un actif ?",
              options: ["Le trader qui ouvre des positions courtes", "Seulement les banques", "Seulement les market makers"],
              correctAnswer: "Le trader qui ouvre des positions courtes",
            },
            {
              prompt: "Qu'apportent les market makers au marché ?",
              options: ["La liquidité pour les transactions des autres acteurs", "La régulation étatique", "Un cours fixe pour l'actif"],
              correctAnswer: "La liquidité pour les transactions des autres acteurs",
            },
          ],
        },
        {
          slug: "vidy-rynkov",
          title: "Types de marchés",
          summary: "Crypto, forex, actions et matières premières : quelles différences.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Le marché crypto se négocie 24 heures sur 24, sans interruption le week-end, et il est décentralisé — il n'existe pas de bourse unique qui fixe le prix. Le Forex est le plus grand marché de paires de devises au monde, avec une liquidité énorme, mais des horaires de négociation limités le week-end. Le marché boursier (actions) fonctionne selon les horaires de bourses précises et est fortement réglementé. Les marchés de matières premières (pétrole, or) reflètent l'équilibre réel entre l'offre et la demande de matières premières.",
            },
            {
              type: "list",
              items: [
                "Crypto : 24/7, forte volatilité, faible barrière à l'entrée",
                "Forex : liquidité énorme, fonctionne 5 jours sur 7",
                "Actions : liées à l'activité de l'entreprise, horaires de négociation de la bourse",
                "Matières premières (commodities) : dépendent de l'offre/demande réelle et de la géopolitique",
              ],
            },
          ],
          questions: [
            {
              prompt: "En quoi le marché crypto diffère-t-il du marché actions ?",
              options: ["Il fonctionne 24/7 sans interruption", "Il ne se négocie que les jours ouvrés en journée", "Il est entièrement réglementé par l'État"],
              correctAnswer: "Il fonctionne 24/7 sans interruption",
            },
            {
              prompt: "Que négocie-t-on sur le marché Forex ?",
              options: ["Des paires de devises", "Des actions d'entreprises", "Des matières premières"],
              correctAnswer: "Des paires de devises",
            },
            {
              prompt: "Lequel de ces marchés se distingue généralement par la plus forte volatilité ?",
              options: ["Le marché crypto", "Le marché des obligations d'État", "Les paires de devises du G7"],
              correctAnswer: "Le marché crypto",
            },
          ],
        },
        {
          slug: "kak-chitat-grafik",
          title: "Comment lire un graphique",
          summary: "Les axes, les unités de temps (timeframes), les prix d'ouverture et de clôture.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Sur un graphique de prix, l'axe vertical représente le prix de l'actif, l'axe horizontal le temps. Chaque point de données (bougie ou barre) contient le prix d'ouverture, de clôture, le plus haut et le plus bas sur la période choisie — c'est ce qu'on appelle le timeframe (unité de temps).",
            },
            {
              type: "paragraph",
              text: "Le timeframe est l'intervalle de temps représenté par un seul élément du graphique : une minute, une heure, un jour, une semaine. Le choix du timeframe dépend du style de trading : les scalpeurs surveillent les graphiques en minutes, les swing traders privilégient les graphiques en heures et en journées.",
            },
            {
              type: "list",
              items: [
                "Le graphique en ligne — le plus simple, il n'affiche que le prix de clôture",
                "Le graphique en chandeliers (bougies japonaises) — affiche open/high/low/close, le plus populaire chez les traders",
                "Le bar chart — similaire au graphique en chandeliers, mais visuellement moins lisible",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce qui est représenté sur l'axe vertical d'un graphique de prix ?",
              options: ["Le prix de l'actif", "Le volume des échanges", "Le nombre de traders"],
              correctAnswer: "Le prix de l'actif",
            },
            {
              prompt: "Qu'est-ce qu'un timeframe ?",
              options: [
                "La période de temps représentée par un seul élément du graphique",
                "Le nom d'une bourse",
                "Un type d'ordre",
              ],
              correctAnswer: "La période de temps représentée par un seul élément du graphique",
            },
            {
              prompt: "Pourquoi les traders analysent-ils plusieurs timeframes en même temps ?",
              options: [
                "Pour voir à la fois la tendance générale et le point d'entrée précis",
                "Cela n'a aucun intérêt pratique",
                "Pour contourner les frais de la bourse",
              ],
              correctAnswer: "Pour voir à la fois la tendance générale et le point d'entrée précis",
            },
          ],
        },
        {
          slug: "svechnoy-analiz",
          title: "Analyse des chandeliers",
          summary: "L'anatomie d'une bougie japonaise et les figures chandeliers de base.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "La bougie japonaise est le principal outil de visualisation du prix pour les traders. Elle se compose d'un corps (l'écart entre le prix d'ouverture et de clôture) et de mèches (ombres) en haut et en bas (le plus haut et le plus bas de la période). Une bougie verte (haussière) signifie que la clôture est supérieure à l'ouverture, une bougie rouge (baissière) signifie l'inverse.",
            },
            {
              type: "paragraph",
              text: "Une seule bougie raconte déjà l'histoire de la lutte entre acheteurs et vendeurs : un corps long traduit un mouvement franc, des mèches longues indiquent que le prix a été activement repoussé dans la direction opposée.",
            },
          ],
          questions: [
            {
              prompt: "Que montre le corps d'une bougie ?",
              options: [
                "L'écart entre le prix d'ouverture et de clôture",
                "Le volume d'échanges maximal",
                "Le nombre d'acteurs du marché",
              ],
              correctAnswer: "L'écart entre le prix d'ouverture et de clôture",
            },
            {
              prompt: "Que montrent les mèches (ombres) d'une bougie ?",
              options: [
                "L'amplitude de prix en dehors du corps — le plus haut et le plus bas de la période",
                "Le volume d'échanges moyen",
                "Le nombre de transactions dans la journée",
              ],
              correctAnswer: "L'amplitude de prix en dehors du corps — le plus haut et le plus bas de la période",
            },
            {
              prompt: "Que peut indiquer une longue mèche basse après une baisse du prix ?",
              options: [
                "Les acheteurs ont activement racheté le prix par le bas — un retournement est possible",
                "Le marché va forcément continuer à baisser",
                "Le volume d'échanges était nul",
              ],
              correctAnswer: "Les acheteurs ont activement racheté le prix par le bas — un retournement est possible",
            },
          ],
        },
        {
          slug: "podderzhka-i-soprotivlenie",
          title: "Support et résistance",
          summary: "Comment repérer les niveaux clés sur un graphique.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Un niveau de support est un prix auquel, par le passé, les acheteurs ont plusieurs fois stoppé une baisse. Un niveau de résistance est à l'inverse un prix où les vendeurs ont stoppé une hausse. Ces niveaux forment la « mémoire » du marché : le prix y réagit souvent de manière répétée.",
            },
            {
              type: "paragraph",
              text: "Principe important : après une cassure, un niveau change souvent de rôle — une ancienne résistance devient un support, et inversement. Les niveaux fiables ne se construisent pas sur un seul point, mais sur plusieurs contacts du prix.",
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce qu'un niveau de support ?",
              options: [
                "Un prix où les acheteurs ont historiquement stoppé une baisse",
                "Le prix d'ouverture de la bourse",
                "La commission sur une transaction",
              ],
              correctAnswer: "Un prix où les acheteurs ont historiquement stoppé une baisse",
            },
            {
              prompt: "Que se passe-t-il généralement avec un niveau de résistance après sa cassure à la hausse ?",
              options: [
                "Il devient souvent un nouveau support",
                "Il disparaît et n'influence plus le prix",
                "Le prix doit obligatoirement revenir immédiatement en arrière",
              ],
              correctAnswer: "Il devient souvent un nouveau support",
            },
            {
              prompt: "Comment construire correctement des niveaux fiables sur un graphique ?",
              options: [
                "À partir de plusieurs contacts du prix, et non d'un seul point",
                "Strictement au centre du graphique",
                "Uniquement sur le timeframe en minutes",
              ],
              correctAnswer: "À partir de plusieurs contacts du prix, et non d'un seul point",
            },
          ],
        },
        {
          slug: "trend-i-ego-struktura",
          title: "La tendance et sa structure",
          summary: "Tendance haussière, baissière et latérale, structure des plus hauts/plus bas.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Une tendance haussière se compose d'une succession de plus hauts croissants (Higher High) et de plus bas croissants (Higher Low). Une tendance baissière est le miroir : Lower High et Lower Low. Lorsque le prix évolue dans un range sans direction claire, on parle de tendance latérale ou de range (flat).",
            },
            {
              type: "paragraph",
              text: "Trader dans le sens de la tendance offre statistiquement plus de chances de succès que d'essayer d'en capter le retournement — d'où la fameuse règle « la tendance est ton amie ».",
            },
          ],
          questions: [
            {
              prompt: "De quoi se compose une tendance haussière ?",
              options: [
                "D'une succession de plus hauts et de plus bas croissants",
                "De bougies de hauteur identique",
                "Uniquement d'une suite de bougies vertes",
              ],
              correctAnswer: "D'une succession de plus hauts et de plus bas croissants",
            },
            {
              prompt: "Qu'est-ce qu'une tendance latérale (range) ?",
              options: [
                "Un mouvement du prix dans un range, sans direction claire",
                "Une chute brutale du prix",
                "Une période de suspension des échanges sur la bourse",
              ],
              correctAnswer: "Un mouvement du prix dans un range, sans direction claire",
            },
            {
              prompt: "Pourquoi dit-on « la tendance est ton amie » ?",
              options: [
                "Trader dans le sens de la tendance offre statistiquement plus de chances de succès",
                "Une tendance ne change jamais de direction",
                "Ce n'est qu'une simple figure de style sans portée pratique",
              ],
              correctAnswer: "Trader dans le sens de la tendance offre statistiquement plus de chances de succès",
            },
          ],
        },
        {
          slug: "obyom-i-likvidnost",
          title: "Volume et liquidité",
          summary: "Pourquoi surveiller le volume et ce qu'est la liquidité du marché.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Le volume d'échanges indique la quantité d'actif achetée et vendue sur une période. Les mouvements de prix importants confirmés par un volume élevé sont considérés comme plus fiables que des mouvements similaires sur un volume faible.",
            },
            {
              type: "paragraph",
              text: "La liquidité est la capacité à acheter ou vendre un actif rapidement, sans influencer fortement son prix. Sur les actifs peu liquides, même une petite transaction peut fortement déplacer le prix et entraîner du slippage — l'exécution d'un ordre à un prix moins favorable que prévu.",
            },
          ],
          questions: [
            {
              prompt: "Que révèle une hausse de prix accompagnée d'un faible volume d'échanges ?",
              options: [
                "Le mouvement est faible et pourrait ne pas être confirmé",
                "C'est le signal d'entrée le plus fiable qui soit",
                "La liquidité de l'actif est maximale",
              ],
              correctAnswer: "Le mouvement est faible et pourrait ne pas être confirmé",
            },
            {
              prompt: "Qu'est-ce que la liquidité du marché ?",
              options: [
                "La facilité à acheter/vendre un actif sans influencer fortement son prix",
                "Le nombre total de jetons en circulation",
                "La commission de la bourse sur une transaction",
              ],
              correctAnswer: "La facilité à acheter/vendre un actif sans influencer fortement son prix",
            },
            {
              prompt: "Quel risque guette un trader qui négocie un actif peu liquide ?",
              options: [
                "Un slippage important lors de l'exécution de la transaction",
                "Une absence totale de commissions",
                "Un profit garanti",
              ],
              correctAnswer: "Un slippage important lors de l'exécution de la transaction",
            },
          ],
        },
        {
          slug: "risk-menedzhment-osnovy",
          title: "Gestion du risque : les fondamentaux",
          summary: "Taille de position, stop-loss, ratio risque/profit.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "La gestion du risque est ce qui distingue un trader professionnel d'un joueur de casino. Le stop-loss est un niveau fixé à l'avance auquel la position se ferme avec une perte limitée si le marché évolue à l'encontre du scénario prévu.",
            },
            {
              type: "paragraph",
              text: "La plupart des traders expérimentés ne risquent pas plus de 1 à 2 % de leur dépôt par transaction — cela permet de traverser une série de pertes sans perdre tout le capital. Le ratio risque/profit (risk/reward) indique combien de fois le profit potentiel dépasse le risque : par exemple, 1:3 signifie que le profit est trois fois supérieur à la perte possible.",
            },
            {
              type: "list",
              items: [
                "Le stop-loss se place avant d'entrer en position, pas après",
                "La taille de la position se calcule à partir du risque en argent, et non l'inverse",
                "Même une stratégie rentable peut ruiner un trader sans contrôle du risque",
              ],
            },
          ],
          questions: [
            {
              prompt: "À quoi sert le stop-loss ?",
              options: [
                "À limiter la perte sur une transaction à l'avance",
                "À augmenter la taille de la position",
                "À garantir un profit",
              ],
              correctAnswer: "À limiter la perte sur une transaction à l'avance",
            },
            {
              prompt: "Quel pourcentage du dépôt recommande-t-on généralement de risquer par transaction ?",
              options: ["1 à 2 %", "25 à 30 %", "Tout le dépôt"],
              correctAnswer: "1 à 2 %",
            },
            {
              prompt: "Que signifie un ratio risque/profit de 1:3 ?",
              options: [
                "Le profit potentiel est 3 fois supérieur au risque",
                "Le risque est 3 fois supérieur au profit",
                "La position se fermera dans 3 heures",
              ],
              correctAnswer: "Le profit potentiel est 3 fois supérieur au risque",
            },
          ],
        },
      ],
    },
    {
      title: "Analyse technique",
      lessons: [
        {
          slug: "skolzyashchie-srednie",
          title: "Indicateurs : les moyennes mobiles",
          summary: "SMA et EMA : comment les utiliser pour déterminer la tendance.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "La moyenne mobile (Moving Average) lisse le prix sur la période choisie, ce qui permet de voir la direction générale de la tendance sans le « bruit » des bougies individuelles. La SMA (simple) accorde un poids égal à tous les prix de la période, tandis que l'EMA (exponentielle) réagit plus fortement aux prix les plus récents.",
            },
            {
              type: "paragraph",
              text: "Lorsque le prix se situe au-dessus de la moyenne mobile, la tendance est généralement considérée comme haussière, en dessous, comme baissière. Le croisement d'une moyenne mobile courte et d'une moyenne mobile longue (par exemple, la MA50 qui croise la MA200 par le bas vers le haut) est un signal populaire connu sous le nom de « golden cross ».",
            },
          ],
          questions: [
            {
              prompt: "Quelle est la différence entre la SMA et l'EMA ?",
              options: [
                "L'EMA accorde plus de poids aux derniers prix",
                "La SMA ne fonctionne que sur un graphique en minutes",
                "Il n'y a aucune différence, c'est la même chose",
              ],
              correctAnswer: "L'EMA accorde plus de poids aux derniers prix",
            },
            {
              prompt: "Que révèle le fait que le prix se situe au-dessus de la moyenne mobile ?",
              options: ["La tendance est probablement haussière", "L'actif est forcément surévalué", "Le volume d'échanges est nul"],
              correctAnswer: "La tendance est probablement haussière",
            },
            {
              prompt: "Qu'appelle-t-on le « golden cross » ?",
              options: [
                "Le croisement d'une MA courte au-dessus d'une MA longue — un signal haussier",
                "Le moment de la cotation d'un nouveau jeton",
                "Le croisement du prix avec la ligne zéro",
              ],
              correctAnswer: "Le croisement d'une MA courte au-dessus d'une MA longue — un signal haussier",
            },
          ],
        },
        {
          slug: "rsi-i-oscillyatory",
          title: "Le RSI et les oscillateurs",
          summary: "Surachat, survente, divergences.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Le RSI (Relative Strength Index) est un oscillateur qui mesure la vitesse et l'ampleur des variations de prix, sur une échelle de 0 à 100. Les valeurs supérieures à 70 sont généralement considérées comme une zone de surachat, celles inférieures à 30 comme une zone de survente.",
            },
            {
              type: "paragraph",
              text: "Une divergence apparaît lorsque le prix et le RSI évoluent dans des directions opposées : par exemple, le prix inscrit un nouveau plus haut, mais pas le RSI. Cela est souvent considéré comme un signal d'alerte précoce d'affaiblissement de la tendance et d'un possible retournement.",
            },
          ],
          questions: [
            {
              prompt: "Sur quelle échelle évolue l'indicateur RSI ?",
              options: ["De 0 à 100", "De -1 à 1", "De 0 à 10000"],
              correctAnswer: "De 0 à 100",
            },
            {
              prompt: "Que signifie généralement un RSI supérieur à 70 ?",
              options: ["L'actif se trouve en zone de surachat", "Il est impossible de vendre l'actif", "Le volume d'échanges est tombé à zéro"],
              correctAnswer: "L'actif se trouve en zone de surachat",
            },
            {
              prompt: "Qu'est-ce qu'une divergence du RSI ?",
              options: [
                "Le prix et l'indicateur évoluent dans des directions opposées — un signal de retournement possible",
                "Une coïncidence parfaite entre le mouvement du prix et celui de l'indicateur",
                "Un dysfonctionnement technique de l'indicateur",
              ],
              correctAnswer: "Le prix et l'indicateur évoluent dans des directions opposées — un signal de retournement possible",
            },
          ],
        },
        {
          slug: "urovni-fibonachchi",
          title: "Les niveaux de Fibonacci",
          summary: "Retracements et extensions de Fibonacci dans l'analyse graphique.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Les niveaux de retracement de Fibonacci (23,6 %, 38,2 %, 50 %, 61,8 %, 78,6 %) se tracent entre le début et la fin d'un mouvement impulsif et aident à anticiper où le prix pourrait stopper sa correction avant de poursuivre la tendance. De nombreux traders considèrent le niveau 61,8 % comme le plus important.",
            },
            {
              type: "paragraph",
              text: "Les extensions de Fibonacci, à la différence des retracements, servent à projeter des objectifs de prix au-delà de l'impulsion initiale — c'est-à-dire jusqu'où le prix pourrait aller ensuite.",
            },
          ],
          questions: [
            {
              prompt: "Quel niveau de Fibonacci de nombreux traders considèrent-ils comme clé pour un retracement ?",
              options: ["61,8 %", "10 %", "100 %"],
              correctAnswer: "61,8 %",
            },
            {
              prompt: "À quoi servent les retracements de Fibonacci ?",
              options: [
                "À rechercher des points d'entrée lors d'une correction au sein d'une tendance",
                "À calculer la commission de la bourse",
                "À déterminer l'heure exacte de publication des actualités",
              ],
              correctAnswer: "À rechercher des points d'entrée lors d'une correction au sein d'une tendance",
            },
            {
              prompt: "À quoi servent les extensions de Fibonacci ?",
              options: [
                "À déterminer des objectifs de prix au-delà de l'impulsion",
                "À déterminer la taille du stop-loss en pourcentage",
                "À afficher le volume d'échanges",
              ],
              correctAnswer: "À déterminer des objectifs de prix au-delà de l'impulsion",
            },
          ],
        },
        {
          slug: "patterny-razvorota",
          title: "Figures de retournement",
          summary: "Tête-épaules, double sommet/double creux.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "La figure « tête-épaules » est l'un des signaux de retournement de tendance haussière les plus connus : le prix forme trois sommets, dont le sommet central (la tête) est plus haut que les deux sommets voisins (les épaules). Le double sommet/double creux est une figure de sens similaire, composée de deux sommets ou creux à peu près égaux.",
            },
            {
              type: "paragraph",
              text: "La figure n'est considérée comme confirmée qu'après la cassure de la « ligne de cou » (neckline) — le niveau reliant les creux locaux entre les sommets. Une cassure sans volume s'avère souvent être un faux signal.",
            },
          ],
          questions: [
            {
              prompt: "Que signale la figure « tête-épaules » ?",
              options: [
                "Un probable retournement de la tendance haussière",
                "Une poursuite garantie de la hausse",
                "Une suspension des échanges sur la bourse",
              ],
              correctAnswer: "Un probable retournement de la tendance haussière",
            },
            {
              prompt: "Qu'est-ce qui confirme la validation de la figure « double sommet » ?",
              options: ["La cassure de la ligne de cou vers le bas", "L'apparition d'un troisième sommet", "Une hausse du volume au sommet lui-même"],
              correctAnswer: "La cassure de la ligne de cou vers le bas",
            },
            {
              prompt: "Pourquoi le volume est-il important pour confirmer la cassure d'une figure ?",
              options: [
                "Sans volume, la cassure s'avère plus souvent être un faux signal",
                "Le volume n'a aucune influence sur les figures",
                "Le volume n'est nécessaire que sur le timeframe journalier",
              ],
              correctAnswer: "Sans volume, la cassure s'avère plus souvent être un faux signal",
            },
          ],
        },
        {
          slug: "patterny-prodolzheniya",
          title: "Figures de continuation",
          summary: "Drapeaux, triangles, rectangles.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Les figures de continuation — drapeaux, triangles, rectangles — représentent une pause ou une consolidation au sein d'une tendance déjà existante. Contrairement aux figures de retournement, elles se résolvent le plus souvent dans le sens du mouvement précédent.",
            },
            {
              type: "paragraph",
              text: "La sortie du prix hors de cette consolidation s'accompagne généralement d'un pic de volume, ce qui aide à distinguer une vraie cassure d'une fausse.",
            },
          ],
          questions: [
            {
              prompt: "Dans quel sens la figure « drapeau » se résout-elle le plus souvent ?",
              options: ["Dans le sens de la tendance précédente", "Toujours strictement à la baisse", "Dans une direction aléatoire"],
              correctAnswer: "Dans le sens de la tendance précédente",
            },
            {
              prompt: "Qu'ont en commun les triangles, les drapeaux et les rectangles ?",
              options: [
                "Ce sont des pauses/consolidations au sein d'une tendance",
                "Ce sont toujours des signaux de retournement",
                "Ils n'apparaissent que sur le forex",
              ],
              correctAnswer: "Ce sont des pauses/consolidations au sein d'une tendance",
            },
            {
              prompt: "Qu'est-ce qui accompagne le plus souvent une vraie sortie de triangle ?",
              options: ["Un pic de volume", "Une absence totale de volume", "Une suspension des échanges"],
              correctAnswer: "Un pic de volume",
            },
          ],
        },
        {
          slug: "multitaymfreym-analiz",
          title: "Les timeframes et l'analyse multi-timeframe",
          summary: "Comment faire correspondre les signaux sur différents timeframes.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "L'analyse multi-timeframe est une approche « du haut vers le bas » : on détermine d'abord la tendance générale sur le timeframe supérieur (par exemple journalier), puis on cherche le point d'entrée sur un timeframe inférieur (par exemple horaire ou 15 minutes).",
            },
            {
              type: "paragraph",
              text: "Ignorer le timeframe supérieur est une erreur fréquente chez les débutants : une position peut sembler excellente en 5 minutes, mais aller à l'encontre de la tendance journalière dominante, ce qui réduit fortement les chances de succès.",
            },
          ],
          questions: [
            {
              prompt: "Par quel timeframe commence-t-on généralement l'analyse selon la méthode « du haut vers le bas » ?",
              options: ["Par le timeframe supérieur (par exemple journalier)", "Par le timeframe en minutes", "Par un timeframe pris au hasard"],
              correctAnswer: "Par le timeframe supérieur (par exemple journalier)",
            },
            {
              prompt: "À quoi sert le timeframe inférieur dans l'analyse multi-timeframe ?",
              options: ["À affiner le point d'entrée en position", "À remplacer complètement le timeframe supérieur", "À calculer la commission de la bourse"],
              correctAnswer: "À affiner le point d'entrée en position",
            },
            {
              prompt: "Que peut-il se passer si l'on ignore le timeframe supérieur ?",
              options: [
                "Trader à contre-sens de la tendance principale",
                "Une augmentation automatique du profit",
                "Rien, cela n'a aucune importance",
              ],
              correctAnswer: "Trader à contre-sens de la tendance principale",
            },
          ],
        },
        {
          slug: "psikhologiya-treydera",
          title: "La psychologie du trader",
          summary: "Maîtrise des émotions, discipline, journal de trading.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "La peur et l'avidité sont les deux émotions qui ruinent le plus souvent les stratégies de trading. La peur pousse à clôturer les positions gagnantes trop tôt, voire à ne jamais entrer sur le marché ; l'avidité pousse à conserver une position plus longtemps que prévu ou à augmenter le risque après une série de gains.",
            },
            {
              type: "paragraph",
              text: "Le revenge trading — la tentative de récupérer immédiatement une perte par une série de transactions émotionnelles, sans analyse — est l'un des moyens les plus rapides de vider son dépôt. Tenir un journal de trading aide à analyser ses erreurs et à développer progressivement de la discipline.",
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que le revenge trading ?",
              options: [
                "La tentative de récupérer immédiatement une perte par des transactions émotionnelles",
                "Une stratégie officielle des hedge funds",
                "Le remboursement d'une commission par la bourse",
              ],
              correctAnswer: "La tentative de récupérer immédiatement une perte par des transactions émotionnelles",
            },
            {
              prompt: "Pourquoi un trader doit-il tenir un journal de trading ?",
              options: [
                "Pour analyser ses erreurs et améliorer sa stratégie",
                "C'est une exigence de la bourse",
                "Pour réduire ses impôts",
              ],
              correctAnswer: "Pour analyser ses erreurs et améliorer sa stratégie",
            },
            {
              prompt: "Quelle émotion pousse le plus souvent à conserver une position perdante trop longtemps ?",
              options: ["L'espoir d'un retournement et la peur d'acter la perte", "L'ennui", "La confiance dans le bon droit de la bourse"],
              correctAnswer: "L'espoir d'un retournement et la peur d'acter la perte",
            },
          ],
        },
        {
          slug: "pervaya-virtualnaya-sdelka",
          title: "Votre première transaction virtuelle",
          summary: "Mettez en pratique tout ce que vous avez appris sur un solde virtuel.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il est temps de rassembler la théorie : avant d'ouvrir une position, déterminez le point d'entrée (à partir des niveaux et de la structure de tendance), le stop-loss (la perte maximale acceptable) et l'objectif de profit — tout cela à l'avance, avant même de cliquer sur Long ou Short.",
            },
            {
              type: "paragraph",
              text: "La section « Marché virtuel » d'ASTREX permet de s'exercer à l'ensemble du processus sur des données simulées, sans risquer d'argent réel — c'est la meilleure façon de développer sa discipline avant de passer au trading avec un capital réel.",
            },
          ],
          questions: [
            {
              prompt: "Que faut-il déterminer avant d'ouvrir une position ?",
              options: [
                "Le point d'entrée, le stop-loss et l'objectif de profit",
                "Uniquement le point d'entrée",
                "Il n'est nécessaire de rien déterminer à l'avance",
              ],
              correctAnswer: "Le point d'entrée, le stop-loss et l'objectif de profit",
            },
            {
              prompt: "Pourquoi commencer par s'entraîner sur un solde virtuel ?",
              options: [
                "Pour mettre au point sa stratégie sans risquer d'argent réel",
                "Le solde virtuel génère plus de profits",
                "C'est une obligation légale",
              ],
              correctAnswer: "Pour mettre au point sa stratégie sans risquer d'argent réel",
            },
            {
              prompt: "Que faut-il faire juste après la clôture d'une position ?",
              options: [
                "L'analyser et noter le résultat dans son journal",
                "Ouvrir immédiatement une position opposée",
                "Supprimer l'historique de la transaction",
              ],
              correctAnswer: "L'analyser et noter le résultat dans son journal",
            },
          ],
        },
      ],
    },
    {
      title: "Macroéconomie et marché crypto",
      lessons: [
        {
          slug: "frs-i-protsentnye-stavki",
          title: "La Fed et les taux d'intérêt",
          summary: "Comment les décisions de la Fed américaine sur les taux font bouger l'ensemble du marché, crypto incluse.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "La Fed (la Réserve fédérale des États-Unis) fixe le taux d'intérêt directeur, dont dépend le coût de l'argent dans l'ensemble de l'économie mondiale. Quand le taux augmente, le crédit devient plus cher et les investisseurs quittent les actifs risqués — actions et cryptomonnaies — pour se réfugier dans les obligations et les dépôts.",
            },
            {
              type: "paragraph",
              text: "Lorsque la Fed baisse son taux ou laisse entrevoir un assouplissement de sa politique, les actifs risqués progressent généralement : l'argent devient moins cher, et les investisseurs sont de nouveau prêts à prendre des risques pour obtenir du rendement.",
            },
            {
              type: "list",
              items: [
                "Les réunions du FOMC ont lieu 8 fois par an — ce sont des dates clés pour le marché",
                "Le marché réagit non seulement à la décision elle-même, mais aussi au ton employé (« faucon » ou « colombe »)",
                "Le marché crypto est particulièrement sensible au taux directeur en raison de la forte proportion de capital spéculatif qu'il attire",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment le marché réagit-il généralement à une hausse du taux de la Fed ?",
              options: [
                "Les actifs risqués (crypto incluse) baissent le plus souvent",
                "Le marché crypto ne réagit absolument pas au taux directeur",
                "Le bitcoin monte toujours lors d'une hausse de taux",
              ],
              correctAnswer: "Les actifs risqués (crypto incluse) baissent le plus souvent",
            },
            {
              prompt: "Qu'est-ce que le FOMC ?",
              options: [
                "Le comité de la Fed qui décide du taux d'intérêt directeur",
                "La plus grande plateforme d'échange crypto des États-Unis",
                "Un indice de volatilité du marché",
              ],
              correctAnswer: "Le comité de la Fed qui décide du taux d'intérêt directeur",
            },
            {
              prompt: "Comment appelle-t-on un assouplissement de la politique monétaire, dans le jargon du marché ?",
              options: ["Une politique « colombe » (dovish)", "Une politique « faucon » (hawkish)", "Une émission « neutre »"],
              correctAnswer: "Une politique « colombe » (dovish)",
            },
          ],
        },
        {
          slug: "inflyatsiya-i-cpi",
          title: "L'inflation et l'indice CPI",
          summary: "Pourquoi les données d'inflation font bouger le marché plus que bien d'autres actualités.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Le CPI (indice des prix à la consommation) est le principal indicateur de l'inflation aux États-Unis, publié chaque mois. Si l'inflation dépasse les attentes, le marché anticipe une politique plus stricte de la Fed — les actifs risqués baissent. Si l'inflation ralentit, le marché s'en réjouit et progresse.",
            },
            {
              type: "list",
              items: [
                "La publication du CPI est l'un des moments les plus volatils du mois sur le marché crypto",
                "Ce qui compte n'est pas le chiffre lui-même, mais son écart par rapport aux prévisions des analystes",
                "Outre le CPI, il existe le PCE — l'indicateur d'inflation privilégié par la Fed",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que mesure l'indice CPI ?",
              options: [
                "L'évolution des prix d'un panier de biens et services de consommation",
                "Le cours du bitcoin par rapport au dollar",
                "Le volume d'échanges sur la bourse",
              ],
              correctAnswer: "L'évolution des prix d'un panier de biens et services de consommation",
            },
            {
              prompt: "Comment le marché réagit-il généralement quand le CPI publié dépasse les prévisions ?",
              options: [
                "Les actifs risqués baissent le plus souvent",
                "Le marché ne réagit jamais au CPI",
                "Le marché crypto suspend automatiquement les échanges",
              ],
              correctAnswer: "Les actifs risqués baissent le plus souvent",
            },
            {
              prompt: "Quel indicateur d'inflation est considéré comme celui privilégié par la Fed elle-même ?",
              options: ["PCE", "DXY", "RSI"],
              correctAnswer: "PCE",
            },
          ],
        },
        {
          slug: "indeks-dollara-dxy",
          title: "L'indice du dollar (DXY)",
          summary: "La corrélation inverse entre le dollar et les cryptomonnaies.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Le DXY mesure la force du dollar américain par rapport à un panier d'autres devises. Historiquement, le DXY et le bitcoin évoluent souvent en opposition : un dollar fort pèse sur la crypto et les autres actifs risqués, tandis qu'un dollar faible soutient leur hausse.",
            },
            {
              type: "paragraph",
              text: "Les traders expérimentés gardent le graphique du DXY dans un panneau séparé, au même titre que le BTC — une hausse brutale de l'indice du dollar annonce souvent une correction sur le marché crypto avant même qu'elle ne soit visible sur le graphique du bitcoin lui-même.",
            },
          ],
          questions: [
            {
              prompt: "Que mesure l'indice DXY ?",
              options: [
                "La force du dollar américain par rapport à un panier d'autres devises",
                "La volatilité du bitcoin",
                "La capitalisation totale du marché crypto",
              ],
              correctAnswer: "La force du dollar américain par rapport à un panier d'autres devises",
            },
            {
              prompt: "Comment les mouvements du DXY et du bitcoin sont-ils généralement liés ?",
              options: [
                "Ils évoluent le plus souvent dans des directions opposées",
                "Ils évoluent toujours de façon parfaitement synchrone",
                "Ils ne sont liés en aucune façon",
              ],
              correctAnswer: "Ils évoluent le plus souvent dans des directions opposées",
            },
            {
              prompt: "De quoi une hausse brutale de l'indice DXY peut-elle être annonciatrice ?",
              options: [
                "D'une correction probable sur le marché crypto",
                "D'une hausse garantie du bitcoin",
                "D'un dysfonctionnement technique de la bourse",
              ],
              correctAnswer: "D'une correction probable sur le marché crypto",
            },
          ],
        },
        {
          slug: "korrelyatsiya-s-fondovym-rynkom",
          title: "La corrélation avec le marché boursier",
          summary: "Le lien entre le bitcoin, l'indice Nasdaq et l'appétit pour le risque.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Ces dernières années, le bitcoin se comporte de plus en plus comme un actif risqué technologique plutôt que comme un « or numérique » — son prix est souvent corrélé à l'indice Nasdaq. Quand les investisseurs achètent volontiers des actions de sociétés technologiques, le marché crypto progresse généralement aussi, et inversement.",
            },
            {
              type: "paragraph",
              text: "Cette corrélation n'est pas constante : lors d'événements spécifiques à la crypto (piratage d'une plateforme, actualités réglementaires, cotation majeure), le marché crypto peut évoluer indépendamment des actions.",
            },
          ],
          questions: [
            {
              prompt: "Avec quelle classe d'actifs le bitcoin est-il le plus souvent corrélé ces dernières années ?",
              options: [
                "Avec les actions technologiques (Nasdaq)",
                "Avec les obligations d'État",
                "Il n'est corrélé à rien",
              ],
              correctAnswer: "Avec les actions technologiques (Nasdaq)",
            },
            {
              prompt: "Que signifie une forte corrélation entre le BTC et le Nasdaq ?",
              options: [
                "Ils évoluent le plus souvent dans la même direction",
                "Ils sont obligés d'évoluer dans des directions opposées",
                "Le BTC remplace entièrement l'indice Nasdaq",
              ],
              correctAnswer: "Ils évoluent le plus souvent dans la même direction",
            },
            {
              prompt: "Qu'est-ce qui peut affaiblir temporairement la corrélation entre le BTC et le marché boursier ?",
              options: [
                "Des événements spécifiques à la crypto (piratage d'une plateforme, actualités réglementaires)",
                "Un jour de fermeture de la bourse",
                "Un changement de fuseau horaire",
              ],
              correctAnswer: "Des événements spécifiques à la crypto (piratage d'une plateforme, actualités réglementaires)",
            },
          ],
        },
        {
          slug: "ekonomicheskiy-kalendar",
          title: "Le calendrier économique et les actualités",
          summary: "Quels événements il faut absolument surveiller avant de trader.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Le calendrier économique est le planning de publication des données macroéconomiques importantes : réunions de la Fed, rapports sur l'inflation (CPI), sur l'emploi (NFP) et autres indicateurs susceptibles de faire fortement grimper la volatilité.",
            },
            {
              type: "paragraph",
              text: "Les événements du calendrier sont généralement classés par niveau d'impact (élevé/moyen/faible). Avant les publications à fort impact, les traders expérimentés réduisent souvent leur risque, allègent leurs positions ou s'abstiennent carrément de toute nouvelle transaction — la volatilité peut être imprévisible à ces moments-là.",
            },
          ],
          questions: [
            {
              prompt: "À quoi sert le calendrier économique pour un trader ?",
              options: [
                "À suivre les dates des actualités importantes qui influencent le marché",
                "À planifier ses vacances personnelles",
                "À remplacer entièrement l'analyse technique",
              ],
              correctAnswer: "À suivre les dates des actualités importantes qui influencent le marché",
            },
            {
              prompt: "Qu'est-ce que le NFP ?",
              options: [
                "Le rapport sur l'emploi non agricole aux États-Unis",
                "Un nouveau protocole cryptographique",
                "L'indice de peur et de cupidité",
              ],
              correctAnswer: "Le rapport sur l'emploi non agricole aux États-Unis",
            },
            {
              prompt: "Que faire raisonnablement avant la publication d'une actualité à fort impact ?",
              options: [
                "Réduire son risque ou s'abstenir de nouvelles transactions",
                "Augmenter au maximum la taille de sa position",
                "Désactiver ses stop-loss",
              ],
              correctAnswer: "Réduire son risque ou s'abstenir de nouvelles transactions",
            },
          ],
        },
      ],
    },
    {
      title: "Concepts Smart Money",
      lessons: [
        {
          slug: "imbalans-i-fvg",
          title: "L'imbalance et le Fair Value Gap (FVG)",
          summary: "Les zones d'inefficience de prix et comment les repérer sur un graphique.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'imbalance est une zone du graphique où le prix a évolué trop rapidement dans une direction, sans laisser aux deux parties (acheteurs et vendeurs) la possibilité d'échanger pleinement. Le marché revient souvent « combler » ces zones plus tard.",
            },
            {
              type: "paragraph",
              text: "Le Fair Value Gap (FVG) est un cas particulier d'imbalance formé sur trois bougies : un écart visible subsiste entre la mèche de la première et la mèche de la troisième bougie. C'est l'une des zones d'intérêt les plus utilisées dans les Smart Money Concepts.",
            },
            { type: "diagram", diagram: "fvg", caption: "Un FVG haussier classique sur trois bougies" },
            { type: "diagram", diagram: "imbalance", caption: "Une zone d'imbalance plus large sur une seule bougie impulsive" },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que le Fair Value Gap (FVG) ?",
              options: [
                "Un écart entre les mèches de la 1re et de la 3e bougie, dû à une impulsion brutale",
                "Un niveau de stop-loss",
                "Un indicateur de volume",
              ],
              correctAnswer: "Un écart entre les mèches de la 1re et de la 3e bougie, dû à une impulsion brutale",
            },
            {
              prompt: "Que fait le plus souvent le marché avec une zone d'imbalance par la suite ?",
              options: [
                "Il y revient et la « comble » partiellement ou totalement",
                "Il ne la touche plus jamais",
                "Il la supprime automatiquement du graphique",
              ],
              correctAnswer: "Il y revient et la « comble » partiellement ou totalement",
            },
            {
              prompt: "Combien de bougies compose la figure FVG classique ?",
              options: ["Trois", "Une", "Sept"],
              correctAnswer: "Trois",
            },
          ],
        },
        {
          slug: "likvidnost-na-rynke",
          title: "La liquidité et ses types",
          summary: "Où s'accumulent sur le graphique les ordres en attente des gros acteurs.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La liquidité désigne des accumulations d'ordres en attente (stop-loss et ordres à cours limité) à des niveaux de prix précis. Elle se concentre le plus souvent au-delà des plus hauts/plus bas égaux et des niveaux de support/résistance évidents, que tout le monde peut voir.",
            },
            {
              type: "list",
              items: [
                "La liquidité buy-side — les stops des vendeurs à découvert, situés au-dessus des plus hauts locaux",
                "La liquidité sell-side — les stops des acheteurs, situés en dessous des plus bas locaux",
                "Les gros acteurs ont besoin de liquidité pour constituer ou clôturer une position sans slippage important",
              ],
            },
          ],
          questions: [
            {
              prompt: "Où la liquidité s'accumule-t-elle le plus souvent sur un graphique ?",
              options: [
                "Près des plus hauts/plus bas égaux et des niveaux de support/résistance évidents",
                "Strictement au milieu du range, sans raison particulière",
                "Uniquement sur les bougies liées à une actualité",
              ],
              correctAnswer: "Près des plus hauts/plus bas égaux et des niveaux de support/résistance évidents",
            },
            {
              prompt: "Qu'est-ce que la liquidité buy-side ?",
              options: [
                "Les stops des vendeurs à découvert, situés au-dessus des plus hauts locaux",
                "Les stops des acheteurs, situés en dessous des plus bas locaux",
                "La commission d'achat de la bourse",
              ],
              correctAnswer: "Les stops des vendeurs à découvert, situés au-dessus des plus hauts locaux",
            },
            {
              prompt: "Pourquoi les gros acteurs ont-ils besoin de liquidité sur le marché ?",
              options: [
                "Pour constituer ou clôturer une position importante sans slippage important",
                "Pour arrêter complètement les échanges",
                "Cela ne concerne pas les gros acteurs",
              ],
              correctAnswer: "Pour constituer ou clôturer une position importante sans slippage important",
            },
          ],
        },
        {
          slug: "snyatie-likvidnosti",
          title: "Le balayage de liquidité (Liquidity Sweep)",
          summary: "Pourquoi le prix balaie d'abord les stops avant de se retourner.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le liquidity sweep désigne une situation où le prix perce délibérément un niveau chargé en liquidité (par exemple des plus hauts égaux), récolte les ordres en attente, puis se retourne brutalement dans la direction opposée — celle vers laquelle le mouvement de fond était en réalité destiné à aller.",
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "Percée des plus hauts égaux suivie d'un retournement brutal à la baisse" },
            {
              type: "paragraph",
              text: "Comprendre le sweep aide à ne pas tomber dans le piège : la cassure d'un niveau, en soi, ne garantit pas la poursuite du mouvement dans cette direction — il ne s'agit souvent que d'une chasse à la liquidité.",
            },
          ],
          questions: [
            {
              prompt: "Que se passe-t-il généralement avec le prix juste après un liquidity sweep ?",
              options: [
                "Un retournement brutal dans la direction opposée à la percée",
                "Le prix poursuit toujours son mouvement dans le sens de la percée",
                "Rien, le volume tombe à zéro",
              ],
              correctAnswer: "Un retournement brutal dans la direction opposée à la percée",
            },
            {
              prompt: "Quelle zone devient le plus souvent la cible d'un liquidity sweep ?",
              options: [
                "Une zone chargée d'ordres en attente — par exemple des plus hauts/plus bas égaux",
                "Le milieu d'un range aléatoire, sans niveaux",
                "Une zone sans aucune liquidité",
              ],
              correctAnswer: "Une zone chargée d'ordres en attente — par exemple des plus hauts/plus bas égaux",
            },
            {
              prompt: "Quelle erreur les débutants commettent-ils typiquement face à un sweep ?",
              options: [
                "Entrer dans le sens de la cassure sans tenir compte d'un possible retournement",
                "Clôturer une position gagnante trop tôt",
                "Placer son stop-loss avant d'entrer en position",
              ],
              correctAnswer: "Entrer dans le sens de la cassure sans tenir compte d'un possible retournement",
            },
          ],
        },
        {
          slug: "struktura-trenda-bos-choch",
          title: "Structure de tendance : BOS et CHoCH",
          summary: "Comment déterminer, à partir des plus hauts et des plus bas, si une tendance est encore valide ou déjà cassée.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Une tendance haussière se compose d'une succession de Higher High (HH) et de Higher Low (HL). Tant que cette structure se maintient, la tendance est considérée comme valide.",
            },
            {
              type: "paragraph",
              text: "Le Break of Structure (BOS) est la cassure du plus haut précédent, qui confirme la poursuite de la tendance. Le Change of Character (CHoCH) est une cassure dans le sens inverse, le premier signal d'un possible retournement de tendance.",
            },
            { type: "diagram", diagram: "trend-structure", caption: "Structure HH/HL d'une tendance haussière et BOS" },
          ],
          questions: [
            {
              prompt: "Que signale le Change of Character (CHoCH) ?",
              options: [
                "Un possible retournement de la tendance en cours",
                "Une poursuite de la tendance avec accélération",
                "Une absence de liquidité sur le marché",
              ],
              correctAnswer: "Un possible retournement de la tendance en cours",
            },
            {
              prompt: "Que confirme le Break of Structure (BOS) ?",
              options: [
                "La poursuite de la tendance en cours",
                "L'arrêt automatique des échanges",
                "L'annulation de tous les niveaux précédents",
              ],
              correctAnswer: "La poursuite de la tendance en cours",
            },
            {
              prompt: "De quoi se compose la structure d'une tendance haussière ?",
              options: [
                "De Higher High et de Higher Low",
                "De Lower High et de Lower Low",
                "De bougies de hauteur identique",
              ],
              correctAnswer: "De Higher High et de Higher Low",
            },
          ],
        },
        {
          slug: "order-bloki",
          title: "Les order blocks",
          summary: "Les zones depuis lesquelles les gros acteurs ont lancé un mouvement de prix important.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'order block est la dernière bougie de sens opposé avant un mouvement de prix impulsif important. Par exemple, la dernière bougie rouge avant une forte hausse est considérée comme un order block haussier : on suppose que c'est précisément là que les gros acteurs ont constitué leur position.",
            },
            {
              type: "paragraph",
              text: "Les traders utilisent les order blocks comme zones d'entrée potentielles : si le prix revient à l'avenir dans cette zone, on s'attend à une réaction — la poursuite du mouvement dans la direction initiale.",
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce qu'un order block ?",
              options: [
                "La dernière bougie de sens opposé avant un mouvement impulsif important",
                "Un indicateur de volume d'échanges",
                "Un type d'ordre boursier à exécution différée",
              ],
              correctAnswer: "La dernière bougie de sens opposé avant un mouvement impulsif important",
            },
            {
              prompt: "Comment les traders utilisent-ils généralement les order blocks ?",
              options: [
                "Comme des zones d'entrée potentielles lors d'un retour du prix",
                "Comme un indicateur d'inflation",
                "Pour calculer la commission de la bourse",
              ],
              correctAnswer: "Comme des zones d'entrée potentielles lors d'un retour du prix",
            },
            {
              prompt: "En quoi un order block haussier diffère-t-il d'un order block baissier ?",
              options: [
                "Il se forme avant une impulsion à la hausse, et non à la baisse",
                "Il est toujours plus grand en taille",
                "Il n'apparaît que sur le timeframe journalier",
              ],
              correctAnswer: "Il se forme avant une impulsion à la hausse, et non à la baisse",
            },
          ],
        },
      ],
    },
  ],
};
