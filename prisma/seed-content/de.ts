import type { CourseSeed } from "./types";

export const COURSE_DE: CourseSeed = {
  slug: "put-treydera",
  title: "Der Weg des Traders",
  description:
    "Ein strukturierter Weg von den Grundlagen des Marktes bis zur Praxis auf einem virtuellen Konto.",
  modules: [
    {
      title: "Trading-Grundlagen",
      lessons: [
        {
          slug: "chto-takoe-treyding",
          title: "Was ist Trading",
          summary: "Der Unterschied zwischen Investieren und Trading, die wichtigsten Marktteilnehmer.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Trading ist der Kauf und Verkauf von Finanzanlagen (Kryptowährungen, Aktien, Währungen) mit dem Ziel, von Preisänderungen zu profitieren. Im Gegensatz zum klassischen Investieren, bei dem ein Vermögenswert jahrelang gehalten wird in der Erwartung, dass er steigt, verdient ein Trader an der Kursbewegung selbst — sowohl nach oben als auch nach unten.",
            },
            {
              type: "paragraph",
              text: "Am Markt agieren gleichzeitig verschiedene Teilnehmer: Retail-Trader (Privatpersonen), institutionelle Investoren (Fonds, Banken), Market Maker (sorgen für Liquidität) und algorithmische Systeme. Zu verstehen, wer warum handelt, hilft zu erklären, warum sich der Preis gerade so bewegt.",
            },
            {
              type: "list",
              items: [
                "Ein Investor hält einen Vermögenswert meist lange und orientiert sich am fundamentalen Wert",
                "Ein Trader eröffnet und schließt Positionen häufiger — von Minuten bis Wochen",
                "Ein Trader kann auch von fallenden Kursen profitieren, indem er Short-Positionen eröffnet",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worin unterscheidet sich Trading grundlegend vom langfristigen Investieren?",
              options: [
                "Trading beinhaltet häufige Geschäfte auf kurzen Zeithorizonten",
                "Trading steht nur Banken offen",
                "Trading ist nicht mit Risiko verbunden",
              ],
              correctAnswer: "Trading beinhaltet häufige Geschäfte auf kurzen Zeithorizonten",
            },
            {
              prompt: "Wer kann, im Gegensatz zum klassischen Investor, auch an fallenden Kursen verdienen?",
              options: ["Ein Trader, der Short-Positionen eröffnet", "Nur Banken", "Nur Market Maker"],
              correctAnswer: "Ein Trader, der Short-Positionen eröffnet",
            },
            {
              prompt: "Wofür sorgen Market Maker am Markt?",
              options: ["Für Liquidität für die Geschäfte anderer Teilnehmer", "Für staatliche Regulierung", "Für einen festen Kurs des Vermögenswerts"],
              correctAnswer: "Für Liquidität für die Geschäfte anderer Teilnehmer",
            },
          ],
        },
        {
          slug: "vidy-rynkov",
          title: "Marktarten",
          summary: "Krypto, Forex, Aktien und Rohstoffmärkte — worin liegt der Unterschied.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Der Kryptomarkt wird rund um die Uhr ohne Wochenenden gehandelt und ist dezentralisiert — es gibt keine einzelne Börse, die den Preis bestimmt. Forex ist der weltweit größte Markt für Währungspaare mit enormer Liquidität, aber mit eingeschränkten Handelszeiten am Wochenende. Der Aktienmarkt folgt dem Zeitplan konkreter Börsen und ist streng reguliert. Rohstoffmärkte (Öl, Gold) spiegeln das reale Verhältnis von Angebot und Nachfrage wider.",
            },
            {
              type: "list",
              items: [
                "Krypto: 24/7, hohe Volatilität, niedrige Einstiegshürde",
                "Forex: enorme Liquidität, handelt 5 Tage die Woche",
                "Aktien: an das Geschäft des Unternehmens gebunden, Handelszeiten der Börse",
                "Rohstoffe (Commodities): abhängig von realem Angebot/Nachfrage und Geopolitik",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worin unterscheidet sich der Kryptomarkt vom Aktienmarkt?",
              options: ["Er läuft 24/7 ohne Wochenende", "Er wird nur werktags tagsüber gehandelt", "Er ist vollständig staatlich reguliert"],
              correctAnswer: "Er läuft 24/7 ohne Wochenende",
            },
            {
              prompt: "Was wird auf dem Forex-Markt gehandelt?",
              options: ["Währungspaare", "Unternehmensaktien", "Rohstoffe"],
              correctAnswer: "Währungspaare",
            },
            {
              prompt: "Welcher der genannten Märkte zeichnet sich normalerweise durch die höchste Volatilität aus?",
              options: ["Der Kryptomarkt", "Der Markt für Staatsanleihen", "G7-Währungspaare"],
              correctAnswer: "Der Kryptomarkt",
            },
          ],
        },
        {
          slug: "kak-chitat-grafik",
          title: "Wie man einen Chart liest",
          summary: "Achsen, Zeitrahmen, Eröffnungs-/Schlusskurs.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Auf dem Preischart wird auf der vertikalen Achse der Preis des Vermögenswerts abgetragen, auf der horizontalen die Zeit. Jeder Datenpunkt (Kerze oder Balken) enthält Eröffnungs-, Schluss-, Höchst- und Tiefstkurs für den gewählten Zeitraum — das nennt man Zeitrahmen (Timeframe).",
            },
            {
              type: "paragraph",
              text: "Ein Zeitrahmen ist das Zeitintervall, das ein Chart-Element abbildet: Minute, Stunde, Tag, Woche. Die Wahl des Zeitrahmens hängt vom Handelsstil ab: Scalper schauen auf Minutencharts, Swing-Trader auf Stunden- und Tagescharts.",
            },
            {
              type: "list",
              items: [
                "Liniendiagramm — am einfachsten, zeigt nur den Schlusskurs",
                "Kerzenchart (Candlestick) — zeigt Open/High/Low/Close, bei Tradern am beliebtesten",
                "Balkenchart (Bar Chart) — ähnlich dem Kerzenchart, aber visuell weniger anschaulich",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was wird auf der vertikalen Achse eines Preischarts dargestellt?",
              options: ["Der Preis des Vermögenswerts", "Das Handelsvolumen", "Die Anzahl der Trader"],
              correctAnswer: "Der Preis des Vermögenswerts",
            },
            {
              prompt: "Was ist ein Zeitrahmen (Timeframe)?",
              options: [
                "Der Zeitraum, den ein Chart-Element abbildet",
                "Der Name einer Börse",
                "Ein Ordertyp",
              ],
              correctAnswer: "Der Zeitraum, den ein Chart-Element abbildet",
            },
            {
              prompt: "Warum analysieren Trader mehrere Zeitrahmen gleichzeitig?",
              options: [
                "Um gleichzeitig das große Trendbild und den genauen Einstiegspunkt zu sehen",
                "Das hat keinen praktischen Sinn",
                "Um Börsengebühren zu umgehen",
              ],
              correctAnswer: "Um gleichzeitig das große Trendbild und den genauen Einstiegspunkt zu sehen",
            },
          ],
        },
        {
          slug: "svechnoy-analiz",
          title: "Kerzenanalyse",
          summary: "Die Anatomie der japanischen Kerze und grundlegende Kerzenmuster.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Die japanische Kerze ist das wichtigste Werkzeug zur Preisvisualisierung für Trader. Sie besteht aus dem Körper (Bereich zwischen Eröffnungs- und Schlusskurs) und den Dochten oben und unten (Höchst- und Tiefstkurs im Zeitraum). Eine grüne (bullische) Kerze bedeutet, dass der Schlusskurs über dem Eröffnungskurs liegt, eine rote (bärische) — umgekehrt.",
            },
            {
              type: "paragraph",
              text: "Eine einzelne Kerze erzählt bereits die Geschichte des Kampfes zwischen Käufern und Verkäufern: Ein langer Körper spricht für eine entschlossene Bewegung, lange Dochte dafür, dass der Preis aktiv in die Gegenrichtung \"zurückgedrängt\" wurde.",
            },
          ],
          questions: [
            {
              prompt: "Was zeigt der Körper einer Kerze?",
              options: [
                "Den Bereich zwischen Eröffnungs- und Schlusskurs",
                "Das maximale Handelsvolumen",
                "Die Anzahl der Marktteilnehmer",
              ],
              correctAnswer: "Den Bereich zwischen Eröffnungs- und Schlusskurs",
            },
            {
              prompt: "Was zeigen die Dochte einer Kerze?",
              options: [
                "Die Preisspanne außerhalb des Körpers — Höchst- und Tiefstkurs im Zeitraum",
                "Das durchschnittliche Handelsvolumen",
                "Die Anzahl der Geschäfte pro Tag",
              ],
              correctAnswer: "Die Preisspanne außerhalb des Körpers — Höchst- und Tiefstkurs im Zeitraum",
            },
            {
              prompt: "Wofür kann ein langer unterer Docht nach einem Kursrückgang sprechen?",
              options: [
                "Käufer haben den Preis von unten aktiv zurückgekauft — eine Umkehr ist möglich",
                "Der Markt wird definitiv weiter fallen",
                "Das Handelsvolumen war null",
              ],
              correctAnswer: "Käufer haben den Preis von unten aktiv zurückgekauft — eine Umkehr ist möglich",
            },
          ],
        },
        {
          slug: "podderzhka-i-soprotivlenie",
          title: "Unterstützung und Widerstand",
          summary: "Wie man Schlüssellevel auf dem Chart findet.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Ein Unterstützungslevel ist ein Preis, an dem Käufer in der Vergangenheit wiederholt einen Rückgang gestoppt haben. Ein Widerstandslevel ist umgekehrt ein Preis, an dem Verkäufer einen Anstieg gestoppt haben. Diese Level bilden das \"Gedächtnis\" des Marktes: Der Preis reagiert oft wiederholt auf sie.",
            },
            {
              type: "paragraph",
              text: "Ein wichtiges Prinzip: Nach einem Durchbruch wechselt ein Level oft seine Rolle — ehemaliger Widerstand wird zur Unterstützung und umgekehrt. Zuverlässige Level werden nicht anhand eines einzigen Punktes gebildet, sondern anhand mehrerer Preisberührungen.",
            },
          ],
          questions: [
            {
              prompt: "Was ist ein Unterstützungslevel?",
              options: [
                "Ein Preis, an dem Käufer historisch einen Rückgang gestoppt haben",
                "Der Eröffnungskurs der Börse",
                "Eine Gebühr für ein Geschäft",
              ],
              correctAnswer: "Ein Preis, an dem Käufer historisch einen Rückgang gestoppt haben",
            },
            {
              prompt: "Was passiert normalerweise mit einem Widerstandslevel, nachdem es nach oben durchbrochen wurde?",
              options: [
                "Es wird oft zur neuen Unterstützung",
                "Es verschwindet und beeinflusst den Preis nicht mehr",
                "Der Preis muss sofort zurückkehren",
              ],
              correctAnswer: "Es wird oft zur neuen Unterstützung",
            },
            {
              prompt: "Wie baut man zuverlässige Level auf dem Chart richtig auf?",
              options: [
                "Anhand mehrerer Preisberührungen, nicht anhand eines einzigen Punktes",
                "Genau in der Mitte des Charts",
                "Nur auf dem Minutenchart",
              ],
              correctAnswer: "Anhand mehrerer Preisberührungen, nicht anhand eines einzigen Punktes",
            },
          ],
        },
        {
          slug: "trend-i-ego-struktura",
          title: "Der Trend und seine Struktur",
          summary: "Aufwärts-, Abwärts- und Seitwärtstrend, Hoch/Tief-Struktur.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Ein Aufwärtstrend besteht aus einer Abfolge höherer Hochs (Higher High) und höherer Tiefs (Higher Low). Ein Abwärtstrend ist das Spiegelbild: Lower High und Lower Low. Wenn sich der Preis in einer Spanne ohne klare Richtung bewegt, nennt man das einen Seitwärtstrend oder eine Flat-Phase.",
            },
            {
              type: "paragraph",
              text: "Der Handel in Trendrichtung gibt statistisch mehr Erfolgschancen als der Versuch, eine Umkehr gegen ihn zu erwischen — daher die bekannte Regel \"der Trend ist dein Freund\".",
            },
          ],
          questions: [
            {
              prompt: "Woraus besteht ein Aufwärtstrend?",
              options: [
                "Aus einer Abfolge höherer Hochs und Tiefs",
                "Aus gleich hohen Kerzen",
                "Nur aus aufeinanderfolgenden grünen Kerzen",
              ],
              correctAnswer: "Aus einer Abfolge höherer Hochs und Tiefs",
            },
            {
              prompt: "Was ist ein Seitwärtstrend (Flat)?",
              options: [
                "Preisbewegung in einer Spanne ohne klare Richtung",
                "Ein scharfer Kursrückgang",
                "Ein Zeitraum, in dem der Handel an der Börse ausgesetzt ist",
              ],
              correctAnswer: "Preisbewegung in einer Spanne ohne klare Richtung",
            },
            {
              prompt: "Warum sagt man \"der Trend ist dein Freund\"?",
              options: [
                "Handel in Trendrichtung gibt statistisch mehr Erfolgschancen",
                "Ein Trend ändert nie seine Richtung",
                "Das ist nur eine Redewendung ohne praktischen Sinn",
              ],
              correctAnswer: "Handel in Trendrichtung gibt statistisch mehr Erfolgschancen",
            },
          ],
        },
        {
          slug: "obyom-i-likvidnost",
          title: "Volumen und Liquidität",
          summary: "Warum man das Volumen beobachten sollte und was Marktliquidität ist.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Das Handelsvolumen zeigt, wie viel von einem Vermögenswert in einem Zeitraum gekauft und verkauft wurde. Starke Kursbewegungen, die von hohem Volumen bestätigt werden, gelten als zuverlässiger als gleiche Bewegungen bei niedrigem Volumen.",
            },
            {
              type: "paragraph",
              text: "Liquidität ist die Fähigkeit, einen Vermögenswert schnell und ohne starken Einfluss auf seinen Preis zu kaufen oder zu verkaufen. Bei Vermögenswerten mit geringer Liquidität kann selbst ein kleines Geschäft den Preis stark bewegen und zu Slippage führen — der Ausführung einer Order zu einem schlechteren Preis als erwartet.",
            },
          ],
          questions: [
            {
              prompt: "Was besagt ein Kursanstieg bei niedrigem Handelsvolumen?",
              options: [
                "Die Bewegung ist schwach und möglicherweise nicht bestätigt",
                "Das ist das zuverlässigste Einstiegssignal",
                "Die Liquidität des Vermögenswerts ist maximal",
              ],
              correctAnswer: "Die Bewegung ist schwach und möglicherweise nicht bestätigt",
            },
            {
              prompt: "Was ist Marktliquidität?",
              options: [
                "Die Leichtigkeit, einen Vermögenswert zu kaufen/verkaufen, ohne seinen Preis stark zu beeinflussen",
                "Die Gesamtzahl der im Umlauf befindlichen Coins",
                "Die Gebühr der Börse für ein Geschäft",
              ],
              correctAnswer: "Die Leichtigkeit, einen Vermögenswert zu kaufen/verkaufen, ohne seinen Preis stark zu beeinflussen",
            },
            {
              prompt: "Was droht einem Trader beim Handel mit einem Vermögenswert geringer Liquidität?",
              options: [
                "Starke Slippage bei der Ausführung des Geschäfts",
                "Vollständiger Wegfall der Gebühren",
                "Garantierter Gewinn",
              ],
              correctAnswer: "Starke Slippage bei der Ausführung des Geschäfts",
            },
          ],
        },
        {
          slug: "risk-menedzhment-osnovy",
          title: "Risikomanagement: Grundlagen",
          summary: "Positionsgröße, Stop-Loss, Risiko/Ertrags-Verhältnis.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Risikomanagement ist das, was einen professionellen Trader von einem Casino-Spieler unterscheidet. Ein Stop-Loss ist ein im Voraus festgelegtes Level, bei dem eine Position mit begrenztem Verlust geschlossen wird, falls sich der Markt gegen die Prognose bewegt.",
            },
            {
              type: "paragraph",
              text: "Die meisten erfahrenen Trader riskieren nicht mehr als 1–2 % des Kapitals pro Geschäft — so lässt sich eine Serie von Verlustgeschäften überstehen, ohne das gesamte Kapital zu verlieren. Das Risiko/Ertrags-Verhältnis (Risk/Reward) zeigt, um wie viel Mal der potenzielle Gewinn das Risiko übersteigt: Ein Verhältnis von 1:3 bedeutet zum Beispiel, dass der Gewinn dreimal so groß ist wie der mögliche Verlust.",
            },
            {
              type: "list",
              items: [
                "Der Stop-Loss wird vor dem Einstieg in ein Geschäft gesetzt, nicht danach",
                "Die Positionsgröße wird anhand des Risikos in Geld berechnet, nicht umgekehrt",
                "Selbst eine profitable Strategie kann ohne Risikokontrolle ruinieren",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wozu dient ein Stop-Loss?",
              options: [
                "Um den Verlust eines Geschäfts im Voraus zu begrenzen",
                "Um die Positionsgröße zu erhöhen",
                "Um einen Gewinn zu garantieren",
              ],
              correctAnswer: "Um den Verlust eines Geschäfts im Voraus zu begrenzen",
            },
            {
              prompt: "Wie viel Prozent des Kapitals wird üblicherweise empfohlen, in einem Geschäft zu riskieren?",
              options: ["1–2 %", "25–30 %", "Das gesamte Kapital"],
              correctAnswer: "1–2 %",
            },
            {
              prompt: "Was bedeutet ein Risiko/Ertrags-Verhältnis von 1:3?",
              options: [
                "Der potenzielle Gewinn ist 3-mal so groß wie das Risiko",
                "Das Risiko ist 3-mal so groß wie der Gewinn",
                "Das Geschäft schließt sich nach 3 Stunden",
              ],
              correctAnswer: "Der potenzielle Gewinn ist 3-mal so groß wie das Risiko",
            },
          ],
        },
      ],
    },
    {
      title: "Technische Analyse",
      lessons: [
        {
          slug: "skolzyashchie-srednie",
          title: "Indikatoren: Gleitende Durchschnitte",
          summary: "SMA und EMA — wie man sie zur Trendbestimmung nutzt.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Ein gleitender Durchschnitt (Moving Average) glättet den Preis über einen gewählten Zeitraum und hilft, die allgemeine Trendrichtung ohne das \"Rauschen\" einzelner Kerzen zu erkennen. Der SMA (einfacher gleitender Durchschnitt) gewichtet alle Preise im Zeitraum gleich, der EMA (exponentieller gleitender Durchschnitt) reagiert stärker auf die letzten Preise.",
            },
            {
              type: "paragraph",
              text: "Befindet sich der Preis über dem gleitenden Durchschnitt, gilt der Trend meist als aufwärtsgerichtet, darunter als abwärtsgerichtet. Die Kreuzung eines kurzen und eines langen gleitenden Durchschnitts (zum Beispiel kreuzt MA50 den MA200 von unten nach oben) ist ein beliebtes Signal, bekannt als \"Golden Cross\".",
            },
          ],
          questions: [
            {
              prompt: "Worin besteht der Unterschied zwischen SMA und EMA?",
              options: [
                "Der EMA gewichtet die letzten Preise stärker",
                "Der SMA funktioniert nur auf dem Minutenchart",
                "Es gibt keinen Unterschied, es ist dasselbe",
              ],
              correctAnswer: "Der EMA gewichtet die letzten Preise stärker",
            },
            {
              prompt: "Was besagt es, wenn sich der Preis über dem gleitenden Durchschnitt befindet?",
              options: ["Der Trend ist wahrscheinlich aufwärtsgerichtet", "Der Vermögenswert ist definitiv überbewertet", "Das Handelsvolumen ist null"],
              correctAnswer: "Der Trend ist wahrscheinlich aufwärtsgerichtet",
            },
            {
              prompt: "Was nennt man einen \"Golden Cross\"?",
              options: [
                "Das Kreuzen eines kurzen MA über einen langen MA — ein bullisches Signal",
                "Den Moment des Listings eines neuen Coins",
                "Das Kreuzen des Preises mit der Nulllinie",
              ],
              correctAnswer: "Das Kreuzen eines kurzen MA über einen langen MA — ein bullisches Signal",
            },
          ],
        },
        {
          slug: "rsi-i-oscillyatory",
          title: "RSI und Oszillatoren",
          summary: "Überkauft, überverkauft, Divergenzen.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Der RSI (Relative Strength Index) ist ein Oszillator, der Geschwindigkeit und Stärke der Preisänderung in einem Bereich von 0 bis 100 misst. Werte über 70 gelten meist als Überkauft-Zone, unter 30 als Überverkauft-Zone.",
            },
            {
              type: "paragraph",
              text: "Eine Divergenz entsteht, wenn sich Preis und RSI in unterschiedliche Richtungen bewegen: Der Preis erreicht zum Beispiel ein neues Hoch, der RSI jedoch nicht. Das wird oft als frühe Warnung vor einer Trendabschwächung und einer möglichen Umkehr betrachtet.",
            },
          ],
          questions: [
            {
              prompt: "In welchem Bereich arbeitet der RSI-Indikator?",
              options: ["Von 0 bis 100", "Von -1 bis 1", "Von 0 bis 10000"],
              correctAnswer: "Von 0 bis 100",
            },
            {
              prompt: "Was bedeutet ein RSI über 70 üblicherweise?",
              options: ["Der Vermögenswert befindet sich in der Überkauft-Zone", "Der Vermögenswert kann nicht verkauft werden", "Das Handelsvolumen ist auf null gefallen"],
              correctAnswer: "Der Vermögenswert befindet sich in der Überkauft-Zone",
            },
            {
              prompt: "Was ist eine RSI-Divergenz?",
              options: [
                "Preis und Indikator bewegen sich in unterschiedliche Richtungen — ein Signal für eine mögliche Umkehr",
                "Vollständige Übereinstimmung der Bewegung von Preis und Indikator",
                "Ein technischer Fehler des Indikators",
              ],
              correctAnswer: "Preis und Indikator bewegen sich in unterschiedliche Richtungen — ein Signal für eine mögliche Umkehr",
            },
          ],
        },
        {
          slug: "urovni-fibonachchi",
          title: "Fibonacci-Level",
          summary: "Fibonacci-Retracements und -Extensions in der Chartmarkierung.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Fibonacci-Retracement-Level (23,6 %, 38,2 %, 50 %, 61,8 %, 78,6 %) werden zwischen Anfang und Ende einer Impulsbewegung gezogen und helfen abzuschätzen, wo der Preis einen Rücksetzer vor der Trendfortsetzung stoppen könnte. Das 61,8-%-Level gilt bei vielen Tradern als Schlüssellevel.",
            },
            {
              type: "paragraph",
              text: "Fibonacci-Extensions dienen, im Gegensatz zu Retracements, der Prognose von Kurszielen jenseits des ursprünglichen Impulses — also wohin sich der Preis weiter bewegen könnte.",
            },
          ],
          questions: [
            {
              prompt: "Welches Fibonacci-Level gilt bei vielen Tradern als Schlüssellevel für Retracements?",
              options: ["61,8 %", "10 %", "100 %"],
              correctAnswer: "61,8 %",
            },
            {
              prompt: "Wofür nutzt man Fibonacci-Retracements?",
              options: [
                "Um Einstiegspunkte bei einem Rücksetzer innerhalb des Trends zu suchen",
                "Um die Börsengebühr zu berechnen",
                "Um den genauen Zeitpunkt einer Nachrichtenveröffentlichung zu bestimmen",
              ],
              correctAnswer: "Um Einstiegspunkte bei einem Rücksetzer innerhalb des Trends zu suchen",
            },
            {
              prompt: "Wofür braucht man Fibonacci-Extensions?",
              options: [
                "Um Kursziele jenseits des Impulses zu bestimmen",
                "Um die Größe des Stop-Loss in Prozent zu bestimmen",
                "Um das Handelsvolumen anzuzeigen",
              ],
              correctAnswer: "Um Kursziele jenseits des Impulses zu bestimmen",
            },
          ],
        },
        {
          slug: "patterny-razvorota",
          title: "Umkehrmuster",
          summary: "Kopf-Schulter-Formation, Doppel-Top/Boden.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Die \"Kopf-Schulter\"-Formation ist eines der bekanntesten Umkehrsignale eines Aufwärtstrends: Der Preis bildet drei Gipfel, wobei der mittlere (Kopf) höher ist als die beiden benachbarten (Schultern). Doppel-Top/Boden ist ein sinngemäß ähnliches Muster aus zwei etwa gleich hohen Gipfeln oder Tälern.",
            },
            {
              type: "paragraph",
              text: "Das Muster gilt erst als bestätigt, nachdem die \"Nackenlinie\" (Neckline) durchbrochen wurde — das Level, das die lokalen Tiefpunkte zwischen den Gipfeln verbindet. Ein Durchbruch ohne Volumen erweist sich oft als falsch.",
            },
          ],
          questions: [
            {
              prompt: "Was signalisiert die \"Kopf-Schulter\"-Formation?",
              options: [
                "Eine wahrscheinliche Umkehr des Aufwärtstrends",
                "Eine garantierte Fortsetzung des Anstiegs",
                "Eine Aussetzung des Börsenhandels",
              ],
              correctAnswer: "Eine wahrscheinliche Umkehr des Aufwärtstrends",
            },
            {
              prompt: "Was bestätigt die Erfüllung des \"Doppel-Top\"-Musters?",
              options: ["Ein Durchbruch der Nackenlinie nach unten", "Das Erscheinen eines dritten Gipfels", "Volumenanstieg am höchsten Punkt"],
              correctAnswer: "Ein Durchbruch der Nackenlinie nach unten",
            },
            {
              prompt: "Warum ist das Volumen bei der Bestätigung eines Musterdurchbruchs wichtig?",
              options: [
                "Ohne Volumen erweist sich ein Durchbruch häufiger als falsch",
                "Volumen hat überhaupt keinen Einfluss auf Muster",
                "Volumen wird nur auf dem Tageschart benötigt",
              ],
              correctAnswer: "Ohne Volumen erweist sich ein Durchbruch häufiger als falsch",
            },
          ],
        },
        {
          slug: "patterny-prodolzheniya",
          title: "Fortsetzungsmuster",
          summary: "Flaggen, Dreiecke, Rechtecke.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Fortsetzungsmuster — Flaggen, Dreiecke, Rechtecke — stellen eine Pause oder Konsolidierung innerhalb eines bereits bestehenden Trends dar. Im Gegensatz zu Umkehrmustern lösen sie sich meist in Richtung der vorherigen Bewegung auf.",
            },
            {
              type: "paragraph",
              text: "Der Ausbruch des Preises aus einer solchen Konsolidierung geht üblicherweise mit einem Volumenanstieg einher, was hilft, einen echten Ausbruch von einem falschen zu unterscheiden.",
            },
          ],
          questions: [
            {
              prompt: "In welche Richtung löst sich das \"Flaggen\"-Muster meistens auf?",
              options: ["In Richtung des vorherigen Trends", "Immer streng nach unten", "In eine zufällige Richtung"],
              correctAnswer: "In Richtung des vorherigen Trends",
            },
            {
              prompt: "Was haben Dreiecke, Flaggen und Rechtecke gemeinsam?",
              options: [
                "Es sind Pausen/Konsolidierungen innerhalb eines Trends",
                "Es sind immer Umkehrsignale",
                "Sie kommen nur bei Forex vor",
              ],
              correctAnswer: "Es sind Pausen/Konsolidierungen innerhalb eines Trends",
            },
            {
              prompt: "Was begleitet meistens einen echten Ausbruch aus einem Dreieck?",
              options: ["Ein Volumenanstieg", "Das völlige Fehlen von Volumen", "Eine Aussetzung des Handels"],
              correctAnswer: "Ein Volumenanstieg",
            },
          ],
        },
        {
          slug: "multitaymfreym-analiz",
          title: "Zeitrahmen und Multi-Timeframe-Analyse",
          summary: "Wie man Signale auf verschiedenen Zeitrahmen abgleicht.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Die Multi-Timeframe-Analyse ist ein \"Top-down\"-Ansatz: Zunächst bestimmt man den allgemeinen Trend auf dem übergeordneten Zeitrahmen (zum Beispiel dem Tageschart), dann sucht man den Einstiegspunkt auf dem untergeordneten (zum Beispiel dem Stunden- oder 15-Minuten-Chart).",
            },
            {
              type: "paragraph",
              text: "Das Ignorieren des übergeordneten Zeitrahmens ist ein häufiger Anfängerfehler: Ein Geschäft kann auf dem 5-Minuten-Chart hervorragend aussehen, aber gegen den dominierenden Tagestrend laufen, was die Erfolgschancen drastisch senkt.",
            },
          ],
          questions: [
            {
              prompt: "Mit welchem Zeitrahmen beginnt man üblicherweise die Analyse nach der \"Top-down\"-Methode?",
              options: ["Mit dem übergeordneten (zum Beispiel dem Tageschart)", "Mit dem Minutenchart", "Mit einem beliebigen zufälligen"],
              correctAnswer: "Mit dem übergeordneten (zum Beispiel dem Tageschart)",
            },
            {
              prompt: "Wofür braucht man den untergeordneten Zeitrahmen bei der Multi-Timeframe-Analyse?",
              options: ["Für einen präzisen Einstieg in das Geschäft", "Um den übergeordneten Zeitrahmen vollständig zu ersetzen", "Um die Börsengebühr zu berechnen"],
              correctAnswer: "Für einen präzisen Einstieg in das Geschäft",
            },
            {
              prompt: "Was kann passieren, wenn man den übergeordneten Zeitrahmen ignoriert?",
              options: [
                "Handel gegen den Haupttrend",
                "Eine automatische Gewinnsteigerung",
                "Nichts, das spielt keine Rolle",
              ],
              correctAnswer: "Handel gegen den Haupttrend",
            },
          ],
        },
        {
          slug: "psikhologiya-treydera",
          title: "Trader-Psychologie",
          summary: "Emotionskontrolle, Disziplin, Handelstagebuch.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Angst und Gier sind die beiden Emotionen, die Handelsstrategien am häufigsten zerstören. Angst führt dazu, profitable Positionen zu früh zu schließen oder gar nicht erst in den Markt einzusteigen, Gier dazu, eine Position länger als geplant zu halten oder das Risiko nach einer Erfolgsserie zu erhöhen.",
            },
            {
              type: "paragraph",
              text: "\"Revenge Trading\" — der Versuch, einen Verlust sofort durch eine Serie emotionaler Geschäfte ohne Analyse wieder auszugleichen — ist einer der schnellsten Wege, das Kapital zu verlieren. Ein Handelstagebuch zu führen hilft, Fehler zu analysieren und schrittweise Disziplin zu entwickeln.",
            },
          ],
          questions: [
            {
              prompt: "Was ist \"Revenge Trading\"?",
              options: [
                "Der Versuch, einen Verlust sofort durch emotionale Geschäfte auszugleichen",
                "Eine offizielle Strategie von Hedgefonds",
                "Die Rückerstattung von Gebühren durch die Börse",
              ],
              correctAnswer: "Der Versuch, einen Verlust sofort durch emotionale Geschäfte auszugleichen",
            },
            {
              prompt: "Warum sollte ein Trader ein Handelstagebuch führen?",
              options: [
                "Um Fehler zu analysieren und die Strategie zu verbessern",
                "Das ist eine Vorschrift der Börse",
                "Um Steuern zu reduzieren",
              ],
              correctAnswer: "Um Fehler zu analysieren und die Strategie zu verbessern",
            },
            {
              prompt: "Welche Emotion führt am häufigsten dazu, eine Verlustposition zu lange zu halten?",
              options: ["Hoffnung auf eine Umkehr und Angst, den Verlust zu realisieren", "Langeweile", "Vertrauen in die Richtigkeit der Börse"],
              correctAnswer: "Hoffnung auf eine Umkehr und Angst, den Verlust zu realisieren",
            },
          ],
        },
        {
          slug: "pervaya-virtualnaya-sdelka",
          title: "Das erste virtuelle Geschäft",
          summary: "Alles Gelernte auf dem virtuellen Guthaben anwenden.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Es ist Zeit, die Theorie zusammenzuführen: Bevor Sie ein Geschäft eröffnen, legen Sie den Einstiegspunkt fest (basierend auf Levels und Trendstruktur), den Stop-Loss (maximal zulässiger Verlust) und das Gewinnziel — im Voraus, bevor Sie auf Long oder Short klicken.",
            },
            {
              type: "paragraph",
              text: "Der Bereich \"Virtueller Markt\" von ASTREX erlaubt es, den gesamten Prozess mit simulierten Daten zu üben, ohne echtes Geld zu riskieren — das ist der beste Weg, Disziplin zu entwickeln, bevor man mit echtem Kapital handelt.",
            },
          ],
          questions: [
            {
              prompt: "Was muss man vor der Eröffnung eines Geschäfts festlegen?",
              options: [
                "Einstiegspunkt, Stop-Loss und Gewinnziel",
                "Nur den Einstiegspunkt",
                "Man muss vorher gar nichts festlegen",
              ],
              correctAnswer: "Einstiegspunkt, Stop-Loss und Gewinnziel",
            },
            {
              prompt: "Warum zunächst mit virtuellem Guthaben üben?",
              options: [
                "Um eine Strategie zu üben, ohne echtes Geld zu riskieren",
                "Virtuelles Guthaben bringt mehr Gewinn",
                "Das ist eine gesetzliche Pflicht",
              ],
              correctAnswer: "Um eine Strategie zu üben, ohne echtes Geld zu riskieren",
            },
            {
              prompt: "Was sollte man direkt nach dem Schließen eines Geschäfts tun?",
              options: [
                "Es analysieren und das Ergebnis im Tagebuch festhalten",
                "Sofort ein Gegengeschäft eröffnen",
                "Den Verlauf des Geschäfts löschen",
              ],
              correctAnswer: "Es analysieren und das Ergebnis im Tagebuch festhalten",
            },
          ],
        },
      ],
    },
    {
      title: "Makroökonomie und Kryptomarkt",
      lessons: [
        {
          slug: "frs-i-protsentnye-stavki",
          title: "Die Fed und die Zinssätze",
          summary: "Wie Zinsentscheidungen der US-Notenbank den gesamten Markt bewegen, einschließlich Krypto.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Die Fed (US-Notenbank) legt den Leitzins fest, von dem die Kosten des Geldes in der gesamten Weltwirtschaft abhängen. Wird der Zinssatz erhöht, werden Kredite teurer, und Investoren ziehen sich aus riskanten Anlagen — Aktien und Kryptowährungen — in Anleihen und Einlagen zurück.",
            },
            {
              type: "paragraph",
              text: "Wenn die Fed den Zinssatz senkt oder eine Lockerung der Politik andeutet, steigen riskante Anlagen üblicherweise: Geld wird billiger, und Investoren sind wieder bereit, für Rendite Risiken einzugehen.",
            },
            {
              type: "list",
              items: [
                "FOMC-Sitzungen finden 8 Mal im Jahr statt — das sind Schlüsseltermine für den Markt",
                "Der Markt reagiert nicht nur auf die Entscheidung selbst, sondern auch auf die Rhetorik (\"hawkish\" oder \"dovish\")",
                "Der Kryptomarkt reagiert wegen des hohen Anteils spekulativen Kapitals besonders empfindlich auf den Zinssatz",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wie reagiert der Markt üblicherweise auf eine Zinserhöhung der Fed?",
              options: [
                "Riskante Anlagen (einschließlich Krypto) fallen meistens",
                "Der Kryptomarkt reagiert überhaupt nicht auf den Zinssatz",
                "Bitcoin steigt bei Zinserhöhungen immer",
              ],
              correctAnswer: "Riskante Anlagen (einschließlich Krypto) fallen meistens",
            },
            {
              prompt: "Was ist das FOMC?",
              options: [
                "Das Gremium der Fed, das über den Leitzins entscheidet",
                "Die größte Krypto-Börse der USA",
                "Ein Volatilitätsindex des Marktes",
              ],
              correctAnswer: "Das Gremium der Fed, das über den Leitzins entscheidet",
            },
            {
              prompt: "Wie nennt man eine Lockerung der Geldpolitik im Marktjargon?",
              options: ["\"Dovish\" (taubenhaft)", "\"Hawkish\" (falkenhaft)", "\"Neutrale\" Emission"],
              correctAnswer: "\"Dovish\" (taubenhaft)",
            },
          ],
        },
        {
          slug: "inflyatsiya-i-cpi",
          title: "Inflation und der CPI-Index",
          summary: "Warum Inflationsdaten den Markt stärker bewegen als viele andere Nachrichten.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Der CPI (Verbraucherpreisindex) ist der wichtigste Inflationsindikator in den USA und wird monatlich veröffentlicht. Ist die Inflation höher als erwartet, preist der Markt eine straffere Fed-Politik ein — riskante Anlagen fallen. Verlangsamt sich die Inflation, freut sich der Markt und steigt.",
            },
            {
              type: "list",
              items: [
                "Die CPI-Veröffentlichung ist einer der volatilsten Momente des Monats am Kryptomarkt",
                "Wichtig ist nicht der Wert selbst, sondern seine Abweichung von der Analystenprognose",
                "Neben dem CPI gibt es den PCE — den von der Fed bevorzugten Inflationsindikator",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was misst der CPI-Index?",
              options: [
                "Die Preisveränderung eines Warenkorbs aus Konsumgütern und Dienstleistungen",
                "Den Bitcoin-Kurs gegenüber dem Dollar",
                "Das Handelsvolumen an der Börse",
              ],
              correctAnswer: "Die Preisveränderung eines Warenkorbs aus Konsumgütern und Dienstleistungen",
            },
            {
              prompt: "Wie reagiert der Markt üblicherweise, wenn der CPI höher als erwartet ausfällt?",
              options: [
                "Riskante Anlagen fallen häufiger",
                "Der Markt reagiert nie auf den CPI",
                "Der Kryptomarkt setzt den Handel automatisch aus",
              ],
              correctAnswer: "Riskante Anlagen fallen häufiger",
            },
            {
              prompt: "Welcher Inflationsindikator gilt als der von der Fed selbst bevorzugte?",
              options: ["PCE", "DXY", "RSI"],
              correctAnswer: "PCE",
            },
          ],
        },
        {
          slug: "indeks-dollara-dxy",
          title: "Der Dollarindex (DXY)",
          summary: "Die inverse Korrelation von Dollar und Kryptowährungen.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Der DXY misst die Stärke des US-Dollars gegenüber einem Korb anderer Währungen. Historisch bewegen sich DXY und Bitcoin oft gegenläufig: Ein starker Dollar belastet Krypto und andere riskante Anlagen, ein schwacher Dollar unterstützt deren Anstieg.",
            },
            {
              type: "paragraph",
              text: "Erfahrene Trader halten den DXY-Chart auf einem separaten Panel neben BTC — ein scharfer Anstieg des Dollarindex warnt oft vor einer Korrektur am Kryptomarkt, noch bevor dies im Bitcoin-Chart selbst sichtbar wird.",
            },
          ],
          questions: [
            {
              prompt: "Was misst der DXY-Index?",
              options: [
                "Die Stärke des US-Dollars gegenüber einem Korb anderer Währungen",
                "Die Volatilität von Bitcoin",
                "Die Gesamtmarktkapitalisierung des Kryptomarkts",
              ],
              correctAnswer: "Die Stärke des US-Dollars gegenüber einem Korb anderer Währungen",
            },
            {
              prompt: "Wie hängen die Bewegungen von DXY und Bitcoin üblicherweise zusammen?",
              options: [
                "Sie bewegen sich häufiger in entgegengesetzte Richtungen",
                "Sie bewegen sich immer absolut synchron",
                "Sie hängen überhaupt nicht zusammen",
              ],
              correctAnswer: "Sie bewegen sich häufiger in entgegengesetzte Richtungen",
            },
            {
              prompt: "Wovor kann ein scharfer Anstieg des DXY-Index warnen?",
              options: [
                "Vor einer wahrscheinlichen Korrektur am Kryptomarkt",
                "Vor einem garantierten Anstieg von Bitcoin",
                "Vor einem technischen Ausfall der Börse",
              ],
              correctAnswer: "Vor einer wahrscheinlichen Korrektur am Kryptomarkt",
            },
          ],
        },
        {
          slug: "korrelyatsiya-s-fondovym-rynkom",
          title: "Korrelation mit dem Aktienmarkt",
          summary: "Der Zusammenhang zwischen Bitcoin, dem Nasdaq-Index und der Risikobereitschaft.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "In den letzten Jahren verhält sich Bitcoin zunehmend wie eine risikoreiche Technologieanlage und nicht wie \"digitales Gold\" — sein Kurs korreliert nicht selten mit dem Nasdaq-Index. Wenn Investoren bereitwillig Tech-Aktien kaufen, steigt meist auch der Kryptomarkt, und umgekehrt.",
            },
            {
              type: "paragraph",
              text: "Diese Korrelation ist nicht konstant: Bei kryptospezifischen Ereignissen (Börsenhack, regulatorische Nachrichten, ein großes Listing) kann sich der Kryptomarkt unabhängig von Aktien bewegen.",
            },
          ],
          questions: [
            {
              prompt: "Mit welcher Anlageklasse korreliert Bitcoin in den letzten Jahren am häufigsten?",
              options: [
                "Mit Technologieaktien (Nasdaq)",
                "Mit Staatsanleihen",
                "Es korreliert mit nichts",
              ],
              correctAnswer: "Mit Technologieaktien (Nasdaq)",
            },
            {
              prompt: "Was bedeutet eine hohe Korrelation von BTC und Nasdaq?",
              options: [
                "Sie bewegen sich häufiger in dieselbe Richtung",
                "Sie müssen sich in entgegengesetzte Richtungen bewegen",
                "BTC ersetzt den Nasdaq-Index vollständig",
              ],
              correctAnswer: "Sie bewegen sich häufiger in dieselbe Richtung",
            },
            {
              prompt: "Was kann die Korrelation von BTC mit dem Aktienmarkt vorübergehend schwächen?",
              options: [
                "Kryptospezifische Ereignisse (Börsenhack, regulatorische Nachrichten)",
                "Ein Feiertag an der Börse",
                "Eine Zeitzonenänderung",
              ],
              correctAnswer: "Kryptospezifische Ereignisse (Börsenhack, regulatorische Nachrichten)",
            },
          ],
        },
        {
          slug: "ekonomicheskiy-kalendar",
          title: "Wirtschaftskalender und Nachrichten",
          summary: "Welche Ereignisse man vor einem Geschäft unbedingt verfolgen sollte.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Der Wirtschaftskalender ist der Veröffentlichungsplan wichtiger makroökonomischer Daten: Fed-Sitzungen, Inflationsberichte (CPI), Arbeitsmarktberichte (NFP) und andere Kennzahlen, die die Volatilität stark erhöhen können.",
            },
            {
              type: "paragraph",
              text: "Ereignisse im Kalender sind üblicherweise mit einem Einflussgrad markiert (hoch/mittel/niedrig). Vor Veröffentlichungen hoher Wichtigkeit reduzieren erfahrene Trader oft das Risiko, verkleinern ihre Positionen oder verzichten ganz auf neue Geschäfte — die Volatilität kann in solchen Momenten unvorhersehbar sein.",
            },
          ],
          questions: [
            {
              prompt: "Wofür braucht ein Trader einen Wirtschaftskalender?",
              options: [
                "Um Termine wichtiger, marktbewegender Nachrichten zu verfolgen",
                "Um den persönlichen Urlaub zu planen",
                "Um die technische Analyse vollständig zu ersetzen",
              ],
              correctAnswer: "Um Termine wichtiger, marktbewegender Nachrichten zu verfolgen",
            },
            {
              prompt: "Was ist der NFP?",
              options: [
                "Der Bericht über die Beschäftigung außerhalb der Landwirtschaft in den USA",
                "Ein neues kryptografisches Protokoll",
                "Ein Angst-und-Gier-Index",
              ],
              correctAnswer: "Der Bericht über die Beschäftigung außerhalb der Landwirtschaft in den USA",
            },
            {
              prompt: "Was ist vor der Veröffentlichung einer Nachricht hoher Wichtigkeit sinnvoll?",
              options: [
                "Das Risiko senken oder auf neue Geschäfte verzichten",
                "Die Positionsgröße maximal erhöhen",
                "Die Stop-Losses deaktivieren",
              ],
              correctAnswer: "Das Risiko senken oder auf neue Geschäfte verzichten",
            },
          ],
        },
      ],
    },
    {
      title: "Smart-Money-Konzepte",
      lessons: [
        {
          slug: "imbalans-i-fvg",
          title: "Imbalance und Fair Value Gap (FVG)",
          summary: "Preisineffizienz-Zonen und wie man sie im Chart findet.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Eine Imbalance ist eine Zone im Chart, in der sich der Preis zu schnell in eine Richtung bewegt hat, ohne beiden Seiten (Käufern und Verkäufern) einen vollwertigen Handel zu ermöglichen. Solche Zonen \"kehrt der Markt oft zurück, um sie zu schließen\".",
            },
            {
              type: "paragraph",
              text: "Der Fair Value Gap (FVG) ist ein Spezialfall der Imbalance aus drei Kerzen: Zwischen dem Docht der ersten und dem Docht der dritten Kerze bleibt eine sichtbare Lücke. Das ist eine der beliebtesten Interessenzonen in den Smart Money Concepts.",
            },
            { type: "diagram", diagram: "fvg", caption: "Klassischer bullischer FVG auf drei Kerzen" },
            { type: "diagram", diagram: "imbalance", caption: "Breitere Imbalance-Zone auf einer einzelnen Impulskerze" },
          ],
          questions: [
            {
              prompt: "Was ist ein Fair Value Gap (FVG)?",
              options: [
                "Eine Lücke zwischen den Dochten der 1. und 3. Kerze aufgrund eines scharfen Impulses",
                "Ein Stop-Loss-Level",
                "Ein Volumenindikator",
              ],
              correctAnswer: "Eine Lücke zwischen den Dochten der 1. und 3. Kerze aufgrund eines scharfen Impulses",
            },
            {
              prompt: "Was macht der Markt am häufigsten später mit einer Imbalance-Zone?",
              options: [
                "Er kehrt zurück und \"schließt\" sie teilweise oder vollständig",
                "Er berührt sie nie wieder",
                "Er löscht sie automatisch aus dem Chart",
              ],
              correctAnswer: "Er kehrt zurück und \"schließt\" sie teilweise oder vollständig",
            },
            {
              prompt: "Aus wie vielen Kerzen besteht das klassische FVG-Muster?",
              options: ["Aus drei", "Aus einer", "Aus sieben"],
              correctAnswer: "Aus drei",
            },
          ],
        },
        {
          slug: "likvidnost-na-rynke",
          title: "Liquidität und ihre Arten",
          summary: "Wo im Chart sich die offenen Orders großer Marktteilnehmer ansammeln.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Liquidität ist die Ansammlung offener Orders (Stop-Losses und Limit-Orders) auf konkreten Preislevels. Meistens sammelt sie sich hinter gleichen Hochs/Tiefs und offensichtlichen Unterstützungs-/Widerstandslevels, die alle sehen.",
            },
            {
              type: "list",
              items: [
                "Buy-Side-Liquidität — Stopps von Shortern oberhalb lokaler Hochs",
                "Sell-Side-Liquidität — Stopps von Longern unterhalb lokaler Tiefs",
                "Große Marktteilnehmer brauchen Liquidität, um eine Position ohne starke Slippage aufzubauen oder zu schließen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wo sammelt sich Liquidität im Chart am häufigsten an?",
              options: [
                "Bei gleichen Hochs/Tiefs und offensichtlichen Unterstützungs-/Widerstandslevels",
                "Streng in der Mitte der Spanne ohne Grund",
                "Nur auf Nachrichtenkerzen",
              ],
              correctAnswer: "Bei gleichen Hochs/Tiefs und offensichtlichen Unterstützungs-/Widerstandslevels",
            },
            {
              prompt: "Was ist Buy-Side-Liquidität?",
              options: [
                "Stopps von Shortern, die sich oberhalb lokaler Hochs befinden",
                "Stopps von Longern unterhalb lokaler Tiefs",
                "Eine Börsengebühr für den Kauf",
              ],
              correctAnswer: "Stopps von Shortern, die sich oberhalb lokaler Hochs befinden",
            },
            {
              prompt: "Wozu brauchen große Marktteilnehmer Liquidität?",
              options: [
                "Um eine große Position ohne starke Slippage aufzubauen oder zu schließen",
                "Um den Handel vollständig auszusetzen",
                "Das hat nichts mit großen Marktteilnehmern zu tun",
              ],
              correctAnswer: "Um eine große Position ohne starke Slippage aufzubauen oder zu schließen",
            },
          ],
        },
        {
          slug: "snyatie-likvidnosti",
          title: "Liquidity Sweep",
          summary: "Warum der Preis zuerst Stopps herausnimmt und sich dann umkehrt.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Ein Liquidity Sweep ist eine Situation, in der der Preis absichtlich ein Level mit Liquidität durchsticht (zum Beispiel gleiche Hochs), die offenen Orders einsammelt und sich dann scharf in die entgegengesetzte Richtung umkehrt — dorthin, wohin die große Bewegung ursprünglich geplant war.",
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "Durchstich gleicher Hochs und scharfe Umkehr nach unten" },
            {
              type: "paragraph",
              text: "Das Verständnis von Sweeps hilft, nicht in die Falle zu tappen: Ein Durchbruch eines Levels allein garantiert keine Fortsetzung der Bewegung in diese Richtung — oft ist es nur eine Liquiditätsjagd.",
            },
          ],
          questions: [
            {
              prompt: "Was passiert mit dem Preis üblicherweise unmittelbar nach einem Liquidity Sweep?",
              options: [
                "Eine scharfe Umkehr in die dem Durchstich entgegengesetzte Richtung",
                "Der Preis setzt die Bewegung immer in Richtung des Durchstichs fort",
                "Nichts, das Volumen fällt auf null",
              ],
              correctAnswer: "Eine scharfe Umkehr in die dem Durchstich entgegengesetzte Richtung",
            },
            {
              prompt: "Welche Zone wird am häufigsten zum Ziel eines Liquidity Sweeps?",
              options: [
                "Eine Zone mit offenen Orders — zum Beispiel gleiche Hochs/Tiefs",
                "Die Mitte einer zufälligen Spanne ohne Levels",
                "Eine Zone ohne jede Liquidität",
              ],
              correctAnswer: "Eine Zone mit offenen Orders — zum Beispiel gleiche Hochs/Tiefs",
            },
            {
              prompt: "Welcher Fehler ist typisch für Anfänger beim Anblick eines Sweeps?",
              options: [
                "Einstieg in Richtung des Durchbruchs, ohne eine mögliche Umkehr zu berücksichtigen",
                "Ein zu frühes Schließen einer profitablen Position",
                "Das Setzen eines Stop-Loss vor dem Einstieg in ein Geschäft",
              ],
              correctAnswer: "Einstieg in Richtung des Durchbruchs, ohne eine mögliche Umkehr zu berücksichtigen",
            },
          ],
        },
        {
          slug: "struktura-trenda-bos-choch",
          title: "Trendstruktur: BOS und CHoCH",
          summary: "Wie man anhand von Hochs und Tiefs bestimmt, ob ein Trend noch lebt oder bereits gebrochen ist.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Ein Aufwärtstrend besteht aus einer Abfolge von Higher High (HH) und Higher Low (HL). Solange diese Struktur erhalten bleibt, gilt der Trend als intakt.",
            },
            {
              type: "paragraph",
              text: "Break of Structure (BOS) — ein Durchbruch des vorherigen Hochs, der die Fortsetzung des Trends bestätigt. Change of Character (CHoCH) — ein Durchbruch in die Gegenrichtung, das erste Signal für eine mögliche Trendumkehr.",
            },
            { type: "diagram", diagram: "trend-structure", caption: "HH/HL-Struktur eines Aufwärtstrends und BOS" },
          ],
          questions: [
            {
              prompt: "Was signalisiert ein Change of Character (CHoCH)?",
              options: [
                "Eine mögliche Umkehr des aktuellen Trends",
                "Eine Fortsetzung des Trends mit Beschleunigung",
                "Das Fehlen von Liquidität am Markt",
              ],
              correctAnswer: "Eine mögliche Umkehr des aktuellen Trends",
            },
            {
              prompt: "Was bestätigt ein Break of Structure (BOS)?",
              options: [
                "Die Fortsetzung des aktuellen Trends",
                "Eine automatische Aussetzung des Handels",
                "Die Aufhebung aller vorherigen Levels",
              ],
              correctAnswer: "Die Fortsetzung des aktuellen Trends",
            },
            {
              prompt: "Woraus besteht die Struktur eines Aufwärtstrends?",
              options: [
                "Aus Higher High und Higher Low",
                "Aus Lower High und Lower Low",
                "Aus gleich hohen Kerzen",
              ],
              correctAnswer: "Aus Higher High und Higher Low",
            },
          ],
        },
        {
          slug: "order-bloki",
          title: "Order Blocks",
          summary: "Zonen, von denen aus große Marktteilnehmer starke Kursbewegungen ausgelöst haben.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Ein Order Block ist die letzte entgegengesetzte Kerze vor einer starken Impulsbewegung des Preises. Zum Beispiel gilt die letzte rote Kerze vor einem scharfen Anstieg als bullischer Order Block: Man geht davon aus, dass genau dort große Marktteilnehmer ihre Position aufgebaut haben.",
            },
            {
              type: "paragraph",
              text: "Trader nutzen Order Blocks als potenzielle Einstiegszonen: Kehrt der Preis in Zukunft zu dieser Zone zurück, wird eine Reaktion erwartet — eine Fortsetzung der Bewegung in der ursprünglichen Richtung.",
            },
          ],
          questions: [
            {
              prompt: "Was ist ein Order Block?",
              options: [
                "Die letzte entgegengesetzte Kerze vor einer starken Impulsbewegung",
                "Ein Indikator für das Handelsvolumen",
                "Ein Ordertyp mit verzögerter Ausführung",
              ],
              correctAnswer: "Die letzte entgegengesetzte Kerze vor einer starken Impulsbewegung",
            },
            {
              prompt: "Wie nutzen Trader Order Blocks üblicherweise?",
              options: [
                "Als potenzielle Einstiegszonen bei Rückkehr des Preises",
                "Als Inflationsindikator",
                "Um die Börsengebühr zu berechnen",
              ],
              correctAnswer: "Als potenzielle Einstiegszonen bei Rückkehr des Preises",
            },
            {
              prompt: "Wodurch unterscheidet sich ein bullischer Order Block von einem bärischen?",
              options: [
                "Er bildet sich vor einem Impuls nach oben, nicht nach unten",
                "Er ist immer größer",
                "Er erscheint nur auf dem Tageschart",
              ],
              correctAnswer: "Er bildet sich vor einem Impuls nach oben, nicht nach unten",
            },
          ],
        },
      ],
    },
  ],
};
