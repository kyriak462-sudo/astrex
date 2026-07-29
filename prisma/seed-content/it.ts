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
                "Il trading è accessibile solo alle banche",
                "Il trading prevede operazioni frequenti su orizzonti brevi",
                "Il trading non comporta alcun rischio",
              ],
              correctAnswer: "Il trading prevede operazioni frequenti su orizzonti brevi",
            },
            {
              prompt: "Chi, a differenza dell'investitore classico, può guadagnare anche dal calo del prezzo di un asset?",
              options: ["Solo i market maker", "Il trader che apre posizioni corte", "Solo le banche"],
              correctAnswer: "Il trader che apre posizioni corte",
            },
            {
              prompt: "Cosa garantiscono i market maker sul mercato?",
              options: ["Un tasso di cambio fisso dell'asset", "La regolamentazione statale", "La liquidità per le operazioni degli altri partecipanti"],
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
              options: ["È completamente regolamentato dallo stato", "Si negozia solo nei giorni feriali durante il giorno", "Opera 24/7 senza giorni festivi"],
              correctAnswer: "Opera 24/7 senza giorni festivi",
            },
            {
              prompt: "Cosa si negozia sul mercato Forex?",
              options: ["Azioni di aziende", "Materie prime", "Coppie di valute"],
              correctAnswer: "Coppie di valute",
            },
            {
              prompt: "Quale dei mercati elencati presenta solitamente la volatilità più alta?",
              options: ["Il mercato dei titoli di stato", "Il mercato delle criptovalute", "Le coppie di valute G7"],
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
              options: ["Il prezzo dell'asset", "Il numero di trader", "Il volume degli scambi"],
              correctAnswer: "Il prezzo dell'asset",
            },
            {
              prompt: "Cos'è un timeframe?",
              options: [
                "Il nome di una borsa",
                "Il periodo di tempo rappresentato da un singolo elemento del grafico",
                "Un tipo di ordine",
              ],
              correctAnswer: "Il periodo di tempo rappresentato da un singolo elemento del grafico",
            },
            {
              prompt: "Perché i trader analizzano più timeframe contemporaneamente?",
              options: [
                "Per vedere contemporaneamente il quadro generale del trend e il punto di ingresso preciso",
                "Per evitare le commissioni della borsa",
                "Non ha alcun senso pratico",
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
                "Il numero di partecipanti al mercato",
                "L'intervallo tra il prezzo di apertura e di chiusura",
                "Il volume massimo degli scambi",
              ],
              correctAnswer: "L'intervallo tra il prezzo di apertura e di chiusura",
            },
            {
              prompt: "Cosa mostrano le ombre (stoppini) della candela?",
              options: [
                "Il numero di operazioni al giorno",
                "L'intervallo di prezzo al di fuori del corpo — il massimo e il minimo del periodo",
                "Il volume medio degli scambi",
              ],
              correctAnswer: "L'intervallo di prezzo al di fuori del corpo — il massimo e il minimo del periodo",
            },
            {
              prompt: "Cosa può indicare una lunga ombra inferiore dopo un calo di prezzo?",
              options: [
                "Il volume degli scambi era pari a zero",
                "I compratori hanno riacquistato attivamente dal basso — è possibile un'inversione",
                "Il mercato continuerà sicuramente a scendere",
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
                "La commissione su un'operazione",
                "Il prezzo al quale i compratori hanno storicamente fermato un calo",
                "Il prezzo di apertura della borsa",
              ],
              correctAnswer: "Il prezzo al quale i compratori hanno storicamente fermato un calo",
            },
            {
              prompt: "Cosa succede solitamente a un livello di resistenza dopo la sua rottura al rialzo?",
              options: [
                "Il prezzo è obbligato a tornare indietro immediatamente",
                "Scompare e non influenza più il prezzo",
                "Diventa spesso un nuovo supporto",
              ],
              correctAnswer: "Diventa spesso un nuovo supporto",
            },
            {
              prompt: "Come si costruiscono correttamente livelli affidabili sul grafico?",
              options: [
                "In base a più contatti del prezzo, non a un solo punto",
                "Solo sul timeframe a un minuto",
                "Rigorosamente al centro del grafico",
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
                "Solo da candele verdi consecutive",
                "Da una sequenza di massimi e minimi crescenti",
                "Da candele di altezza identica",
              ],
              correctAnswer: "Da una sequenza di massimi e minimi crescenti",
            },
            {
              prompt: "Cos'è un trend laterale (flat)?",
              options: [
                "Un brusco calo del prezzo",
                "Il movimento del prezzo in un range senza una direzione chiara",
                "Un periodo di sospensione delle negoziazioni in borsa",
              ],
              correctAnswer: "Il movimento del prezzo in un range senza una direzione chiara",
            },
            {
              prompt: "Perché si dice che \"il trend è tuo amico\"?",
              options: [
                "È solo un modo di dire senza alcun senso pratico",
                "Il trend non cambia mai direzione",
                "Fare trading nella direzione del trend offre statisticamente più possibilità di successo",
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
                "È il segnale d'ingresso più affidabile",
                "La liquidità dell'asset è massima",
                "Il movimento è debole e potrebbe non essere confermato",
              ],
              correctAnswer: "Il movimento è debole e potrebbe non essere confermato",
            },
            {
              prompt: "Cos'è la liquidità del mercato?",
              options: [
                "La facilità di comprare/vendere un asset senza influenzarne significativamente il prezzo",
                "La commissione della borsa su un'operazione",
                "Il numero totale di monete in circolazione",
              ],
              correctAnswer: "La facilità di comprare/vendere un asset senza influenzarne significativamente il prezzo",
            },
            {
              prompt: "Cosa rischia un trader quando opera con un asset a bassa liquidità?",
              options: [
                "Un profitto garantito",
                "Un forte slippage nell'esecuzione dell'operazione",
                "L'assenza totale di commissioni",
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
                "A garantire un profitto",
                "Ad aumentare la dimensione della posizione",
                "A limitare in anticipo la perdita su un'operazione",
              ],
              correctAnswer: "A limitare in anticipo la perdita su un'operazione",
            },
            {
              prompt: "Quale percentuale del deposito si consiglia solitamente di rischiare in una singola operazione?",
              options: ["25–30%", "L'intero deposito", "1–2%"],
              correctAnswer: "1–2%",
            },
            {
              prompt: "Cosa significa un rapporto rischio/rendimento di 1:3?",
              options: [
                "L'operazione si chiuderà dopo 3 ore",
                "Il rischio è 3 volte superiore al profitto",
                "Il profitto potenziale è 3 volte superiore al rischio",
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
                "Non c'è differenza, sono la stessa cosa",
                "La EMA attribuisce più peso ai prezzi più recenti",
                "La SMA funziona solo sul grafico a un minuto",
              ],
              correctAnswer: "La EMA attribuisce più peso ai prezzi più recenti",
            },
            {
              prompt: "Cosa indica il fatto che il prezzo si trovi sopra la media mobile?",
              options: ["Il trend è probabilmente rialzista", "Il volume degli scambi è pari a zero", "L'asset è sicuramente sopravvalutato"],
              correctAnswer: "Il trend è probabilmente rialzista",
            },
            {
              prompt: "Cosa si intende per \"golden cross\"?",
              options: [
                "Il momento del listing di una nuova moneta",
                "L'incrocio del prezzo con la linea dello zero",
                "L'incrocio di una MA corta sopra una lunga — un segnale rialzista",
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
              options: ["Da -1 a 1", "Da 0 a 100", "Da 0 a 10000"],
              correctAnswer: "Da 0 a 100",
            },
            {
              prompt: "Cosa significa solitamente un RSI superiore a 70?",
              options: ["Il volume degli scambi è sceso a zero", "L'asset non può essere venduto", "L'asset si trova in zona di ipercomprato"],
              correctAnswer: "L'asset si trova in zona di ipercomprato",
            },
            {
              prompt: "Cos'è la divergenza dell'RSI?",
              options: [
                "Un malfunzionamento tecnico dell'indicatore",
                "Il prezzo e l'indicatore si muovono in direzioni opposte — un segnale di possibile inversione",
                "La perfetta coincidenza tra il movimento del prezzo e quello dell'indicatore",
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
              options: ["61,8%", "100%", "10%"],
              correctAnswer: "61,8%",
            },
            {
              prompt: "A cosa servono i ritracciamenti di Fibonacci?",
              options: [
                "A individuare punti di ingresso durante un ritracciamento all'interno del trend",
                "A determinare l'orario esatto di pubblicazione delle notizie",
                "A calcolare la commissione della borsa",
              ],
              correctAnswer: "A individuare punti di ingresso durante un ritracciamento all'interno del trend",
            },
            {
              prompt: "A cosa servono le estensioni di Fibonacci?",
              options: [
                "A mostrare il volume degli scambi",
                "A determinare la dimensione dello stop-loss in percentuale",
                "A determinare gli obiettivi di prezzo oltre l'impulso",
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
                "La sospensione delle negoziazioni in borsa",
                "Una prosecuzione garantita della salita",
              ],
              correctAnswer: "Una probabile inversione del trend rialzista",
            },
            {
              prompt: "Cosa conferma la validità del pattern \"doppio massimo\"?",
              options: ["La comparsa di un terzo picco", "La rottura della linea del collo verso il basso", "L'aumento del volume proprio sul massimo"],
              correctAnswer: "La rottura della linea del collo verso il basso",
            },
            {
              prompt: "Perché il volume è importante per confermare la rottura di un pattern?",
              options: [
                "Il volume serve solo sul timeframe giornaliero",
                "Senza volume, la rottura si rivela più spesso falsa",
                "Il volume non influenza affatto i pattern",
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
              options: ["Sempre rigorosamente verso il basso", "Nella direzione del trend precedente", "In una direzione casuale"],
              correctAnswer: "Nella direzione del trend precedente",
            },
            {
              prompt: "Cosa hanno in comune triangoli, bandiere e rettangoli?",
              options: [
                "Sono sempre segnali di inversione",
                "Si presentano solo sul forex",
                "Sono pause/consolidazioni all'interno del trend",
              ],
              correctAnswer: "Sono pause/consolidazioni all'interno del trend",
            },
            {
              prompt: "Cosa accompagna più spesso una rottura reale da un triangolo?",
              options: ["Un picco di volume", "La sospensione delle negoziazioni", "L'assenza totale di volume"],
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
              options: ["Da uno qualsiasi, a caso", "Da quello più ampio (per esempio giornaliero)", "Da quello a un minuto"],
              correctAnswer: "Da quello più ampio (per esempio giornaliero)",
            },
            {
              prompt: "A cosa serve il timeframe più piccolo nell'analisi multi-timeframe?",
              options: ["Per un ingresso preciso nell'operazione", "Per calcolare la commissione della borsa", "Per sostituire completamente il timeframe più ampio"],
              correctAnswer: "Per un ingresso preciso nell'operazione",
            },
            {
              prompt: "Cosa può accadere ignorando il timeframe più ampio?",
              options: [
                "Un aumento automatico del profitto",
                "Niente, non ha alcuna importanza",
                "Fare trading contro il trend principale",
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
                "Il rimborso della commissione da parte della borsa",
                "Il tentativo di recuperare immediatamente una perdita con operazioni emotive",
                "Una strategia ufficiale degli hedge fund",
              ],
              correctAnswer: "Il tentativo di recuperare immediatamente una perdita con operazioni emotive",
            },
            {
              prompt: "Perché un trader dovrebbe tenere un diario di trading?",
              options: [
                "Per analizzare gli errori e migliorare la strategia",
                "Per ridurre le tasse",
                "È un obbligo imposto dalla borsa",
              ],
              correctAnswer: "Per analizzare gli errori e migliorare la strategia",
            },
            {
              prompt: "Quale emozione porta più spesso a mantenere troppo a lungo una posizione in perdita?",
              options: ["La noia", "La fiducia nella correttezza della borsa", "La speranza in un'inversione e la paura di realizzare la perdita"],
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
                "Solo il punto di ingresso",
                "Il punto di ingresso, lo stop-loss e l'obiettivo di profitto",
                "Non è necessario definire nulla in anticipo",
              ],
              correctAnswer: "Il punto di ingresso, lo stop-loss e l'obiettivo di profitto",
            },
            {
              prompt: "Perché conviene esercitarsi prima su un saldo virtuale?",
              options: [
                "Il saldo virtuale genera più profitto",
                "È un obbligo di legge",
                "Per allenare la strategia senza rischiare denaro reale",
              ],
              correctAnswer: "Per allenare la strategia senza rischiare denaro reale",
            },
            {
              prompt: "Cosa è importante fare subito dopo aver chiuso una posizione?",
              options: [
                "Analizzarla e annotare il risultato nel diario",
                "Cancellare la cronologia dell'operazione",
                "Aprire immediatamente una posizione opposta",
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
                "Il bitcoin sale sempre quando il tasso viene alzato",
                "Il mercato crypto non reagisce affatto al tasso",
                "Gli asset rischiosi (crypto inclusa) tendono a scendere",
              ],
              correctAnswer: "Gli asset rischiosi (crypto inclusa) tendono a scendere",
            },
            {
              prompt: "Cos'è il FOMC?",
              options: [
                "La più grande borsa crypto degli Stati Uniti",
                "Il comitato della Fed che decide sul tasso di interesse",
                "Un indice di volatilità del mercato",
              ],
              correctAnswer: "Il comitato della Fed che decide sul tasso di interesse",
            },
            {
              prompt: "Come si chiama, nel gergo di mercato, un allentamento della politica monetaria?",
              options: ["Emissione \"neutrale\"", "Politica \"hawkish\"", "Politica \"dovish\""],
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
                "Il volume degli scambi in borsa",
                "La variazione dei prezzi di un paniere di beni e servizi al consumo",
                "Il tasso di cambio del bitcoin rispetto al dollaro",
              ],
              correctAnswer: "La variazione dei prezzi di un paniere di beni e servizi al consumo",
            },
            {
              prompt: "Come reagisce di solito il mercato quando il CPI esce sopra le attese?",
              options: [
                "Il mercato crypto sospende automaticamente le negoziazioni",
                "Il mercato non reagisce mai al CPI",
                "Gli asset rischiosi tendono a scendere",
              ],
              correctAnswer: "Gli asset rischiosi tendono a scendere",
            },
            {
              prompt: "Quale indicatore di inflazione è considerato il preferito dalla Fed stessa?",
              options: ["RSI", "PCE", "DXY"],
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
                "La capitalizzazione totale del mercato crypto",
                "La volatilità del bitcoin",
              ],
              correctAnswer: "La forza del dollaro statunitense rispetto a un paniere di altre valute",
            },
            {
              prompt: "Come sono di solito collegati i movimenti del DXY e del bitcoin?",
              options: [
                "Si muovono più spesso in direzioni opposte",
                "Non sono in alcun modo collegati",
                "Si muovono sempre in perfetta sincronia",
              ],
              correctAnswer: "Si muovono più spesso in direzioni opposte",
            },
            {
              prompt: "Cosa può anticipare un brusco rialzo dell'indice DXY?",
              options: [
                "Una crescita garantita del bitcoin",
                "Una probabile correzione sul mercato crypto",
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
                "Con i titoli di stato",
                "Con le azioni tecnologiche (Nasdaq)",
                "Non è correlato a nulla",
              ],
              correctAnswer: "Con le azioni tecnologiche (Nasdaq)",
            },
            {
              prompt: "Cosa significa un'alta correlazione tra BTC e Nasdaq?",
              options: [
                "Il BTC sostituisce completamente l'indice Nasdaq",
                "Sono obbligati a muoversi in direzioni opposte",
                "Si muovono più spesso nella stessa direzione",
              ],
              correctAnswer: "Si muovono più spesso nella stessa direzione",
            },
            {
              prompt: "Cosa può indebolire temporaneamente la correlazione tra BTC e il mercato azionario?",
              options: [
                "Il cambio di fuso orario",
                "Eventi specifici del mondo crypto (hack di una borsa, notizie normative)",
                "Un giorno di chiusura della borsa",
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
                "A pianificare le ferie personali",
                "A monitorare le date delle notizie importanti che influenzano il mercato",
                "A sostituire completamente l'analisi tecnica",
              ],
              correctAnswer: "A monitorare le date delle notizie importanti che influenzano il mercato",
            },
            {
              prompt: "Cos'è l'NFP?",
              options: [
                "L'indice della paura e dell'avidità",
                "Un nuovo protocollo crittografico",
                "Il rapporto sull'occupazione non agricola negli Stati Uniti",
              ],
              correctAnswer: "Il rapporto sull'occupazione non agricola negli Stati Uniti",
            },
            {
              prompt: "Cosa è ragionevole fare prima della pubblicazione di una notizia ad alto impatto?",
              options: [
                "Aumentare al massimo la dimensione della posizione",
                "Ridurre il rischio o astenersi dall'aprire nuove operazioni",
                "Disattivare gli stop-loss",
              ],
              correctAnswer: "Ridurre il rischio o astenersi dall'aprire nuove operazioni",
            },
          ],
        },
        {
          slug: "etf",
          title: "ETF",
          summary: "Cos'è un fondo negoziato in borsa e perché le approvazioni di ETF crypto muovono il mercato.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Un ETF (Exchange-Traded Fund, fondo negoziato in borsa) è uno strumento finanziario che viene scambiato in borsa come un'azione ordinaria, ma che replica il valore di un'attività sottostante o di un paniere di attività. Un ETF crypto spot consente agli investitori di ottenere un'esposizione al prezzo di un'attività, come il bitcoin, senza doverla acquistare o custodire direttamente — è la società di gestione del fondo a detenere l'attività sottostante.",
            },
            {
              type: "paragraph",
              text: "L'approvazione da parte dei regolatori (ad esempio la SEC negli Stati Uniti) di ETF spot su bitcoin o ethereum è considerata un evento di mercato significativo: apre l'accesso all'attività a investitori istituzionali e retail per i quali detenere direttamente criptovalute è scomodo o vietato. I trader usano gli afflussi e i deflussi giornalieri di capitale in questi ETF come indicatore della domanda istituzionale.",
            },
            {
              type: "list",
              items: [
                "Un ETF replica il valore di un'attività sottostante, ma viene scambiato come un'azione ordinaria su una borsa tradizionale",
                "Un ETF spot implica che la società di gestione detenga realmente l'attività sottostante",
                "Gli afflussi e i deflussi giornalieri negli ETF crypto vengono usati come indicatore della domanda istituzionale",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cos'è un ETF?",
              options: [
                "Un tipo di portafoglio di criptovalute",
                "Un protocollo di consenso blockchain",
                "Uno strumento finanziario che viene scambiato come un'azione e replica il valore di un'attività sottostante",
              ],
              correctAnswer: "Uno strumento finanziario che viene scambiato come un'azione e replica il valore di un'attività sottostante",
            },
            {
              prompt: "Cosa offre a un investitore un ETF crypto spot?",
              options: [
                "Esposizione al prezzo di un'attività senza doverla acquistare e custodire da solo",
                "Un rendimento fisso garantito",
                "Diritto di voto nella governance di una blockchain",
              ],
              correctAnswer: "Esposizione al prezzo di un'attività senza doverla acquistare e custodire da solo",
            },
            {
              prompt: "Come usano i trader i dati di afflusso/deflusso degli ETF crypto?",
              options: [
                "Come indicatore della domanda istituzionale per l'attività",
                "Come sostituto dell'analisi di volume e volatilità",
                "Come previsione esatta del prezzo del giorno successivo",
              ],
              correctAnswer: "Come indicatore della domanda istituzionale per l'attività",
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
                "Un indicatore di volume",
                "Un livello di stop-loss",
              ],
              correctAnswer: "Il gap tra le ombre della 1ª e della 3ª candela causato da un impulso brusco",
            },
            {
              prompt: "Cosa fa più spesso il mercato con una zona di imbalance in seguito?",
              options: [
                "Ci ritorna e la \"chiude\" parzialmente o completamente",
                "La rimuove automaticamente dal grafico",
                "Non la tocca mai più",
              ],
              correctAnswer: "Ci ritorna e la \"chiude\" parzialmente o completamente",
            },
            {
              prompt: "Da quante candele è composto il classico pattern FVG?",
              options: ["Da una", "Da sette", "Da tre"],
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
                "Solo sulle candele legate alle notizie",
                "Presso massimi/minimi uguali e livelli evidenti di supporto/resistenza",
                "Rigorosamente al centro del range, senza motivo",
              ],
              correctAnswer: "Presso massimi/minimi uguali e livelli evidenti di supporto/resistenza",
            },
            {
              prompt: "Cos'è la liquidità buy-side?",
              options: [
                "La commissione della borsa sull'acquisto",
                "Gli stop dei compratori long sotto i minimi locali",
                "Gli stop dei venditori allo scoperto, posizionati sopra i massimi locali",
              ],
              correctAnswer: "Gli stop dei venditori allo scoperto, posizionati sopra i massimi locali",
            },
            {
              prompt: "Perché i grandi player hanno bisogno di liquidità sul mercato?",
              options: [
                "Per costruire o chiudere una grande posizione senza un forte slippage",
                "Non ha alcuna attinenza con i grandi player",
                "Per sospendere completamente le negoziazioni",
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
                "Niente, il volume scende a zero",
                "Il prezzo continua sempre nella direzione della perforazione",
              ],
              correctAnswer: "Un'inversione brusca nella direzione opposta alla perforazione",
            },
            {
              prompt: "Quale zona diventa più spesso il bersaglio di un liquidity sweep?",
              options: [
                "Una zona con liquidità pari a zero",
                "Il centro di un range casuale senza livelli",
                "Una zona con ordini in sospeso — per esempio massimi/minimi uguali",
              ],
              correctAnswer: "Una zona con ordini in sospeso — per esempio massimi/minimi uguali",
            },
            {
              prompt: "Quale errore è tipico dei principianti di fronte a uno sweep?",
              options: [
                "Impostare lo stop-loss prima di entrare in posizione",
                "Entrare nella direzione della rottura senza considerare una possibile inversione",
                "Chiudere troppo presto una posizione in profitto",
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
                "La continuazione del trend con un'accelerazione",
                "L'assenza di liquidità sul mercato",
                "Una possibile inversione del trend in corso",
              ],
              correctAnswer: "Una possibile inversione del trend in corso",
            },
            {
              prompt: "Cosa conferma il Break of Structure (BOS)?",
              options: [
                "La sospensione automatica delle negoziazioni",
                "L'annullamento di tutti i livelli precedenti",
                "La continuazione del trend in corso",
              ],
              correctAnswer: "La continuazione del trend in corso",
            },
            {
              prompt: "Da cosa è composta la struttura di un trend rialzista?",
              options: [
                "Da candele di altezza identica",
                "Da Lower High e Lower Low",
                "Da Higher High e Higher Low",
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
                "Un indicatore del volume degli scambi",
                "Un tipo di ordine in borsa con esecuzione ritardata",
                "L'ultima candela di direzione opposta prima di un forte movimento impulsivo",
              ],
              correctAnswer: "L'ultima candela di direzione opposta prima di un forte movimento impulsivo",
            },
            {
              prompt: "Come utilizzano di solito i trader gli order block?",
              options: [
                "Per calcolare la commissione della borsa",
                "Come potenziali zone di ingresso quando il prezzo vi ritorna",
                "Come indicatore dell'inflazione",
              ],
              correctAnswer: "Come potenziali zone di ingresso quando il prezzo vi ritorna",
            },
            {
              prompt: "In cosa un order block rialzista si differenzia da uno ribassista?",
              options: [
                "Compare solo sul timeframe giornaliero",
                "Si forma prima di un impulso al rialzo, non al ribasso",
                "È sempre più grande per dimensione",
              ],
              correctAnswer: "Si forma prima di un impulso al rialzo, non al ribasso",
            },
          ],
        },
      ],
    },
    {
      title: "Gestione del rischio",
      lessons: [
        {
          slug: "risk-reward",
          title: "Risk/Reward",
          summary: "Il rapporto tra rischio e profitto, e perché è più importante della percentuale di operazioni vincenti.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il Risk/Reward (R/R) è il rapporto tra la perdita potenziale e il profitto potenziale di un'operazione. Se rischi 100$ per guadagnarne 300$, il tuo R/R è 1:3. È una delle metriche chiave che determina se un sistema di trading sarà redditizio nel lungo periodo.",
            },
            {
              type: "paragraph",
              text: "Anche un sistema con una bassa percentuale di operazioni vincenti può essere redditizio se l'R/R medio è sufficientemente alto. Per esempio, con un R/R di 1:3 basta avere ragione solo nel 30% dei casi per essere in profitto. Proprio per questo i trader esperti si concentrano non sulla percentuale di previsioni corrette, ma sull'aspettativa matematica dell'operazione.",
            },
            {
              type: "list",
              items: [
                "Il R/R si calcola prima di entrare in un'operazione, non dopo",
                "Più alto è l'R/R, più basso può essere il winrate richiesto",
                "Un buon R/R non garantisce il profitto senza disciplina nell'esecuzione",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa significa un rapporto Risk/Reward di 1:3?",
              options: [
                "Bisogna aprire 3 operazioni di seguito",
                "Il profitto potenziale è 3 volte maggiore del rischio potenziale",
                "L'operazione si chiude dopo 3 ore",
              ],
              correctAnswer: "Il profitto potenziale è 3 volte maggiore del rischio potenziale",
            },
            {
              prompt: "Perché un sistema con R/R 1:3 può essere redditizio anche con un winrate del 40%?",
              options: [
                "Il profitto delle operazioni vincenti compensa le perdite di quelle perdenti",
                "Perché le commissioni dell'exchange diminuiscono",
                "Perché il 40% è sempre superiore al 33%",
              ],
              correctAnswer: "Il profitto delle operazioni vincenti compensa le perdite di quelle perdenti",
            },
            {
              prompt: "Quando dovrebbe un trader calcolare il Risk/Reward di un'operazione?",
              options: [
                "Prima di entrare nell'operazione",
                "Non è necessario calcolare l'R/R",
                "Solo dopo aver chiuso l'operazione",
              ],
              correctAnswer: "Prima di entrare nell'operazione",
            },
          ],
        },
        {
          slug: "razmer-pozitsii",
          title: "Dimensione della posizione",
          summary: "Come calcolare il volume dell'operazione in base al rischio sul deposito, non al profitto desiderato.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La dimensione della posizione (position sizing) è la quantità di capitale che investi in una specifica operazione. Non dovrebbe essere determinata dal profitto desiderato, ma dal rischio accettabile: di norma i trader rischiano non più dell'1-2% del deposito per singola operazione, indipendentemente da quanto un setup sembri promettente.",
            },
            {
              type: "paragraph",
              text: "La formula è semplice: dimensione della posizione = (deposito × percentuale di rischio) / distanza dello stop-loss in percentuale. Questo approccio tiene automaticamente conto della volatilità dell'asset e della distanza dello stop: più ampio è lo stop, minore è il volume della posizione a parità di rischio in dollari.",
            },
            {
              type: "list",
              items: [
                "Una percentuale di rischio fissa protegge il deposito da una serie di operazioni in perdita",
                "Il volume della posizione deve diminuire se lo stop-loss è posizionato lontano",
                "L'uso della leva finanziaria aumenta il volume, ma non elimina il calcolo del rischio",
              ],
            },
          ],
          questions: [
            {
              prompt: "Da cosa dovrebbe dipendere in primo luogo la dimensione della posizione?",
              options: [
                "Da quanti soldi ci sono sulla carta",
                "Dall'umore del trader",
                "Dal rischio accettabile in percentuale del deposito",
              ],
              correctAnswer: "Dal rischio accettabile in percentuale del deposito",
            },
            {
              prompt: "Cosa succede alla dimensione della posizione se lo stop-loss viene posizionato più lontano dal prezzo di ingresso?",
              options: [
                "Il volume della posizione deve diminuire a parità di rischio in dollari",
                "Il volume della posizione non è collegato alla distanza dello stop",
                "Il volume della posizione deve aumentare",
              ],
              correctAnswer: "Il volume della posizione deve diminuire a parità di rischio in dollari",
            },
            {
              prompt: "Quale percentuale del deposito si consiglia di solito di rischiare in una singola operazione?",
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
          title: "Stop Loss",
          summary: "A cosa serve lo stop-loss, dove posizionarlo correttamente e quali errori si commettono più spesso.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Lo stop-loss è un livello di prezzo prestabilito al raggiungimento del quale l'operazione si chiude automaticamente in perdita. È il principale strumento di protezione del capitale: limita le perdite a una somma nota in anticipo, invece di lasciarle crescere in modo incontrollato.",
            },
            {
              type: "paragraph",
              text: "Lo stop-loss va impostato in base alla struttura del mercato — oltre il livello di supporto, resistenza o l'estremo della candela più vicini — e non in base alla somma che il trader è disposto a perdere. Uno stop troppo stretto fa uscire dall'operazione per il normale rumore di mercato, uno troppo ampio aumenta il rischio sulla posizione.",
            },
            {
              type: "list",
              items: [
                "Lo stop-loss protegge da decisioni emotive nei momenti di ribasso",
                "Il livello dello stop deve basarsi sulla struttura del grafico, non sulla somma di perdita desiderata",
                "Spostare lo stop più lontano dal prezzo durante un ribasso è uno degli errori più comuni dei principianti",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual è la funzione principale dello stop-loss?",
              options: [
                "Raddoppiare automaticamente la posizione",
                "Aumentare il profitto dell'operazione",
                "Limitare la perdita a una somma nota in anticipo",
              ],
              correctAnswer: "Limitare la perdita a una somma nota in anticipo",
            },
            {
              prompt: "Su cosa è più corretto basarsi per determinare il livello dello stop-loss?",
              options: [
                "Su un numero casuale",
                "Sulla somma di profitto desiderata",
                "Sulla struttura del mercato (livelli di supporto/resistenza)",
              ],
              correctAnswer: "Sulla struttura del mercato (livelli di supporto/resistenza)",
            },
            {
              prompt: "Quale errore è tipico dei principianti durante un ribasso dell'operazione?",
              options: [
                "Spostare lo stop-loss più lontano dal prezzo per \"dare più possibilità all'operazione\"",
                "Calcolare il rischio prima dell'ingresso",
                "Chiudere l'operazione esattamente allo stop",
              ],
              correctAnswer: "Spostare lo stop-loss più lontano dal prezzo per \"dare più possibilità all'operazione\"",
            },
          ],
        },
        {
          slug: "take-profit",
          title: "Take Profit",
          summary: "Come impostare gli obiettivi di profitto e quando conviene usare la chiusura parziale della posizione.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il Take Profit (TP) è un livello prestabilito al quale l'operazione si chiude automaticamente in profitto. Come lo stop-loss, dovrebbe essere determinato dalla logica del mercato — il livello di resistenza, supporto o zona di liquidità più vicini — e non dal desiderio arbitrario di guadagnare una somma specifica.",
            },
            {
              type: "paragraph",
              text: "Molti trader utilizzano la chiusura parziale: fissano una parte della posizione al primo obiettivo e lasciano che il resto continui a muoversi con lo stop spostato in pareggio (breakeven). Questo permette di fissare il profitto e allo stesso tempo di non uscire troppo presto dall'operazione se il movimento continua.",
            },
            {
              type: "list",
              items: [
                "Il TP, come lo stop, deve essere impostato in base alla struttura del grafico",
                "La chiusura parziale riduce la pressione psicologica durante l'operazione",
                "Spostare lo stop in pareggio dopo il primo obiettivo protegge il profitto già ottenuto",
              ],
            },
          ],
          questions: [
            {
              prompt: "Su cosa dovrebbe basarsi il livello del Take Profit?",
              options: [
                "Sul numero di ore trascorse nell'operazione",
                "Sulla struttura del grafico: livelli di resistenza, supporto o liquidità",
                "Su un numero casuale che piace al trader",
              ],
              correctAnswer: "Sulla struttura del grafico: livelli di resistenza, supporto o liquidità",
            },
            {
              prompt: "Perché i trader utilizzano la chiusura parziale della posizione?",
              options: [
                "Per chiudere obbligatoriamente l'operazione in perdita",
                "Per aumentare la commissione dell'exchange",
                "Per fissare parte del profitto e lasciare che il resto continui a muoversi",
              ],
              correctAnswer: "Per fissare parte del profitto e lasciare che il resto continui a muoversi",
            },
            {
              prompt: "Cosa si fa di solito con lo stop-loss dopo aver raggiunto il primo obiettivo di profitto?",
              options: [
                "Lo si rimuove completamente",
                "Lo si sposta più lontano dal prezzo",
                "Lo si sposta in pareggio, per proteggere il profitto ottenuto",
              ],
              correctAnswer: "Lo si sposta in pareggio, per proteggere il profitto ottenuto",
            },
          ],
        },
        {
          slug: "psihologiya-ubytkov",
          title: "La psicologia delle perdite",
          summary: "Come le operazioni in perdita influenzano le decisioni del trader e perché è importante accettare le perdite con calma.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le perdite sono una parte inevitabile del trading: anche un sistema redditizio perde regolarmente denaro su singole operazioni. Il problema non è la perdita in sé, ma la reazione ad essa — il tentativo di \"rifarsi\" immediatamente con un volume maggiore, o il rifiuto di chiudere l'operazione allo stop nella speranza di un'inversione.",
            },
            {
              type: "paragraph",
              text: "Un trader che considera ogni perdita come un costo statistico previsto del sistema, e non come un fallimento personale, prende decisioni più razionali. Tenere un diario di trading e definire in anticipo il rischio per operazione aiuta a separare le emozioni dal processo.",
            },
            {
              type: "list",
              items: [
                "Una serie di perdite è una parte normale anche di un sistema di trading redditizio",
                "Il tentativo di \"rifarsi\" dopo una perdita di solito aumenta il rischio, non il profitto",
                "Un rischio per operazione definito in anticipo riduce la pressione emotiva nel momento della perdita",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual è il modo più corretto di percepire una singola perdita nel trading?",
              options: [
                "Come un motivo per smettere di tenere il diario di trading",
                "Come un costo statistico previsto del sistema di trading",
                "Come un segno che bisogna raddoppiare immediatamente il volume dell'operazione successiva",
              ],
              correctAnswer: "Come un costo statistico previsto del sistema di trading",
            },
            {
              prompt: "A cosa porta più spesso il tentativo di \"rifarsi\" subito dopo una perdita?",
              options: [
                "All'annullamento automatico dell'operazione precedente",
                "A un aumento del rischio e a nuove perdite",
                "A un profitto garantito",
              ],
              correctAnswer: "A un aumento del rischio e a nuove perdite",
            },
            {
              prompt: "Cosa aiuta il trader a separare le emozioni dalle decisioni di trading?",
              options: [
                "L'aumento della leva dopo ogni perdita",
                "Il completo abbandono dell'analisi delle operazioni",
                "Un rischio per operazione definito in anticipo e la tenuta di un diario",
              ],
              correctAnswer: "Un rischio per operazione definito in anticipo e la tenuta di un diario",
            },
          ],
        },
      ],
    },
    {
      title: "La psicologia del trader",
      lessons: [
        {
          slug: "fomo",
          title: "FOMO",
          summary: "La paura di perdere un movimento e perché spinge a entrare in operazione nel momento peggiore.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il FOMO (Fear Of Missing Out) è la paura di perdere un movimento di prezzo redditizio. Sorge quando un asset sale bruscamente e il trader vede che gli altri stanno \"guadagnando\", mentre lui no. Sotto l'influenza del FOMO le operazioni vengono spesso aperte senza un piano, al culmine del movimento, senza considerare il rischio.",
            },
            {
              type: "paragraph",
              text: "Il problema del FOMO è che l'ingresso avviene proprio quando il movimento si è già in gran parte realizzato e il rischio di un'inversione è massimo. Un trader disciplinato si attiene a condizioni di ingresso definite in anticipo e lascia perdere il movimento se non corrisponde alla sua strategia.",
            },
            {
              type: "list",
              items: [
                "Il FOMO spinge più spesso a entrare dopo un movimento di prezzo già forte",
                "Le decisioni prese per FOMO sono di solito prese senza stop-loss e senza calcolo del rischio",
                "Un piano dell'operazione scritto in anticipo riduce l'influenza del FOMO",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cos'è il FOMO nel trading?",
              options: [
                "Un indicatore tecnico del volume",
                "La paura di perdere un movimento di prezzo redditizio",
                "Un tipo di ordine in borsa",
              ],
              correctAnswer: "La paura di perdere un movimento di prezzo redditizio",
            },
            {
              prompt: "In quale fase del movimento di prezzo un trader entra più spesso in operazione sotto l'influenza del FOMO?",
              options: [
                "All'inizio stesso del movimento",
                "Verso la fine del movimento, quando il rischio di inversione è già alto",
                "Prima ancora che il movimento sia iniziato",
              ],
              correctAnswer: "Verso la fine del movimento, quando il rischio di inversione è già alto",
            },
            {
              prompt: "Cosa aiuta a ridurre l'influenza del FOMO sulle decisioni del trader?",
              options: [
                "Il monitoraggio costante delle operazioni redditizie altrui",
                "L'aumento della leva nel momento di una forte crescita",
                "Un piano e delle condizioni di ingresso definiti in anticipo",
              ],
              correctAnswer: "Un piano e delle condizioni di ingresso definiti in anticipo",
            },
          ],
        },
        {
          slug: "zhadnost",
          title: "Avidità",
          summary: "Come l'avidità spinge a mantenere un'operazione redditizia più a lungo del previsto e a trasformare il profitto in perdita.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'avidità nel trading si manifesta come il desiderio di ottenere dall'operazione più profitto di quanto previsto dal piano iniziale: non chiudere la posizione all'obiettivo prefissato, aumentare il volume dopo una serie di operazioni vincenti o annullare il Take Profit impostato in anticipo.",
            },
            {
              type: "paragraph",
              text: "Più spesso l'avidità porta a far invertire un'operazione redditizia, che finisce per chiudersi allo stop o in pareggio, anche se avrebbe potuto essere fissata con un buon risultato. La disciplina nel rispettare il piano definito in anticipo è lo strumento principale contro l'avidità.",
            },
            {
              type: "list",
              items: [
                "L'avidità si manifesta spesso come l'annullamento del Take Profit impostato in anticipo",
                "Aumentare il volume dopo una serie di vittorie senza cambiare il risk management è anch'esso una manifestazione di avidità",
                "Seguire il piano dell'operazione stabilito in anticipo riduce l'influenza dell'avidità",
              ],
            },
          ],
          questions: [
            {
              prompt: "Come si manifesta più spesso l'avidità nella gestione di un'operazione aperta?",
              options: [
                "Il trader chiude l'operazione esattamente secondo il piano",
                "Il trader riduce il volume della posizione",
                "Il trader annulla il Take Profit impostato in anticipo, sperando in un profitto maggiore",
              ],
              correctAnswer: "Il trader annulla il Take Profit impostato in anticipo, sperando in un profitto maggiore",
            },
            {
              prompt: "A quale risultato porta più spesso l'avidità in un'operazione redditizia?",
              options: [
                "La commissione dell'exchange diminuisce",
                "Il profitto aumenta con garanzia",
                "L'operazione si inverte e si chiude allo stop o in pareggio",
              ],
              correctAnswer: "L'operazione si inverte e si chiude allo stop o in pareggio",
            },
            {
              prompt: "Qual è lo strumento principale contro l'avidità nel trading?",
              options: [
                "L'aumento della leva dopo ogni operazione redditizia",
                "Il completo abbandono dell'impostazione del Take Profit",
                "Il rispetto del piano dell'operazione stabilito in anticipo",
              ],
              correctAnswer: "Il rispetto del piano dell'operazione stabilito in anticipo",
            },
          ],
        },
        {
          slug: "strah",
          title: "Paura",
          summary: "Come la paura della perdita impedisce di seguire la strategia e porta alla chiusura prematura delle operazioni.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La paura nel trading si manifesta più spesso come timore di perdere denaro: il trader chiude un'operazione redditizia troppo presto per il minimo ribasso, ha paura di entrare in un'operazione su un segnale confermato, oppure evita completamente di fare trading dopo una serie di perdite.",
            },
            {
              type: "paragraph",
              text: "A differenza dell'avidità, la paura spinge ad agire in modo troppo prudente e a perdere occasioni che corrispondono pienamente alla strategia. Ridurre l'influenza della paura è aiutato dal fare trading con un volume tale per cui il rischio per operazione sia psicologicamente confortevole.",
            },
            {
              type: "list",
              items: [
                "La paura si manifesta spesso come chiusura prematura di un'operazione redditizia",
                "Un volume di posizione troppo grande amplifica la paura e impedisce di seguire il piano",
                "Una dimensione del rischio confortevole per operazione riduce la pressione emotiva della paura",
              ],
            },
          ],
          questions: [
            {
              prompt: "Come influisce più spesso la paura sulla gestione di un'operazione redditizia?",
              options: [
                "Il trader la chiude troppo presto per il minimo ribasso",
                "Il trader aumenta il volume della posizione",
                "Il trader la mantiene molto più a lungo del previsto",
              ],
              correctAnswer: "Il trader la chiude troppo presto per il minimo ribasso",
            },
            {
              prompt: "Cosa amplifica la paura nella gestione di una posizione aperta?",
              options: [
                "La tenuta di un diario di trading",
                "Un volume di posizione troppo grande rispetto al deposito",
                "Un rischio definito in anticipo dell'1-2% del deposito",
              ],
              correctAnswer: "Un volume di posizione troppo grande rispetto al deposito",
            },
            {
              prompt: "In cosa la paura nel trading si differenzia fondamentalmente dall'avidità?",
              options: [
                "La paura aumenta il volume della posizione più dell'avidità",
                "La paura e l'avidità portano esattamente alle stesse decisioni",
                "La paura spinge ad agire in modo troppo prudente e a perdere operazioni previste dalla strategia",
              ],
              correctAnswer: "La paura spinge ad agire in modo troppo prudente e a perdere operazioni previste dalla strategia",
            },
          ],
        },
        {
          slug: "distsiplina",
          title: "Disciplina",
          summary: "Perché seguire le proprie regole è più importante di qualsiasi singola operazione.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La disciplina nel trading è la capacità di seguire in modo coerente le regole di ingresso, uscita e gestione del rischio stabilite in anticipo, anche quando nel momento si vorrebbe agire diversamente. È proprio la disciplina a distinguere un trader con un sistema da una persona che fa trading in base alle emozioni.",
            },
            {
              type: "paragraph",
              text: "Anche una strategia di trading perfetta non porterà risultati se le regole vengono violate ogni volta che l'operazione non va secondo il piano. La disciplina si costruisce su regole semplici e chiaramente formulate e su un'analisi regolare del loro rispetto.",
            },
            {
              type: "list",
              items: [
                "La disciplina è più importante del risultato di una singola operazione",
                "Violare le proprie regole svaluta anche una buona strategia",
                "L'analisi regolare del rispetto delle regole aiuta a rafforzare la disciplina",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cos'è la disciplina nel contesto del trading?",
              options: [
                "L'uso della leva finanziaria massima",
                "Il seguire in modo coerente regole definite in anticipo",
                "La capacità di indovinare la direzione del prezzo",
              ],
              correctAnswer: "Il seguire in modo coerente regole definite in anticipo",
            },
            {
              prompt: "Perché anche una buona strategia non funziona senza disciplina?",
              options: [
                "Perché la disciplina non influisce sul risultato",
                "Perché le strategie funzionano sempre allo stesso modo",
                "Perché le regole vengono violate nel momento in cui l'operazione non va secondo il piano",
              ],
              correctAnswer: "Perché le regole vengono violate nel momento in cui l'operazione non va secondo il piano",
            },
            {
              prompt: "Cosa aiuta a rafforzare la disciplina nel tempo?",
              options: [
                "Il completo abbandono dell'analisi delle operazioni",
                "L'analisi regolare del rispetto delle proprie regole",
                "Il cambiamento costante delle regole dopo ogni operazione",
              ],
              correctAnswer: "L'analisi regolare del rispetto delle proprie regole",
            },
          ],
        },
        {
          slug: "emotsionalny-kontrol",
          title: "Controllo emotivo",
          summary: "Tecniche pratiche che aiutano a prendere decisioni basate sul piano, non sulle emozioni.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il controllo emotivo è la capacità di riconoscere il proprio stato emotivo (eccitazione, paura, irritazione dopo una perdita) e di non permettergli di influenzare direttamente le decisioni di trading. Non è l'assenza di emozioni, ma la capacità di agire secondo il piano nonostante esse.",
            },
            {
              type: "paragraph",
              text: "Gli strumenti pratici di controllo emotivo includono una pausa prima di entrare in un'operazione, un limite al numero di operazioni o di perdite giornaliere, e la tenuta di un diario in cui si registra non solo il risultato, ma anche lo stato emotivo del trader nel momento dell'operazione.",
            },
            {
              type: "list",
              items: [
                "Il controllo emotivo è la gestione della reazione alle emozioni, non la loro assenza",
                "Un limite giornaliero al numero di operazioni o perdite riduce l'influenza del tilt",
                "Registrare lo stato emotivo nel diario aiuta a individuare errori ricorrenti",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa si intende per controllo emotivo nel trading?",
              options: [
                "La totale assenza di qualsiasi emozione durante il trading",
                "La capacità di prevedere le emozioni degli altri trader",
                "La capacità di agire secondo il piano nonostante le emozioni, non la loro totale assenza",
              ],
              correctAnswer: "La capacità di agire secondo il piano nonostante le emozioni, non la loro totale assenza",
            },
            {
              prompt: "Come aiuta il trader un limite giornaliero al numero di operazioni?",
              options: [
                "Elimina completamente la necessità dello stop-loss",
                "Garantisce un profitto a fine giornata",
                "Riduce il rischio di una serie di decisioni emotive consecutive (tilt)",
              ],
              correctAnswer: "Riduce il rischio di una serie di decisioni emotive consecutive (tilt)",
            },
            {
              prompt: "Perché registrare nel diario di trading lo stato emotivo durante un'operazione?",
              options: [
                "È un requisito dell'exchange per aprire un'operazione",
                "Non aiuta in alcun modo nell'analisi del trading",
                "Per individuare in futuro errori emotivi ricorrenti",
              ],
              correctAnswer: "Per individuare in futuro errori emotivi ricorrenti",
            },
          ],
        },
      ],
    },
    {
      title: "Indicatori",
      lessons: [
        {
          slug: "rsi",
          title: "RSI",
          summary: "L'indice di forza relativa: come misurare l'ipercomprato e l'ipervenduto di un asset.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'RSI (Relative Strength Index) è un oscillatore che misura la velocità e l'entità delle recenti variazioni di prezzo su una scala da 0 a 100. Valori superiori a 70 sono tradizionalmente considerati zona di ipercomprato, inferiori a 30 zona di ipervenduto, anche se in un trend forte l'RSI può rimanere a lungo in queste zone.",
            },
            {
              type: "paragraph",
              text: "Oltre alle zone di ipercomprato/ipervenduto, i trader utilizzano le divergenze dell'RSI: se il prezzo aggiorna il massimo mentre l'RSI no, questo può segnalare un indebolimento dell'impulso. L'RSI viene raramente usato in modo isolato e di solito viene combinato con l'analisi della struttura del mercato.",
            },
            {
              type: "list",
              items: [
                "L'RSI sopra 70 indica un potenziale ipercomprato, sotto 30 un ipervenduto",
                "In un trend forte l'RSI può restare a lungo in una zona estrema senza invertirsi",
                "La divergenza tra prezzo e RSI può indicare un indebolimento del trend",
              ],
            },
          ],
          questions: [
            {
              prompt: "In quale intervallo di valori viene misurato l'RSI?",
              options: [
                "Da -1 a 1",
                "Da 0 a 10.000",
                "Da 0 a 100",
              ],
              correctAnswer: "Da 0 a 100",
            },
            {
              prompt: "Cosa indica tradizionalmente un valore dell'RSI superiore a 70?",
              options: [
                "Una potenziale zona di ipercomprato",
                "L'assenza di volume di scambi",
                "Un'inversione garantita del prezzo verso il basso",
              ],
              correctAnswer: "Una potenziale zona di ipercomprato",
            },
            {
              prompt: "Cosa può segnalare una divergenza tra prezzo e RSI?",
              options: [
                "Un errore tecnico dell'indicatore",
                "Un cambio di exchange di quotazione dell'asset",
                "Un indebolimento dell'impulso di movimento attuale",
              ],
              correctAnswer: "Un indebolimento dell'impulso di movimento attuale",
            },
          ],
        },
        {
          slug: "macd",
          title: "MACD",
          summary: "L'indicatore di convergenza-divergenza delle medie mobili e i suoi segnali di incrocio e divergenza.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il MACD (Moving Average Convergence Divergence) si costruisce sulla differenza tra due medie mobili esponenziali (di solito a 12 e 26 periodi) e una linea di segnale (una EMA a 9 periodi dello stesso MACD). L'istogramma mostra la differenza tra la linea MACD e la linea di segnale.",
            },
            {
              type: "paragraph",
              text: "I principali segnali del MACD sono l'incrocio tra la linea MACD e la linea di segnale (potenziale cambio di impulso) e l'incrocio della linea dello zero (cambio di direzione del trend). Come l'RSI, il MACD può mostrare divergenze con il prezzo, spesso usate come conferma aggiuntiva.",
            },
            {
              type: "list",
              items: [
                "Il MACD si basa sulla differenza tra due EMA e una linea di segnale",
                "L'incrocio tra MACD e linea di segnale è uno dei principali segnali di trading",
                "L'incrocio della linea dello zero è spesso associato a un cambio di direzione del trend",
              ],
            },
          ],
          questions: [
            {
              prompt: "Su cosa si basa l'indicatore MACD?",
              options: [
                "Sul volume dell'open interest",
                "Sulla differenza tra due medie mobili esponenziali",
                "Sul numero di portafogli attivi nella rete",
              ],
              correctAnswer: "Sulla differenza tra due medie mobili esponenziali",
            },
            {
              prompt: "Cosa mostra l'istogramma del MACD?",
              options: [
                "La differenza tra la linea MACD e la linea di segnale",
                "Il numero di posizioni aperte sull'exchange",
                "Il volume totale degli scambi giornalieri",
              ],
              correctAnswer: "La differenza tra la linea MACD e la linea di segnale",
            },
            {
              prompt: "A cosa viene spesso associato l'incrocio della linea MACD con il livello zero?",
              options: [
                "A un cambio di direzione del trend",
                "A una modifica delle commissioni dell'exchange",
                "Al listing di un nuovo token",
              ],
              correctAnswer: "A un cambio di direzione del trend",
            },
          ],
        },
        {
          slug: "ema",
          title: "EMA",
          summary: "La media mobile esponenziale e perché reagisce al prezzo più velocemente di quella semplice.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'EMA (Exponential Moving Average) è una media mobile che attribuisce un peso maggiore ai prezzi più recenti, per cui reagisce più velocemente alle variazioni di prezzo rispetto alla media mobile semplice (SMA). Questo rende l'EMA più sensibile, ma anche più soggetta a falsi segnali durante i movimenti laterali.",
            },
            {
              type: "paragraph",
              text: "I trader spesso usano contemporaneamente diverse EMA con periodi differenti (per esempio 20 e 50) per determinare la direzione del trend e le zone dinamiche di supporto/resistenza. L'incrocio tra EMA veloce e lenta è un segnale popolare, anche se in ritardo.",
            },
            {
              type: "list",
              items: [
                "L'EMA attribuisce un peso maggiore ai prezzi più recenti rispetto alla SMA",
                "Diverse EMA con periodi differenti aiutano a valutare la direzione del trend",
                "L'incrocio tra EMA veloce e lenta è un segnale in ritardo, ma popolare",
              ],
            },
          ],
          questions: [
            {
              prompt: "In cosa l'EMA si differenzia dalla media mobile semplice (SMA)?",
              options: [
                "L'EMA non tiene conto del prezzo",
                "L'EMA attribuisce un peso maggiore ai prezzi più recenti e reagisce più velocemente alle variazioni",
                "L'EMA si calcola sempre solo in base al volume",
              ],
              correctAnswer: "L'EMA attribuisce un peso maggiore ai prezzi più recenti e reagisce più velocemente alle variazioni",
            },
            {
              prompt: "Perché i trader usano più EMA con periodi diversi contemporaneamente?",
              options: [
                "Non fornisce alcuna informazione utile",
                "Per valutare la direzione del trend e le zone dinamiche di supporto/resistenza",
                "Per ridurre la commissione dell'exchange",
              ],
              correctAnswer: "Per valutare la direzione del trend e le zone dinamiche di supporto/resistenza",
            },
            {
              prompt: "Quale svantaggio presenta l'incrocio tra EMA veloce e lenta come segnale?",
              options: [
                "Il segnale non può essere visto sul grafico",
                "Il segnale compare prima dell'inizio del movimento",
                "Il segnale è in ritardo rispetto al movimento di prezzo attuale",
              ],
              correctAnswer: "Il segnale è in ritardo rispetto al movimento di prezzo attuale",
            },
          ],
        },
        {
          slug: "sma",
          title: "SMA",
          summary: "La media mobile semplice come base per determinare la direzione generale del trend.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La SMA (Simple Moving Average) è una media mobile semplice, calcolata come media aritmetica del prezzo di chiusura su N periodi. A differenza dell'EMA, nella SMA tutti i periodi hanno lo stesso peso, per cui reagisce più lentamente alle variazioni di prezzo e attenua maggiormente il rumore.",
            },
            {
              type: "paragraph",
              text: "La SMA viene spesso usata per determinare la direzione generale, più a lungo termine, del trend — per esempio, la posizione del prezzo rispetto alla SMA 200 sul timeframe giornaliero è ampiamente utilizzata come riferimento per un mercato rialzista o ribassista nel suo complesso.",
            },
            {
              type: "list",
              items: [
                "La SMA è la media aritmetica del prezzo su un numero prestabilito di periodi",
                "La SMA attenua il rumore più dell'EMA, ma reagisce più lentamente",
                "La SMA 200 sul grafico giornaliero è spesso usata come riferimento del trend globale",
              ],
            },
          ],
          questions: [
            {
              prompt: "Come si calcola la SMA?",
              options: [
                "Come media aritmetica del prezzo di chiusura su un numero prestabilito di periodi",
                "Come differenza tra il massimo e il minimo del giorno",
                "Come somma di tutti i volumi di scambio del mese",
              ],
              correctAnswer: "Come media aritmetica del prezzo di chiusura su un numero prestabilito di periodi",
            },
            {
              prompt: "In cosa la SMA si differenzia dall'EMA in termini di velocità di reazione al prezzo?",
              options: [
                "Non c'è alcuna differenza nella velocità di reazione",
                "La SMA reagisce sempre più velocemente dell'EMA",
                "La SMA reagisce più lentamente, poiché tutti i periodi hanno lo stesso peso",
              ],
              correctAnswer: "La SMA reagisce più lentamente, poiché tutti i periodi hanno lo stesso peso",
            },
            {
              prompt: "Per cosa viene spesso usata la SMA 200 sul timeframe giornaliero?",
              options: [
                "Per calcolare la commissione dell'exchange",
                "Per determinare l'orario esatto del listing di un token",
                "Come riferimento per un mercato rialzista o ribassista generale",
              ],
              correctAnswer: "Come riferimento per un mercato rialzista o ribassista generale",
            },
          ],
        },
        {
          slug: "vwap",
          title: "VWAP",
          summary: "Il prezzo medio ponderato per il volume e il suo ruolo come riferimento del prezzo \"equo\" della giornata.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Il VWAP (Volume Weighted Average Price) è il prezzo medio di un asset in un periodo, ponderato per il volume di scambi a ciascun livello di prezzo. A differenza della media mobile semplice, il VWAP mostra a quale prezzo si è effettivamente svolto il volume principale delle operazioni.",
            },
            {
              type: "paragraph",
              text: "I trader istituzionali usano spesso il VWAP come riferimento del prezzo \"equo\" della giornata: un prezzo superiore al VWAP è considerato relativamente caro, uno inferiore relativamente economico. Il VWAP viene anche usato come livello dinamico di supporto/resistenza all'interno della sessione di trading.",
            },
            {
              type: "list",
              items: [
                "Il VWAP tiene conto non solo del prezzo, ma anche del volume a ogni livello",
                "Un prezzo superiore al VWAP viene interpretato come relativamente caro, uno inferiore come relativamente economico",
                "Il VWAP viene solitamente ricalcolato da zero all'inizio di ogni sessione di trading",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa considera il VWAP a differenza della media mobile semplice?",
              options: [
                "Solo il prezzo massimo della giornata",
                "Solo il prezzo di chiusura del giorno precedente",
                "Il volume di scambi a ogni livello di prezzo",
              ],
              correctAnswer: "Il volume di scambi a ogni livello di prezzo",
            },
            {
              prompt: "Come viene interpretato un prezzo che si trova sopra il VWAP?",
              options: [
                "Come un segnale di acquisto garantito",
                "Come un segno di interruzione delle contrattazioni",
                "Come relativamente caro rispetto al livello medio ponderato per volume",
              ],
              correctAnswer: "Come relativamente caro rispetto al livello medio ponderato per volume",
            },
            {
              prompt: "Chi si orienta più spesso sul VWAP nell'esecuzione di ordini di grandi dimensioni?",
              options: [
                "Solo i trader principianti",
                "Solo i marketer dei progetti",
                "I trader istituzionali",
              ],
              correctAnswer: "I trader istituzionali",
            },
          ],
        },
        {
          slug: "atr",
          title: "ATR",
          summary: "Il range medio reale come strumento di misurazione della volatilità per impostare gli stop.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "L'ATR (Average True Range) misura la volatilità media di un asset in un periodo prestabilito, tenendo conto dei gap tra le candele. Non è un indicatore di direzione, ma di ampiezza del movimento: un ATR alto significa che il prezzo compie oscillazioni ampie, uno basso che il mercato è relativamente calmo.",
            },
            {
              type: "paragraph",
              text: "L'ATR viene spesso usato per calcolare la dimensione dello stop-loss adattata alla volatilità attuale: invece di una percentuale fissa, il trader posiziona lo stop a una distanza multipla dell'ATR, riducendo la probabilità di essere eliminato prematuramente dal normale rumore di mercato.",
            },
            {
              type: "list",
              items: [
                "L'ATR misura l'ampiezza del movimento di prezzo, non la sua direzione",
                "Un ATR alto indica una maggiore volatilità dell'asset",
                "Uno stop-loss calcolato tramite l'ATR si adatta alla volatilità attuale del mercato",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa misura l'indicatore ATR?",
              options: [
                "Il numero di indirizzi attivi nella rete",
                "La direzione del trend",
                "La volatilità media (ampiezza del movimento) di un asset",
              ],
              correctAnswer: "La volatilità media (ampiezza del movimento) di un asset",
            },
            {
              prompt: "Cosa indica un valore alto dell'ATR?",
              options: [
                "Un imminente delisting dell'asset",
                "Una bassa liquidità dell'exchange",
                "Una volatilità elevata e ampie oscillazioni di prezzo",
              ],
              correctAnswer: "Una volatilità elevata e ampie oscillazioni di prezzo",
            },
            {
              prompt: "Per cosa usano spesso l'ATR i trader nella pratica?",
              options: [
                "Per determinare il prezzo esatto del listing di un token",
                "Per calcolare la commissione di rete",
                "Per calcolare la dimensione dello stop-loss tenendo conto della volatilità attuale",
              ],
              correctAnswer: "Per calcolare la dimensione dello stop-loss tenendo conto della volatilità attuale",
            },
          ],
        },
        {
          slug: "bollinger-bands",
          title: "Bollinger Bands",
          summary: "Le bande di Bollinger come indicatore di volatilità e di costo relativo del prezzo.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Le Bollinger Bands sono composte da una media mobile (di solito la SMA 20) e due bande poste a una distanza pari a un numero prestabilito di deviazioni standard del prezzo. La larghezza delle bande cambia dinamicamente insieme alla volatilità: si allargano nei periodi di forti movimenti e si restringono nei periodi di calma.",
            },
            {
              type: "paragraph",
              text: "Il restringimento delle bande (\"squeeze\") spesso precede un forte movimento di prezzo in entrambe le direzioni, mentre il tocco della banda superiore o inferiore da parte del prezzo non è di per sé un segnale di inversione: in un trend forte il prezzo può muoversi a lungo lungo la banda.",
            },
            {
              type: "list",
              items: [
                "Le bande si costruiscono attorno a una media mobile in base alla deviazione standard",
                "Il restringimento delle bande spesso precede un forte movimento di prezzo",
                "Il tocco della banda non garantisce un'inversione, specialmente in un trend forte",
              ],
            },
          ],
          questions: [
            {
              prompt: "Da cosa sono composte le Bollinger Bands?",
              options: [
                "Da tre linee di volume indipendenti",
                "Da una media mobile e due bande basate sulla deviazione standard",
                "Da un'unica linea del prezzo di chiusura",
              ],
              correctAnswer: "Da una media mobile e due bande basate sulla deviazione standard",
            },
            {
              prompt: "Cosa precede spesso un forte movimento di prezzo secondo le Bollinger Bands?",
              options: [
                "Il restringimento (squeeze) delle bande",
                "La completa scomparsa delle bande dal grafico",
                "L'allargamento massimo delle bande",
              ],
              correctAnswer: "Il restringimento (squeeze) delle bande",
            },
            {
              prompt: "Il tocco della banda superiore di Bollinger da parte del prezzo significa un'inversione garantita verso il basso?",
              options: [
                "Sì, ma solo sul timeframe settimanale",
                "No, in un trend forte il prezzo può muoversi a lungo lungo la banda",
                "Sì, è sempre un segnale di inversione al cento per cento",
              ],
              correctAnswer: "No, in un trend forte il prezzo può muoversi a lungo lungo la banda",
            },
          ],
        },
      ],
    },
    {
      title: "Analisi del volume",
      lessons: [
        {
          slug: "volume",
          title: "Volume",
          summary: "Il volume degli scambi come conferma della forza del movimento di prezzo.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il Volume mostra la quantità di asset scambiata in un periodo. È uno dei pochi indicatori che non deriva dal prezzo, ma riflette l'attività reale dei partecipanti al mercato, motivo per cui viene spesso usato come conferma indipendente del movimento.",
            },
            {
              type: "paragraph",
              text: "Un movimento di prezzo con volume elevato è considerato più affidabile dello stesso movimento con volume basso: una rottura di livello senza un aumento del volume risulta più spesso falsa. Improvvisi picchi di volume coincidono spesso anche con punti di inversione chiave del mercato.",
            },
            {
              type: "list",
              items: [
                "Il volume riflette l'attività reale dei partecipanti, non è una derivata del prezzo",
                "Una rottura di livello con volume basso risulta più spesso falsa",
                "Improvvisi picchi di volume coincidono spesso con punti di inversione",
              ],
            },
          ],
          questions: [
            {
              prompt: "Perché il volume è considerato una conferma indipendente del movimento di prezzo?",
              options: [
                "Perché il volume cresce sempre insieme al prezzo",
                "Riflette l'attività reale dei partecipanti, non deriva dal prezzo stesso",
                "Perché il volume si misura in percentuale della capitalizzazione",
              ],
              correctAnswer: "Riflette l'attività reale dei partecipanti, non deriva dal prezzo stesso",
            },
            {
              prompt: "Quale rottura di livello è considerata meno affidabile?",
              options: [
                "L'affidabilità della rottura non dipende dal volume",
                "Una rottura con volume basso",
                "Una rottura con volume alto",
              ],
              correctAnswer: "Una rottura con volume basso",
            },
            {
              prompt: "Con cosa coincidono spesso improvvisi picchi di volume?",
              options: [
                "Con il cambio del nome del token",
                "Con punti di inversione chiave del mercato",
                "Solo con guasti tecnici dell'exchange",
              ],
              correctAnswer: "Con punti di inversione chiave del mercato",
            },
          ],
        },
        {
          slug: "delta",
          title: "Delta",
          summary: "La differenza tra volume di acquisto e di vendita come indicatore della pressione sul prezzo.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il Delta è la differenza tra il volume di acquisti aggressivi (tramite ordini di mercato in acquisto) e vendite aggressive in un periodo. Un delta positivo indica una prevalenza di acquirenti, uno negativo una prevalenza di venditori, indipendentemente dalla direzione in cui si è infine mosso il prezzo.",
            },
            {
              type: "paragraph",
              text: "Una divergenza tra il delta e il movimento del prezzo — per esempio il prezzo sale mentre il delta è negativo — può indicare che la salita non è sostenuta da acquisti di mercato, ma dalla chiusura di posizioni short, e che un movimento del genere è meno stabile.",
            },
            {
              type: "list",
              items: [
                "Un delta positivo indica una prevalenza di acquisti aggressivi sulle vendite",
                "Il delta misura la pressione dei partecipanti, non la variazione finale del prezzo",
                "Una divergenza tra prezzo e delta può indicare instabilità del movimento",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa mostra un delta positivo?",
              options: [
                "Una crescita garantita del prezzo in futuro",
                "L'assenza di attività di trading",
                "Una prevalenza di acquisti aggressivi sulle vendite",
              ],
              correctAnswer: "Una prevalenza di acquisti aggressivi sulle vendite",
            },
            {
              prompt: "Cosa può indicare una crescita del prezzo con delta negativo?",
              options: [
                "Il fatto che il delta viene calcolato in modo scorretto",
                "Un errore tecnico dell'exchange",
                "La crescita potrebbe essere sostenuta dalla chiusura di posizioni short, non da nuovi acquisti",
              ],
              correctAnswer: "La crescita potrebbe essere sostenuta dalla chiusura di posizioni short, non da nuovi acquisti",
            },
            {
              prompt: "Cosa misura esattamente il delta del volume?",
              options: [
                "Il numero di holder del token",
                "La capitalizzazione totale dell'asset",
                "La pressione di acquirenti e venditori attraverso gli ordini aggressivi",
              ],
              correctAnswer: "La pressione di acquirenti e venditori attraverso gli ordini aggressivi",
            },
          ],
        },
        {
          slug: "open-interest",
          title: "Open Interest",
          summary: "L'open interest come indicatore del numero di posizioni attive nel mercato dei derivati.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'Open Interest (OI) è il numero totale di contratti aperti, non ancora chiusi, sul mercato dei derivati (futures, perpetual). A differenza del volume, che si azzera a ogni periodo, l'OI mostra la quantità accumulata di posizioni attive.",
            },
            {
              type: "paragraph",
              text: "Una crescita dell'OI insieme a una crescita del prezzo indica di solito un afflusso di nuovo capitale e un rafforzamento del trend. Una crescita del prezzo con OI in calo indica più spesso la chiusura di posizioni short piuttosto che nuova domanda. Un forte calo dell'OI è spesso legato a liquidazioni di massa.",
            },
            {
              type: "list",
              items: [
                "L'OI mostra il numero di contratti aperti, non ancora chiusi",
                "Una crescita del prezzo insieme a una crescita dell'OI indica di solito un afflusso di nuovo capitale",
                "Un forte calo dell'OI accompagna spesso liquidazioni di massa delle posizioni",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa mostra l'Open Interest?",
              options: [
                "Il numero totale di contratti aperti, non ancora chiusi",
                "Il numero di utenti registrati sull'exchange",
                "Il volume complessivo di tutte le operazioni nella storia dell'exchange",
              ],
              correctAnswer: "Il numero totale di contratti aperti, non ancora chiusi",
            },
            {
              prompt: "Cosa indica di solito una crescita simultanea del prezzo e dell'Open Interest?",
              options: [
                "Un afflusso di nuovo capitale e un rafforzamento del trend",
                "Un calo della volatilità fino a zero",
                "Un guasto tecnico dell'exchange",
              ],
              correctAnswer: "Un afflusso di nuovo capitale e un rafforzamento del trend",
            },
            {
              prompt: "A cosa è spesso legato un forte calo dell'Open Interest?",
              options: [
                "All'aggiunta di un nuovo token al listing",
                "A liquidazioni di massa delle posizioni aperte",
                "A un aggiornamento programmato dell'exchange",
              ],
              correctAnswer: "A liquidazioni di massa delle posizioni aperte",
            },
          ],
        },
        {
          slug: "funding-rate",
          title: "Funding Rate",
          summary: "Il tasso di finanziamento sui futures perpetui e cosa dice sul sentiment del mercato.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il Funding Rate è un pagamento periodico tra i detentori di posizioni long e short sui futures perpetui, un meccanismo che mantiene il prezzo del contratto vicino al prezzo del mercato spot. Un funding positivo significa che i long pagano gli short, uno negativo il contrario.",
            },
            {
              type: "paragraph",
              text: "Un funding positivo costantemente alto indica di solito un mercato surriscaldato con un eccesso di posizioni long, il che aumenta il rischio di liquidazioni a cascata in caso di inversione al ribasso. Un funding fortemente negativo, al contrario, può segnalare un pessimismo eccessivo e un potenziale di rimbalzo.",
            },
            {
              type: "list",
              items: [
                "Il Funding Rate mantiene il prezzo del future perpetuo vicino al prezzo spot",
                "Un funding positivo costantemente alto indica un surriscaldamento del mercato da parte dei long",
                "Un funding fortemente negativo può indicare un pessimismo eccessivo del mercato",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quale funzione svolge il Funding Rate sui futures perpetui?",
              options: [
                "Determina la commissione dell'exchange per i prelievi",
                "Stabilisce la leva finanziaria massima",
                "Mantiene il prezzo del contratto vicino al prezzo del mercato spot",
              ],
              correctAnswer: "Mantiene il prezzo del contratto vicino al prezzo del mercato spot",
            },
            {
              prompt: "Cosa indica un funding positivo costantemente alto?",
              options: [
                "Il mercato è surriscaldato da un eccesso di posizioni long",
                "Il prezzo dell'asset salirà sicuramente ancora",
                "Sul mercato sono completamente assenti i trader",
              ],
              correctAnswer: "Il mercato è surriscaldato da un eccesso di posizioni long",
            },
            {
              prompt: "Chi paga chi quando il Funding Rate è positivo?",
              options: [
                "L'exchange paga tutti i trader allo stesso modo",
                "I detentori di posizioni short pagano i detentori di posizioni long",
                "I detentori di posizioni long pagano i detentori di posizioni short",
              ],
              correctAnswer: "I detentori di posizioni long pagano i detentori di posizioni short",
            },
          ],
        },
        {
          slug: "liquidations",
          title: "Liquidations",
          summary: "La chiusura forzata delle posizioni a leva e perché le liquidazioni amplificano il movimento di prezzo.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le liquidations (liquidazioni) sono la chiusura forzata di una posizione da parte dell'exchange, quando la perdita raggiunge un livello per cui il margine non è più sufficiente a mantenerla. Le liquidazioni avvengono al prezzo di mercato e non dipendono dalla volontà del trader.",
            },
            {
              type: "paragraph",
              text: "Le liquidazioni di massa in una sola direzione (liquidazioni a cascata) amplificano di per sé il movimento di prezzo: la chiusura di posizioni long crea ulteriore pressione di vendita, la chiusura di posizioni short ulteriore domanda, il che spiega i movimenti di prezzo bruschi e rapidi durante forte volatilità.",
            },
            {
              type: "list",
              items: [
                "Una liquidazione è la chiusura forzata di una posizione da parte dell'exchange per mancanza di margine",
                "Le liquidazioni a cascata amplificano e accelerano il movimento di prezzo in una direzione",
                "Le mappe delle liquidazioni sono usate dai trader per valutare le zone a rischio più elevato",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa succede quando una posizione viene liquidata?",
              options: [
                "Il trader chiude volontariamente la posizione in profitto",
                "L'exchange chiude forzatamente la posizione per mancanza di margine",
                "L'exchange raddoppia automaticamente il volume della posizione",
              ],
              correctAnswer: "L'exchange chiude forzatamente la posizione per mancanza di margine",
            },
            {
              prompt: "Perché le liquidazioni a cascata amplificano il movimento di prezzo?",
              options: [
                "Le liquidazioni fermano sempre completamente il movimento di prezzo",
                "La chiusura delle posizioni crea ulteriore pressione nella direzione del movimento",
                "Le liquidazioni non influenzano in alcun modo il prezzo",
              ],
              correctAnswer: "La chiusura delle posizioni crea ulteriore pressione nella direzione del movimento",
            },
            {
              prompt: "Per cosa i trader usano le mappe (heatmap) delle liquidazioni?",
              options: [
                "Per calcolare le tasse sul profitto",
                "Per valutare le zone a rischio più elevato di un movimento di prezzo brusco",
                "Per conoscere la data esatta del prossimo halving",
              ],
              correctAnswer: "Per valutare le zone a rischio più elevato di un movimento di prezzo brusco",
            },
          ],
        },
      ],
    },
    {
      title: "Analisi on-chain",
      lessons: [
        {
          slug: "koshelki-kitov",
          title: "Portafogli delle balene",
          summary: "Come il monitoraggio dei grandi portafogli aiuta a valutare il sentiment dei grandi holder.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le \"balene\" sono indirizzi che possiedono una grande quota dell'offerta totale di un asset. Poiché tutte le transazioni sulla blockchain sono pubbliche, i trader monitorano gli spostamenti di questi portafogli — per esempio, grandi trasferimenti verso gli exchange (potenziale preparazione alla vendita) o, al contrario, dagli exchange verso un cold storage.",
            },
            {
              type: "paragraph",
              text: "È importante considerare il contesto: un trasferimento dall'exchange non significa sempre un holding a lungo termine, e un trasferimento verso l'exchange non significa sempre una vendita immediata — potrebbe trattarsi di una redistribuzione tra portafogli dello stesso proprietario. I dati sulle balene sono un segnale aggiuntivo, non autonomo.",
            },
            {
              type: "list",
              items: [
                "I portafogli delle balene si monitorano grazie alla natura pubblica delle transazioni sulla blockchain",
                "Un grande trasferimento verso un exchange viene spesso interpretato come una potenziale preparazione alla vendita",
                "I dati sui movimenti delle balene vanno usati insieme ad altri tipi di analisi, non da soli",
              ],
            },
          ],
          questions: [
            {
              prompt: "Perché è possibile monitorare gli spostamenti dei portafogli delle balene?",
              options: [
                "Questo è possibile solo per i regolatori",
                "Tutte le transazioni sulla blockchain sono pubblicamente accessibili",
                "Gli exchange pubblicano quotidianamente i dati personali dei loro clienti",
              ],
              correctAnswer: "Tutte le transazioni sulla blockchain sono pubblicamente accessibili",
            },
            {
              prompt: "Come viene spesso interpretato un grande trasferimento di token verso un exchange?",
              options: [
                "Come un segnale garantito di holding a lungo termine",
                "Come un errore tecnico della rete",
                "Come una potenziale preparazione alla vendita",
              ],
              correctAnswer: "Come una potenziale preparazione alla vendita",
            },
            {
              prompt: "Qual è il modo più corretto di usare i dati sui movimenti delle balene?",
              options: [
                "Come unico e sufficiente segnale per entrare in un'operazione",
                "Tali dati sono inutili e non vanno considerati",
                "Come segnale aggiuntivo insieme ad altri tipi di analisi",
              ],
              correctAnswer: "Come segnale aggiuntivo insieme ad altri tipi di analisi",
            },
          ],
        },
        {
          slug: "birzhevye-pritoki-i-ottoki",
          title: "Afflussi e deflussi dagli exchange",
          summary: "Cosa significa il movimento di monete verso e dagli exchange per la potenziale pressione sul prezzo.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Gli afflussi verso gli exchange (exchange inflow) sono il volume di monete trasferite ai portafogli degli exchange, i deflussi (exchange outflow) il volume di monete prelevate dagli exchange. Un aumento degli afflussi viene spesso interpretato come una crescita della potenziale pressione di vendita, un aumento dei deflussi come accumulo e riduzione dell'offerta disponibile.",
            },
            {
              type: "paragraph",
              text: "Un deflusso netto costante dagli exchange per un periodo prolungato è di solito associato a una fase di accumulo e a una riduzione dell'offerta liquida in vendita. Un afflusso improvviso e isolato di una somma ingente, al contrario, spesso precede una volatilità locale.",
            },
            {
              type: "list",
              items: [
                "L'afflusso verso gli exchange è spesso associato a una crescita della potenziale offerta in vendita",
                "Un deflusso costante dagli exchange è di solito associato a una fase di accumulo",
                "Un afflusso improvviso e isolato di una somma ingente spesso precede una volatilità locale",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa si intende per afflusso verso gli exchange (exchange inflow)?",
              options: [
                "Il volume di monete trasferite ai portafogli degli exchange",
                "Il numero di nuovi utenti dell'exchange",
                "Il volume di monete estratte dai miner in un giorno",
              ],
              correctAnswer: "Il volume di monete trasferite ai portafogli degli exchange",
            },
            {
              prompt: "A quale fase di mercato è di solito associato un deflusso costante di monete dagli exchange?",
              options: [
                "Al listing di un nuovo token",
                "Alla fase di accumulo",
                "Alla fase di vendita da panico",
              ],
              correctAnswer: "Alla fase di accumulo",
            },
            {
              prompt: "Cosa precede spesso un afflusso improvviso e isolato di una somma ingente verso un exchange?",
              options: [
                "Una completa interruzione delle contrattazioni",
                "Una volatilità locale del prezzo",
                "Una riduzione automatica delle commissioni dell'exchange",
              ],
              correctAnswer: "Una volatilità locale del prezzo",
            },
          ],
        },
        {
          slug: "tvl",
          title: "TVL",
          summary: "Il valore totale bloccato come indicatore di fiducia in un protocollo DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il TVL (Total Value Locked) è il valore totale degli asset bloccati negli smart contract di un protocollo: nei pool di liquidità, nello staking, nelle piattaforme di lending. Il TVL viene spesso usato come indicatore della scala e della fiducia degli utenti in un protocollo o nell'intera rete blockchain.",
            },
            {
              type: "paragraph",
              text: "È importante considerare che una crescita del TVL può essere causata non solo da un afflusso di nuovo capitale, ma anche dall'aumento del prezzo degli asset già bloccati. Un forte calo del TVL, al contrario, può segnalare sia un deflusso di capitale sia un calo del prezzo dei token bloccati.",
            },
            {
              type: "list",
              items: [
                "Il TVL misura il valore degli asset bloccati negli smart contract di un protocollo",
                "Una crescita del TVL può riflettere sia un afflusso di nuovo capitale sia un aumento del prezzo degli asset",
                "Un forte calo del TVL viene spesso considerato un segnale allarmante per il protocollo",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa misura l'indicatore TVL?",
              options: [
                "Il numero di sviluppatori che lavorano al progetto",
                "Il numero totale di transazioni della rete di sempre",
                "Il valore totale degli asset bloccati negli smart contract di un protocollo",
              ],
              correctAnswer: "Il valore totale degli asset bloccati negli smart contract di un protocollo",
            },
            {
              prompt: "Per quale motivo il TVL può crescere anche se non arriva nuovo capitale?",
              options: [
                "Il TVL non può crescere senza afflusso di nuovo capitale",
                "A causa dell'aumento del prezzo degli asset già bloccati",
                "A causa del calo della capitalizzazione complessiva del mercato",
              ],
              correctAnswer: "A causa dell'aumento del prezzo degli asset già bloccati",
            },
            {
              prompt: "Come interpretano di solito i trader un forte calo del TVL di un protocollo?",
              options: [
                "Il TVL non è in alcun modo collegato allo stato del protocollo",
                "Come un segnale potenzialmente allarmante (deflusso di capitale o calo del prezzo degli asset)",
                "Come un segnale inequivocabilmente positivo per l'acquisto",
              ],
              correctAnswer: "Come un segnale potenzialmente allarmante (deflusso di capitale o calo del prezzo degli asset)",
            },
          ],
        },
        {
          slug: "stablecoins",
          title: "Stablecoin",
          summary: "Il ruolo delle stablecoin nel mercato cripto e le loro riserve sugli exchange come indicatore della domanda potenziale.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le stablecoin sono criptovalute il cui valore è ancorato a un asset stabile, il più delle volte al dollaro statunitense (USDT, USDC). Fungono da principale \"unità di conto\" del mercato cripto, permettendo di spostarsi tra asset e di fissare il valore senza dover uscire verso il sistema bancario tradizionale.",
            },
            {
              type: "paragraph",
              text: "Il volume totale di stablecoin nei portafogli degli exchange è spesso considerato un indicatore della \"polvere da sparo asciutta\" — il potenziale potere d'acquisto del mercato. Una crescita delle riserve di stablecoin sugli exchange può precedere un afflusso di domanda verso gli asset rischiosi.",
            },
            {
              type: "list",
              items: [
                "Le stablecoin sono ancorate a un asset stabile, di solito il dollaro statunitense",
                "Svolgono la funzione di unità di conto e di riserva di valore all'interno del mercato cripto",
                "Una crescita delle riserve di stablecoin sugli exchange è spesso associata a un potenziale aumento del potere d'acquisto",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa distingue le stablecoin dalla maggior parte delle altre criptovalute?",
              options: [
                "Non possono essere trasferite tra portafogli",
                "Esistono solo al di fuori della blockchain",
                "Il loro valore è ancorato a un asset stabile, di solito il dollaro statunitense",
              ],
              correctAnswer: "Il loro valore è ancorato a un asset stabile, di solito il dollaro statunitense",
            },
            {
              prompt: "Quale funzione svolgono le stablecoin nel mercato cripto?",
              options: [
                "Unità di conto e riserva di valore all'interno del mercato",
                "Sostituto del meccanismo di consenso della blockchain",
                "Unico mezzo di mining",
              ],
              correctAnswer: "Unità di conto e riserva di valore all'interno del mercato",
            },
            {
              prompt: "Cosa può indicare una crescita delle riserve di stablecoin sugli exchange?",
              options: [
                "Un potenziale aumento del potere d'acquisto del mercato",
                "Una completa interruzione delle contrattazioni sull'exchange",
                "Un guasto tecnico della stablecoin",
              ],
              correctAnswer: "Un potenziale aumento del potere d'acquisto del mercato",
            },
          ],
        },
        {
          slug: "onchain-metriki",
          title: "Metriche on-chain",
          summary: "Panoramica delle principali metriche di rete: indirizzi attivi, commissioni di rete e il loro utilizzo nell'analisi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le metriche on-chain sono dati che si possono ottenere direttamente dalla blockchain: numero di indirizzi attivi, volume di trasferimenti, commissioni di rete, numero di nuovi portafogli. A differenza dei dati di mercato (prezzo, volume dell'exchange), riflettono l'attività reale della rete.",
            },
            {
              type: "paragraph",
              text: "Una crescita del numero di indirizzi attivi e del volume di trasferimenti con un prezzo relativamente stabile può indicare un uso fondamentale crescente della rete. Queste metriche sono particolarmente utili per l'analisi a medio e lungo termine, piuttosto che per un timing preciso dell'ingresso.",
            },
            {
              type: "list",
              items: [
                "Le metriche on-chain riflettono l'attività reale della rete, non solo il prezzo sull'exchange",
                "Una crescita degli indirizzi attivi con un prezzo stabile può indicare un uso fondamentale crescente",
                "L'analisi on-chain è più adatta a conclusioni di medio e lungo termine che a un timing preciso",
              ],
            },
          ],
          questions: [
            {
              prompt: "In cosa le metriche on-chain si differenziano dai dati puramente di mercato come prezzo e volume dell'exchange?",
              options: [
                "Si ottengono direttamente dalla blockchain e riflettono l'attività reale della rete",
                "Sono accessibili solo ai proprietari dell'exchange",
                "Coincidono completamente con i dati di mercato",
              ],
              correctAnswer: "Si ottengono direttamente dalla blockchain e riflettono l'attività reale della rete",
            },
            {
              prompt: "Cosa può indicare una crescita degli indirizzi attivi della rete con un prezzo relativamente stabile?",
              options: [
                "Un guasto tecnico della blockchain",
                "Una completa interruzione delle transazioni",
                "Un uso fondamentale crescente della rete",
              ],
              correctAnswer: "Un uso fondamentale crescente della rete",
            },
            {
              prompt: "Per quale orizzonte di analisi le metriche on-chain sono di solito più adatte?",
              options: [
                "Per l'analisi a medio e lungo termine",
                "Le metriche on-chain non trovano applicazione pratica",
                "Esclusivamente per un timing dell'ingresso preciso al minuto",
              ],
              correctAnswer: "Per l'analisi a medio e lungo termine",
            },
          ],
        },
      ],
    },
    {
      title: "Trading professionale",
      lessons: [
        {
          slug: "torgovy-zhurnal",
          title: "Diario di trading",
          summary: "Perché registrare ogni operazione e cosa deve contenere una voce del diario.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il diario di trading è la registrazione sistematica di ogni operazione: motivo dell'ingresso, dimensione della posizione, stop-loss e take profit, risultato finale e stato emotivo del trader. Senza un diario, il trader fa affidamento sulla memoria, che ricorda selettivamente le operazioni vincenti e cancella quelle perdenti.",
            },
            {
              type: "paragraph",
              text: "L'analisi regolare del diario permette di individuare schemi ricorrenti: per esempio, che la maggior parte delle perdite riguarda operazioni aperte senza un segnale chiaro, o che una certa fascia oraria è costantemente meno redditizia. Questo trasforma sensazioni intuitive in dati concreti e verificabili.",
            },
            {
              type: "list",
              items: [
                "Il diario deve registrare il motivo dell'ingresso, non solo il risultato dell'operazione",
                "L'analisi regolare del diario aiuta a individuare errori ricorrenti",
                "I dati del diario sono più oggettivi della memoria soggettiva del trader",
              ],
            },
          ],
          questions: [
            {
              prompt: "Perché un trader dovrebbe tenere un diario di trading?",
              options: [
                "Il diario serve solo per la dichiarazione dei redditi",
                "È un requisito dell'exchange per aprire operazioni",
                "Per registrare le operazioni in modo oggettivo invece di affidarsi a una memoria selettiva",
              ],
              correctAnswer: "Per registrare le operazioni in modo oggettivo invece di affidarsi a una memoria selettiva",
            },
            {
              prompt: "Cosa deve essere obbligatoriamente registrato in una voce del diario, oltre al risultato dell'operazione?",
              options: [
                "Il nome del dispositivo utilizzato",
                "Il motivo dell'ingresso nell'operazione",
                "Solo il profitto finale in dollari",
              ],
              correctAnswer: "Il motivo dell'ingresso nell'operazione",
            },
            {
              prompt: "Cosa offre l'analisi regolare del diario di trading?",
              options: [
                "Aumenta automaticamente il volume del deposito",
                "Garantisce l'assenza di operazioni in perdita in futuro",
                "Permette di individuare schemi ed errori ricorrenti",
              ],
              correctAnswer: "Permette di individuare schemi ed errori ricorrenti",
            },
          ],
        },
        {
          slug: "sozdanie-strategii",
          title: "Creazione di una strategia",
          summary: "Da quali elementi obbligatori è composta una strategia di trading completa.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Una strategia di trading è un insieme di regole chiaramente descritte: su quale mercato operare, a quali condizioni entrare in un'operazione, dove posizionare stop-loss e take profit, quale percentuale del deposito rischiare. Senza queste regole fissate in anticipo, il trading si trasforma in una serie di decisioni casuali.",
            },
            {
              type: "paragraph",
              text: "Una buona strategia deve essere sufficientemente concreta da poter essere spiegata a un'altra persona e verificata su dati storici. Non deve funzionare nel 100% dei casi — è importante che le regole siano riproducibili e che il valore atteso matematico sia positivo.",
            },
            {
              type: "list",
              items: [
                "La strategia include obbligatoriamente le condizioni di ingresso, uscita e le regole di risk management",
                "Le regole devono essere sufficientemente concrete da poter essere verificate sui dati storici",
                "L'obiettivo della strategia è un valore atteso matematico positivo, non una precisione del 100%",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa deve obbligatoriamente far parte della descrizione di una strategia di trading?",
              options: [
                "La lista delle criptovalute preferite dal trader",
                "Le condizioni di ingresso, uscita e le regole di gestione del rischio",
                "Solo la somma di profitto desiderata al mese",
              ],
              correctAnswer: "Le condizioni di ingresso, uscita e le regole di gestione del rischio",
            },
            {
              prompt: "Perché una strategia deve essere concreta e non vaga?",
              options: [
                "Per nasconderla agli altri trader",
                "Per poterla spiegare e verificare su dati storici",
                "La vaghezza delle regole non ha importanza",
              ],
              correctAnswer: "Per poterla spiegare e verificare su dati storici",
            },
            {
              prompt: "Una buona strategia deve essere redditizia nel 100% delle operazioni?",
              options: [
                "Sì, ma solo sul timeframe giornaliero",
                "Sì, altrimenti la strategia è considerata non funzionante",
                "No, è importante un valore atteso matematico positivo nel complesso",
              ],
              correctAnswer: "No, è importante un valore atteso matematico positivo nel complesso",
            },
          ],
        },
        {
          slug: "backtest",
          title: "Backtest",
          summary: "La verifica di una strategia di trading su dati storici prima dell'applicazione reale.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il backtest è la verifica di una strategia di trading su dati storici: le regole vengono applicate a dati di prezzo passati per valutare se la strategia sarebbe stata redditizia. È un modo per ottenere statistiche sulla strategia senza rischiare capitale reale.",
            },
            {
              type: "paragraph",
              text: "Il backtest ha dei limiti: i risultati passati non garantiscono quelli futuri, e un test poco accurato può portare a un overfitting delle regole su un periodo storico specifico. Ciononostante, il backtest è un primo passo necessario prima di affidare denaro reale alla strategia.",
            },
            {
              type: "list",
              items: [
                "Il backtest permette di valutare una strategia sui dati storici senza rischio reale",
                "I risultati passati del backtest non garantiscono lo stesso risultato in futuro",
                "L'overfitting delle regole su un periodo storico specifico è un errore tipico del backtesting",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cos'è il backtest di una strategia di trading?",
              options: [
                "Un sondaggio tra altri trader sulla strategia",
                "Il trading reale con un deposito minimo",
                "La verifica delle regole della strategia su dati di prezzo storici",
              ],
              correctAnswer: "La verifica delle regole della strategia su dati di prezzo storici",
            },
            {
              prompt: "Un backtest riuscito garantisce lo stesso risultato in futuro?",
              options: [
                "No, i risultati passati non garantiscono quelli futuri",
                "Garantisce, ma solo per le azioni",
                "Sì, il risultato del backtest si ripete sempre nel trading reale",
              ],
              correctAnswer: "No, i risultati passati non garantiscono quelli futuri",
            },
            {
              prompt: "Cos'è l'overfitting nel contesto del backtesting?",
              options: [
                "Il trading senza stop-loss",
                "L'eccessivo adattamento delle regole a un periodo storico specifico",
                "L'uso di un numero troppo ridotto di indicatori",
              ],
              correctAnswer: "L'eccessivo adattamento delle regole a un periodo storico specifico",
            },
          ],
        },
        {
          slug: "forward-test",
          title: "Forward Test",
          summary: "La verifica di una strategia su dati nuovi, non ancora utilizzati, dopo il backtest.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il forward test è la verifica di una strategia su un conto reale o demo procedendo in avanti nel tempo, su dati che non sono stati usati nello sviluppo e nel backtesting delle regole. È un passaggio chiave che mostra se la strategia funziona su dati davvero nuovi.",
            },
            {
              type: "paragraph",
              text: "Il forward test aiuta a individuare un overfitting che potrebbe essere passato inosservato durante il backtest: se i risultati del forward test si discostano molto da quelli del backtest, probabilmente la strategia era stata adattata troppo precisamente ai dati passati.",
            },
            {
              type: "list",
              items: [
                "Il forward test si svolge su dati non utilizzati nello sviluppo della strategia",
                "Permette di individuare un overfitting non evidente durante il normale backtest",
                "Una forte discrepanza tra i risultati di backtest e forward test è un segnale allarmante",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual è la differenza chiave tra forward test e backtest?",
              options: [
                "Non c'è alcuna differenza tra i due",
                "Il forward test si svolge su dati nuovi, non utilizzati nello sviluppo della strategia",
                "Il forward test si svolge sempre solo su un grande deposito reale",
              ],
              correctAnswer: "Il forward test si svolge su dati nuovi, non utilizzati nello sviluppo della strategia",
            },
            {
              prompt: "Cosa aiuta a individuare il forward test, a differenza del backtest?",
              options: [
                "La commissione dell'exchange per i prelievi",
                "L'overfitting della strategia sui dati passati",
                "La data esatta del prossimo halving",
              ],
              correctAnswer: "L'overfitting della strategia sui dati passati",
            },
            {
              prompt: "Cosa indica una forte discrepanza tra i risultati di backtest e forward test?",
              options: [
                "Che la strategia è assolutamente affidabile",
                "Probabilmente la strategia era stata adattata troppo precisamente ai dati passati",
                "Non ha alcuna importanza per la valutazione della strategia",
              ],
              correctAnswer: "Probabilmente la strategia era stata adattata troppo precisamente ai dati passati",
            },
          ],
        },
        {
          slug: "statistika-sdelok",
          title: "Statistiche delle operazioni",
          summary: "Le metriche chiave da monitorare per una valutazione oggettiva del proprio trading.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Le statistiche delle operazioni sono un insieme di metriche oggettive calcolate a partire dal diario: winrate (quota di operazioni vincenti), R/R medio, valore atteso matematico dell'operazione, drawdown massimo e altre. Questi numeri mostrano il quadro reale del trading, non una sensazione soggettiva.",
            },
            {
              type: "paragraph",
              text: "Nessuna metrica dovrebbe essere valutata isolatamente dalle altre: un winrate alto con un R/R medio basso può dare lo stesso risultato di un winrate basso con un R/R alto. È proprio il valore atteso matematico — la media prodotta da una singola operazione — il riferimento finale della qualità di una strategia.",
            },
            {
              type: "list",
              items: [
                "Winrate e R/R medio vanno analizzati insieme, non separatamente",
                "Il valore atteso matematico dell'operazione è la metrica finale chiave della qualità della strategia",
                "Il drawdown massimo mostra quanto si è ridotto il deposito nel periodo peggiore",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa mostra il winrate di una strategia di trading?",
              options: [
                "Il numero di operazioni aperte in un dato momento",
                "Il profitto complessivo in dollari di sempre",
                "La quota di operazioni vincenti sul totale",
              ],
              correctAnswer: "La quota di operazioni vincenti sul totale",
            },
            {
              prompt: "Perché il winrate non può essere valutato isolatamente dall'R/R medio?",
              options: [
                "Un winrate alto con R/R basso può dare lo stesso esito di un winrate basso con R/R alto",
                "L'R/R non influisce affatto sul risultato finale",
                "Winrate e R/R sono sempre assolutamente identici",
              ],
              correctAnswer: "Un winrate alto con R/R basso può dare lo stesso esito di un winrate basso con R/R alto",
            },
            {
              prompt: "Cosa mostra la metrica del drawdown massimo?",
              options: [
                "Il numero di asset nel portafoglio",
                "Il rendimento annuale finale della strategia",
                "Quanto si è ridotto il deposito nel periodo peggiore di trading",
              ],
              correctAnswer: "Quanto si è ridotto il deposito nel periodo peggiore di trading",
            },
          ],
        },
      ],
    },
    {
      title: "Altcoin e Tokenomics",
      lessons: [
        {
          slug: "tokenomics",
          title: "Tokenomics",
          summary: "Il modello economico di un token: offerta, distribuzione e incentivi degli holder.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "La tokenomics descrive il modello economico di un token: l'offerta totale e massima, la distribuzione tra team, investitori e community, i meccanismi di emissione e burn, oltre agli incentivi che spingono gli holder a usare o mantenere il token.",
            },
            {
              type: "paragraph",
              text: "Una tokenomics debole — per esempio una grande quota di token nelle mani del team con un periodo di lock breve — crea una pressione di vendita costante sul mercato, indipendentemente dalla qualità del prodotto stesso. L'analisi della tokenomics è importante per valutare un progetto tanto quanto l'analisi della sua tecnologia.",
            },
            {
              type: "list",
              items: [
                "La tokenomics descrive l'offerta, la distribuzione e gli incentivi degli holder di un token",
                "Una grande quota di token nelle mani del team con un vesting breve crea un rischio di pressione di vendita",
                "L'analisi della tokenomics non è meno importante dell'analisi della tecnologia del progetto",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa descrive la tokenomics di un progetto?",
              options: [
                "La lista degli exchange su cui è quotato il token",
                "Il modello economico del token: offerta, distribuzione e incentivi degli holder",
                "Solo lo stack tecnologico della blockchain",
              ],
              correctAnswer: "Il modello economico del token: offerta, distribuzione e incentivi degli holder",
            },
            {
              prompt: "Quale fattore della tokenomics crea il rischio di una pressione di vendita costante?",
              options: [
                "La completa assenza di token nelle mani del team",
                "Una grande quota di token nelle mani del team con un periodo di lock breve",
                "Un'offerta massima del token pari a zero",
              ],
              correctAnswer: "Una grande quota di token nelle mani del team con un periodo di lock breve",
            },
            {
              prompt: "Quanto è importante l'analisi della tokenomics rispetto all'analisi della tecnologia del progetto?",
              options: [
                "La tokenomics non ha alcuna importanza per la valutazione del progetto",
                "È importante solo per i progetti senza blockchain",
                "Non è meno importante e deve essere considerata alla pari della tecnologia",
              ],
              correctAnswer: "Non è meno importante e deve essere considerata alla pari della tecnologia",
            },
          ],
        },
        {
          slug: "fdv",
          title: "FDV",
          summary: "La valutazione completamente diluita e perché è più importante della capitalizzazione di mercato per i nuovi token.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'FDV (Fully Diluted Valuation) è una valutazione del progetto calcolata come se l'intera offerta massima di token fosse già in circolazione, al prezzo attuale. A differenza della capitalizzazione di mercato, che considera solo i token attualmente in circolazione, l'FDV mostra una potenziale valutazione futura.",
            },
            {
              type: "paragraph",
              text: "Un grande divario tra la capitalizzazione attuale e l'FDV significa che una parte significativa dell'offerta non è ancora stata emessa e arriverà sul mercato nel tempo, creando una potenziale pressione di vendita alla sua sblocco — un aspetto particolarmente importante da considerare per i nuovi token con una bassa percentuale in circolazione.",
            },
            {
              type: "list",
              items: [
                "L'FDV si calcola in base all'offerta massima, non a quella attuale, dei token",
                "Un grande divario tra capitalizzazione e FDV indica una significativa emissione futura",
                "I token con una bassa percentuale in circolazione e un FDV alto richiedono un'attenzione particolare al calendario di sblocco",
              ],
            },
          ],
          questions: [
            {
              prompt: "Come si calcola l'FDV?",
              options: [
                "In base solo ai token scambiati su un unico exchange specifico",
                "In base al volume di scambi delle ultime 24 ore",
                "In base all'offerta massima di token al prezzo attuale",
              ],
              correctAnswer: "In base all'offerta massima di token al prezzo attuale",
            },
            {
              prompt: "Cosa indica un grande divario tra la capitalizzazione di mercato e l'FDV?",
              options: [
                "Una quota significativa dell'offerta non è ancora stata immessa in circolazione",
                "Un errore tecnico nel calcolo del prezzo",
                "Il token è già completamente sbloccato",
              ],
              correctAnswer: "Una quota significativa dell'offerta non è ancora stata immessa in circolazione",
            },
            {
              prompt: "Per quali token è particolarmente importante osservare attentamente il rapporto tra capitalizzazione e FDV?",
              options: [
                "Per i nuovi token con una bassa percentuale di offerta in circolazione",
                "Il rapporto tra capitalizzazione e FDV non ha alcuna importanza pratica",
                "Solo per le stablecoin",
              ],
              correctAnswer: "Per i nuovi token con una bassa percentuale di offerta in circolazione",
            },
          ],
        },
        {
          slug: "vesting",
          title: "Vesting",
          summary: "Lo sblocco graduale dei token del team e degli investitori secondo un calendario prestabilito.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il vesting è un meccanismo di sblocco graduale dei token assegnati al team, agli investitori o agli advisor di un progetto, secondo un calendario prestabilito invece di un'assegnazione unica. Questo dovrebbe ridurre l'incentivo dei primi partecipanti a vendere immediatamente i token dopo il listing.",
            },
            {
              type: "paragraph",
              text: "Una struttura di vesting standard include un \"cliff\" — un periodo durante il quale i token sono completamente bloccati — seguito da uno sblocco lineare o a scaglioni. Un cliff breve e un calendario di vesting aggressivo aumentano il rischio di pressione di vendita nelle fasi iniziali.",
            },
            {
              type: "list",
              items: [
                "Il vesting sblocca i token del team e degli investitori in modo graduale, non immediato",
                "Il cliff è il periodo di blocco totale dei token all'inizio del calendario di vesting",
                "Un cliff breve e un calendario di sblocco aggressivo aumentano il rischio di pressione di vendita",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cos'è il vesting dei token?",
              options: [
                "Un metodo per fare mining di nuovi token",
                "Un meccanismo di sblocco graduale dei token secondo un calendario prestabilito",
                "La vendita simultanea di tutti i token di un progetto",
              ],
              correctAnswer: "Un meccanismo di sblocco graduale dei token secondo un calendario prestabilito",
            },
            {
              prompt: "Cos'è il cliff nel calendario di vesting?",
              options: [
                "Il periodo di blocco totale dei token all'inizio del calendario",
                "La commissione per il prelievo anticipato dei token",
                "Lo sblocco finale di tutti i token rimanenti",
              ],
              correctAnswer: "Il periodo di blocco totale dei token all'inizio del calendario",
            },
            {
              prompt: "Perché i progetti usano il vesting per il team e gli investitori?",
              options: [
                "È un requisito tecnico obbligatorio di qualsiasi blockchain",
                "Per ridurre l'incentivo a vendere immediatamente i token dopo il listing",
                "Per escludere completamente il team dalla partecipazione al progetto",
              ],
              correctAnswer: "Per ridurre l'incentivo a vendere immediatamente i token dopo il listing",
            },
          ],
        },
        {
          slug: "unlocks",
          title: "Unlocks",
          summary: "Gli sblocchi di token secondo il calendario e il loro impatto sul prezzo dell'asset.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Gli unlock (sblocchi) sono i momenti in cui una nuova porzione di token bloccati (del team, degli investitori, dei fondi dell'ecosistema) diventa disponibile per il trasferimento e la potenziale vendita. Le date e i volumi degli sblocchi sono di solito noti in anticipo e pubblicati dal progetto.",
            },
            {
              type: "paragraph",
              text: "Uno sblocco ingente rispetto al volume di scambi attuale può creare una notevole pressione di vendita sul prezzo, specialmente se i destinatari dei token non hanno una motivazione a lungo termine a mantenerli. I trader spesso monitorano in anticipo il calendario degli sblocchi come elemento di risk management.",
            },
            {
              type: "list",
              items: [
                "Lo sblocco rende disponibile per il trasferimento e la vendita una nuova porzione di token",
                "Uno sblocco ingente rispetto al volume di scambi può creare pressione sul prezzo",
                "Il calendario degli sblocchi futuri è un elemento importante di risk management per le posizioni in altcoin",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa succede nel momento di uno sblocco (unlock) di token?",
              options: [
                "L'exchange interrompe temporaneamente gli scambi dell'asset",
                "Una nuova porzione di token precedentemente bloccati diventa disponibile per il trasferimento",
                "Tutti i token del progetto vengono distrutti",
              ],
              correctAnswer: "Una nuova porzione di token precedentemente bloccati diventa disponibile per il trasferimento",
            },
            {
              prompt: "Quando uno sblocco di token può creare una notevole pressione sul prezzo?",
              options: [
                "Quando il suo volume è ingente rispetto al volume di scambi attuale",
                "Solo se lo sblocco avviene di notte",
                "Gli sblocchi non influenzano mai il prezzo",
              ],
              correctAnswer: "Quando il suo volume è ingente rispetto al volume di scambi attuale",
            },
            {
              prompt: "Perché i trader monitorano il calendario degli sblocchi di un token?",
              options: [
                "Il calendario degli sblocchi non ha alcuna applicazione pratica",
                "È un elemento di risk management nel mantenere una posizione in un altcoin",
                "Per calcolare esattamente le tasse sul profitto",
              ],
              correctAnswer: "È un elemento di risk management nel mantenere una posizione in un altcoin",
            },
          ],
        },
        {
          slug: "emissiya",
          title: "Emissione",
          summary: "La velocità di emissione di nuovi token e il suo impatto sulla pressione di lungo termine sul prezzo.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'emissione è il processo di immissione di nuovi token in circolazione, per esempio tramite ricompense di mining, staking o grant dell'ecosistema. La velocità di emissione determina quanto rapidamente cresce l'offerta di un token nel tempo, indipendentemente dalla domanda per esso.",
            },
            {
              type: "paragraph",
              text: "Un'emissione costante e alta senza una corrispondente crescita della domanda crea una pressione stabile sul prezzo nel lungo periodo — questo è uno dei motivi per cui alcuni progetti introducono meccanismi di burn dei token, per compensare parzialmente l'emissione.",
            },
            {
              type: "list",
              items: [
                "L'emissione aumenta l'offerta del token indipendentemente dalla domanda attuale",
                "Un'emissione alta senza crescita della domanda crea una pressione di lungo termine sul prezzo",
                "I meccanismi di burn dei token vengono introdotti per compensare parzialmente l'emissione",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cos'è l'emissione di un token?",
              options: [
                "Il processo di verifica dell'autenticità di un portafoglio",
                "Il processo di immissione di nuovi token in circolazione",
                "Il processo di rimozione completa di un token da un exchange",
              ],
              correctAnswer: "Il processo di immissione di nuovi token in circolazione",
            },
            {
              prompt: "Cosa succede con un'emissione alta senza una corrispondente crescita della domanda?",
              options: [
                "L'offerta totale del token si riduce",
                "Si crea una pressione stabile di lungo termine sul prezzo",
                "Il prezzo del token cresce con garanzia",
              ],
              correctAnswer: "Si crea una pressione stabile di lungo termine sul prezzo",
            },
            {
              prompt: "Perché alcuni progetti introducono un meccanismo di burn dei token?",
              options: [
                "Per fermare completamente il funzionamento della rete",
                "Per compensare parzialmente l'effetto dell'emissione sull'offerta",
                "È un requisito degli exchange per il listing del token",
              ],
              correctAnswer: "Per compensare parzialmente l'effetto dell'emissione sull'offerta",
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
          summary: "Gli exchange decentralizzati e la loro differenza fondamentale rispetto a quelli centralizzati.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il DEX (Decentralized Exchange) è un exchange che opera tramite smart contract senza un operatore centrale che custodisce i fondi degli utenti. Le operazioni vengono eseguite direttamente tra i portafogli dei partecipanti, e non attraverso un database interno dell'exchange, come nelle piattaforme centralizzate.",
            },
            {
              type: "paragraph",
              text: "Il principale vantaggio dei DEX è che l'utente mantiene il controllo dei propri fondi fino al momento dell'operazione (il principio \"not your keys, not your coins\"). Il rovescio della medaglia è che tutta la responsabilità della sicurezza del portafoglio e della corretta interazione con lo smart contract ricade sull'utente stesso.",
            },
            {
              type: "list",
              items: [
                "Il DEX opera tramite smart contract senza un custode centrale dei fondi",
                "L'utente mantiene il controllo dei propri asset fino al momento dell'operazione",
                "La responsabilità della sicurezza del portafoglio su un DEX ricade interamente sull'utente",
              ],
            },
          ],
          questions: [
            {
              prompt: "In cosa un DEX si differenzia fondamentalmente da un exchange centralizzato?",
              options: [
                "Il DEX opera tramite smart contract senza un custode centrale dei fondi degli utenti",
                "I DEX sono accessibili solo agli investitori istituzionali",
                "Su un DEX non è possibile effettuare operazioni",
              ],
              correctAnswer: "Il DEX opera tramite smart contract senza un custode centrale dei fondi degli utenti",
            },
            {
              prompt: "Qual è il principale vantaggio del trading tramite DEX dal punto di vista del controllo sugli asset?",
              options: [
                "L'utente mantiene il controllo dei fondi fino al momento dell'operazione",
                "Il DEX protegge automaticamente da ogni tipo di frode",
                "Il DEX garantisce sempre l'assenza di commissioni",
              ],
              correctAnswer: "L'utente mantiene il controllo dei fondi fino al momento dell'operazione",
            },
            {
              prompt: "Su chi ricade la responsabilità della sicurezza del portafoglio quando si usa un DEX?",
              options: [
                "Interamente sugli sviluppatori del protocollo",
                "La responsabilità è automaticamente assicurata dall'exchange",
                "Interamente sull'utente stesso",
              ],
              correctAnswer: "Interamente sull'utente stesso",
            },
          ],
        },
        {
          slug: "amm",
          title: "AMM",
          summary: "I market maker automatizzati e il principio di funzionamento dei pool di liquidità.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'AMM (Automated Market Maker) è il meccanismo alla base della maggior parte dei DEX, in cui il prezzo di un asset è determinato da una formula matematica basata sul rapporto tra i token in un pool di liquidità, e non da un order book, come negli exchange tradizionali.",
            },
            {
              type: "paragraph",
              text: "Il pool di liquidità viene alimentato dagli utenti (i fornitori di liquidità), che depositano una coppia di token di valore equivalente e ricevono una quota delle commissioni di trading. Operazioni ingenti rispetto alle dimensioni del pool causano slippage — una deviazione significativa del prezzo di esecuzione da quello di mercato.",
            },
            {
              type: "list",
              items: [
                "L'AMM determina il prezzo tramite una formula basata sul rapporto tra i token nel pool, non un order book",
                "I fornitori di liquidità guadagnano una quota delle commissioni di trading del pool",
                "Un'operazione ingente rispetto alle dimensioni del pool causa uno slippage di prezzo notevole",
              ],
            },
          ],
          questions: [
            {
              prompt: "Come determina l'AMM il prezzo di un asset?",
              options: [
                "Tramite un order book, come su un exchange centralizzato",
                "Tramite il voto degli holder del token",
                "Tramite una formula matematica basata sul rapporto tra i token nel pool",
              ],
              correctAnswer: "Tramite una formula matematica basata sul rapporto tra i token nel pool",
            },
            {
              prompt: "Cosa ricevono i fornitori di liquidità in un pool AMM?",
              options: [
                "Un rendimento annuo fisso garantito senza rischio",
                "Il diritto esclusivo di gestire il protocollo",
                "Una quota delle commissioni di trading del pool",
              ],
              correctAnswer: "Una quota delle commissioni di trading del pool",
            },
            {
              prompt: "Cos'è lo slippage nel contesto degli AMM?",
              options: [
                "Il ritardo nell'elaborazione di una transazione da parte di un nodo della rete",
                "La commissione di rete per la conferma di una transazione",
                "La deviazione del prezzo di esecuzione da quello di mercato in un'operazione ingente rispetto alle dimensioni del pool",
              ],
              correctAnswer: "La deviazione del prezzo di esecuzione da quello di mercato in un'operazione ingente rispetto alle dimensioni del pool",
            },
          ],
        },
        {
          slug: "staking",
          title: "Staking",
          summary: "Il blocco dei token per partecipare al consenso o ottenere una ricompensa.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Lo staking è il blocco di token per sostenere il funzionamento della rete (nelle blockchain con meccanismo Proof-of-Stake) o per partecipare a un protocollo in cambio di una ricompensa. Nelle reti PoS gli staker contribuiscono a confermare le transazioni e a garantire la sicurezza della rete.",
            },
            {
              type: "paragraph",
              text: "Il rendimento dello staking si esprime di solito in percentuale annua (APR/APY), ma è importante considerare che è formato in parte o del tutto dall'emissione di nuovi token, il che può annullare il rendimento nominale con una reale diluizione dell'offerta.",
            },
            {
              type: "list",
              items: [
                "Nelle reti Proof-of-Stake lo staking contribuisce a confermare le transazioni e a proteggere la rete",
                "Il rendimento dello staking si esprime di solito in percentuale annua (APR/APY)",
                "Il rendimento dello staking è spesso formato in parte dall'emissione, non solo dalla domanda reale",
              ],
            },
          ],
          questions: [
            {
              prompt: "Quale ruolo svolge lo staking nelle reti Proof-of-Stake?",
              options: [
                "Viene usato esclusivamente per il marketing del progetto",
                "Aiuta a confermare le transazioni e a garantire la sicurezza della rete",
                "Sostituisce completamente la necessità della blockchain",
              ],
              correctAnswer: "Aiuta a confermare le transazioni e a garantire la sicurezza della rete",
            },
            {
              prompt: "In cosa si esprime di solito il rendimento dello staking?",
              options: [
                "In percentuale annua (APR/APY)",
                "Il rendimento dello staking non si esprime mai numericamente",
                "Solo in una somma fissa in dollari una volta all'anno",
              ],
              correctAnswer: "In percentuale annua (APR/APY)",
            },
            {
              prompt: "Da cosa è spesso formato in parte il rendimento dello staking?",
              options: [
                "Dall'emissione di nuovi token",
                "Dagli sgravi fiscali statali",
                "Esclusivamente dalle commissioni degli exchange centralizzati",
              ],
              correctAnswer: "Dall'emissione di nuovi token",
            },
          ],
        },
        {
          slug: "lending",
          title: "Lending",
          summary: "Il prestito decentralizzato garantito da criptoasset.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Il lending in DeFi permette ad alcuni utenti di prestare asset tramite uno smart contract e ricevere un interesse, e ad altri di ottenere prestiti mettendo a garanzia i propri criptoasset, di solito con una garanzia in eccesso (il collaterale vale più della somma del prestito).",
            },
            {
              type: "paragraph",
              text: "Se il valore del collaterale scende sotto una determinata soglia rispetto alla somma del prestito, il protocollo liquida automaticamente il collaterale per coprire il debito. Questo protegge i creditori, ma significa che i debitori devono monitorare attentamente il coefficiente di garanzia della propria posizione.",
            },
            {
              type: "list",
              items: [
                "Il lending DeFi richiede di solito una garanzia in eccesso da parte del debitore",
                "Il tasso di interesse su prestito e deposito è determinato algoritmicamente da domanda e offerta nel protocollo",
                "Se il valore del collaterale scende sotto una soglia, il protocollo liquida automaticamente la posizione",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa si richiede di solito a un debitore nel lending DeFi?",
              options: [
                "Una garanzia in eccesso, superiore alla somma del prestito",
                "Una garanzia da parte di un exchange centralizzato",
                "La verifica dell'identità tramite una banca",
              ],
              correctAnswer: "Una garanzia in eccesso, superiore alla somma del prestito",
            },
            {
              prompt: "Cosa succede se il valore del collaterale scende sotto una determinata soglia?",
              options: [
                "Il prestito viene automaticamente annullato senza conseguenze",
                "Il protocollo aumenta automaticamente la somma del prestito",
                "Il protocollo liquida automaticamente il collaterale per coprire il debito",
              ],
              correctAnswer: "Il protocollo liquida automaticamente il collaterale per coprire il debito",
            },
            {
              prompt: "Chi riceve l'interesse nel sistema di lending DeFi?",
              options: [
                "Nel lending DeFi non viene pagato alcun interesse a nessuno",
                "Gli utenti che hanno prestato asset tramite il protocollo",
                "Solo gli sviluppatori del protocollo",
              ],
              correctAnswer: "Gli utenti che hanno prestato asset tramite il protocollo",
            },
          ],
        },
        {
          slug: "yield-farming",
          title: "Yield Farming",
          summary: "La ricerca del rendimento massimo combinando diversi protocolli DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Lo Yield Farming è una strategia di ricerca del rendimento massimo attraverso l'allocazione di asset in diversi protocolli DeFi (pool di liquidità, lending, staking), spesso spostando il capitale tra protocolli man mano che cambia il rendimento offerto.",
            },
            {
              type: "paragraph",
              text: "Un rendimento dichiarato molto alto nel farming è spesso legato a un rischio maggiore: la volatilità dei token di ricompensa stessi, il rischio dello smart contract del protocollo o le perdite impermanenti (impermanent loss) nei pool di liquidità. Rendimento e rischio nella DeFi sono di solito strettamente collegati.",
            },
            {
              type: "list",
              items: [
                "Lo yield farming presuppone uno spostamento attivo del capitale tra protocolli in cerca di rendimento",
                "Un rendimento dichiarato molto alto è di solito accompagnato da un rischio maggiore",
                "Le perdite impermanenti (impermanent loss) sono un rischio specifico dei pool di liquidità",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cos'è lo yield farming?",
              options: [
                "Un programma statale di sussidio ai progetti cripto",
                "Un metodo per fare mining di bitcoin con hardware specializzato",
                "Una strategia di ricerca del rendimento massimo attraverso l'allocazione di asset in diversi protocolli DeFi",
              ],
              correctAnswer: "Una strategia di ricerca del rendimento massimo attraverso l'allocazione di asset in diversi protocolli DeFi",
            },
            {
              prompt: "A cosa è di solito legato un rendimento dichiarato molto alto nel farming?",
              options: [
                "All'assenza totale di rischio",
                "A un rischio maggiore (volatilità del token, rischio del contratto, impermanent loss)",
                "A una garanzia di rendimento statale",
              ],
              correctAnswer: "A un rischio maggiore (volatilità del token, rischio del contratto, impermanent loss)",
            },
            {
              prompt: "Cosa sono le perdite impermanenti (impermanent loss)?",
              options: [
                "Una commissione di rete per il trasferimento di token",
                "Una perdita garantita in qualsiasi tipo di staking",
                "Un rischio specifico dei pool di liquidità, legato alla variazione del rapporto di prezzo tra gli asset",
              ],
              correctAnswer: "Un rischio specifico dei pool di liquidità, legato alla variazione del rapporto di prezzo tra gli asset",
            },
          ],
        },
      ],
    },
    {
      title: "Memecoin e nuovi progetti",
      lessons: [
        {
          slug: "launchpad",
          title: "Launchpad",
          summary: "Le piattaforme per il lancio e la vendita anticipata di token di nuovi progetti.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Un Launchpad è una piattaforma che aiuta i nuovi progetti a effettuare la distribuzione iniziale dei token e ad attrarre liquidità iniziale, di solito offrendo un accesso anticipato ai partecipanti della piattaforma in cambio del rispetto di determinate condizioni (staking del token nativo, KYC, ecc.).",
            },
            {
              type: "paragraph",
              text: "Partecipare tramite un launchpad non elimina i rischi del progetto — la reputazione della piattaforma influisce sulla selezione iniziale, ma non garantisce il successo del token dopo il listing. È importante valutare il progetto separatamente dalla piattaforma attraverso cui avviene il lancio.",
            },
            {
              type: "list",
              items: [
                "Il launchpad aiuta i progetti nella distribuzione iniziale dei token e nell'attrazione di liquidità",
                "L'accesso al lancio richiede spesso il rispetto di condizioni della piattaforma (staking, KYC)",
                "La reputazione di un launchpad non garantisce il successo del token dopo il listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Per cosa i progetti usano le piattaforme launchpad?",
              options: [
                "Per rinunciare completamente ad attrarre investitori",
                "Esclusivamente per il supporto tecnico della blockchain",
                "Per la distribuzione iniziale dei token e l'attrazione di liquidità",
              ],
              correctAnswer: "Per la distribuzione iniziale dei token e l'attrazione di liquidità",
            },
            {
              prompt: "Cosa viene spesso richiesto ai partecipanti per accedere a un lancio su un launchpad?",
              options: [
                "Un diploma di analista finanziario",
                "Il rispetto delle condizioni della piattaforma, per esempio lo staking del token nativo",
                "La registrazione di una persona giuridica",
              ],
              correctAnswer: "Il rispetto delle condizioni della piattaforma, per esempio lo staking del token nativo",
            },
            {
              prompt: "Una buona reputazione di un launchpad garantisce il successo del token lanciato attraverso di esso?",
              options: [
                "Sì, è una garanzia di successo al cento per cento",
                "Sì, ma solo per i progetti su Bitcoin",
                "No, il progetto va comunque valutato separatamente",
              ],
              correctAnswer: "No, il progetto va comunque valutato separatamente",
            },
          ],
        },
        {
          slug: "ico",
          title: "ICO",
          summary: "L'offerta iniziale di monete come prima forma di raccolta di capitale nei progetti cripto.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'ICO (Initial Coin Offering) è un modello di raccolta di capitale in cui un progetto vende un nuovo token direttamente agli investitori, di solito in una fase iniziale di sviluppo, in cambio di criptovalute consolidate o valuta fiat. È stato uno dei primi meccanismi di crowdfunding nell'industria cripto.",
            },
            {
              type: "paragraph",
              text: "L'ondata di ICO del 2017 ha mostrato sia il potenziale del modello per una rapida raccolta di capitale, sia i suoi rischi: l'assenza di regolamentazione ha portato a un gran numero di progetti senza un prodotto reale. Questo ha causato la comparsa di formati di lancio più strutturati, tra cui i launchpad e le IDO.",
            },
            {
              type: "list",
              items: [
                "L'ICO è un modello di vendita di un nuovo token direttamente agli investitori in una fase iniziale del progetto",
                "L'ICO è stata una delle prime forme di crowdfunding nell'industria cripto",
                "La scarsa regolamentazione delle ICO ha storicamente portato a un'alta percentuale di progetti non sostenibili",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa rappresenta il modello ICO?",
              options: [
                "Il processo di mining del bitcoin",
                "La vendita di un nuovo token direttamente agli investitori in una fase iniziale del progetto",
                "La regolamentazione statale delle criptovalute",
              ],
              correctAnswer: "La vendita di un nuovo token direttamente agli investitori in una fase iniziale del progetto",
            },
            {
              prompt: "Quale ruolo storico ha svolto l'ICO nell'industria cripto?",
              options: [
                "È diventata una delle prime forme di crowdfunding nelle criptovalute",
                "Ha portato all'abolizione della tecnologia blockchain",
                "Ha sostituito completamente il trading in borsa",
              ],
              correctAnswer: "È diventata una delle prime forme di crowdfunding nelle criptovalute",
            },
            {
              prompt: "A cosa ha portato la scarsa regolamentazione dell'ondata di ICO del 2017?",
              options: [
                "Al divieto immediato di tutte le criptovalute in tutti i paesi",
                "Alla completa scomparsa dei rischi per gli investitori",
                "A un'alta percentuale di progetti senza un prodotto reale",
              ],
              correctAnswer: "A un'alta percentuale di progetti senza un prodotto reale",
            },
          ],
        },
        {
          slug: "ido",
          title: "IDO",
          summary: "L'offerta iniziale su un exchange decentralizzato come alternativa più trasparente all'ICO.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'IDO (Initial DEX Offering) è il collocamento di un token direttamente tramite un exchange decentralizzato o una piattaforma launchpad, in cui la liquidità viene di solito aggiunta al pool subito dopo la vendita, e il listing avviene più rapidamente e in modo più trasparente rispetto a una ICO tradizionale.",
            },
            {
              type: "paragraph",
              text: "L'IDO riduce alcuni dei rischi tipici delle ICO (per esempio il ritardo tra la raccolta fondi e il listing), ma non elimina i rischi del progetto stesso. Un'alta domanda per una IDO porta spesso a una forte volatilità del prezzo subito dopo l'inizio delle contrattazioni.",
            },
            {
              type: "list",
              items: [
                "L'IDO si svolge tramite un exchange decentralizzato o una piattaforma launchpad",
                "La liquidità nel pool viene di solito aggiunta subito dopo la vendita del token",
                "Un'alta domanda per una IDO causa spesso una forte volatilità di prezzo dopo il listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Tramite cosa si svolge di solito una IDO?",
              options: [
                "Tramite un regolatore centrale del mercato",
                "Tramite un exchange decentralizzato o una piattaforma launchpad",
                "Solo tramite una banca tradizionale",
              ],
              correctAnswer: "Tramite un exchange decentralizzato o una piattaforma launchpad",
            },
            {
              prompt: "In cosa la IDO si differenzia dalla ICO classica dal punto di vista del listing?",
              options: [
                "Non esiste alcuna differenza tra ICO e IDO",
                "La IDO non prevede mai il listing di un token",
                "Il listing avviene più velocemente e in modo più trasparente grazie all'aggiunta immediata di liquidità",
              ],
              correctAnswer: "Il listing avviene più velocemente e in modo più trasparente grazie all'aggiunta immediata di liquidità",
            },
            {
              prompt: "Cosa succede spesso al prezzo di un token subito dopo l'inizio delle contrattazioni su una IDO?",
              options: [
                "Le contrattazioni si fermano automaticamente per un giorno",
                "Il prezzo resta sempre perfettamente stabile",
                "Una forte volatilità dovuta all'alta domanda",
              ],
              correctAnswer: "Una forte volatilità dovuta all'alta domanda",
            },
          ],
        },
        {
          slug: "airdrop",
          title: "Airdrop",
          summary: "La distribuzione gratuita di token tra gli utenti e a cosa prestare attenzione.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "L'airdrop è la distribuzione gratuita dei token di un progetto tra un gruppo determinato di utenti, spesso come ricompensa per l'uso anticipato di un protocollo, la partecipazione a una testnet o il completamento di azioni specifiche. È un modo per attirare attenzione e creare una community iniziale di holder.",
            },
            {
              type: "paragraph",
              text: "L'attesa di un potenziale airdrop attira molti utenti, ma crea anche rischi: gli airdrop falsi vengono usati per il phishing e il furto di fondi tramite smart contract malevoli. Un airdrop legittimo non richiede mai l'invio di fondi o chiavi private per ricevere i token.",
            },
            {
              type: "list",
              items: [
                "L'airdrop è la distribuzione gratuita di token tra un gruppo determinato di utenti",
                "L'airdrop ricompensa spesso l'uso anticipato di un protocollo o la partecipazione a una testnet",
                "Un airdrop legittimo non richiede mai l'invio di fondi o chiavi private",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa rappresenta un airdrop di token?",
              options: [
                "Una tassa obbligatoria sulle transazioni in criptovalute",
                "Un abbonamento a pagamento alle notizie del progetto",
                "La distribuzione gratuita di token tra un gruppo determinato di utenti",
              ],
              correctAnswer: "La distribuzione gratuita di token tra un gruppo determinato di utenti",
            },
            {
              prompt: "Per cosa i progetti spesso ricompensano gli utenti tramite airdrop?",
              options: [
                "Per la rimozione del portafoglio dalla rete",
                "Per l'uso anticipato del protocollo o la partecipazione a una testnet",
                "Per recensioni negative sul progetto",
              ],
              correctAnswer: "Per l'uso anticipato del protocollo o la partecipazione a una testnet",
            },
            {
              prompt: "Quale segno dovrebbe insospettire un utente riguardo a un potenziale airdrop?",
              options: [
                "L'assenza di qualsiasi richiesta all'utente",
                "La richiesta di inviare fondi o chiavi private per ricevere i token",
                "Una semplice verifica dell'indirizzo del portafoglio in una lista pubblica",
              ],
              correctAnswer: "La richiesta di inviare fondi o chiavi private per ricevere i token",
            },
          ],
        },
        {
          slug: "kak-iskat-proekty",
          title: "Come cercare i progetti",
          summary: "Una checklist di base per la valutazione iniziale di un nuovo progetto cripto prima di investire.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "La ricerca di progetti promettenti inizia con una verifica di base: chi è il team e se ha una reputazione pubblica, se esiste un prodotto funzionante o solo una presentazione, chi sono gli investitori dei round iniziali, quanto è trasparente ed equilibrata la tokenomics.",
            },
            {
              type: "paragraph",
              text: "È utile anche studiare l'attività della community e lo sviluppo nei repository pubblici, non solo le dichiarazioni di marketing sui social media. Un progetto con un pubblico attivo e in crescita e aggiornamenti regolari del codice merita di solito più fiducia di un progetto con un solo annuncio appariscente.",
            },
            {
              type: "list",
              items: [
                "La verifica di team, prodotto e investitori è il primo passo di base nella valutazione di un progetto",
                "L'attività di sviluppo nei repository pubblici è un segnale più affidabile del marketing",
                "Una tokenomics equilibrata e trasparente riduce il rischio di future pressioni di vendita",
              ],
            },
          ],
          questions: [
            {
              prompt: "Con cosa inizia di solito la verifica di base di un nuovo progetto cripto?",
              options: [
                "Con lo studio del solo logo del progetto",
                "Con l'analisi del team, del prodotto e dei primi investitori",
                "Con l'acquisto immediato del volume massimo del token",
              ],
              correctAnswer: "Con l'analisi del team, del prodotto e dei primi investitori",
            },
            {
              prompt: "Quale segnale è considerato di solito un indicatore più affidabile del reale progresso di un progetto?",
              options: [
                "Il numero di follower sui social media senza altre verifiche",
                "L'attività di sviluppo nei repository di codice pubblici",
                "Il numero di promesse appariscenti nei post di marketing",
              ],
              correctAnswer: "L'attività di sviluppo nei repository di codice pubblici",
            },
            {
              prompt: "Perché vale la pena prestare attenzione alla tokenomics nella valutazione iniziale di un progetto?",
              options: [
                "La tokenomics è importante solo per i progetti senza blockchain",
                "Una tokenomics equilibrata riduce il rischio di future pressioni di vendita",
                "La tokenomics non è in alcun modo collegata ai rischi del progetto",
              ],
              correctAnswer: "Una tokenomics equilibrata riduce il rischio di future pressioni di vendita",
            },
          ],
        },
      ],
    },

    {
      title: "Strategie di trading",
      lessons: [
        {
          slug: "scalping",
          title: "Scalping",
          summary: "Strategia di molte operazioni brevi con piccoli profitti su timeframe di pochi minuti.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Lo scalping è una strategia in cui il trader apre un gran numero di operazioni in poco tempo (secondi o minuti), cercando di ottenere un piccolo profitto da ciascuna. Lo scalping richiede alta concentrazione, commissioni basse e buona liquidità dello strumento.",
            },
            {
              type: "paragraph",
              text: "A causa dell'alta frequenza delle operazioni, anche una commissione minima dell'exchange incide in modo significativo sulla redditività finale dello scalper, da cui l'importanza di un calcolo preciso dei costi. Lo scalping richiede inoltre elevati requisiti di velocità di esecuzione degli ordini e stabilità della connessione.",
            },
            {
              type: "list",
              items: [
                "Lo scalping si basa su molte operazioni brevi con un piccolo obiettivo di profitto",
                "Le commissioni dell'exchange incidono significativamente sulla redditività finale a causa dell'alta frequenza delle operazioni",
                "La strategia richiede un'elevata liquidità dello strumento e un'esecuzione stabile degli ordini",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual è la caratteristica chiave dello scalping come strategia?",
              options: [
                "Il mantenimento di una posizione per diversi mesi",
                "L'abbandono totale dell'analisi del grafico",
                "Un gran numero di operazioni brevi con un piccolo profitto ciascuna",
              ],
              correctAnswer: "Un gran numero di operazioni brevi con un piccolo profitto ciascuna",
            },
            {
              prompt: "Perché le commissioni dell'exchange sono particolarmente importanti per uno scalper?",
              options: [
                "Lo scalping è completamente esente da commissioni su qualsiasi exchange",
                "A causa dell'alta frequenza delle operazioni, incidono significativamente sulla redditività finale",
                "Le commissioni contano solo se la posizione viene mantenuta più di un mese",
              ],
              correctAnswer: "A causa dell'alta frequenza delle operazioni, incidono significativamente sulla redditività finale",
            },
            {
              prompt: "Cosa è particolarmente importante per uno strumento usato nello scalping?",
              options: [
                "L'assenza di un grafico dei prezzi in tempo reale",
                "La liquidità più bassa possibile",
                "Un'elevata liquidità e un'esecuzione rapida degli ordini",
              ],
              correctAnswer: "Un'elevata liquidità e un'esecuzione rapida degli ordini",
            },
          ],
        },
        {
          slug: "day-trading",
          title: "Day Trading",
          summary: "Trading intraday con chiusura di tutte le posizioni prima della fine della sessione.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Il Day Trading è una strategia in cui tutte le operazioni vengono aperte e chiuse nell'arco della stessa giornata, senza riportare la posizione al giorno successivo. Questo elimina il rischio dei gap notturni e permette al trader di controllare completamente la propria esposizione al mercato alla fine della sessione.",
            },
            {
              type: "paragraph",
              text: "Il day trading richiede più tempo di analisi e monitoraggio del mercato durante la giornata rispetto ad approcci di più lungo termine, ma offre più opportunità di ingresso rispetto allo scalping grazie a obiettivi di profitto più ampi.",
            },
            {
              type: "list",
              items: [
                "Tutte le posizioni nel day trading vengono chiuse prima della fine della sessione di trading",
                "L'assenza di riporto della posizione elimina il rischio dei gap notturni",
                "Il day trading richiede un notevole tempo di monitoraggio attivo del mercato",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual è la regola chiave del day trading?",
              options: [
                "Le posizioni vengono obbligatoriamente mantenute per diverse settimane",
                "Le operazioni si aprono solo una volta al mese",
                "Tutte le posizioni vengono chiuse entro la stessa sessione di trading",
              ],
              correctAnswer: "Tutte le posizioni vengono chiuse entro la stessa sessione di trading",
            },
            {
              prompt: "Quale rischio viene eliminato dall'assenza di riporto della posizione al giorno successivo?",
              options: [
                "Il rischio legato alle commissioni dell'exchange",
                "Il rischio di cambio del nome del token",
                "Il rischio dei gap di prezzo notturni",
              ],
              correctAnswer: "Il rischio dei gap di prezzo notturni",
            },
            {
              prompt: "In cosa il day trading differisce dallo scalping riguardo agli obiettivi di profitto?",
              options: [
                "Il day trading non prevede alcun obiettivo di profitto",
                "Gli obiettivi di profitto delle due strategie sono assolutamente identici",
                "Il day trading ha generalmente obiettivi di profitto più ampi per operazione",
              ],
              correctAnswer: "Il day trading ha generalmente obiettivi di profitto più ampi per operazione",
            },
          ],
        },
        {
          slug: "swing-trading",
          title: "Swing Trading",
          summary: "Mantenimento di una posizione da alcuni giorni a alcune settimane su movimenti di medio termine.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Lo Swing Trading è una strategia che consiste nel mantenere posizioni da alcuni giorni a alcune settimane per catturare un movimento di prezzo di medio termine (uno «swing»). Questo richiede meno tempo di monitoraggio costante rispetto al day trading o allo scalping.",
            },
            {
              type: "paragraph",
              text: "Gli swing trader si basano più spesso su timeframe più alti (H4, D1) per determinare il trend e i punti di ingresso, pur sapendo che l'operazione è inevitabilmente esposta ai gap notturni e del weekend, cosa di cui lo stop-loss e la dimensione della posizione devono tenere conto.",
            },
            {
              type: "list",
              items: [
                "Lo swing trading prevede di mantenere una posizione da alcuni giorni a alcune settimane",
                "La strategia richiede meno monitoraggio costante rispetto al day trading o allo scalping",
                "Le posizioni nello swing trading sono esposte al rischio dei gap notturni e del weekend",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual è l'orizzonte tipico di mantenimento di una posizione nello swing trading?",
              options: [
                "Da alcuni secondi a alcuni minuti",
                "Da alcuni giorni a alcune settimane",
                "Diversi anni senza eccezioni",
              ],
              correctAnswer: "Da alcuni giorni a alcune settimane",
            },
            {
              prompt: "Quali timeframe usano più spesso gli swing trader per l'analisi?",
              options: [
                "Esclusivamente il grafico tick per tick",
                "Timeframe più alti, come H4 e D1",
                "Solo il timeframe di un minuto",
              ],
              correctAnswer: "Timeframe più alti, come H4 e D1",
            },
            {
              prompt: "A quale rischio specifico sono esposte le posizioni nello swing trading a causa della loro durata?",
              options: [
                "Al rischio di esecuzione istantanea dell'ordine",
                "All'assenza totale di qualsiasi volatilità",
                "Al rischio dei gap di prezzo notturni e del weekend",
              ],
              correctAnswer: "Al rischio dei gap di prezzo notturni e del weekend",
            },
          ],
        },
        {
          slug: "position-trading",
          title: "Position Trading",
          summary: "Mantenimento di posizioni a lungo termine basato sui grandi trend e sui fattori fondamentali.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Il Position Trading è una strategia che consiste nel mantenere posizioni da alcune settimane a alcuni mesi o più, mirando a catturare i grandi trend di lungo termine. I position trader dedicano meno attenzione al rumore di prezzo a breve termine e più al contesto macroeconomico e fondamentale.",
            },
            {
              type: "paragraph",
              text: "A causa dell'orizzonte lungo, il position trading richiede una maggiore tolleranza ai ritracciamenti intermedi all'interno del trend generale e usa generalmente stop più ampi rispetto al capitale impegnato, compensati da un numero ridotto di posizioni simultanee.",
            },
            {
              type: "list",
              items: [
                "Il position trading mira a mantenere posizioni da alcune settimane a alcuni mesi",
                "La strategia si basa maggiormente sul contesto macroeconomico e fondamentale che sul rumore di breve termine",
                "I position trader usano generalmente stop più ampi e meno posizioni simultanee",
              ],
            },
          ],
          questions: [
            {
              prompt: "Su cosa si concentra principalmente il position trading?",
              options: [
                "Le fluttuazioni di prezzo al minuto",
                "L'arbitraggio tra exchange in tempo reale",
                "Catturare i grandi trend di lungo termine",
              ],
              correctAnswer: "Catturare i grandi trend di lungo termine",
            },
            {
              prompt: "A cosa deve essere preparato un position trader a causa del lungo orizzonte di mantenimento?",
              options: [
                "All'assenza totale di qualsiasi fluttuazione di prezzo",
                "A ritracciamenti intermedi all'interno del trend generale",
                "A dover chiudere l'operazione alla fine di ogni giornata",
              ],
              correctAnswer: "A ritracciamenti intermedi all'interno del trend generale",
            },
            {
              prompt: "Che tipo di analisi gioca un ruolo particolarmente importante nel position trading?",
              options: [
                "Solo l'analisi del book ordini dell'ultimo minuto",
                "L'analisi macroeconomica e fondamentale",
                "Nessuna analisi è necessaria",
              ],
              correctAnswer: "L'analisi macroeconomica e fondamentale",
            },
          ],
        },
        {
          slug: "liquidity-sweep-strategiya",
          title: "Liquidity Sweep",
          summary: "Strategia di trading che consiste nell'entrare dopo uno sweep di liquidità oltre un livello chiave.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Come strategia di trading, il Liquidity Sweep si basa sull'idea che il prezzo spesso rompe falsamente un livello significativo (massimo, minimo, zona di accumulo di stop-loss), vi raccoglie liquidità e poi inverte nella direzione opposta — è proprio questo punto di inversione a fungere da segnale di ingresso.",
            },
            {
              type: "paragraph",
              text: "La differenza chiave rispetto a una semplice rottura di livello è che il trader non attende la prosecuzione del movimento oltre il livello, ma un rapido ritorno del prezzo all'interno del range, il che conferma che la rottura era dovuta a uno sweep di liquidità e non a una reale forza del trend.",
            },
            {
              type: "list",
              items: [
                "La strategia si basa su una falsa rottura di livello seguita da una rapida inversione del prezzo",
                "L'ingresso avviene dopo la conferma del ritorno del prezzo all'interno del range, non nel momento della rottura stessa",
                "La strategia richiede pazienza e conferma per distinguere uno sweep da una reale rottura",
              ],
            },
          ],
          questions: [
            {
              prompt: "Su quale idea si basa la strategia Liquidity Sweep?",
              options: [
                "Una falsa rottura di livello con raccolta di liquidità seguita da un'inversione del prezzo",
                "L'ignoranza totale dei livelli di supporto e resistenza",
                "Il mantenimento costante di una posizione senza analisi dei livelli",
              ],
              correctAnswer: "Una falsa rottura di livello con raccolta di liquidità seguita da un'inversione del prezzo",
            },
            {
              prompt: "Cosa conferma che una rottura di livello era in realtà uno sweep e non una vera rottura?",
              options: [
                "L'assenza totale di volume durante la rottura",
                "La prosecuzione del movimento del prezzo ben oltre il livello",
                "Il rapido ritorno del prezzo all'interno del range dopo la rottura",
              ],
              correctAnswer: "Il rapido ritorno del prezzo all'interno del range dopo la rottura",
            },
            {
              prompt: "Quando un trader che usa questa strategia apre generalmente un'operazione?",
              options: [
                "Immediatamente nel momento in cui il prezzo tocca il livello, senza attendere conferma",
                "Dopo la conferma del ritorno del prezzo all'interno del range",
                "Solo dopo la chiusura della settimana di trading",
              ],
              correctAnswer: "Dopo la conferma del ritorno del prezzo all'interno del range",
            },
          ],
        },
        {
          slug: "breakout",
          title: "Breakout",
          summary: "Strategia di ingresso nella direzione di una rottura confermata di un livello chiave.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Il Breakout (strategia di rottura) consiste nell'entrare nella direzione del movimento quando il prezzo supera un livello significativo di supporto, resistenza o un confine di consolidamento con conferma — solitamente un volume aumentato e la chiusura di una candela oltre il livello, non solo un semplice contatto.",
            },
            {
              type: "paragraph",
              text: "Il rischio principale della strategia breakout è la falsa rottura, in cui il prezzo supera brevemente il livello per poi tornare immediatamente all'interno. Per questo i trader spesso attendono un retest del livello rotto (che diventa così una resistenza in supporto, o viceversa) per un ingresso più affidabile.",
            },
            {
              type: "list",
              items: [
                "La strategia breakout consiste nell'entrare nella direzione di una rottura confermata di un livello significativo",
                "La conferma di una rottura si basa solitamente su un volume aumentato e la chiusura di una candela oltre il livello",
                "Attendere un retest del livello rotto riduce il rischio di entrare su una falsa rottura",
              ],
            },
          ],
          questions: [
            {
              prompt: "Su cosa si basa la strategia di rottura (breakout)?",
              options: [
                "Sull'ingresso esclusivamente in controtendenza rispetto alla rottura",
                "Sull'ignoranza totale dei livelli di supporto e resistenza",
                "Sull'ingresso nella direzione di una rottura confermata di un livello significativo",
              ],
              correctAnswer: "Sull'ingresso nella direzione di una rottura confermata di un livello significativo",
            },
            {
              prompt: "Cosa conferma solitamente una rottura reale piuttosto che falsa?",
              options: [
                "Una diminuzione del volume fino a zero",
                "Un semplice contatto del livello da parte del prezzo senza chiusura di candela",
                "Un volume aumentato e la chiusura di una candela oltre il livello",
              ],
              correctAnswer: "Un volume aumentato e la chiusura di una candela oltre il livello",
            },
            {
              prompt: "Perché i trader a volte attendono un retest del livello rotto prima di entrare?",
              options: [
                "Per aumentare garantitamente la commissione dell'operazione",
                "Il retest non ha alcuna importanza per l'ingresso",
                "Per ridurre il rischio di entrare su una falsa rottura",
              ],
              correctAnswer: "Per ridurre il rischio di entrare su una falsa rottura",
            },
          ],
        },
        {
          slug: "mean-reversion",
          title: "Mean Reversion",
          summary: "Strategia di ritorno alla media dopo una forte deviazione del prezzo.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Il Mean Reversion (ritorno alla media) si basa sull'idea che un prezzo fortemente deviato dal suo valore medio (ad esempio da una media mobile o dal VWAP) tenda a tornarvi nel tempo. La strategia funziona generalmente meglio in un mercato laterale che in un forte trend.",
            },
            {
              type: "paragraph",
              text: "I trader che usano questa strategia combinano spesso oscillatori come l'RSI con livelli di deviazione dalla media (ad esempio le bande di Bollinger), aprendo un'operazione in controtendenza rispetto a un forte movimento di breve termine, in previsione di una correzione verso il livello medio.",
            },
            {
              type: "list",
              items: [
                "La strategia prevede un ritorno del prezzo verso il suo valore medio dopo una forte deviazione",
                "Il mean reversion è generalmente più efficace in un mercato laterale che in un forte trend direzionale",
                "Oscillatori e bande di deviazione sono spesso combinati per individuare i punti di ingresso",
              ],
            },
          ],
          questions: [
            {
              prompt: "Su quale idea si basa la strategia Mean Reversion?",
              options: [
                "Il prezzo non torna mai al suo valore medio",
                "Un prezzo fortemente deviato dal suo valore medio tende a tornarvi",
                "Il prezzo continua sempre il suo movimento nella stessa direzione all'infinito",
              ],
              correctAnswer: "Un prezzo fortemente deviato dal suo valore medio tende a tornarvi",
            },
            {
              prompt: "Su quale tipo di mercato funziona generalmente meglio la strategia mean reversion?",
              options: [
                "Su un mercato senza alcun altro partecipante oltre al trader stesso",
                "Su un mercato laterale",
                "Esclusivamente in periodi di iperinflazione",
              ],
              correctAnswer: "Su un mercato laterale",
            },
            {
              prompt: "Quali strumenti combinano spesso i trader per individuare i punti di ingresso nel mean reversion?",
              options: [
                "Solo le notizie dei social network",
                "Oscillatori come l'RSI e bande di deviazione dalla media",
                "Esclusivamente i dati sulle commissioni dell'exchange",
              ],
              correctAnswer: "Oscillatori come l'RSI e bande di deviazione dalla media",
            },
          ],
        },
      ],
    },
    {
      title: "Esame finale",
      lessons: [
        {
          slug: "polnaya-torgovlya-na-simulyatore",
          title: "Trading completo sul simulatore",
          summary: "Pratica finale: applicazione di tutti i concetti studiati su un conto virtuale.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Questa lezione riunisce tutto il materiale del corso — dai concetti base del mercato alla gestione del rischio, alla psicologia, agli indicatori e alle strategie di trading. L'obiettivo è effettuare una serie di operazioni su un conto virtuale applicando le regole di gestione del rischio e un piano definito in anticipo per ogni operazione.",
            },
            {
              type: "paragraph",
              text: "L'obiettivo di questa fase non è un grande profitto occasionale, ma la dimostrazione di un approccio coerente e disciplinato: calcolo corretto della dimensione della posizione, stop-loss e take-profit giustificati, e la tenuta di un diario per ogni operazione, come fanno i trader professionisti.",
            },
            {
              type: "list",
              items: [
                "Ogni operazione deve essere accompagnata da un piano di ingresso e uscita definito in anticipo",
                "La dimensione della posizione si calcola in base al rischio, non al profitto desiderato",
                "Il risultato di una singola operazione conta meno della coerenza nel rispetto delle regole",
              ],
            },
          ],
          questions: [
            {
              prompt: "Qual è l'obiettivo principale della pratica finale sul conto virtuale?",
              options: [
                "Ottenere il massimo profitto possibile a qualsiasi costo",
                "Dimostrare un approccio coerente e disciplinato al trading",
                "Effettuare il maggior numero possibile di operazioni senza analisi",
              ],
              correctAnswer: "Dimostrare un approccio coerente e disciplinato al trading",
            },
            {
              prompt: "Cosa deve precedere l'apertura di ogni operazione in questa fase?",
              options: [
                "L'aumento massimo della leva",
                "Un piano di ingresso e uscita definito in anticipo",
                "La scelta casuale di un asset senza analisi",
              ],
              correctAnswer: "Un piano di ingresso e uscita definito in anticipo",
            },
            {
              prompt: "Secondo il materiale del corso, da cosa è determinata la dimensione della posizione?",
              options: [
                "Esclusivamente dall'intuizione del trader",
                "Dal tasso di cambio del dollaro al momento dell'operazione",
                "Dal rischio accettabile per operazione, non dal profitto desiderato",
              ],
              correctAnswer: "Dal rischio accettabile per operazione, non dal profitto desiderato",
            },
          ],
        },
        {
          slug: "proyti-vse-zadaniya",
          title: "Bisogna completare tutte le lezioni",
          summary: "Verifica finale: perché è importante completare ogni modulo per finire il corso.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Ogni modulo del corso è costruito per basarsi sul precedente: la comprensione della gestione del rischio si basa sulla comprensione della volatilità e della struttura del mercato, la psicologia del trading sulla comprensione di come funziona il rischio, e le strategie sulla padronanza degli indicatori e dell'analisi del volume.",
            },
            {
              type: "paragraph",
              text: "Saltare alcuni moduli crea lacune che si manifestano più tardi — ad esempio nell'uso di una strategia senza sapere calcolare correttamente la dimensione della posizione adeguata. Per questo completare il corso richiede di finire tutte le lezioni, non solo alcuni moduli a scelta.",
            },
            {
              type: "list",
              items: [
                "I moduli del corso sono costruiti in modo sequenziale e si basano l'uno sull'altro",
                "Saltare un modulo crea lacune che si manifestano nelle fasi successive dell'apprendimento",
                "Completare interamente il corso richiede di finire tutte le lezioni, non solo alcuni moduli",
              ],
            },
          ],
          questions: [
            {
              prompt: "Perché si consiglia di seguire i moduli del corso in ordine?",
              options: [
                "È necessario solo per ottenere XP",
                "L'ordine dei moduli non ha alcuna importanza",
                "Ogni modulo successivo si basa sulle conoscenze dei moduli precedenti",
              ],
              correctAnswer: "Ogni modulo successivo si basa sulle conoscenze dei moduli precedenti",
            },
            {
              prompt: "A cosa può portare saltare alcuni moduli del corso?",
              options: [
                "All'ottenimento automatico di un certificato senza aver studiato",
                "Non ha alcun impatto sul proseguimento dell'apprendimento",
                "A lacune di conoscenza che si manifesteranno nelle fasi successive",
              ],
              correctAnswer: "A lacune di conoscenza che si manifesteranno nelle fasi successive",
            },
            {
              prompt: "Cosa serve per completare interamente il corso?",
              options: [
                "Basta semplicemente aprire la prima lezione del corso",
                "Finire tutte le lezioni, non solo alcuni moduli a scelta",
                "Finire un modulo qualsiasi a scelta",
              ],
              correctAnswer: "Finire tutte le lezioni, non solo alcuni moduli a scelta",
            },
          ],
        },
        {
          slug: "poluchenie-sertifikata",
          title: "Ottenimento del certificato",
          summary: "Cosa significa completare il corso «Il percorso del trader» e come usare queste conoscenze in seguito.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Completare tutti i moduli del corso «Il percorso del trader» significa aver percorso l'intero cammino, dai concetti base del mercato agli argomenti avanzati: indicatori, analisi del volume, dati on-chain, DeFi, tokenomics e costruzione della propria strategia di trading verificata su dati storici.",
            },
            {
              type: "paragraph",
              text: "Completare il corso di per sé non sostituisce l'esperienza pratica: le condizioni reali di mercato, la psicologia vissuta sotto pressione e il lavoro con capitale reale richiedono una pratica continua. Le conoscenze del corso costituiscono la base su cui si costruisce il proseguimento dell'evoluzione come trader.",
            },
            {
              type: "list",
              items: [
                "Il corso copre il percorso dai concetti base del mercato agli argomenti avanzati di analisi e strategia",
                "Completare il corso costituisce una base, non un sostituto di una reale esperienza di trading",
                "Progredire ulteriormente richiede pratica, tenuta di un diario e analisi costante delle proprie decisioni",
              ],
            },
          ],
          questions: [
            {
              prompt: "Cosa copre il completamento integrale del corso «Il percorso del trader»?",
              options: [
                "Solo le basi dell'uso di un wallet",
                "Esclusivamente gli aspetti legali delle criptovalute",
                "Il percorso dai concetti base del mercato agli argomenti avanzati di analisi e strategia",
              ],
              correctAnswer: "Il percorso dai concetti base del mercato agli argomenti avanzati di analisi e strategia",
            },
            {
              prompt: "Completare il corso sostituisce una reale esperienza di trading?",
              options: [
                "Sì, il corso sostituisce completamente qualsiasi pratica",
                "No, il corso costituisce una base, e l'esperienza reale richiede pratica continua",
                "Sì, ma solo per operazioni con leva superiore a 10x",
              ],
              correctAnswer: "No, il corso costituisce una base, e l'esperienza reale richiede pratica continua",
            },
            {
              prompt: "Cosa si consiglia di continuare a fare dopo aver completato il corso?",
              options: [
                "Abbandonare immediatamente qualsiasi gestione del rischio",
                "Tenere un diario di trading e analizzare costantemente le proprie decisioni",
                "Smettere completamente di analizzare il proprio trading",
              ],
              correctAnswer: "Tenere un diario di trading e analizzare costantemente le proprie decisioni",
            },
          ],
        },
      ],
    },
  ],
};
