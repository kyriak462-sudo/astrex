import type { CourseSeed } from "./types";

export const COURSE_IT: CourseSeed = {
  slug: "put-treydera",
  title: "Il percorso del trader",
  description:
    "Un percorso strutturato dai concetti base del mercato alla pratica su un conto virtuale.",
  modules: [
    {
      title: "Le basi del trading",
      lessons: [
        {
          slug: "chto-takoe-treyding",
          title: "Cos'è il trading",
          summary: "La differenza tra investimento e trading, i principali partecipanti al mercato.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Il trading consiste nell'acquistare e vendere asset finanziari (criptovalute, azioni, valute) con l'obiettivo di guadagnare dalla variazione del loro prezzo. A differenza dell'investimento classico, in cui l'asset viene mantenuto per anni contando sulla sua crescita, il trader guadagna dal movimento stesso del prezzo, sia al rialzo che al ribasso.",
            },
            {
              type: "paragraph",
              text: "Sul mercato operano contemporaneamente diversi partecipanti: trader retail (privati), investitori istituzionali (fondi, banche), market maker (che garantiscono la liquidità) e sistemi algoritmici. Capire chi effettua le operazioni e perché aiuta a spiegare perché il prezzo si muove in un certo modo.",
            },
            {
              type: "list",
              items: [
                "L'investitore tende a mantenere l'asset a lungo e si basa sul valore fondamentale",
                "Il trader apre e chiude posizioni più spesso — da pochi minuti a settimane",
                "Il trader può guadagnare anche dal calo del prezzo tramite posizioni corte (short)",
              ],
            },
          ],
          questions: [
            {
              prompt: "In cosa il trading si differenzia fondamentalmente dall'investimento a lungo termine?",
              options: [
                "Il trading prevede operazioni frequenti su orizzonti brevi",
                "Il trading è accessibile solo alle banche",
                "Il trading non comporta alcun rischio",
              ],
              correctAnswer: "Il trading prevede operazioni frequenti su orizzonti brevi",
            },
            {
              prompt: "Chi, a differenza dell'investitore classico, può guadagnare anche dal calo del prezzo di un asset?",
              options: ["Il trader che apre posizioni corte", "Solo le banche", "Solo i market maker"],
              correctAnswer: "Il trader che apre posizioni corte",
            },
            {
              prompt: "Cosa garantiscono i market maker sul mercato?",
              options: ["La liquidità per le operazioni degli altri partecipanti", "La regolamentazione statale", "Un tasso di cambio fisso dell'asset"],
              correctAnswer: "La liquidità per le operazioni degli altri partecipanti",
            },
          ],
        },
        {
          slug: "vidy-rynkov",
          title: "Tipi di mercato",
          summary: "Crypto, forex, azioni e materie prime: quali sono le differenze.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Il mercato crypto è negoziabile 24 ore su 24, senza giorni festivi, ed è decentralizzato: non esiste un'unica borsa che stabilisce il prezzo. Il Forex è il mercato di valute più grande al mondo, con una liquidità enorme, ma con orari di negoziazione limitati nel weekend. Il mercato azionario opera secondo l'orario delle singole borse ed è rigidamente regolamentato. I mercati delle materie prime (petrolio, oro) riflettono l'equilibrio tra domanda e offerta reale delle risorse.",
            },
            {
              type: "list",
              items: [
                "Crypto: 24/7, alta volatilità, basso capitale minimo di ingresso",
                "Forex: liquidità enorme, opera 5 giorni alla settimana",
                "Azioni: legate al business dell'azienda, orari di negoziazione della borsa",
                "Materie prime (commodities): dipendono dalla domanda/offerta reale e dalla geopolitica",
              ],
            },
          ],
          questions: [
            {
              prompt: "In cosa il mercato crypto si differenzia dal mercato azionario?",
              options: ["Opera 24/7 senza giorni festivi", "Si negozia solo nei giorni feriali durante il giorno", "È completamente regolamentato dallo stato"],
              correctAnswer: "Opera 24/7 senza giorni festivi",
            },
            {
              prompt: "Cosa si negozia sul mercato Forex?",
              options: ["Coppie di valute", "Azioni di aziende", "Materie prime"],
              correctAnswer: "Coppie di valute",
            },
            {
              prompt: "Quale dei mercati elencati presenta solitamente la volatilità più alta?",
              options: ["Il mercato delle criptovalute", "Il mercato dei titoli di stato", "Le coppie di valute G7"],
              correctAnswer: "Il mercato delle criptovalute",
            },
          ],
        },
        {
          slug: "kak-chitat-grafik",
          title: "Come leggere un grafico",
          summary: "Assi, timeframe, prezzo di apertura/chiusura.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Nel grafico dei prezzi, sull'asse verticale è riportato il prezzo dell'asset, su quello orizzontale il tempo. Ogni punto dati (candela o barra) contiene il prezzo di apertura, di chiusura, il massimo e il minimo per il periodo selezionato: questo è ciò che si chiama timeframe.",
            },
            {
              type: "paragraph",
              text: "Il timeframe è l'intervallo di tempo rappresentato da un singolo elemento del grafico: minuto, ora, giorno, settimana. La scelta del timeframe dipende dallo stile di trading: gli scalper osservano i grafici a un minuto, gli swing trader quelli orari e giornalieri.",
            },
            {
              type: "list",
              items: [
                "Il grafico lineare è il più semplice e mostra solo il prezzo di chiusura",
                "Il grafico a candele mostra open/high/low/close ed è il più usato dai trader",
                "Il bar chart è simile a quello a candele, ma visivamente meno immediato",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa viene rappresentato sull'asse verticale del grafico dei prezzi?",
              options: ["Il prezzo dell'asset", "Il volume degli scambi", "Il numero di trader"],
              correctAnswer: "Il prezzo dell'asset",
            },
            {
              prompt: "Cos'è un timeframe?",
              options: [
                "Il periodo di tempo rappresentato da un singolo elemento del grafico",
                "Il nome di una borsa",
                "Un tipo di ordine",
              ],
              correctAnswer: "Il periodo di tempo rappresentato da un singolo elemento del grafico",
            },
            {
              prompt: "Perché i trader analizzano più timeframe contemporaneamente?",
              options: [
                "Per vedere contemporaneamente il quadro generale del trend e il punto di ingresso preciso",
                "Non ha alcun senso pratico",
                "Per evitare le commissioni della borsa",
              ],
              correctAnswer: "Per vedere contemporaneamente il quadro generale del trend e il punto di ingresso preciso",
            },
          ],
        },
        {
          slug: "svechnoy-analiz",
          title: "Analisi delle candele",
          summary: "Anatomia della candela giapponese e pattern candlestick di base.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "La candela giapponese è il principale strumento di visualizzazione del prezzo per i trader. È composta da un corpo (l'intervallo tra il prezzo di apertura e quello di chiusura) e da ombre/stoppini sopra e sotto (il massimo e il minimo del prezzo nel periodo). Una candela verde (rialzista) indica che la chiusura è superiore all'apertura, una rossa (ribassista) indica il contrario.",
            },
            {
              type: "paragraph",
              text: "Una singola candela racconta già la storia della lotta tra compratori e venditori: un corpo lungo indica un movimento deciso, ombre lunghe indicano che il prezzo è stato attivamente \"respinto\" nella direzione opposta.",
            },
          ],
          questions: [
            {
              prompt: "Cosa mostra il corpo della candela?",
              options: [
                "L'intervallo tra il prezzo di apertura e di chiusura",
                "Il volume massimo degli scambi",
                "Il numero di partecipanti al mercato",
              ],
              correctAnswer: "L'intervallo tra il prezzo di apertura e di chiusura",
            },
            {
              prompt: "Cosa mostrano le ombre (stoppini) della candela?",
              options: [
                "L'intervallo di prezzo al di fuori del corpo — il massimo e il minimo del periodo",
                "Il volume medio degli scambi",
                "Il numero di operazioni al giorno",
              ],
              correctAnswer: "L'intervallo di prezzo al di fuori del corpo — il massimo e il minimo del periodo",
            },
            {
              prompt: "Cosa può indicare una lunga ombra inferiore dopo un calo di prezzo?",
              options: [
                "I compratori hanno riacquistato attivamente dal basso — è possibile un'inversione",
                "Il mercato continuerà sicuramente a scendere",
                "Il volume degli scambi era pari a zero",
              ],
              correctAnswer: "I compratori hanno riacquistato attivamente dal basso — è possibile un'inversione",
            },
          ],
        },
        {
          slug: "podderzhka-i-soprotivlenie",
          title: "Supporto e resistenza",
          summary: "Come individuare i livelli chiave sul grafico.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Il livello di supporto è il prezzo al quale, in passato, i compratori hanno più volte fermato un calo. Il livello di resistenza è, al contrario, il prezzo al quale i venditori hanno fermato una salita. Questi livelli formano la \"memoria\" del mercato: il prezzo spesso reagisce nuovamente quando li raggiunge.",
            },
            {
              type: "paragraph",
              text: "Un principio importante: dopo una rottura, il livello spesso cambia ruolo — una precedente resistenza diventa supporto, e viceversa. I livelli affidabili non si tracciano su un solo punto, ma su più contatti del prezzo.",
            },
          ],
          questions: [
            {
              prompt: "Cos'è un livello di supporto?",
              options: [
                "Il prezzo al quale i compratori hanno storicamente fermato un calo",
                "Il prezzo di apertura della borsa",
                "La commissione su un'operazione",
              ],
              correctAnswer: "Il prezzo al quale i compratori hanno storicamente fermato un calo",
            },
            {
              prompt: "Cosa succede solitamente a un livello di resistenza dopo la sua rottura al rialzo?",
              options: [
                "Diventa spesso un nuovo supporto",
                "Scompare e non influenza più il prezzo",
                "Il prezzo è obbligato a tornare indietro immediatamente",
              ],
              correctAnswer: "Diventa spesso un nuovo supporto",
            },
            {
              prompt: "Come si costruiscono correttamente livelli affidabili sul grafico?",
              options: [
                "In base a più contatti del prezzo, non a un solo punto",
                "Rigorosamente al centro del grafico",
                "Solo sul timeframe a un minuto",
              ],
              correctAnswer: "In base a più contatti del prezzo, non a un solo punto",
            },
          ],
        },
        {
          slug: "trend-i-ego-struktura",
          title: "Il trend e la sua struttura",
          summary: "Trend rialzista, ribassista e laterale, struttura di massimi/minimi.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Un trend rialzista è composto da una sequenza di massimi crescenti (Higher High) e minimi crescenti (Higher Low). Un trend ribassista è speculare: Lower High e Lower Low. Quando il prezzo si muove in un range senza una direzione chiara, si parla di trend laterale o flat.",
            },
            {
              type: "paragraph",
              text: "Fare trading nella direzione del trend offre statisticamente più possibilità di successo rispetto al tentativo di anticipare un'inversione contro di esso — da qui la nota regola \"il trend è tuo amico\".",
            },
          ],
          questions: [
            {
              prompt: "Da cosa è composto un trend rialzista?",
              options: [
                "Da una sequenza di massimi e minimi crescenti",
                "Da candele di altezza identica",
                "Solo da candele verdi consecutive",
              ],
              correctAnswer: "Da una sequenza di massimi e minimi crescenti",
            },
            {
              prompt: "Cos'è un trend laterale (flat)?",
              options: [
                "Il movimento del prezzo in un range senza una direzione chiara",
                "Un brusco calo del prezzo",
                "Un periodo di sospensione delle negoziazioni in borsa",
              ],
              correctAnswer: "Il movimento del prezzo in un range senza una direzione chiara",
            },
            {
              prompt: "Perché si dice che \"il trend è tuo amico\"?",
              options: [
                "Fare trading nella direzione del trend offre statisticamente più possibilità di successo",
                "Il trend non cambia mai direzione",
                "È solo un modo di dire senza alcun senso pratico",
              ],
              correctAnswer: "Fare trading nella direzione del trend offre statisticamente più possibilità di successo",
            },
          ],
        },
        {
          slug: "obyom-i-likvidnost",
          title: "Volume e liquidità",
          summary: "Perché monitorare il volume e cos'è la liquidità del mercato.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Il volume degli scambi mostra quanto asset è stato comprato e venduto in un periodo. I forti movimenti di prezzo confermati da un volume elevato sono considerati più affidabili rispetto agli stessi movimenti su un volume basso.",
            },
            {
              type: "paragraph",
              text: "La liquidità è la capacità di comprare o vendere un asset rapidamente e senza influenzarne significativamente il prezzo. Su asset a bassa liquidità, anche un'operazione di piccole dimensioni può spostare notevolmente il prezzo e causare slippage — l'esecuzione di un ordine a un prezzo peggiore di quello previsto.",
            },
          ],
          questions: [
            {
              prompt: "Cosa indica un aumento del prezzo con un basso volume di scambi?",
              options: [
                "Il movimento è debole e potrebbe non essere confermato",
                "È il segnale d'ingresso più affidabile",
                "La liquidità dell'asset è massima",
              ],
              correctAnswer: "Il movimento è debole e potrebbe non essere confermato",
            },
            {
              prompt: "Cos'è la liquidità del mercato?",
              options: [
                "La facilità di comprare/vendere un asset senza influenzarne significativamente il prezzo",
                "Il numero totale di monete in circolazione",
                "La commissione della borsa su un'operazione",
              ],
              correctAnswer: "La facilità di comprare/vendere un asset senza influenzarne significativamente il prezzo",
            },
            {
              prompt: "Cosa rischia un trader quando opera con un asset a bassa liquidità?",
              options: [
                "Un forte slippage nell'esecuzione dell'operazione",
                "L'assenza totale di commissioni",
                "Un profitto garantito",
              ],
              correctAnswer: "Un forte slippage nell'esecuzione dell'operazione",
            },
          ],
        },
        {
          slug: "risk-menedzhment-osnovy",
          title: "Risk management: le basi",
          summary: "Dimensione della posizione, stop-loss, rapporto rischio/rendimento.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Il risk management è ciò che distingue un trader professionista da un giocatore d'azzardo. Lo stop-loss è un livello impostato in anticipo al quale la posizione si chiude con una perdita limitata, se il mercato si muove contro la previsione.",
            },
            {
              type: "paragraph",
              text: "La maggior parte dei trader esperti rischia non più dell'1-2% del deposito in una singola operazione: questo permette di superare una serie di operazioni in perdita senza perdere tutto il capitale. Il rapporto rischio/rendimento (risk/reward) indica di quante volte il profitto potenziale supera il rischio: per esempio, 1:3 significa che il profitto è tre volte superiore alla perdita possibile.",
            },
            {
              type: "list",
              items: [
                "Lo stop-loss va impostato prima di entrare in posizione, non dopo",
                "La dimensione della posizione si calcola in base al rischio in denaro, non viceversa",
                "Anche una strategia profittevole può portare alla rovina senza controllo del rischio",
              ],
            },
          ],
          questions: [
            {
              prompt: "A cosa serve lo stop-loss?",
              options: [
                "A limitare in anticipo la perdita su un'operazione",
                "Ad aumentare la dimensione della posizione",
                "A garantire un profitto",
              ],
              correctAnswer: "A limitare in anticipo la perdita su un'operazione",
            },
            {
              prompt: "Quale percentuale del deposito si consiglia solitamente di rischiare in una singola operazione?",
              options: ["1–2%", "25–30%", "L'intero deposito"],
              correctAnswer: "1–2%",
            },
            {
              prompt: "Cosa significa un rapporto rischio/rendimento di 1:3?",
              options: [
                "Il profitto potenziale è 3 volte superiore al rischio",
                "Il rischio è 3 volte superiore al profitto",
                "L'operazione si chiuderà dopo 3 ore",
              ],
              correctAnswer: "Il profitto potenziale è 3 volte superiore al rischio",
            },
          ],
        },
      ],
    },
    {
      title: "Analisi tecnica",
      lessons: [
        {
          slug: "skolzyashchie-srednie",
          title: "Indicatori: le medie mobili",
          summary: "SMA ed EMA: come usarle per individuare il trend.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "La media mobile (Moving Average) appiattisce il prezzo su un periodo selezionato, aiutando a individuare la direzione generale del trend senza il \"rumore\" delle singole candele. La SMA (semplice) attribuisce lo stesso peso a tutti i prezzi del periodo, mentre la EMA (esponenziale) reagisce in modo più marcato ai prezzi più recenti.",
            },
            {
              type: "paragraph",
              text: "Quando il prezzo si trova sopra la media mobile, il trend è generalmente considerato rialzista, sotto — ribassista. L'incrocio tra una media mobile corta e una lunga (per esempio, la MA50 che incrocia la MA200 dal basso verso l'alto) è un segnale molto seguito, noto come \"golden cross\".",
            },
          ],
          questions: [
            {
              prompt: "Qual è la differenza tra SMA ed EMA?",
              options: [
                "La EMA attribuisce più peso ai prezzi più recenti",
                "La SMA funziona solo sul grafico a un minuto",
                "Non c'è differenza, sono la stessa cosa",
              ],
              correctAnswer: "La EMA attribuisce più peso ai prezzi più recenti",
            },
            {
              prompt: "Cosa indica il fatto che il prezzo si trovi sopra la media mobile?",
              options: ["Il trend è probabilmente rialzista", "L'asset è sicuramente sopravvalutato", "Il volume degli scambi è pari a zero"],
              correctAnswer: "Il trend è probabilmente rialzista",
            },
            {
              prompt: "Cosa si intende per \"golden cross\"?",
              options: [
                "L'incrocio di una MA corta sopra una lunga — un segnale rialzista",
                "Il momento del listing di una nuova moneta",
                "L'incrocio del prezzo con la linea dello zero",
              ],
              correctAnswer: "L'incrocio di una MA corta sopra una lunga — un segnale rialzista",
            },
          ],
        },
        {
          slug: "rsi-i-oscillyatory",
          title: "RSI e oscillatori",
          summary: "Ipercomprato, ipervenduto, divergenze.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "L'RSI (Relative Strength Index) è un oscillatore che misura la velocità e l'intensità della variazione di prezzo su una scala da 0 a 100. Valori superiori a 70 sono generalmente considerati zona di ipercomprato, inferiori a 30 zona di ipervenduto.",
            },
            {
              type: "paragraph",
              text: "La divergenza si verifica quando il prezzo e l'RSI si muovono in direzioni opposte: per esempio, il prezzo forma un nuovo massimo, ma l'RSI no. Questo viene spesso interpretato come un segnale precoce di indebolimento del trend e di una possibile inversione.",
            },
          ],
          questions: [
            {
              prompt: "Su quale intervallo opera l'indicatore RSI?",
              options: ["Da 0 a 100", "Da -1 a 1", "Da 0 a 10000"],
              correctAnswer: "Da 0 a 100",
            },
            {
              prompt: "Cosa significa solitamente un RSI superiore a 70?",
              options: ["L'asset si trova in zona di ipercomprato", "L'asset non può essere venduto", "Il volume degli scambi è sceso a zero"],
              correctAnswer: "L'asset si trova in zona di ipercomprato",
            },
            {
              prompt: "Cos'è la divergenza dell'RSI?",
              options: [
                "Il prezzo e l'indicatore si muovono in direzioni opposte — un segnale di possibile inversione",
                "La perfetta coincidenza tra il movimento del prezzo e quello dell'indicatore",
                "Un malfunzionamento tecnico dell'indicatore",
              ],
              correctAnswer: "Il prezzo e l'indicatore si muovono in direzioni opposte — un segnale di possibile inversione",
            },
          ],
        },
        {
          slug: "urovni-fibonachchi",
          title: "I livelli di Fibonacci",
          summary: "Ritracciamenti ed estensioni di Fibonacci nell'analisi del grafico.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "I livelli di ritracciamento di Fibonacci (23,6%, 38,2%, 50%, 61,8%, 78,6%) si tracciano tra l'inizio e la fine di un movimento impulsivo e aiutano a ipotizzare dove il prezzo potrebbe arrestare il ritracciamento prima di riprendere il trend. Molti trader considerano il livello 61,8% come quello chiave.",
            },
            {
              type: "paragraph",
              text: "Le estensioni di Fibonacci, a differenza dei ritracciamenti, si usano per prevedere gli obiettivi di prezzo oltre l'impulso iniziale, ovvero fin dove il prezzo potrebbe spingersi ulteriormente.",
            },
          ],
          questions: [
            {
              prompt: "Quale livello di Fibonacci molti trader considerano chiave per il ritracciamento?",
              options: ["61,8%", "10%", "100%"],
              correctAnswer: "61,8%",
            },
            {
              prompt: "A cosa servono i ritracciamenti di Fibonacci?",
              options: [
                "A individuare punti di ingresso durante un ritracciamento all'interno del trend",
                "A calcolare la commissione della borsa",
                "A determinare l'orario esatto di pubblicazione delle notizie",
              ],
              correctAnswer: "A individuare punti di ingresso durante un ritracciamento all'interno del trend",
            },
            {
              prompt: "A cosa servono le estensioni di Fibonacci?",
              options: [
                "A determinare gli obiettivi di prezzo oltre l'impulso",
                "A determinare la dimensione dello stop-loss in percentuale",
                "A mostrare il volume degli scambi",
              ],
              correctAnswer: "A determinare gli obiettivi di prezzo oltre l'impulso",
            },
          ],
        },
        {
          slug: "patterny-razvorota",
          title: "Pattern di inversione",
          summary: "Testa e spalle, doppio massimo/minimo.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Il pattern \"testa e spalle\" è uno dei segnali di inversione di un trend rialzista più noti: il prezzo forma tre picchi, in cui quello centrale (la testa) è più alto dei due adiacenti (le spalle). Il doppio massimo/minimo è un pattern con un significato simile, formato da due picchi o valli approssimativamente uguali.",
            },
            {
              type: "paragraph",
              text: "Il pattern si considera confermato solo dopo la rottura della \"linea del collo\" (neckline), il livello che collega i minimi locali tra i picchi. Una rottura senza volume si rivela spesso falsa.",
            },
          ],
          questions: [
            {
              prompt: "Cosa segnala il pattern \"testa e spalle\"?",
              options: [
                "Una probabile inversione del trend rialzista",
                "Una prosecuzione garantita della salita",
                "La sospensione delle negoziazioni in borsa",
              ],
              correctAnswer: "Una probabile inversione del trend rialzista",
            },
            {
              prompt: "Cosa conferma la validità del pattern \"doppio massimo\"?",
              options: ["La rottura della linea del collo verso il basso", "La comparsa di un terzo picco", "L'aumento del volume proprio sul massimo"],
              correctAnswer: "La rottura della linea del collo verso il basso",
            },
            {
              prompt: "Perché il volume è importante per confermare la rottura di un pattern?",
              options: [
                "Senza volume, la rottura si rivela più spesso falsa",
                "Il volume non influenza affatto i pattern",
                "Il volume serve solo sul timeframe giornaliero",
              ],
              correctAnswer: "Senza volume, la rottura si rivela più spesso falsa",
            },
          ],
        },
        {
          slug: "patterny-prodolzheniya",
          title: "Pattern di continuazione",
          summary: "Bandiere, triangoli, rettangoli.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "I pattern di continuazione — bandiere, triangoli, rettangoli — rappresentano una pausa o una consolidazione all'interno di un trend già esistente. A differenza dei pattern di inversione, si risolvono più spesso nella direzione del movimento precedente.",
            },
            {
              type: "paragraph",
              text: "L'uscita del prezzo da una simile consolidazione è di solito accompagnata da un picco di volume, che aiuta a distinguere una rottura reale da una falsa.",
            },
          ],
          questions: [
            {
              prompt: "In quale direzione si risolve più spesso il pattern \"bandiera\"?",
              options: ["Nella direzione del trend precedente", "Sempre rigorosamente verso il basso", "In una direzione casuale"],
              correctAnswer: "Nella direzione del trend precedente",
            },
            {
              prompt: "Cosa hanno in comune triangoli, bandiere e rettangoli?",
              options: [
                "Sono pause/consolidazioni all'interno del trend",
                "Sono sempre segnali di inversione",
                "Si presentano solo sul forex",
              ],
              correctAnswer: "Sono pause/consolidazioni all'interno del trend",
            },
            {
              prompt: "Cosa accompagna più spesso una rottura reale da un triangolo?",
              options: ["Un picco di volume", "L'assenza totale di volume", "La sospensione delle negoziazioni"],
              correctAnswer: "Un picco di volume",
            },
          ],
        },
        {
          slug: "multitaymfreym-analiz",
          title: "Timeframe e analisi multi-timeframe",
          summary: "Come conciliare i segnali su timeframe diversi.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "L'analisi multi-timeframe è un approccio \"dall'alto verso il basso\": prima si individua il trend generale su un timeframe più ampio (per esempio giornaliero), poi si cerca il punto di ingresso su uno più piccolo (per esempio orario o a 15 minuti).",
            },
            {
              type: "paragraph",
              text: "Ignorare il timeframe più ampio è un errore comune tra i principianti: un'operazione può sembrare ottima sul grafico a 5 minuti, ma andare contro il trend giornaliero dominante, il che riduce drasticamente le probabilità di successo.",
            },
          ],
          questions: [
            {
              prompt: "Da quale timeframe si inizia solitamente l'analisi con il metodo \"dall'alto verso il basso\"?",
              options: ["Da quello più ampio (per esempio giornaliero)", "Da quello a un minuto", "Da uno qualsiasi, a caso"],
              correctAnswer: "Da quello più ampio (per esempio giornaliero)",
            },
            {
              prompt: "A cosa serve il timeframe più piccolo nell'analisi multi-timeframe?",
              options: ["Per un ingresso preciso nell'operazione", "Per sostituire completamente il timeframe più ampio", "Per calcolare la commissione della borsa"],
              correctAnswer: "Per un ingresso preciso nell'operazione",
            },
            {
              prompt: "Cosa può accadere ignorando il timeframe più ampio?",
              options: [
                "Fare trading contro il trend principale",
                "Un aumento automatico del profitto",
                "Niente, non ha alcuna importanza",
              ],
              correctAnswer: "Fare trading contro il trend principale",
            },
          ],
        },
        {
          slug: "psikhologiya-treydera",
          title: "La psicologia del trader",
          summary: "Controllo delle emozioni, disciplina, diario di trading.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Paura e avidità sono le due emozioni che più spesso distruggono le strategie di trading. La paura porta a chiudere troppo presto le posizioni in profitto o a non entrare affatto sul mercato, l'avidità a mantenere una posizione più a lungo del previsto o ad aumentare il rischio dopo una serie di successi.",
            },
            {
              type: "paragraph",
              text: "Il \"revenge trading\" — il tentativo di recuperare immediatamente una perdita con una serie di operazioni emotive senza analisi — è uno dei modi più rapidi per bruciare il deposito. Tenere un diario di trading aiuta ad analizzare gli errori e a sviluppare gradualmente la disciplina.",
            },
          ],
          questions: [
            {
              prompt: "Cos'è il \"revenge trading\"?",
              options: [
                "Il tentativo di recuperare immediatamente una perdita con operazioni emotive",
                "Una strategia ufficiale degli hedge fund",
                "Il rimborso della commissione da parte della borsa",
              ],
              correctAnswer: "Il tentativo di recuperare immediatamente una perdita con operazioni emotive",
            },
            {
              prompt: "Perché un trader dovrebbe tenere un diario di trading?",
              options: [
                "Per analizzare gli errori e migliorare la strategia",
                "È un obbligo imposto dalla borsa",
                "Per ridurre le tasse",
              ],
              correctAnswer: "Per analizzare gli errori e migliorare la strategia",
            },
            {
              prompt: "Quale emozione porta più spesso a mantenere troppo a lungo una posizione in perdita?",
              options: ["La speranza in un'inversione e la paura di realizzare la perdita", "La noia", "La fiducia nella correttezza della borsa"],
              correctAnswer: "La speranza in un'inversione e la paura di realizzare la perdita",
            },
          ],
        },
        {
          slug: "pervaya-virtualnaya-sdelka",
          title: "La prima operazione virtuale",
          summary: "Applichiamo tutto ciò che abbiamo imparato su un saldo virtuale.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "È arrivato il momento di mettere insieme la teoria: prima di aprire una posizione, definisci il punto di ingresso (in base ai livelli e alla struttura del trend), lo stop-loss (la perdita massima accettabile) e l'obiettivo di profitto — tutto in anticipo, prima di premere il pulsante Long o Short.",
            },
            {
              type: "paragraph",
              text: "La sezione \"Mercato virtuale\" di ASTREX permette di allenare l'intero processo su dati simulati senza rischiare denaro reale: è il modo migliore per sviluppare la disciplina prima di passare a fare trading con capitale reale.",
            },
          ],
          questions: [
            {
              prompt: "Cosa bisogna definire prima di aprire una posizione?",
              options: [
                "Il punto di ingresso, lo stop-loss e l'obiettivo di profitto",
                "Solo il punto di ingresso",
                "Non è necessario definire nulla in anticipo",
              ],
              correctAnswer: "Il punto di ingresso, lo stop-loss e l'obiettivo di profitto",
            },
            {
              prompt: "Perché conviene esercitarsi prima su un saldo virtuale?",
              options: [
                "Per allenare la strategia senza rischiare denaro reale",
                "Il saldo virtuale genera più profitto",
                "È un obbligo di legge",
              ],
              correctAnswer: "Per allenare la strategia senza rischiare denaro reale",
            },
            {
              prompt: "Cosa è importante fare subito dopo aver chiuso una posizione?",
              options: [
                "Analizzarla e annotare il risultato nel diario",
                "Aprire immediatamente una posizione opposta",
                "Cancellare la cronologia dell'operazione",
              ],
              correctAnswer: "Analizzarla e annotare il risultato nel diario",
            },
          ],
        },
      ],
    },
    {
      title: "Macroeconomia e mercato crypto",
      lessons: [
        {
          slug: "frs-i-protsentnye-stavki",
          title: "La Fed e i tassi di interesse",
          summary: "Come le decisioni della Fed statunitense sui tassi muovono l'intero mercato, crypto incluso.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "La Fed (la Federal Reserve statunitense) stabilisce il tasso di interesse chiave, da cui dipende il costo del denaro nell'intera economia mondiale. Quando il tasso viene alzato, i prestiti diventano più costosi e gli investitori escono dagli asset rischiosi — azioni e criptovalute — per spostarsi su obbligazioni e depositi.",
            },
            {
              type: "paragraph",
              text: "Quando la Fed abbassa il tasso o lascia intendere un allentamento della politica monetaria, gli asset rischiosi tendono a salire: il denaro diventa più economico e gli investitori sono di nuovo disposti a rischiare in cambio di rendimento.",
            },
            {
              type: "list",
              items: [
                "Le riunioni del FOMC si tengono 8 volte l'anno — sono date chiave per il mercato",
                "Il mercato reagisce non solo alla decisione in sé, ma anche alla retorica (\"hawkish\" o \"dovish\")",
                "Il mercato crypto è particolarmente sensibile al tasso a causa dell'alta quota di capitale speculativo",
              ],
            },
          ],
          questions: [
            {
              prompt: "Come reagisce solitamente il mercato a un rialzo del tasso della Fed?",
              options: [
                "Gli asset rischiosi (crypto inclusa) tendono a scendere",
                "Il mercato crypto non reagisce affatto al tasso",
                "Il bitcoin sale sempre quando il tasso viene alzato",
              ],
              correctAnswer: "Gli asset rischiosi (crypto inclusa) tendono a scendere",
            },
            {
              prompt: "Cos'è il FOMC?",
              options: [
                "Il comitato della Fed che decide sul tasso di interesse",
                "La più grande borsa crypto degli Stati Uniti",
                "Un indice di volatilità del mercato",
              ],
              correctAnswer: "Il comitato della Fed che decide sul tasso di interesse",
            },
            {
              prompt: "Come si chiama, nel gergo di mercato, un allentamento della politica monetaria?",
              options: ["Politica \"dovish\"", "Politica \"hawkish\"", "Emissione \"neutrale\""],
              correctAnswer: "Politica \"dovish\"",
            },
          ],
        },
        {
          slug: "inflyatsiya-i-cpi",
          title: "Inflazione e indice CPI",
          summary: "Perché i dati sull'inflazione muovono il mercato più di molte altre notizie.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Il CPI (indice dei prezzi al consumo) è il principale indicatore dell'inflazione negli Stati Uniti e viene pubblicato mensilmente. Se l'inflazione è superiore alle attese, il mercato sconta una politica della Fed più restrittiva e gli asset rischiosi scendono. Se l'inflazione rallenta, il mercato esulta e sale.",
            },
            {
              type: "list",
              items: [
                "La pubblicazione del CPI è uno dei momenti più volatili del mese per il mercato crypto",
                "Non conta tanto il dato in sé, quanto il suo scostamento dalle previsioni degli analisti",
                "Oltre al CPI, esiste il PCE, l'indicatore di inflazione preferito dalla Fed",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa misura l'indice CPI?",
              options: [
                "La variazione dei prezzi di un paniere di beni e servizi al consumo",
                "Il tasso di cambio del bitcoin rispetto al dollaro",
                "Il volume degli scambi in borsa",
              ],
              correctAnswer: "La variazione dei prezzi di un paniere di beni e servizi al consumo",
            },
            {
              prompt: "Come reagisce di solito il mercato quando il CPI esce sopra le attese?",
              options: [
                "Gli asset rischiosi tendono a scendere",
                "Il mercato non reagisce mai al CPI",
                "Il mercato crypto sospende automaticamente le negoziazioni",
              ],
              correctAnswer: "Gli asset rischiosi tendono a scendere",
            },
            {
              prompt: "Quale indicatore di inflazione è considerato il preferito dalla Fed stessa?",
              options: ["PCE", "DXY", "RSI"],
              correctAnswer: "PCE",
            },
          ],
        },
        {
          slug: "indeks-dollara-dxy",
          title: "L'indice del dollaro (DXY)",
          summary: "La correlazione inversa tra dollaro e criptovalute.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Il DXY misura la forza del dollaro statunitense rispetto a un paniere di altre valute. Storicamente, il DXY e il bitcoin si muovono spesso in controfase: un dollaro forte pesa sulle crypto e sugli altri asset rischiosi, un dollaro debole ne sostiene la crescita.",
            },
            {
              type: "paragraph",
              text: "I trader esperti tengono il grafico del DXY in un pannello separato insieme a quello del BTC: un brusco rialzo dell'indice del dollaro anticipa spesso una correzione sul mercato crypto ancora prima che questo sia visibile sul grafico del bitcoin stesso.",
            },
          ],
          questions: [
            {
              prompt: "Cosa misura l'indice DXY?",
              options: [
                "La forza del dollaro statunitense rispetto a un paniere di altre valute",
                "La volatilità del bitcoin",
                "La capitalizzazione totale del mercato crypto",
              ],
              correctAnswer: "La forza del dollaro statunitense rispetto a un paniere di altre valute",
            },
            {
              prompt: "Come sono di solito collegati i movimenti del DXY e del bitcoin?",
              options: [
                "Si muovono più spesso in direzioni opposte",
                "Si muovono sempre in perfetta sincronia",
                "Non sono in alcun modo collegati",
              ],
              correctAnswer: "Si muovono più spesso in direzioni opposte",
            },
            {
              prompt: "Cosa può anticipare un brusco rialzo dell'indice DXY?",
              options: [
                "Una probabile correzione sul mercato crypto",
                "Una crescita garantita del bitcoin",
                "Un guasto tecnico della borsa",
              ],
              correctAnswer: "Una probabile correzione sul mercato crypto",
            },
          ],
        },
        {
          slug: "korrelyatsiya-s-fondovym-rynkom",
          title: "Correlazione con il mercato azionario",
          summary: "Il legame tra bitcoin, l'indice Nasdaq e la propensione al rischio.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Negli ultimi anni il bitcoin si comporta sempre più spesso come un asset rischioso tecnologico piuttosto che come \"oro digitale\": il suo prezzo è spesso correlato all'indice Nasdaq. Quando gli investitori acquistano volentieri azioni tech, di solito anche il mercato crypto sale, e viceversa.",
            },
            {
              type: "paragraph",
              text: "Questa correlazione non è costante: durante eventi specifici del mondo crypto (hack di una borsa, notizie normative, un grande listing) il mercato crypto può muoversi in modo indipendente dalle azioni.",
            },
          ],
          questions: [
            {
              prompt: "Con quale classe di asset il bitcoin è più spesso correlato negli ultimi anni?",
              options: [
                "Con le azioni tecnologiche (Nasdaq)",
                "Con i titoli di stato",
                "Non è correlato a nulla",
              ],
              correctAnswer: "Con le azioni tecnologiche (Nasdaq)",
            },
            {
              prompt: "Cosa significa un'alta correlazione tra BTC e Nasdaq?",
              options: [
                "Si muovono più spesso nella stessa direzione",
                "Sono obbligati a muoversi in direzioni opposte",
                "Il BTC sostituisce completamente l'indice Nasdaq",
              ],
              correctAnswer: "Si muovono più spesso nella stessa direzione",
            },
            {
              prompt: "Cosa può indebolire temporaneamente la correlazione tra BTC e il mercato azionario?",
              options: [
                "Eventi specifici del mondo crypto (hack di una borsa, notizie normative)",
                "Un giorno di chiusura della borsa",
                "Il cambio di fuso orario",
              ],
              correctAnswer: "Eventi specifici del mondo crypto (hack di una borsa, notizie normative)",
            },
          ],
        },
        {
          slug: "ekonomicheskiy-kalendar",
          title: "Il calendario economico e le notizie",
          summary: "Quali eventi è indispensabile monitorare prima di aprire una posizione.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Il calendario economico è il programma di pubblicazione dei dati macroeconomici importanti: le riunioni della Fed, i report sull'inflazione (CPI), sul mercato del lavoro (NFP) e altri indicatori in grado di aumentare bruscamente la volatilità.",
            },
            {
              type: "paragraph",
              text: "Gli eventi nel calendario sono generalmente contrassegnati da un livello di impatto (alto/medio/basso). Prima delle pubblicazioni ad alto impatto, i trader esperti spesso riducono il rischio, restringono le posizioni o si astengono del tutto dall'aprire nuove operazioni: in questi momenti la volatilità può essere imprevedibile.",
            },
          ],
          questions: [
            {
              prompt: "A cosa serve il calendario economico per un trader?",
              options: [
                "A monitorare le date delle notizie importanti che influenzano il mercato",
                "A pianificare le ferie personali",
                "A sostituire completamente l'analisi tecnica",
              ],
              correctAnswer: "A monitorare le date delle notizie importanti che influenzano il mercato",
            },
            {
              prompt: "Cos'è l'NFP?",
              options: [
                "Il rapporto sull'occupazione non agricola negli Stati Uniti",
                "Un nuovo protocollo crittografico",
                "L'indice della paura e dell'avidità",
              ],
              correctAnswer: "Il rapporto sull'occupazione non agricola negli Stati Uniti",
            },
            {
              prompt: "Cosa è ragionevole fare prima della pubblicazione di una notizia ad alto impatto?",
              options: [
                "Ridurre il rischio o astenersi dall'aprire nuove operazioni",
                "Aumentare al massimo la dimensione della posizione",
                "Disattivare gli stop-loss",
              ],
              correctAnswer: "Ridurre il rischio o astenersi dall'aprire nuove operazioni",
            },
          ],
        },
      ],
    },
    {
      title: "Concetti Smart Money",
      lessons: [
        {
          slug: "imbalans-i-fvg",
          title: "Imbalance e Fair Value Gap (FVG)",
          summary: "Le zone di inefficienza del prezzo e come individuarle sul grafico.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'imbalance è una zona del grafico in cui il prezzo si è mosso troppo rapidamente in una direzione, senza dare a entrambe le parti (compratori e venditori) la possibilità di negoziare pienamente. Il mercato spesso \"torna a chiudere\" queste zone in un secondo momento.",
            },
            {
              type: "paragraph",
              text: "Il Fair Value Gap (FVG) è un caso particolare di imbalance formato da tre candele: tra l'ombra della prima e l'ombra della terza candela resta un gap visibile. È una delle zone di interesse più utilizzate negli Smart Money Concepts.",
            },
            { type: "diagram", diagram: "fvg", caption: "Un classico FVG rialzista su tre candele" },
            { type: "diagram", diagram: "imbalance", caption: "Una zona di imbalance più ampia su un'unica candela impulsiva" },
          ],
          questions: [
            {
              prompt: "Cos'è il Fair Value Gap (FVG)?",
              options: [
                "Il gap tra le ombre della 1ª e della 3ª candela causato da un impulso brusco",
                "Un livello di stop-loss",
                "Un indicatore di volume",
              ],
              correctAnswer: "Il gap tra le ombre della 1ª e della 3ª candela causato da un impulso brusco",
            },
            {
              prompt: "Cosa fa più spesso il mercato con una zona di imbalance in seguito?",
              options: [
                "Ci ritorna e la \"chiude\" parzialmente o completamente",
                "Non la tocca mai più",
                "La rimuove automaticamente dal grafico",
              ],
              correctAnswer: "Ci ritorna e la \"chiude\" parzialmente o completamente",
            },
            {
              prompt: "Da quante candele è composto il classico pattern FVG?",
              options: ["Da tre", "Da una", "Da sette"],
              correctAnswer: "Da tre",
            },
          ],
        },
        {
          slug: "likvidnost-na-rynke",
          title: "La liquidità e le sue tipologie",
          summary: "Dove si accumulano sul grafico gli ordini in sospeso dei grandi player.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La liquidità è l'accumulo di ordini in sospeso (stop-loss e ordini limite) su specifici livelli di prezzo. Si accumula più spesso oltre massimi/minimi uguali e livelli di supporto/resistenza evidenti, visibili a tutti.",
            },
            {
              type: "list",
              items: [
                "Liquidità buy-side — gli stop dei venditori allo scoperto (short) sopra i massimi locali",
                "Liquidità sell-side — gli stop dei compratori long sotto i minimi locali",
                "I grandi player hanno bisogno di liquidità per costruire o chiudere una posizione senza un forte slippage",
              ],
            },
          ],
          questions: [
            {
              prompt: "Dove si accumula più spesso la liquidità sul grafico?",
              options: [
                "Presso massimi/minimi uguali e livelli evidenti di supporto/resistenza",
                "Rigorosamente al centro del range, senza motivo",
                "Solo sulle candele legate alle notizie",
              ],
              correctAnswer: "Presso massimi/minimi uguali e livelli evidenti di supporto/resistenza",
            },
            {
              prompt: "Cos'è la liquidità buy-side?",
              options: [
                "Gli stop dei venditori allo scoperto, posizionati sopra i massimi locali",
                "Gli stop dei compratori long sotto i minimi locali",
                "La commissione della borsa sull'acquisto",
              ],
              correctAnswer: "Gli stop dei venditori allo scoperto, posizionati sopra i massimi locali",
            },
            {
              prompt: "Perché i grandi player hanno bisogno di liquidità sul mercato?",
              options: [
                "Per costruire o chiudere una grande posizione senza un forte slippage",
                "Per sospendere completamente le negoziazioni",
                "Non ha alcuna attinenza con i grandi player",
              ],
              correctAnswer: "Per costruire o chiudere una grande posizione senza un forte slippage",
            },
          ],
        },
        {
          slug: "snyatie-likvidnosti",
          title: "Il prelievo di liquidità (Liquidity Sweep)",
          summary: "Perché il prezzo prima colpisce gli stop e poi si inverte.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il Liquidity Sweep è la situazione in cui il prezzo perfora deliberatamente un livello con liquidità (per esempio massimi uguali), raccoglie gli ordini in sospeso e poi si inverte bruscamente nella direzione opposta — proprio quella verso cui era destinato fin dall'inizio il movimento principale.",
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "Perforazione di massimi uguali e brusca inversione al ribasso" },
            {
              type: "paragraph",
              text: "Comprendere lo sweep aiuta a non cadere nella trappola: la rottura di un livello, di per sé, non garantisce la continuazione del movimento in quella direzione — spesso si tratta solo di una caccia alla liquidità.",
            },
          ],
          questions: [
            {
              prompt: "Cosa succede solitamente al prezzo subito dopo un liquidity sweep?",
              options: [
                "Un'inversione brusca nella direzione opposta alla perforazione",
                "Il prezzo continua sempre nella direzione della perforazione",
                "Niente, il volume scende a zero",
              ],
              correctAnswer: "Un'inversione brusca nella direzione opposta alla perforazione",
            },
            {
              prompt: "Quale zona diventa più spesso il bersaglio di un liquidity sweep?",
              options: [
                "Una zona con ordini in sospeso — per esempio massimi/minimi uguali",
                "Il centro di un range casuale senza livelli",
                "Una zona con liquidità pari a zero",
              ],
              correctAnswer: "Una zona con ordini in sospeso — per esempio massimi/minimi uguali",
            },
            {
              prompt: "Quale errore è tipico dei principianti di fronte a uno sweep?",
              options: [
                "Entrare nella direzione della rottura senza considerare una possibile inversione",
                "Chiudere troppo presto una posizione in profitto",
                "Impostare lo stop-loss prima di entrare in posizione",
              ],
              correctAnswer: "Entrare nella direzione della rottura senza considerare una possibile inversione",
            },
          ],
        },
        {
          slug: "struktura-trenda-bos-choch",
          title: "La struttura del trend: BOS e CHoCH",
          summary: "Come capire dai massimi e dai minimi se il trend è ancora vivo o già rotto.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Un trend rialzista è composto da una sequenza di Higher High (HH) e Higher Low (HL). Finché questa struttura si mantiene, il trend è considerato attivo.",
            },
            {
              type: "paragraph",
              text: "Il Break of Structure (BOS) è la rottura del massimo precedente, che conferma la continuazione del trend. Il Change of Character (CHoCH) è una rottura nella direzione opposta, il primo segnale di una possibile inversione del trend.",
            },
            { type: "diagram", diagram: "trend-structure", caption: "Struttura HH/HL di un trend rialzista e BOS" },
          ],
          questions: [
            {
              prompt: "Cosa segnala il Change of Character (CHoCH)?",
              options: [
                "Una possibile inversione del trend in corso",
                "La continuazione del trend con un'accelerazione",
                "L'assenza di liquidità sul mercato",
              ],
              correctAnswer: "Una possibile inversione del trend in corso",
            },
            {
              prompt: "Cosa conferma il Break of Structure (BOS)?",
              options: [
                "La continuazione del trend in corso",
                "La sospensione automatica delle negoziazioni",
                "L'annullamento di tutti i livelli precedenti",
              ],
              correctAnswer: "La continuazione del trend in corso",
            },
            {
              prompt: "Da cosa è composta la struttura di un trend rialzista?",
              options: [
                "Da Higher High e Higher Low",
                "Da Lower High e Lower Low",
                "Da candele di altezza identica",
              ],
              correctAnswer: "Da Higher High e Higher Low",
            },
          ],
        },
        {
          slug: "order-bloki",
          title: "Gli order block",
          summary: "Le zone da cui i grandi player hanno innescato un forte movimento di prezzo.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'order block è l'ultima candela di direzione opposta prima di un forte movimento impulsivo del prezzo. Per esempio, l'ultima candela rossa prima di una salita brusca è considerata un order block rialzista: si presume che proprio lì i grandi player abbiano costruito la loro posizione.",
            },
            {
              type: "paragraph",
              text: "I trader utilizzano gli order block come potenziali zone di ingresso: se in futuro il prezzo torna in quella zona, ci si aspetta una reazione — la continuazione del movimento nella direzione originaria.",
            },
          ],
          questions: [
            {
              prompt: "Cos'è un order block?",
              options: [
                "L'ultima candela di direzione opposta prima di un forte movimento impulsivo",
                "Un indicatore del volume degli scambi",
                "Un tipo di ordine in borsa con esecuzione ritardata",
              ],
              correctAnswer: "L'ultima candela di direzione opposta prima di un forte movimento impulsivo",
            },
            {
              prompt: "Come utilizzano di solito i trader gli order block?",
              options: [
                "Come potenziali zone di ingresso quando il prezzo vi ritorna",
                "Come indicatore dell'inflazione",
                "Per calcolare la commissione della borsa",
              ],
              correctAnswer: "Come potenziali zone di ingresso quando il prezzo vi ritorna",
            },
            {
              prompt: "In cosa un order block rialzista si differenzia da uno ribassista?",
              options: [
                "Si forma prima di un impulso al rialzo, non al ribasso",
                "È sempre più grande per dimensione",
                "Compare solo sul timeframe giornaliero",
              ],
              correctAnswer: "Si forma prima di un impulso al rialzo, non al ribasso",
            },
          ],
        },
      ],
    },
  ],
};
