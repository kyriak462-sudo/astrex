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
                "Le trading n'est accessible qu'aux banques",
                "Le trading implique des transactions fréquentes sur des horizons courts",
                "Le trading ne comporte aucun risque",
              ],
              correctAnswer: "Le trading implique des transactions fréquentes sur des horizons courts",
            },
            {
              prompt: "Contrairement à l'investisseur classique, qui peut aussi gagner sur la baisse du prix d'un actif ?",
              options: ["Seulement les market makers", "Le trader qui ouvre des positions courtes", "Seulement les banques"],
              correctAnswer: "Le trader qui ouvre des positions courtes",
            },
            {
              prompt: "Qu'apportent les market makers au marché ?",
              options: ["Un cours fixe pour l'actif", "La régulation étatique", "La liquidité pour les transactions des autres acteurs"],
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
              options: ["Il est entièrement réglementé par l'État", "Il ne se négocie que les jours ouvrés en journée", "Il fonctionne 24/7 sans interruption"],
              correctAnswer: "Il fonctionne 24/7 sans interruption",
            },
            {
              prompt: "Que négocie-t-on sur le marché Forex ?",
              options: ["Des actions d'entreprises", "Des matières premières", "Des paires de devises"],
              correctAnswer: "Des paires de devises",
            },
            {
              prompt: "Lequel de ces marchés se distingue généralement par la plus forte volatilité ?",
              options: ["Le marché des obligations d'État", "Le marché crypto", "Les paires de devises du G7"],
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
              options: ["Le prix de l'actif", "Le nombre de traders", "Le volume des échanges"],
              correctAnswer: "Le prix de l'actif",
            },
            {
              prompt: "Qu'est-ce qu'un timeframe ?",
              options: [
                "Le nom d'une bourse",
                "La période de temps représentée par un seul élément du graphique",
                "Un type d'ordre",
              ],
              correctAnswer: "La période de temps représentée par un seul élément du graphique",
            },
            {
              prompt: "Pourquoi les traders analysent-ils plusieurs timeframes en même temps ?",
              options: [
                "Pour voir à la fois la tendance générale et le point d'entrée précis",
                "Pour contourner les frais de la bourse",
                "Cela n'a aucun intérêt pratique",
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
                "Le nombre d'acteurs du marché",
                "L'écart entre le prix d'ouverture et de clôture",
                "Le volume d'échanges maximal",
              ],
              correctAnswer: "L'écart entre le prix d'ouverture et de clôture",
            },
            {
              prompt: "Que montrent les mèches (ombres) d'une bougie ?",
              options: [
                "Le nombre de transactions dans la journée",
                "L'amplitude de prix en dehors du corps — le plus haut et le plus bas de la période",
                "Le volume d'échanges moyen",
              ],
              correctAnswer: "L'amplitude de prix en dehors du corps — le plus haut et le plus bas de la période",
            },
            {
              prompt: "Que peut indiquer une longue mèche basse après une baisse du prix ?",
              options: [
                "Le volume d'échanges était nul",
                "Les acheteurs ont activement racheté le prix par le bas — un retournement est possible",
                "Le marché va forcément continuer à baisser",
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
                "La commission sur une transaction",
                "Un prix où les acheteurs ont historiquement stoppé une baisse",
                "Le prix d'ouverture de la bourse",
              ],
              correctAnswer: "Un prix où les acheteurs ont historiquement stoppé une baisse",
            },
            {
              prompt: "Que se passe-t-il généralement avec un niveau de résistance après sa cassure à la hausse ?",
              options: [
                "Le prix doit obligatoirement revenir immédiatement en arrière",
                "Il disparaît et n'influence plus le prix",
                "Il devient souvent un nouveau support",
              ],
              correctAnswer: "Il devient souvent un nouveau support",
            },
            {
              prompt: "Comment construire correctement des niveaux fiables sur un graphique ?",
              options: [
                "À partir de plusieurs contacts du prix, et non d'un seul point",
                "Uniquement sur le timeframe en minutes",
                "Strictement au centre du graphique",
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
                "Uniquement d'une suite de bougies vertes",
                "D'une succession de plus hauts et de plus bas croissants",
                "De bougies de hauteur identique",
              ],
              correctAnswer: "D'une succession de plus hauts et de plus bas croissants",
            },
            {
              prompt: "Qu'est-ce qu'une tendance latérale (range) ?",
              options: [
                "Une chute brutale du prix",
                "Un mouvement du prix dans un range, sans direction claire",
                "Une période de suspension des échanges sur la bourse",
              ],
              correctAnswer: "Un mouvement du prix dans un range, sans direction claire",
            },
            {
              prompt: "Pourquoi dit-on « la tendance est ton amie » ?",
              options: [
                "Ce n'est qu'une simple figure de style sans portée pratique",
                "Une tendance ne change jamais de direction",
                "Trader dans le sens de la tendance offre statistiquement plus de chances de succès",
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
                "C'est le signal d'entrée le plus fiable qui soit",
                "La liquidité de l'actif est maximale",
                "Le mouvement est faible et pourrait ne pas être confirmé",
              ],
              correctAnswer: "Le mouvement est faible et pourrait ne pas être confirmé",
            },
            {
              prompt: "Qu'est-ce que la liquidité du marché ?",
              options: [
                "La facilité à acheter/vendre un actif sans influencer fortement son prix",
                "La commission de la bourse sur une transaction",
                "Le nombre total de jetons en circulation",
              ],
              correctAnswer: "La facilité à acheter/vendre un actif sans influencer fortement son prix",
            },
            {
              prompt: "Quel risque guette un trader qui négocie un actif peu liquide ?",
              options: [
                "Un profit garanti",
                "Un slippage important lors de l'exécution de la transaction",
                "Une absence totale de commissions",
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
                "À garantir un profit",
                "À augmenter la taille de la position",
                "À limiter la perte sur une transaction à l'avance",
              ],
              correctAnswer: "À limiter la perte sur une transaction à l'avance",
            },
            {
              prompt: "Quel pourcentage du dépôt recommande-t-on généralement de risquer par transaction ?",
              options: ["25 à 30 %", "Tout le dépôt", "1 à 2 %"],
              correctAnswer: "1 à 2 %",
            },
            {
              prompt: "Que signifie un ratio risque/profit de 1:3 ?",
              options: [
                "La position se fermera dans 3 heures",
                "Le risque est 3 fois supérieur au profit",
                "Le profit potentiel est 3 fois supérieur au risque",
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
                "Il n'y a aucune différence, c'est la même chose",
                "L'EMA accorde plus de poids aux derniers prix",
                "La SMA ne fonctionne que sur un graphique en minutes",
              ],
              correctAnswer: "L'EMA accorde plus de poids aux derniers prix",
            },
            {
              prompt: "Que révèle le fait que le prix se situe au-dessus de la moyenne mobile ?",
              options: ["La tendance est probablement haussière", "Le volume d'échanges est nul", "L'actif est forcément surévalué"],
              correctAnswer: "La tendance est probablement haussière",
            },
            {
              prompt: "Qu'appelle-t-on le « golden cross » ?",
              options: [
                "Le moment de la cotation d'un nouveau jeton",
                "Le croisement du prix avec la ligne zéro",
                "Le croisement d'une MA courte au-dessus d'une MA longue — un signal haussier",
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
              options: ["De -1 à 1", "De 0 à 100", "De 0 à 10000"],
              correctAnswer: "De 0 à 100",
            },
            {
              prompt: "Que signifie généralement un RSI supérieur à 70 ?",
              options: ["Le volume d'échanges est tombé à zéro", "Il est impossible de vendre l'actif", "L'actif se trouve en zone de surachat"],
              correctAnswer: "L'actif se trouve en zone de surachat",
            },
            {
              prompt: "Qu'est-ce qu'une divergence du RSI ?",
              options: [
                "Un dysfonctionnement technique de l'indicateur",
                "Le prix et l'indicateur évoluent dans des directions opposées — un signal de retournement possible",
                "Une coïncidence parfaite entre le mouvement du prix et celui de l'indicateur",
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
              options: ["61,8 %", "100 %", "10 %"],
              correctAnswer: "61,8 %",
            },
            {
              prompt: "À quoi servent les retracements de Fibonacci ?",
              options: [
                "À rechercher des points d'entrée lors d'une correction au sein d'une tendance",
                "À déterminer l'heure exacte de publication des actualités",
                "À calculer la commission de la bourse",
              ],
              correctAnswer: "À rechercher des points d'entrée lors d'une correction au sein d'une tendance",
            },
            {
              prompt: "À quoi servent les extensions de Fibonacci ?",
              options: [
                "À afficher le volume d'échanges",
                "À déterminer la taille du stop-loss en pourcentage",
                "À déterminer des objectifs de prix au-delà de l'impulsion",
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
                "Une suspension des échanges sur la bourse",
                "Une poursuite garantie de la hausse",
              ],
              correctAnswer: "Un probable retournement de la tendance haussière",
            },
            {
              prompt: "Qu'est-ce qui confirme la validation de la figure « double sommet » ?",
              options: ["L'apparition d'un troisième sommet", "La cassure de la ligne de cou vers le bas", "Une hausse du volume au sommet lui-même"],
              correctAnswer: "La cassure de la ligne de cou vers le bas",
            },
            {
              prompt: "Pourquoi le volume est-il important pour confirmer la cassure d'une figure ?",
              options: [
                "Le volume n'est nécessaire que sur le timeframe journalier",
                "Sans volume, la cassure s'avère plus souvent être un faux signal",
                "Le volume n'a aucune influence sur les figures",
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
              options: ["Toujours strictement à la baisse", "Dans le sens de la tendance précédente", "Dans une direction aléatoire"],
              correctAnswer: "Dans le sens de la tendance précédente",
            },
            {
              prompt: "Qu'ont en commun les triangles, les drapeaux et les rectangles ?",
              options: [
                "Ce sont toujours des signaux de retournement",
                "Ils n'apparaissent que sur le forex",
                "Ce sont des pauses/consolidations au sein d'une tendance",
              ],
              correctAnswer: "Ce sont des pauses/consolidations au sein d'une tendance",
            },
            {
              prompt: "Qu'est-ce qui accompagne le plus souvent une vraie sortie de triangle ?",
              options: ["Un pic de volume", "Une suspension des échanges", "Une absence totale de volume"],
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
              options: ["Par un timeframe pris au hasard", "Par le timeframe supérieur (par exemple journalier)", "Par le timeframe en minutes"],
              correctAnswer: "Par le timeframe supérieur (par exemple journalier)",
            },
            {
              prompt: "À quoi sert le timeframe inférieur dans l'analyse multi-timeframe ?",
              options: ["À affiner le point d'entrée en position", "À calculer la commission de la bourse", "À remplacer complètement le timeframe supérieur"],
              correctAnswer: "À affiner le point d'entrée en position",
            },
            {
              prompt: "Que peut-il se passer si l'on ignore le timeframe supérieur ?",
              options: [
                "Une augmentation automatique du profit",
                "Rien, cela n'a aucune importance",
                "Trader à contre-sens de la tendance principale",
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
                "Le remboursement d'une commission par la bourse",
                "La tentative de récupérer immédiatement une perte par des transactions émotionnelles",
                "Une stratégie officielle des hedge funds",
              ],
              correctAnswer: "La tentative de récupérer immédiatement une perte par des transactions émotionnelles",
            },
            {
              prompt: "Pourquoi un trader doit-il tenir un journal de trading ?",
              options: [
                "Pour analyser ses erreurs et améliorer sa stratégie",
                "Pour réduire ses impôts",
                "C'est une exigence de la bourse",
              ],
              correctAnswer: "Pour analyser ses erreurs et améliorer sa stratégie",
            },
            {
              prompt: "Quelle émotion pousse le plus souvent à conserver une position perdante trop longtemps ?",
              options: ["L'ennui", "La confiance dans le bon droit de la bourse", "L'espoir d'un retournement et la peur d'acter la perte"],
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
                "Uniquement le point d'entrée",
                "Le point d'entrée, le stop-loss et l'objectif de profit",
                "Il n'est nécessaire de rien déterminer à l'avance",
              ],
              correctAnswer: "Le point d'entrée, le stop-loss et l'objectif de profit",
            },
            {
              prompt: "Pourquoi commencer par s'entraîner sur un solde virtuel ?",
              options: [
                "Le solde virtuel génère plus de profits",
                "C'est une obligation légale",
                "Pour mettre au point sa stratégie sans risquer d'argent réel",
              ],
              correctAnswer: "Pour mettre au point sa stratégie sans risquer d'argent réel",
            },
            {
              prompt: "Que faut-il faire juste après la clôture d'une position ?",
              options: [
                "L'analyser et noter le résultat dans son journal",
                "Supprimer l'historique de la transaction",
                "Ouvrir immédiatement une position opposée",
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
                "Le bitcoin monte toujours lors d'une hausse de taux",
                "Le marché crypto ne réagit absolument pas au taux directeur",
                "Les actifs risqués (crypto incluse) baissent le plus souvent",
              ],
              correctAnswer: "Les actifs risqués (crypto incluse) baissent le plus souvent",
            },
            {
              prompt: "Qu'est-ce que le FOMC ?",
              options: [
                "La plus grande plateforme d'échange crypto des États-Unis",
                "Le comité de la Fed qui décide du taux d'intérêt directeur",
                "Un indice de volatilité du marché",
              ],
              correctAnswer: "Le comité de la Fed qui décide du taux d'intérêt directeur",
            },
            {
              prompt: "Comment appelle-t-on un assouplissement de la politique monétaire, dans le jargon du marché ?",
              options: ["Une émission « neutre »", "Une politique « faucon » (hawkish)", "Une politique « colombe » (dovish)"],
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
                "Le volume d'échanges sur la bourse",
                "L'évolution des prix d'un panier de biens et services de consommation",
                "Le cours du bitcoin par rapport au dollar",
              ],
              correctAnswer: "L'évolution des prix d'un panier de biens et services de consommation",
            },
            {
              prompt: "Comment le marché réagit-il généralement quand le CPI publié dépasse les prévisions ?",
              options: [
                "Le marché crypto suspend automatiquement les échanges",
                "Le marché ne réagit jamais au CPI",
                "Les actifs risqués baissent le plus souvent",
              ],
              correctAnswer: "Les actifs risqués baissent le plus souvent",
            },
            {
              prompt: "Quel indicateur d'inflation est considéré comme celui privilégié par la Fed elle-même ?",
              options: ["RSI", "PCE", "DXY"],
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
                "La capitalisation totale du marché crypto",
                "La volatilité du bitcoin",
              ],
              correctAnswer: "La force du dollar américain par rapport à un panier d'autres devises",
            },
            {
              prompt: "Comment les mouvements du DXY et du bitcoin sont-ils généralement liés ?",
              options: [
                "Ils évoluent le plus souvent dans des directions opposées",
                "Ils ne sont liés en aucune façon",
                "Ils évoluent toujours de façon parfaitement synchrone",
              ],
              correctAnswer: "Ils évoluent le plus souvent dans des directions opposées",
            },
            {
              prompt: "De quoi une hausse brutale de l'indice DXY peut-elle être annonciatrice ?",
              options: [
                "D'une hausse garantie du bitcoin",
                "D'une correction probable sur le marché crypto",
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
                "Avec les obligations d'État",
                "Avec les actions technologiques (Nasdaq)",
                "Il n'est corrélé à rien",
              ],
              correctAnswer: "Avec les actions technologiques (Nasdaq)",
            },
            {
              prompt: "Que signifie une forte corrélation entre le BTC et le Nasdaq ?",
              options: [
                "Le BTC remplace entièrement l'indice Nasdaq",
                "Ils sont obligés d'évoluer dans des directions opposées",
                "Ils évoluent le plus souvent dans la même direction",
              ],
              correctAnswer: "Ils évoluent le plus souvent dans la même direction",
            },
            {
              prompt: "Qu'est-ce qui peut affaiblir temporairement la corrélation entre le BTC et le marché boursier ?",
              options: [
                "Un changement de fuseau horaire",
                "Des événements spécifiques à la crypto (piratage d'une plateforme, actualités réglementaires)",
                "Un jour de fermeture de la bourse",
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
                "À planifier ses vacances personnelles",
                "À suivre les dates des actualités importantes qui influencent le marché",
                "À remplacer entièrement l'analyse technique",
              ],
              correctAnswer: "À suivre les dates des actualités importantes qui influencent le marché",
            },
            {
              prompt: "Qu'est-ce que le NFP ?",
              options: [
                "L'indice de peur et de cupidité",
                "Un nouveau protocole cryptographique",
                "Le rapport sur l'emploi non agricole aux États-Unis",
              ],
              correctAnswer: "Le rapport sur l'emploi non agricole aux États-Unis",
            },
            {
              prompt: "Que faire raisonnablement avant la publication d'une actualité à fort impact ?",
              options: [
                "Augmenter au maximum la taille de sa position",
                "Réduire son risque ou s'abstenir de nouvelles transactions",
                "Désactiver ses stop-loss",
              ],
              correctAnswer: "Réduire son risque ou s'abstenir de nouvelles transactions",
            },
          ],
        },
        {
          slug: "etf",
          title: "ETF",
          summary: "Ce qu'est un fonds coté en bourse et pourquoi les approbations d'ETF crypto font bouger le marché.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Un ETF (Exchange-Traded Fund, fonds coté en bourse) est un instrument financier qui se négocie en bourse comme une action ordinaire, mais qui réplique la valeur d'un actif sous-jacent ou d'un panier d'actifs. Un ETF crypto au comptant (spot) permet aux investisseurs d'obtenir une exposition au prix d'un actif, comme le bitcoin, sans l'acheter ni le détenir directement — c'est la société de gestion du fonds qui détient elle-même l'actif sous-jacent.",
            },
            {
              type: "paragraph",
              text: "L'approbation par les régulateurs (par exemple la SEC aux États-Unis) d'ETF spot bitcoin ou ethereum est considérée comme un événement majeur pour le marché : elle ouvre l'accès à l'actif aux investisseurs institutionnels et particuliers pour qui détenir directement des cryptomonnaies est peu pratique ou interdit. Les traders utilisent les entrées et sorties de capitaux quotidiennes de ces ETF comme indicateur de la demande institutionnelle.",
            },
            {
              type: "list",
              items: [
                "Un ETF réplique la valeur d'un actif sous-jacent, mais se négocie comme une action ordinaire sur une bourse traditionnelle",
                "Un ETF spot signifie que la société de gestion détient réellement l'actif sous-jacent",
                "Les entrées et sorties quotidiennes des ETF crypto sont utilisées comme indicateur de la demande institutionnelle",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce qu'un ETF ?",
              options: [
                "Un type de portefeuille de cryptomonnaies",
                "Un protocole de consensus blockchain",
                "Un instrument financier qui se négocie comme une action et réplique la valeur d'un actif sous-jacent",
              ],
              correctAnswer: "Un instrument financier qui se négocie comme une action et réplique la valeur d'un actif sous-jacent",
            },
            {
              prompt: "Qu'apporte un ETF crypto spot à un investisseur ?",
              options: [
                "Une exposition au prix d'un actif sans avoir à l'acheter et à le détenir lui-même",
                "Un rendement fixe garanti",
                "Un droit de vote dans la gouvernance d'une blockchain",
              ],
              correctAnswer: "Une exposition au prix d'un actif sans avoir à l'acheter et à le détenir lui-même",
            },
            {
              prompt: "Comment les traders utilisent-ils les données d'entrées/sorties des ETF crypto ?",
              options: [
                "Comme indicateur de la demande institutionnelle pour l'actif",
                "Comme substitut à l'analyse du volume et de la volatilité",
                "Comme prévision exacte du prix du lendemain",
              ],
              correctAnswer: "Comme indicateur de la demande institutionnelle pour l'actif",
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
                "Un indicateur de volume",
                "Un niveau de stop-loss",
              ],
              correctAnswer: "Un écart entre les mèches de la 1re et de la 3e bougie, dû à une impulsion brutale",
            },
            {
              prompt: "Que fait le plus souvent le marché avec une zone d'imbalance par la suite ?",
              options: [
                "Il y revient et la « comble » partiellement ou totalement",
                "Il la supprime automatiquement du graphique",
                "Il ne la touche plus jamais",
              ],
              correctAnswer: "Il y revient et la « comble » partiellement ou totalement",
            },
            {
              prompt: "Combien de bougies compose la figure FVG classique ?",
              options: ["Une", "Sept", "Trois"],
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
                "Uniquement sur les bougies liées à une actualité",
                "Près des plus hauts/plus bas égaux et des niveaux de support/résistance évidents",
                "Strictement au milieu du range, sans raison particulière",
              ],
              correctAnswer: "Près des plus hauts/plus bas égaux et des niveaux de support/résistance évidents",
            },
            {
              prompt: "Qu'est-ce que la liquidité buy-side ?",
              options: [
                "La commission d'achat de la bourse",
                "Les stops des acheteurs, situés en dessous des plus bas locaux",
                "Les stops des vendeurs à découvert, situés au-dessus des plus hauts locaux",
              ],
              correctAnswer: "Les stops des vendeurs à découvert, situés au-dessus des plus hauts locaux",
            },
            {
              prompt: "Pourquoi les gros acteurs ont-ils besoin de liquidité sur le marché ?",
              options: [
                "Pour constituer ou clôturer une position importante sans slippage important",
                "Cela ne concerne pas les gros acteurs",
                "Pour arrêter complètement les échanges",
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
                "Rien, le volume tombe à zéro",
                "Le prix poursuit toujours son mouvement dans le sens de la percée",
              ],
              correctAnswer: "Un retournement brutal dans la direction opposée à la percée",
            },
            {
              prompt: "Quelle zone devient le plus souvent la cible d'un liquidity sweep ?",
              options: [
                "Une zone sans aucune liquidité",
                "Le milieu d'un range aléatoire, sans niveaux",
                "Une zone chargée d'ordres en attente — par exemple des plus hauts/plus bas égaux",
              ],
              correctAnswer: "Une zone chargée d'ordres en attente — par exemple des plus hauts/plus bas égaux",
            },
            {
              prompt: "Quelle erreur les débutants commettent-ils typiquement face à un sweep ?",
              options: [
                "Placer son stop-loss avant d'entrer en position",
                "Entrer dans le sens de la cassure sans tenir compte d'un possible retournement",
                "Clôturer une position gagnante trop tôt",
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
                "Une poursuite de la tendance avec accélération",
                "Une absence de liquidité sur le marché",
                "Un possible retournement de la tendance en cours",
              ],
              correctAnswer: "Un possible retournement de la tendance en cours",
            },
            {
              prompt: "Que confirme le Break of Structure (BOS) ?",
              options: [
                "L'arrêt automatique des échanges",
                "L'annulation de tous les niveaux précédents",
                "La poursuite de la tendance en cours",
              ],
              correctAnswer: "La poursuite de la tendance en cours",
            },
            {
              prompt: "De quoi se compose la structure d'une tendance haussière ?",
              options: [
                "De bougies de hauteur identique",
                "De Lower High et de Lower Low",
                "De Higher High et de Higher Low",
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
                "Un indicateur de volume d'échanges",
                "Un type d'ordre boursier à exécution différée",
                "La dernière bougie de sens opposé avant un mouvement impulsif important",
              ],
              correctAnswer: "La dernière bougie de sens opposé avant un mouvement impulsif important",
            },
            {
              prompt: "Comment les traders utilisent-ils généralement les order blocks ?",
              options: [
                "Pour calculer la commission de la bourse",
                "Comme des zones d'entrée potentielles lors d'un retour du prix",
                "Comme un indicateur d'inflation",
              ],
              correctAnswer: "Comme des zones d'entrée potentielles lors d'un retour du prix",
            },
            {
              prompt: "En quoi un order block haussier diffère-t-il d'un order block baissier ?",
              options: [
                "Il n'apparaît que sur le timeframe journalier",
                "Il se forme avant une impulsion à la hausse, et non à la baisse",
                "Il est toujours plus grand en taille",
              ],
              correctAnswer: "Il se forme avant une impulsion à la hausse, et non à la baisse",
            },
          ],
        },
      ],
    },

    {
      title: "Gestion des risques",
      lessons: [
        {
          slug: "risk-reward",
          title: "Risk/Reward",
          summary: "Le ratio risque/profit et pourquoi il compte plus que le pourcentage de trades gagnants.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Risk/Reward (R/R) est le ratio entre la perte potentielle et le profit potentiel d'une transaction. Si vous risquez 100 $ pour gagner 300 $, votre R/R est de 1:3. C'est l'une des métriques clés qui détermine si un système de trading sera rentable sur le long terme.",
            },
            {
              type: "paragraph",
              text: "Même un système au faible pourcentage de trades gagnants peut être rentable si le R/R moyen est suffisamment élevé. Par exemple, avec un R/R de 1:3, il suffit d'avoir raison dans seulement 30 % des cas pour être en profit. C'est pourquoi les traders expérimentés se concentrent non pas sur le taux de réussite, mais sur l'espérance mathématique de la transaction.",
            },
            {
              type: "list",
              items: [
                "Le R/R se calcule avant d'entrer en position, pas après",
                "Plus le R/R est élevé, plus le winrate requis peut être bas",
                "Un bon R/R ne garantit pas de profit sans discipline dans l'exécution",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que signifie un ratio Risk/Reward de 1:3 ?",
              options: [
                "Il faut ouvrir 3 positions d'affilée",
                "Le profit potentiel est 3 fois supérieur au risque potentiel",
                "La position se ferme au bout de 3 heures",
              ],
              correctAnswer: "Le profit potentiel est 3 fois supérieur au risque potentiel",
            },
            {
              prompt: "Pourquoi un système avec un R/R de 1:3 peut-il être rentable même avec un winrate de 40 % ?",
              options: [
                "Le profit des trades gagnants compense les pertes des trades perdants",
                "Parce que les commissions de la bourse diminuent",
                "Parce que 40 % est toujours supérieur à 33 %",
              ],
              correctAnswer: "Le profit des trades gagnants compense les pertes des trades perdants",
            },
            {
              prompt: "Quand un trader doit-il calculer le Risk/Reward d'une transaction ?",
              options: [
                "Avant d'entrer en position",
                "Il n'est pas nécessaire de calculer le R/R",
                "Seulement après la clôture de la position",
              ],
              correctAnswer: "Avant d'entrer en position",
            },
          ],
        },
        {
          slug: "razmer-pozitsii",
          title: "Taille de position",
          summary: "Comment calculer le volume d'une transaction à partir du risque sur le dépôt, et non du profit désiré.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La taille de position (position sizing) est le montant de capital que vous engagez dans une transaction donnée. Elle doit être déterminée non par le profit désiré, mais par le risque acceptable : en général, les traders ne risquent pas plus de 1 à 2 % du dépôt par transaction, indépendamment de la confiance que leur inspire le setup.",
            },
            {
              type: "paragraph",
              text: "La formule est simple : taille de position = (dépôt × pourcentage de risque) / distance au stop-loss en pourcentage. Cette approche prend automatiquement en compte la volatilité de l'actif et l'éloignement du stop — plus le stop est large, plus le volume de la position est faible pour un même risque en dollars.",
            },
            {
              type: "list",
              items: [
                "Un pourcentage de risque fixe protège le dépôt contre une série de trades perdants",
                "Le volume de la position doit diminuer si le stop-loss est placé loin",
                "L'utilisation de l'effet de levier augmente le volume, mais n'annule pas le calcul du risque",
              ],
            },
          ],
          questions: [
            {
              prompt: "De quoi la taille de position doit-elle dépendre en premier lieu ?",
              options: [
                "De la somme d'argent disponible sur la carte",
                "De l'humeur du trader",
                "Du risque acceptable en pourcentage du dépôt",
              ],
              correctAnswer: "Du risque acceptable en pourcentage du dépôt",
            },
            {
              prompt: "Que se passe-t-il avec la taille de position si le stop-loss est placé plus loin du prix d'entrée ?",
              options: [
                "Le volume de la position doit diminuer pour un même risque en dollars",
                "Le volume de la position n'est pas lié à la distance du stop",
                "Le volume de la position doit augmenter",
              ],
              correctAnswer: "Le volume de la position doit diminuer pour un même risque en dollars",
            },
            {
              prompt: "Quel pourcentage du dépôt recommande-t-on généralement de risquer sur une seule transaction ?",
              options: ["50 %", "25 à 30 %", "1 à 2 %"],
              correctAnswer: "1 à 2 %",
            },
          ],
        },
        {
          slug: "stop-loss",
          title: "Stop-loss",
          summary: "Pourquoi le stop-loss est indispensable, où le placer correctement et quelles erreurs sont les plus fréquentes.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le stop-loss est un niveau de prix fixé à l'avance, auquel la position se ferme automatiquement avec une perte. C'est le principal outil de protection du capital : il limite les pertes à une somme connue à l'avance, au lieu de laisser la perte croître sans contrôle.",
            },
            {
              type: "paragraph",
              text: "Le stop-loss doit être placé en fonction de la structure du marché — juste derrière le niveau de support, de résistance ou l'extrémum de bougie le plus proche —, et non en fonction de la somme que le trader est prêt à perdre. Un stop trop serré fait sortir de la position sur du simple bruit de marché, un stop trop large augmente le risque sur la position.",
            },
            {
              type: "list",
              items: [
                "Le stop-loss protège contre les décisions émotionnelles pendant une phase de perte",
                "Le niveau du stop doit s'appuyer sur la structure du graphique, pas sur la somme de perte souhaitée",
                "Déplacer le stop plus loin du prix pendant une perte est l'une des erreurs les plus fréquentes des débutants",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quelle est la fonction principale du stop-loss ?",
              options: [
                "Doubler automatiquement la position",
                "Augmenter le profit de la transaction",
                "Limiter la perte à une somme connue à l'avance",
              ],
              correctAnswer: "Limiter la perte à une somme connue à l'avance",
            },
            {
              prompt: "Sur quelle base est-il préférable de déterminer le niveau du stop-loss ?",
              options: [
                "Sur un nombre aléatoire",
                "Sur le montant de profit souhaité",
                "Sur la structure du marché (niveaux de support/résistance)",
              ],
              correctAnswer: "Sur la structure du marché (niveaux de support/résistance)",
            },
            {
              prompt: "Quelle erreur est typique des débutants pendant une phase de perte sur une transaction ?",
              options: [
                "Déplacer le stop-loss plus loin du prix pour « laisser une chance à la position »",
                "Calculer le risque avant d'entrer en position",
                "Clôturer la position strictement au niveau du stop",
              ],
              correctAnswer: "Déplacer le stop-loss plus loin du prix pour « laisser une chance à la position »",
            },
          ],
        },
        {
          slug: "take-profit",
          title: "Take Profit",
          summary: "Comment fixer des objectifs de profit et quand utiliser une clôture partielle de la position.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le Take Profit (TP) est un niveau fixé à l'avance auquel la position se clôture automatiquement avec un profit. Comme le stop-loss, il doit être déterminé par la logique du marché : le niveau de résistance, de support ou la zone de liquidité la plus proche, et non par le désir arbitraire de gagner une somme précise.",
            },
            {
              type: "paragraph",
              text: "De nombreux traders utilisent la clôture partielle : ils sécurisent une partie de la position au premier objectif et laissent le reste continuer à évoluer avec un stop déplacé au point mort. Cela permet à la fois de sécuriser du profit et de ne pas sortir trop tôt de la transaction si le mouvement se poursuit.",
            },
            {
              type: "list",
              items: [
                "Le TP, tout comme le stop, doit être placé en fonction de la structure du graphique",
                "La clôture partielle réduit la pression psychologique pendant la transaction",
                "Déplacer le stop au point mort après le premier objectif protège le profit déjà obtenu",
              ],
            },
          ],
          questions: [
            {
              prompt: "Sur quoi doit se baser le niveau du Take Profit ?",
              options: [
                "Sur le nombre d'heures passées en position",
                "Sur la structure du graphique : niveaux de résistance, de support ou de liquidité",
                "Sur un nombre aléatoire qui plaît au trader",
              ],
              correctAnswer: "Sur la structure du graphique : niveaux de résistance, de support ou de liquidité",
            },
            {
              prompt: "Pourquoi les traders utilisent-ils la clôture partielle d'une position ?",
              options: [
                "Pour clôturer obligatoirement la transaction en perte",
                "Pour augmenter la commission de la bourse",
                "Pour sécuriser une partie du profit et laisser le reste continuer à évoluer",
              ],
              correctAnswer: "Pour sécuriser une partie du profit et laisser le reste continuer à évoluer",
            },
            {
              prompt: "Que fait-on généralement du stop-loss une fois le premier objectif de profit atteint ?",
              options: [
                "On le supprime complètement",
                "On le déplace plus loin du prix",
                "On le déplace au point mort pour protéger le profit obtenu",
              ],
              correctAnswer: "On le déplace au point mort pour protéger le profit obtenu",
            },
          ],
        },
        {
          slug: "psihologiya-ubytkov",
          title: "La psychologie des pertes",
          summary: "Comment les trades perdants influencent les décisions du trader et pourquoi il est important d'accepter les pertes avec calme.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Les pertes sont une partie inévitable du trading : même un système rentable perd régulièrement de l'argent sur certaines transactions. Le problème ne réside pas dans la perte elle-même, mais dans la réaction qu'elle suscite — la tentative de « se refaire » immédiatement avec un volume accru, ou le refus de clôturer la position au stop dans l'espoir d'un retournement.",
            },
            {
              type: "paragraph",
              text: "Le trader qui perçoit chaque perte comme un coût statistique attendu du système, et non comme un échec personnel, prend des décisions plus rationnelles. Tenir un journal de trading et définir le risque à l'avance aident à séparer les émotions du processus.",
            },
            {
              type: "list",
              items: [
                "Une série de pertes est une composante normale, même d'un système de trading rentable",
                "Tenter de « se refaire » après une perte augmente généralement le risque, pas le profit",
                "Un risque défini à l'avance pour chaque transaction réduit la pression émotionnelle au moment de la perte",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment est-il préférable de percevoir une perte isolée en trading ?",
              options: [
                "Comme une raison d'arrêter de tenir un journal de trading",
                "Comme un coût statistique attendu du système de trading",
                "Comme le signe qu'il faut immédiatement doubler le volume de la prochaine transaction",
              ],
              correctAnswer: "Comme un coût statistique attendu du système de trading",
            },
            {
              prompt: "À quoi mène le plus souvent la tentative de « se refaire » immédiatement après une perte ?",
              options: [
                "À l'annulation automatique de la transaction précédente",
                "À une augmentation du risque et à de nouvelles pertes",
                "À un profit garanti",
              ],
              correctAnswer: "À une augmentation du risque et à de nouvelles pertes",
            },
            {
              prompt: "Qu'est-ce qui aide un trader à séparer ses émotions de ses décisions de trading ?",
              options: [
                "L'augmentation du levier après chaque perte",
                "Le renoncement total à l'analyse des transactions",
                "Un risque défini à l'avance pour chaque transaction et la tenue d'un journal",
              ],
              correctAnswer: "Un risque défini à l'avance pour chaque transaction et la tenue d'un journal",
            },
          ],
        },
      ],
    },
    {
      title: "La psychologie du trader",
      lessons: [
        {
          slug: "fomo",
          title: "FOMO",
          summary: "La peur de manquer un mouvement et pourquoi elle pousse à entrer en position au pire moment.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le FOMO (Fear Of Missing Out) est la peur de manquer un mouvement de prix rentable. Il apparaît lorsqu'un actif monte brutalement et que le trader voit les autres « gagner de l'argent » alors que lui non. Sous l'effet du FOMO, les positions sont souvent ouvertes sans plan, au sommet du mouvement, sans tenir compte du risque.",
            },
            {
              type: "paragraph",
              text: "Le problème du FOMO est que l'entrée en position se fait précisément au moment où le mouvement est déjà largement réalisé et où le risque de retournement est maximal. Un trader discipliné respecte des conditions d'entrée définies à l'avance et laisse passer un mouvement s'il ne correspond pas à sa stratégie.",
            },
            {
              type: "list",
              items: [
                "Le FOMO pousse le plus souvent à entrer en position après un mouvement de prix déjà important",
                "Les décisions prises sous FOMO se font généralement sans stop-loss ni calcul du risque",
                "Un plan de transaction défini à l'avance réduit l'influence du FOMO",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que le FOMO en trading ?",
              options: [
                "Un indicateur technique de volume",
                "La peur de manquer un mouvement de prix rentable",
                "Un type d'ordre sur la bourse",
              ],
              correctAnswer: "La peur de manquer un mouvement de prix rentable",
            },
            {
              prompt: "À quel stade du mouvement de prix un trader entre-t-il le plus souvent en position sous l'effet du FOMO ?",
              options: [
                "Tout au début du mouvement",
                "Vers la fin du mouvement, quand le risque de retournement est déjà élevé",
                "Avant même que le mouvement n'ait commencé",
              ],
              correctAnswer: "Vers la fin du mouvement, quand le risque de retournement est déjà élevé",
            },
            {
              prompt: "Qu'est-ce qui aide à réduire l'influence du FOMO sur les décisions d'un trader ?",
              options: [
                "Le suivi constant des trades gagnants des autres",
                "L'augmentation du levier au moment d'une forte hausse",
                "Un plan et des conditions d'entrée définis à l'avance",
              ],
              correctAnswer: "Un plan et des conditions d'entrée définis à l'avance",
            },
          ],
        },
        {
          slug: "zhadnost",
          title: "L'avidité",
          summary: "Comment l'avidité pousse à conserver une position gagnante plus longtemps que prévu et à transformer un profit en perte.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'avidité en trading se manifeste par le désir de tirer davantage de profit d'une transaction que ne le prévoyait le plan initial : ne pas clôturer la position à l'objectif fixé, augmenter le volume après une série de trades gagnants, ou annuler un Take Profit placé à l'avance.",
            },
            {
              type: "paragraph",
              text: "L'avidité conduit le plus souvent à ce qu'une position gagnante se retourne et se clôture au stop ou à zéro, alors qu'elle aurait pu être sécurisée avec un bon résultat. La discipline dans le respect du plan défini à l'avance est le principal rempart contre l'avidité.",
            },
            {
              type: "list",
              items: [
                "L'avidité se manifeste souvent par l'annulation d'un Take Profit placé à l'avance",
                "Augmenter le volume après une série de gains sans modifier la gestion du risque est aussi une manifestation d'avidité",
                "Suivre le plan de transaction établi à l'avance réduit l'influence de l'avidité",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment l'avidité se manifeste-t-elle le plus souvent dans la gestion d'une position ouverte ?",
              options: [
                "Le trader clôture la position strictement selon le plan",
                "Le trader réduit le volume de la position",
                "Le trader annule le Take Profit placé à l'avance, espérant un profit plus important",
              ],
              correctAnswer: "Le trader annule le Take Profit placé à l'avance, espérant un profit plus important",
            },
            {
              prompt: "À quel résultat l'avidité mène-t-elle le plus souvent sur une position gagnante ?",
              options: [
                "La commission de la bourse diminue",
                "Le profit augmente forcément",
                "La position se retourne et se clôture au stop ou à zéro",
              ],
              correctAnswer: "La position se retourne et se clôture au stop ou à zéro",
            },
            {
              prompt: "Quel est le principal outil contre l'avidité en trading ?",
              options: [
                "L'augmentation du levier après chaque trade gagnant",
                "Le renoncement total au placement d'un Take Profit",
                "Le respect du plan de transaction établi à l'avance",
              ],
              correctAnswer: "Le respect du plan de transaction établi à l'avance",
            },
          ],
        },
        {
          slug: "strah",
          title: "La peur",
          summary: "Comment la peur de la perte empêche de suivre la stratégie et conduit à clôturer les positions prématurément.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La peur en trading se manifeste le plus souvent par la crainte de perdre de l'argent : le trader clôture une position gagnante trop tôt à la moindre baisse, hésite à entrer en position sur un signal pourtant confirmé, ou évite complètement de trader après une série de pertes.",
            },
            {
              type: "paragraph",
              text: "Contrairement à l'avidité, la peur pousse à agir avec un excès de prudence et à manquer des opportunités pourtant parfaitement conformes à la stratégie. Trader avec un volume permettant un risque psychologiquement confortable aide à réduire l'influence de la peur.",
            },
            {
              type: "list",
              items: [
                "La peur se manifeste souvent par la clôture prématurée d'une position gagnante",
                "Un volume de position trop important renforce la peur et empêche de suivre le plan",
                "Un niveau de risque confortable par transaction réduit la pression émotionnelle liée à la peur",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment la peur influence-t-elle le plus souvent la gestion d'une position gagnante ?",
              options: [
                "Le trader la clôture trop tôt à la moindre baisse",
                "Le trader augmente le volume de la position",
                "Le trader garde la position bien plus longtemps que prévu",
              ],
              correctAnswer: "Le trader la clôture trop tôt à la moindre baisse",
            },
            {
              prompt: "Qu'est-ce qui renforce la peur dans la gestion d'une position ouverte ?",
              options: [
                "La tenue d'un journal de trading",
                "Un volume de position trop important par rapport au dépôt",
                "Un risque défini à l'avance de 1 à 2 % du dépôt",
              ],
              correctAnswer: "Un volume de position trop important par rapport au dépôt",
            },
            {
              prompt: "En quoi la peur en trading diffère-t-elle fondamentalement de l'avidité ?",
              options: [
                "La peur augmente le volume de la position plus que l'avidité",
                "La peur et l'avidité conduisent exactement aux mêmes décisions",
                "La peur pousse à agir avec un excès de prudence et à manquer des trades conformes à la stratégie",
              ],
              correctAnswer: "La peur pousse à agir avec un excès de prudence et à manquer des trades conformes à la stratégie",
            },
          ],
        },
        {
          slug: "distsiplina",
          title: "La discipline",
          summary: "Pourquoi suivre ses propres règles compte plus que le résultat d'une transaction isolée.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La discipline en trading est la capacité à suivre systématiquement des règles d'entrée, de sortie et de gestion du risque définies à l'avance, même quand l'envie d'agir autrement se fait sentir sur le moment. C'est précisément la discipline qui distingue un trader doté d'un système d'une personne qui trade sur ses émotions.",
            },
            {
              type: "paragraph",
              text: "Même une stratégie de trading parfaite n'apportera aucun résultat si les règles sont enfreintes chaque fois qu'une transaction ne se déroule pas comme prévu. La discipline se construit sur des règles simples, clairement formulées, et une analyse régulière de leur respect.",
            },
            {
              type: "list",
              items: [
                "La discipline compte plus que le résultat d'une transaction isolée",
                "Enfreindre ses propres règles réduit à néant même une bonne stratégie",
                "Une analyse régulière du respect des règles aide à renforcer la discipline",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que la discipline dans le contexte du trading ?",
              options: [
                "L'utilisation du levier maximal",
                "Le respect systématique de règles définies à l'avance",
                "La capacité à deviner la direction du prix",
              ],
              correctAnswer: "Le respect systématique de règles définies à l'avance",
            },
            {
              prompt: "Pourquoi même une bonne stratégie ne fonctionne-t-elle pas sans discipline ?",
              options: [
                "Parce que la discipline n'influence pas le résultat",
                "Parce que les stratégies fonctionnent toujours aussi bien",
                "Parce que les règles sont enfreintes au moment où la transaction ne se déroule pas comme prévu",
              ],
              correctAnswer: "Parce que les règles sont enfreintes au moment où la transaction ne se déroule pas comme prévu",
            },
            {
              prompt: "Qu'est-ce qui aide à renforcer la discipline avec le temps ?",
              options: [
                "Le renoncement total à l'analyse des transactions",
                "Une analyse régulière du respect de ses propres règles",
                "La modification constante des règles après chaque transaction",
              ],
              correctAnswer: "Une analyse régulière du respect de ses propres règles",
            },
          ],
        },
        {
          slug: "emotsionalny-kontrol",
          title: "Le contrôle émotionnel",
          summary: "Des techniques pratiques qui aident à prendre des décisions basées sur le plan, et non sur les émotions.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le contrôle émotionnel est la capacité à reconnaître son état émotionnel (excitation, peur, irritation après une perte) et à ne pas le laisser influencer directement les décisions de trading. Ce n'est pas l'absence d'émotions, mais la capacité à agir selon le plan malgré elles.",
            },
            {
              type: "paragraph",
              text: "Les outils pratiques du contrôle émotionnel incluent une pause avant d'entrer en position, une limite du nombre de transactions ou de pertes par jour, ainsi que la tenue d'un journal où est consigné non seulement le résultat, mais aussi l'état émotionnel du trader au moment de la transaction.",
            },
            {
              type: "list",
              items: [
                "Le contrôle émotionnel consiste à gérer sa réaction aux émotions, pas à les faire disparaître",
                "Une limite journalière du nombre de transactions ou de pertes réduit l'influence du tilt",
                "Consigner son état émotionnel dans le journal aide à repérer les erreurs récurrentes",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que désigne le contrôle émotionnel en trading ?",
              options: [
                "L'absence totale de toute émotion pendant le trading",
                "La capacité à prédire les émotions des autres traders",
                "La capacité à agir selon le plan malgré les émotions, et non leur absence totale",
              ],
              correctAnswer: "La capacité à agir selon le plan malgré les émotions, et non leur absence totale",
            },
            {
              prompt: "En quoi une limite journalière du nombre de transactions aide-t-elle le trader ?",
              options: [
                "Elle élimine complètement le besoin de stop-loss",
                "Elle garantit un profit en fin de journée",
                "Elle réduit le risque d'une série de décisions émotionnelles consécutives (le tilt)",
              ],
              correctAnswer: "Elle réduit le risque d'une série de décisions émotionnelles consécutives (le tilt)",
            },
            {
              prompt: "Pourquoi consigner son état émotionnel dans le journal de trading pendant une transaction ?",
              options: [
                "C'est une exigence de la bourse pour ouvrir une position",
                "Cela n'aide en rien à l'analyse du trading",
                "Pour repérer les erreurs émotionnelles récurrentes à l'avenir",
              ],
              correctAnswer: "Pour repérer les erreurs émotionnelles récurrentes à l'avenir",
            },
          ],
        },
      ],
    },
    {
      title: "Indicateurs",
      lessons: [
        {
          slug: "rsi",
          title: "RSI",
          summary: "L'indice de force relative : comment mesurer la surachat et la survente d'un actif.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le RSI (Relative Strength Index) est un oscillateur qui mesure la vitesse et l'ampleur des variations récentes de prix sur une échelle de 0 à 100. Les valeurs supérieures à 70 sont traditionnellement considérées comme une zone de surachat, celles inférieures à 30 comme une zone de survente, bien que dans une tendance forte le RSI puisse rester longtemps dans ces zones.",
            },
            {
              type: "paragraph",
              text: "Au-delà des zones de surachat/survente, les traders utilisent les divergences du RSI : si le prix inscrit un nouveau plus haut alors que le RSI n'en fait pas de même, cela peut signaler un affaiblissement de l'impulsion. Le RSI est rarement utilisé isolément et se combine généralement avec l'analyse de la structure du marché.",
            },
            {
              type: "list",
              items: [
                "Un RSI supérieur à 70 indique une surachat potentielle, inférieur à 30 une survente",
                "Dans une tendance forte, le RSI peut rester longtemps dans une zone extrême sans retournement",
                "Une divergence entre le prix et le RSI peut indiquer un affaiblissement de la tendance",
              ],
            },
          ],
          questions: [
            {
              prompt: "Dans quelle plage de valeurs le RSI est-il mesuré ?",
              options: ["De -1 à 1", "De 0 à 10 000", "De 0 à 100"],
              correctAnswer: "De 0 à 100",
            },
            {
              prompt: "Que signifie traditionnellement une valeur de RSI supérieure à 70 ?",
              options: [
                "Une zone de surachat potentielle",
                "Une absence de volume d'échanges",
                "Un retournement du prix garanti à la baisse",
              ],
              correctAnswer: "Une zone de surachat potentielle",
            },
            {
              prompt: "Que peut signaler une divergence entre le prix et le RSI ?",
              options: [
                "Une erreur technique de l'indicateur",
                "Un changement de bourse de cotation de l'actif",
                "Un affaiblissement de l'impulsion actuelle du mouvement",
              ],
              correctAnswer: "Un affaiblissement de l'impulsion actuelle du mouvement",
            },
          ],
        },
        {
          slug: "macd",
          title: "MACD",
          summary: "L'indicateur de convergence-divergence des moyennes mobiles et ses signaux de croisement et de divergence.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le MACD (Moving Average Convergence Divergence) se construit sur la différence entre deux moyennes mobiles exponentielles (généralement 12 et 26 périodes) et une ligne de signal (EMA à 9 périodes du MACD lui-même). L'histogramme représente la différence entre le MACD et la ligne de signal.",
            },
            {
              type: "paragraph",
              text: "Les principaux signaux du MACD sont le croisement entre la ligne MACD et la ligne de signal (changement potentiel d'impulsion) et le croisement de la ligne zéro (changement de direction de tendance). Comme le RSI, le MACD peut présenter des divergences avec le prix, souvent utilisées comme confirmation supplémentaire.",
            },
            {
              type: "list",
              items: [
                "Le MACD se construit sur la différence entre deux EMA et une ligne de signal",
                "Le croisement du MACD et de la ligne de signal est l'un des principaux signaux de trading",
                "Le croisement de la ligne zéro est souvent associé à un changement de direction de tendance",
              ],
            },
          ],
          questions: [
            {
              prompt: "Sur quoi repose l'indicateur MACD ?",
              options: [
                "Sur le volume de l'open interest",
                "Sur la différence entre deux moyennes mobiles exponentielles",
                "Sur le nombre d'adresses actives sur le réseau",
              ],
              correctAnswer: "Sur la différence entre deux moyennes mobiles exponentielles",
            },
            {
              prompt: "Que représente l'histogramme du MACD ?",
              options: [
                "La différence entre la ligne MACD et la ligne de signal",
                "Le nombre de positions ouvertes sur la bourse",
                "Le volume total des échanges de la journée",
              ],
              correctAnswer: "La différence entre la ligne MACD et la ligne de signal",
            },
            {
              prompt: "À quoi associe-t-on souvent le croisement de la ligne MACD avec le niveau zéro ?",
              options: [
                "À un changement de direction de tendance",
                "À une modification des commissions de la bourse",
                "Au listing d'un nouveau token",
              ],
              correctAnswer: "À un changement de direction de tendance",
            },
          ],
        },
        {
          slug: "ema",
          title: "EMA",
          summary: "La moyenne mobile exponentielle et pourquoi elle réagit plus vite au prix que la moyenne simple.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'EMA (Exponential Moving Average) est une moyenne mobile qui accorde un poids plus important aux prix les plus récents, ce qui la rend plus réactive aux variations de prix que la moyenne mobile simple (SMA). Cela la rend plus sensible, mais aussi plus exposée aux faux signaux en range.",
            },
            {
              type: "paragraph",
              text: "Les traders utilisent souvent plusieurs EMA de périodes différentes simultanément (par exemple 20 et 50) pour déterminer la direction de la tendance et les zones de support/résistance dynamiques. Le croisement d'une EMA rapide et d'une EMA lente est un signal populaire, bien que légèrement en retard.",
            },
            {
              type: "list",
              items: [
                "L'EMA accorde un poids plus important aux prix récents par rapport à la SMA",
                "Plusieurs EMA de périodes différentes aident à évaluer la direction de la tendance",
                "Le croisement d'une EMA rapide et d'une EMA lente est un signal en retard, mais populaire",
              ],
            },
          ],
          questions: [
            {
              prompt: "En quoi l'EMA diffère-t-elle de la moyenne mobile simple (SMA) ?",
              options: [
                "L'EMA ne tient pas compte du prix",
                "L'EMA accorde plus de poids aux prix récents et réagit plus vite aux variations",
                "L'EMA se calcule toujours uniquement à partir du volume",
              ],
              correctAnswer: "L'EMA accorde plus de poids aux prix récents et réagit plus vite aux variations",
            },
            {
              prompt: "Pourquoi les traders utilisent-ils plusieurs EMA de périodes différentes en même temps ?",
              options: [
                "Cela n'apporte aucune information utile",
                "Pour évaluer la direction de la tendance et les zones de support/résistance dynamiques",
                "Pour réduire la commission de la bourse",
              ],
              correctAnswer: "Pour évaluer la direction de la tendance et les zones de support/résistance dynamiques",
            },
            {
              prompt: "Quel est l'inconvénient du croisement d'une EMA rapide et d'une EMA lente en tant que signal ?",
              options: [
                "Le signal est impossible à voir sur le graphique",
                "Le signal apparaît avant le début du mouvement",
                "Le signal est en retard par rapport au mouvement de prix en cours",
              ],
              correctAnswer: "Le signal est en retard par rapport au mouvement de prix en cours",
            },
          ],
        },
        {
          slug: "sma",
          title: "SMA",
          summary: "La moyenne mobile simple comme base pour déterminer la direction générale de la tendance.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La SMA (Simple Moving Average) est une moyenne mobile simple, calculée comme la moyenne arithmétique du prix de clôture sur N périodes. Contrairement à l'EMA, toutes les périodes ont le même poids dans la SMA, ce qui la rend plus lente à réagir aux variations de prix et lisse davantage le bruit.",
            },
            {
              type: "paragraph",
              text: "La SMA est souvent utilisée pour déterminer la direction générale, plus long terme, de la tendance — par exemple, la position du prix par rapport à la SMA 200 sur le timeframe journalier est largement utilisée comme repère du marché haussier ou baissier dans son ensemble.",
            },
            {
              type: "list",
              items: [
                "La SMA est la moyenne arithmétique du prix sur un nombre donné de périodes",
                "La SMA lisse le bruit davantage que l'EMA, mais réagit plus lentement",
                "La SMA 200 sur le graphique journalier est souvent utilisée comme repère de la tendance globale",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment la SMA est-elle calculée ?",
              options: [
                "Comme la moyenne arithmétique du prix de clôture sur un nombre donné de périodes",
                "Comme la différence entre le plus haut et le plus bas de la journée",
                "Comme la somme de tous les volumes d'échanges du mois",
              ],
              correctAnswer: "Comme la moyenne arithmétique du prix de clôture sur un nombre donné de périodes",
            },
            {
              prompt: "En quoi la SMA diffère-t-elle de l'EMA du point de vue de la vitesse de réaction au prix ?",
              options: [
                "Il n'y a aucune différence de vitesse de réaction",
                "La SMA réagit toujours plus vite que l'EMA",
                "La SMA réagit plus lentement, car toutes les périodes ont le même poids",
              ],
              correctAnswer: "La SMA réagit plus lentement, car toutes les périodes ont le même poids",
            },
            {
              prompt: "À quoi la SMA 200 sur le timeframe journalier est-elle souvent utilisée ?",
              options: [
                "Pour calculer la commission de la bourse",
                "Pour déterminer l'heure exacte du listing d'un token",
                "Comme repère du marché haussier ou baissier global",
              ],
              correctAnswer: "Comme repère du marché haussier ou baissier global",
            },
          ],
        },
        {
          slug: "vwap",
          title: "VWAP",
          summary: "Le prix moyen pondéré par le volume et son rôle de repère du prix « juste » de la journée.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le VWAP (Volume Weighted Average Price) est le prix moyen d'un actif sur une période, pondéré par le volume échangé à chaque niveau de prix. Contrairement à une moyenne mobile simple, le VWAP montre à quel prix la majeure partie du volume a réellement été échangée.",
            },
            {
              type: "paragraph",
              text: "Les traders institutionnels utilisent souvent le VWAP comme repère du prix « juste » de la journée : un prix au-dessus du VWAP est considéré comme relativement cher, en dessous, comme relativement bon marché. Le VWAP sert aussi de niveau dynamique de support/résistance au sein de la session de trading.",
            },
            {
              type: "list",
              items: [
                "Le VWAP prend en compte non seulement le prix, mais aussi le volume à chaque niveau",
                "Un prix au-dessus du VWAP est interprété comme relativement cher, en dessous comme relativement bon marché",
                "Le VWAP est généralement recalculé au début de chaque session de trading",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que prend en compte le VWAP, contrairement à une moyenne mobile simple ?",
              options: [
                "Uniquement le prix maximal de la journée",
                "Uniquement le prix de clôture du jour précédent",
                "Le volume d'échanges à chaque niveau de prix",
              ],
              correctAnswer: "Le volume d'échanges à chaque niveau de prix",
            },
            {
              prompt: "Comment interprète-t-on un prix situé au-dessus du VWAP ?",
              options: [
                "Comme un signal d'achat garanti",
                "Comme un signe d'arrêt des échanges",
                "Comme relativement cher par rapport au niveau de volume moyen",
              ],
              correctAnswer: "Comme relativement cher par rapport au niveau de volume moyen",
            },
            {
              prompt: "Qui se base le plus souvent sur le VWAP pour exécuter de gros ordres ?",
              options: [
                "Seulement les traders débutants",
                "Seulement les responsables marketing des projets",
                "Les traders institutionnels",
              ],
              correctAnswer: "Les traders institutionnels",
            },
          ],
        },
        {
          slug: "atr",
          title: "ATR",
          summary: "L'amplitude moyenne réelle comme outil de mesure de la volatilité pour placer les stops.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'ATR (Average True Range) mesure la volatilité moyenne d'un actif sur une période donnée, en tenant compte des gaps entre les bougies. Ce n'est pas un indicateur de direction, mais un indicateur d'amplitude du mouvement — un ATR élevé signifie que le prix effectue de larges variations, un ATR faible que le marché est relativement calme.",
            },
            {
              type: "paragraph",
              text: "L'ATR est souvent utilisé pour calculer la taille du stop-loss, adaptée à la volatilité actuelle : au lieu d'un pourcentage fixe, le trader place son stop à une distance multiple de l'ATR, ce qui réduit le risque d'être sorti prématurément par le simple bruit du marché.",
            },
            {
              type: "list",
              items: [
                "L'ATR mesure l'amplitude du mouvement de prix, pas sa direction",
                "Un ATR élevé signifie une volatilité accrue de l'actif",
                "Un stop-loss calculé via l'ATR s'adapte à la volatilité actuelle du marché",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que mesure l'indicateur ATR ?",
              options: [
                "Le nombre d'adresses actives sur le réseau",
                "La direction de la tendance",
                "La volatilité moyenne (l'amplitude du mouvement) d'un actif",
              ],
              correctAnswer: "La volatilité moyenne (l'amplitude du mouvement) d'un actif",
            },
            {
              prompt: "Que révèle une valeur élevée de l'ATR ?",
              options: [
                "Un délisting imminent de l'actif",
                "Une faible liquidité de la bourse",
                "Une volatilité accrue et de larges variations de prix",
              ],
              correctAnswer: "Une volatilité accrue et de larges variations de prix",
            },
            {
              prompt: "À quoi les traders utilisent-ils souvent l'ATR en pratique ?",
              options: [
                "Pour déterminer le prix exact de listing d'un token",
                "Pour calculer les frais de réseau",
                "Pour calculer la taille du stop-loss en tenant compte de la volatilité actuelle",
              ],
              correctAnswer: "Pour calculer la taille du stop-loss en tenant compte de la volatilité actuelle",
            },
          ],
        },
        {
          slug: "bollinger-bands",
          title: "Bollinger Bands",
          summary: "Les bandes de Bollinger comme indicateur de volatilité et de cherté relative du prix.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Les Bollinger Bands se composent d'une moyenne mobile (généralement la SMA 20) et de deux bandes situées à un nombre donné d'écarts-types du prix. La largeur des bandes varie dynamiquement avec la volatilité : elles s'élargissent pendant les mouvements forts et se resserrent pendant les périodes calmes.",
            },
            {
              type: "paragraph",
              text: "Le resserrement des bandes (« squeeze ») précède souvent un mouvement de prix important, quel qu'en soit le sens, et le fait que le prix touche la bande supérieure ou inférieure ne constitue pas en soi un signal de retournement — dans une tendance forte, le prix peut longtemps évoluer le long de la bande.",
            },
            {
              type: "list",
              items: [
                "Les bandes se construisent autour d'une moyenne mobile en se basant sur l'écart-type",
                "Le resserrement des bandes précède souvent un mouvement de prix important",
                "Toucher une bande ne garantit pas un retournement, surtout dans une tendance forte",
              ],
            },
          ],
          questions: [
            {
              prompt: "De quoi se composent les Bollinger Bands ?",
              options: [
                "De trois lignes de volume indépendantes",
                "D'une moyenne mobile et de deux bandes basées sur l'écart-type",
                "D'une seule ligne de prix de clôture",
              ],
              correctAnswer: "D'une moyenne mobile et de deux bandes basées sur l'écart-type",
            },
            {
              prompt: "Qu'est-ce qui précède souvent un mouvement de prix important selon les Bollinger Bands ?",
              options: [
                "Le resserrement (squeeze) des bandes",
                "La disparition complète des bandes du graphique",
                "L'élargissement maximal des bandes",
              ],
              correctAnswer: "Le resserrement (squeeze) des bandes",
            },
            {
              prompt: "Le fait que le prix touche la bande supérieure de Bollinger signifie-t-il un retournement garanti à la baisse ?",
              options: [
                "Oui, mais seulement sur le timeframe hebdomadaire",
                "Non, dans une tendance forte le prix peut longtemps évoluer le long de la bande",
                "Oui, c'est toujours un signal de retournement à cent pour cent",
              ],
              correctAnswer: "Non, dans une tendance forte le prix peut longtemps évoluer le long de la bande",
            },
          ],
        },
      ],
    },
    {
      title: "Analyse du volume",
      lessons: [
        {
          slug: "volume",
          title: "Volume",
          summary: "Le volume d'échanges comme confirmation de la force d'un mouvement de prix.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le Volume indique la quantité d'actif échangée sur une période. C'est l'un des rares indicateurs qui n'est pas dérivé du prix, mais reflète l'activité réelle des participants au marché, c'est pourquoi il est souvent utilisé comme confirmation indépendante d'un mouvement.",
            },
            {
              type: "paragraph",
              text: "Un mouvement de prix sur un volume élevé est considéré comme plus fiable qu'un mouvement identique sur un volume faible : une cassure de niveau sans hausse de volume s'avère plus souvent être un faux signal. Des pics de volume brutaux coïncident aussi souvent avec des points de retournement clés du marché.",
            },
            {
              type: "list",
              items: [
                "Le volume reflète l'activité réelle des participants, et non une dérivée du prix",
                "Une cassure de niveau sur un faible volume s'avère plus souvent être un faux signal",
                "Les pics de volume brutaux coïncident souvent avec des points de retournement",
              ],
            },
          ],
          questions: [
            {
              prompt: "Pourquoi le volume est-il considéré comme une confirmation indépendante du mouvement de prix ?",
              options: [
                "Parce que le volume augmente toujours avec le prix",
                "Il reflète l'activité réelle des participants et n'est pas dérivé du prix lui-même",
                "Parce que le volume se mesure en pourcentage de la capitalisation",
              ],
              correctAnswer: "Il reflète l'activité réelle des participants et n'est pas dérivé du prix lui-même",
            },
            {
              prompt: "Quelle cassure de niveau est considérée comme moins fiable ?",
              options: [
                "La fiabilité d'une cassure ne dépend pas du volume",
                "Une cassure sur un faible volume",
                "Une cassure sur un volume élevé",
              ],
              correctAnswer: "Une cassure sur un faible volume",
            },
            {
              prompt: "Avec quoi les pics de volume brutaux coïncident-ils souvent ?",
              options: [
                "Avec un changement de nom du token",
                "Avec des points de retournement clés du marché",
                "Uniquement avec des pannes techniques de la bourse",
              ],
              correctAnswer: "Avec des points de retournement clés du marché",
            },
          ],
        },
        {
          slug: "delta",
          title: "Delta",
          summary: "La différence entre le volume d'achats et de ventes comme indicateur de pression sur le prix.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le Delta est la différence entre le volume d'achats agressifs (ordres au marché à l'achat) et de ventes agressives sur une période. Un delta positif signifie une prédominance des acheteurs, un delta négatif des vendeurs, indépendamment de la direction finale prise par le prix.",
            },
            {
              type: "paragraph",
              text: "Une divergence entre le delta et le mouvement de prix — par exemple, le prix monte alors que le delta est négatif — peut indiquer que la hausse est portée non par des achats réels, mais par la clôture de positions courtes, et qu'un tel mouvement est moins stable.",
            },
            {
              type: "list",
              items: [
                "Un delta positif signifie une prédominance des achats agressifs sur les ventes",
                "Le delta mesure la pression des participants, et non la variation finale du prix",
                "Une divergence entre le prix et le delta peut indiquer l'instabilité d'un mouvement",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que montre un delta positif ?",
              options: [
                "Une hausse garantie du prix à l'avenir",
                "Une absence d'activité de trading",
                "Une prédominance des achats agressifs sur les ventes",
              ],
              correctAnswer: "Une prédominance des achats agressifs sur les ventes",
            },
            {
              prompt: "Que peut indiquer une hausse du prix alors que le delta est négatif ?",
              options: [
                "Que le delta est mal calculé",
                "Une erreur technique de la bourse",
                "La hausse peut être portée par la clôture de positions courtes plutôt que par de nouveaux achats",
              ],
              correctAnswer: "La hausse peut être portée par la clôture de positions courtes plutôt que par de nouveaux achats",
            },
            {
              prompt: "Que mesure exactement le delta de volume ?",
              options: [
                "Le nombre de détenteurs du token",
                "La capitalisation totale de l'actif",
                "La pression des acheteurs et des vendeurs à travers les ordres agressifs",
              ],
              correctAnswer: "La pression des acheteurs et des vendeurs à travers les ordres agressifs",
            },
          ],
        },
        {
          slug: "open-interest",
          title: "Open Interest",
          summary: "L'open interest comme indicateur du nombre de positions actives sur le marché des dérivés.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'Open Interest (intérêt ouvert, OI) est le nombre total de contrats ouverts, non encore clôturés, sur le marché des dérivés (futures, perpétuels). Contrairement au volume, qui repart à zéro à chaque période, l'OI montre le nombre cumulé de positions actives.",
            },
            {
              type: "paragraph",
              text: "Une hausse de l'OI accompagnant une hausse du prix signifie généralement un afflux de nouveau capital et un renforcement de la tendance. Une hausse du prix avec un OI en baisse indique plutôt une clôture de positions courtes plutôt qu'une nouvelle demande. Une chute brutale de l'OI est souvent liée à des liquidations massives.",
            },
            {
              type: "list",
              items: [
                "L'OI montre le nombre de contrats ouverts, non encore clôturés",
                "Une hausse du prix accompagnée d'une hausse de l'OI indique généralement un afflux de nouveau capital",
                "Une chute brutale de l'OI accompagne souvent des liquidations massives de positions",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que montre l'Open Interest ?",
              options: [
                "Le nombre total de contrats ouverts, non encore clôturés",
                "Le nombre d'utilisateurs inscrits sur la bourse",
                "Le volume cumulé de toutes les transactions depuis l'origine de la bourse",
              ],
              correctAnswer: "Le nombre total de contrats ouverts, non encore clôturés",
            },
            {
              prompt: "Que signifie généralement une hausse simultanée du prix et de l'Open Interest ?",
              options: [
                "Un afflux de nouveau capital et un renforcement de la tendance",
                "Une baisse de la volatilité jusqu'à zéro",
                "Une panne technique de la bourse",
              ],
              correctAnswer: "Un afflux de nouveau capital et un renforcement de la tendance",
            },
            {
              prompt: "À quoi une chute brutale de l'Open Interest est-elle souvent liée ?",
              options: [
                "À l'ajout d'un nouveau token au listing",
                "À des liquidations massives de positions ouvertes",
                "À une mise à jour planifiée de la bourse",
              ],
              correctAnswer: "À des liquidations massives de positions ouvertes",
            },
          ],
        },
        {
          slug: "funding-rate",
          title: "Funding Rate",
          summary: "Le taux de financement sur les futures perpétuels et ce qu'il révèle sur le sentiment du marché.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le Funding Rate est un paiement périodique entre les détenteurs de positions longues et courtes sur les futures perpétuels, un mécanisme qui maintient le prix du contrat proche du prix du marché spot. Un funding positif signifie que les longs paient les shorts, un funding négatif l'inverse.",
            },
            {
              type: "paragraph",
              text: "Un funding positif durablement élevé indique généralement un marché en surchauffe avec un excès de positions longues, ce qui augmente le risque de liquidations en cascade en cas de retournement à la baisse. Un funding fortement négatif, à l'inverse, peut signaler un pessimisme excessif et un potentiel de rebond.",
            },
            {
              type: "list",
              items: [
                "Le Funding Rate maintient le prix du future perpétuel proche du prix spot",
                "Un funding positif durablement élevé indique une surchauffe du marché par excès de positions longues",
                "Un funding fortement négatif peut indiquer un pessimisme excessif du marché",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quelle fonction remplit le Funding Rate sur les futures perpétuels ?",
              options: [
                "Il détermine la commission de la bourse pour les retraits",
                "Il fixe le levier maximal autorisé",
                "Il maintient le prix du contrat proche du prix du marché spot",
              ],
              correctAnswer: "Il maintient le prix du contrat proche du prix du marché spot",
            },
            {
              prompt: "Que signifie un funding positif durablement élevé ?",
              options: [
                "Le marché est en surchauffe par excès de positions longues",
                "Le prix de l'actif va garantir sa hausse",
                "Il n'y a plus aucun trader sur le marché",
              ],
              correctAnswer: "Le marché est en surchauffe par excès de positions longues",
            },
            {
              prompt: "Qui paie qui lorsque le Funding Rate est positif ?",
              options: [
                "La bourse paie tous les traders de la même façon",
                "Les détenteurs de positions courtes paient les détenteurs de positions longues",
                "Les détenteurs de positions longues paient les détenteurs de positions courtes",
              ],
              correctAnswer: "Les détenteurs de positions longues paient les détenteurs de positions courtes",
            },
          ],
        },
        {
          slug: "liquidations",
          title: "Liquidations",
          summary: "La clôture forcée de positions à effet de levier et pourquoi les liquidations amplifient le mouvement de prix.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Les Liquidations désignent la clôture forcée d'une position par la bourse lorsque la perte atteint un niveau tel que la marge ne suffit plus à la maintenir. Les liquidations s'effectuent au prix du marché et ne dépendent pas de la volonté du trader.",
            },
            {
              type: "paragraph",
              text: "Des liquidations massives dans une même direction (liquidations en cascade) amplifient elles-mêmes le mouvement de prix : la clôture de positions longues crée une pression de vente supplémentaire, la clôture de positions courtes une demande supplémentaire, ce qui explique les mouvements de prix brutaux et rapides en période de forte volatilité.",
            },
            {
              type: "list",
              items: [
                "Une liquidation est la clôture forcée d'une position par la bourse en cas de marge insuffisante",
                "Les liquidations en cascade amplifient et accélèrent le mouvement de prix dans une même direction",
                "Les cartes de liquidations (heatmaps) sont utilisées par les traders pour évaluer les zones de risque accru",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que se passe-t-il lors de la liquidation d'une position ?",
              options: [
                "Le trader clôture volontairement la position avec un profit",
                "La bourse clôture la position de force par manque de marge",
                "La bourse double automatiquement le volume de la position",
              ],
              correctAnswer: "La bourse clôture la position de force par manque de marge",
            },
            {
              prompt: "Pourquoi les liquidations en cascade amplifient-elles le mouvement de prix ?",
              options: [
                "Les liquidations arrêtent toujours complètement le mouvement de prix",
                "La clôture des positions crée une pression supplémentaire dans le sens du mouvement",
                "Les liquidations n'ont aucune influence sur le prix",
              ],
              correctAnswer: "La clôture des positions crée une pression supplémentaire dans le sens du mouvement",
            },
            {
              prompt: "À quoi les traders utilisent-ils les cartes (heatmaps) de liquidations ?",
              options: [
                "Pour calculer les impôts sur les profits",
                "Pour évaluer les zones de risque accru de mouvement brutal du prix",
                "Pour connaître la date exacte du prochain halving",
              ],
              correctAnswer: "Pour évaluer les zones de risque accru de mouvement brutal du prix",
            },
          ],
        },
      ],
    },
    {
      title: "Analyse on-chain",
      lessons: [
        {
          slug: "koshelki-kitov",
          title: "Les wallets de baleines",
          summary: "Comment le suivi des gros portefeuilles aide à évaluer le sentiment des grands détenteurs.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Les « baleines » sont des adresses détenant une part importante de l'offre totale d'un actif. Comme toutes les transactions sur la blockchain sont publiques, les traders suivent les mouvements de ces portefeuilles — par exemple, de gros transferts vers les bourses (préparation potentielle à une vente) ou, à l'inverse, des bourses vers un stockage à froid.",
            },
            {
              type: "paragraph",
              text: "Il est important de tenir compte du contexte : un transfert depuis une bourse ne signifie pas toujours une conservation à long terme, et un transfert vers une bourse ne signifie pas toujours une vente immédiate — il peut s'agir d'une redistribution entre portefeuilles d'un même propriétaire. Les données sur les baleines sont un signal complémentaire, et non autonome.",
            },
            {
              type: "list",
              items: [
                "Les wallets de baleines peuvent être suivis grâce à la transparence publique des transactions blockchain",
                "Un gros transfert vers une bourse est souvent interprété comme une préparation potentielle à une vente",
                "Les données sur les mouvements de baleines doivent être utilisées avec d'autres types d'analyse, pas isolément",
              ],
            },
          ],
          questions: [
            {
              prompt: "Pourquoi est-il possible de suivre les mouvements des wallets de baleines ?",
              options: [
                "Ce n'est possible que pour les régulateurs",
                "Toutes les transactions sur la blockchain sont publiquement accessibles",
                "Les bourses publient chaque jour les données personnelles de leurs clients",
              ],
              correctAnswer: "Toutes les transactions sur la blockchain sont publiquement accessibles",
            },
            {
              prompt: "Comment un gros transfert de tokens vers une bourse est-il souvent interprété ?",
              options: [
                "Comme un signal garanti de conservation à long terme",
                "Comme une erreur technique du réseau",
                "Comme une préparation potentielle à une vente",
              ],
              correctAnswer: "Comme une préparation potentielle à une vente",
            },
            {
              prompt: "Quelle est la meilleure façon d'utiliser les données sur les mouvements de baleines ?",
              options: [
                "Comme unique signal suffisant pour entrer en position",
                "Ces données sont inutiles et ne doivent pas être prises en compte",
                "Comme un signal complémentaire, en combinaison avec d'autres types d'analyse",
              ],
              correctAnswer: "Comme un signal complémentaire, en combinaison avec d'autres types d'analyse",
            },
          ],
        },
        {
          slug: "birzhevye-pritoki-i-ottoki",
          title: "Flux entrants et sortants des bourses",
          summary: "Ce que signifie le mouvement de pièces vers et depuis les bourses pour la pression potentielle sur le prix.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Les flux entrants (exchange inflow) désignent le volume de pièces transférées vers les portefeuilles des bourses, les flux sortants (exchange outflow) le volume de pièces retirées des bourses. Une hausse des flux entrants est souvent interprétée comme une hausse de la pression potentielle des vendeurs, une hausse des flux sortants comme de l'accumulation et une réduction de l'offre disponible.",
            },
            {
              type: "paragraph",
              text: "Un flux sortant net et durable des bourses sur une longue période est généralement associé à une phase d'accumulation et à une réduction de l'offre liquide disponible à la vente. Un afflux ponctuel et brutal d'une somme importante précède souvent, à l'inverse, une volatilité locale.",
            },
            {
              type: "list",
              items: [
                "Les flux entrants vers les bourses sont souvent associés à une hausse de l'offre potentielle à la vente",
                "Un flux sortant durable des bourses est généralement associé à une phase d'accumulation",
                "Un afflux ponctuel et brutal d'une somme importante précède souvent une volatilité locale",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment appelle-t-on le flux entrant d'une bourse (exchange inflow) ?",
              options: [
                "Le volume de pièces transférées vers les portefeuilles des bourses",
                "Le nombre de nouveaux utilisateurs de la bourse",
                "Le volume de pièces minées par les mineurs en une journée",
              ],
              correctAnswer: "Le volume de pièces transférées vers les portefeuilles des bourses",
            },
            {
              prompt: "À quelle phase de marché associe-t-on généralement un flux sortant durable de pièces des bourses ?",
              options: [
                "Au listing d'un nouveau token",
                "À une phase d'accumulation",
                "À une phase de vente panique",
              ],
              correctAnswer: "À une phase d'accumulation",
            },
            {
              prompt: "Qu'est-ce qui précède souvent un afflux ponctuel et brutal d'une somme importante vers une bourse ?",
              options: [
                "Un arrêt complet des échanges",
                "Une volatilité locale du prix",
                "Une baisse automatique des commissions de la bourse",
              ],
              correctAnswer: "Une volatilité locale du prix",
            },
          ],
        },
        {
          slug: "tvl",
          title: "TVL",
          summary: "La valeur totale bloquée comme indicateur de confiance dans un protocole DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le TVL (Total Value Locked) est la valeur totale des actifs bloqués dans les smart contracts d'un protocole : pools de liquidité, staking, plateformes de prêt. Le TVL est souvent utilisé comme indicateur de l'ampleur et de la confiance des utilisateurs dans un protocole ou dans l'ensemble d'un réseau blockchain.",
            },
            {
              type: "paragraph",
              text: "Il faut garder à l'esprit qu'une hausse du TVL peut être due non seulement à un afflux de nouveau capital, mais aussi à la hausse du prix des actifs déjà bloqués. Une chute brutale du TVL peut, à l'inverse, signaler aussi bien une sortie de capital qu'une baisse du prix des tokens bloqués.",
            },
            {
              type: "list",
              items: [
                "Le TVL mesure la valeur des actifs bloqués dans les smart contracts d'un protocole",
                "Une hausse du TVL peut refléter aussi bien un afflux de nouveau capital qu'une hausse du prix des actifs",
                "Une chute brutale du TVL est souvent considérée comme un signal d'alerte pour le protocole",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que mesure l'indicateur TVL ?",
              options: [
                "Le nombre de développeurs travaillant sur le projet",
                "Le nombre total de transactions du réseau depuis son origine",
                "La valeur totale des actifs bloqués dans les smart contracts d'un protocole",
              ],
              correctAnswer: "La valeur totale des actifs bloqués dans les smart contracts d'un protocole",
            },
            {
              prompt: "Pourquoi le TVL peut-il augmenter même sans afflux de nouveau capital ?",
              options: [
                "Le TVL ne peut pas augmenter sans afflux de nouveau capital",
                "En raison de la hausse du prix des actifs déjà bloqués",
                "En raison de la baisse de la capitalisation totale du marché",
              ],
              correctAnswer: "En raison de la hausse du prix des actifs déjà bloqués",
            },
            {
              prompt: "Comment les traders interprètent-ils généralement une chute brutale du TVL d'un protocole ?",
              options: [
                "Le TVL n'a aucun lien avec l'état du protocole",
                "Comme un signal potentiellement inquiétant (sortie de capital ou baisse du prix des actifs)",
                "Comme un signal clairement positif pour acheter",
              ],
              correctAnswer: "Comme un signal potentiellement inquiétant (sortie de capital ou baisse du prix des actifs)",
            },
          ],
        },
        {
          slug: "stablecoins",
          title: "Les stablecoins",
          summary: "Le rôle des stablecoins sur le marché crypto et leurs réserves sur les bourses comme indicateur de demande potentielle.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Les stablecoins sont des cryptomonnaies dont le cours est indexé sur un actif stable, le plus souvent le dollar américain (USDT, USDC). Ils servent d'« unité de compte » principale du marché crypto, permettant de passer d'un actif à l'autre et de fixer une valeur sans sortir vers le système bancaire traditionnel.",
            },
            {
              type: "paragraph",
              text: "Le volume total de stablecoins détenus sur les portefeuilles des bourses est souvent considéré comme un indicateur de « poudre sèche » — le pouvoir d'achat potentiel du marché. Une hausse des réserves de stablecoins sur les bourses peut précéder un afflux de demande sur les actifs risqués.",
            },
            {
              type: "list",
              items: [
                "Les stablecoins sont indexés sur un actif stable, généralement le dollar américain",
                "Ils remplissent une fonction d'unité de compte et de réserve de valeur au sein du marché crypto",
                "Une hausse des réserves de stablecoins sur les bourses est souvent associée à une hausse potentielle du pouvoir d'achat",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce qui distingue les stablecoins de la plupart des autres cryptomonnaies ?",
              options: [
                "Ils ne peuvent pas être transférés entre portefeuilles",
                "Ils n'existent qu'en dehors de la blockchain",
                "Leur cours est indexé sur un actif stable, généralement le dollar américain",
              ],
              correctAnswer: "Leur cours est indexé sur un actif stable, généralement le dollar américain",
            },
            {
              prompt: "Quelle fonction les stablecoins remplissent-ils sur le marché crypto ?",
              options: [
                "Unité de compte et réserve de valeur au sein du marché",
                "Remplacement du mécanisme de consensus de la blockchain",
                "Unique moyen de minage",
              ],
              correctAnswer: "Unité de compte et réserve de valeur au sein du marché",
            },
            {
              prompt: "Que peut indiquer une hausse des réserves de stablecoins sur les bourses ?",
              options: [
                "Une hausse potentielle du pouvoir d'achat du marché",
                "Un arrêt complet des échanges sur la bourse",
                "Une panne technique du stablecoin",
              ],
              correctAnswer: "Une hausse potentielle du pouvoir d'achat du marché",
            },
          ],
        },
        {
          slug: "onchain-metriki",
          title: "Métriques on-chain",
          summary: "Vue d'ensemble des métriques réseau clés : adresses actives, frais de réseau et leur usage en analyse.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Les métriques on-chain sont des données que l'on peut obtenir directement depuis la blockchain : nombre d'adresses actives, volume de transferts, frais de réseau, nombre de nouveaux portefeuilles. Contrairement aux données de marché (prix, volume de la bourse), elles reflètent l'activité réelle du réseau.",
            },
            {
              type: "paragraph",
              text: "Une hausse du nombre d'adresses actives et du volume de transferts alors que le prix est relativement calme peut indiquer une utilisation fondamentale croissante du réseau. Ces métriques sont particulièrement utiles pour une analyse à moyen et long terme, plutôt que pour un timing précis d'entrée.",
            },
            {
              type: "list",
              items: [
                "Les métriques on-chain reflètent l'activité réelle du réseau, pas seulement le prix sur la bourse",
                "Une hausse des adresses actives alors que le prix est calme peut indiquer une utilisation fondamentale croissante",
                "L'analyse on-chain convient mieux aux conclusions à moyen et long terme qu'au timing précis",
              ],
            },
          ],
          questions: [
            {
              prompt: "En quoi les métriques on-chain diffèrent-elles des données purement de marché comme le prix et le volume de la bourse ?",
              options: [
                "Elles sont obtenues directement depuis la blockchain et reflètent l'activité réelle du réseau",
                "Elles ne sont accessibles qu'aux propriétaires de la bourse",
                "Elles coïncident totalement avec les données de marché",
              ],
              correctAnswer: "Elles sont obtenues directement depuis la blockchain et reflètent l'activité réelle du réseau",
            },
            {
              prompt: "Que peut indiquer une hausse des adresses actives du réseau alors que le prix est relativement calme ?",
              options: [
                "Une panne technique de la blockchain",
                "Un arrêt complet des transactions",
                "Une utilisation fondamentale croissante du réseau",
              ],
              correctAnswer: "Une utilisation fondamentale croissante du réseau",
            },
            {
              prompt: "Pour quel horizon d'analyse les métriques on-chain conviennent-elles généralement le mieux ?",
              options: [
                "Pour l'analyse à moyen et long terme",
                "Les métriques on-chain ne s'appliquent nulle part en pratique",
                "Exclusivement pour un timing d'entrée à la minute près",
              ],
              correctAnswer: "Pour l'analyse à moyen et long terme",
            },
          ],
        },
      ],
    },
    {
      title: "Trading professionnel",
      lessons: [
        {
          slug: "torgovy-zhurnal",
          title: "Le journal de trading",
          summary: "Pourquoi consigner chaque transaction et ce que doit contenir une entrée du journal.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le journal de trading est un enregistrement systématique de chaque transaction : raison de l'entrée, taille de position, stop-loss et take-profit, résultat final et état émotionnel du trader. Sans journal, le trader s'en remet à sa mémoire, qui retient sélectivement les trades gagnants et efface les échecs.",
            },
            {
              type: "paragraph",
              text: "Une analyse régulière du journal permet de repérer des régularités : par exemple, que la majorité des pertes proviennent de transactions ouvertes sans signal clair, ou qu'une certaine tranche horaire est systématiquement moins rentable. Cela transforme des impressions intuitives en données concrètes et vérifiables.",
            },
            {
              type: "list",
              items: [
                "Le journal doit consigner la raison de l'entrée, et pas seulement le résultat de la transaction",
                "Une analyse régulière du journal aide à repérer les erreurs récurrentes",
                "Les données du journal sont plus objectives que la mémoire subjective du trader",
              ],
            },
          ],
          questions: [
            {
              prompt: "Pourquoi un trader doit-il tenir un journal de trading ?",
              options: [
                "Le journal ne sert qu'à la déclaration fiscale",
                "C'est une exigence de la bourse pour ouvrir des positions",
                "Pour consigner objectivement les transactions au lieu de s'en remettre à une mémoire sélective",
              ],
              correctAnswer: "Pour consigner objectivement les transactions au lieu de s'en remettre à une mémoire sélective",
            },
            {
              prompt: "Qu'est-ce qui doit obligatoirement être consigné dans une entrée du journal, au-delà du résultat de la transaction ?",
              options: [
                "Le nom de l'appareil utilisé",
                "La raison de l'entrée en position",
                "Uniquement le profit final en dollars",
              ],
              correctAnswer: "La raison de l'entrée en position",
            },
            {
              prompt: "Qu'apporte l'analyse régulière du journal de trading ?",
              options: [
                "Elle augmente automatiquement le volume du dépôt",
                "Elle garantit l'absence de trades perdants à l'avenir",
                "Elle permet de repérer des régularités et des erreurs récurrentes",
              ],
              correctAnswer: "Elle permet de repérer des régularités et des erreurs récurrentes",
            },
          ],
        },
        {
          slug: "sozdanie-strategii",
          title: "Créer une stratégie",
          summary: "Les éléments obligatoires qui composent une stratégie de trading complète.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Une stratégie de trading est un ensemble de règles clairement décrites : sur quel marché trader, dans quelles conditions entrer en position, où placer le stop-loss et le take-profit, quel pourcentage du dépôt risquer. Sans ces règles fixées à l'avance, le trading se transforme en une suite de décisions aléatoires.",
            },
            {
              type: "paragraph",
              text: "Une bonne stratégie doit être suffisamment précise pour pouvoir être expliquée à quelqu'un d'autre et testée sur des données historiques. Elle n'a pas besoin de fonctionner dans 100 % des cas — l'important est que les règles soient reproductibles et que l'espérance mathématique soit positive.",
            },
            {
              type: "list",
              items: [
                "Une stratégie inclut obligatoirement des conditions d'entrée, de sortie et des règles de gestion du risque",
                "Les règles doivent être suffisamment précises pour être vérifiées sur l'historique",
                "L'objectif d'une stratégie est une espérance mathématique positive, pas une précision de 100 %",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce qui doit obligatoirement figurer dans la description d'une stratégie de trading ?",
              options: [
                "La liste des cryptomonnaies préférées du trader",
                "Les conditions d'entrée, de sortie et les règles de gestion du risque",
                "Uniquement le montant de profit désiré par mois",
              ],
              correctAnswer: "Les conditions d'entrée, de sortie et les règles de gestion du risque",
            },
            {
              prompt: "Pourquoi une stratégie doit-elle être précise plutôt que floue ?",
              options: [
                "Pour la dissimuler aux autres traders",
                "Pour pouvoir être expliquée et vérifiée sur des données historiques",
                "Le flou des règles n'a aucune importance",
              ],
              correctAnswer: "Pour pouvoir être expliquée et vérifiée sur des données historiques",
            },
            {
              prompt: "Une bonne stratégie doit-elle être rentable sur 100 % des transactions ?",
              options: [
                "Oui, mais uniquement sur le timeframe journalier",
                "Oui, sinon la stratégie est considérée comme inefficace",
                "Non, l'important est une espérance mathématique positive dans l'ensemble",
              ],
              correctAnswer: "Non, l'important est une espérance mathématique positive dans l'ensemble",
            },
          ],
        },
        {
          slug: "backtest",
          title: "Le backtest",
          summary: "Vérifier une stratégie de trading sur des données historiques avant de l'appliquer en réel.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le backtest consiste à vérifier une stratégie de trading sur des données historiques : les règles sont appliquées à des données de prix passées afin d'évaluer si la stratégie aurait été rentable. C'est un moyen d'obtenir des statistiques sur une stratégie sans risquer de capital réel.",
            },
            {
              type: "paragraph",
              text: "Le backtest a ses limites : les résultats passés ne garantissent pas les résultats futurs, et un test mené sans rigueur peut conduire à un surajustement des règles à une période historique précise. Néanmoins, le backtest est une première étape indispensable avant de confier de l'argent réel à une stratégie.",
            },
            {
              type: "list",
              items: [
                "Le backtest permet d'évaluer une stratégie sur des données historiques sans risque réel",
                "Les résultats passés d'un backtest ne garantissent pas un résultat similaire à l'avenir",
                "Le surajustement des règles à une période historique précise est une erreur courante du backtesting",
              ],
            },
          ],
          questions: [
            {
              prompt: "En quoi consiste le backtest d'une stratégie de trading ?",
              options: [
                "Sonder d'autres traders sur la stratégie",
                "Trader en réel avec un dépôt minimal",
                "Vérifier les règles de la stratégie sur des données de prix historiques",
              ],
              correctAnswer: "Vérifier les règles de la stratégie sur des données de prix historiques",
            },
            {
              prompt: "Un backtest réussi garantit-il le même résultat à l'avenir ?",
              options: [
                "Non, les résultats passés ne garantissent pas les résultats futurs",
                "Oui, mais uniquement pour les actions",
                "Oui, le résultat du backtest se répète toujours en trading réel",
              ],
              correctAnswer: "Non, les résultats passés ne garantissent pas les résultats futurs",
            },
            {
              prompt: "Qu'est-ce que le surajustement (overfitting) dans le contexte du backtesting ?",
              options: [
                "Trader sans stop-loss",
                "Un ajustement excessif des règles à une période historique précise",
                "L'utilisation d'un nombre trop faible d'indicateurs",
              ],
              correctAnswer: "Un ajustement excessif des règles à une période historique précise",
            },
          ],
        },
        {
          slug: "forward-test",
          title: "Le forward test",
          summary: "Vérifier une stratégie sur des données nouvelles, non encore utilisées, après le backtest.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le forward test consiste à vérifier une stratégie sur un compte réel ou de démonstration, en avançant dans le temps, sur des données qui n'ont pas été utilisées lors de l'élaboration et du backtest des règles. C'est une étape clé qui montre si la stratégie fonctionne sur des données véritablement nouvelles.",
            },
            {
              type: "paragraph",
              text: "Le forward test aide à révéler un surajustement qui aurait pu passer inaperçu lors du backtest : si les résultats du forward test s'écartent fortement de ceux du backtest, la stratégie a probablement été trop précisément ajustée aux données passées.",
            },
            {
              type: "list",
              items: [
                "Le forward test se déroule sur des données non utilisées lors de l'élaboration de la stratégie",
                "Il permet de révéler un surajustement invisible lors d'un simple backtest",
                "Un écart important entre les résultats du backtest et du forward test est un signal d'alerte",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quelle est la différence clé entre le forward test et le backtest ?",
              options: [
                "Il n'y a aucune différence entre les deux",
                "Le forward test se déroule sur des données nouvelles, non utilisées lors de l'élaboration de la stratégie",
                "Le forward test se déroule toujours uniquement sur un gros dépôt réel",
              ],
              correctAnswer: "Le forward test se déroule sur des données nouvelles, non utilisées lors de l'élaboration de la stratégie",
            },
            {
              prompt: "Qu'est-ce que le forward test permet de révéler, contrairement au backtest ?",
              options: [
                "La commission de la bourse pour les retraits",
                "Le surajustement de la stratégie aux données passées",
                "La date exacte du prochain halving",
              ],
              correctAnswer: "Le surajustement de la stratégie aux données passées",
            },
            {
              prompt: "Que signifie un écart important entre les résultats du backtest et du forward test ?",
              options: [
                "Que la stratégie est absolument fiable",
                "La stratégie a probablement été trop précisément ajustée aux données passées",
                "Cela n'a aucune importance pour évaluer la stratégie",
              ],
              correctAnswer: "La stratégie a probablement été trop précisément ajustée aux données passées",
            },
          ],
        },
        {
          slug: "statistika-sdelok",
          title: "Les statistiques de trading",
          summary: "Les métriques clés à suivre pour évaluer objectivement son trading.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Les statistiques de trading forment un ensemble de métriques objectives calculées à partir du journal : le winrate (part de transactions gagnantes), le R/R moyen, l'espérance mathématique par transaction, le drawdown maximal et d'autres. Ces chiffres montrent la réalité du trading, et non une impression subjective.",
            },
            {
              type: "paragraph",
              text: "Aucune métrique ne doit être évaluée isolément des autres : un winrate élevé avec un R/R moyen faible peut donner le même résultat qu'un winrate faible avec un R/R élevé. C'est précisément l'espérance mathématique — ce qu'apporte en moyenne une transaction — qui constitue le repère final de la qualité d'une stratégie.",
            },
            {
              type: "list",
              items: [
                "Le winrate et le R/R moyen doivent être analysés ensemble, pas séparément",
                "L'espérance mathématique par transaction est la métrique finale clé de la qualité d'une stratégie",
                "Le drawdown maximal montre à quel point le dépôt a chuté durant la pire période",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que montre le winrate d'une stratégie de trading ?",
              options: [
                "Le nombre de transactions ouvertes à un instant donné",
                "Le profit total cumulé en dollars",
                "La part des transactions gagnantes sur leur nombre total",
              ],
              correctAnswer: "La part des transactions gagnantes sur leur nombre total",
            },
            {
              prompt: "Pourquoi le winrate ne peut-il pas être évalué indépendamment du R/R moyen ?",
              options: [
                "Un winrate élevé avec un R/R faible peut donner le même résultat qu'un winrate faible avec un R/R élevé",
                "Le R/R n'influence pas du tout le résultat final",
                "Le winrate et le R/R sont toujours strictement identiques",
              ],
              correctAnswer: "Un winrate élevé avec un R/R faible peut donner le même résultat qu'un winrate faible avec un R/R élevé",
            },
            {
              prompt: "Que montre la métrique du drawdown maximal ?",
              options: [
                "Le nombre d'actifs en portefeuille",
                "Le rendement annuel final de la stratégie",
                "À quel point le dépôt a chuté durant la pire période de trading",
              ],
              correctAnswer: "À quel point le dépôt a chuté durant la pire période de trading",
            },
          ],
        },
      ],
    },
    {
      title: "Altcoins et tokenomics",
      lessons: [
        {
          slug: "tokenomics",
          title: "Tokenomics",
          summary: "Le modèle économique d'un token : offre, distribution et incitations des détenteurs.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "La tokenomics décrit le modèle économique d'un token : offre totale et maximale, répartition entre l'équipe, les investisseurs et la communauté, mécanismes d'émission et de burn, ainsi que les incitations qui poussent les détenteurs à utiliser ou conserver le token.",
            },
            {
              type: "paragraph",
              text: "Une tokenomics faible — par exemple, une part importante de tokens détenue par l'équipe avec une courte période de blocage — crée une pression de vente constante sur le marché, indépendamment de la qualité du produit lui-même. L'analyse de la tokenomics est tout aussi importante pour évaluer un projet que l'analyse de sa technologie.",
            },
            {
              type: "list",
              items: [
                "La tokenomics décrit l'offre, la répartition et les incitations des détenteurs du token",
                "Une part importante de tokens détenue par l'équipe avec un vesting court crée un risque de pression vendeuse",
                "L'analyse de la tokenomics n'est pas moins importante que l'analyse de la technologie du projet",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que décrit la tokenomics d'un projet ?",
              options: [
                "La liste des bourses sur lesquelles le token est coté",
                "Le modèle économique du token : offre, répartition et incitations des détenteurs",
                "Uniquement la pile technologique de la blockchain",
              ],
              correctAnswer: "Le modèle économique du token : offre, répartition et incitations des détenteurs",
            },
            {
              prompt: "Quel facteur de tokenomics crée un risque de pression vendeuse constante ?",
              options: [
                "L'absence totale de tokens détenus par l'équipe",
                "Une part importante de tokens détenue par l'équipe avec une courte période de blocage",
                "Une offre maximale de token égale à zéro",
              ],
              correctAnswer: "Une part importante de tokens détenue par l'équipe avec une courte période de blocage",
            },
            {
              prompt: "L'analyse de la tokenomics est-elle aussi importante que l'analyse de la technologie du projet ?",
              options: [
                "La tokenomics n'a aucune importance pour évaluer un projet",
                "Elle n'est importante que pour les projets sans blockchain",
                "Oui, elle est tout aussi importante et doit être prise en compte au même titre que la technologie",
              ],
              correctAnswer: "Oui, elle est tout aussi importante et doit être prise en compte au même titre que la technologie",
            },
          ],
        },
        {
          slug: "fdv",
          title: "FDV",
          summary: "La valorisation totalement diluée et pourquoi elle importe plus que la capitalisation boursière pour les nouveaux tokens.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le FDV (Fully Diluted Valuation) est une évaluation d'un projet calculée comme si l'offre maximale totale de tokens était déjà en circulation, au prix actuel. Contrairement à la capitalisation boursière, qui ne prend en compte que les tokens actuellement en circulation, le FDV montre la valorisation potentielle future.",
            },
            {
              type: "paragraph",
              text: "Un écart important entre la capitalisation actuelle et le FDV signifie qu'une part importante de l'offre n'a pas encore été émise et arrivera sur le marché avec le temps, créant une pression vendeuse potentielle lors des déblocages — un point particulièrement important à surveiller pour les nouveaux tokens ayant un faible pourcentage en circulation.",
            },
            {
              type: "list",
              items: [
                "Le FDV se calcule à partir de l'offre maximale, et non de l'offre actuelle des tokens",
                "Un écart important entre la capitalisation et le FDV indique une émission future importante",
                "Les tokens avec un faible pourcentage en circulation et un FDV élevé nécessitent une attention accrue au calendrier des déblocages",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment le FDV est-il calculé ?",
              options: [
                "À partir des seuls tokens échangés sur une bourse précise",
                "À partir du volume d'échanges des dernières 24 heures",
                "À partir de l'offre maximale de tokens au prix actuel",
              ],
              correctAnswer: "À partir de l'offre maximale de tokens au prix actuel",
            },
            {
              prompt: "Que révèle un écart important entre la capitalisation boursière et le FDV ?",
              options: [
                "Une part importante de l'offre n'a pas encore été mise en circulation",
                "Une erreur technique dans le calcul du prix",
                "Le token est déjà entièrement débloqué",
              ],
              correctAnswer: "Une part importante de l'offre n'a pas encore été mise en circulation",
            },
            {
              prompt: "Pour quels tokens est-il particulièrement important de surveiller le rapport entre capitalisation et FDV ?",
              options: [
                "Pour les nouveaux tokens ayant un faible pourcentage de l'offre en circulation",
                "Le rapport entre capitalisation et FDV n'a aucune utilité pratique",
                "Uniquement pour les stablecoins",
              ],
              correctAnswer: "Pour les nouveaux tokens ayant un faible pourcentage de l'offre en circulation",
            },
          ],
        },
        {
          slug: "vesting",
          title: "Vesting",
          summary: "Le déblocage progressif des tokens de l'équipe et des investisseurs selon un calendrier défini.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le vesting est un mécanisme de déblocage progressif des tokens attribués à l'équipe, aux investisseurs ou aux conseillers d'un projet, selon un calendrier défini à l'avance, plutôt qu'une remise en une seule fois. Cela vise à réduire l'incitation des participants précoces à vendre immédiatement leurs tokens après le listing.",
            },
            {
              type: "paragraph",
              text: "La structure standard du vesting comprend un « cliff » — une période durant laquelle les tokens sont totalement bloqués — suivie d'un déblocage linéaire ou par paliers. Un cliff court et un calendrier de vesting agressif augmentent le risque de pression vendeuse dans les premières étapes.",
            },
            {
              type: "list",
              items: [
                "Le vesting débloque les tokens de l'équipe et des investisseurs progressivement, et non d'un coup",
                "Le cliff est la période de blocage total des tokens au début du calendrier de vesting",
                "Un cliff court et un calendrier de déblocage agressif augmentent le risque de pression vendeuse",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que le vesting des tokens ?",
              options: [
                "Une méthode de minage de nouveaux tokens",
                "Un mécanisme de déblocage progressif des tokens selon un calendrier défini",
                "La vente en une seule fois de tous les tokens d'un projet",
              ],
              correctAnswer: "Un mécanisme de déblocage progressif des tokens selon un calendrier défini",
            },
            {
              prompt: "Qu'est-ce que le cliff dans un calendrier de vesting ?",
              options: [
                "La période de blocage total des tokens au début du calendrier",
                "Une commission pour le retrait anticipé des tokens",
                "Le déblocage final de tous les tokens restants",
              ],
              correctAnswer: "La période de blocage total des tokens au début du calendrier",
            },
            {
              prompt: "Pourquoi les projets utilisent-ils le vesting pour l'équipe et les investisseurs ?",
              options: [
                "C'est une exigence technique de toute blockchain",
                "Pour réduire l'incitation à vendre immédiatement les tokens après le listing",
                "Pour exclure totalement l'équipe de la participation au projet",
              ],
              correctAnswer: "Pour réduire l'incitation à vendre immédiatement les tokens après le listing",
            },
          ],
        },
        {
          slug: "unlocks",
          title: "Unlocks",
          summary: "Les déblocages de tokens selon un calendrier et leur influence sur le prix de l'actif.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Les Unlocks (déblocages) sont les moments où une nouvelle portion de tokens jusque-là bloqués (équipe, investisseurs, fonds de l'écosystème) devient disponible pour le transfert et une vente potentielle. Les dates et volumes des déblocages sont généralement connus à l'avance et publiés par le projet.",
            },
            {
              type: "paragraph",
              text: "Un déblocage important par rapport au volume d'échanges actuel peut créer une pression vendeuse notable sur le prix, surtout si les bénéficiaires des tokens n'ont pas de motivation à long terme pour les conserver. Les traders surveillent souvent à l'avance le calendrier des déblocages comme élément de gestion du risque.",
            },
            {
              type: "list",
              items: [
                "Un déblocage rend disponible pour le transfert et la vente une nouvelle portion de tokens",
                "Un déblocage important par rapport au volume d'échanges peut créer une pression sur le prix",
                "Le calendrier des déblocages à venir est un élément important de gestion du risque pour les positions sur altcoins",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que se passe-t-il au moment d'un déblocage (unlock) de tokens ?",
              options: [
                "La bourse suspend temporairement les échanges sur l'actif",
                "Une nouvelle portion de tokens jusque-là bloqués devient disponible pour le transfert",
                "Tous les tokens du projet sont détruits",
              ],
              correctAnswer: "Une nouvelle portion de tokens jusque-là bloqués devient disponible pour le transfert",
            },
            {
              prompt: "Quand un déblocage de tokens peut-il créer une pression notable sur le prix ?",
              options: [
                "Quand son volume est important par rapport au volume d'échanges actuel",
                "Uniquement si le déblocage a lieu la nuit",
                "Les déblocages n'influencent jamais le prix",
              ],
              correctAnswer: "Quand son volume est important par rapport au volume d'échanges actuel",
            },
            {
              prompt: "Pourquoi les traders surveillent-ils le calendrier des déblocages d'un token ?",
              options: [
                "Le calendrier des déblocages n'a aucune application pratique",
                "C'est un élément de gestion du risque lors de la détention d'une position sur un altcoin",
                "Pour calculer précisément les impôts sur les profits",
              ],
              correctAnswer: "C'est un élément de gestion du risque lors de la détention d'une position sur un altcoin",
            },
          ],
        },
        {
          slug: "emissiya",
          title: "L'émission",
          summary: "La vitesse d'émission de nouveaux tokens et son influence sur la pression à long terme sur le prix.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'émission est le processus de mise en circulation de nouveaux tokens, par exemple via des récompenses de minage, de staking ou des subventions à l'écosystème. La vitesse d'émission détermine la rapidité de croissance de l'offre du token dans le temps, indépendamment de la demande.",
            },
            {
              type: "paragraph",
              text: "Une émission constante et élevée, sans hausse correspondante de la demande, crée une pression durable sur le prix à long terme — c'est l'une des raisons pour lesquelles certains projets mettent en place des mécanismes de burn de tokens, afin de compenser partiellement l'émission.",
            },
            {
              type: "list",
              items: [
                "L'émission augmente l'offre du token indépendamment de la demande actuelle",
                "Une émission élevée sans hausse de la demande crée une pression durable sur le prix",
                "Les mécanismes de burn de tokens sont mis en place pour compenser partiellement l'émission",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que l'émission d'un token ?",
              options: [
                "Le processus de vérification de l'authenticité d'un portefeuille",
                "Le processus de mise en circulation de nouveaux tokens",
                "Le processus de retrait complet du token d'une bourse",
              ],
              correctAnswer: "Le processus de mise en circulation de nouveaux tokens",
            },
            {
              prompt: "Que se passe-t-il en cas d'émission élevée sans hausse correspondante de la demande ?",
              options: [
                "L'offre totale du token diminue",
                "Une pression durable et persistante s'exerce sur le prix",
                "Le prix du token augmente forcément",
              ],
              correctAnswer: "Une pression durable et persistante s'exerce sur le prix",
            },
            {
              prompt: "Pourquoi certains projets mettent-ils en place un mécanisme de burn de tokens ?",
              options: [
                "Pour arrêter complètement le fonctionnement du réseau",
                "Pour compenser partiellement l'effet de l'émission sur l'offre",
                "C'est une exigence des bourses pour lister le token",
              ],
              correctAnswer: "Pour compenser partiellement l'effet de l'émission sur l'offre",
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
          summary: "Les bourses décentralisées et leur différence fondamentale avec les bourses centralisées.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Une DEX (Decentralized Exchange) est une bourse fonctionnant via des smart contracts, sans opérateur central détenant les fonds des utilisateurs. Les transactions s'exécutent directement entre les portefeuilles des participants, et non via une base de données interne à la bourse, comme sur les plateformes centralisées.",
            },
            {
              type: "paragraph",
              text: "Le principal avantage d'une DEX est que l'utilisateur garde le contrôle de ses fonds jusqu'au moment de la transaction (principe « not your keys, not your coins »). En contrepartie, toute la responsabilité de la sécurité du portefeuille et de la bonne interaction avec le smart contract repose sur l'utilisateur lui-même.",
            },
            {
              type: "list",
              items: [
                "Une DEX fonctionne via des smart contracts sans dépositaire central des fonds",
                "L'utilisateur garde le contrôle de ses actifs jusqu'au moment de la transaction",
                "La responsabilité de la sécurité du portefeuille sur une DEX repose entièrement sur l'utilisateur",
              ],
            },
          ],
          questions: [
            {
              prompt: "En quoi une DEX diffère-t-elle fondamentalement d'une bourse centralisée ?",
              options: [
                "Une DEX fonctionne via des smart contracts sans dépositaire central des fonds des utilisateurs",
                "Les DEX ne sont accessibles qu'aux investisseurs institutionnels",
                "Il est impossible d'effectuer des transactions sur une DEX",
              ],
              correctAnswer: "Une DEX fonctionne via des smart contracts sans dépositaire central des fonds des utilisateurs",
            },
            {
              prompt: "Quel est le principal avantage du trading via une DEX en matière de contrôle des actifs ?",
              options: [
                "L'utilisateur garde le contrôle de ses fonds jusqu'au moment de la transaction",
                "Une DEX protège automatiquement contre tous les types de fraude",
                "Une DEX ne prélève garantiment aucune commission",
              ],
              correctAnswer: "L'utilisateur garde le contrôle de ses fonds jusqu'au moment de la transaction",
            },
            {
              prompt: "Sur qui repose la responsabilité de la sécurité du portefeuille lors de l'utilisation d'une DEX ?",
              options: [
                "Entièrement sur les développeurs du protocole",
                "La responsabilité est automatiquement assurée par la bourse",
                "Entièrement sur l'utilisateur lui-même",
              ],
              correctAnswer: "Entièrement sur l'utilisateur lui-même",
            },
          ],
        },
        {
          slug: "amm",
          title: "AMM",
          summary: "Les market makers automatisés et le principe de fonctionnement des pools de liquidité.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Un AMM (Automated Market Maker) est le mécanisme qui sous-tend la plupart des DEX, où le prix d'un actif est déterminé par une formule mathématique basée sur le ratio des tokens dans un pool de liquidité, plutôt que par un carnet d'ordres comme sur les bourses traditionnelles.",
            },
            {
              type: "paragraph",
              text: "Le pool de liquidité est alimenté par des utilisateurs (fournisseurs de liquidité) qui déposent une paire de tokens de valeur égale et perçoivent en retour une part des frais de trading. Une transaction importante par rapport à la taille du pool provoque du slippage — un écart notable entre le prix d'exécution et le prix du marché.",
            },
            {
              type: "list",
              items: [
                "Un AMM détermine le prix via une formule basée sur le ratio des tokens dans le pool, et non un carnet d'ordres",
                "Les fournisseurs de liquidité gagnent une part des frais de trading du pool",
                "Une transaction importante par rapport à la taille du pool provoque un slippage notable",
              ],
            },
          ],
          questions: [
            {
              prompt: "Comment un AMM détermine-t-il le prix d'un actif ?",
              options: [
                "Via un carnet d'ordres, comme sur une bourse centralisée",
                "Par vote des détenteurs du token",
                "Via une formule mathématique basée sur le ratio des tokens dans le pool",
              ],
              correctAnswer: "Via une formule mathématique basée sur le ratio des tokens dans le pool",
            },
            {
              prompt: "Que reçoivent les fournisseurs de liquidité d'un pool AMM ?",
              options: [
                "Un pourcentage annuel fixe garanti sans risque",
                "Le droit de gérer seul le protocole",
                "Une part des frais de trading du pool",
              ],
              correctAnswer: "Une part des frais de trading du pool",
            },
            {
              prompt: "Qu'est-ce que le slippage dans le contexte d'un AMM ?",
              options: [
                "Le délai de traitement d'une transaction par un nœud du réseau",
                "La commission du réseau pour la confirmation d'une transaction",
                "L'écart entre le prix d'exécution et le prix du marché lors d'une transaction importante par rapport à la taille du pool",
              ],
              correctAnswer: "L'écart entre le prix d'exécution et le prix du marché lors d'une transaction importante par rapport à la taille du pool",
            },
          ],
        },
        {
          slug: "staking",
          title: "Staking",
          summary: "Le blocage de tokens pour participer au consensus ou percevoir une récompense.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le Staking consiste à bloquer des tokens pour soutenir le fonctionnement du réseau (dans les blockchains à mécanisme Proof-of-Stake) ou pour participer à un protocole en échange d'une récompense. Sur les réseaux en PoS, les stakers aident à valider les transactions et à assurer la sécurité du réseau.",
            },
            {
              type: "paragraph",
              text: "Le rendement du staking s'exprime généralement en pourcentage annuel (APR/APY), mais il est important de garder à l'esprit qu'il provient en partie ou en totalité de l'émission de nouveaux tokens, ce qui peut annuler le rendement nominal par une dilution réelle de l'offre.",
            },
            {
              type: "list",
              items: [
                "Sur les réseaux Proof-of-Stake, le staking aide à valider les transactions et à protéger le réseau",
                "Le rendement du staking s'exprime généralement en pourcentage annuel (APR/APY)",
                "Le rendement du staking provient souvent en partie de l'émission, et non uniquement de la demande réelle",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quel rôle le staking joue-t-il sur les réseaux Proof-of-Stake ?",
              options: [
                "Il sert exclusivement au marketing du projet",
                "Il aide à valider les transactions et à assurer la sécurité du réseau",
                "Il remplace entièrement le besoin de blockchain",
              ],
              correctAnswer: "Il aide à valider les transactions et à assurer la sécurité du réseau",
            },
            {
              prompt: "Comment le rendement du staking s'exprime-t-il généralement ?",
              options: [
                "En pourcentage annuel (APR/APY)",
                "Le rendement du staking ne s'exprime jamais numériquement",
                "Uniquement en une somme fixe en dollars par an",
              ],
              correctAnswer: "En pourcentage annuel (APR/APY)",
            },
            {
              prompt: "Par quoi le rendement du staking est-il souvent partiellement généré ?",
              options: [
                "Par l'émission de nouveaux tokens",
                "Par des avantages fiscaux de l'État",
                "Exclusivement par les commissions des bourses centralisées",
              ],
              correctAnswer: "Par l'émission de nouveaux tokens",
            },
          ],
        },
        {
          slug: "lending",
          title: "Lending",
          summary: "Le prêt décentralisé garanti par des cryptoactifs.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le Lending (prêt) en DeFi permet à certains utilisateurs de prêter des actifs via un smart contract et de percevoir un intérêt, tandis que d'autres empruntent en apportant leurs propres cryptoactifs en garantie, généralement avec une sur-garantie (la garantie vaut plus que le montant emprunté).",
            },
            {
              type: "paragraph",
              text: "Si la valeur de la garantie tombe sous un certain seuil par rapport au montant emprunté, le protocole liquide automatiquement la garantie pour couvrir la dette. Cela protège les prêteurs, mais implique que les emprunteurs doivent surveiller attentivement le ratio de garantie de leur position.",
            },
            {
              type: "list",
              items: [
                "Le prêt DeFi exige généralement une sur-garantie de la part de l'emprunteur",
                "Le taux d'intérêt sur les emprunts et dépôts est déterminé algorithmiquement par l'offre et la demande dans le protocole",
                "Si la valeur de la garantie tombe sous un seuil, le protocole liquide automatiquement la position",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'exige-t-on généralement de l'emprunteur dans le prêt DeFi ?",
              options: [
                "Une garantie excédentaire, supérieure au montant emprunté",
                "Une garantie fournie par une bourse centralisée",
                "Une vérification d'identité via une banque",
              ],
              correctAnswer: "Une garantie excédentaire, supérieure au montant emprunté",
            },
            {
              prompt: "Que se passe-t-il si la valeur de la garantie tombe sous un certain seuil ?",
              options: [
                "Le prêt est automatiquement annulé sans conséquence",
                "Le protocole augmente automatiquement le montant du prêt",
                "Le protocole liquide automatiquement la garantie pour couvrir la dette",
              ],
              correctAnswer: "Le protocole liquide automatiquement la garantie pour couvrir la dette",
            },
            {
              prompt: "Qui perçoit l'intérêt dans un système de prêt DeFi ?",
              options: [
                "Aucun intérêt n'est jamais versé dans le prêt DeFi",
                "Les utilisateurs qui ont prêté leurs actifs via le protocole",
                "Uniquement les développeurs du protocole",
              ],
              correctAnswer: "Les utilisateurs qui ont prêté leurs actifs via le protocole",
            },
          ],
        },
        {
          slug: "yield-farming",
          title: "Yield Farming",
          summary: "La recherche du rendement maximal en combinant différents protocoles DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le Yield Farming est une stratégie de recherche du rendement maximal en plaçant des actifs dans divers protocoles DeFi (pools de liquidité, prêt, staking), souvent en déplaçant le capital d'un protocole à l'autre à mesure que le rendement proposé évolue.",
            },
            {
              type: "paragraph",
              text: "Un rendement de farming élevé annoncé est souvent associé à un risque accru : volatilité des tokens de récompense eux-mêmes, risque de smart contract du protocole, ou pertes impermanentes (impermanent loss) dans les pools de liquidité. Rendement et risque sont généralement étroitement liés en DeFi.",
            },
            {
              type: "list",
              items: [
                "Le yield farming implique un déplacement actif du capital entre protocoles pour maximiser le rendement",
                "Un rendement annoncé élevé s'accompagne généralement d'un risque accru",
                "Les pertes impermanentes (impermanent loss) sont un risque spécifique aux pools de liquidité",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que le yield farming ?",
              options: [
                "Un programme public de subvention des projets crypto",
                "Une méthode de minage de bitcoin sur du matériel spécialisé",
                "Une stratégie de recherche du rendement maximal en plaçant des actifs dans différents protocoles DeFi",
              ],
              correctAnswer: "Une stratégie de recherche du rendement maximal en plaçant des actifs dans différents protocoles DeFi",
            },
            {
              prompt: "À quoi un rendement de farming annoncé très élevé est-il généralement associé ?",
              options: [
                "À une absence totale de risque",
                "À un risque accru (volatilité du token, risque de contrat, impermanent loss)",
                "À une garantie de rendement de l'État",
              ],
              correctAnswer: "À un risque accru (volatilité du token, risque de contrat, impermanent loss)",
            },
            {
              prompt: "Qu'est-ce que la perte impermanente (impermanent loss) ?",
              options: [
                "La commission du réseau pour le transfert de tokens",
                "Une perte garantie sur tout staking",
                "Un risque spécifique aux pools de liquidité, lié à l'évolution du ratio de prix des actifs",
              ],
              correctAnswer: "Un risque spécifique aux pools de liquidité, lié à l'évolution du ratio de prix des actifs",
            },
          ],
        },
      ],
    },
    {
      title: "Memecoins et nouveaux projets",
      lessons: [
        {
          slug: "launchpad",
          title: "Launchpad",
          summary: "Les plateformes de lancement précoce et de vente de tokens de nouveaux projets.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Un launchpad est une plateforme qui aide les nouveaux projets à réaliser la distribution initiale de leurs tokens et à attirer une liquidité de départ, en offrant généralement un accès anticipé aux participants de la plateforme en échange du respect de certaines conditions (staking du token natif, KYC, etc.).",
            },
            {
              type: "paragraph",
              text: "Participer via un launchpad n'élimine pas les risques du projet — la réputation de la plateforme influence la sélection initiale, mais ne garantit pas le succès du token après le listing. Il est important d'évaluer le projet lui-même séparément de la plateforme utilisée pour le lancement.",
            },
            {
              type: "list",
              items: [
                "Un launchpad aide les projets pour la distribution initiale des tokens et l'apport de liquidité",
                "L'accès au lancement nécessite souvent de remplir les conditions de la plateforme (staking, KYC)",
                "La réputation d'un launchpad ne garantit pas le succès du token après le listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Pourquoi les projets utilisent-ils des plateformes de launchpad ?",
              options: [
                "Pour renoncer totalement à attirer des investisseurs",
                "Exclusivement pour le support technique de la blockchain",
                "Pour la distribution initiale des tokens et l'apport de liquidité",
              ],
              correctAnswer: "Pour la distribution initiale des tokens et l'apport de liquidité",
            },
            {
              prompt: "Que demande-t-on souvent aux participants pour accéder à un lancement sur launchpad ?",
              options: [
                "Avoir un diplôme d'analyste financier",
                "Remplir les conditions de la plateforme, par exemple staker le token natif",
                "Créer une entité juridique",
              ],
              correctAnswer: "Remplir les conditions de la plateforme, par exemple staker le token natif",
            },
            {
              prompt: "Une bonne réputation de launchpad garantit-elle le succès du token qui y est lancé ?",
              options: [
                "Oui, c'est une garantie de succès à cent pour cent",
                "Oui, mais uniquement pour les projets sur Bitcoin",
                "Non, le projet doit malgré tout être évalué séparément",
              ],
              correctAnswer: "Non, le projet doit malgré tout être évalué séparément",
            },
          ],
        },
        {
          slug: "ico",
          title: "ICO",
          summary: "L'offre initiale de pièces comme forme précoce de levée de fonds dans les projets crypto.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Une ICO (Initial Coin Offering) est un modèle de levée de fonds dans lequel un projet vend directement un nouveau token à des investisseurs, généralement à un stade précoce de développement, en échange de cryptomonnaies établies ou de monnaie fiduciaire. C'est l'un des premiers mécanismes de financement participatif de l'industrie crypto.",
            },
            {
              type: "paragraph",
              text: "La vague d'ICO de 2017 a révélé à la fois le potentiel de ce modèle pour lever rapidement des fonds et ses risques : l'absence de régulation a conduit à un grand nombre de projets sans produit réel. Cela a été à l'origine de formats de lancement plus structurés, dont les launchpads et les IDO.",
            },
            {
              type: "list",
              items: [
                "L'ICO est un modèle de vente d'un nouveau token directement aux investisseurs au stade précoce d'un projet",
                "L'ICO est devenue l'une des premières formes de financement participatif de l'industrie crypto",
                "La faible régulation des ICO a historiquement conduit à un fort pourcentage de projets non viables",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce que le modèle ICO ?",
              options: [
                "Le processus de minage du bitcoin",
                "La vente d'un nouveau token directement aux investisseurs au stade précoce d'un projet",
                "La régulation étatique des cryptomonnaies",
              ],
              correctAnswer: "La vente d'un nouveau token directement aux investisseurs au stade précoce d'un projet",
            },
            {
              prompt: "Quel rôle historique l'ICO a-t-elle joué dans l'industrie crypto ?",
              options: [
                "Elle est devenue l'une des premières formes de financement participatif en cryptomonnaies",
                "Elle a conduit à l'abandon de la technologie blockchain",
                "Elle a entièrement remplacé le trading boursier",
              ],
              correctAnswer: "Elle est devenue l'une des premières formes de financement participatif en cryptomonnaies",
            },
            {
              prompt: "À quoi a conduit la faible régulation de la vague d'ICO de 2017 ?",
              options: [
                "À l'interdiction immédiate de toutes les cryptomonnaies dans tous les pays",
                "À la disparition totale des risques pour les investisseurs",
                "À un fort pourcentage de projets sans produit réel",
              ],
              correctAnswer: "À un fort pourcentage de projets sans produit réel",
            },
          ],
        },
        {
          slug: "ido",
          title: "IDO",
          summary: "L'offre initiale sur une bourse décentralisée, une alternative plus transparente à l'ICO.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Une IDO (Initial DEX Offering) est une distribution de token effectuée directement via une bourse décentralisée ou une plateforme de launchpad, où la liquidité est généralement ajoutée au pool immédiatement après la vente, et où le listing intervient plus rapidement et plus transparent qu'avec une ICO traditionnelle.",
            },
            {
              type: "paragraph",
              text: "L'IDO réduit une partie des risques propres à l'ICO (par exemple, le délai entre la collecte de fonds et le listing), mais n'élimine pas les risques du projet lui-même. Une forte demande sur une IDO entraîne souvent une volatilité brutale du prix dès l'ouverture des échanges.",
            },
            {
              type: "list",
              items: [
                "L'IDO se déroule via une bourse décentralisée ou une plateforme de launchpad",
                "La liquidité du pool est généralement ajoutée immédiatement après la vente du token",
                "Une forte demande sur une IDO provoque souvent une volatilité brutale du prix après le listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Via quoi une IDO se déroule-t-elle généralement ?",
              options: [
                "Via un régulateur central du marché",
                "Via une bourse décentralisée ou une plateforme de launchpad",
                "Uniquement via une banque traditionnelle",
              ],
              correctAnswer: "Via une bourse décentralisée ou une plateforme de launchpad",
            },
            {
              prompt: "En quoi l'IDO diffère-t-elle de l'ICO classique du point de vue du listing ?",
              options: [
                "Il n'existe aucune différence entre ICO et IDO",
                "Une IDO n'implique jamais le listing d'un token",
                "Le listing intervient plus rapidement et plus transparent grâce à l'ajout immédiat de liquidité",
              ],
              correctAnswer: "Le listing intervient plus rapidement et plus transparent grâce à l'ajout immédiat de liquidité",
            },
            {
              prompt: "Que se passe-t-il souvent avec le prix du token juste après l'ouverture des échanges sur une IDO ?",
              options: [
                "Les échanges s'arrêtent automatiquement pendant 24 heures",
                "Le prix reste toujours parfaitement stable",
                "Une volatilité brutale due à la forte demande",
              ],
              correctAnswer: "Une volatilité brutale due à la forte demande",
            },
          ],
        },
        {
          slug: "airdrop",
          title: "Airdrop",
          summary: "La distribution gratuite de tokens aux utilisateurs et les points de vigilance.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Un airdrop est une distribution gratuite de tokens d'un projet à un groupe déterminé d'utilisateurs, souvent en récompense d'une utilisation précoce du protocole, d'une participation à un testnet ou de l'accomplissement d'actions définies. C'est un moyen d'attirer l'attention et de créer une première communauté de détenteurs.",
            },
            {
              type: "paragraph",
              text: "L'attente d'un airdrop potentiel attire beaucoup d'utilisateurs, mais crée aussi des risques : de faux airdrops sont utilisés pour du phishing et le vol de fonds via des smart contracts malveillants. Un airdrop légitime ne demande jamais l'envoi de fonds ou de clés privées pour recevoir des tokens.",
            },
            {
              type: "list",
              items: [
                "Un airdrop est une distribution gratuite de tokens à un groupe déterminé d'utilisateurs",
                "Un airdrop récompense souvent l'utilisation précoce d'un protocole ou la participation à un testnet",
                "Un airdrop légitime ne demande jamais l'envoi de fonds ou de clés privées",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qu'est-ce qu'un airdrop de tokens ?",
              options: [
                "Une taxe obligatoire sur les transactions crypto",
                "Un abonnement payant aux actualités du projet",
                "Une distribution gratuite de tokens à un groupe déterminé d'utilisateurs",
              ],
              correctAnswer: "Une distribution gratuite de tokens à un groupe déterminé d'utilisateurs",
            },
            {
              prompt: "Pour quoi les projets récompensent-ils souvent les utilisateurs via un airdrop ?",
              options: [
                "Pour la suppression du portefeuille du réseau",
                "Pour l'utilisation précoce du protocole ou la participation à un testnet",
                "Pour des avis négatifs sur le projet",
              ],
              correctAnswer: "Pour l'utilisation précoce du protocole ou la participation à un testnet",
            },
            {
              prompt: "Quel signe doit alerter un utilisateur face à un airdrop potentiel ?",
              options: [
                "L'absence de toute exigence de la part de l'utilisateur",
                "La demande d'envoyer des fonds ou des clés privées pour recevoir les tokens",
                "Une simple vérification de l'adresse du portefeuille dans une liste publique",
              ],
              correctAnswer: "La demande d'envoyer des fonds ou des clés privées pour recevoir les tokens",
            },
          ],
        },
        {
          slug: "kak-iskat-proekty",
          title: "Comment chercher des projets",
          summary: "Une check-list de base pour l'évaluation initiale d'un nouveau projet crypto avant d'investir.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "La recherche de projets prometteurs commence par une vérification de base : qui est l'équipe et a-t-elle une réputation publique, existe-t-il un produit fonctionnel ou seulement une présentation, qui sont les investisseurs des premières levées, la tokenomics est-elle transparente et équilibrée.",
            },
            {
              type: "paragraph",
              text: "Il est également utile d'étudier l'activité de la communauté et le développement dans les dépôts publics, plutôt que de se fier uniquement aux déclarations marketing sur les réseaux sociaux. Un projet avec une audience active et croissante et des mises à jour de code régulières mérite généralement plus de confiance qu'un projet reposant sur une seule annonce marquante.",
            },
            {
              type: "list",
              items: [
                "Vérifier l'équipe, le produit et les investisseurs est la première étape de base de l'évaluation d'un projet",
                "L'activité de développement dans les dépôts publics est un signal plus fiable que le marketing",
                "Une tokenomics équilibrée et transparente réduit le risque futur de pression vendeuse",
              ],
            },
          ],
          questions: [
            {
              prompt: "Par quoi commence généralement la vérification de base d'un nouveau projet crypto ?",
              options: [
                "Par l'étude du seul logo du projet",
                "Par l'analyse de l'équipe, du produit et des premiers investisseurs",
                "Par l'achat immédiat du volume maximal de token",
              ],
              correctAnswer: "Par l'analyse de l'équipe, du produit et des premiers investisseurs",
            },
            {
              prompt: "Quel signal est généralement considéré comme un indicateur plus fiable du progrès réel d'un projet ?",
              options: [
                "Le nombre d'abonnés sur les réseaux sociaux sans autre vérification",
                "L'activité de développement dans les dépôts de code publics",
                "Le nombre de promesses tapageuses dans les publications marketing",
              ],
              correctAnswer: "L'activité de développement dans les dépôts de code publics",
            },
            {
              prompt: "Pourquoi faut-il prêter attention à la tokenomics lors de l'évaluation initiale d'un projet ?",
              options: [
                "La tokenomics n'est importante que pour les projets sans blockchain",
                "Une tokenomics équilibrée réduit le risque futur de pression vendeuse",
                "La tokenomics n'a aucun lien avec les risques du projet",
              ],
              correctAnswer: "Une tokenomics équilibrée réduit le risque futur de pression vendeuse",
            },
          ],
        },
      ],
    },

    {
      title: "Stratégies de trading",
      lessons: [
        {
          slug: "scalping",
          title: "Scalping",
          summary: "Stratégie de nombreux petits trades avec un faible profit sur des timeframes de quelques minutes.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Le scalping est une stratégie dans laquelle le trader ouvre un grand nombre de trades en peu de temps (secondes à minutes), cherchant à réaliser un petit profit sur chacun d'eux. Le scalping exige une concentration élevée, des frais faibles et une bonne liquidité de l'instrument.",
            },
            {
              type: "paragraph",
              text: "En raison de la fréquence élevée des trades, même une commission minime de l'exchange a un impact significatif sur la rentabilité finale du scalpeur, d'où l'importance d'un calcul précis des coûts. Le scalping impose également des exigences accrues en matière de rapidité d'exécution des ordres et de stabilité de la connexion.",
            },
            {
              type: "list",
              items: [
                "Le scalping repose sur de nombreux trades courts avec un petit objectif de profit",
                "Les frais de l'exchange ont un impact significatif sur la rentabilité finale en raison de la fréquence élevée des trades",
                "La stratégie exige une forte liquidité de l'instrument et une exécution stable des ordres",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quelle est la caractéristique clé du scalping en tant que stratégie ?",
              options: [
                "Le maintien d'une position pendant plusieurs mois",
                "L'abandon total de l'analyse du graphique",
                "Un grand nombre de trades courts avec un petit profit sur chacun",
              ],
              correctAnswer: "Un grand nombre de trades courts avec un petit profit sur chacun",
            },
            {
              prompt: "Pourquoi les frais de l'exchange sont-ils particulièrement importants pour un scalpeur ?",
              options: [
                "Le scalping est totalement exempté de frais sur tout exchange",
                "En raison de la fréquence élevée des trades, ils ont un impact significatif sur la rentabilité finale",
                "Les frais ne comptent que si la position est gardée plus d'un mois",
              ],
              correctAnswer: "En raison de la fréquence élevée des trades, ils ont un impact significatif sur la rentabilité finale",
            },
            {
              prompt: "Qu'est-ce qui est particulièrement important pour un instrument utilisé en scalping ?",
              options: [
                "L'absence de graphique de prix en temps réel",
                "Une liquidité la plus faible possible",
                "Une forte liquidité et une exécution rapide des ordres",
              ],
              correctAnswer: "Une forte liquidité et une exécution rapide des ordres",
            },
          ],
        },
        {
          slug: "day-trading",
          title: "Day Trading",
          summary: "Trading intrajournalier avec clôture de toutes les positions avant la fin de la séance.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Le Day Trading est une stratégie où tous les trades sont ouverts et fermés au cours d'une même journée, sans report de position au lendemain. Cela élimine le risque de gaps nocturnes et permet au trader de contrôler entièrement son exposition au marché à la fin de la séance.",
            },
            {
              type: "paragraph",
              text: "Le day trading demande plus de temps d'analyse et de suivi du marché pendant la journée par rapport aux approches plus long terme, mais offre davantage d'opportunités d'entrée que le scalping grâce à des objectifs de profit plus larges.",
            },
            {
              type: "list",
              items: [
                "Toutes les positions en day trading sont clôturées avant la fin de la séance de trading",
                "L'absence de report de position élimine le risque de gaps nocturnes",
                "Le day trading demande un temps de suivi actif du marché considérable",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quelle est la règle clé du day trading ?",
              options: [
                "Les positions sont obligatoirement gardées plusieurs semaines",
                "Les trades ne s'ouvrent qu'une fois par mois",
                "Toutes les positions sont clôturées au cours de la même séance de trading",
              ],
              correctAnswer: "Toutes les positions sont clôturées au cours de la même séance de trading",
            },
            {
              prompt: "Quel risque est éliminé par l'absence de report de position au lendemain ?",
              options: [
                "Le risque lié aux frais de l'exchange",
                "Le risque de changement de nom du token",
                "Le risque de gaps de prix nocturnes",
              ],
              correctAnswer: "Le risque de gaps de prix nocturnes",
            },
            {
              prompt: "En quoi le day trading diffère-t-il du scalping en matière d'objectifs de profit ?",
              options: [
                "Le day trading ne prévoit aucun objectif de profit",
                "Les objectifs de profit des deux stratégies sont absolument identiques",
                "Le day trading a généralement des objectifs de profit plus larges par trade",
              ],
              correctAnswer: "Le day trading a généralement des objectifs de profit plus larges par trade",
            },
          ],
        },
        {
          slug: "swing-trading",
          title: "Swing Trading",
          summary: "Maintien d'une position de quelques jours à quelques semaines sur des mouvements à moyen terme.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Le Swing Trading est une stratégie consistant à conserver des positions de quelques jours à quelques semaines afin de capter un mouvement de prix à moyen terme (« swing »). Cela demande moins de temps de suivi constant que le day trading ou le scalping.",
            },
            {
              type: "paragraph",
              text: "Les swing traders s'appuient plus souvent sur des timeframes plus élevés (H4, D1) pour déterminer la tendance et les points d'entrée, tout en sachant que le trade est inévitablement exposé aux gaps nocturnes et de week-end, ce dont le stop-loss et la taille de position doivent tenir compte.",
            },
            {
              type: "list",
              items: [
                "Le swing trading suppose de garder une position de quelques jours à quelques semaines",
                "La stratégie exige moins de suivi constant que le day trading ou le scalping",
                "Les positions en swing trading sont exposées au risque des gaps nocturnes et de week-end",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quel est l'horizon typique de détention d'une position en swing trading ?",
              options: [
                "De quelques secondes à quelques minutes",
                "De quelques jours à quelques semaines",
                "Plusieurs années sans exception",
              ],
              correctAnswer: "De quelques jours à quelques semaines",
            },
            {
              prompt: "Quels timeframes les swing traders utilisent-ils le plus souvent pour l'analyse ?",
              options: [
                "Exclusivement le graphique tick par tick",
                "Des timeframes plus élevés, comme H4 et D1",
                "Uniquement le timeframe d'une minute",
              ],
              correctAnswer: "Des timeframes plus élevés, comme H4 et D1",
            },
            {
              prompt: "À quel risque spécifique les positions en swing trading sont-elles exposées en raison de leur durée ?",
              options: [
                "Le risque d'exécution instantanée de l'ordre",
                "Le risque d'absence totale de volatilité",
                "Le risque des gaps de prix nocturnes et de week-end",
              ],
              correctAnswer: "Le risque des gaps de prix nocturnes et de week-end",
            },
          ],
        },
        {
          slug: "position-trading",
          title: "Position Trading",
          summary: "Maintien de positions à long terme basé sur les grandes tendances et les facteurs fondamentaux.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Le Position Trading est une stratégie consistant à garder des positions de plusieurs semaines à plusieurs mois, voire plus, visant à capter les grandes tendances de long terme. Les position traders accordent moins d'attention au bruit de prix à court terme et davantage au contexte macroéconomique et fondamental.",
            },
            {
              type: "paragraph",
              text: "En raison de l'horizon long, le position trading exige une plus grande tolérance aux replis intermédiaires au sein de la tendance globale et utilise généralement des stops plus larges par rapport au capital engagé, compensés par un nombre réduit de positions simultanées.",
            },
            {
              type: "list",
              items: [
                "Le position trading vise à conserver des positions de plusieurs semaines à plusieurs mois",
                "La stratégie s'appuie davantage sur le contexte macroéconomique et fondamental que sur le bruit de court terme",
                "Les position traders utilisent généralement des stops plus larges et moins de positions simultanées",
              ],
            },
          ],
          questions: [
            {
              prompt: "Sur quoi le position trading se concentre-t-il en priorité ?",
              options: [
                "Les fluctuations de prix à la minute",
                "L'arbitrage entre exchanges en temps réel",
                "Capter les grandes tendances de long terme",
              ],
              correctAnswer: "Capter les grandes tendances de long terme",
            },
            {
              prompt: "À quoi un position trader doit-il être préparé en raison de l'horizon de détention long ?",
              options: [
                "À une absence totale de toute fluctuation de prix",
                "À des replis intermédiaires au sein de la tendance globale",
                "À devoir clôturer le trade à la fin de chaque journée",
              ],
              correctAnswer: "À des replis intermédiaires au sein de la tendance globale",
            },
            {
              prompt: "Quel type d'analyse joue un rôle particulièrement important en position trading ?",
              options: [
                "Uniquement l'analyse du carnet d'ordres de la dernière minute",
                "L'analyse macroéconomique et fondamentale",
                "Aucune analyse n'est nécessaire",
              ],
              correctAnswer: "L'analyse macroéconomique et fondamentale",
            },
          ],
        },
        {
          slug: "liquidity-sweep-strategiya",
          title: "Liquidity Sweep",
          summary: "Stratégie de trading consistant à entrer après un sweep de liquidité au-delà d'un niveau clé.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "En tant que stratégie de trading, le Liquidity Sweep repose sur l'idée que le prix franchit souvent faussement un niveau significatif (plus haut, plus bas, zone d'accumulation de stop-loss), y collecte de la liquidité, puis s'inverse dans la direction opposée — c'est précisément ce point de retournement qui sert de signal d'entrée.",
            },
            {
              type: "paragraph",
              text: "La différence clé avec une simple cassure de niveau est que le trader n'attend pas la poursuite du mouvement au-delà du niveau, mais un retour rapide du prix à l'intérieur du range, ce qui confirme que la cassure était due à un sweep de liquidité et non à une réelle force de tendance.",
            },
            {
              type: "list",
              items: [
                "La stratégie repose sur une fausse cassure de niveau suivie d'un retournement rapide du prix",
                "L'entrée se fait après confirmation du retour du prix à l'intérieur du range, pas au moment de la cassure elle-même",
                "La stratégie exige de la patience et une confirmation pour distinguer un sweep d'une réelle cassure",
              ],
            },
          ],
          questions: [
            {
              prompt: "Sur quelle idée repose la stratégie Liquidity Sweep ?",
              options: [
                "Une fausse cassure de niveau avec collecte de liquidité suivie d'un retournement du prix",
                "L'ignorance totale des niveaux de support et de résistance",
                "Le maintien constant d'une position sans analyse des niveaux",
              ],
              correctAnswer: "Une fausse cassure de niveau avec collecte de liquidité suivie d'un retournement du prix",
            },
            {
              prompt: "Qu'est-ce qui confirme qu'une cassure de niveau était bien un sweep et non une réelle cassure ?",
              options: [
                "L'absence totale de volume lors de la cassure",
                "La poursuite du mouvement du prix bien au-delà du niveau",
                "Le retour rapide du prix à l'intérieur du range après la cassure",
              ],
              correctAnswer: "Le retour rapide du prix à l'intérieur du range après la cassure",
            },
            {
              prompt: "Quand un trader utilisant cette stratégie ouvre-t-il généralement un trade ?",
              options: [
                "Immédiatement au moment où le prix touche le niveau, sans attendre de confirmation",
                "Après confirmation du retour du prix à l'intérieur du range",
                "Uniquement après la clôture de la semaine de trading",
              ],
              correctAnswer: "Après confirmation du retour du prix à l'intérieur du range",
            },
          ],
        },
        {
          slug: "breakout",
          title: "Breakout",
          summary: "Stratégie d'entrée dans le sens d'une cassure confirmée d'un niveau clé.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Le Breakout (stratégie de cassure) consiste à entrer dans le sens du mouvement lorsque le prix franchit un niveau significatif de support, de résistance ou une borne de consolidation avec confirmation — généralement un volume accru et une clôture de bougie au-delà du niveau, pas seulement un simple contact.",
            },
            {
              type: "paragraph",
              text: "Le risque principal de la stratégie breakout est la fausse cassure, où le prix dépasse brièvement le niveau avant de revenir immédiatement à l'intérieur. C'est pourquoi les traders attendent souvent un retest du niveau cassé (qui devient alors une résistance en support, ou l'inverse) pour une entrée plus fiable.",
            },
            {
              type: "list",
              items: [
                "La stratégie breakout consiste à entrer dans le sens d'une cassure confirmée d'un niveau significatif",
                "La confirmation d'une cassure repose généralement sur un volume accru et une clôture de bougie au-delà du niveau",
                "Attendre un retest du niveau cassé réduit le risque d'entrer sur une fausse cassure",
              ],
            },
          ],
          questions: [
            {
              prompt: "Sur quoi repose la stratégie de cassure (breakout) ?",
              options: [
                "L'entrée exclusivement à contre-sens de la cassure",
                "L'ignorance totale des niveaux de support et de résistance",
                "L'entrée dans le sens d'une cassure confirmée d'un niveau significatif",
              ],
              correctAnswer: "L'entrée dans le sens d'une cassure confirmée d'un niveau significatif",
            },
            {
              prompt: "Qu'est-ce qui confirme généralement une cassure réelle plutôt que fausse ?",
              options: [
                "Une baisse du volume jusqu'à zéro",
                "Un simple contact du niveau par le prix sans clôture de bougie",
                "Un volume accru et une clôture de bougie au-delà du niveau",
              ],
              correctAnswer: "Un volume accru et une clôture de bougie au-delà du niveau",
            },
            {
              prompt: "Pourquoi les traders attendent-ils parfois un retest du niveau cassé avant d'entrer ?",
              options: [
                "Pour augmenter garantiment la commission du trade",
                "Le retest n'a aucune importance pour l'entrée",
                "Pour réduire le risque d'entrer sur une fausse cassure",
              ],
              correctAnswer: "Pour réduire le risque d'entrer sur une fausse cassure",
            },
          ],
        },
        {
          slug: "mean-reversion",
          title: "Mean Reversion",
          summary: "Stratégie de retour à la moyenne après un fort écart du prix.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Le Mean Reversion (retour à la moyenne) repose sur l'idée qu'un prix fortement écarté de sa valeur moyenne (par exemple d'une moyenne mobile ou du VWAP) tend à revenir vers celle-ci avec le temps. La stratégie fonctionne généralement mieux sur un marché en range que dans une forte tendance.",
            },
            {
              type: "paragraph",
              text: "Les traders utilisant cette stratégie combinent souvent des oscillateurs comme le RSI avec des niveaux d'écart par rapport à la moyenne (par exemple les bandes de Bollinger), en ouvrant un trade à contre-sens d'un fort mouvement de court terme, en anticipant une correction vers le niveau moyen.",
            },
            {
              type: "list",
              items: [
                "La stratégie suppose un retour du prix vers sa valeur moyenne après un fort écart",
                "Le mean reversion est généralement plus efficace sur un marché en range que dans une forte tendance directionnelle",
                "Les oscillateurs et les bandes d'écart sont souvent combinés pour repérer les points d'entrée",
              ],
            },
          ],
          questions: [
            {
              prompt: "Sur quelle idée repose la stratégie Mean Reversion ?",
              options: [
                "Le prix ne revient jamais vers sa valeur moyenne",
                "Un prix fortement écarté de sa valeur moyenne a tendance à y revenir",
                "Le prix poursuit toujours son mouvement dans la même direction indéfiniment",
              ],
              correctAnswer: "Un prix fortement écarté de sa valeur moyenne a tendance à y revenir",
            },
            {
              prompt: "Sur quel type de marché la stratégie mean reversion fonctionne-t-elle généralement mieux ?",
              options: [
                "Sur un marché sans aucun autre participant que le trader lui-même",
                "Sur un marché en range",
                "Exclusivement en période d'hyperinflation",
              ],
              correctAnswer: "Sur un marché en range",
            },
            {
              prompt: "Quels outils les traders combinent-ils souvent pour repérer les points d'entrée en mean reversion ?",
              options: [
                "Uniquement les actualités des réseaux sociaux",
                "Des oscillateurs comme le RSI et des bandes d'écart par rapport à la moyenne",
                "Exclusivement les données sur les frais de l'exchange",
              ],
              correctAnswer: "Des oscillateurs comme le RSI et des bandes d'écart par rapport à la moyenne",
            },
          ],
        },
      ],
    },
    {
      title: "Examen final",
      lessons: [
        {
          slug: "polnaya-torgovlya-na-simulyatore",
          title: "Trading complet sur le simulateur",
          summary: "Pratique finale : application de tous les concepts étudiés sur un compte virtuel.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Cette leçon réunit toute la matière du cours — des notions de base du marché à la gestion du risque, la psychologie, les indicateurs et les stratégies de trading. L'objectif est de réaliser une série de trades sur un compte virtuel en appliquant les règles de gestion du risque et un plan défini à l'avance pour chaque trade.",
            },
            {
              type: "paragraph",
              text: "L'objectif de cette étape n'est pas un gros profit ponctuel, mais la démonstration d'une approche cohérente et disciplinée : calcul correct de la taille de position, stop-loss et take-profit justifiés, ainsi que la tenue d'un journal pour chaque trade, comme le font les traders professionnels.",
            },
            {
              type: "list",
              items: [
                "Chaque trade doit s'accompagner d'un plan d'entrée et de sortie défini à l'avance",
                "La taille de position se calcule en fonction du risque, pas du profit souhaité",
                "Le résultat d'un trade isolé importe moins que la cohérence dans le respect des règles",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quel est l'objectif principal de la pratique finale sur compte virtuel ?",
              options: [
                "Obtenir le profit maximal possible à tout prix",
                "Démontrer une approche cohérente et disciplinée du trading",
                "Réaliser le plus grand nombre de trades possible sans analyse",
              ],
              correctAnswer: "Démontrer une approche cohérente et disciplinée du trading",
            },
            {
              prompt: "Que doit précéder l'ouverture de chaque trade à cette étape ?",
              options: [
                "L'augmentation maximale du levier",
                "Un plan d'entrée et de sortie défini à l'avance",
                "Le choix aléatoire d'un actif sans analyse",
              ],
              correctAnswer: "Un plan d'entrée et de sortie défini à l'avance",
            },
            {
              prompt: "Selon la matière du cours, qu'est-ce qui détermine la taille de position ?",
              options: [
                "Exclusivement l'intuition du trader",
                "Le taux de change du dollar au moment du trade",
                "Le risque acceptable par trade, pas le profit souhaité",
              ],
              correctAnswer: "Le risque acceptable par trade, pas le profit souhaité",
            },
          ],
        },
        {
          slug: "proyti-vse-zadaniya",
          title: "Il faut terminer toutes les leçons",
          summary: "Vérification finale : pourquoi il est important de terminer chaque module pour finir le cours.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Chaque module du cours est construit pour s'appuyer sur le précédent : la compréhension de la gestion du risque repose sur la compréhension de la volatilité et de la structure du marché, la psychologie du trading sur la compréhension du fonctionnement du risque, et les stratégies sur la maîtrise des indicateurs et de l'analyse de volume.",
            },
            {
              type: "paragraph",
              text: "Sauter certains modules crée des lacunes qui se révèlent plus tard — par exemple lors de l'utilisation d'une stratégie sans savoir calculer correctement la taille de position adaptée. C'est pourquoi terminer le cours exige de compléter toutes les leçons, et non seulement certains modules au choix.",
            },
            {
              type: "list",
              items: [
                "Les modules du cours sont construits de façon séquentielle et s'appuient les uns sur les autres",
                "Sauter un module crée des lacunes qui se manifestent aux étapes ultérieures de l'apprentissage",
                "Terminer complètement le cours exige de compléter toutes les leçons, pas seulement certains modules",
              ],
            },
          ],
          questions: [
            {
              prompt: "Pourquoi est-il recommandé de suivre les modules du cours dans l'ordre ?",
              options: [
                "C'est nécessaire uniquement pour obtenir de l'XP",
                "L'ordre des modules n'a aucune importance",
                "Chaque module suivant s'appuie sur les connaissances des modules précédents",
              ],
              correctAnswer: "Chaque module suivant s'appuie sur les connaissances des modules précédents",
            },
            {
              prompt: "À quoi peut mener le fait de sauter certains modules du cours ?",
              options: [
                "À l'obtention automatique d'un certificat sans avoir appris",
                "Cela n'a aucun impact sur la suite de l'apprentissage",
                "À des lacunes de connaissances qui se manifesteront à des étapes ultérieures",
              ],
              correctAnswer: "À des lacunes de connaissances qui se manifesteront à des étapes ultérieures",
            },
            {
              prompt: "Que faut-il pour terminer complètement le cours ?",
              options: [
                "Il suffit simplement d'ouvrir la première leçon du cours",
                "Compléter toutes les leçons, pas seulement certains modules au choix",
                "Terminer n'importe quel module au choix",
              ],
              correctAnswer: "Compléter toutes les leçons, pas seulement certains modules au choix",
            },
          ],
        },
        {
          slug: "poluchenie-sertifikata",
          title: "Obtention du certificat",
          summary: "Ce que signifie terminer le cours « Le chemin du trader » et comment utiliser ces connaissances ensuite.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Terminer tous les modules du cours « Le chemin du trader » signifie avoir parcouru le chemin complet, des notions de base du marché aux sujets avancés : indicateurs, analyse de volume, données on-chain, DeFi, tokenomics et construction de sa propre stratégie de trading validée sur des données historiques.",
            },
            {
              type: "paragraph",
              text: "Terminer le cours en soi ne remplace pas l'expérience pratique : les conditions réelles du marché, la psychologie vécue sous pression et le travail avec du capital réel demandent une pratique continue. Les connaissances du cours forment le socle sur lequel se construit la suite de l'évolution en tant que trader.",
            },
            {
              type: "list",
              items: [
                "Le cours couvre le chemin des notions de base du marché aux sujets avancés d'analyse et de stratégie",
                "Terminer le cours constitue un socle, pas un substitut à une expérience de trading réelle",
                "Progresser davantage exige de la pratique, la tenue d'un journal et une analyse constante de ses propres décisions",
              ],
            },
          ],
          questions: [
            {
              prompt: "Que couvre le fait de terminer entièrement le cours « Le chemin du trader » ?",
              options: [
                "Uniquement les bases de l'utilisation d'un wallet",
                "Exclusivement les aspects juridiques des cryptomonnaies",
                "Le chemin des notions de base du marché aux sujets avancés d'analyse et de stratégie",
              ],
              correctAnswer: "Le chemin des notions de base du marché aux sujets avancés d'analyse et de stratégie",
            },
            {
              prompt: "Terminer le cours remplace-t-il une réelle expérience de trading ?",
              options: [
                "Oui, le cours remplace entièrement toute pratique",
                "Non, le cours constitue un socle, et l'expérience réelle demande une pratique continue",
                "Oui, mais uniquement pour les trades avec un levier supérieur à 10x",
              ],
              correctAnswer: "Non, le cours constitue un socle, et l'expérience réelle demande une pratique continue",
            },
            {
              prompt: "Que recommande-t-on de continuer à faire après avoir terminé le cours ?",
              options: [
                "Abandonner immédiatement toute gestion du risque",
                "Tenir un journal de trading et analyser constamment ses propres décisions",
                "Arrêter complètement d'analyser son trading",
              ],
              correctAnswer: "Tenir un journal de trading et analyser constamment ses propres décisions",
            },
          ],
        },
      ],
    },
  ],
};
