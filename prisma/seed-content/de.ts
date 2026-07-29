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

    {
      title: "Risikomanagement",
      lessons: [
        {
          slug: "risk-reward",
          title: "Risk/Reward",
          summary: "Das Verhältnis von Risiko zu Ertrag und warum es wichtiger ist als die Gewinnquote.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Risk/Reward (R/R) ist das Verhältnis des potenziellen Verlusts zum potenziellen Gewinn eines Geschäfts. Wenn Sie 100 $ riskieren, um 300 $ zu verdienen, beträgt Ihr R/R 1:3. Dies ist eine der zentralen Kennzahlen, die bestimmt, ob ein Handelssystem langfristig profitabel ist.",
            },
            {
              type: "paragraph",
              text: "Selbst ein System mit niedriger Gewinnquote kann profitabel sein, wenn das durchschnittliche R/R hoch genug ist. Bei einem R/R von 1:3 reicht es beispielsweise, in nur 30 % der Fälle richtig zu liegen, um im Plus zu bleiben. Deshalb konzentrieren sich erfahrene Trader nicht auf die Trefferquote, sondern auf den Erwartungswert eines Geschäfts.",
            },
            {
              type: "list",
              items: [
                "Das R/R wird vor dem Einstieg in ein Geschäft berechnet, nicht danach",
                "Je höher das R/R, desto niedriger kann die erforderliche Gewinnquote sein",
                "Ein gutes R/R garantiert ohne Disziplin bei der Ausführung keinen Gewinn",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was bedeutet ein Risk/Reward-Verhältnis von 1:3?",
              options: [
                "Der potenzielle Gewinn ist 3-mal so groß wie das potenzielle Risiko",
                "Das Geschäft schließt nach 3 Stunden",
                "Man muss 3 Geschäfte hintereinander eröffnen",
              ],
              correctAnswer: "Der potenzielle Gewinn ist 3-mal so groß wie das potenzielle Risiko",
            },
            {
              prompt: "Warum kann ein System mit R/R 1:3 selbst bei einer Gewinnquote von 40 % profitabel sein?",
              options: [
                "Der Gewinn aus erfolgreichen Geschäften gleicht die Verluste aus erfolglosen Geschäften aus",
                "Weil 40 % immer höher als 33 % ist",
                "Weil die Börsengebühren sinken",
              ],
              correctAnswer: "Der Gewinn aus erfolgreichen Geschäften gleicht die Verluste aus erfolglosen Geschäften aus",
            },
            {
              prompt: "Wann sollte ein Trader das Risk/Reward eines Geschäfts berechnen?",
              options: [
                "Vor dem Einstieg in das Geschäft",
                "Erst nach dem Schließen des Geschäfts",
                "Das R/R muss nicht berechnet werden",
              ],
              correctAnswer: "Vor dem Einstieg in das Geschäft",
            },
          ],
        },
        {
          slug: "razmer-pozitsii",
          title: "Positionsgröße",
          summary: "Wie man die Handelsgröße auf Basis des Risikos für das Kapital berechnet statt auf Basis des gewünschten Gewinns.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Die Positionsgröße (Position Sizing) ist der Kapitalbetrag, den Sie in ein bestimmtes Geschäft investieren. Sie sollte nicht durch den gewünschten Gewinn bestimmt werden, sondern durch das zulässige Risiko: Üblicherweise riskieren Trader nicht mehr als 1–2 % des Kapitals pro Geschäft, unabhängig davon, wie überzeugend das Setup aussieht.",
            },
            {
              type: "paragraph",
              text: "Die Formel ist einfach: Positionsgröße = (Kapital × Risikoprozentsatz) / Abstand zum Stop-Loss in Prozent. Dieser Ansatz berücksichtigt automatisch die Volatilität des Assets und den Abstand des Stops — je weiter der Stop entfernt ist, desto kleiner ist die Positionsgröße bei gleichem Risiko in Dollar.",
            },
            {
              type: "list",
              items: [
                "Ein fester Risikoprozentsatz schützt das Kapital vor einer Serie von Verlustgeschäften",
                "Die Positionsgröße sollte kleiner werden, wenn der Stop-Loss weit entfernt gesetzt wird",
                "Der Einsatz von Hebel erhöht die Positionsgröße, hebt aber die Risikoberechnung nicht auf",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wovon sollte die Positionsgröße in erster Linie abhängen?",
              options: [
                "Vom zulässigen Risiko in Prozent des Kapitals",
                "Davon, wie viel Geld auf der Karte verfügbar ist",
                "Von der Stimmung des Traders",
              ],
              correctAnswer: "Vom zulässigen Risiko in Prozent des Kapitals",
            },
            {
              prompt: "Was passiert mit der Positionsgröße, wenn der Stop-Loss weiter vom Einstiegspreis entfernt gesetzt wird?",
              options: [
                "Die Positionsgröße sollte bei gleichem Dollarrisiko sinken",
                "Die Positionsgröße sollte steigen",
                "Die Positionsgröße hat nichts mit dem Abstand zum Stop zu tun",
              ],
              correctAnswer: "Die Positionsgröße sollte bei gleichem Dollarrisiko sinken",
            },
            {
              prompt: "Wie viel Prozent des Kapitals wird üblicherweise empfohlen, in einem Geschäft zu riskieren?",
              options: ["1–2 %", "25–30 %", "50 %"],
              correctAnswer: "1–2 %",
            },
          ],
        },
        {
          slug: "stop-loss",
          title: "Stop-Loss",
          summary: "Wozu ein Stop-Loss dient, wo man ihn richtig setzt und welche Fehler am häufigsten gemacht werden.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Ein Stop-Loss ist ein im Voraus festgelegtes Preislevel, bei dessen Erreichen ein Geschäft automatisch mit Verlust geschlossen wird. Es ist das wichtigste Instrument zum Schutz des Kapitals: Es begrenzt den Verlust auf einen vorab bekannten Betrag, anstatt den Verlust unkontrolliert wachsen zu lassen.",
            },
            {
              type: "paragraph",
              text: "Der Stop-Loss sollte anhand der Marktstruktur gesetzt werden — hinter dem nächstgelegenen Unterstützungs- oder Widerstandslevel oder dem Extremum einer Kerze — und nicht anhand des Betrags, den der Trader zu verlieren bereit ist. Ein zu enger Stop wird durch normales Marktrauschen ausgelöst, ein zu weiter erhöht das Risiko der Position.",
            },
            {
              type: "list",
              items: [
                "Der Stop-Loss schützt vor emotionalen Entscheidungen im Moment eines Rückgangs",
                "Das Stop-Level sollte sich an der Chartstruktur orientieren, nicht am gewünschten Verlustbetrag",
                "Den Stop während eines Rückgangs weiter vom Preis wegzuschieben, ist einer der häufigsten Anfängerfehler",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist die Hauptfunktion eines Stop-Loss?",
              options: [
                "Den Verlust auf einen vorab bekannten Betrag zu begrenzen",
                "Den Gewinn des Geschäfts zu erhöhen",
                "Die Position automatisch zu verdoppeln",
              ],
              correctAnswer: "Den Verlust auf einen vorab bekannten Betrag zu begrenzen",
            },
            {
              prompt: "Worauf sollte das Stop-Loss-Level am sinnvollsten basieren?",
              options: [
                "Auf der Marktstruktur (Unterstützungs-/Widerstandslevels)",
                "Auf dem gewünschten Gewinnbetrag",
                "Auf einer zufälligen Zahl",
              ],
              correctAnswer: "Auf der Marktstruktur (Unterstützungs-/Widerstandslevels)",
            },
            {
              prompt: "Welcher Fehler ist typisch für Anfänger während eines Rückgangs in einem Geschäft?",
              options: [
                "Den Stop-Loss weiter vom Preis wegzuschieben, um dem Geschäft „mehr Chancen zu geben“",
                "Das Geschäft strikt am Stop zu schließen",
                "Das Risiko vor dem Einstieg zu berechnen",
              ],
              correctAnswer: "Den Stop-Loss weiter vom Preis wegzuschieben, um dem Geschäft „mehr Chancen zu geben“",
            },
          ],
        },
        {
          slug: "take-profit",
          title: "Take Profit",
          summary: "Wie man Gewinnziele setzt und wann sich eine teilweise Schließung der Position lohnt.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Take Profit (TP) ist ein im Voraus festgelegtes Level, bei dem ein Geschäft automatisch mit Gewinn geschlossen wird. Wie der Stop-Loss sollte er sich an der Marktlogik orientieren — am nächstgelegenen Widerstands- oder Unterstützungslevel oder einer Liquiditätszone — und nicht an dem willkürlichen Wunsch, einen bestimmten Betrag zu verdienen.",
            },
            {
              type: "paragraph",
              text: "Viele Trader nutzen eine teilweise Schließung: Sie sichern einen Teil der Position beim ersten Ziel und lassen den Rest weiterlaufen, während der Stop auf den Einstiegspreis (Break-even) nachgezogen wird. So kann gleichzeitig Gewinn gesichert werden, ohne das Geschäft zu früh zu verlassen, falls sich die Bewegung fortsetzt.",
            },
            {
              type: "list",
              items: [
                "Der TP sollte, ebenso wie der Stop, anhand der Chartstruktur gesetzt werden",
                "Eine teilweise Schließung verringert den psychologischen Druck während des Geschäfts",
                "Das Nachziehen des Stops auf Break-even nach dem ersten Ziel schützt den bereits erzielten Gewinn",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worauf sollte das Take-Profit-Level basieren?",
              options: [
                "Auf der Chartstruktur: Widerstands-, Unterstützungs- oder Liquiditätslevels",
                "Auf einer zufälligen Zahl, die dem Trader gefällt",
                "Auf der Anzahl der Stunden, die im Geschäft verbracht wurden",
              ],
              correctAnswer: "Auf der Chartstruktur: Widerstands-, Unterstützungs- oder Liquiditätslevels",
            },
            {
              prompt: "Warum nutzen Trader eine teilweise Schließung der Position?",
              options: [
                "Um einen Teil des Gewinns zu sichern und den Rest weiterlaufen zu lassen",
                "Um die Börsengebühr zu erhöhen",
                "Um das Geschäft zwangsläufig mit Verlust zu schließen",
              ],
              correctAnswer: "Um einen Teil des Gewinns zu sichern und den Rest weiterlaufen zu lassen",
            },
            {
              prompt: "Was macht man üblicherweise mit dem Stop-Loss, nachdem das erste Gewinnziel erreicht wurde?",
              options: [
                "Man zieht ihn auf Break-even nach, um den erzielten Gewinn zu schützen",
                "Man entfernt den Stop-Loss vollständig",
                "Man verschiebt ihn weiter vom Preis weg",
              ],
              correctAnswer: "Man zieht ihn auf Break-even nach, um den erzielten Gewinn zu schützen",
            },
          ],
        },
        {
          slug: "psihologiya-ubytkov",
          title: "Psychologie der Verluste",
          summary: "Wie Verlustgeschäfte die Entscheidungen eines Traders beeinflussen und warum es wichtig ist, Verluste gelassen hinzunehmen.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Verluste sind ein unvermeidlicher Teil des Tradings: Selbst ein profitables System verliert bei einzelnen Geschäften regelmäßig Geld. Das Problem liegt nicht im Verlust selbst, sondern in der Reaktion darauf — dem Versuch, ihn sofort mit erhöhtem Volumen „wieder hereinzuholen“, oder der Weigerung, ein Geschäft am Stop zu schließen, in der Hoffnung auf eine Umkehr.",
            },
            {
              type: "paragraph",
              text: "Ein Trader, der jeden Verlust als erwartete statistische Kosten des Systems begreift und nicht als persönliches Versagen, trifft rationalere Entscheidungen. Das Führen eines Handelstagebuchs und ein im Voraus festgelegtes Risiko pro Geschäft helfen dabei, Emotionen vom Prozess zu trennen.",
            },
            {
              type: "list",
              items: [
                "Eine Verlustserie ist ein normaler Bestandteil selbst eines profitablen Handelssystems",
                "Der Versuch, einen Verlust „wieder hereinzuholen“, erhöht meist das Risiko statt des Gewinns",
                "Ein im Voraus festgelegtes Risiko pro Geschäft verringert den emotionalen Druck im Moment eines Verlusts",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wie sollte man einen einzelnen Verlust im Trading am sinnvollsten betrachten?",
              options: [
                "Als erwartete statistische Kosten des Handelssystems",
                "Als Zeichen dafür, das Volumen des nächsten Geschäfts sofort zu verdoppeln",
                "Als Anlass, das Führen des Handelstagebuchs einzustellen",
              ],
              correctAnswer: "Als erwartete statistische Kosten des Handelssystems",
            },
            {
              prompt: "Wozu führt der Versuch, sich unmittelbar nach einem Verlust „zurückzuholen“, meistens?",
              options: [
                "Zu erhöhtem Risiko und neuen Verlusten",
                "Zu garantiertem Gewinn",
                "Zur automatischen Stornierung des vorherigen Geschäfts",
              ],
              correctAnswer: "Zu erhöhtem Risiko und neuen Verlusten",
            },
            {
              prompt: "Was hilft einem Trader, Emotionen von Handelsentscheidungen zu trennen?",
              options: [
                "Ein im Voraus festgelegtes Risiko pro Geschäft und das Führen eines Tagebuchs",
                "Der vollständige Verzicht auf die Analyse von Geschäften",
                "Die Erhöhung des Hebels nach jedem Verlust",
              ],
              correctAnswer: "Ein im Voraus festgelegtes Risiko pro Geschäft und das Führen eines Tagebuchs",
            },
          ],
        },
      ],
    },
    {
      title: "Trader-Psychologie",
      lessons: [
        {
          slug: "fomo",
          title: "FOMO",
          summary: "Die Angst, eine Bewegung zu verpassen, und warum sie dazu verleitet, im schlechtesten Moment einzusteigen.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "FOMO (Fear Of Missing Out) ist die Angst, eine profitable Preisbewegung zu verpassen. Sie entsteht, wenn ein Asset stark steigt und der Trader sieht, wie andere „verdienen“, während er selbst nicht dabei ist. Unter dem Einfluss von FOMO werden Geschäfte oft ohne Plan, auf dem Höhepunkt der Bewegung und ohne Berücksichtigung des Risikos eröffnet.",
            },
            {
              type: "paragraph",
              text: "Das Problem bei FOMO ist, dass der Einstieg genau dann erfolgt, wenn die Bewegung bereits größtenteils gelaufen ist und das Umkehrrisiko maximal ist. Ein disziplinierter Trader hält sich an im Voraus festgelegte Einstiegsbedingungen und lässt eine Bewegung aus, wenn sie nicht zu seiner Strategie passt.",
            },
            {
              type: "list",
              items: [
                "FOMO verleitet meist dazu, erst nach einer bereits starken Preisbewegung einzusteigen",
                "Von FOMO getriebene Entscheidungen werden meist ohne Stop-Loss und Risikoberechnung getroffen",
                "Ein im Voraus festgelegter Handelsplan verringert den Einfluss von FOMO",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist FOMO im Trading?",
              options: [
                "Die Angst, eine profitable Preisbewegung zu verpassen",
                "Ein technischer Volumenindikator",
                "Ein Ordertyp an der Börse",
              ],
              correctAnswer: "Die Angst, eine profitable Preisbewegung zu verpassen",
            },
            {
              prompt: "In welcher Phase der Preisbewegung steigt ein Trader unter dem Einfluss von FOMO meist ein?",
              options: [
                "Gegen Ende der Bewegung, wenn das Umkehrrisiko bereits hoch ist",
                "Ganz am Anfang der Bewegung",
                "Bevor die Bewegung überhaupt begonnen hat",
              ],
              correctAnswer: "Gegen Ende der Bewegung, wenn das Umkehrrisiko bereits hoch ist",
            },
            {
              prompt: "Was hilft, den Einfluss von FOMO auf die Entscheidungen eines Traders zu verringern?",
              options: [
                "Ein im Voraus festgelegter Plan und Einstiegsbedingungen",
                "Das ständige Verfolgen der profitablen Geschäfte anderer",
                "Die Erhöhung des Hebels im Moment eines starken Anstiegs",
              ],
              correctAnswer: "Ein im Voraus festgelegter Plan und Einstiegsbedingungen",
            },
          ],
        },
        {
          slug: "zhadnost",
          title: "Gier",
          summary: "Wie Gier dazu verleitet, ein profitables Geschäft länger als geplant zu halten und Gewinn in Verlust zu verwandeln.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Gier äußert sich im Trading als der Wunsch, aus einem Geschäft mehr Gewinn herauszuholen, als der ursprüngliche Plan vorsah: die Position nicht am festgelegten Ziel zu schließen, das Volumen nach einer Serie erfolgreicher Geschäfte zu erhöhen oder einen zuvor gesetzten Take Profit zu widerrufen.",
            },
            {
              type: "paragraph",
              text: "Meistens führt Gier dazu, dass sich ein profitables Geschäft umkehrt und am Stop oder bei null geschlossen wird, obwohl es mit einem guten Ergebnis hätte gesichert werden können. Disziplin bei der Einhaltung des im Voraus festgelegten Plans ist das wichtigste Mittel gegen Gier.",
            },
            {
              type: "list",
              items: [
                "Gier äußert sich oft als Widerruf eines zuvor gesetzten Take Profit",
                "Die Erhöhung des Volumens nach einer Gewinnserie ohne Anpassung des Risikomanagements ist ebenfalls ein Zeichen von Gier",
                "Das Befolgen eines im Voraus erstellten Handelsplans verringert den Einfluss von Gier",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wie äußert sich Gier am häufigsten bei der Verwaltung eines offenen Geschäfts?",
              options: [
                "Der Trader widerruft den zuvor gesetzten Take Profit in der Hoffnung auf mehr Gewinn",
                "Der Trader schließt das Geschäft strikt nach Plan",
                "Der Trader verringert die Positionsgröße",
              ],
              correctAnswer: "Der Trader widerruft den zuvor gesetzten Take Profit in der Hoffnung auf mehr Gewinn",
            },
            {
              prompt: "Zu welchem Ergebnis führt Gier bei einem profitablen Geschäft meistens?",
              options: [
                "Das Geschäft kehrt sich um und wird am Stop oder bei null geschlossen",
                "Der Gewinn steigt garantiert",
                "Die Börsengebühr sinkt",
              ],
              correctAnswer: "Das Geschäft kehrt sich um und wird am Stop oder bei null geschlossen",
            },
            {
              prompt: "Was ist das wichtigste Mittel gegen Gier im Trading?",
              options: [
                "Die Einhaltung eines im Voraus erstellten Handelsplans",
                "Der vollständige Verzicht auf das Setzen eines Take Profit",
                "Die Erhöhung des Hebels nach jedem profitablen Geschäft",
              ],
              correctAnswer: "Die Einhaltung eines im Voraus erstellten Handelsplans",
            },
          ],
        },
        {
          slug: "strah",
          title: "Angst",
          summary: "Wie die Angst vor Verlusten das Befolgen der Strategie erschwert und zu vorzeitigem Schließen von Geschäften führt.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Angst äußert sich im Trading meist als Furcht, Geld zu verlieren: Der Trader schließt ein profitables Geschäft wegen des kleinsten Rückgangs zu früh, scheut sich, bei einem bestätigten Signal einzusteigen, oder vermeidet den Handel nach einer Verlustserie ganz.",
            },
            {
              type: "paragraph",
              text: "Im Gegensatz zu Gier führt Angst dazu, zu vorsichtig zu handeln und Chancen zu verpassen, die voll und ganz der Strategie entsprechen. Der Einfluss der Angst lässt sich verringern, indem man mit einem Volumen handelt, bei dem das Risiko pro Geschäft psychologisch angenehm ist.",
            },
            {
              type: "list",
              items: [
                "Angst äußert sich oft als vorzeitiges Schließen eines profitablen Geschäfts",
                "Eine zu große Positionsgröße verstärkt die Angst und erschwert das Befolgen des Plans",
                "Ein angenehmes Risikoniveau pro Geschäft verringert den emotionalen Druck der Angst",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wie beeinflusst Angst am häufigsten die Verwaltung eines profitablen Geschäfts?",
              options: [
                "Der Trader schließt es wegen des kleinsten Rückgangs zu früh",
                "Der Trader hält das Geschäft deutlich länger als geplant",
                "Der Trader erhöht die Positionsgröße",
              ],
              correctAnswer: "Der Trader schließt es wegen des kleinsten Rückgangs zu früh",
            },
            {
              prompt: "Was verstärkt die Angst bei der Verwaltung einer offenen Position?",
              options: [
                "Eine im Verhältnis zum Kapital zu große Positionsgröße",
                "Ein im Voraus festgelegtes Risiko von 1–2 % des Kapitals",
                "Das Führen eines Handelstagebuchs",
              ],
              correctAnswer: "Eine im Verhältnis zum Kapital zu große Positionsgröße",
            },
            {
              prompt: "Worin unterscheidet sich Angst im Trading grundsätzlich von Gier?",
              options: [
                "Angst führt dazu, zu vorsichtig zu handeln und strategiekonforme Geschäfte zu verpassen",
                "Angst und Gier führen zu völlig identischen Entscheidungen",
                "Angst erhöht die Positionsgröße stärker als Gier",
              ],
              correctAnswer: "Angst führt dazu, zu vorsichtig zu handeln und strategiekonforme Geschäfte zu verpassen",
            },
          ],
        },
        {
          slug: "distsiplina",
          title: "Disziplin",
          summary: "Warum das Befolgen der eigenen Regeln wichtiger ist als jedes einzelne Geschäft.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Disziplin im Trading ist die Fähigkeit, konsequent im Voraus festgelegte Regeln für Einstieg, Ausstieg und Risikomanagement zu befolgen, auch wenn man im Moment anders handeln möchte. Genau diese Disziplin unterscheidet einen Trader mit System von jemandem, der aus dem Bauch heraus handelt.",
            },
            {
              type: "paragraph",
              text: "Selbst eine perfekte Handelsstrategie bringt keine Ergebnisse, wenn die Regeln jedes Mal gebrochen werden, sobald ein Geschäft nicht nach Plan verläuft. Disziplin basiert auf einfachen, klar formulierten Regeln und einer regelmäßigen Überprüfung, ob diese eingehalten wurden.",
            },
            {
              type: "list",
              items: [
                "Disziplin ist wichtiger als das Ergebnis eines einzelnen Geschäfts",
                "Das Brechen der eigenen Regeln entwertet selbst eine gute Strategie",
                "Die regelmäßige Analyse der Regeleinhaltung hilft, die Disziplin zu stärken",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist Disziplin im Kontext des Tradings?",
              options: [
                "Das konsequente Befolgen im Voraus festgelegter Regeln",
                "Die Fähigkeit, die Preisrichtung zu erraten",
                "Der Einsatz des maximalen Hebels",
              ],
              correctAnswer: "Das konsequente Befolgen im Voraus festgelegter Regeln",
            },
            {
              prompt: "Warum funktioniert selbst eine gute Strategie ohne Disziplin nicht?",
              options: [
                "Weil die Regeln in dem Moment gebrochen werden, in dem ein Geschäft nicht nach Plan verläuft",
                "Weil Strategien immer gleich gut funktionieren",
                "Weil Disziplin keinen Einfluss auf das Ergebnis hat",
              ],
              correctAnswer: "Weil die Regeln in dem Moment gebrochen werden, in dem ein Geschäft nicht nach Plan verläuft",
            },
            {
              prompt: "Was hilft, die Disziplin im Laufe der Zeit zu stärken?",
              options: [
                "Die regelmäßige Analyse, ob die eigenen Regeln eingehalten wurden",
                "Der vollständige Verzicht auf die Analyse von Geschäften",
                "Die ständige Änderung der Regeln nach jedem Geschäft",
              ],
              correctAnswer: "Die regelmäßige Analyse, ob die eigenen Regeln eingehalten wurden",
            },
          ],
        },
        {
          slug: "emotsionalny-kontrol",
          title: "Emotionale Kontrolle",
          summary: "Praktische Techniken, die helfen, Entscheidungen auf Basis eines Plans statt aus Emotionen zu treffen.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Emotionale Kontrolle ist die Fähigkeit, den eigenen emotionalen Zustand (Nervenkitzel, Angst, Frustration nach einem Verlust) zu erkennen und nicht zuzulassen, dass er die Handelsentscheidungen direkt beeinflusst. Es geht nicht um das Fehlen von Emotionen, sondern um die Fähigkeit, trotz ihnen nach Plan zu handeln.",
            },
            {
              type: "paragraph",
              text: "Zu den praktischen Werkzeugen der emotionalen Kontrolle gehören eine Pause vor dem Einstieg in ein Geschäft, ein Tageslimit für die Anzahl der Geschäfte oder Verluste sowie das Führen eines Tagebuchs, in dem nicht nur das Ergebnis, sondern auch der emotionale Zustand des Traders zum Zeitpunkt des Geschäfts festgehalten wird.",
            },
            {
              type: "list",
              items: [
                "Emotionale Kontrolle bedeutet, die Reaktion auf Emotionen zu steuern, nicht sie zu unterdrücken",
                "Ein Tageslimit für die Anzahl der Geschäfte oder Verluste verringert den Einfluss von Tilt",
                "Das Festhalten des emotionalen Zustands im Tagebuch hilft, wiederkehrende Fehler zu erkennen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was versteht man im Trading unter emotionaler Kontrolle?",
              options: [
                "Die Fähigkeit, trotz Emotionen nach Plan zu handeln, nicht deren völliges Fehlen",
                "Das vollständige Fehlen jeglicher Emotionen während des Handels",
                "Die Fähigkeit, die Emotionen anderer Trader vorherzusagen",
              ],
              correctAnswer: "Die Fähigkeit, trotz Emotionen nach Plan zu handeln, nicht deren völliges Fehlen",
            },
            {
              prompt: "Wie hilft ein Tageslimit für die Anzahl der Geschäfte einem Trader?",
              options: [
                "Es verringert das Risiko einer Serie emotionaler Entscheidungen hintereinander (Tilt)",
                "Es garantiert einen Gewinn am Ende des Tages",
                "Es macht einen Stop-Loss vollständig überflüssig",
              ],
              correctAnswer: "Es verringert das Risiko einer Serie emotionaler Entscheidungen hintereinander (Tilt)",
            },
            {
              prompt: "Warum sollte man den emotionalen Zustand während eines Geschäfts im Handelstagebuch festhalten?",
              options: [
                "Um wiederkehrende emotionale Fehler in Zukunft zu erkennen",
                "Das ist eine Vorschrift der Börse für die Eröffnung eines Geschäfts",
                "Das hilft bei der Analyse des Handels überhaupt nicht",
              ],
              correctAnswer: "Um wiederkehrende emotionale Fehler in Zukunft zu erkennen",
            },
          ],
        },
      ],
    },
    {
      title: "Indikatoren",
      lessons: [
        {
          slug: "rsi",
          title: "RSI",
          summary: "Relative-Stärke-Index: wie man Überkauft- und Überverkauft-Zustände eines Assets misst.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "RSI (Relative Strength Index) ist ein Oszillator, der Geschwindigkeit und Ausmaß jüngster Preisänderungen auf einer Skala von 0 bis 100 misst. Werte über 70 gelten traditionell als Überkauft-Zone, unter 30 als Überverkauft-Zone, wobei der RSI in einem starken Trend lange in diesen Zonen verbleiben kann.",
            },
            {
              type: "paragraph",
              text: "Neben den Überkauft-/Überverkauft-Zonen nutzen Trader RSI-Divergenzen: Erreicht der Preis ein neues Hoch, der RSI jedoch nicht, kann das auf eine Abschwächung des Impulses hindeuten. Der RSI wird selten isoliert verwendet und meist mit der Analyse der Marktstruktur kombiniert.",
            },
            {
              type: "list",
              items: [
                "RSI über 70 – potenzielle Überkauft-Zone, unter 30 – Überverkauft-Zone",
                "In einem starken Trend kann der RSI lange in der Extremzone bleiben, ohne umzukehren",
                "Eine Divergenz zwischen Preis und RSI kann auf eine Trendabschwächung hindeuten",
              ],
            },
          ],
          questions: [
            {
              prompt: "In welchem Wertebereich bewegt sich der RSI?",
              options: ["Von 0 bis 100", "Von -1 bis 1", "Von 0 bis 10.000"],
              correctAnswer: "Von 0 bis 100",
            },
            {
              prompt: "Was bedeutet ein RSI-Wert über 70 traditionell?",
              options: [
                "Eine potenzielle Überkauft-Zone",
                "Eine garantierte Umkehr des Preises nach unten",
                "Das Fehlen von Handelsvolumen",
              ],
              correctAnswer: "Eine potenzielle Überkauft-Zone",
            },
            {
              prompt: "Wofür kann eine Divergenz zwischen Preis und RSI ein Signal sein?",
              options: [
                "Für eine Abschwächung des aktuellen Bewegungsimpulses",
                "Für einen technischen Fehler des Indikators",
                "Für einen Wechsel der Listing-Börse des Assets",
              ],
              correctAnswer: "Für eine Abschwächung des aktuellen Bewegungsimpulses",
            },
          ],
        },
        {
          slug: "macd",
          title: "MACD",
          summary: "Der Konvergenz-Divergenz-Indikator gleitender Durchschnitte und seine Signale bei Kreuzungen und Divergenzen.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "MACD (Moving Average Convergence Divergence) basiert auf der Differenz zweier exponentieller gleitender Durchschnitte (üblicherweise 12 und 26 Perioden) und einer Signallinie (9-perioden-EMA des MACD selbst). Das Histogramm zeigt die Differenz zwischen der MACD-Linie und der Signallinie.",
            },
            {
              type: "paragraph",
              text: "Die wichtigsten MACD-Signale sind die Kreuzung von MACD-Linie und Signallinie (potenzieller Impulswechsel) sowie die Kreuzung der Nulllinie (Trendrichtungswechsel). Wie der RSI kann auch der MACD Divergenzen zum Preis zeigen, was oft als zusätzliche Bestätigung genutzt wird.",
            },
            {
              type: "list",
              items: [
                "Der MACD basiert auf der Differenz zweier EMAs und einer Signallinie",
                "Die Kreuzung von MACD- und Signallinie ist eines der wichtigsten Handelssignale",
                "Die Kreuzung der Nulllinie wird oft mit einem Trendrichtungswechsel in Verbindung gebracht",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worauf basiert der MACD-Indikator?",
              options: [
                "Auf der Differenz zweier exponentieller gleitender Durchschnitte",
                "Auf dem Volumen des offenen Interesses",
                "Auf der Anzahl aktiver Wallets im Netzwerk",
              ],
              correctAnswer: "Auf der Differenz zweier exponentieller gleitender Durchschnitte",
            },
            {
              prompt: "Was zeigt das MACD-Histogramm?",
              options: [
                "Die Differenz zwischen MACD-Linie und Signallinie",
                "Das gesamte Handelsvolumen des Tages",
                "Die Anzahl offener Positionen an der Börse",
              ],
              correctAnswer: "Die Differenz zwischen MACD-Linie und Signallinie",
            },
            {
              prompt: "Womit wird die Kreuzung der MACD-Linie mit der Nulllinie oft in Verbindung gebracht?",
              options: [
                "Mit einem Wechsel der Trendrichtung",
                "Mit dem Listing eines neuen Tokens",
                "Mit einer Änderung der Börsengebühr",
              ],
              correctAnswer: "Mit einem Wechsel der Trendrichtung",
            },
          ],
        },
        {
          slug: "ema",
          title: "EMA",
          summary: "Der exponentielle gleitende Durchschnitt und warum er schneller auf den Preis reagiert als der einfache.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Der EMA (Exponential Moving Average) ist ein gleitender Durchschnitt, der den letzten Preisen ein größeres Gewicht verleiht und dadurch schneller auf Preisänderungen reagiert als der einfache gleitende Durchschnitt (SMA). Das macht den EMA empfindlicher, aber auch anfälliger für Fehlsignale in Seitwärtsphasen.",
            },
            {
              type: "paragraph",
              text: "Trader nutzen häufig mehrere EMAs unterschiedlicher Periode gleichzeitig (zum Beispiel 20 und 50), um die Trendrichtung und Zonen dynamischer Unterstützung/Widerstand zu bestimmen. Die Kreuzung eines schnellen und eines langsamen EMA ist ein beliebtes, wenn auch nachlaufendes Signal.",
            },
            {
              type: "list",
              items: [
                "Der EMA gewichtet die letzten Preise stärker als der SMA",
                "Mehrere EMAs unterschiedlicher Periode helfen, die Trendrichtung einzuschätzen",
                "Die Kreuzung von schnellem und langsamem EMA ist ein nachlaufendes, aber beliebtes Signal",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worin unterscheidet sich der EMA vom einfachen gleitenden Durchschnitt (SMA)?",
              options: [
                "Der EMA gewichtet die letzten Preise stärker und reagiert schneller auf Änderungen",
                "Der EMA berücksichtigt den Preis überhaupt nicht",
                "Der EMA wird immer nur anhand des Volumens berechnet",
              ],
              correctAnswer: "Der EMA gewichtet die letzten Preise stärker und reagiert schneller auf Änderungen",
            },
            {
              prompt: "Warum nutzen Trader mehrere EMAs unterschiedlicher Periode gleichzeitig?",
              options: [
                "Um die Trendrichtung und Zonen dynamischer Unterstützung/Widerstand einzuschätzen",
                "Um die Börsengebühr zu senken",
                "Das liefert keinerlei nützliche Information",
              ],
              correctAnswer: "Um die Trendrichtung und Zonen dynamischer Unterstützung/Widerstand einzuschätzen",
            },
            {
              prompt: "Welchen Nachteil hat die Kreuzung von schnellem und langsamem EMA als Signal?",
              options: [
                "Das Signal hinkt der aktuellen Preisbewegung hinterher",
                "Das Signal erscheint, bevor die Bewegung beginnt",
                "Das Signal ist im Chart nicht sichtbar",
              ],
              correctAnswer: "Das Signal hinkt der aktuellen Preisbewegung hinterher",
            },
          ],
        },
        {
          slug: "sma",
          title: "SMA",
          summary: "Der einfache gleitende Durchschnitt als Basis zur Bestimmung der allgemeinen Trendrichtung.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Der SMA (Simple Moving Average) ist ein einfacher gleitender Durchschnitt, berechnet als arithmetisches Mittel des Schlusskurses über N Perioden. Im Gegensatz zum EMA haben beim SMA alle Perioden das gleiche Gewicht, wodurch er langsamer auf Preisänderungen reagiert und Rauschen stärker glättet.",
            },
            {
              type: "paragraph",
              text: "Der SMA wird häufig zur Bestimmung der allgemeinen, längerfristigen Trendrichtung genutzt — zum Beispiel wird die Position des Preises relativ zum SMA 200 auf dem Tageschart weithin als Orientierung für einen bullischen oder bärischen Gesamtmarkt verwendet.",
            },
            {
              type: "list",
              items: [
                "Der SMA ist das arithmetische Mittel des Preises über eine festgelegte Anzahl von Perioden",
                "Der SMA glättet Rauschen stärker als der EMA, reagiert aber langsamer",
                "Der SMA 200 auf dem Tageschart wird oft als Orientierung für den globalen Trend genutzt",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wie wird der SMA berechnet?",
              options: [
                "Als arithmetisches Mittel des Schlusskurses über eine festgelegte Anzahl von Perioden",
                "Als Summe aller Handelsvolumina eines Monats",
                "Als Differenz zwischen Tageshoch und Tagestief",
              ],
              correctAnswer: "Als arithmetisches Mittel des Schlusskurses über eine festgelegte Anzahl von Perioden",
            },
            {
              prompt: "Worin unterscheidet sich der SMA vom EMA hinsichtlich der Reaktionsgeschwindigkeit auf den Preis?",
              options: [
                "Der SMA reagiert langsamer, da alle Perioden das gleiche Gewicht haben",
                "Der SMA reagiert immer schneller als der EMA",
                "Es gibt keinen Unterschied in der Reaktionsgeschwindigkeit",
              ],
              correctAnswer: "Der SMA reagiert langsamer, da alle Perioden das gleiche Gewicht haben",
            },
            {
              prompt: "Wofür wird der SMA 200 auf dem Tageschart häufig genutzt?",
              options: [
                "Als Orientierung für einen bullischen oder bärischen Gesamtmarkt",
                "Zur Berechnung der Börsengebühr",
                "Zur Bestimmung des genauen Listing-Zeitpunkts eines Tokens",
              ],
              correctAnswer: "Als Orientierung für einen bullischen oder bärischen Gesamtmarkt",
            },
          ],
        },
        {
          slug: "vwap",
          title: "VWAP",
          summary: "Der volumengewichtete Durchschnittspreis und seine Rolle als Orientierung für den „fairen“ Tagespreis.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "VWAP (Volume Weighted Average Price) ist der Durchschnittspreis eines Assets über einen Zeitraum, gewichtet nach dem Handelsvolumen auf jedem Preislevel. Im Gegensatz zum einfachen gleitenden Durchschnitt zeigt der VWAP, zu welchem Preis der Hauptteil der Geschäfte tatsächlich abgeschlossen wurde.",
            },
            {
              type: "paragraph",
              text: "Institutionelle Trader nutzen den VWAP oft als Orientierung für den „fairen“ Tagespreis: Ein Preis über dem VWAP gilt als relativ teuer, darunter als relativ günstig. Der VWAP wird zudem als dynamisches Unterstützungs-/Widerstandslevel innerhalb der Handelssitzung verwendet.",
            },
            {
              type: "list",
              items: [
                "Der VWAP berücksichtigt nicht nur den Preis, sondern auch das Volumen auf jedem Level",
                "Ein Preis über dem VWAP wird als relativ teuer interpretiert, darunter als relativ günstig",
                "Der VWAP wird üblicherweise mit Beginn jeder Handelssitzung neu berechnet",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was berücksichtigt der VWAP im Gegensatz zum einfachen gleitenden Durchschnitt?",
              options: [
                "Das Handelsvolumen auf jedem Preislevel",
                "Nur den Höchstkurs des Tages",
                "Nur den Schlusskurs des Vortages",
              ],
              correctAnswer: "Das Handelsvolumen auf jedem Preislevel",
            },
            {
              prompt: "Wie wird ein Preis oberhalb des VWAP interpretiert?",
              options: [
                "Als relativ teuer im Vergleich zum durchschnittlichen Volumenlevel",
                "Als garantiertes Kaufsignal",
                "Als Zeichen für eine Handelsaussetzung",
              ],
              correctAnswer: "Als relativ teuer im Vergleich zum durchschnittlichen Volumenlevel",
            },
            {
              prompt: "Wer orientiert sich bei der Ausführung großer Orders am häufigsten am VWAP?",
              options: ["Institutionelle Trader", "Nur Anfänger", "Nur Marketing-Verantwortliche von Projekten"],
              correctAnswer: "Institutionelle Trader",
            },
          ],
        },
        {
          slug: "atr",
          title: "ATR",
          summary: "Die durchschnittliche wahre Handelsspanne als Werkzeug zur Messung der Volatilität für die Stop-Setzung.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Der ATR (Average True Range) misst die durchschnittliche Volatilität eines Assets über einen festgelegten Zeitraum unter Berücksichtigung von Gaps zwischen Kerzen. Es ist kein Richtungsindikator, sondern ein Indikator für die Bewegungsamplitude — ein hoher ATR bedeutet, dass der Preis große Schwankungen vollzieht, ein niedriger, dass der Markt relativ ruhig ist.",
            },
            {
              type: "paragraph",
              text: "Der ATR wird oft genutzt, um die Größe des Stop-Loss an die aktuelle Volatilität anzupassen: Statt eines festen Prozentsatzes setzt der Trader den Stop in einem Abstand, der ein Vielfaches des ATR beträgt, was die Wahrscheinlichkeit eines vorzeitigen Auslösens durch normales Marktrauschen senkt.",
            },
            {
              type: "list",
              items: [
                "Der ATR misst die Bewegungsamplitude des Preises, nicht seine Richtung",
                "Ein hoher ATR bedeutet erhöhte Volatilität des Assets",
                "Ein über den ATR berechneter Stop-Loss passt sich der aktuellen Marktvolatilität an",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was misst der ATR-Indikator?",
              options: [
                "Die durchschnittliche Volatilität (Bewegungsamplitude) eines Assets",
                "Die Trendrichtung",
                "Die Anzahl aktiver Adressen im Netzwerk",
              ],
              correctAnswer: "Die durchschnittliche Volatilität (Bewegungsamplitude) eines Assets",
            },
            {
              prompt: "Wovon spricht ein hoher ATR-Wert?",
              options: [
                "Von erhöhter Volatilität und großen Preisschwankungen",
                "Von niedriger Liquidität der Börse",
                "Von einem bevorstehenden Delisting des Assets",
              ],
              correctAnswer: "Von erhöhter Volatilität und großen Preisschwankungen",
            },
            {
              prompt: "Wofür nutzen Trader den ATR in der Praxis häufig?",
              options: [
                "Zur Berechnung der Stop-Loss-Größe unter Berücksichtigung der aktuellen Volatilität",
                "Zur Bestimmung des genauen Listing-Preises eines Tokens",
                "Zur Berechnung der Netzwerkgebühr",
              ],
              correctAnswer: "Zur Berechnung der Stop-Loss-Größe unter Berücksichtigung der aktuellen Volatilität",
            },
          ],
        },
        {
          slug: "bollinger-bands",
          title: "Bollinger Bands",
          summary: "Bollinger Bands als Indikator für Volatilität und relative Preisteuerung.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Bollinger Bands bestehen aus einem gleitenden Durchschnitt (üblicherweise SMA 20) und zwei Bändern, die um eine festgelegte Anzahl von Standardabweichungen des Preises von ihm entfernt liegen. Die Breite der Bänder ändert sich dynamisch mit der Volatilität: Sie weiten sich in Phasen starker Bewegungen und verengen sich in ruhigen Phasen.",
            },
            {
              type: "paragraph",
              text: "Eine Verengung der Bänder („Squeeze“) geht oft einer starken Preisbewegung in eine beliebige Richtung voraus, und die Berührung des oberen oder unteren Bandes durch den Preis ist für sich genommen kein Umkehrsignal — in einem starken Trend kann sich der Preis lange entlang des Bandes bewegen.",
            },
            {
              type: "list",
              items: [
                "Die Bänder werden um einen gleitenden Durchschnitt auf Basis der Standardabweichung gebildet",
                "Eine Verengung der Bänder geht oft einer starken Preisbewegung voraus",
                "Die Berührung eines Bandes garantiert keine Umkehr, besonders in einem starken Trend",
              ],
            },
          ],
          questions: [
            {
              prompt: "Woraus bestehen Bollinger Bands?",
              options: [
                "Aus einem gleitenden Durchschnitt und zwei Bändern auf Basis der Standardabweichung",
                "Aus drei unabhängigen Volumenlinien",
                "Aus einer einzigen Schlusskurslinie",
              ],
              correctAnswer: "Aus einem gleitenden Durchschnitt und zwei Bändern auf Basis der Standardabweichung",
            },
            {
              prompt: "Was geht laut Bollinger Bands oft einer starken Preisbewegung voraus?",
              options: [
                "Eine Verengung (Squeeze) der Bänder",
                "Eine maximale Ausweitung der Bänder",
                "Das vollständige Verschwinden der Bänder aus dem Chart",
              ],
              correctAnswer: "Eine Verengung (Squeeze) der Bänder",
            },
            {
              prompt: "Bedeutet die Berührung des oberen Bollinger-Bandes durch den Preis eine garantierte Umkehr nach unten?",
              options: [
                "Nein, in einem starken Trend kann sich der Preis lange entlang des Bandes bewegen",
                "Ja, das ist immer ein hundertprozentiges Umkehrsignal",
                "Ja, aber nur auf dem Wochenchart",
              ],
              correctAnswer: "Nein, in einem starken Trend kann sich der Preis lange entlang des Bandes bewegen",
            },
          ],
        },
      ],
    },
    {
      title: "Volumenanalyse",
      lessons: [
        {
          slug: "volume",
          title: "Volume",
          summary: "Das Handelsvolumen als Bestätigung der Stärke einer Preisbewegung.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Volume (Volumen) zeigt die Menge eines Assets, die in einem Zeitraum gehandelt wird. Das Volumen ist einer der wenigen Indikatoren, der nicht aus dem Preis abgeleitet wird, sondern die reale Aktivität der Marktteilnehmer widerspiegelt, weshalb es oft als unabhängige Bestätigung einer Bewegung genutzt wird.",
            },
            {
              type: "paragraph",
              text: "Eine Preisbewegung bei hohem Volumen gilt als zuverlässiger als dieselbe Bewegung bei niedrigem Volumen: Ein Levelbruch ohne Volumenanstieg erweist sich häufiger als falsch. Scharfe Volumenspitzen fallen zudem oft mit entscheidenden Umkehrpunkten des Marktes zusammen.",
            },
            {
              type: "list",
              items: [
                "Das Volumen spiegelt die reale Aktivität der Teilnehmer wider, nicht eine Ableitung des Preises",
                "Ein Levelbruch bei niedrigem Volumen erweist sich häufiger als falsch",
                "Scharfe Volumenspitzen fallen oft mit Umkehrpunkten zusammen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Warum gilt das Volumen als unabhängige Bestätigung einer Preisbewegung?",
              options: [
                "Es spiegelt die reale Aktivität der Teilnehmer wider und wird nicht aus dem Preis selbst abgeleitet",
                "Weil das Volumen immer zusammen mit dem Preis steigt",
                "Weil das Volumen in Prozent der Marktkapitalisierung gemessen wird",
              ],
              correctAnswer: "Es spiegelt die reale Aktivität der Teilnehmer wider und wird nicht aus dem Preis selbst abgeleitet",
            },
            {
              prompt: "Welcher Levelbruch gilt als weniger zuverlässig?",
              options: [
                "Ein Bruch bei niedrigem Volumen",
                "Ein Bruch bei hohem Volumen",
                "Die Zuverlässigkeit eines Bruchs hängt nicht vom Volumen ab",
              ],
              correctAnswer: "Ein Bruch bei niedrigem Volumen",
            },
            {
              prompt: "Womit fallen scharfe Volumenspitzen häufig zusammen?",
              options: [
                "Mit entscheidenden Umkehrpunkten des Marktes",
                "Nur mit technischen Störungen der Börse",
                "Mit einer Namensänderung des Tokens",
              ],
              correctAnswer: "Mit entscheidenden Umkehrpunkten des Marktes",
            },
          ],
        },
        {
          slug: "delta",
          title: "Delta",
          summary: "Die Differenz zwischen Kauf- und Verkaufsvolumen als Indikator für den Druck auf den Preis.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Delta ist die Differenz zwischen dem Volumen aggressiver Käufe (über Markt-Kauforders) und aggressiver Verkäufe innerhalb eines Zeitraums. Eine positive Delta bedeutet ein Überwiegen der Käufer, eine negative das Überwiegen der Verkäufer — unabhängig davon, wohin sich der Preis letztlich bewegt hat.",
            },
            {
              type: "paragraph",
              text: "Eine Divergenz zwischen Delta und Preisbewegung — zum Beispiel steigt der Preis, während die Delta negativ ist — kann darauf hindeuten, dass der Anstieg nicht durch Marktkäufe, sondern durch das Schließen von Short-Positionen zustande kam, und ein solcher Anstieg ist weniger stabil.",
            },
            {
              type: "list",
              items: [
                "Eine positive Delta bedeutet ein Überwiegen aggressiver Käufe gegenüber Verkäufen",
                "Die Delta misst den Druck der Teilnehmer, nicht die endgültige Preisänderung",
                "Eine Divergenz zwischen Preis und Delta kann auf eine instabile Bewegung hindeuten",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was zeigt eine positive Delta?",
              options: [
                "Das Überwiegen aggressiver Käufe gegenüber Verkäufen",
                "Einen garantierten Preisanstieg in der Zukunft",
                "Das Fehlen jeglicher Handelsaktivität",
              ],
              correctAnswer: "Das Überwiegen aggressiver Käufe gegenüber Verkäufen",
            },
            {
              prompt: "Wovon kann ein Preisanstieg bei negativer Delta zeugen?",
              options: [
                "Der Anstieg kann durch das Schließen von Short-Positionen statt durch neue Käufe zustande kommen",
                "Von einem technischen Fehler an der Börse",
                "Davon, dass die Delta falsch berechnet wird",
              ],
              correctAnswer: "Der Anstieg kann durch das Schließen von Short-Positionen statt durch neue Käufe zustande kommen",
            },
            {
              prompt: "Was genau misst die Volumen-Delta?",
              options: [
                "Den Druck von Käufern und Verkäufern anhand aggressiver Orders",
                "Die gesamte Marktkapitalisierung des Assets",
                "Die Anzahl der Token-Halter",
              ],
              correctAnswer: "Den Druck von Käufern und Verkäufern anhand aggressiver Orders",
            },
          ],
        },
        {
          slug: "open-interest",
          title: "Open Interest",
          summary: "Das offene Interesse als Kennzahl für die Anzahl aktiver Positionen am Derivatemarkt.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Open Interest (offenes Interesse, OI) ist die Gesamtzahl offener, noch nicht geschlossener Kontrakte am Derivatemarkt (Futures, Perpetuals). Im Gegensatz zum Volumen, das jede Periode zurückgesetzt wird, zeigt der OI die kumulierte Anzahl aktiver Positionen.",
            },
            {
              type: "paragraph",
              text: "Ein Anstieg des OI zusammen mit einem Preisanstieg bedeutet üblicherweise einen Zufluss neuen Kapitals und eine Stärkung des Trends. Ein Preisanstieg bei fallendem OI deutet eher auf das Schließen von Short-Positionen hin als auf neue Nachfrage. Ein scharfer Rückgang des OI hängt oft mit massiven Liquidationen zusammen.",
            },
            {
              type: "list",
              items: [
                "Der OI zeigt die Anzahl offener, noch nicht geschlossener Kontrakte",
                "Ein Preisanstieg zusammen mit steigendem OI deutet üblicherweise auf einen Zufluss neuen Kapitals hin",
                "Ein scharfer Rückgang des OI geht oft mit massiven Liquidationen von Positionen einher",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was zeigt der Open Interest?",
              options: [
                "Die Gesamtzahl offener, noch nicht geschlossener Kontrakte",
                "Das kumulierte Volumen aller Geschäfte in der gesamten Börsengeschichte",
                "Die Anzahl registrierter Nutzer der Börse",
              ],
              correctAnswer: "Die Gesamtzahl offener, noch nicht geschlossener Kontrakte",
            },
            {
              prompt: "Wovon zeugt üblicherweise ein gleichzeitiger Anstieg von Preis und Open Interest?",
              options: [
                "Von einem Zufluss neuen Kapitals und einer Stärkung des Trends",
                "Von einem technischen Ausfall der Börse",
                "Von einem Rückgang der Volatilität auf null",
              ],
              correctAnswer: "Von einem Zufluss neuen Kapitals und einer Stärkung des Trends",
            },
            {
              prompt: "Womit hängt ein scharfer Rückgang des Open Interest häufig zusammen?",
              options: [
                "Mit massiven Liquidationen offener Positionen",
                "Mit der Aufnahme eines neuen Tokens ins Listing",
                "Mit einem planmäßigen Update der Börse",
              ],
              correctAnswer: "Mit massiven Liquidationen offener Positionen",
            },
          ],
        },
        {
          slug: "funding-rate",
          title: "Funding Rate",
          summary: "Die Finanzierungsrate bei Perpetual Futures und was sie über die Marktstimmung aussagt.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Die Funding Rate ist eine periodische Zahlung zwischen Haltern von Long- und Short-Positionen bei Perpetual Futures — ein Mechanismus, der den Kontraktpreis nahe am Spotmarktpreis hält. Ein positives Funding bedeutet, dass Longs an Shorts zahlen, ein negatives das Gegenteil.",
            },
            {
              type: "paragraph",
              text: "Ein anhaltend hohes positives Funding deutet üblicherweise auf einen überhitzten Markt mit einem Überschuss an Longs hin, was das Risiko kaskadierender Liquidationen bei einer Abwärtsumkehr erhöht. Ein stark negatives Funding kann dagegen auf übermäßigen Pessimismus und Erholungspotenzial hindeuten.",
            },
            {
              type: "list",
              items: [
                "Die Funding Rate hält den Preis des Perpetual Futures nahe am Spotpreis",
                "Ein anhaltend hohes positives Funding zeugt von einer Überhitzung des Marktes durch Longs",
                "Ein stark negatives Funding kann auf übermäßigen Pessimismus des Marktes hindeuten",
              ],
            },
          ],
          questions: [
            {
              prompt: "Welche Funktion erfüllt die Funding Rate bei Perpetual Futures?",
              options: [
                "Sie hält den Kontraktpreis nahe am Spotmarktpreis",
                "Sie bestimmt die Börsengebühr für Auszahlungen",
                "Sie legt den maximalen Hebel fest",
              ],
              correctAnswer: "Sie hält den Kontraktpreis nahe am Spotmarktpreis",
            },
            {
              prompt: "Was bedeutet ein anhaltend hohes positives Funding?",
              options: [
                "Der Markt ist durch einen Überschuss an Long-Positionen überhitzt",
                "Am Markt gibt es überhaupt keine Trader mehr",
                "Der Preis des Assets wird garantiert weiter steigen",
              ],
              correctAnswer: "Der Markt ist durch einen Überschuss an Long-Positionen überhitzt",
            },
            {
              prompt: "Wer zahlt bei einer positiven Funding Rate wem?",
              options: [
                "Halter von Long-Positionen zahlen an Halter von Short-Positionen",
                "Die Börse zahlt an alle Trader gleichermaßen",
                "Halter von Short-Positionen zahlen an Halter von Long-Positionen",
              ],
              correctAnswer: "Halter von Long-Positionen zahlen an Halter von Short-Positionen",
            },
          ],
        },
        {
          slug: "liquidations",
          title: "Liquidations",
          summary: "Die Zwangsschließung gehebelter Positionen und warum Liquidationen Preisbewegungen verstärken.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Liquidations (Liquidationen) sind die Zwangsschließung einer Position durch die Börse, wenn deren Verlust ein Niveau erreicht, bei dem die Margin nicht mehr für ihren Erhalt ausreicht. Liquidationen erfolgen zum Marktpreis und hängen nicht vom Willen des Traders ab.",
            },
            {
              type: "paragraph",
              text: "Massive Liquidationen in eine Richtung (kaskadierende Liquidationen) verstärken die Preisbewegung selbst: Das Schließen von Longs erzeugt zusätzlichen Verkaufsdruck, das Schließen von Shorts zusätzliche Nachfrage — das erklärt scharfe, schnelle Preisbewegungen bei starker Volatilität.",
            },
            {
              type: "list",
              items: [
                "Eine Liquidation ist die Zwangsschließung einer Position durch die Börse bei Margin-Mangel",
                "Kaskadierende Liquidationen verstärken und beschleunigen die Preisbewegung in eine Richtung",
                "Liquidations-Heatmaps werden von Tradern genutzt, um Zonen erhöhten Risikos einzuschätzen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was geschieht bei der Liquidation einer Position?",
              options: [
                "Die Börse schließt die Position zwangsweise wegen Margin-Mangels",
                "Der Trader schließt die Position freiwillig mit Gewinn",
                "Die Börse verdoppelt automatisch das Volumen der Position",
              ],
              correctAnswer: "Die Börse schließt die Position zwangsweise wegen Margin-Mangels",
            },
            {
              prompt: "Warum verstärken kaskadierende Liquidationen die Preisbewegung?",
              options: [
                "Das Schließen von Positionen erzeugt zusätzlichen Druck in Bewegungsrichtung",
                "Liquidationen haben keinerlei Einfluss auf den Preis",
                "Liquidationen stoppen die Preisbewegung immer vollständig",
              ],
              correctAnswer: "Das Schließen von Positionen erzeugt zusätzlichen Druck in Bewegungsrichtung",
            },
            {
              prompt: "Wofür nutzen Trader Liquidations-Heatmaps?",
              options: [
                "Um Zonen mit erhöhtem Risiko scharfer Preisbewegungen einzuschätzen",
                "Um das genaue Datum des nächsten Halvings zu erfahren",
                "Um Steuern auf Gewinne zu berechnen",
              ],
              correctAnswer: "Um Zonen mit erhöhtem Risiko scharfer Preisbewegungen einzuschätzen",
            },
          ],
        },
      ],
    },
    {
      title: "On-Chain-Analyse",
      lessons: [
        {
          slug: "koshelki-kitov",
          title: "Wallets von Walen",
          summary: "Wie die Beobachtung großer Wallets hilft, die Stimmung großer Halter einzuschätzen.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "„Wale“ sind Adressen, die einen großen Anteil am Gesamtangebot eines Assets besitzen. Da alle Transaktionen in der Blockchain öffentlich sind, verfolgen Trader die Bewegungen solcher Wallets — zum Beispiel große Überweisungen an Börsen (potenzielle Vorbereitung auf einen Verkauf) oder umgekehrt von Börsen in Cold Storage.",
            },
            {
              type: "paragraph",
              text: "Wichtig ist es, den Kontext zu berücksichtigen: Eine Überweisung von einer Börse bedeutet nicht immer ein langfristiges Halten, und eine Überweisung an eine Börse nicht immer einen unmittelbaren Verkauf — es kann sich um eine Umverteilung zwischen Wallets desselben Besitzers handeln. Daten über Wale sind ein zusätzliches, kein eigenständiges Signal.",
            },
            {
              type: "list",
              items: [
                "Wallets von Walen lassen sich dank der Öffentlichkeit von Blockchain-Transaktionen verfolgen",
                "Eine große Überweisung an eine Börse wird oft als potenzielle Verkaufsvorbereitung gedeutet",
                "Daten über Walbewegungen sollten zusammen mit anderen Analysearten genutzt werden, nicht isoliert",
              ],
            },
          ],
          questions: [
            {
              prompt: "Warum ist es möglich, die Bewegungen von Wal-Wallets zu verfolgen?",
              options: [
                "Alle Transaktionen in der Blockchain sind öffentlich zugänglich",
                "Börsen veröffentlichen täglich persönliche Daten ihrer Kunden",
                "Das ist nur Regulierungsbehörden möglich",
              ],
              correctAnswer: "Alle Transaktionen in der Blockchain sind öffentlich zugänglich",
            },
            {
              prompt: "Wie wird eine große Überweisung von Token an eine Börse häufig interpretiert?",
              options: [
                "Als potenzielle Vorbereitung auf einen Verkauf",
                "Als garantiertes Signal für langfristiges Halten",
                "Als technischer Fehler des Netzwerks",
              ],
              correctAnswer: "Als potenzielle Vorbereitung auf einen Verkauf",
            },
            {
              prompt: "Wie nutzt man Daten über Walbewegungen am sinnvollsten?",
              options: [
                "Als zusätzliches Signal zusammen mit anderen Analysearten",
                "Als einziges und ausreichendes Signal für den Einstieg in ein Geschäft",
                "Solche Daten sind nutzlos und sollten nicht berücksichtigt werden",
              ],
              correctAnswer: "Als zusätzliches Signal zusammen mit anderen Analysearten",
            },
          ],
        },
        {
          slug: "birzhevye-pritoki-i-ottoki",
          title: "Börsenzu- und -abflüsse",
          summary: "Was die Bewegung von Coins zu und von Börsen für den potenziellen Druck auf den Preis bedeutet.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Börsenzuflüsse (Exchange Inflow) sind das Volumen der auf Börsen-Wallets überwiesenen Coins, Abflüsse (Exchange Outflow) das Volumen der von Börsen abgezogenen Coins. Ein Anstieg der Zuflüsse wird oft als Zunahme des potenziellen Verkaufsdrucks gedeutet, ein Anstieg der Abflüsse als Akkumulation und Rückgang des verfügbaren Verkaufsangebots.",
            },
            {
              type: "paragraph",
              text: "Ein anhaltender Nettoabfluss von Börsen über einen längeren Zeitraum wird üblicherweise mit einer Akkumulationsphase und einem Rückgang des liquiden Verkaufsangebots assoziiert. Ein scharfer einmaliger Zufluss eines großen Betrags geht dagegen oft einer lokalen Volatilität voraus.",
            },
            {
              type: "list",
              items: [
                "Ein Zufluss an Börsen wird oft mit einem Anstieg des potenziellen Verkaufsangebots in Verbindung gebracht",
                "Ein anhaltender Abfluss von Börsen wird üblicherweise mit einer Akkumulationsphase assoziiert",
                "Ein scharfer einmaliger Zufluss eines großen Betrags geht häufig einer lokalen Volatilität voraus",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was bezeichnet man als Börsenzufluss (Exchange Inflow)?",
              options: [
                "Das Volumen der auf Börsen-Wallets überwiesenen Coins",
                "Das Volumen der von Minern an einem Tag geförderten Coins",
                "Die Anzahl neuer Nutzer der Börse",
              ],
              correctAnswer: "Das Volumen der auf Börsen-Wallets überwiesenen Coins",
            },
            {
              prompt: "Mit welcher Marktphase wird ein anhaltender Abfluss von Coins von Börsen üblicherweise assoziiert?",
              options: ["Mit der Akkumulationsphase", "Mit einem panischen Ausverkauf", "Mit dem Listing eines neuen Tokens"],
              correctAnswer: "Mit der Akkumulationsphase",
            },
            {
              prompt: "Was geht einem scharfen, einmaligen Zufluss eines großen Betrags auf eine Börse häufig voraus?",
              options: [
                "Lokale Preisvolatilität",
                "Ein vollständiger Handelsstopp",
                "Eine automatische Senkung der Börsengebühren",
              ],
              correctAnswer: "Lokale Preisvolatilität",
            },
          ],
        },
        {
          slug: "tvl",
          title: "TVL",
          summary: "Der Gesamtwert der gesperrten Assets als Indikator für das Vertrauen in ein DeFi-Protokoll.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "TVL (Total Value Locked) ist der Gesamtwert der Assets, die in den Smart Contracts eines Protokolls gesperrt sind: in Liquiditätspools, im Staking, auf Kreditplattformen. Der TVL wird oft als Maß für die Größe und das Nutzervertrauen in ein Protokoll oder ein gesamtes Blockchain-Netzwerk genutzt.",
            },
            {
              type: "paragraph",
              text: "Wichtig ist zu beachten, dass ein Anstieg des TVL nicht nur durch den Zufluss neuen Kapitals, sondern auch durch den Preisanstieg bereits gesperrter Assets verursacht werden kann. Ein scharfer Rückgang des TVL kann umgekehrt sowohl auf einen Kapitalabfluss als auch auf einen Preisverfall der gesperrten Token hindeuten.",
            },
            {
              type: "list",
              items: [
                "Der TVL misst den Wert der Assets, die in den Smart Contracts eines Protokolls gesperrt sind",
                "Ein Anstieg des TVL kann sowohl einen Zufluss neuen Kapitals als auch einen Preisanstieg der Assets widerspiegeln",
                "Ein scharfer Rückgang des TVL wird oft als Warnsignal für das Protokoll betrachtet",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was misst die TVL-Kennzahl?",
              options: [
                "Den Gesamtwert der Assets, die in den Smart Contracts eines Protokolls gesperrt sind",
                "Die Gesamtzahl der Netzwerktransaktionen aller Zeiten",
                "Die Anzahl der Entwickler, die am Projekt arbeiten",
              ],
              correctAnswer: "Den Gesamtwert der Assets, die in den Smart Contracts eines Protokolls gesperrt sind",
            },
            {
              prompt: "Wodurch kann der TVL steigen, selbst wenn kein neues Kapital zufließt?",
              options: [
                "Durch den Preisanstieg bereits gesperrter Assets",
                "Durch den Rückgang der gesamten Marktkapitalisierung",
                "Der TVL kann ohne Kapitalzufluss nicht steigen",
              ],
              correctAnswer: "Durch den Preisanstieg bereits gesperrter Assets",
            },
            {
              prompt: "Wie interpretieren Trader üblicherweise einen scharfen Rückgang des TVL eines Protokolls?",
              options: [
                "Als potenziell besorgniserregendes Signal (Kapitalabfluss oder Preisverfall der Assets)",
                "Als eindeutig positives Kaufsignal",
                "Der TVL hat keinerlei Zusammenhang mit dem Zustand des Protokolls",
              ],
              correctAnswer: "Als potenziell besorgniserregendes Signal (Kapitalabfluss oder Preisverfall der Assets)",
            },
          ],
        },
        {
          slug: "stablecoins",
          title: "Stablecoins",
          summary: "Die Rolle von Stablecoins am Kryptomarkt und ihre Bestände an Börsen als Indikator potenzieller Nachfrage.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Stablecoins sind Kryptowährungen, deren Kurs an ein stabiles Asset gekoppelt ist, meist an den US-Dollar (USDT, USDC). Sie dienen als grundlegende „Recheneinheit“ des Kryptomarkts und ermöglichen den Wechsel zwischen Assets sowie die Wertsicherung, ohne in das traditionelle Bankensystem abzufließen.",
            },
            {
              type: "paragraph",
              text: "Das Gesamtvolumen der Stablecoins auf Börsen-Wallets wird oft als Indikator für „trockenes Pulver“ betrachtet — die potenzielle Kaufkraft des Marktes. Ein Anstieg der Stablecoin-Reserven an Börsen kann einem Zustrom von Nachfrage nach risikoreichen Assets vorausgehen.",
            },
            {
              type: "list",
              items: [
                "Stablecoins sind an ein stabiles Asset gekoppelt, üblicherweise an den US-Dollar",
                "Sie erfüllen die Funktion einer Recheneinheit und eines Wertaufbewahrungsmittels innerhalb des Kryptomarkts",
                "Ein Anstieg der Stablecoin-Reserven an Börsen wird oft mit einem potenziellen Anstieg der Kaufkraft in Verbindung gebracht",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was unterscheidet Stablecoins von den meisten anderen Kryptowährungen?",
              options: [
                "Ihr Kurs ist an ein stabiles Asset gekoppelt, üblicherweise an den US-Dollar",
                "Sie können nicht zwischen Wallets übertragen werden",
                "Sie existieren ausschließlich außerhalb der Blockchain",
              ],
              correctAnswer: "Ihr Kurs ist an ein stabiles Asset gekoppelt, üblicherweise an den US-Dollar",
            },
            {
              prompt: "Welche Funktion erfüllen Stablecoins am Kryptomarkt?",
              options: [
                "Recheneinheit und Wertaufbewahrungsmittel innerhalb des Marktes",
                "Einziges Mittel zum Mining",
                "Ersatz für den Konsensmechanismus der Blockchain",
              ],
              correctAnswer: "Recheneinheit und Wertaufbewahrungsmittel innerhalb des Marktes",
            },
            {
              prompt: "Wovon kann ein Anstieg der Stablecoin-Reserven an Börsen zeugen?",
              options: [
                "Von einem potenziellen Anstieg der Kaufkraft des Marktes",
                "Von einem technischen Fehler des Stablecoins",
                "Von einer vollständigen Einstellung des Börsenhandels",
              ],
              correctAnswer: "Von einem potenziellen Anstieg der Kaufkraft des Marktes",
            },
          ],
        },
        {
          slug: "onchain-metriki",
          title: "On-Chain-Metriken",
          summary: "Überblick über die wichtigsten Netzwerkmetriken: aktive Adressen, Netzwerkgebühren und ihre Anwendung in der Analyse.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "On-Chain-Metriken sind Daten, die direkt aus der Blockchain gewonnen werden können: die Anzahl aktiver Adressen, das Überweisungsvolumen, Netzwerkgebühren, die Anzahl neuer Wallets. Im Gegensatz zu Marktdaten (Preis, Börsenvolumen) spiegeln sie die reale Netzwerkaktivität wider.",
            },
            {
              type: "paragraph",
              text: "Ein Anstieg der Anzahl aktiver Adressen und des Überweisungsvolumens bei relativ ruhigem Preis kann auf eine wachsende fundamentale Nutzung des Netzwerks hindeuten. Solche Metriken sind besonders nützlich für die mittel- und langfristige Analyse, weniger für ein genaues Timing des Einstiegs.",
            },
            {
              type: "list",
              items: [
                "On-Chain-Metriken spiegeln die reale Netzwerkaktivität wider, nicht nur den Börsenpreis",
                "Ein Anstieg aktiver Adressen bei ruhigem Preis kann auf eine wachsende fundamentale Nutzung hindeuten",
                "Die On-Chain-Analyse eignet sich besser für mittel- und langfristige Schlussfolgerungen als für ein genaues Timing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worin unterscheiden sich On-Chain-Metriken von rein marktbezogenen Daten wie Preis und Börsenvolumen?",
              options: [
                "Sie werden direkt aus der Blockchain gewonnen und spiegeln die reale Netzwerkaktivität wider",
                "Sie stimmen vollständig mit den Marktdaten überein",
                "Sie sind nur den Börsenbetreibern zugänglich",
              ],
              correctAnswer: "Sie werden direkt aus der Blockchain gewonnen und spiegeln die reale Netzwerkaktivität wider",
            },
            {
              prompt: "Wovon kann ein Anstieg der aktiven Netzwerkadressen bei relativ ruhigem Preis zeugen?",
              options: [
                "Von einer wachsenden fundamentalen Nutzung des Netzwerks",
                "Von einem technischen Defekt der Blockchain",
                "Von einem vollständigen Stillstand der Transaktionen",
              ],
              correctAnswer: "Von einer wachsenden fundamentalen Nutzung des Netzwerks",
            },
            {
              prompt: "Für welchen Analysehorizont eignen sich On-Chain-Metriken üblicherweise am besten?",
              options: [
                "Für die mittel- und langfristige Analyse",
                "Ausschließlich für das minutengenaue Timing des Einstiegs",
                "On-Chain-Metriken finden in der Praxis nirgends Anwendung",
              ],
              correctAnswer: "Für die mittel- und langfristige Analyse",
            },
          ],
        },
      ],
    },
    {
      title: "Professionelles Trading",
      lessons: [
        {
          slug: "torgovy-zhurnal",
          title: "Handelstagebuch",
          summary: "Warum man jedes Geschäft festhalten sollte und was ein Tagebucheintrag enthalten muss.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Ein Handelstagebuch ist die systematische Aufzeichnung jedes Geschäfts: Grund für den Einstieg, Positionsgröße, Stop-Loss und Take Profit, Endergebnis und emotionaler Zustand des Traders. Ohne Tagebuch verlässt sich der Trader auf sein Gedächtnis, das erfolgreiche Geschäfte selektiv behält und erfolglose ausblendet.",
            },
            {
              type: "paragraph",
              text: "Die regelmäßige Analyse des Tagebuchs erlaubt es, Gesetzmäßigkeiten zu erkennen: zum Beispiel, dass die meisten Verluste auf Geschäfte entfallen, die ohne klares Signal eröffnet wurden, oder dass eine bestimmte Tageszeit stabil weniger profitabel ist. Das verwandelt intuitive Eindrücke in konkrete, überprüfbare Daten.",
            },
            {
              type: "list",
              items: [
                "Das Tagebuch sollte den Grund für den Einstieg festhalten, nicht nur das Ergebnis des Geschäfts",
                "Die regelmäßige Analyse des Tagebuchs hilft, wiederkehrende Fehler zu erkennen",
                "Die Daten des Tagebuchs sind objektiver als die subjektive Erinnerung des Traders",
              ],
            },
          ],
          questions: [
            {
              prompt: "Warum sollte ein Trader ein Handelstagebuch führen?",
              options: [
                "Um Geschäfte objektiv festzuhalten, statt sich auf selektive Erinnerung zu verlassen",
                "Das ist eine Vorschrift der Börse für die Eröffnung von Geschäften",
                "Das Tagebuch wird nur für die Steuererklärung benötigt",
              ],
              correctAnswer: "Um Geschäfte objektiv festzuhalten, statt sich auf selektive Erinnerung zu verlassen",
            },
            {
              prompt: "Was muss neben dem Ergebnis des Geschäfts unbedingt im Tagebucheintrag festgehalten werden?",
              options: [
                "Der Grund für den Einstieg in das Geschäft",
                "Nur der Endgewinn in Dollar",
                "Der Name des verwendeten Geräts",
              ],
              correctAnswer: "Der Grund für den Einstieg in das Geschäft",
            },
            {
              prompt: "Was bringt die regelmäßige Analyse des Handelstagebuchs?",
              options: [
                "Sie erlaubt es, wiederkehrende Gesetzmäßigkeiten und Fehler zu erkennen",
                "Sie erhöht automatisch die Höhe des Guthabens",
                "Sie garantiert, dass es künftig keine Verlustgeschäfte mehr gibt",
              ],
              correctAnswer: "Sie erlaubt es, wiederkehrende Gesetzmäßigkeiten und Fehler zu erkennen",
            },
          ],
        },
        {
          slug: "sozdanie-strategii",
          title: "Strategieentwicklung",
          summary: "Aus welchen zwingenden Elementen eine vollwertige Handelsstrategie besteht.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Eine Handelsstrategie ist ein klar beschriebenes Regelwerk: auf welchem Markt gehandelt wird, unter welchen Bedingungen ein Geschäft eröffnet wird, wo Stop-Loss und Take Profit gesetzt werden, welcher Prozentsatz des Guthabens riskiert wird. Ohne diese im Voraus festgelegten Regeln wird der Handel zu einer Abfolge zufälliger Entscheidungen.",
            },
            {
              type: "paragraph",
              text: "Eine gute Strategie muss konkret genug sein, um sie einer anderen Person erklären und anhand historischer Daten überprüfen zu können. Sie muss nicht in 100 % der Fälle funktionieren — wichtig ist, dass die Regeln reproduzierbar sind und der Erwartungswert positiv ist.",
            },
            {
              type: "list",
              items: [
                "Eine Strategie umfasst zwingend Einstiegs- und Ausstiegsbedingungen sowie Risikomanagement-Regeln",
                "Die Regeln müssen konkret genug sein, um anhand der Historie überprüft werden zu können",
                "Ziel der Strategie ist ein positiver Erwartungswert, nicht 100 % Treffsicherheit",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was muss zwingend Teil der Beschreibung einer Handelsstrategie sein?",
              options: [
                "Einstiegs- und Ausstiegsbedingungen sowie Regeln zum Risikomanagement",
                "Nur der gewünschte Gewinnbetrag pro Monat",
                "Eine Liste der Lieblingskryptowährungen des Traders",
              ],
              correctAnswer: "Einstiegs- und Ausstiegsbedingungen sowie Regeln zum Risikomanagement",
            },
            {
              prompt: "Warum sollte eine Strategie konkret und nicht vage formuliert sein?",
              options: [
                "Damit sie erklärt und anhand historischer Daten überprüft werden kann",
                "Die Klarheit der Regeln spielt keine Rolle",
                "Um sie vor anderen Tradern zu verbergen",
              ],
              correctAnswer: "Damit sie erklärt und anhand historischer Daten überprüft werden kann",
            },
            {
              prompt: "Muss eine gute Strategie bei 100 % der Geschäfte profitabel sein?",
              options: [
                "Nein, wichtig ist ein insgesamt positiver Erwartungswert",
                "Ja, sonst gilt die Strategie als nicht funktionsfähig",
                "Ja, aber nur auf dem Tageschart",
              ],
              correctAnswer: "Nein, wichtig ist ein insgesamt positiver Erwartungswert",
            },
          ],
        },
        {
          slug: "backtest",
          title: "Backtest",
          summary: "Die Überprüfung einer Handelsstrategie anhand historischer Daten vor dem realen Einsatz.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Ein Backtest ist die Überprüfung einer Handelsstrategie anhand historischer Daten: Die Regeln werden auf vergangene Preisdaten angewendet, um zu bewerten, ob die Strategie profitabel gewesen wäre. Das ist eine Möglichkeit, Statistiken zu einer Strategie zu gewinnen, ohne echtes Kapital zu riskieren.",
            },
            {
              type: "paragraph",
              text: "Der Backtest hat Grenzen: Vergangene Ergebnisse garantieren keine zukünftigen, und ein nachlässiger Test kann zu einer Überanpassung der Regeln an einen bestimmten historischen Zeitraum führen. Dennoch ist der Backtest ein notwendiger erster Schritt, bevor man der Strategie echtes Geld anvertraut.",
            },
            {
              type: "list",
              items: [
                "Der Backtest erlaubt die Bewertung einer Strategie anhand historischer Daten ohne reales Risiko",
                "Frühere Backtest-Ergebnisse garantieren kein gleichwertiges Ergebnis in der Zukunft",
                "Die Überanpassung der Regeln an einen bestimmten historischen Zeitraum ist ein typischer Fehler beim Backtesting",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was stellt ein Backtest einer Handelsstrategie dar?",
              options: [
                "Die Überprüfung der Strategieregeln anhand historischer Preisdaten",
                "Realen Handel mit minimalem Guthaben",
                "Eine Umfrage unter anderen Tradern zur Strategie",
              ],
              correctAnswer: "Die Überprüfung der Strategieregeln anhand historischer Preisdaten",
            },
            {
              prompt: "Garantiert ein erfolgreicher Backtest dasselbe Ergebnis in der Zukunft?",
              options: [
                "Nein, vergangene Ergebnisse garantieren keine zukünftigen",
                "Ja, das Backtest-Ergebnis wiederholt sich im realen Handel immer",
                "Ja, aber nur bei Aktien",
              ],
              correctAnswer: "Nein, vergangene Ergebnisse garantieren keine zukünftigen",
            },
            {
              prompt: "Was ist Überanpassung (Overfitting) im Kontext des Backtestings?",
              options: [
                "Die übermäßige Anpassung der Regeln an einen bestimmten historischen Zeitraum",
                "Die Verwendung zu weniger Indikatoren",
                "Der Handel ohne Stop-Loss",
              ],
              correctAnswer: "Die übermäßige Anpassung der Regeln an einen bestimmten historischen Zeitraum",
            },
          ],
        },
        {
          slug: "forward-test",
          title: "Forward-Test",
          summary: "Die Überprüfung einer Strategie anhand neuer, noch nicht verwendeter Daten nach dem Backtest.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Ein Forward-Test ist die Überprüfung einer Strategie auf einem realen oder Demo-Konto vorwärts in der Zeit, anhand von Daten, die bei der Entwicklung und dem Backtesting der Regeln nicht verwendet wurden. Das ist der entscheidende Schritt, der zeigt, ob die Strategie auf wirklich neuen Daten funktioniert.",
            },
            {
              type: "paragraph",
              text: "Der Forward-Test hilft, eine Überanpassung aufzudecken, die beim Backtest unbemerkt geblieben sein könnte: Weichen die Ergebnisse des Forward-Tests stark von denen des Backtests ab, wurde die Strategie wahrscheinlich zu genau an vergangene Daten angepasst.",
            },
            {
              type: "list",
              items: [
                "Der Forward-Test wird mit Daten durchgeführt, die bei der Strategieentwicklung nicht verwendet wurden",
                "Er erlaubt es, eine Überanpassung aufzudecken, die im gewöhnlichen Backtest unsichtbar bleibt",
                "Eine starke Abweichung zwischen Backtest- und Forward-Test-Ergebnissen ist ein Warnsignal",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worin besteht der zentrale Unterschied zwischen Forward-Test und Backtest?",
              options: [
                "Der Forward-Test wird mit neuen Daten durchgeführt, die bei der Strategieentwicklung nicht verwendet wurden",
                "Der Forward-Test wird immer nur mit einem großen realen Guthaben durchgeführt",
                "Es gibt keinen Unterschied zwischen beiden",
              ],
              correctAnswer: "Der Forward-Test wird mit neuen Daten durchgeführt, die bei der Strategieentwicklung nicht verwendet wurden",
            },
            {
              prompt: "Was hilft der Forward-Test im Gegensatz zum Backtest aufzudecken?",
              options: [
                "Eine Überanpassung der Strategie an vergangene Daten",
                "Das genaue Datum des nächsten Halvings",
                "Die Börsengebühr für Auszahlungen",
              ],
              correctAnswer: "Eine Überanpassung der Strategie an vergangene Daten",
            },
            {
              prompt: "Wovon zeugt eine starke Abweichung zwischen den Ergebnissen von Backtest und Forward-Test?",
              options: [
                "Die Strategie wurde wahrscheinlich zu genau an vergangene Daten angepasst",
                "Davon, dass die Strategie absolut zuverlässig ist",
                "Das hat für die Bewertung der Strategie keine Bedeutung",
              ],
              correctAnswer: "Die Strategie wurde wahrscheinlich zu genau an vergangene Daten angepasst",
            },
          ],
        },
        {
          slug: "statistika-sdelok",
          title: "Handelsstatistik",
          summary: "Die wichtigsten Kennzahlen, die man zur objektiven Bewertung des eigenen Handels verfolgen sollte.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Die Handelsstatistik ist ein Satz objektiver, aus dem Tagebuch berechneter Kennzahlen: die Trefferquote (Winrate, Anteil profitabler Geschäfte), das durchschnittliche R/R, der Erwartungswert eines Geschäfts, der maximale Drawdown und weitere. Diese Zahlen zeigen das reale Bild des Handels, nicht das subjektive Gefühl.",
            },
            {
              type: "paragraph",
              text: "Keine Kennzahl sollte isoliert von den anderen bewertet werden: Eine hohe Trefferquote bei niedrigem durchschnittlichem R/R kann zum gleichen Ergebnis führen wie eine niedrige Trefferquote bei hohem R/R. Gerade der Erwartungswert — was ein Geschäft im Durchschnitt einbringt — ist die entscheidende Orientierungsgröße für die Qualität einer Strategie.",
            },
            {
              type: "list",
              items: [
                "Trefferquote und durchschnittliches R/R müssen zusammen analysiert werden, nicht getrennt",
                "Der Erwartungswert eines Geschäfts ist die zentrale Endkennzahl für die Qualität einer Strategie",
                "Der maximale Drawdown zeigt, wie stark das Guthaben in der schlechtesten Phase gefallen ist",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was zeigt die Trefferquote (Winrate) einer Handelsstrategie?",
              options: [
                "Den Anteil profitabler Geschäfte an der Gesamtzahl",
                "Den gesamten Gewinn in Dollar über die gesamte Zeit",
                "Die Anzahl der aktuell offenen Geschäfte",
              ],
              correctAnswer: "Den Anteil profitabler Geschäfte an der Gesamtzahl",
            },
            {
              prompt: "Warum darf die Trefferquote nicht losgelöst vom durchschnittlichen R/R bewertet werden?",
              options: [
                "Eine hohe Trefferquote bei niedrigem R/R kann zum gleichen Ergebnis führen wie eine niedrige Trefferquote bei hohem R/R",
                "Trefferquote und R/R sind immer absolut identisch",
                "Das R/R hat überhaupt keinen Einfluss auf das Endergebnis",
              ],
              correctAnswer: "Eine hohe Trefferquote bei niedrigem R/R kann zum gleichen Ergebnis führen wie eine niedrige Trefferquote bei hohem R/R",
            },
            {
              prompt: "Was zeigt die Kennzahl des maximalen Drawdowns?",
              options: [
                "Wie stark das Guthaben in der schlechtesten Handelsphase gesunken ist",
                "Die endgültige Jahresrendite der Strategie",
                "Die Anzahl der Assets im Portfolio",
              ],
              correctAnswer: "Wie stark das Guthaben in der schlechtesten Handelsphase gesunken ist",
            },
          ],
        },
      ],
    },
    {
      title: "Altcoins und Tokenomics",
      lessons: [
        {
          slug: "tokenomics",
          title: "Tokenomics",
          summary: "Das ökonomische Modell eines Tokens: Angebot, Verteilung und Anreize für Halter.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Tokenomics (Token-Ökonomie) beschreibt das ökonomische Modell eines Tokens: Gesamt- und Maximalangebot, Verteilung zwischen Team, Investoren und Community, Emissions- und Verbrennungsmechanismen sowie die Anreize, die Halter dazu bewegen, den Token zu nutzen oder zu halten.",
            },
            {
              type: "paragraph",
              text: "Eine schwache Tokenomics — zum Beispiel ein großer Team-Anteil mit kurzer Sperrfrist — erzeugt unabhängig von der Qualität des Produkts selbst dauerhaften Verkaufsdruck auf den Markt. Die Analyse der Tokenomics ist für die Bewertung eines Projekts ebenso wichtig wie die Analyse der Technologie.",
            },
            {
              type: "list",
              items: [
                "Die Tokenomics beschreibt Angebot, Verteilung und Anreize der Token-Halter",
                "Ein großer Token-Anteil des Teams mit kurzem Vesting schafft ein Risiko für Verkaufsdruck",
                "Die Analyse der Tokenomics ist nicht weniger wichtig als die Analyse der Projekttechnologie",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was beschreibt die Tokenomics eines Projekts?",
              options: [
                "Das ökonomische Modell des Tokens: Angebot, Verteilung und Anreize der Halter",
                "Nur den technischen Stack der Blockchain",
                "Die Liste der Börsen, an denen der Token gehandelt wird",
              ],
              correctAnswer: "Das ökonomische Modell des Tokens: Angebot, Verteilung und Anreize der Halter",
            },
            {
              prompt: "Welcher Tokenomics-Faktor schafft ein Risiko für dauerhaften Verkaufsdruck?",
              options: [
                "Ein großer Token-Anteil des Teams mit kurzer Sperrfrist",
                "Das vollständige Fehlen von Token beim Team",
                "Ein maximales Token-Angebot von null",
              ],
              correctAnswer: "Ein großer Token-Anteil des Teams mit kurzer Sperrfrist",
            },
            {
              prompt: "Wie wichtig ist die Analyse der Tokenomics im Vergleich zur Analyse der Projekttechnologie?",
              options: [
                "Sie ist nicht weniger wichtig und sollte gleichrangig mit der Technologie berücksichtigt werden",
                "Die Tokenomics spielt für die Bewertung eines Projekts keine Rolle",
                "Sie ist nur für Projekte ohne Blockchain wichtig",
              ],
              correctAnswer: "Sie ist nicht weniger wichtig und sollte gleichrangig mit der Technologie berücksichtigt werden",
            },
          ],
        },
        {
          slug: "fdv",
          title: "FDV",
          summary: "Die vollständig verwässerte Bewertung und warum sie für neue Token wichtiger ist als die Marktkapitalisierung.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "FDV (Fully Diluted Valuation) ist eine Projektbewertung, die so berechnet wird, als befände sich bereits das gesamte maximale Token-Angebot zum aktuellen Preis im Umlauf. Im Gegensatz zur Marktkapitalisierung, die nur die aktuell im Umlauf befindlichen Token berücksichtigt, zeigt die FDV die potenzielle künftige Bewertung.",
            },
            {
              type: "paragraph",
              text: "Eine große Lücke zwischen der aktuellen Kapitalisierung und der FDV bedeutet, dass ein erheblicher Teil des Angebots noch nicht ausgegeben wurde und im Laufe der Zeit auf den Markt kommen wird, was bei der Freigabe potenziellen Verkaufsdruck erzeugt — das ist besonders bei neuen Token mit niedrigem Umlaufanteil zu beachten.",
            },
            {
              type: "list",
              items: [
                "Die FDV wird anhand des maximalen, nicht des aktuellen Token-Angebots berechnet",
                "Eine große Lücke zwischen Kapitalisierung und FDV deutet auf eine erhebliche künftige Emission hin",
                "Token mit niedrigem Umlaufanteil und hoher FDV erfordern besondere Aufmerksamkeit für den Freigabeplan",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wie wird die FDV berechnet?",
              options: [
                "Anhand des maximalen Token-Angebots zum aktuellen Preis",
                "Anhand nur der auf einer bestimmten Börse gehandelten Token",
                "Anhand des Handelsvolumens der letzten 24 Stunden",
              ],
              correctAnswer: "Anhand des maximalen Token-Angebots zum aktuellen Preis",
            },
            {
              prompt: "Wovon zeugt eine große Lücke zwischen Marktkapitalisierung und FDV?",
              options: [
                "Von einem erheblichen Anteil des Angebots, der noch nicht in den Umlauf gebracht wurde",
                "Davon, dass der Token bereits vollständig freigegeben ist",
                "Von einem technischen Fehler in der Preisberechnung",
              ],
              correctAnswer: "Von einem erheblichen Anteil des Angebots, der noch nicht in den Umlauf gebracht wurde",
            },
            {
              prompt: "Bei welchen Token ist es besonders wichtig, auf das Verhältnis von Kapitalisierung zu FDV zu achten?",
              options: [
                "Bei neuen Token mit niedrigem Anteil im Umlauf",
                "Nur bei Stablecoins",
                "Das Verhältnis von Kapitalisierung zu FDV hat keine praktische Bedeutung",
              ],
              correctAnswer: "Bei neuen Token mit niedrigem Anteil im Umlauf",
            },
          ],
        },
        {
          slug: "vesting",
          title: "Vesting",
          summary: "Die schrittweise Freigabe von Token für Team und Investoren nach einem festgelegten Zeitplan.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Vesting ist ein Mechanismus zur schrittweisen Freigabe von Token, die dem Team, den Investoren oder Beratern eines Projekts zugeteilt wurden, nach einem im Voraus festgelegten Zeitplan statt einer einmaligen Ausschüttung. Das soll den Anreiz früher Beteiligter verringern, Token unmittelbar nach dem Listing zu verkaufen.",
            },
            {
              type: "paragraph",
              text: "Die Standardstruktur des Vestings umfasst eine „Cliff“-Phase — einen Zeitraum, in dem Token vollständig gesperrt sind — und eine anschließende lineare oder gestufte Freigabe. Eine kurze Cliff-Phase und ein aggressiver Vesting-Plan erhöhen das Risiko von Verkaufsdruck in frühen Phasen.",
            },
            {
              type: "list",
              items: [
                "Vesting gibt Token von Team und Investoren schrittweise frei, nicht sofort",
                "Die Cliff-Phase ist der Zeitraum vollständiger Token-Sperrung zu Beginn des Vesting-Plans",
                "Eine kurze Cliff-Phase und ein aggressiver Freigabeplan erhöhen das Risiko von Verkaufsdruck",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist Token-Vesting?",
              options: [
                "Ein Mechanismus zur schrittweisen Freigabe von Token nach einem festgelegten Zeitplan",
                "Der einmalige Verkauf aller Token eines Projekts",
                "Eine Methode zum Mining neuer Token",
              ],
              correctAnswer: "Ein Mechanismus zur schrittweisen Freigabe von Token nach einem festgelegten Zeitplan",
            },
            {
              prompt: "Was ist die Cliff-Phase im Vesting-Plan?",
              options: [
                "Der Zeitraum vollständiger Token-Sperrung zu Beginn des Plans",
                "Die abschließende Freigabe aller verbleibenden Token",
                "Eine Gebühr für die vorzeitige Auszahlung von Token",
              ],
              correctAnswer: "Der Zeitraum vollständiger Token-Sperrung zu Beginn des Plans",
            },
            {
              prompt: "Warum setzen Projekte Vesting für Team und Investoren ein?",
              options: [
                "Um den Anreiz zu verringern, Token unmittelbar nach dem Listing zu verkaufen",
                "Um die Beteiligung des Teams am Projekt vollständig auszuschließen",
                "Das ist eine technische Anforderung jeder Blockchain",
              ],
              correctAnswer: "Um den Anreiz zu verringern, Token unmittelbar nach dem Listing zu verkaufen",
            },
          ],
        },
        {
          slug: "unlocks",
          title: "Unlocks",
          summary: "Token-Freigaben nach Zeitplan und ihr Einfluss auf den Preis des Assets.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Unlocks (Freigaben) sind die Momente, in denen eine weitere Tranche gesperrter Token (von Team, Investoren, Ökosystem-Fonds) für Überweisung und potenziellen Verkauf verfügbar wird. Termine und Umfang der Freigaben sind üblicherweise im Voraus bekannt und werden vom Projekt veröffentlicht.",
            },
            {
              type: "paragraph",
              text: "Eine große Freigabe im Verhältnis zum aktuellen Handelsvolumen kann spürbaren Verkaufsdruck auf den Preis erzeugen, besonders wenn die Empfänger der Token keine langfristige Motivation haben, sie zu halten. Trader verfolgen den Freigabekalender oft im Voraus als Element des Risikomanagements.",
            },
            {
              type: "list",
              items: [
                "Eine Freigabe macht eine weitere Tranche von Token für Überweisung und Verkauf verfügbar",
                "Eine große Freigabe im Verhältnis zum Handelsvolumen kann Druck auf den Preis erzeugen",
                "Der Kalender bevorstehender Freigaben ist ein wichtiges Element des Risikomanagements für Altcoin-Positionen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was geschieht im Moment einer Token-Freigabe (Unlock)?",
              options: [
                "Eine weitere Tranche zuvor gesperrter Token wird für die Überweisung verfügbar",
                "Alle Token des Projekts werden vernichtet",
                "Die Börse setzt den Handel mit dem Asset vorübergehend aus",
              ],
              correctAnswer: "Eine weitere Tranche zuvor gesperrter Token wird für die Überweisung verfügbar",
            },
            {
              prompt: "Wann kann eine Token-Freigabe spürbaren Druck auf den Preis erzeugen?",
              options: [
                "Wenn ihr Umfang im Verhältnis zum aktuellen Handelsvolumen groß ist",
                "Freigaben haben nie Einfluss auf den Preis",
                "Nur wenn die Freigabe nachts stattfindet",
              ],
              correctAnswer: "Wenn ihr Umfang im Verhältnis zum aktuellen Handelsvolumen groß ist",
            },
            {
              prompt: "Warum verfolgen Trader den Freigabekalender eines Tokens?",
              options: [
                "Das ist ein Element des Risikomanagements beim Halten einer Altcoin-Position",
                "Der Freigabekalender hat keine praktische Anwendung",
                "Um die Gewinnsteuer genau zu berechnen",
              ],
              correctAnswer: "Das ist ein Element des Risikomanagements beim Halten einer Altcoin-Position",
            },
          ],
        },
        {
          slug: "emissiya",
          title: "Emission",
          summary: "Die Geschwindigkeit der Ausgabe neuer Token und ihr Einfluss auf den langfristigen Preisdruck.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Emission ist der Prozess der Ausgabe neuer Token in den Umlauf, etwa durch Mining-Belohnungen, Staking oder Ökosystem-Grants. Die Emissionsgeschwindigkeit bestimmt, wie schnell das Token-Angebot im Laufe der Zeit wächst — unabhängig von der Nachfrage danach.",
            },
            {
              type: "paragraph",
              text: "Eine hohe konstante Emission ohne entsprechenden Nachfragezuwachs erzeugt langfristig anhaltenden Druck auf den Preis — das ist einer der Gründe, warum manche Projekte Verbrennungsmechanismen für Token einführen, um die Emission teilweise auszugleichen.",
            },
            {
              type: "list",
              items: [
                "Die Emission erhöht das Token-Angebot unabhängig von der aktuellen Nachfrage",
                "Eine hohe Emission ohne Nachfragewachstum erzeugt langfristigen Druck auf den Preis",
                "Verbrennungsmechanismen für Token werden eingeführt, um die Emission teilweise auszugleichen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist die Emission eines Tokens?",
              options: [
                "Der Prozess der Ausgabe neuer Token in den Umlauf",
                "Der Prozess der vollständigen Entfernung eines Tokens von der Börse",
                "Der Prozess der Echtheitsprüfung eines Wallets",
              ],
              correctAnswer: "Der Prozess der Ausgabe neuer Token in den Umlauf",
            },
            {
              prompt: "Was geschieht bei hoher Emission ohne entsprechenden Nachfragezuwachs?",
              options: [
                "Es entsteht anhaltender langfristiger Druck auf den Preis",
                "Der Preis des Tokens steigt garantiert",
                "Das Gesamtangebot des Tokens sinkt",
              ],
              correctAnswer: "Es entsteht anhaltender langfristiger Druck auf den Preis",
            },
            {
              prompt: "Warum führen manche Projekte einen Token-Verbrennungsmechanismus ein?",
              options: [
                "Um den Effekt der Emission auf das Angebot teilweise auszugleichen",
                "Um den Betrieb des Netzwerks vollständig einzustellen",
                "Das ist eine Voraussetzung der Börsen für ein Listing",
              ],
              correctAnswer: "Um den Effekt der Emission auf das Angebot teilweise auszugleichen",
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
          summary: "Dezentrale Börsen und ihr grundlegender Unterschied zu zentralisierten Börsen.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Eine DEX (Decentralized Exchange) ist eine Börse, die über Smart Contracts funktioniert, ohne einen zentralen Betreiber, der die Gelder der Nutzer verwahrt. Geschäfte werden direkt zwischen den Wallets der Teilnehmer ausgeführt, nicht über eine interne Datenbank der Börse wie bei zentralisierten Plattformen.",
            },
            {
              type: "paragraph",
              text: "Der Hauptvorteil einer DEX ist, dass der Nutzer bis zum Moment des Geschäfts die Kontrolle über seine Mittel behält (Prinzip „not your keys, not your coins“). Die Kehrseite: Die gesamte Verantwortung für die Sicherheit des Wallets und die korrekte Interaktion mit dem Smart Contract liegt beim Nutzer selbst.",
            },
            {
              type: "list",
              items: [
                "Eine DEX funktioniert über Smart Contracts ohne zentralen Verwahrer der Mittel",
                "Der Nutzer behält bis zum Moment des Geschäfts die Kontrolle über seine Assets",
                "Die Verantwortung für die Wallet-Sicherheit bei einer DEX liegt vollständig beim Nutzer",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worin unterscheidet sich eine DEX grundlegend von einer zentralisierten Börse?",
              options: [
                "Eine DEX funktioniert über Smart Contracts ohne zentralen Verwahrer der Nutzergelder",
                "Auf einer DEX sind keine Geschäfte möglich",
                "DEX stehen nur institutionellen Investoren offen",
              ],
              correctAnswer: "Eine DEX funktioniert über Smart Contracts ohne zentralen Verwahrer der Nutzergelder",
            },
            {
              prompt: "Worin liegt der Hauptvorteil des Handels über eine DEX hinsichtlich der Kontrolle über Assets?",
              options: [
                "Der Nutzer behält bis zum Moment des Geschäfts die Kontrolle über seine Mittel",
                "Eine DEX erhebt garantiert keine Gebühr",
                "Eine DEX schützt automatisch vor allen Arten von Betrug",
              ],
              correctAnswer: "Der Nutzer behält bis zum Moment des Geschäfts die Kontrolle über seine Mittel",
            },
            {
              prompt: "Wer trägt die Verantwortung für die Sicherheit des Wallets bei der Nutzung einer DEX?",
              options: [
                "Vollständig der Nutzer selbst",
                "Vollständig die Entwickler des Protokolls",
                "Die Verantwortung ist automatisch von der Börse versichert",
              ],
              correctAnswer: "Vollständig der Nutzer selbst",
            },
          ],
        },
        {
          slug: "amm",
          title: "AMM",
          summary: "Automatisierte Market Maker und das Funktionsprinzip von Liquiditätspools.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Ein AMM (Automated Market Maker) ist der Mechanismus, der den meisten DEX zugrunde liegt: Der Preis eines Assets wird durch eine mathematische Formel auf Basis des Verhältnisses der Token im Liquiditätspool bestimmt, nicht durch ein Orderbuch wie bei traditionellen Börsen.",
            },
            {
              type: "paragraph",
              text: "Der Liquiditätspool wird von Nutzern (Liquiditätsanbietern) gespeist, die ein Token-Paar im gleichen Wert einbringen und dafür einen Anteil an den Handelsgebühren erhalten. Große Geschäfte im Verhältnis zur Poolgröße verursachen Slippage — eine spürbare Abweichung des Ausführungspreises vom Marktpreis.",
            },
            {
              type: "list",
              items: [
                "Der AMM bestimmt den Preis über eine Formel auf Basis des Token-Verhältnisses im Pool, nicht über ein Orderbuch",
                "Liquiditätsanbieter verdienen einen Anteil an den Handelsgebühren des Pools",
                "Ein großes Geschäft im Verhältnis zur Poolgröße verursacht spürbare Preis-Slippage",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wie bestimmt ein AMM den Preis eines Assets?",
              options: [
                "Über eine mathematische Formel auf Basis des Token-Verhältnisses im Pool",
                "Über ein Orderbuch wie bei einer zentralisierten Börse",
                "Über die Abstimmung der Token-Halter",
              ],
              correctAnswer: "Über eine mathematische Formel auf Basis des Token-Verhältnisses im Pool",
            },
            {
              prompt: "Was erhalten Liquiditätsanbieter in einem AMM-Pool?",
              options: [
                "Einen Anteil an den Handelsgebühren des Pools",
                "Einen garantierten festen Jahreszins ohne Risiko",
                "Das alleinige Recht, das Protokoll zu verwalten",
              ],
              correctAnswer: "Einen Anteil an den Handelsgebühren des Pools",
            },
            {
              prompt: "Was ist Slippage im Kontext eines AMM?",
              options: [
                "Die Abweichung des Ausführungspreises vom Marktpreis bei einem großen Geschäft im Verhältnis zur Poolgröße",
                "Die Netzwerkgebühr für die Bestätigung einer Transaktion",
                "Die Verzögerung bei der Verarbeitung einer Transaktion durch einen Netzwerkknoten",
              ],
              correctAnswer: "Die Abweichung des Ausführungspreises vom Marktpreis bei einem großen Geschäft im Verhältnis zur Poolgröße",
            },
          ],
        },
        {
          slug: "staking",
          title: "Staking",
          summary: "Das Sperren von Token zur Teilnahme am Konsens oder zum Erhalt einer Belohnung.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Staking ist das Sperren von Token zur Unterstützung des Netzwerkbetriebs (bei Blockchains mit Proof-of-Stake-Mechanismus) oder zur Teilnahme an einem Protokoll gegen eine Belohnung. In PoS-Netzwerken helfen Staker, Transaktionen zu bestätigen und die Sicherheit des Netzwerks zu gewährleisten.",
            },
            {
              type: "paragraph",
              text: "Die Staking-Rendite wird üblicherweise in Jahresprozent (APR/APY) angegeben, doch wichtig ist zu beachten, dass sie teilweise oder vollständig durch die Emission neuer Token entsteht, was die nominale Rendite durch reale Angebotsverwässerung ausgleichen kann.",
            },
            {
              type: "list",
              items: [
                "In Proof-of-Stake-Netzwerken hilft Staking, Transaktionen zu bestätigen und das Netzwerk zu schützen",
                "Die Staking-Rendite wird üblicherweise in Jahresprozent (APR/APY) angegeben",
                "Die Staking-Rendite entsteht oft teilweise durch Emission und nicht nur durch reale Nachfrage",
              ],
            },
          ],
          questions: [
            {
              prompt: "Welche Rolle spielt Staking in Proof-of-Stake-Netzwerken?",
              options: [
                "Es hilft, Transaktionen zu bestätigen und die Sicherheit des Netzwerks zu gewährleisten",
                "Es ersetzt vollständig die Notwendigkeit einer Blockchain",
                "Es wird ausschließlich zu Marketingzwecken des Projekts genutzt",
              ],
              correctAnswer: "Es hilft, Transaktionen zu bestätigen und die Sicherheit des Netzwerks zu gewährleisten",
            },
            {
              prompt: "Wie wird die Staking-Rendite üblicherweise angegeben?",
              options: [
                "In Jahresprozent (APR/APY)",
                "Nur als fester Dollarbetrag einmal jährlich",
                "Die Staking-Rendite wird nie numerisch angegeben",
              ],
              correctAnswer: "In Jahresprozent (APR/APY)",
            },
            {
              prompt: "Wodurch entsteht die Staking-Rendite häufig teilweise?",
              options: [
                "Durch die Emission neuer Token",
                "Ausschließlich durch die Gebühren zentralisierter Börsen",
                "Durch staatliche Steuervergünstigungen",
              ],
              correctAnswer: "Durch die Emission neuer Token",
            },
          ],
        },
        {
          slug: "lending",
          title: "Lending",
          summary: "Dezentrale Kreditvergabe gegen die Besicherung mit Krypto-Assets.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Lending (Kreditvergabe) in DeFi erlaubt es einigen Nutzern, Assets über einen Smart Contract als Darlehen bereitzustellen und dafür Zinsen zu erhalten, während andere Darlehen gegen die Besicherung eigener Krypto-Assets aufnehmen können, üblicherweise mit Übersicherung (die Sicherheit ist mehr wert als der Darlehensbetrag).",
            },
            {
              type: "paragraph",
              text: "Fällt der Wert der Sicherheit unter eine bestimmte Schwelle im Verhältnis zum Darlehensbetrag, liquidiert das Protokoll die Sicherheit automatisch, um die Schuld zu decken. Das schützt die Kreditgeber, bedeutet aber, dass Kreditnehmer den Besicherungsgrad ihrer Position genau im Blick behalten müssen.",
            },
            {
              type: "list",
              items: [
                "DeFi-Kreditvergabe erfordert üblicherweise eine Übersicherung durch den Kreditnehmer",
                "Der Zins für Darlehen und Einlagen wird algorithmisch durch Angebot und Nachfrage im Protokoll bestimmt",
                "Fällt der Wert der Sicherheit unter eine Schwelle, liquidiert das Protokoll die Position automatisch",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was wird von einem Kreditnehmer in der DeFi-Kreditvergabe üblicherweise verlangt?",
              options: [
                "Eine Übersicherung, die den Darlehensbetrag übersteigt",
                "Eine Identitätsprüfung über eine Bank",
                "Eine Garantie einer zentralisierten Börse",
              ],
              correctAnswer: "Eine Übersicherung, die den Darlehensbetrag übersteigt",
            },
            {
              prompt: "Was geschieht, wenn der Wert der Sicherheit unter eine bestimmte Schwelle fällt?",
              options: [
                "Das Protokoll liquidiert die Sicherheit automatisch, um die Schuld zu decken",
                "Das Darlehen wird automatisch folgenlos annulliert",
                "Das Protokoll erhöht automatisch den Darlehensbetrag",
              ],
              correctAnswer: "Das Protokoll liquidiert die Sicherheit automatisch, um die Schuld zu decken",
            },
            {
              prompt: "Wer erhält Zinsen im System der DeFi-Kreditvergabe?",
              options: [
                "Nutzer, die über das Protokoll Assets als Darlehen bereitgestellt haben",
                "Nur die Entwickler des Protokolls",
                "In der DeFi-Kreditvergabe werden niemandem Zinsen ausgezahlt",
              ],
              correctAnswer: "Nutzer, die über das Protokoll Assets als Darlehen bereitgestellt haben",
            },
          ],
        },
        {
          slug: "yield-farming",
          title: "Yield Farming",
          summary: "Die Suche nach maximaler Rendite durch die Kombination verschiedener DeFi-Protokolle.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Yield Farming ist eine Strategie zur Suche nach maximaler Rendite durch die Platzierung von Assets in verschiedenen DeFi-Protokollen (Liquiditätspools, Kreditvergabe, Staking), oft mit der Verlagerung von Kapital zwischen Protokollen, sobald sich die angebotene Rendite ändert.",
            },
            {
              type: "paragraph",
              text: "Eine hohe angegebene Farming-Rendite ist häufig mit erhöhtem Risiko verbunden: Volatilität der Belohnungstoken selbst, das Smart-Contract-Risiko des Protokolls oder impermanenter Verlust (Impermanent Loss) in Liquiditätspools. Rendite und Risiko sind in DeFi üblicherweise eng miteinander verknüpft.",
            },
            {
              type: "list",
              items: [
                "Yield Farming setzt die aktive Verlagerung von Kapital zwischen Protokollen zugunsten der Rendite voraus",
                "Eine hohe angegebene Rendite geht üblicherweise mit erhöhtem Risiko einher",
                "Impermanenter Verlust (Impermanent Loss) ist ein spezifisches Risiko von Liquiditätspools",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was stellt Yield Farming dar?",
              options: [
                "Eine Strategie zur Suche nach maximaler Rendite durch die Platzierung von Assets in verschiedenen DeFi-Protokollen",
                "Eine Methode des Bitcoin-Minings mit spezialisierter Hardware",
                "Ein staatliches Förderprogramm für Kryptoprojekte",
              ],
              correctAnswer: "Eine Strategie zur Suche nach maximaler Rendite durch die Platzierung von Assets in verschiedenen DeFi-Protokollen",
            },
            {
              prompt: "Womit ist eine sehr hohe angegebene Farming-Rendite üblicherweise verbunden?",
              options: [
                "Mit erhöhtem Risiko (Token-Volatilität, Contract-Risiko, Impermanent Loss)",
                "Mit vollständiger Risikofreiheit",
                "Mit einer staatlichen Renditegarantie",
              ],
              correctAnswer: "Mit erhöhtem Risiko (Token-Volatilität, Contract-Risiko, Impermanent Loss)",
            },
            {
              prompt: "Was ist ein impermanenter Verlust (Impermanent Loss)?",
              options: [
                "Ein spezifisches Risiko von Liquiditätspools im Zusammenhang mit der Änderung des Preisverhältnisses der Assets",
                "Eine Netzwerkgebühr für die Übertragung von Token",
                "Ein garantierter Verlust bei jedem Staking",
              ],
              correctAnswer: "Ein spezifisches Risiko von Liquiditätspools im Zusammenhang mit der Änderung des Preisverhältnisses der Assets",
            },
          ],
        },
      ],
    },
    {
      title: "Memecoins und neue Projekte",
      lessons: [
        {
          slug: "launchpad",
          title: "Launchpad",
          summary: "Plattformen für den frühen Start und Verkauf von Token neuer Projekte.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Ein Launchpad ist eine Plattform, die neuen Projekten hilft, eine Erstverteilung von Token durchzuführen und anfängliche Liquidität zu gewinnen — üblicherweise durch frühen Zugang für Plattformteilnehmer im Gegenzug für die Erfüllung bestimmter Bedingungen (Staking des nativen Tokens, KYC usw.).",
            },
            {
              type: "paragraph",
              text: "Die Teilnahme über ein Launchpad beseitigt nicht die Risiken des Projekts — der Ruf der Plattform beeinflusst die Erstauswahl, garantiert aber nicht den Erfolg des Tokens nach dem Listing. Es ist wichtig, das Projekt selbst getrennt von der Plattform zu bewerten, über die der Start erfolgt.",
            },
            {
              type: "list",
              items: [
                "Ein Launchpad hilft Projekten bei der Erstverteilung von Token und der Gewinnung von Liquidität",
                "Der Zugang zum Start erfordert oft die Erfüllung von Plattformbedingungen (Staking, KYC)",
                "Der Ruf eines Launchpads garantiert nicht den Erfolg des Tokens nach dem Listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Wofür nutzen Projekte Launchpad-Plattformen?",
              options: [
                "Für die Erstverteilung von Token und die Gewinnung von Liquidität",
                "Ausschließlich für die technische Unterstützung der Blockchain",
                "Um vollständig auf die Gewinnung von Investoren zu verzichten",
              ],
              correctAnswer: "Für die Erstverteilung von Token und die Gewinnung von Liquidität",
            },
            {
              prompt: "Was wird von Teilnehmern oft für den Zugang zu einem Launchpad-Start verlangt?",
              options: [
                "Die Erfüllung von Plattformbedingungen, zum Beispiel das Staking des nativen Tokens",
                "Ein Diplom als Finanzanalyst",
                "Die Registrierung einer juristischen Person",
              ],
              correctAnswer: "Die Erfüllung von Plattformbedingungen, zum Beispiel das Staking des nativen Tokens",
            },
            {
              prompt: "Garantiert ein guter Ruf eines Launchpads den Erfolg des darüber gestarteten Tokens?",
              options: [
                "Nein, das Projekt muss trotzdem separat bewertet werden",
                "Ja, das ist eine hundertprozentige Erfolgsgarantie",
                "Ja, aber nur für Projekte auf Bitcoin",
              ],
              correctAnswer: "Nein, das Projekt muss trotzdem separat bewertet werden",
            },
          ],
        },
        {
          slug: "ico",
          title: "ICO",
          summary: "Das Initial Coin Offering als frühe Form der Kapitalbeschaffung in Kryptoprojekten.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "ICO (Initial Coin Offering) ist ein Modell der Kapitalbeschaffung, bei dem ein Projekt einen neuen Token direkt an Investoren verkauft, üblicherweise in einer frühen Entwicklungsphase, im Austausch gegen etablierte Kryptowährungen oder Fiatgeld. Das ist einer der ersten Crowdfunding-Mechanismen der Kryptoindustrie.",
            },
            {
              type: "paragraph",
              text: "Die ICO-Welle von 2017 zeigte sowohl das Potenzial des Modells zur schnellen Kapitalbeschaffung als auch seine Risiken: Das Fehlen von Regulierung führte zu einer großen Zahl von Projekten ohne reales Produkt. Das war ein Grund für die Entstehung strukturierterer Start-Formate, darunter Launchpads und IDOs.",
            },
            {
              type: "list",
              items: [
                "Ein ICO ist ein Modell zum Verkauf eines neuen Tokens direkt an Investoren in einer frühen Projektphase",
                "ICOs wurden zu einer der ersten Crowdfunding-Formen in der Kryptoindustrie",
                "Schwache ICO-Regulierung führte historisch zu einem hohen Anteil nicht lebensfähiger Projekte",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was stellt das ICO-Modell dar?",
              options: [
                "Den Verkauf eines neuen Tokens direkt an Investoren in einer frühen Projektphase",
                "Die staatliche Regulierung von Kryptowährungen",
                "Den Prozess des Bitcoin-Minings",
              ],
              correctAnswer: "Den Verkauf eines neuen Tokens direkt an Investoren in einer frühen Projektphase",
            },
            {
              prompt: "Welche historische Rolle spielten ICOs in der Kryptoindustrie?",
              options: [
                "Sie wurden zu einer der ersten Crowdfunding-Formen in Kryptowährungen",
                "Sie ersetzten den Börsenhandel vollständig",
                "Sie führten zur Abschaffung der Blockchain-Technologie",
              ],
              correctAnswer: "Sie wurden zu einer der ersten Crowdfunding-Formen in Kryptowährungen",
            },
            {
              prompt: "Wozu führte die schwache Regulierung der ICO-Welle von 2017?",
              options: [
                "Zu einem hohen Anteil von Projekten ohne reales Produkt",
                "Zum vollständigen Verschwinden der Risiken für Investoren",
                "Zum sofortigen Verbot aller Kryptowährungen in allen Ländern",
              ],
              correctAnswer: "Zu einem hohen Anteil von Projekten ohne reales Produkt",
            },
          ],
        },
        {
          slug: "ido",
          title: "IDO",
          summary: "Das Initial DEX Offering als transparentere Alternative zum ICO.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "IDO (Initial DEX Offering) ist die Platzierung eines Tokens direkt über eine dezentrale Börse oder eine Launchpad-Plattform, bei der die Liquidität üblicherweise sofort nach dem Verkauf dem Pool hinzugefügt wird und das Listing schneller und transparenter erfolgt als bei einem traditionellen ICO.",
            },
            {
              type: "paragraph",
              text: "Ein IDO senkt einen Teil der für ICOs typischen Risiken (zum Beispiel die Verzögerung zwischen Mittelaufnahme und Listing), beseitigt aber nicht die Risiken des Projekts selbst. Eine hohe Nachfrage nach IDOs führt oft unmittelbar nach dem Handelsstart zu scharfer Preisvolatilität.",
            },
            {
              type: "list",
              items: [
                "Ein IDO wird über eine dezentrale Börse oder eine Launchpad-Plattform durchgeführt",
                "Die Liquidität im Pool wird üblicherweise sofort nach dem Token-Verkauf hinzugefügt",
                "Eine hohe Nachfrage nach IDOs verursacht oft scharfe Preisvolatilität nach dem Listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worüber wird ein IDO üblicherweise durchgeführt?",
              options: [
                "Über eine dezentrale Börse oder eine Launchpad-Plattform",
                "Nur über eine traditionelle Bank",
                "Über eine zentrale Marktregulierungsbehörde",
              ],
              correctAnswer: "Über eine dezentrale Börse oder eine Launchpad-Plattform",
            },
            {
              prompt: "Worin unterscheidet sich ein IDO von einem klassischen ICO hinsichtlich des Listings?",
              options: [
                "Das Listing erfolgt schneller und transparenter dank der sofortigen Hinzufügung von Liquidität",
                "Ein IDO sieht niemals ein Listing des Tokens vor",
                "Es gibt keinen Unterschied zwischen ICO und IDO",
              ],
              correctAnswer: "Das Listing erfolgt schneller und transparenter dank der sofortigen Hinzufügung von Liquidität",
            },
            {
              prompt: "Was geschieht mit dem Token-Preis oft unmittelbar nach dem Handelsstart bei einem IDO?",
              options: [
                "Scharfe Volatilität aufgrund hoher Nachfrage",
                "Der Preis bleibt immer perfekt stabil",
                "Der Handel wird automatisch für einen Tag ausgesetzt",
              ],
              correctAnswer: "Scharfe Volatilität aufgrund hoher Nachfrage",
            },
          ],
        },
        {
          slug: "airdrop",
          title: "Airdrop",
          summary: "Die kostenlose Verteilung von Token an Nutzer und worauf man achten sollte.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Ein Airdrop ist die kostenlose Verteilung der Token eines Projekts an eine bestimmte Gruppe von Nutzern, oft als Belohnung für die frühe Nutzung des Protokolls, die Teilnahme an einem Testnetz oder die Ausführung festgelegter Aktionen. Das ist ein Weg, Aufmerksamkeit zu gewinnen und eine erste Community von Haltern aufzubauen.",
            },
            {
              type: "paragraph",
              text: "Die Erwartung eines potenziellen Airdrops zieht viele Nutzer an, schafft aber auch Risiken: Gefälschte Airdrops werden für Phishing und den Diebstahl von Mitteln über bösartige Smart Contracts genutzt. Ein legitimer Airdrop verlangt niemals das Senden von Mitteln oder privaten Schlüsseln, um Token zu erhalten.",
            },
            {
              type: "list",
              items: [
                "Ein Airdrop ist die kostenlose Verteilung von Token an eine bestimmte Gruppe von Nutzern",
                "Airdrops belohnen oft die frühe Nutzung eines Protokolls oder die Teilnahme an einem Testnetz",
                "Ein legitimer Airdrop verlangt niemals das Senden von Mitteln oder privaten Schlüsseln",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was stellt ein Token-Airdrop dar?",
              options: [
                "Die kostenlose Verteilung von Token an eine bestimmte Gruppe von Nutzern",
                "Ein kostenpflichtiges Abonnement für Projektnachrichten",
                "Eine obligatorische Steuer auf Krypto-Transaktionen",
              ],
              correctAnswer: "Die kostenlose Verteilung von Token an eine bestimmte Gruppe von Nutzern",
            },
            {
              prompt: "Wofür belohnen Projekte Nutzer oft über einen Airdrop?",
              options: [
                "Für die frühe Nutzung des Protokolls oder die Teilnahme an einem Testnetz",
                "Für negative Bewertungen des Projekts",
                "Für das Löschen des Wallets aus dem Netzwerk",
              ],
              correctAnswer: "Für die frühe Nutzung des Protokolls oder die Teilnahme an einem Testnetz",
            },
            {
              prompt: "Welches Zeichen sollte einen Nutzer bei einem potenziellen Airdrop misstrauisch machen?",
              options: [
                "Die Forderung, Mittel oder private Schlüssel zu senden, um Token zu erhalten",
                "Das Fehlen jeglicher Anforderungen an den Nutzer",
                "Die einfache Überprüfung der Wallet-Adresse in einer öffentlichen Liste",
              ],
              correctAnswer: "Die Forderung, Mittel oder private Schlüssel zu senden, um Token zu erhalten",
            },
          ],
        },
        {
          slug: "kak-iskat-proekty",
          title: "Wie man Projekte findet",
          summary: "Eine grundlegende Checkliste zur Erstbewertung eines neuen Kryptoprojekts vor einer Investition.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Die Suche nach vielversprechenden Projekten beginnt mit einer grundlegenden Prüfung: Wer ist das Team und hat es einen öffentlichen Leumund, gibt es ein funktionierendes Produkt oder nur eine Präsentation, wer sind die Investoren früher Runden, wie transparent und ausgewogen ist die Tokenomics.",
            },
            {
              type: "paragraph",
              text: "Es lohnt sich zudem, die Aktivität der Community und die Entwicklung in öffentlichen Repositories zu studieren, nicht nur Marketingaussagen in sozialen Netzwerken. Ein Projekt mit aktiver, wachsender Zielgruppe und regelmäßigen Code-Updates verdient üblicherweise mehr Vertrauen als ein Projekt mit einer einzigen auffälligen Ankündigung.",
            },
            {
              type: "list",
              items: [
                "Die Prüfung von Team, Produkt und Investoren ist der grundlegende erste Schritt der Projektbewertung",
                "Die Entwicklungsaktivität in offenen Repositories ist ein zuverlässigeres Signal als Marketing",
                "Eine ausgewogene und transparente Tokenomics senkt das Risiko künftigen Verkaufsdrucks",
              ],
            },
          ],
          questions: [
            {
              prompt: "Womit beginnt üblicherweise die grundlegende Prüfung eines neuen Kryptoprojekts?",
              options: [
                "Mit der Analyse von Team, Produkt und frühen Investoren",
                "Mit dem sofortigen Kauf des maximalen Token-Volumens",
                "Mit der Betrachtung nur des Projektlogos",
              ],
              correctAnswer: "Mit der Analyse von Team, Produkt und frühen Investoren",
            },
            {
              prompt: "Welches Signal gilt üblicherweise als zuverlässigerer Indikator für echten Projektfortschritt?",
              options: [
                "Die Entwicklungsaktivität in offenen Code-Repositories",
                "Die Anzahl vollmundiger Versprechen in Marketing-Posts",
                "Die Anzahl der Follower in sozialen Netzwerken ohne weitere Prüfung",
              ],
              correctAnswer: "Die Entwicklungsaktivität in offenen Code-Repositories",
            },
            {
              prompt: "Warum lohnt es sich, bei der Erstbewertung eines Projekts auf die Tokenomics zu achten?",
              options: [
                "Eine ausgewogene Tokenomics senkt das Risiko künftigen Verkaufsdrucks",
                "Die Tokenomics hat keinerlei Zusammenhang mit den Risiken eines Projekts",
                "Die Tokenomics ist nur für Projekte ohne Blockchain wichtig",
              ],
              correctAnswer: "Eine ausgewogene Tokenomics senkt das Risiko künftigen Verkaufsdrucks",
            },
          ],
        },
      ],
    },
    {
      title: "Handelsstrategien",
      lessons: [
        {
          slug: "scalping",
          title: "Scalping",
          summary: "Eine Strategie vieler kurzer Geschäfte mit kleinem Gewinn auf Minutencharts.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Scalping ist eine Strategie, bei der der Trader innerhalb kurzer Zeit (Sekunden bis Minuten) eine große Zahl von Geschäften eröffnet und versucht, aus jedem einzelnen einen kleinen Gewinn zu erzielen. Scalping erfordert hohe Konzentration, niedrige Gebühren und gute Liquidität des Instruments.",
            },
            {
              type: "paragraph",
              text: "Aufgrund der hohen Handelsfrequenz beeinflusst selbst eine kleine Börsengebühr die Gesamtrendite eines Scalpers erheblich, weshalb eine genaue Kostenberechnung wichtig ist. Scalping stellt zudem erhöhte Anforderungen an die Ausführungsgeschwindigkeit von Orders und die Stabilität der Verbindung.",
            },
            {
              type: "list",
              items: [
                "Scalping setzt viele kurze Geschäfte mit kleinem Gewinnziel voraus",
                "Börsengebühren beeinflussen die Gesamtrendite aufgrund der hohen Handelsfrequenz erheblich",
                "Die Strategie erfordert hohe Liquidität des Instruments und stabile Orderausführung",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist das zentrale Merkmal von Scalping als Strategie?",
              options: [
                "Eine große Anzahl kurzer Geschäfte mit jeweils kleinem Gewinn",
                "Das Halten einer Position über mehrere Monate",
                "Der vollständige Verzicht auf Chartanalyse",
              ],
              correctAnswer: "Eine große Anzahl kurzer Geschäfte mit jeweils kleinem Gewinn",
            },
            {
              prompt: "Warum sind Börsengebühren für einen Scalper besonders wichtig?",
              options: [
                "Wegen der hohen Handelsfrequenz beeinflussen sie die Gesamtrendite erheblich",
                "Scalping ist an jeder Börse vollständig gebührenfrei",
                "Gebühren sind nur beim Halten einer Position über mehr als einen Monat wichtig",
              ],
              correctAnswer: "Wegen der hohen Handelsfrequenz beeinflussen sie die Gesamtrendite erheblich",
            },
            {
              prompt: "Was ist bei dem im Scalping verwendeten Instrument besonders wichtig?",
              options: [
                "Hohe Liquidität und schnelle Orderausführung",
                "Möglichst niedrige Liquidität",
                "Das Fehlen eines Echtzeit-Preischarts",
              ],
              correctAnswer: "Hohe Liquidität und schnelle Orderausführung",
            },
          ],
        },
        {
          slug: "day-trading",
          title: "Day Trading",
          summary: "Intraday-Handel mit Schließung aller Positionen vor Ende der Handelssitzung.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Day Trading (Tageshandel) ist eine Strategie, bei der alle Geschäfte innerhalb eines Tages eröffnet und geschlossen werden, ohne Positionen auf den nächsten Tag zu übertragen. Das beseitigt das Risiko nächtlicher Kurslücken (Gaps) und erlaubt dem Trader, die Marktexposition am Ende der Sitzung vollständig zu kontrollieren.",
            },
            {
              type: "paragraph",
              text: "Day Trading erfordert im Vergleich zu längerfristigen Ansätzen mehr Zeit für Analyse und Marktbeobachtung während des Tages, bietet dabei aber im Vergleich zum Scalping mehr Einstiegsmöglichkeiten durch weiter gesteckte Gewinnziele.",
            },
            {
              type: "list",
              items: [
                "Alle Positionen im Day Trading werden vor Ende des Handelstags geschlossen",
                "Der Verzicht auf Positionsübertragung beseitigt das Risiko nächtlicher Kurslücken",
                "Day Trading erfordert erhebliche Zeit für aktive Marktbeobachtung",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist die zentrale Regel des Day Tradings?",
              options: [
                "Alle Positionen werden innerhalb desselben Handelstags geschlossen",
                "Positionen werden zwingend mehrere Wochen gehalten",
                "Geschäfte werden nur einmal im Monat eröffnet",
              ],
              correctAnswer: "Alle Positionen werden innerhalb desselben Handelstags geschlossen",
            },
            {
              prompt: "Welches Risiko beseitigt der Verzicht auf die Übertragung von Positionen auf den nächsten Tag?",
              options: [
                "Das Risiko nächtlicher Kurslücken",
                "Das Risiko der Börsengebühr",
                "Das Risiko einer Namensänderung des Tokens",
              ],
              correctAnswer: "Das Risiko nächtlicher Kurslücken",
            },
            {
              prompt: "Worin unterscheidet sich Day Trading vom Scalping hinsichtlich der Gewinnziele?",
              options: [
                "Day Trading hat üblicherweise weiter gesteckte Gewinnziele pro Geschäft",
                "Die Gewinnziele beider Strategien sind absolut identisch",
                "Day Trading sieht überhaupt keine Gewinnziele vor",
              ],
              correctAnswer: "Day Trading hat üblicherweise weiter gesteckte Gewinnziele pro Geschäft",
            },
          ],
        },
        {
          slug: "swing-trading",
          title: "Swing Trading",
          summary: "Das Halten einer Position von mehreren Tagen bis mehreren Wochen bei mittelfristigen Bewegungen.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Swing Trading ist eine Strategie, bei der Positionen mehrere Tage bis mehrere Wochen gehalten werden, um eine mittelfristige Preisbewegung („Swing“) zu erfassen. Das erfordert im Vergleich zu Day Trading und Scalping weniger ständige Marktbeobachtung.",
            },
            {
              type: "paragraph",
              text: "Swing-Trader stützen sich häufiger auf höhere Zeitrahmen (H4, D1) zur Bestimmung von Trend und Einstiegspunkten, wobei das Geschäft zwangsläufig nächtlichen und Wochenend-Kurslücken ausgesetzt ist — Stop-Loss und Positionsgröße müssen das berücksichtigen.",
            },
            {
              type: "list",
              items: [
                "Swing Trading setzt das Halten einer Position von mehreren Tagen bis mehreren Wochen voraus",
                "Die Strategie erfordert weniger ständige Marktbeobachtung als Day Trading oder Scalping",
                "Positionen im Swing Trading sind dem Risiko nächtlicher und Wochenend-Kurslücken ausgesetzt",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist der typische Haltezeitraum einer Position im Swing Trading?",
              options: [
                "Von mehreren Tagen bis mehreren Wochen",
                "Von einigen Sekunden bis einigen Minuten",
                "Ausnahmslos mehrere Jahre",
              ],
              correctAnswer: "Von mehreren Tagen bis mehreren Wochen",
            },
            {
              prompt: "Welche Zeitrahmen nutzen Swing-Trader am häufigsten für die Analyse?",
              options: [
                "Höhere Zeitrahmen, zum Beispiel H4 und D1",
                "Ausschließlich den Tick-Chart",
                "Nur den Minutenchart",
              ],
              correctAnswer: "Höhere Zeitrahmen, zum Beispiel H4 und D1",
            },
            {
              prompt: "Welchem spezifischen Risiko sind Positionen im Swing Trading aufgrund der Haltedauer ausgesetzt?",
              options: [
                "Dem Risiko nächtlicher und Wochenend-Kurslücken",
                "Dem Risiko sofortiger Orderausführung",
                "Dem Risiko fehlender jeglicher Volatilität",
              ],
              correctAnswer: "Dem Risiko nächtlicher und Wochenend-Kurslücken",
            },
          ],
        },
        {
          slug: "position-trading",
          title: "Position Trading",
          summary: "Das langfristige Halten von Positionen auf Basis großer Trends und fundamentaler Faktoren.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Position Trading ist eine Strategie, bei der Positionen von mehreren Wochen bis Monaten oder länger gehalten werden, ausgerichtet auf das Erfassen großer, langfristiger Trends. Positionstrader schenken kurzfristigem Preisrauschen weniger Aufmerksamkeit und dem makroökonomischen und fundamentalen Kontext mehr.",
            },
            {
              type: "paragraph",
              text: "Aufgrund des langen Zeithorizonts erfordert Position Trading eine höhere Toleranz gegenüber zwischenzeitlichen Rückgängen innerhalb des Gesamttrends und nutzt üblicherweise weiter gesetzte Stops im Verhältnis zum Kapital pro Geschäft, was durch eine geringere Anzahl gleichzeitiger Positionen ausgeglichen wird.",
            },
            {
              type: "list",
              items: [
                "Position Trading ist auf das Halten von Positionen von mehreren Wochen bis Monaten ausgerichtet",
                "Die Strategie stützt sich stärker auf makroökonomischen und fundamentalen Kontext als auf kurzfristiges Rauschen",
                "Positionstrader nutzen üblicherweise weitere Stops und eine geringere Zahl gleichzeitiger Positionen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worauf ist Position Trading in erster Linie ausgerichtet?",
              options: [
                "Auf das Erfassen großer, langfristiger Trends",
                "Auf minutengenaue Preisschwankungen",
                "Auf Echtzeit-Arbitrage zwischen Börsen",
              ],
              correctAnswer: "Auf das Erfassen großer, langfristiger Trends",
            },
            {
              prompt: "Worauf muss sich ein Positionstrader aufgrund des langen Haltezeitraums einstellen?",
              options: [
                "Auf zwischenzeitliche Rückgänge innerhalb des Gesamttrends",
                "Auf das vollständige Fehlen jeglicher Preisschwankungen",
                "Auf die zwingende Schließung des Geschäfts am Ende jedes Tages",
              ],
              correctAnswer: "Auf zwischenzeitliche Rückgänge innerhalb des Gesamttrends",
            },
            {
              prompt: "Welche Art der Analyse spielt im Position Trading eine besonders wichtige Rolle?",
              options: [
                "Makroökonomische und fundamentale Analyse",
                "Ausschließlich die Analyse des Orderbuchs der letzten Minute",
                "Analyse ist überhaupt nicht erforderlich",
              ],
              correctAnswer: "Makroökonomische und fundamentale Analyse",
            },
          ],
        },
        {
          slug: "liquidity-sweep-strategiya",
          title: "Liquidity Sweep",
          summary: "Eine Handelsstrategie des Einstiegs nach der Liquiditätsabschöpfung hinter einem Schlüssellevel.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Als Handelsstrategie basiert der Liquidity Sweep auf der Idee, dass der Preis ein wichtiges Level (Hoch, Tief, eine Zone gehäufter Stop-Losses) oft falsch durchbricht, dort Liquidität einsammelt und sich dann in die entgegengesetzte Richtung umkehrt — genau dieser Umkehrpunkt wird als Einstiegssignal genutzt.",
            },
            {
              type: "paragraph",
              text: "Der entscheidende Unterschied zu einem einfachen Levelbruch: Der Trader wartet nicht auf eine Fortsetzung der Bewegung hinter dem Level, sondern gerade auf die schnelle Rückkehr des Preises in die Spanne, was bestätigt, dass der Durchbruch durch Liquiditätsabschöpfung und nicht durch echte Trendstärke verursacht wurde.",
            },
            {
              type: "list",
              items: [
                "Die Strategie basiert auf einem Fehlausbruch eines Levels mit anschließend schneller Preisumkehr",
                "Der Einstieg erfolgt nach Bestätigung der Rückkehr des Preises in die Spanne, nicht im Moment des Durchbruchs selbst",
                "Die Strategie erfordert Geduld und Bestätigung, um einen Sweep von einem echten Durchbruch zu unterscheiden",
              ],
            },
          ],
          questions: [
            {
              prompt: "Auf welcher Idee basiert die Liquidity-Sweep-Strategie?",
              options: [
                "Auf einem Fehlausbruch eines Levels mit Liquiditätsabschöpfung und anschließender Preisumkehr",
                "Auf dem dauerhaften Halten einer Position ohne Levelanalyse",
                "Auf dem Ignorieren jeglicher Unterstützungs- und Widerstandslevels",
              ],
              correctAnswer: "Auf einem Fehlausbruch eines Levels mit Liquiditätsabschöpfung und anschließender Preisumkehr",
            },
            {
              prompt: "Was bestätigt, dass ein Levelbruch tatsächlich ein Sweep und kein echter Durchbruch war?",
              options: [
                "Die schnelle Rückkehr des Preises in die Spanne nach dem Durchbruch",
                "Die Fortsetzung der Preisbewegung weit über das Level hinaus",
                "Das vollständige Fehlen von Volumen beim Durchbruch",
              ],
              correctAnswer: "Die schnelle Rückkehr des Preises in die Spanne nach dem Durchbruch",
            },
            {
              prompt: "Wann eröffnet ein Trader, der diese Strategie nutzt, üblicherweise ein Geschäft?",
              options: [
                "Nach Bestätigung der Rückkehr des Preises in die Spanne",
                "Unmittelbar bei Berührung des Levels, ohne auf eine Bestätigung zu warten",
                "Erst nach dem Schluss der Handelswoche",
              ],
              correctAnswer: "Nach Bestätigung der Rückkehr des Preises in die Spanne",
            },
          ],
        },
        {
          slug: "breakout",
          title: "Breakout",
          summary: "Eine Einstiegsstrategie in Richtung eines bestätigten Durchbruchs eines Schlüssellevels.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Die Breakout-Strategie (Ausbruchsstrategie) sieht den Einstieg in Bewegungsrichtung vor, wenn der Preis ein bedeutendes Unterstützungs- oder Widerstandslevel oder die Grenze einer Konsolidierung mit Bestätigung überwindet — üblicherweise gestiegenes Volumen und der Schluss einer Kerze hinter dem Level, nicht nur eine bloße Berührung.",
            },
            {
              type: "paragraph",
              text: "Das Hauptrisiko der Ausbruchsstrategie sind Fehlausbrüche, bei denen der Preis kurzzeitig über das Level hinausgeht und sofort zurückkehrt. Deshalb warten Trader oft auf einen Retest des durchbrochenen Levels (wenn es von Widerstand zu Unterstützung wird oder umgekehrt), um einen zuverlässigeren Einstieg zu erzielen.",
            },
            {
              type: "list",
              items: [
                "Die Ausbruchsstrategie sieht den Einstieg in Richtung eines bestätigten Levelausbruchs vor",
                "Als Bestätigung des Ausbruchs dienen üblicherweise gestiegenes Volumen und der Kerzenschluss hinter dem Level",
                "Das Abwarten eines Retests des durchbrochenen Levels senkt das Risiko eines Einstiegs bei einem Fehlausbruch",
              ],
            },
          ],
          questions: [
            {
              prompt: "Worauf basiert die Ausbruchsstrategie (Breakout)?",
              options: [
                "Auf dem Einstieg in Richtung eines bestätigten Ausbruchs aus einem bedeutenden Level",
                "Auf dem Einstieg ausschließlich gegen die Ausbruchsrichtung",
                "Auf dem vollständigen Ignorieren von Unterstützungs- und Widerstandslevels",
              ],
              correctAnswer: "Auf dem Einstieg in Richtung eines bestätigten Ausbruchs aus einem bedeutenden Level",
            },
            {
              prompt: "Was dient üblicherweise als Bestätigung eines echten und nicht falschen Ausbruchs?",
              options: [
                "Gestiegenes Volumen und der Kerzenschluss außerhalb des Levels",
                "Die bloße Berührung des Levels durch den Preis ohne Kerzenschluss",
                "Ein Rückgang des Volumens auf null",
              ],
              correctAnswer: "Gestiegenes Volumen und der Kerzenschluss außerhalb des Levels",
            },
            {
              prompt: "Warum warten Trader manchmal vor dem Einstieg auf einen Retest des durchbrochenen Levels?",
              options: [
                "Um das Risiko eines Einstiegs bei einem Fehlausbruch zu senken",
                "Der Retest hat für den Einstieg keinerlei Bedeutung",
                "Um die Handelsgebühr garantiert zu erhöhen",
              ],
              correctAnswer: "Um das Risiko eines Einstiegs bei einem Fehlausbruch zu senken",
            },
          ],
        },
        {
          slug: "mean-reversion",
          title: "Mean Reversion",
          summary: "Eine Strategie der Rückkehr zum Mittelwert nach einer starken Preisabweichung.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Mean Reversion (Rückkehr zum Mittelwert) basiert auf der Idee, dass ein Preis, der sich stark von seinem Mittelwert entfernt hat (zum Beispiel vom gleitenden Durchschnitt oder VWAP), im Laufe der Zeit dazu neigt, zu ihm zurückzukehren. Die Strategie funktioniert eher in einem Seitwärtsmarkt als in einem starken Trend.",
            },
            {
              type: "paragraph",
              text: "Trader, die diese Strategie nutzen, kombinieren oft Oszillatoren wie den RSI mit Abweichungslevels vom Mittelwert (zum Beispiel Bollinger Bands) und eröffnen ein Geschäft gegen die Richtung einer starken kurzfristigen Bewegung in Erwartung einer Korrektur zum Mittelwert.",
            },
            {
              type: "list",
              items: [
                "Die Strategie geht von der Rückkehr des Preises zum Mittelwert nach einer starken Abweichung aus",
                "Mean Reversion funktioniert üblicherweise in einem Seitwärtsmarkt besser als in einem starken gerichteten Trend",
                "Oszillatoren und Abweichungsbänder werden oft gemeinsam zur Suche nach Einstiegspunkten genutzt",
              ],
            },
          ],
          questions: [
            {
              prompt: "Auf welcher Idee basiert die Mean-Reversion-Strategie?",
              options: [
                "Ein Preis, der sich stark vom Mittelwert entfernt hat, neigt dazu, zu ihm zurückzukehren",
                "Der Preis kehrt niemals zum Mittelwert zurück",
                "Der Preis setzt seine Bewegung immer unendlich in dieselbe Richtung fort",
              ],
              correctAnswer: "Ein Preis, der sich stark vom Mittelwert entfernt hat, neigt dazu, zu ihm zurückzukehren",
            },
            {
              prompt: "In welchem Markttyp funktioniert die Mean-Reversion-Strategie üblicherweise besser?",
              options: [
                "In einem Seitwärtsmarkt",
                "Ausschließlich in Phasen der Hyperinflation",
                "In einem Markt ohne einen einzigen Teilnehmer außer dem Trader selbst",
              ],
              correctAnswer: "In einem Seitwärtsmarkt",
            },
            {
              prompt: "Welche Werkzeuge kombinieren Trader oft zur Suche von Einstiegspunkten bei Mean Reversion?",
              options: [
                "Oszillatoren wie den RSI und Abweichungsbänder vom Mittelwert",
                "Ausschließlich Daten zu Börsengebühren",
                "Nur Nachrichten aus sozialen Netzwerken",
              ],
              correctAnswer: "Oszillatoren wie den RSI und Abweichungsbänder vom Mittelwert",
            },
          ],
        },
      ],
    },
    {
      title: "Abschlussprüfung",
      lessons: [
        {
          slug: "polnaya-torgovlya-na-simulyatore",
          title: "Vollständiger Handel im Simulator",
          summary: "Abschließende Praxis: Anwendung aller erlernten Konzepte auf dem virtuellen Konto.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Diese Lektion fasst den gesamten Kursstoff zusammen — von grundlegenden Marktbegriffen bis zu Risikomanagement, Psychologie, Indikatoren und Handelsstrategien. Aufgabe ist es, eine Serie von Geschäften auf dem virtuellen Konto durchzuführen und dabei die Regeln des Risikomanagements sowie einen im Voraus festgelegten Plan für jedes Geschäft anzuwenden.",
            },
            {
              type: "paragraph",
              text: "Ziel dieser Phase ist nicht ein einmaliger großer Gewinn, sondern der Nachweis eines konsequenten, disziplinierten Vorgehens: korrekte Berechnung der Positionsgröße, begründeter Stop-Loss und Take Profit sowie das Führen von Aufzeichnungen zu jedem Geschäft, so wie es professionelle Trader tun.",
            },
            {
              type: "list",
              items: [
                "Jedes Geschäft sollte von einem im Voraus festgelegten Einstiegs- und Ausstiegsplan begleitet werden",
                "Die Positionsgröße wird anhand des Risikos berechnet, nicht anhand des gewünschten Gewinns",
                "Das Ergebnis eines einzelnen Geschäfts ist weniger wichtig als die konsequente Einhaltung der Regeln",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was ist das Hauptziel der abschließenden Praxis auf dem virtuellen Konto?",
              options: [
                "Der Nachweis eines konsequenten und disziplinierten Handelsansatzes",
                "Das Erzielen des maximal möglichen Gewinns um jeden Preis",
                "Die Durchführung möglichst vieler Geschäfte ohne Analyse",
              ],
              correctAnswer: "Der Nachweis eines konsequenten und disziplinierten Handelsansatzes",
            },
            {
              prompt: "Was sollte der Eröffnung jedes Geschäfts in dieser Phase vorausgehen?",
              options: [
                "Ein im Voraus festgelegter Einstiegs- und Ausstiegsplan",
                "Eine zufällige Asset-Auswahl ohne Analyse",
                "Die maximale Erhöhung des Hebels",
              ],
              correctAnswer: "Ein im Voraus festgelegter Einstiegs- und Ausstiegsplan",
            },
            {
              prompt: "Wodurch wird die Positionsgröße gemäß dem behandelten Kursstoff bestimmt?",
              options: [
                "Durch das zulässige Risiko pro Geschäft, nicht durch den gewünschten Gewinn",
                "Ausschließlich durch die Intuition des Traders",
                "Durch den Dollarkurs zum Zeitpunkt des Geschäfts",
              ],
              correctAnswer: "Durch das zulässige Risiko pro Geschäft, nicht durch den gewünschten Gewinn",
            },
          ],
        },
        {
          slug: "proyti-vse-zadaniya",
          title: "Alle Aufgaben müssen abgeschlossen werden",
          summary: "Abschließende Überprüfung: warum es für den Kursabschluss wichtig ist, jedes Modul abzuschließen.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Jedes Modul des Kurses baut auf dem vorherigen auf: Das Verständnis von Risikomanagement stützt sich auf das Verständnis von Volatilität und Marktstruktur, die Psychologie von Geschäften auf das Verständnis der Funktionsweise von Risiko, und Strategien auf die Beherrschung von Indikatoren und Volumenanalyse.",
            },
            {
              type: "paragraph",
              text: "Das Auslassen einzelner Module schafft Lücken, die sich später zeigen — zum Beispiel bei der Nutzung einer Strategie ohne Verständnis dafür, wie die passende Positionsgröße richtig berechnet wird. Deshalb müssen für den Kursabschluss alle Aufgaben absolviert werden, nicht nur einzelne Module nach Wahl.",
            },
            {
              type: "list",
              items: [
                "Die Kursmodule sind aufeinander aufbauend und stützen sich gegenseitig",
                "Das Auslassen eines Moduls schafft Lücken, die sich in späteren Lernphasen zeigen",
                "Der vollständige Kursabschluss erfordert die Erledigung aller Aufgaben, nicht nur ausgewählter Module",
              ],
            },
          ],
          questions: [
            {
              prompt: "Warum wird empfohlen, die Kursmodule der Reihe nach zu durcharbeiten?",
              options: [
                "Jedes folgende Modul baut auf dem Wissen der vorherigen auf",
                "Die Reihenfolge der Module spielt überhaupt keine Rolle",
                "Das ist ausschließlich für den Erhalt von XP erforderlich",
              ],
              correctAnswer: "Jedes folgende Modul baut auf dem Wissen der vorherigen auf",
            },
            {
              prompt: "Wozu kann das Auslassen einzelner Kursmodule führen?",
              options: [
                "Zu Wissenslücken, die sich in späteren Lernphasen zeigen",
                "Das hat keinerlei Einfluss auf das weitere Lernen",
                "Zum automatischen Erhalt des Zertifikats ohne Lernen",
              ],
              correctAnswer: "Zu Wissenslücken, die sich in späteren Lernphasen zeigen",
            },
            {
              prompt: "Was ist für den vollständigen Kursabschluss erforderlich?",
              options: [
                "Die Erledigung aller Aufgaben, nicht nur ausgewählter Module",
                "Die Erledigung eines beliebigen einzelnen Moduls nach Wahl",
                "Es genügt, einfach die erste Lektion des Kurses zu öffnen",
              ],
              correctAnswer: "Die Erledigung aller Aufgaben, nicht nur ausgewählter Module",
            },
          ],
        },
        {
          slug: "poluchenie-sertifikata",
          title: "Erhalt des Zertifikats",
          summary: "Was der Abschluss des Kurses „Der Weg des Traders“ bedeutet und wie man das erworbene Wissen weiter nutzt.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Der Abschluss aller Module des Kurses „Der Weg des Traders“ bedeutet, dass der vollständige Weg von grundlegenden Marktbegriffen bis zu fortgeschrittenen Themen zurückgelegt wurde: Indikatoren, Volumenanalyse, On-Chain-Daten, DeFi, Tokenomics und der Aufbau einer eigenen, anhand historischer Daten überprüften Handelsstrategie.",
            },
            {
              type: "paragraph",
              text: "Der Kursabschluss selbst ersetzt keine praktische Erfahrung: reale Marktbedingungen, echte Psychologie unter Druck und die Arbeit mit echtem Kapital erfordern weitere Praxis. Das Wissen aus dem Kurs ist das Fundament, auf dem die weitere Entwicklung als Trader aufbaut.",
            },
            {
              type: "list",
              items: [
                "Der Kurs deckt den Weg von grundlegenden Marktbegriffen bis zu fortgeschrittenen Analyse- und Strategiethemen ab",
                "Der Kursabschluss ist ein Fundament, kein Ersatz für reale Handelserfahrung",
                "Die weitere Entwicklung erfordert Praxis, das Führen eines Tagebuchs und die ständige Analyse eigener Entscheidungen",
              ],
            },
          ],
          questions: [
            {
              prompt: "Was deckt der vollständige Abschluss des Kurses „Der Weg des Traders“ ab?",
              options: [
                "Den Weg von grundlegenden Marktbegriffen bis zu fortgeschrittenen Analyse- und Strategiethemen",
                "Nur die Grundlagen der Wallet-Nutzung",
                "Ausschließlich rechtliche Aspekte von Kryptowährungen",
              ],
              correctAnswer: "Den Weg von grundlegenden Marktbegriffen bis zu fortgeschrittenen Analyse- und Strategiethemen",
            },
            {
              prompt: "Ersetzt der Kursabschluss reale Handelserfahrung?",
              options: [
                "Nein, der Kurs ist ein Fundament, und reale Erfahrung erfordert weitere Praxis",
                "Ja, der Kurs ersetzt jegliche Praxis vollständig",
                "Ja, aber nur für Geschäfte mit einem Hebel über 10x",
              ],
              correctAnswer: "Nein, der Kurs ist ein Fundament, und reale Erfahrung erfordert weitere Praxis",
            },
            {
              prompt: "Was wird empfohlen, nach Abschluss des Kurses fortzusetzen?",
              options: [
                "Ein Handelstagebuch zu führen und die eigenen Entscheidungen ständig zu analysieren",
                "Die Analyse des eigenen Handels vollständig einzustellen",
                "Sofort auf Risikomanagement zu verzichten",
              ],
              correctAnswer: "Ein Handelstagebuch zu führen und die eigenen Entscheidungen ständig zu analysieren",
            },
          ],
        },
      ],
    },
  ],
};
