import type { CourseSeed } from "./types";

export const COURSE_ES: CourseSeed = {
  slug: "put-treydera",
  title: "El camino del trader",
  description:
    "Un recorrido estructurado desde los conceptos básicos del mercado hasta la práctica en una cuenta virtual.",
  modules: [
    {
      title: "Fundamentos del trading",
      lessons: [
        {
          slug: "chto-takoe-treyding",
          title: "Qué es el trading",
          summary: "La diferencia entre invertir y hacer trading, y los principales participantes del mercado.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "El trading consiste en comprar y vender activos financieros (criptomonedas, acciones, divisas) con el objetivo de obtener ganancias a partir del cambio de su precio. A diferencia de la inversión clásica, donde el activo se mantiene durante años apostando a su crecimiento, el trader gana con el propio movimiento del precio, tanto al alza como a la baja.",
            },
            {
              type: "paragraph",
              text: "En el mercado actúan simultáneamente distintos participantes: traders minoristas (particulares), inversores institucionales (fondos, bancos), market makers (que aportan liquidez) y sistemas algorítmicos. Entender quién realiza las operaciones y por qué ayuda a explicar por qué el precio se mueve de determinada manera.",
            },
            {
              type: "list",
              items: [
                "El inversor suele mantener el activo durante mucho tiempo y se guía por su valor fundamental",
                "El trader abre y cierra operaciones con más frecuencia, desde minutos hasta semanas",
                "El trader también puede ganar con la caída del precio mediante posiciones cortas (short)",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se diferencia fundamentalmente el trading de la inversión a largo plazo?",
              options: [
                "El trading solo está disponible para los bancos",
                "El trading implica operaciones frecuentes en horizontes cortos",
                "El trading no implica riesgo",
              ],
              correctAnswer: "El trading implica operaciones frecuentes en horizontes cortos",
            },
            {
              prompt: "A diferencia del inversor clásico, ¿quién puede ganar también con la caída del precio de un activo?",
              options: ["Solo los market makers", "El trader que abre posiciones cortas", "Solo los bancos"],
              correctAnswer: "El trader que abre posiciones cortas",
            },
            {
              prompt: "¿Qué aportan los market makers al mercado?",
              options: ["Un tipo de cambio fijo del activo", "Regulación estatal", "Liquidez para las operaciones de otros participantes"],
              correctAnswer: "Liquidez para las operaciones de otros participantes",
            },
          ],
        },
        {
          slug: "vidy-rynkov",
          title: "Tipos de mercados",
          summary: "Cripto, forex, acciones y mercados de materias primas: en qué se diferencian.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "El mercado cripto opera las 24 horas, sin días de descanso, y es descentralizado: no existe una única bolsa que fije el precio. El Forex es el mayor mercado de pares de divisas del mundo, con una liquidez enorme, pero con horarios de negociación limitados los fines de semana. El mercado de acciones opera según el horario de bolsas concretas y está fuertemente regulado. Los mercados de materias primas (petróleo, oro) reflejan el equilibrio entre la oferta y la demanda reales de esas materias.",
            },
            {
              type: "list",
              items: [
                "Cripto: 24/7, alta volatilidad, bajo umbral de entrada",
                "Forex: enorme liquidez, opera 5 días a la semana",
                "Acciones: vinculadas al negocio de la empresa, horario de la bolsa",
                "Materias primas (commodities): dependen de la oferta/demanda real y de la geopolítica",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se diferencia el mercado cripto del mercado de acciones?",
              options: ["Está totalmente regulado por el Estado", "Solo se negocia en días laborables durante el día", "Opera 24/7 sin días de descanso"],
              correctAnswer: "Opera 24/7 sin días de descanso",
            },
            {
              prompt: "¿Qué se negocia en el mercado Forex?",
              options: ["Acciones de empresas", "Materias primas", "Pares de divisas"],
              correctAnswer: "Pares de divisas",
            },
            {
              prompt: "¿Cuál de los siguientes mercados suele destacar por la mayor volatilidad?",
              options: ["El mercado de bonos del Estado", "El de criptomonedas", "Los pares de divisas del G7"],
              correctAnswer: "El de criptomonedas",
            },
          ],
        },
        {
          slug: "kak-chitat-grafik",
          title: "Cómo leer un gráfico",
          summary: "Ejes, marcos temporales, precio de apertura/cierre.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "En el gráfico de precios, el eje vertical representa el precio del activo y el eje horizontal, el tiempo. Cada punto de datos (vela o barra) contiene el precio de apertura, de cierre, el máximo y el mínimo del período elegido; esto es lo que se denomina marco temporal (timeframe).",
            },
            {
              type: "paragraph",
              text: "El timeframe es el intervalo de tiempo que representa un elemento del gráfico: un minuto, una hora, un día, una semana. La elección del timeframe depende del estilo de trading: los scalpers miran los gráficos de minutos, mientras que los swing traders observan los de horas y días.",
            },
            {
              type: "list",
              items: [
                "Gráfico de líneas: el más simple, muestra solo el precio de cierre",
                "Gráfico de velas: muestra open/high/low/close, el más popular entre los traders",
                "Gráfico de barras: similar al de velas, pero visualmente menos claro",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué se representa en el eje vertical del gráfico de precios?",
              options: ["El precio del activo", "El número de traders", "El volumen de negociación"],
              correctAnswer: "El precio del activo",
            },
            {
              prompt: "¿Qué es un timeframe?",
              options: [
                "El nombre de la bolsa",
                "El período de tiempo que representa un elemento del gráfico",
                "Un tipo de orden",
              ],
              correctAnswer: "El período de tiempo que representa un elemento del gráfico",
            },
            {
              prompt: "¿Por qué los traders analizan varios timeframes al mismo tiempo?",
              options: [
                "Para ver el panorama general de la tendencia y el punto exacto de entrada al mismo tiempo",
                "Para evitar las comisiones de la bolsa",
                "No tiene ningún sentido práctico",
              ],
              correctAnswer: "Para ver el panorama general de la tendencia y el punto exacto de entrada al mismo tiempo",
            },
          ],
        },
        {
          slug: "svechnoy-analiz",
          title: "Análisis de velas",
          summary: "Anatomía de la vela japonesa y patrones de velas básicos.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "La vela japonesa es la principal herramienta de visualización del precio para los traders. Está compuesta por un cuerpo (el rango entre el precio de apertura y de cierre) y sombras/mechas arriba y abajo (el máximo y el mínimo del precio durante el período). Una vela verde (alcista) significa que el cierre está por encima de la apertura, mientras que una vela roja (bajista) indica lo contrario.",
            },
            {
              type: "paragraph",
              text: "Una sola vela ya cuenta la historia de la lucha entre compradores y vendedores: un cuerpo largo indica un movimiento decidido, mientras que sombras largas señalan que el precio fue \"rechazado\" activamente hacia el lado contrario.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué muestra el cuerpo de la vela?",
              options: [
                "El número de participantes del mercado",
                "El rango entre el precio de apertura y de cierre",
                "El volumen máximo de negociación",
              ],
              correctAnswer: "El rango entre el precio de apertura y de cierre",
            },
            {
              prompt: "¿Qué muestran las sombras (mechas) de la vela?",
              options: [
                "El número de operaciones del día",
                "El rango de precio fuera del cuerpo: el máximo y el mínimo del período",
                "El volumen promedio de negociación",
              ],
              correctAnswer: "El rango de precio fuera del cuerpo: el máximo y el mínimo del período",
            },
            {
              prompt: "¿Qué puede indicar una sombra inferior larga tras una caída del precio?",
              options: [
                "El volumen de negociación fue nulo",
                "Los compradores recompraron activamente el precio desde abajo: es posible un giro",
                "El mercado seguramente continuará cayendo",
              ],
              correctAnswer: "Los compradores recompraron activamente el precio desde abajo: es posible un giro",
            },
          ],
        },
        {
          slug: "podderzhka-i-soprotivlenie",
          title: "Soporte y resistencia",
          summary: "Cómo encontrar niveles clave en el gráfico.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "El nivel de soporte es el precio en el que, en el pasado, los compradores detuvieron reiteradamente la caída. El nivel de resistencia, por el contrario, es el precio donde los vendedores frenaron el ascenso. Estos niveles forman la \"memoria\" del mercado: el precio suele reaccionar en ellos repetidamente.",
            },
            {
              type: "paragraph",
              text: "Un principio importante: tras una ruptura, el nivel suele cambiar de rol; una antigua resistencia se convierte en soporte, y viceversa. Los niveles fiables no se trazan con un solo punto, sino con varios toques del precio.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué es un nivel de soporte?",
              options: [
                "La comisión por operación",
                "El precio donde los compradores han detenido históricamente la caída",
                "El precio de apertura de la bolsa",
              ],
              correctAnswer: "El precio donde los compradores han detenido históricamente la caída",
            },
            {
              prompt: "¿Qué suele ocurrir con un nivel de resistencia después de que se rompe al alza?",
              options: [
                "El precio debe regresar de inmediato",
                "Desaparece y deja de influir en el precio",
                "A menudo se convierte en un nuevo soporte",
              ],
              correctAnswer: "A menudo se convierte en un nuevo soporte",
            },
            {
              prompt: "¿Cómo se deben trazar correctamente niveles fiables en el gráfico?",
              options: [
                "Con varios toques del precio, no con un solo punto",
                "Solo en el timeframe de un minuto",
                "Exactamente en el centro del gráfico",
              ],
              correctAnswer: "Con varios toques del precio, no con un solo punto",
            },
          ],
        },
        {
          slug: "trend-i-ego-struktura",
          title: "La tendencia y su estructura",
          summary: "Tendencia alcista, bajista y lateral; estructura de máximos y mínimos.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Una tendencia alcista está formada por una secuencia de máximos crecientes (Higher High) y mínimos crecientes (Higher Low). Una tendencia bajista es lo opuesto: Lower High y Lower Low. Cuando el precio se mueve dentro de un rango sin una dirección clara, se le llama tendencia lateral o rango (flat).",
            },
            {
              type: "paragraph",
              text: "Operar en la dirección de la tendencia da, estadísticamente, más probabilidades de éxito que intentar atrapar un giro en su contra; de ahí la conocida regla \"la tendencia es tu amiga\".",
            },
          ],
          questions: [
            {
              prompt: "¿De qué se compone una tendencia alcista?",
              options: [
                "Solo de velas verdes consecutivas",
                "De una secuencia de máximos y mínimos crecientes",
                "De velas de la misma altura",
              ],
              correctAnswer: "De una secuencia de máximos y mínimos crecientes",
            },
            {
              prompt: "¿Qué es una tendencia lateral (flat)?",
              options: [
                "Una caída brusca del precio",
                "El movimiento del precio dentro de un rango sin dirección clara",
                "Un período de suspensión de la negociación en la bolsa",
              ],
              correctAnswer: "El movimiento del precio dentro de un rango sin dirección clara",
            },
            {
              prompt: "¿Por qué se dice que \"la tendencia es tu amiga\"?",
              options: [
                "Es solo una figura retórica sin sentido práctico",
                "La tendencia nunca cambia de dirección",
                "Operar a favor de la tendencia da estadísticamente más probabilidades de éxito",
              ],
              correctAnswer: "Operar a favor de la tendencia da estadísticamente más probabilidades de éxito",
            },
          ],
        },
        {
          slug: "obyom-i-likvidnost",
          title: "Volumen y liquidez",
          summary: "Por qué seguir el volumen y qué es la liquidez del mercado.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "El volumen de negociación muestra cuánto activo se compró y vendió durante un período. Los movimientos fuertes de precio confirmados por un volumen alto se consideran más fiables que movimientos similares con volumen bajo.",
            },
            {
              type: "paragraph",
              text: "La liquidez es la capacidad de comprar o vender un activo rápidamente y sin afectar mucho su precio. En activos poco líquidos, incluso una operación pequeña puede mover el precio de forma significativa y provocar slippage: la ejecución de la orden a un precio peor del esperado.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué indica una subida de precio con bajo volumen de negociación?",
              options: [
                "Es la señal más fiable para entrar",
                "La liquidez del activo es máxima",
                "El movimiento es débil y puede no estar confirmado",
              ],
              correctAnswer: "El movimiento es débil y puede no estar confirmado",
            },
            {
              prompt: "¿Qué es la liquidez del mercado?",
              options: [
                "La facilidad de comprar/vender un activo sin afectar mucho su precio",
                "La comisión de la bolsa por operación",
                "La cantidad total de monedas en circulación",
              ],
              correctAnswer: "La facilidad de comprar/vender un activo sin afectar mucho su precio",
            },
            {
              prompt: "¿Qué riesgo corre un trader al operar con un activo poco líquido?",
              options: [
                "Una ganancia garantizada",
                "Un gran slippage al ejecutar la operación",
                "La ausencia total de comisiones",
              ],
              correctAnswer: "Un gran slippage al ejecutar la operación",
            },
          ],
        },
        {
          slug: "risk-menedzhment-osnovy",
          title: "Gestión de riesgo: fundamentos",
          summary: "Tamaño de la posición, stop-loss, relación riesgo/beneficio.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "La gestión de riesgo es lo que diferencia a un trader profesional de un jugador de casino. El stop-loss es un nivel fijado de antemano en el que la operación se cierra con una pérdida limitada si el mercado se mueve en contra del pronóstico.",
            },
            {
              type: "paragraph",
              text: "La mayoría de los traders experimentados arriesgan no más del 1-2% del depósito en una sola operación; esto permite sobrevivir a una racha de operaciones perdedoras sin perder todo el capital. La relación riesgo/beneficio (risk/reward) muestra cuántas veces la ganancia potencial supera el riesgo: por ejemplo, 1:3 significa que la ganancia es tres veces mayor que la posible pérdida.",
            },
            {
              type: "list",
              items: [
                "El stop-loss se coloca antes de entrar en la operación, no después",
                "El tamaño de la posición se calcula a partir del riesgo en dinero, y no al revés",
                "Incluso una estrategia rentable puede arruinar sin control de riesgo",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Para qué sirve el stop-loss?",
              options: [
                "Garantizar la ganancia",
                "Aumentar el tamaño de la posición",
                "Limitar la pérdida de la operación de antemano",
              ],
              correctAnswer: "Limitar la pérdida de la operación de antemano",
            },
            {
              prompt: "¿Qué porcentaje del depósito se recomienda arriesgar habitualmente en una sola operación?",
              options: ["25-30%", "Todo el depósito", "1-2%"],
              correctAnswer: "1-2%",
            },
            {
              prompt: "¿Qué significa una relación riesgo/beneficio de 1:3?",
              options: [
                "La operación se cerrará en 3 horas",
                "El riesgo es 3 veces mayor que la ganancia",
                "La ganancia potencial es 3 veces mayor que el riesgo",
              ],
              correctAnswer: "La ganancia potencial es 3 veces mayor que el riesgo",
            },
          ],
        },
      ],
    },
    {
      title: "Análisis técnico",
      lessons: [
        {
          slug: "skolzyashchie-srednie",
          title: "Indicadores: medias móviles",
          summary: "SMA y EMA: cómo usarlas para determinar la tendencia.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "La media móvil (Moving Average) suaviza el precio durante el período elegido, ayudando a ver la dirección general de la tendencia sin el \"ruido\" de las velas individuales. La SMA (simple) da el mismo peso a todos los precios del período, mientras que la EMA (exponencial) reacciona con más fuerza a los precios más recientes.",
            },
            {
              type: "paragraph",
              text: "Cuando el precio está por encima de la media móvil, la tendencia suele considerarse alcista; por debajo, bajista. El cruce de una media móvil corta y una larga (por ejemplo, cuando la MA50 cruza la MA200 de abajo hacia arriba) es una señal popular conocida como \"cruce dorado\" (golden cross).",
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es la diferencia entre la SMA y la EMA?",
              options: [
                "No hay diferencia, es lo mismo",
                "La EMA da más peso a los precios más recientes",
                "La SMA solo funciona en el gráfico de un minuto",
              ],
              correctAnswer: "La EMA da más peso a los precios más recientes",
            },
            {
              prompt: "¿Qué indica que el precio esté por encima de la media móvil?",
              options: ["La tendencia probablemente es alcista", "El volumen de negociación es cero", "El activo está seguramente sobrevalorado"],
              correctAnswer: "La tendencia probablemente es alcista",
            },
            {
              prompt: "¿A qué se le llama \"cruce dorado\"?",
              options: [
                "El momento en que se lista una nueva moneda",
                "El cruce del precio con la línea cero",
                "El cruce de una MA corta por encima de una larga: una señal alcista",
              ],
              correctAnswer: "El cruce de una MA corta por encima de una larga: una señal alcista",
            },
          ],
        },
        {
          slug: "rsi-i-oscillyatory",
          title: "RSI y osciladores",
          summary: "Sobrecompra, sobreventa y divergencias.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "El RSI (Relative Strength Index) es un oscilador que mide la velocidad y la fuerza del cambio de precio en un rango de 0 a 100. Los valores por encima de 70 suelen considerarse zona de sobrecompra, y por debajo de 30, zona de sobreventa.",
            },
            {
              type: "paragraph",
              text: "La divergencia ocurre cuando el precio y el RSI se mueven en direcciones opuestas: por ejemplo, el precio marca un nuevo máximo, pero el RSI no. Esto suele interpretarse como una advertencia temprana del debilitamiento de la tendencia y de un posible giro.",
            },
          ],
          questions: [
            {
              prompt: "¿En qué rango funciona el indicador RSI?",
              options: ["De -1 a 1", "De 0 a 100", "De 0 a 10000"],
              correctAnswer: "De 0 a 100",
            },
            {
              prompt: "¿Qué suele significar un RSI por encima de 70?",
              options: ["El volumen de negociación cayó a cero", "El activo no se puede vender", "El activo está en zona de sobrecompra"],
              correctAnswer: "El activo está en zona de sobrecompra",
            },
            {
              prompt: "¿Qué es la divergencia del RSI?",
              options: [
                "Un fallo técnico del indicador",
                "El precio y el indicador se mueven en direcciones opuestas: una señal de posible giro",
                "La coincidencia total entre el movimiento del precio y del indicador",
              ],
              correctAnswer: "El precio y el indicador se mueven en direcciones opuestas: una señal de posible giro",
            },
          ],
        },
        {
          slug: "urovni-fibonachchi",
          title: "Niveles de Fibonacci",
          summary: "Retrocesos y extensiones de Fibonacci en el análisis del gráfico.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Los niveles de retroceso de Fibonacci (23.6%, 38.2%, 50%, 61.8%, 78.6%) se trazan entre el inicio y el final de un movimiento impulsivo, y ayudan a estimar dónde puede detenerse la corrección antes de que continúe la tendencia. Muchos traders consideran el nivel del 61.8% como el más importante.",
            },
            {
              type: "paragraph",
              text: "Las extensiones de Fibonacci, a diferencia de los retrocesos, se utilizan para proyectar objetivos de precio más allá del impulso inicial, es decir, hasta dónde puede seguir moviéndose el precio.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué nivel de Fibonacci consideran clave muchos traders para la corrección?",
              options: ["61.8%", "100%", "10%"],
              correctAnswer: "61.8%",
            },
            {
              prompt: "¿Para qué se utilizan los retrocesos de Fibonacci?",
              options: [
                "Para buscar puntos de entrada en la corrección dentro de la tendencia",
                "Para determinar la hora exacta de publicación de noticias",
                "Para calcular la comisión de la bolsa",
              ],
              correctAnswer: "Para buscar puntos de entrada en la corrección dentro de la tendencia",
            },
            {
              prompt: "¿Para qué sirven las extensiones de Fibonacci?",
              options: [
                "Para mostrar el volumen de negociación",
                "Para determinar el tamaño del stop-loss en porcentaje",
                "Para determinar objetivos de precio más allá del impulso",
              ],
              correctAnswer: "Para determinar objetivos de precio más allá del impulso",
            },
          ],
        },
        {
          slug: "patterny-razvorota",
          title: "Patrones de giro (reversión)",
          summary: "Cabeza y hombros, doble techo/suelo.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "El patrón \"cabeza y hombros\" es una de las señales de giro de tendencia alcista más conocidas: el precio forma tres picos, donde el central (la cabeza) es más alto que los dos adyacentes (los hombros). El doble techo/suelo es un patrón de significado similar, formado por dos picos o valles aproximadamente iguales.",
            },
            {
              type: "paragraph",
              text: "El patrón se considera confirmado solo tras la ruptura de la \"línea de cuello\" (neckline), el nivel que conecta los mínimos locales entre los picos. Una ruptura sin volumen suele resultar falsa.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué señala el patrón \"cabeza y hombros\"?",
              options: [
                "Un probable giro de la tendencia alcista",
                "La suspensión de la negociación en la bolsa",
                "Una continuación garantizada del alza",
              ],
              correctAnswer: "Un probable giro de la tendencia alcista",
            },
            {
              prompt: "¿Qué confirma la formación del patrón \"doble techo\"?",
              options: ["La aparición de un tercer pico", "La ruptura de la línea de cuello hacia abajo", "El aumento de volumen justo en el pico"],
              correctAnswer: "La ruptura de la línea de cuello hacia abajo",
            },
            {
              prompt: "¿Por qué es importante el volumen al confirmar la ruptura de un patrón?",
              options: [
                "El volumen solo importa en el timeframe diario",
                "Sin volumen, la ruptura suele resultar falsa",
                "El volumen no influye en absoluto en los patrones",
              ],
              correctAnswer: "Sin volumen, la ruptura suele resultar falsa",
            },
          ],
        },
        {
          slug: "patterny-prodolzheniya",
          title: "Patrones de continuación",
          summary: "Banderas, triángulos, rectángulos.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Los patrones de continuación (banderas, triángulos, rectángulos) representan una pausa o consolidación dentro de una tendencia ya existente. A diferencia de los patrones de giro, casi siempre se resuelven en la dirección del movimiento previo.",
            },
            {
              type: "paragraph",
              text: "La salida del precio de esta consolidación suele venir acompañada de un pico de volumen, lo que ayuda a distinguir una ruptura real de una falsa.",
            },
          ],
          questions: [
            {
              prompt: "¿En qué dirección suele resolverse el patrón \"bandera\"?",
              options: ["Siempre estrictamente hacia abajo", "En la dirección de la tendencia previa", "En una dirección aleatoria"],
              correctAnswer: "En la dirección de la tendencia previa",
            },
            {
              prompt: "¿Qué tienen en común los triángulos, las banderas y los rectángulos?",
              options: [
                "Siempre son señales de giro",
                "Solo aparecen en el forex",
                "Son pausas/consolidaciones dentro de la tendencia",
              ],
              correctAnswer: "Son pausas/consolidaciones dentro de la tendencia",
            },
            {
              prompt: "¿Qué suele acompañar a una salida real de un triángulo?",
              options: ["Un pico de volumen", "La suspensión de la negociación", "La ausencia total de volumen"],
              correctAnswer: "Un pico de volumen",
            },
          ],
        },
        {
          slug: "multitaymfreym-analiz",
          title: "Marcos temporales y análisis multitemporal",
          summary: "Cómo alinear señales en distintos timeframes.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "El análisis multitemporal es un enfoque de \"arriba hacia abajo\": primero se determina la tendencia general en un timeframe superior (por ejemplo, el diario) y luego se busca el punto de entrada en uno inferior (por ejemplo, el horario o el de 15 minutos).",
            },
            {
              type: "paragraph",
              text: "Ignorar el timeframe superior es un error frecuente entre los principiantes: una operación puede verse perfecta en el gráfico de 5 minutos, pero ir en contra de la tendencia diaria dominante, lo que reduce drásticamente las probabilidades de éxito.",
            },
          ],
          questions: [
            {
              prompt: "¿Con qué timeframe se suele comenzar el análisis según el método \"de arriba hacia abajo\"?",
              options: ["Con cualquiera al azar", "Con el superior (por ejemplo, el diario)", "Con el de un minuto"],
              correctAnswer: "Con el superior (por ejemplo, el diario)",
            },
            {
              prompt: "¿Para qué sirve el timeframe inferior en el análisis multitemporal?",
              options: ["Para entrar con precisión en la operación", "Para calcular la comisión de la bolsa", "Para sustituir por completo al timeframe superior"],
              correctAnswer: "Para entrar con precisión en la operación",
            },
            {
              prompt: "¿Qué puede ocurrir si se ignora el timeframe superior?",
              options: [
                "Un aumento automático de la ganancia",
                "Nada, no tiene ninguna importancia",
                "Operar en contra de la tendencia principal",
              ],
              correctAnswer: "Operar en contra de la tendencia principal",
            },
          ],
        },
        {
          slug: "psikhologiya-treydera",
          title: "Psicología del trader",
          summary: "Control emocional, disciplina y diario de trading.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "El miedo y la codicia son las dos emociones que con más frecuencia destruyen las estrategias de trading. El miedo lleva a cerrar operaciones ganadoras demasiado pronto o a no entrar en el mercado en absoluto; la codicia, a mantener una posición más allá del plan o a aumentar el riesgo después de una racha de éxitos.",
            },
            {
              type: "paragraph",
              text: "El \"revenge trading\" (operar por venganza) —intentar recuperar de inmediato una pérdida mediante una serie de operaciones emocionales sin análisis— es una de las formas más rápidas de quemar el depósito. Llevar un diario de trading ayuda a analizar los errores y a desarrollar disciplina de forma gradual.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué es el \"revenge trading\" (operar por venganza)?",
              options: [
                "La devolución de la comisión por parte de la bolsa",
                "El intento de recuperar de inmediato una pérdida mediante operaciones emocionales",
                "Una estrategia oficial de los fondos de cobertura",
              ],
              correctAnswer: "El intento de recuperar de inmediato una pérdida mediante operaciones emocionales",
            },
            {
              prompt: "¿Para qué le sirve a un trader llevar un diario de trading?",
              options: [
                "Para analizar errores y mejorar la estrategia",
                "Para reducir los impuestos",
                "Es un requisito de la bolsa",
              ],
              correctAnswer: "Para analizar errores y mejorar la estrategia",
            },
            {
              prompt: "¿Qué emoción suele hacer que se mantenga demasiado tiempo una posición perdedora?",
              options: ["El aburrimiento", "La confianza en que la bolsa tiene razón", "La esperanza de un giro y el miedo a asumir la pérdida"],
              correctAnswer: "La esperanza de un giro y el miedo a asumir la pérdida",
            },
          ],
        },
        {
          slug: "pervaya-virtualnaya-sdelka",
          title: "La primera operación virtual",
          summary: "Aplicamos todo lo aprendido en un saldo virtual.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Ha llegado el momento de unir toda la teoría: antes de abrir una operación, define el punto de entrada (basado en niveles y en la estructura de la tendencia), el stop-loss (la pérdida máxima admisible) y el objetivo de ganancia, todo de antemano, antes de pulsar el botón de Long o Short.",
            },
            {
              type: "paragraph",
              text: "La sección «Mercado Virtual» de ASTREX permite practicar todo el proceso con datos simulados sin arriesgar dinero real: es la mejor forma de desarrollar disciplina antes de pasar a operar con capital real.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué hay que definir antes de abrir una operación?",
              options: [
                "Solo el punto de entrada",
                "El punto de entrada, el stop-loss y el objetivo de ganancia",
                "No hace falta definir nada de antemano",
              ],
              correctAnswer: "El punto de entrada, el stop-loss y el objetivo de ganancia",
            },
            {
              prompt: "¿Por qué conviene practicar primero con un saldo virtual?",
              options: [
                "El saldo virtual genera más ganancias",
                "Es un requisito legal obligatorio",
                "Para poner a prueba la estrategia sin arriesgar dinero real",
              ],
              correctAnswer: "Para poner a prueba la estrategia sin arriesgar dinero real",
            },
            {
              prompt: "¿Qué es importante hacer justo después de cerrar una operación?",
              options: [
                "Analizarla y anotar el resultado en el diario",
                "Borrar el historial de la operación",
                "Abrir de inmediato una operación contraria",
              ],
              correctAnswer: "Analizarla y anotar el resultado en el diario",
            },
          ],
        },
      ],
    },
    {
      title: "Macroeconomía y el mercado cripto",
      lessons: [
        {
          slug: "frs-i-protsentnye-stavki",
          title: "La Fed y las tasas de interés",
          summary: "Cómo las decisiones de la Fed de EE. UU. sobre las tasas mueven todo el mercado, incluida la cripto.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "La Fed (la Reserva Federal de EE. UU.) determina la tasa de interés de referencia, de la cual depende el costo del dinero en toda la economía mundial. Cuando se sube la tasa, los créditos se encarecen y los inversores salen de los activos de riesgo —acciones y criptomonedas— hacia bonos y depósitos.",
            },
            {
              type: "paragraph",
              text: "Cuando la Fed baja la tasa o insinúa una política más flexible, los activos de riesgo suelen subir: el dinero se vuelve más barato y los inversores vuelven a estar dispuestos a asumir riesgos en busca de rentabilidad.",
            },
            {
              type: "list",
              items: [
                "Las reuniones del FOMC se celebran 8 veces al año: son fechas clave para el mercado",
                "El mercado reacciona no solo a la decisión en sí, sino también a la retórica (\"hawkish\" o \"dovish\")",
                "El mercado cripto es especialmente sensible a la tasa debido a la alta proporción de capital especulativo",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cómo suele reaccionar el mercado a una subida de la tasa de la Fed?",
              options: [
                "El bitcoin siempre sube cuando se eleva la tasa",
                "El mercado cripto no reacciona en absoluto a la tasa",
                "Los activos de riesgo (incluida la cripto) suelen caer",
              ],
              correctAnswer: "Los activos de riesgo (incluida la cripto) suelen caer",
            },
            {
              prompt: "¿Qué es el FOMC?",
              options: [
                "La mayor exchange de criptomonedas de EE. UU.",
                "El comité de la Fed que toma las decisiones sobre la tasa de interés",
                "Un índice de volatilidad del mercado",
              ],
              correctAnswer: "El comité de la Fed que toma las decisiones sobre la tasa de interés",
            },
            {
              prompt: "¿Cómo se denomina en la jerga del mercado a la flexibilización de la política monetaria?",
              options: ["Emisión \"neutral\"", "Política \"hawkish\"", "Política \"dovish\""],
              correctAnswer: "Política \"dovish\"",
            },
          ],
        },
        {
          slug: "inflyatsiya-i-cpi",
          title: "La inflación y el índice CPI",
          summary: "Por qué los datos de inflación mueven el mercado más que muchas otras noticias.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "El CPI (índice de precios al consumidor) es el principal indicador de inflación en EE. UU. y se publica mensualmente. Si la inflación supera las expectativas, el mercado descuenta una política más restrictiva por parte de la Fed y los activos de riesgo caen. Si la inflación se desacelera, el mercado lo celebra y sube.",
            },
            {
              type: "list",
              items: [
                "La publicación del CPI es uno de los momentos más volátiles del mes en el mercado cripto",
                "Lo importante no es el dato en sí, sino su diferencia respecto al pronóstico de los analistas",
                "Además del CPI, existe el PCE, el indicador de inflación preferido por la Fed",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué mide el índice CPI?",
              options: [
                "El volumen de negociación en la bolsa",
                "El cambio de precios de la canasta de bienes y servicios de consumo",
                "El tipo de cambio del bitcoin frente al dólar",
              ],
              correctAnswer: "El cambio de precios de la canasta de bienes y servicios de consumo",
            },
            {
              prompt: "¿Cómo suele reaccionar el mercado cuando el CPI sale por encima del pronóstico?",
              options: [
                "El mercado cripto detiene automáticamente la negociación",
                "El mercado nunca reacciona al CPI",
                "Los activos de riesgo suelen caer",
              ],
              correctAnswer: "Los activos de riesgo suelen caer",
            },
            {
              prompt: "¿Qué indicador de inflación se considera el preferido de la propia Fed?",
              options: ["RSI", "PCE", "DXY"],
              correctAnswer: "PCE",
            },
          ],
        },
        {
          slug: "indeks-dollara-dxy",
          title: "El índice del dólar (DXY)",
          summary: "La correlación inversa entre el dólar y las criptomonedas.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "El DXY mide la fortaleza del dólar estadounidense frente a una canasta de otras divisas. Históricamente, el DXY y el bitcoin suelen moverse en fases opuestas: un dólar fuerte presiona a la cripto y a otros activos de riesgo, mientras que un dólar débil favorece su subida.",
            },
            {
              type: "paragraph",
              text: "Los traders experimentados mantienen el gráfico del DXY en un panel aparte junto al de BTC: una subida brusca del índice del dólar suele anticipar una corrección en el mercado cripto incluso antes de que esta se vea en el propio gráfico del bitcoin.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué mide el índice DXY?",
              options: [
                "La fortaleza del dólar estadounidense frente a una canasta de otras divisas",
                "La capitalización total del mercado cripto",
                "La volatilidad del bitcoin",
              ],
              correctAnswer: "La fortaleza del dólar estadounidense frente a una canasta de otras divisas",
            },
            {
              prompt: "¿Cómo suelen relacionarse los movimientos del DXY y del bitcoin?",
              options: [
                "Suelen moverse en direcciones opuestas",
                "No tienen ninguna relación",
                "Siempre se mueven de forma absolutamente sincronizada",
              ],
              correctAnswer: "Suelen moverse en direcciones opuestas",
            },
            {
              prompt: "¿De qué puede ser una advertencia una subida brusca del índice DXY?",
              options: [
                "De una subida garantizada del bitcoin",
                "De una probable corrección en el mercado cripto",
                "De un fallo técnico de la bolsa",
              ],
              correctAnswer: "De una probable corrección en el mercado cripto",
            },
          ],
        },
        {
          slug: "korrelyatsiya-s-fondovym-rynkom",
          title: "Correlación con el mercado bursátil",
          summary: "La relación del bitcoin con el índice Nasdaq y el apetito por el riesgo.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "En los últimos años, el bitcoin se comporta cada vez más como un activo de riesgo tecnológico, y no como \"oro digital\": su precio suele correlacionarse con el índice Nasdaq. Cuando los inversores compran con avidez acciones de empresas tecnológicas, el mercado cripto suele subir también, y viceversa.",
            },
            {
              type: "paragraph",
              text: "Esta correlación no es constante: durante eventos específicos del sector cripto (un hackeo de exchange, noticias regulatorias, un listado importante), el mercado cripto puede moverse de forma independiente a las acciones.",
            },
          ],
          questions: [
            {
              prompt: "¿Con qué clase de activos se correlaciona más el bitcoin en los últimos años?",
              options: [
                "Con los bonos del Estado",
                "Con las acciones tecnológicas (Nasdaq)",
                "No se correlaciona con nada",
              ],
              correctAnswer: "Con las acciones tecnológicas (Nasdaq)",
            },
            {
              prompt: "¿Qué significa una alta correlación entre BTC y Nasdaq?",
              options: [
                "BTC sustituye por completo al índice Nasdaq",
                "Están obligados a moverse en direcciones opuestas",
                "Suelen moverse en la misma dirección",
              ],
              correctAnswer: "Suelen moverse en la misma dirección",
            },
            {
              prompt: "¿Qué puede debilitar temporalmente la correlación de BTC con el mercado bursátil?",
              options: [
                "Un cambio de huso horario",
                "Eventos específicos del sector cripto (hackeo de exchange, noticias regulatorias)",
                "Un día festivo en la bolsa",
              ],
              correctAnswer: "Eventos específicos del sector cripto (hackeo de exchange, noticias regulatorias)",
            },
          ],
        },
        {
          slug: "ekonomicheskiy-kalendar",
          title: "El calendario económico y las noticias",
          summary: "Qué eventos hay que seguir siempre antes de operar.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "El calendario económico es el cronograma de publicación de datos macroeconómicos importantes: reuniones de la Fed, informes de inflación (CPI), del mercado laboral (NFP) y otros indicadores capaces de aumentar bruscamente la volatilidad.",
            },
            {
              type: "paragraph",
              text: "Los eventos del calendario suelen estar marcados con un nivel de impacto (alto/medio/bajo). Antes de publicaciones de alta importancia, los traders experimentados a menudo reducen el riesgo, achican sus posiciones o directamente se abstienen de abrir nuevas operaciones, ya que la volatilidad en esos momentos puede ser impredecible.",
            },
          ],
          questions: [
            {
              prompt: "¿Para qué le sirve a un trader el calendario económico?",
              options: [
                "Para planificar sus vacaciones personales",
                "Para hacer seguimiento de las fechas de noticias importantes que influyen en el mercado",
                "Para reemplazar por completo el análisis técnico",
              ],
              correctAnswer: "Para hacer seguimiento de las fechas de noticias importantes que influyen en el mercado",
            },
            {
              prompt: "¿Qué es el NFP?",
              options: [
                "El índice de miedo y codicia",
                "Un nuevo protocolo criptográfico",
                "El informe de empleo no agrícola de EE. UU.",
              ],
              correctAnswer: "El informe de empleo no agrícola de EE. UU.",
            },
            {
              prompt: "¿Qué es razonable hacer antes de la publicación de una noticia de alta importancia?",
              options: [
                "Aumentar al máximo el tamaño de la posición",
                "Reducir el riesgo o abstenerse de abrir nuevas operaciones",
                "Desactivar los stop-loss",
              ],
              correctAnswer: "Reducir el riesgo o abstenerse de abrir nuevas operaciones",
            },
          ],
        },
        {
          slug: "etf",
          title: "ETF",
          summary: "Qué es un fondo cotizado y por qué las aprobaciones de ETF cripto mueven el mercado.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Un ETF (Exchange-Traded Fund, fondo cotizado en bolsa) es un instrumento financiero que se negocia en una bolsa como una acción ordinaria, pero que replica el valor de un activo subyacente o de una cesta de activos. Un ETF cripto al contado (spot) permite a los inversores obtener exposición al precio de un activo, como bitcoin, sin comprarlo ni custodiarlo directamente — la gestora del fondo es quien posee el activo subyacente.",
            },
            {
              type: "paragraph",
              text: "La aprobación por parte de los reguladores (por ejemplo, la SEC en EE. UU.) de ETF al contado de bitcoin o ethereum se considera un evento importante para el mercado: abre el acceso al activo a inversores institucionales y minoristas para quienes resulta incómodo o está prohibido mantener criptomonedas directamente. Los traders usan las entradas y salidas diarias de capital en estos ETF como indicador de demanda institucional.",
            },
            {
              type: "list",
              items: [
                "Un ETF replica el valor de un activo subyacente, pero se negocia como una acción ordinaria en una bolsa tradicional",
                "Un ETF al contado implica que la gestora realmente posee el activo subyacente",
                "Las entradas y salidas diarias en los ETF cripto se usan como indicador de demanda institucional",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué es un ETF?",
              options: [
                "Un tipo de monedero de criptomonedas",
                "Un protocolo de consenso de blockchain",
                "Un instrumento financiero que se negocia como una acción y replica el valor de un activo subyacente",
              ],
              correctAnswer: "Un instrumento financiero que se negocia como una acción y replica el valor de un activo subyacente",
            },
            {
              prompt: "¿Qué le da a un inversor un ETF cripto al contado?",
              options: [
                "Exposición al precio de un activo sin necesidad de comprarlo y custodiarlo él mismo",
                "Una rentabilidad fija garantizada",
                "Derecho de voto en la gobernanza de una blockchain",
              ],
              correctAnswer: "Exposición al precio de un activo sin necesidad de comprarlo y custodiarlo él mismo",
            },
            {
              prompt: "¿Cómo usan los traders los datos de entradas y salidas de los ETF cripto?",
              options: [
                "Como indicador de la demanda institucional del activo",
                "Como sustituto del análisis de volumen y volatilidad",
                "Como una previsión exacta del precio del día siguiente",
              ],
              correctAnswer: "Como indicador de la demanda institucional del activo",
            },
          ],
        },
      ],
    },
    {
      title: "Conceptos de Smart Money",
      lessons: [
        {
          slug: "imbalans-i-fvg",
          title: "Imbalance y Fair Value Gap (FVG)",
          summary: "Zonas de ineficiencia de precio y cómo encontrarlas en el gráfico.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El imbalance es una zona del gráfico donde el precio se movió demasiado rápido en una dirección, sin dar a ambas partes (compradores y vendedores) la oportunidad de negociar plenamente. El mercado suele \"volver a cerrar\" esas zonas más adelante.",
            },
            {
              type: "paragraph",
              text: "El Fair Value Gap (FVG) es un caso particular de imbalance formado por tres velas: entre la mecha de la primera y la mecha de la tercera vela queda un hueco visible. Es una de las zonas de interés más populares dentro de los Smart Money Concepts.",
            },
            { type: "diagram", diagram: "fvg", caption: "Un FVG alcista clásico en tres velas" },
            { type: "diagram", diagram: "imbalance", caption: "Una zona de imbalance más amplia en una sola vela impulsiva" },
          ],
          questions: [
            {
              prompt: "¿Qué es un Fair Value Gap (FVG)?",
              options: [
                "El hueco entre las mechas de la 1.ª y la 3.ª vela debido a un impulso brusco",
                "Un indicador de volumen",
                "Un nivel de stop-loss",
              ],
              correctAnswer: "El hueco entre las mechas de la 1.ª y la 3.ª vela debido a un impulso brusco",
            },
            {
              prompt: "¿Qué suele hacer el mercado más tarde con una zona de imbalance?",
              options: [
                "Regresa y la \"cierra\" parcial o totalmente",
                "La elimina automáticamente del gráfico",
                "Nunca vuelve a tocarla",
              ],
              correctAnswer: "Regresa y la \"cierra\" parcial o totalmente",
            },
            {
              prompt: "¿De cuántas velas se compone el patrón FVG clásico?",
              options: ["De una", "De siete", "De tres"],
              correctAnswer: "De tres",
            },
          ],
        },
        {
          slug: "likvidnost-na-rynke",
          title: "La liquidez y sus tipos",
          summary: "Dónde se acumulan en el gráfico las órdenes pendientes de los grandes jugadores.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La liquidez son acumulaciones de órdenes pendientes (stop-loss y órdenes límite) en niveles de precio concretos. Se acumula con mayor frecuencia detrás de máximos/mínimos iguales y de niveles evidentes de soporte/resistencia que todos ven.",
            },
            {
              type: "list",
              items: [
                "Liquidez buy-side: los stops de los vendedores en corto por encima de los máximos locales",
                "Liquidez sell-side: los stops de los compradores en largo por debajo de los mínimos locales",
                "Los grandes jugadores necesitan liquidez para construir o cerrar una posición sin un slippage importante",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Dónde suele acumularse la liquidez en el gráfico?",
              options: [
                "Solo en velas de noticias",
                "Cerca de máximos/mínimos iguales y de niveles evidentes de soporte/resistencia",
                "Exactamente en el medio del rango, sin motivo",
              ],
              correctAnswer: "Cerca de máximos/mínimos iguales y de niveles evidentes de soporte/resistencia",
            },
            {
              prompt: "¿Qué es la liquidez buy-side?",
              options: [
                "La comisión de la bolsa por la compra",
                "Los stops de los compradores en largo por debajo de los mínimos locales",
                "Los stops de los vendedores en corto, ubicados por encima de los máximos locales",
              ],
              correctAnswer: "Los stops de los vendedores en corto, ubicados por encima de los máximos locales",
            },
            {
              prompt: "¿Para qué necesitan los grandes jugadores liquidez en el mercado?",
              options: [
                "Para construir o cerrar una posición grande sin un slippage importante",
                "Esto no tiene relación con los grandes jugadores",
                "Para detener por completo la negociación",
              ],
              correctAnswer: "Para construir o cerrar una posición grande sin un slippage importante",
            },
          ],
        },
        {
          slug: "snyatie-likvidnosti",
          title: "Barrido de liquidez (Liquidity Sweep)",
          summary: "Por qué el precio primero barre los stops y luego gira.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El Liquidity Sweep es una situación en la que el precio perfora deliberadamente un nivel con liquidez (por ejemplo, máximos iguales), recoge las órdenes pendientes y luego gira bruscamente en la dirección opuesta, hacia donde en realidad estaba planeado el movimiento grande.",
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "Perforación de máximos iguales y giro brusco hacia abajo" },
            {
              type: "paragraph",
              text: "Comprender el sweep ayuda a no caer en la trampa: la ruptura de un nivel por sí sola no garantiza que el movimiento continúe en esa dirección; muchas veces se trata solo de una caza de liquidez.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué suele ocurrir con el precio justo después de un liquidity sweep?",
              options: [
                "Un giro brusco en la dirección opuesta a la perforación",
                "Nada, el volumen cae a cero",
                "El precio siempre continúa el movimiento en la dirección de la perforación",
              ],
              correctAnswer: "Un giro brusco en la dirección opuesta a la perforación",
            },
            {
              prompt: "¿Qué zona suele convertirse en el objetivo de un liquidity sweep?",
              options: [
                "Una zona con liquidez nula",
                "El medio de un rango aleatorio sin niveles",
                "Una zona con órdenes pendientes, por ejemplo, máximos/mínimos iguales",
              ],
              correctAnswer: "Una zona con órdenes pendientes, por ejemplo, máximos/mínimos iguales",
            },
            {
              prompt: "¿Qué error es típico de los principiantes al ver un sweep?",
              options: [
                "Colocar el stop-loss antes de entrar en la operación",
                "Entrar en la dirección de la ruptura sin considerar un posible giro",
                "Cerrar demasiado pronto una posición ganadora",
              ],
              correctAnswer: "Entrar en la dirección de la ruptura sin considerar un posible giro",
            },
          ],
        },
        {
          slug: "struktura-trenda-bos-choch",
          title: "Estructura de la tendencia: BOS y CHoCH",
          summary: "Cómo determinar, a partir de los máximos y mínimos, si la tendencia sigue viva o ya se rompió.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Una tendencia alcista está formada por una secuencia de Higher High (HH) y Higher Low (HL). Mientras se mantenga esta estructura, la tendencia se considera vigente.",
            },
            {
              type: "paragraph",
              text: "El Break of Structure (BOS) es la ruptura del máximo anterior, que confirma la continuación de la tendencia. El Change of Character (CHoCH) es una ruptura en la dirección opuesta, la primera señal de un posible giro de tendencia.",
            },
            { type: "diagram", diagram: "trend-structure", caption: "Estructura HH/HL de una tendencia alcista y BOS" },
          ],
          questions: [
            {
              prompt: "¿Qué señala el Change of Character (CHoCH)?",
              options: [
                "La continuación de la tendencia con aceleración",
                "La ausencia de liquidez en el mercado",
                "Un posible giro de la tendencia actual",
              ],
              correctAnswer: "Un posible giro de la tendencia actual",
            },
            {
              prompt: "¿Qué confirma el Break of Structure (BOS)?",
              options: [
                "La suspensión automática de la negociación",
                "La anulación de todos los niveles anteriores",
                "La continuación de la tendencia actual",
              ],
              correctAnswer: "La continuación de la tendencia actual",
            },
            {
              prompt: "¿De qué se compone la estructura de una tendencia alcista?",
              options: [
                "De velas de la misma altura",
                "De Lower High y Lower Low",
                "De Higher High y Higher Low",
              ],
              correctAnswer: "De Higher High y Higher Low",
            },
          ],
        },
        {
          slug: "order-bloki",
          title: "Order blocks",
          summary: "Zonas desde las que los grandes jugadores lanzaron un fuerte movimiento de precio.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Un order block es la última vela opuesta antes de un fuerte movimiento impulsivo del precio. Por ejemplo, la última vela roja antes de una subida brusca se considera un order block alcista: se asume que fue justo ahí donde los grandes jugadores acumularon su posición.",
            },
            {
              type: "paragraph",
              text: "Los traders utilizan los order blocks como zonas potenciales de entrada: si en el futuro el precio regresa a esa zona, se espera una reacción, es decir, la continuación del movimiento en la dirección original.",
            },
          ],
          questions: [
            {
              prompt: "¿Qué es un order block?",
              options: [
                "Un indicador de volumen de negociación",
                "Un tipo de orden bursátil con ejecución retardada",
                "La última vela opuesta antes de un fuerte movimiento impulsivo",
              ],
              correctAnswer: "La última vela opuesta antes de un fuerte movimiento impulsivo",
            },
            {
              prompt: "¿Cómo suelen utilizar los traders los order blocks?",
              options: [
                "Para calcular la comisión de la bolsa",
                "Como zonas potenciales de entrada cuando el precio regresa a ellas",
                "Como un indicador de inflación",
              ],
              correctAnswer: "Como zonas potenciales de entrada cuando el precio regresa a ellas",
            },
            {
              prompt: "¿En qué se diferencia un order block alcista de uno bajista?",
              options: [
                "Solo aparece en el timeframe diario",
                "Se forma antes de un impulso al alza, no a la baja",
                "Siempre es de mayor tamaño",
              ],
              correctAnswer: "Se forma antes de un impulso al alza, no a la baja",
            },
          ],
        },
      ],
    },

    {
      title: "Gestión de riesgo",
      lessons: [
        {
          slug: "risk-reward",
          title: "Risk/Reward",
          summary: "La relación entre el riesgo y la ganancia, y por qué es más importante que el porcentaje de operaciones ganadoras.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Risk/Reward (R/R) es la relación entre la pérdida potencial y la ganancia potencial en una operación. Si arriesgas 100$ para ganar 300$, tu R/R es 1:3. Es una de las métricas clave que determina si un sistema de trading será rentable a largo plazo.",
            },
            {
              type: "paragraph",
              text: "Incluso un sistema con un bajo porcentaje de operaciones ganadoras puede ser rentable si el R/R medio es suficientemente alto. Por ejemplo, con un R/R de 1:3 basta con acertar solo el 30% de las veces para salir en positivo. Por eso los traders experimentados no se centran en el porcentaje de aciertos, sino en la esperanza matemática de la operación.",
            },
            {
              type: "list",
              items: [
                "El R/R se calcula antes de entrar en la operación, no después",
                "Cuanto más alto es el R/R, menor puede ser el winrate necesario",
                "Un buen R/R no garantiza ganancias sin disciplina en la ejecución",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué significa una relación Risk/Reward de 1:3?",
              options: [
                "Hay que abrir 3 operaciones seguidas",
                "La ganancia potencial es 3 veces mayor que el riesgo potencial",
                "La operación se cierra a las 3 horas",
              ],
              correctAnswer: "La ganancia potencial es 3 veces mayor que el riesgo potencial",
            },
            {
              prompt: "¿Por qué un sistema con R/R 1:3 puede ser rentable incluso con un winrate del 40%?",
              options: [
                "La ganancia de las operaciones ganadoras compensa las pérdidas de las perdedoras",
                "Porque las comisiones del exchange se reducen",
                "Porque el 40% siempre es mayor que el 33%",
              ],
              correctAnswer: "La ganancia de las operaciones ganadoras compensa las pérdidas de las perdedoras",
            },
            {
              prompt: "¿Cuándo debe calcular el trader el Risk/Reward de una operación?",
              options: [
                "Antes de entrar en la operación",
                "No es obligatorio calcular el R/R",
                "Solo después de cerrar la operación",
              ],
              correctAnswer: "Antes de entrar en la operación",
            },
          ],
        },
        {
          slug: "razmer-pozitsii",
          title: "Tamaño de la posición",
          summary: "Cómo calcular el volumen de la operación en función del riesgo sobre el depósito, y no de la ganancia deseada.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El tamaño de la posición (position sizing) es el volumen de capital que inviertes en una operación concreta. No debe determinarse por la ganancia deseada, sino por el riesgo admisible: normalmente los traders arriesgan no más del 1-2% del depósito por operación, independientemente de lo seguro que parezca el setup.",
            },
            {
              type: "paragraph",
              text: "La fórmula es simple: tamaño de la posición = (depósito × porcentaje de riesgo) / distancia al stop-loss en porcentaje. Este enfoque tiene en cuenta automáticamente la volatilidad del activo y la distancia del stop: cuanto más amplio es el stop, menor es el volumen de la posición para el mismo riesgo en dólares.",
            },
            {
              type: "list",
              items: [
                "Un porcentaje de riesgo fijo protege el depósito de una serie de operaciones perdedoras",
                "El volumen de la posición debe reducirse si el stop-loss está colocado lejos",
                "El uso de apalancamiento aumenta el volumen, pero no elimina el cálculo del riesgo",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿De qué debe depender principalmente el tamaño de la posición?",
              options: [
                "De cuánto dinero hay en la tarjeta",
                "Del estado de ánimo del trader",
                "Del riesgo admisible en porcentaje del depósito",
              ],
              correctAnswer: "Del riesgo admisible en porcentaje del depósito",
            },
            {
              prompt: "¿Qué ocurre con el tamaño de la posición si el stop-loss se coloca más lejos del precio de entrada?",
              options: [
                "El volumen de la posición debe reducirse para mantener el mismo riesgo en dólares",
                "El volumen de la posición no está relacionado con la distancia al stop",
                "El volumen de la posición debe aumentar",
              ],
              correctAnswer: "El volumen de la posición debe reducirse para mantener el mismo riesgo en dólares",
            },
            {
              prompt: "¿Qué porcentaje del depósito se suele recomendar arriesgar en una sola operación?",
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
          title: "Stop-loss",
          summary: "Para qué sirve el stop-loss, dónde colocarlo correctamente y qué errores se cometen con más frecuencia.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El stop-loss es un nivel de precio predefinido al alcanzar el cual la operación se cierra automáticamente con pérdida. Es la principal herramienta de protección del capital: limita las pérdidas a una cantidad conocida de antemano, en lugar de permitir que la pérdida crezca sin control.",
            },
            {
              type: "paragraph",
              text: "El stop-loss debe colocarse en función de la estructura del mercado —detrás del nivel de soporte o resistencia más cercano, o del extremo de una vela—, y no en función de la cantidad que el trader está dispuesto a perder. Un stop demasiado ajustado saca al trader de la operación por el ruido normal del mercado, mientras que uno demasiado amplio aumenta el riesgo de la posición.",
            },
            {
              type: "list",
              items: [
                "El stop-loss protege frente a decisiones emocionales en momentos de drawdown",
                "El nivel del stop debe basarse en la estructura del gráfico, no en la cantidad de pérdida deseada",
                "Mover el stop más lejos del precio durante una caída es uno de los errores más comunes de los principiantes",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es la función principal del stop-loss?",
              options: [
                "Duplicar automáticamente la posición",
                "Aumentar la ganancia de la operación",
                "Limitar la pérdida a una cantidad conocida de antemano",
              ],
              correctAnswer: "Limitar la pérdida a una cantidad conocida de antemano",
            },
            {
              prompt: "¿En qué es más correcto basarse para determinar el nivel del stop-loss?",
              options: [
                "En un número aleatorio",
                "En la cantidad de ganancia deseada",
                "En la estructura del mercado (niveles de soporte/resistencia)",
              ],
              correctAnswer: "En la estructura del mercado (niveles de soporte/resistencia)",
            },
            {
              prompt: "¿Qué error es típico de los principiantes durante una caída en una operación?",
              options: [
                "Mover el stop-loss más lejos del precio para «dar más oportunidades a la operación»",
                "Calcular el riesgo antes de entrar",
                "Cerrar la operación estrictamente en el stop",
              ],
              correctAnswer: "Mover el stop-loss más lejos del precio para «dar más oportunidades a la operación»",
            },
          ],
        },
        {
          slug: "take-profit",
          title: "Take Profit",
          summary: "Cómo establecer objetivos de ganancia y cuándo conviene usar el cierre parcial de la posición.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Take Profit (TP) es un nivel predefinido en el que la operación se cierra automáticamente con ganancia. Al igual que el stop-loss, debe determinarse por la lógica del mercado: el nivel de resistencia, soporte o zona de liquidez más cercano, y no por el deseo arbitrario de ganar una cantidad concreta.",
            },
            {
              type: "paragraph",
              text: "Muchos traders usan el cierre parcial: fijan parte de la posición en el primer objetivo y dejan que el resto siga moviéndose con el stop trasladado a punto de equilibrio (breakeven). Esto permite fijar ganancias y, al mismo tiempo, no salir de la operación demasiado pronto si el movimiento continúa.",
            },
            {
              type: "list",
              items: [
                "El TP, al igual que el stop, debe colocarse en función de la estructura del gráfico",
                "El cierre parcial reduce la presión psicológica durante la operación",
                "Trasladar el stop a punto de equilibrio tras el primer objetivo protege la ganancia ya obtenida",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué debe basarse el nivel de Take Profit?",
              options: [
                "En la cantidad de horas que lleva abierta la operación",
                "En la estructura del gráfico: niveles de resistencia, soporte o liquidez",
                "En un número aleatorio que le guste al trader",
              ],
              correctAnswer: "En la estructura del gráfico: niveles de resistencia, soporte o liquidez",
            },
            {
              prompt: "¿Para qué usan los traders el cierre parcial de la posición?",
              options: [
                "Para cerrar la operación en pérdida obligatoriamente",
                "Para aumentar la comisión del exchange",
                "Para fijar parte de la ganancia y dejar que el resto siga moviéndose",
              ],
              correctAnswer: "Para fijar parte de la ganancia y dejar que el resto siga moviéndose",
            },
            {
              prompt: "¿Qué se suele hacer con el stop-loss al alcanzar el primer objetivo de ganancia?",
              options: [
                "Se elimina el stop-loss por completo",
                "Se traslada más lejos del precio",
                "Se traslada a punto de equilibrio para proteger la ganancia obtenida",
              ],
              correctAnswer: "Se traslada a punto de equilibrio para proteger la ganancia obtenida",
            },
          ],
        },
        {
          slug: "psihologiya-ubytkov",
          title: "La psicología de las pérdidas",
          summary: "Cómo afectan las operaciones perdedoras a las decisiones del trader y por qué es importante aceptar las pérdidas con calma.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Las pérdidas son una parte inevitable del trading: incluso un sistema rentable pierde dinero regularmente en operaciones individuales. El problema no está en la pérdida en sí, sino en la reacción ante ella: el intento de «recuperarse» de inmediato con un volumen mayor o la negativa a cerrar la operación en el stop con la esperanza de un giro.",
            },
            {
              type: "paragraph",
              text: "El trader que percibe cada pérdida como un coste estadístico esperado del sistema, y no como un fracaso personal, toma decisiones más racionales. Llevar un diario de trading y definir el riesgo por operación de antemano ayuda a separar las emociones del proceso.",
            },
            {
              type: "list",
              items: [
                "Una serie de pérdidas es una parte normal incluso de un sistema de trading rentable",
                "Intentar «recuperarse» después de una pérdida suele aumentar el riesgo, no la ganancia",
                "Definir el riesgo de la operación de antemano reduce la presión emocional en el momento de la pérdida",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es la forma más correcta de percibir una pérdida individual en el trading?",
              options: [
                "Como un motivo para dejar de llevar el diario de trading",
                "Como un coste estadístico esperado del sistema de trading",
                "Como una señal de que hay que duplicar de inmediato el volumen de la siguiente operación",
              ],
              correctAnswer: "Como un coste estadístico esperado del sistema de trading",
            },
            {
              prompt: "¿A qué suele llevar el intento de «recuperarse» inmediatamente después de una pérdida?",
              options: [
                "A la cancelación automática de la operación anterior",
                "A un mayor riesgo y a nuevas pérdidas",
                "A una ganancia garantizada",
              ],
              correctAnswer: "A un mayor riesgo y a nuevas pérdidas",
            },
            {
              prompt: "¿Qué ayuda al trader a separar las emociones de las decisiones de trading?",
              options: [
                "Aumentar el apalancamiento después de cada pérdida",
                "Renunciar por completo al análisis de las operaciones",
                "Definir el riesgo de la operación de antemano y llevar un diario",
              ],
              correctAnswer: "Definir el riesgo de la operación de antemano y llevar un diario",
            },
          ],
        },
      ],
    },
    {
      title: "Psicología del trader",
      lessons: [
        {
          slug: "fomo",
          title: "FOMO",
          summary: "El miedo a perderse un movimiento y por qué lleva a entrar en operaciones en el peor momento.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "FOMO (Fear Of Missing Out) es el miedo a perderse un movimiento de precio rentable. Surge cuando un activo sube bruscamente y el trader ve que otros están «ganando» mientras él no. Bajo la influencia del FOMO, las operaciones suelen abrirse sin plan, en el pico del movimiento, sin tener en cuenta el riesgo.",
            },
            {
              type: "paragraph",
              text: "El problema del FOMO es que la entrada se produce justo cuando el movimiento ya se ha realizado en gran parte y el riesgo de giro es máximo. Un trader disciplinado se ciñe a condiciones de entrada definidas de antemano y deja pasar el movimiento si no se ajusta a su estrategia.",
            },
            {
              type: "list",
              items: [
                "El FOMO suele empujar a entrar después de que el precio ya se haya movido con fuerza",
                "Las decisiones basadas en el FOMO suelen tomarse sin stop-loss ni cálculo del riesgo",
                "Tener un plan de operación definido de antemano reduce la influencia del FOMO",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué es el FOMO en el trading?",
              options: [
                "Un indicador técnico de volumen",
                "El miedo a perderse un movimiento de precio rentable",
                "Un tipo de orden en el exchange",
              ],
              correctAnswer: "El miedo a perderse un movimiento de precio rentable",
            },
            {
              prompt: "¿En qué etapa del movimiento del precio suele entrar el trader en una operación bajo la influencia del FOMO?",
              options: [
                "Justo al comienzo del movimiento",
                "Cerca del final del movimiento, cuando el riesgo de giro ya es alto",
                "Antes de que el movimiento siquiera haya comenzado",
              ],
              correctAnswer: "Cerca del final del movimiento, cuando el riesgo de giro ya es alto",
            },
            {
              prompt: "¿Qué ayuda a reducir la influencia del FOMO en las decisiones del trader?",
              options: [
                "El seguimiento constante de las operaciones ganadoras de otros",
                "Aumentar el apalancamiento en el momento de una subida brusca",
                "Un plan y unas condiciones de entrada definidos de antemano",
              ],
              correctAnswer: "Un plan y unas condiciones de entrada definidos de antemano",
            },
          ],
        },
        {
          slug: "zhadnost",
          title: "La codicia",
          summary: "Cómo la codicia lleva a mantener una operación ganadora más tiempo del previsto y a convertir la ganancia en pérdida.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La codicia en el trading se manifiesta como el deseo de exprimir más ganancia de una operación de la prevista en el plan inicial: no cerrar la posición en el objetivo establecido, aumentar el volumen tras una serie de operaciones exitosas o cancelar un Take Profit ya definido.",
            },
            {
              type: "paragraph",
              text: "Con mayor frecuencia, la codicia hace que una operación ganadora se revierta y se cierre en el stop o en cero, aunque podría haberse asegurado con un buen resultado. La disciplina para respetar el plan definido de antemano es la principal herramienta contra la codicia.",
            },
            {
              type: "list",
              items: [
                "La codicia suele manifestarse como la cancelación de un Take Profit ya definido",
                "Aumentar el volumen tras una serie de operaciones ganadoras sin cambiar la gestión de riesgo también es una manifestación de codicia",
                "Seguir el plan de la operación elaborado de antemano reduce la influencia de la codicia",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cómo se manifiesta con más frecuencia la codicia en la gestión de una operación abierta?",
              options: [
                "El trader cierra la operación estrictamente según el plan",
                "El trader reduce el volumen de la posición",
                "El trader cancela el Take Profit ya definido, esperando una ganancia mayor",
              ],
              correctAnswer: "El trader cancela el Take Profit ya definido, esperando una ganancia mayor",
            },
            {
              prompt: "¿A qué resultado suele llevar la codicia en una operación ganadora?",
              options: [
                "La comisión del exchange se reduce",
                "La ganancia aumenta de forma garantizada",
                "La operación se revierte y se cierra en el stop o en cero",
              ],
              correctAnswer: "La operación se revierte y se cierra en el stop o en cero",
            },
            {
              prompt: "¿Cuál es la principal herramienta contra la codicia en el trading?",
              options: [
                "Aumentar el apalancamiento después de cada operación ganadora",
                "Renunciar por completo a establecer un Take Profit",
                "Respetar el plan de la operación elaborado de antemano",
              ],
              correctAnswer: "Respetar el plan de la operación elaborado de antemano",
            },
          ],
        },
        {
          slug: "strah",
          title: "El miedo",
          summary: "Cómo el miedo a la pérdida impide seguir la estrategia y lleva al cierre prematuro de las operaciones.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El miedo en el trading se manifiesta con más frecuencia como el temor a perder dinero: el trader cierra una operación ganadora demasiado pronto ante la más mínima caída, teme entrar en una operación con una señal confirmada o evita por completo operar después de una serie de pérdidas.",
            },
            {
              type: "paragraph",
              text: "A diferencia de la codicia, el miedo lleva a actuar con demasiada cautela y a perder oportunidades que se ajustan por completo a la estrategia. Operar con un volumen en el que el riesgo por operación resulte psicológicamente cómodo ayuda a reducir la influencia del miedo.",
            },
            {
              type: "list",
              items: [
                "El miedo suele manifestarse como el cierre prematuro de una operación ganadora",
                "Un volumen de posición demasiado grande intensifica el miedo y dificulta seguir el plan",
                "Un tamaño de riesgo por operación cómodo reduce la presión emocional del miedo",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cómo suele afectar el miedo a la gestión de una operación ganadora?",
              options: [
                "El trader la cierra demasiado pronto ante la más mínima caída",
                "El trader aumenta el volumen de la posición",
                "El trader mantiene la operación mucho más tiempo del previsto",
              ],
              correctAnswer: "El trader la cierra demasiado pronto ante la más mínima caída",
            },
            {
              prompt: "¿Qué intensifica el miedo en la gestión de una posición abierta?",
              options: [
                "Llevar un diario de trading",
                "Un volumen de posición demasiado grande en relación con el depósito",
                "Un riesgo definido de antemano del 1-2% del depósito",
              ],
              correctAnswer: "Un volumen de posición demasiado grande en relación con el depósito",
            },
            {
              prompt: "¿En qué se diferencia fundamentalmente el miedo de la codicia en el trading?",
              options: [
                "El miedo aumenta el volumen de la posición más que la codicia",
                "El miedo y la codicia llevan exactamente a las mismas decisiones",
                "El miedo lleva a actuar con demasiada cautela y a perder operaciones que se ajustan a la estrategia",
              ],
              correctAnswer: "El miedo lleva a actuar con demasiada cautela y a perder operaciones que se ajustan a la estrategia",
            },
          ],
        },
        {
          slug: "distsiplina",
          title: "La disciplina",
          summary: "Por qué seguir las propias reglas es más importante que cualquier operación individual.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La disciplina en el trading es la capacidad de seguir de forma constante las reglas de entrada, salida y gestión de riesgo definidas de antemano, incluso cuando en el momento se quiere actuar de otra manera. Es precisamente la disciplina lo que distingue a un trader con sistema de una persona que opera guiada por las emociones.",
            },
            {
              type: "paragraph",
              text: "Incluso una estrategia de trading perfecta no dará resultados si las reglas se incumplen cada vez que la operación no sigue el plan. La disciplina se construye sobre reglas simples y claramente formuladas, y sobre el análisis regular de si se han respetado.",
            },
            {
              type: "list",
              items: [
                "La disciplina es más importante que el resultado de una operación individual",
                "Incumplir las propias reglas devalúa incluso una buena estrategia",
                "El análisis regular del cumplimiento de las reglas ayuda a fortalecer la disciplina",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué es la disciplina en el contexto del trading?",
              options: [
                "El uso del apalancamiento máximo",
                "El seguimiento constante de reglas definidas de antemano",
                "La capacidad de adivinar la dirección del precio",
              ],
              correctAnswer: "El seguimiento constante de reglas definidas de antemano",
            },
            {
              prompt: "¿Por qué incluso una buena estrategia no funciona sin disciplina?",
              options: [
                "Porque la disciplina no influye en el resultado",
                "Porque las estrategias siempre funcionan igual de bien",
                "Porque las reglas se incumplen justo cuando la operación no sigue el plan",
              ],
              correctAnswer: "Porque las reglas se incumplen justo cuando la operación no sigue el plan",
            },
            {
              prompt: "¿Qué ayuda a fortalecer la disciplina con el tiempo?",
              options: [
                "Renunciar por completo al análisis de las operaciones",
                "El análisis regular de si se han respetado las propias reglas",
                "Cambiar constantemente las reglas después de cada operación",
              ],
              correctAnswer: "El análisis regular de si se han respetado las propias reglas",
            },
          ],
        },
        {
          slug: "emotsionalny-kontrol",
          title: "Control emocional",
          summary: "Técnicas prácticas que ayudan a tomar decisiones basadas en el plan y no en las emociones.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El control emocional es la capacidad de reconocer el estado emocional (euforia, miedo, irritación tras una pérdida) y no permitir que influya directamente en las decisiones de trading. No se trata de la ausencia de emociones, sino de la capacidad de actuar según el plan a pesar de ellas.",
            },
            {
              type: "paragraph",
              text: "Las herramientas prácticas de control emocional incluyen una pausa antes de entrar en una operación, un límite en el número de operaciones o pérdidas por día, y llevar un diario donde se registre no solo el resultado, sino también el estado emocional del trader en el momento de la operación.",
            },
            {
              type: "list",
              items: [
                "El control emocional consiste en gestionar la reacción ante las emociones, no en su ausencia",
                "Un límite diario en el número de operaciones o pérdidas reduce la influencia del tilt",
                "Registrar el estado emocional en el diario ayuda a identificar errores recurrentes",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué se entiende por control emocional en el trading?",
              options: [
                "La ausencia total de cualquier emoción durante la operativa",
                "La capacidad de predecir las emociones de otros traders",
                "La capacidad de actuar según el plan a pesar de las emociones, no su ausencia total",
              ],
              correctAnswer: "La capacidad de actuar según el plan a pesar de las emociones, no su ausencia total",
            },
            {
              prompt: "¿Cómo ayuda al trader un límite diario en el número de operaciones?",
              options: [
                "Elimina por completo la necesidad del stop-loss",
                "Garantiza ganancias al final del día",
                "Reduce el riesgo de una serie de decisiones emocionales seguidas (tilt)",
              ],
              correctAnswer: "Reduce el riesgo de una serie de decisiones emocionales seguidas (tilt)",
            },
            {
              prompt: "¿Para qué registrar el estado emocional durante la operación en el diario de trading?",
              options: [
                "Es un requisito del exchange para abrir la operación",
                "No ayuda en absoluto al análisis de la operativa",
                "Para identificar errores emocionales recurrentes en el futuro",
              ],
              correctAnswer: "Para identificar errores emocionales recurrentes en el futuro",
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
          summary: "Índice de fuerza relativa: cómo medir la sobrecompra y la sobreventa de un activo.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El RSI (Relative Strength Index) es un oscilador que mide la velocidad y la magnitud de los cambios recientes de precio en una escala de 0 a 100. Los valores por encima de 70 se consideran tradicionalmente zona de sobrecompra, y por debajo de 30, zona de sobreventa, aunque en una tendencia fuerte el RSI puede permanecer mucho tiempo en esas zonas.",
            },
            {
              type: "paragraph",
              text: "Además de las zonas de sobrecompra/sobreventa, los traders utilizan las divergencias del RSI: si el precio marca un nuevo máximo pero el RSI no, esto puede indicar un debilitamiento del impulso. El RSI rara vez se usa de forma aislada y normalmente se combina con el análisis de la estructura del mercado.",
            },
            {
              type: "list",
              items: [
                "RSI por encima de 70: potencial sobrecompra; por debajo de 30: sobreventa",
                "En una tendencia fuerte, el RSI puede permanecer mucho tiempo en una zona extrema sin revertir",
                "La divergencia entre el precio y el RSI puede indicar un debilitamiento de la tendencia",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué rango de valores se mide el RSI?",
              options: [
                "De -1 a 1",
                "De 0 a 10.000",
                "De 0 a 100",
              ],
              correctAnswer: "De 0 a 100",
            },
            {
              prompt: "¿Qué significa tradicionalmente un valor de RSI por encima de 70?",
              options: [
                "Una posible zona de sobrecompra",
                "La ausencia de volumen de negociación",
                "Un giro garantizado del precio a la baja",
              ],
              correctAnswer: "Una posible zona de sobrecompra",
            },
            {
              prompt: "¿Qué puede indicar la divergencia entre el precio y el RSI?",
              options: [
                "Un error técnico del indicador",
                "Un cambio del exchange donde cotiza el activo",
                "Un debilitamiento del impulso actual del movimiento",
              ],
              correctAnswer: "Un debilitamiento del impulso actual del movimiento",
            },
          ],
        },
        {
          slug: "macd",
          title: "MACD",
          summary: "El indicador de convergencia-divergencia de medias móviles y sus señales de cruce y divergencia.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El MACD (Moving Average Convergence Divergence) se construye a partir de la diferencia entre dos medias móviles exponenciales (normalmente de 12 y 26 periodos) y una línea de señal (una EMA de 9 periodos del propio MACD). El histograma muestra la diferencia entre el MACD y la línea de señal.",
            },
            {
              type: "paragraph",
              text: "Las principales señales del MACD son el cruce de la línea MACD y la línea de señal (posible cambio de impulso) y el cruce de la línea cero (cambio de dirección de la tendencia). Al igual que el RSI, el MACD puede mostrar divergencias con el precio, lo que a menudo se usa como confirmación adicional.",
            },
            {
              type: "list",
              items: [
                "El MACD se construye a partir de la diferencia entre dos EMA y una línea de señal",
                "El cruce del MACD y la línea de señal es una de las principales señales de trading",
                "El cruce de la línea cero suele asociarse con un cambio de dirección de la tendencia",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se basa el indicador MACD?",
              options: [
                "En el volumen de interés abierto",
                "En la diferencia entre dos medias móviles exponenciales",
                "En el número de wallets activas en la red",
              ],
              correctAnswer: "En la diferencia entre dos medias móviles exponenciales",
            },
            {
              prompt: "¿Qué muestra el histograma del MACD?",
              options: [
                "La diferencia entre la línea MACD y la línea de señal",
                "El número de posiciones abiertas en el exchange",
                "El volumen total de negociación del día",
              ],
              correctAnswer: "La diferencia entre la línea MACD y la línea de señal",
            },
            {
              prompt: "¿Con qué suele asociarse el cruce de la línea MACD del nivel cero?",
              options: [
                "Con un cambio de dirección de la tendencia",
                "Con un cambio en la comisión del exchange",
                "Con el listado de un nuevo token",
              ],
              correctAnswer: "Con un cambio de dirección de la tendencia",
            },
          ],
        },
        {
          slug: "ema",
          title: "EMA",
          summary: "La media móvil exponencial y por qué reacciona más rápido al precio que la simple.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La EMA (Exponential Moving Average) es una media móvil que otorga un mayor peso a los precios más recientes, por lo que reacciona más rápido a los cambios de precio en comparación con la media móvil simple (SMA). Esto hace que la EMA sea más sensible, pero también más propensa a señales falsas en un mercado lateral.",
            },
            {
              type: "paragraph",
              text: "Los traders suelen usar varias EMA de diferentes periodos al mismo tiempo (por ejemplo, 20 y 50) para determinar la dirección de la tendencia y las zonas de soporte/resistencia dinámicas. El cruce de la EMA rápida y la lenta es una señal popular, aunque rezagada.",
            },
            {
              type: "list",
              items: [
                "La EMA otorga más peso a los precios recientes en comparación con la SMA",
                "Varias EMA de diferentes periodos ayudan a evaluar la dirección de la tendencia",
                "El cruce de la EMA rápida y la lenta es una señal rezagada, pero popular",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se diferencia la EMA de la media móvil simple (SMA)?",
              options: [
                "La EMA no tiene en cuenta el precio en absoluto",
                "La EMA otorga más peso a los precios recientes y reacciona más rápido a los cambios",
                "La EMA siempre se calcula solo a partir del volumen",
              ],
              correctAnswer: "La EMA otorga más peso a los precios recientes y reacciona más rápido a los cambios",
            },
            {
              prompt: "¿Para qué usan los traders varias EMA de diferentes periodos al mismo tiempo?",
              options: [
                "Esto no aporta ninguna información útil",
                "Para evaluar la dirección de la tendencia y las zonas de soporte/resistencia dinámicas",
                "Para reducir la comisión del exchange",
              ],
              correctAnswer: "Para evaluar la dirección de la tendencia y las zonas de soporte/resistencia dinámicas",
            },
            {
              prompt: "¿Qué desventaja tiene el cruce de la EMA rápida y la lenta como señal?",
              options: [
                "La señal no se puede ver en el gráfico",
                "La señal aparece antes de que comience el movimiento",
                "La señal se retrasa respecto al movimiento actual del precio",
              ],
              correctAnswer: "La señal se retrasa respecto al movimiento actual del precio",
            },
          ],
        },
        {
          slug: "sma",
          title: "SMA",
          summary: "La media móvil simple como base para determinar la dirección general de la tendencia.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "La SMA (Simple Moving Average) es una media móvil simple, calculada como el promedio aritmético del precio de cierre a lo largo de N periodos. A diferencia de la EMA, en la SMA todos los periodos tienen el mismo peso, por lo que reacciona más lentamente a los cambios de precio y suaviza el ruido con mayor intensidad.",
            },
            {
              type: "paragraph",
              text: "La SMA se usa a menudo para determinar la dirección general y de más largo plazo de la tendencia; por ejemplo, la posición del precio respecto a la SMA 200 en el timeframe diario se utiliza ampliamente como referencia de un mercado alcista o bajista en general.",
            },
            {
              type: "list",
              items: [
                "La SMA es el promedio aritmético del precio durante un número determinado de periodos",
                "La SMA suaviza el ruido con más intensidad que la EMA, pero reacciona más lento",
                "La SMA 200 en el gráfico diario suele usarse como referencia de la tendencia global",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cómo se calcula la SMA?",
              options: [
                "Como el promedio aritmético del precio de cierre durante un número determinado de periodos",
                "Como la diferencia entre el máximo y el mínimo del día",
                "Como la suma de todos los volúmenes de negociación del mes",
              ],
              correctAnswer: "Como el promedio aritmético del precio de cierre durante un número determinado de periodos",
            },
            {
              prompt: "¿En qué se diferencia la SMA de la EMA en cuanto a la velocidad de reacción al precio?",
              options: [
                "No hay diferencia en la velocidad de reacción",
                "La SMA siempre reacciona más rápido que la EMA",
                "La SMA reacciona más lento porque todos los periodos tienen el mismo peso",
              ],
              correctAnswer: "La SMA reacciona más lento porque todos los periodos tienen el mismo peso",
            },
            {
              prompt: "¿Para qué se suele usar la SMA 200 en el timeframe diario?",
              options: [
                "Para calcular la comisión del exchange",
                "Para determinar el momento exacto del listado de un token",
                "Como referencia de un mercado alcista o bajista general",
              ],
              correctAnswer: "Como referencia de un mercado alcista o bajista general",
            },
          ],
        },
        {
          slug: "vwap",
          title: "VWAP",
          summary: "El precio medio ponderado por volumen y su papel como referencia del precio «justo» del día.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El VWAP (Volume Weighted Average Price) es el precio medio de un activo durante un periodo, ponderado por el volumen de negociación en cada nivel de precio. A diferencia de la media móvil simple, el VWAP muestra a qué precio se ejecutó realmente el grueso del volumen de operaciones.",
            },
            {
              type: "paragraph",
              text: "Los traders institucionales suelen usar el VWAP como referencia del precio «justo» del día: un precio por encima del VWAP se considera relativamente caro, y uno por debajo, relativamente barato. El VWAP también se utiliza como nivel dinámico de soporte/resistencia dentro de la sesión de negociación.",
            },
            {
              type: "list",
              items: [
                "El VWAP tiene en cuenta no solo el precio, sino también el volumen en cada nivel",
                "Un precio por encima del VWAP se interpreta como relativamente caro, y uno por debajo, como relativamente barato",
                "El VWAP suele recalcularse desde cero al comienzo de cada sesión de negociación",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué tiene en cuenta el VWAP a diferencia de la media móvil simple?",
              options: [
                "Solo el precio máximo del día",
                "Solo el precio de cierre del día anterior",
                "El volumen de negociación en cada nivel de precio",
              ],
              correctAnswer: "El volumen de negociación en cada nivel de precio",
            },
            {
              prompt: "¿Cómo se interpreta un precio que está por encima del VWAP?",
              options: [
                "Como una señal de compra garantizada",
                "Como una señal de que la negociación se ha detenido",
                "Como relativamente caro en comparación con el nivel medio ponderado por volumen",
              ],
              correctAnswer: "Como relativamente caro en comparación con el nivel medio ponderado por volumen",
            },
            {
              prompt: "¿Quién suele guiarse por el VWAP al ejecutar órdenes grandes?",
              options: [
                "Solo los traders principiantes",
                "Solo los responsables de marketing de los proyectos",
                "Los traders institucionales",
              ],
              correctAnswer: "Los traders institucionales",
            },
          ],
        },
        {
          slug: "atr",
          title: "ATR",
          summary: "El rango verdadero medio como herramienta para medir la volatilidad al colocar stops.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "El ATR (Average True Range) mide la volatilidad media de un activo durante un periodo determinado, teniendo en cuenta los gaps entre velas. No es un indicador de dirección, sino de amplitud del movimiento: un ATR alto significa que el precio realiza oscilaciones grandes, y uno bajo, que el mercado está relativamente tranquilo.",
            },
            {
              type: "paragraph",
              text: "El ATR se usa a menudo para calcular el tamaño del stop-loss adaptado a la volatilidad actual: en lugar de un porcentaje fijo, el trader coloca el stop a una distancia múltiplo del ATR, lo que reduce la probabilidad de ser expulsado prematuramente por el ruido normal del mercado.",
            },
            {
              type: "list",
              items: [
                "El ATR mide la amplitud del movimiento del precio, no su dirección",
                "Un ATR alto indica una mayor volatilidad del activo",
                "Un stop-loss calculado a partir del ATR se adapta a la volatilidad actual del mercado",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué mide el indicador ATR?",
              options: [
                "El número de direcciones activas en la red",
                "La dirección de la tendencia",
                "La volatilidad media (amplitud del movimiento) del activo",
              ],
              correctAnswer: "La volatilidad media (amplitud del movimiento) del activo",
            },
            {
              prompt: "¿Qué indica un valor alto de ATR?",
              options: [
                "Un próximo deslistado del activo",
                "Una baja liquidez del exchange",
                "Una mayor volatilidad y grandes oscilaciones del precio",
              ],
              correctAnswer: "Una mayor volatilidad y grandes oscilaciones del precio",
            },
            {
              prompt: "¿Para qué usan los traders el ATR en la práctica con frecuencia?",
              options: [
                "Para determinar el precio exacto de listado de un token",
                "Para calcular la comisión de la red",
                "Para calcular el tamaño del stop-loss teniendo en cuenta la volatilidad actual",
              ],
              correctAnswer: "Para calcular el tamaño del stop-loss teniendo en cuenta la volatilidad actual",
            },
          ],
        },
        {
          slug: "bollinger-bands",
          title: "Bollinger Bands",
          summary: "Las Bandas de Bollinger como indicador de volatilidad y de la carestía relativa del precio.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Las Bollinger Bands están formadas por una media móvil (normalmente la SMA 20) y dos bandas separadas de ella a una distancia igual a un número determinado de desviaciones estándar del precio. El ancho de las bandas cambia dinámicamente junto con la volatilidad: se expanden en periodos de movimientos fuertes y se contraen en periodos de calma.",
            },
            {
              type: "paragraph",
              text: "El estrechamiento de las bandas («squeeze») suele preceder a un movimiento fuerte del precio en cualquier dirección, y que el precio toque la banda superior o inferior no es en sí mismo una señal de giro: en una tendencia fuerte, el precio puede moverse a lo largo de la banda durante mucho tiempo.",
            },
            {
              type: "list",
              items: [
                "Las bandas se construyen alrededor de una media móvil según la desviación estándar",
                "El estrechamiento de las bandas suele preceder a un movimiento fuerte del precio",
                "Tocar una banda no garantiza un giro, especialmente en una tendencia fuerte",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿De qué están formadas las Bollinger Bands?",
              options: [
                "De tres líneas de volumen independientes",
                "De una media móvil y dos bandas basadas en la desviación estándar",
                "De una sola línea de precio de cierre",
              ],
              correctAnswer: "De una media móvil y dos bandas basadas en la desviación estándar",
            },
            {
              prompt: "¿Qué suele preceder a un movimiento fuerte del precio según las Bollinger Bands?",
              options: [
                "El estrechamiento (squeeze) de las bandas",
                "La desaparición total de las bandas del gráfico",
                "La expansión máxima de las bandas",
              ],
              correctAnswer: "El estrechamiento (squeeze) de las bandas",
            },
            {
              prompt: "¿Significa que el precio toque la banda superior de Bollinger un giro garantizado a la baja?",
              options: [
                "Sí, pero solo en el timeframe semanal",
                "No, en una tendencia fuerte el precio puede moverse a lo largo de la banda durante mucho tiempo",
                "Sí, siempre es una señal de giro cien por cien segura",
              ],
              correctAnswer: "No, en una tendencia fuerte el precio puede moverse a lo largo de la banda durante mucho tiempo",
            },
          ],
        },
      ],
    },
    {
      title: "Análisis de volumen",
      lessons: [
        {
          slug: "volume",
          title: "Volume",
          summary: "El volumen de operaciones como confirmación de la fuerza del movimiento del precio.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Volume (volumen) muestra la cantidad de un activo negociada durante un período. El volumen es uno de los pocos indicadores que no se deriva del precio, sino que refleja la actividad real de los participantes del mercado, por lo que se usa a menudo como confirmación independiente del movimiento.",
            },
            {
              type: "paragraph",
              text: "Un movimiento de precio con volumen alto se considera más fiable que el mismo movimiento con volumen bajo: una ruptura de nivel sin aumento de volumen suele resultar falsa. Los picos bruscos de volumen también suelen coincidir con puntos clave de giro del mercado.",
            },
            {
              type: "list",
              items: [
                "El volumen refleja la actividad real de los participantes, no una derivada del propio precio",
                "Una ruptura de nivel con volumen bajo suele resultar falsa con más frecuencia",
                "Los picos bruscos de volumen suelen coincidir con puntos de giro del mercado",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Por qué se considera el volumen una confirmación independiente del movimiento del precio?",
              options: [
                "Porque el volumen siempre crece junto con el precio",
                "Refleja la actividad real de los participantes, no se deriva del propio precio",
                "Porque el volumen se mide en porcentaje de la capitalización",
              ],
              correctAnswer: "Refleja la actividad real de los participantes, no se deriva del propio precio",
            },
            {
              prompt: "¿Qué ruptura de nivel se considera menos fiable?",
              options: [
                "La fiabilidad de la ruptura no depende del volumen",
                "La ruptura con volumen bajo",
                "La ruptura con volumen alto",
              ],
              correctAnswer: "La ruptura con volumen bajo",
            },
            {
              prompt: "¿Con qué suelen coincidir los picos bruscos de volumen?",
              options: [
                "Con el cambio de nombre del token",
                "Con puntos clave de giro del mercado",
                "Solo con fallos técnicos del exchange",
              ],
              correctAnswer: "Con puntos clave de giro del mercado",
            },
          ],
        },
        {
          slug: "delta",
          title: "Delta",
          summary: "La diferencia entre el volumen de compras y ventas como indicador de presión sobre el precio.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Delta es la diferencia entre el volumen de compras agresivas (mediante órdenes de mercado de compra) y ventas agresivas durante un período. Una delta positiva significa predominio de compradores; una negativa, de vendedores, independientemente de hacia dónde se haya movido finalmente el precio.",
            },
            {
              type: "paragraph",
              text: "Una divergencia entre la delta y el movimiento del precio —por ejemplo, el precio sube pero la delta es negativa— puede indicar que la subida no se debe a compras de mercado, sino al cierre de posiciones cortas, y que dicha subida es menos sólida.",
            },
            {
              type: "list",
              items: [
                "Una delta positiva significa predominio de compras agresivas sobre ventas",
                "La delta mide la presión de los participantes, no el cambio final del precio",
                "La divergencia entre precio y delta puede indicar que el movimiento es poco sólido",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué muestra una delta positiva?",
              options: [
                "Una subida garantizada del precio en el futuro",
                "La ausencia de actividad de trading",
                "El predominio de compras agresivas sobre las ventas",
              ],
              correctAnswer: "El predominio de compras agresivas sobre las ventas",
            },
            {
              prompt: "¿Qué puede indicar una subida del precio con delta negativa?",
              options: [
                "Que la delta se está calculando de forma incorrecta",
                "Un error técnico en el exchange",
                "Que la subida puede deberse al cierre de posiciones cortas, no a nuevas compras",
              ],
              correctAnswer: "Que la subida puede deberse al cierre de posiciones cortas, no a nuevas compras",
            },
            {
              prompt: "¿Qué mide exactamente la delta de volumen?",
              options: [
                "El número de holders del token",
                "La capitalización total del activo",
                "La presión de compradores y vendedores mediante órdenes agresivas",
              ],
              correctAnswer: "La presión de compradores y vendedores mediante órdenes agresivas",
            },
          ],
        },
        {
          slug: "open-interest",
          title: "Open Interest",
          summary: "El interés abierto como indicador de la cantidad de posiciones activas en el mercado de derivados.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Open Interest (interés abierto, OI) es el número total de contratos abiertos, aún no cerrados, en el mercado de derivados (futuros, perpetuos). A diferencia del volumen, que se reinicia cada período, el OI muestra la cantidad acumulada de posiciones activas.",
            },
            {
              type: "paragraph",
              text: "Un aumento del OI junto con un aumento del precio suele significar entrada de capital nuevo y fortalecimiento de la tendencia. Una subida del precio con OI decreciente suele indicar cierre de posiciones cortas, no nueva demanda. Una caída brusca del OI suele estar relacionada con liquidaciones masivas.",
            },
            {
              type: "list",
              items: [
                "El OI muestra la cantidad de contratos abiertos aún no cerrados",
                "Un aumento simultáneo de precio y OI suele indicar entrada de capital nuevo",
                "Una caída brusca del OI suele acompañar a liquidaciones masivas",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué muestra el Open Interest?",
              options: [
                "El número total de contratos abiertos, aún no cerrados",
                "El número de usuarios registrados en el exchange",
                "El volumen total de todas las operaciones en la historia del exchange",
              ],
              correctAnswer: "El número total de contratos abiertos, aún no cerrados",
            },
            {
              prompt: "¿Qué suele indicar un aumento simultáneo del precio y del Open Interest?",
              options: [
                "Entrada de capital nuevo y fortalecimiento de la tendencia",
                "Una caída de la volatilidad hasta cero",
                "Un fallo técnico del exchange",
              ],
              correctAnswer: "Entrada de capital nuevo y fortalecimiento de la tendencia",
            },
            {
              prompt: "¿Con qué suele relacionarse una caída brusca del Open Interest?",
              options: [
                "Con la incorporación de un nuevo token al listado",
                "Con liquidaciones masivas de posiciones abiertas",
                "Con una actualización programada del exchange",
              ],
              correctAnswer: "Con liquidaciones masivas de posiciones abiertas",
            },
          ],
        },
        {
          slug: "funding-rate",
          title: "Funding Rate",
          summary: "La tasa de financiación en los futuros perpetuos y lo que revela sobre el sentimiento del mercado.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Funding Rate es un pago periódico entre los holders de posiciones largas y cortas en futuros perpetuos, un mecanismo que mantiene el precio del contrato cerca del precio del mercado spot. Un funding positivo significa que los largos pagan a los cortos; uno negativo, lo contrario.",
            },
            {
              type: "paragraph",
              text: "Un funding positivo persistentemente alto suele indicar un mercado sobrecalentado con exceso de posiciones largas, lo que aumenta el riesgo de liquidaciones en cadena ante un giro bajista. Un funding fuertemente negativo, en cambio, puede señalar un pesimismo excesivo y potencial de rebote.",
            },
            {
              type: "list",
              items: [
                "El Funding Rate mantiene el precio del futuro perpetuo cerca del precio spot",
                "Un funding positivo persistentemente alto indica un mercado sobrecalentado por posiciones largas",
                "Un funding fuertemente negativo puede indicar un pesimismo excesivo del mercado",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué función cumple el Funding Rate en los futuros perpetuos?",
              options: [
                "Determina la comisión del exchange por retiro de fondos",
                "Establece el apalancamiento máximo permitido",
                "Mantiene el precio del contrato cerca del precio del mercado spot",
              ],
              correctAnswer: "Mantiene el precio del contrato cerca del precio del mercado spot",
            },
            {
              prompt: "¿Qué significa un funding positivo persistentemente alto?",
              options: [
                "Que el mercado está sobrecalentado por exceso de posiciones largas",
                "Que el precio del activo subirá garantizadamente aún más",
                "Que no hay ningún trader operando en el mercado",
              ],
              correctAnswer: "Que el mercado está sobrecalentado por exceso de posiciones largas",
            },
            {
              prompt: "¿Quién le paga a quién cuando el Funding Rate es positivo?",
              options: [
                "El exchange paga por igual a todos los traders",
                "Los holders de posiciones cortas pagan a los de posiciones largas",
                "Los holders de posiciones largas pagan a los de posiciones cortas",
              ],
              correctAnswer: "Los holders de posiciones largas pagan a los de posiciones cortas",
            },
          ],
        },
        {
          slug: "liquidations",
          title: "Liquidations",
          summary: "El cierre forzoso de posiciones apalancadas y por qué las liquidaciones amplifican el movimiento del precio.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Liquidations (liquidaciones) es el cierre forzoso de una posición por parte del exchange cuando la pérdida alcanza un nivel en el que el margen ya no es suficiente para mantenerla. Las liquidaciones ocurren al precio de mercado y no dependen de la voluntad del trader.",
            },
            {
              type: "paragraph",
              text: "Las liquidaciones masivas en una misma dirección (liquidaciones en cascada) amplifican por sí mismas el movimiento del precio: cerrar posiciones largas genera presión vendedora adicional, y cerrar cortas, demanda adicional, lo que explica los movimientos bruscos y rápidos del precio durante alta volatilidad.",
            },
            {
              type: "list",
              items: [
                "Una liquidación es el cierre forzoso de una posición por el exchange por falta de margen",
                "Las liquidaciones en cascada amplifican y aceleran el movimiento del precio en una dirección",
                "Los mapas de liquidaciones se usan para evaluar zonas de mayor riesgo",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué ocurre al liquidarse una posición?",
              options: [
                "El trader cierra la posición voluntariamente con ganancia",
                "El exchange cierra la posición forzosamente por falta de margen",
                "El exchange duplica automáticamente el volumen de la posición",
              ],
              correctAnswer: "El exchange cierra la posición forzosamente por falta de margen",
            },
            {
              prompt: "¿Por qué las liquidaciones en cascada amplifican el movimiento del precio?",
              options: [
                "Las liquidaciones siempre detienen por completo el movimiento del precio",
                "El cierre de posiciones genera presión adicional en la dirección del movimiento",
                "Las liquidaciones no influyen en absoluto en el precio",
              ],
              correctAnswer: "El cierre de posiciones genera presión adicional en la dirección del movimiento",
            },
            {
              prompt: "¿Para qué usan los traders los mapas (heatmap) de liquidaciones?",
              options: [
                "Para calcular los impuestos sobre las ganancias",
                "Para evaluar zonas de mayor riesgo de un movimiento brusco del precio",
                "Para conocer la fecha exacta del próximo halving",
              ],
              correctAnswer: "Para evaluar zonas de mayor riesgo de un movimiento brusco del precio",
            },
          ],
        },
      ],
    },
    {
      title: "Análisis on-chain",
      lessons: [
        {
          slug: "koshelki-kitov",
          title: "Carteras de ballenas",
          summary: "Cómo el seguimiento de carteras grandes ayuda a evaluar el sentimiento de los grandes holders.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Las «ballenas» son direcciones que poseen una parte considerable de la oferta total de un activo. Dado que todas las transacciones en la blockchain son públicas, los traders siguen los movimientos de esas carteras: por ejemplo, grandes transferencias a exchanges (posible preparación para vender) o, al contrario, de exchanges hacia almacenamiento frío.",
            },
            {
              type: "paragraph",
              text: "Es importante tener en cuenta el contexto: una transferencia desde un exchange no siempre significa holding a largo plazo, y una transferencia hacia un exchange no siempre implica venta inmediata; puede ser una redistribución entre carteras del mismo propietario. Los datos sobre ballenas son una señal complementaria, no autónoma.",
            },
            {
              type: "list",
              items: [
                "Las carteras de ballenas se pueden seguir gracias a la publicidad de las transacciones en blockchain",
                "Una gran transferencia hacia un exchange suele interpretarse como posible preparación para vender",
                "Los datos sobre movimientos de ballenas conviene usarlos junto con otros tipos de análisis, no de forma aislada",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Por qué es posible seguir los movimientos de las carteras de ballenas?",
              options: [
                "Esto solo es posible para los reguladores",
                "Todas las transacciones en la blockchain son públicamente accesibles",
                "Los exchanges publican a diario los datos personales de sus clientes",
              ],
              correctAnswer: "Todas las transacciones en la blockchain son públicamente accesibles",
            },
            {
              prompt: "¿Cómo suele interpretarse una gran transferencia de tokens hacia un exchange?",
              options: [
                "Como una señal garantizada de holding a largo plazo",
                "Como un error técnico de la red",
                "Como una posible preparación para vender",
              ],
              correctAnswer: "Como una posible preparación para vender",
            },
            {
              prompt: "¿Cuál es la mejor manera de usar los datos sobre movimientos de ballenas?",
              options: [
                "Como única señal suficiente para entrar en una operación",
                "Estos datos son inútiles y no conviene tenerlos en cuenta",
                "Como señal complementaria junto con otros tipos de análisis",
              ],
              correctAnswer: "Como señal complementaria junto con otros tipos de análisis",
            },
          ],
        },
        {
          slug: "birzhevye-pritoki-i-ottoki",
          title: "Entradas y salidas de exchanges",
          summary: "Qué significa el movimiento de monedas hacia y desde los exchanges para la posible presión sobre el precio.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Las entradas a exchanges (exchange inflow) son el volumen de monedas transferidas a carteras de exchanges; las salidas (exchange outflow), el volumen de monedas retiradas de exchanges. Un aumento de las entradas suele interpretarse como un aumento de la potencial presión vendedora; un aumento de las salidas, como acumulación y reducción de la oferta disponible.",
            },
            {
              type: "paragraph",
              text: "Una salida neta sostenida de los exchanges durante un período prolongado suele asociarse con una fase de acumulación y una reducción de la oferta líquida disponible para la venta. Una entrada brusca de una gran cantidad, en cambio, suele preceder a volatilidad local.",
            },
            {
              type: "list",
              items: [
                "Las entradas a exchanges suelen asociarse con un aumento de la potencial oferta de venta",
                "Una salida sostenida de exchanges suele asociarse con una fase de acumulación",
                "Una entrada brusca de una gran cantidad suele preceder a volatilidad local",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué se denomina entrada a exchange (exchange inflow)?",
              options: [
                "El volumen de monedas transferidas a carteras de exchanges",
                "El número de nuevos usuarios del exchange",
                "El volumen de monedas minadas en un día",
              ],
              correctAnswer: "El volumen de monedas transferidas a carteras de exchanges",
            },
            {
              prompt: "¿Con qué fase del mercado suele asociarse una salida sostenida de monedas de los exchanges?",
              options: [
                "Con el listado de un nuevo token",
                "Con una fase de acumulación",
                "Con una fase de venta masiva por pánico",
              ],
              correctAnswer: "Con una fase de acumulación",
            },
            {
              prompt: "¿Qué suele preceder a una entrada brusca de una gran cantidad hacia un exchange?",
              options: [
                "Una parada total de las operaciones",
                "Volatilidad local del precio",
                "Una reducción automática de las comisiones del exchange",
              ],
              correctAnswer: "Volatilidad local del precio",
            },
          ],
        },
        {
          slug: "tvl",
          title: "TVL",
          summary: "El valor total bloqueado como indicador de la confianza en un protocolo DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "TVL (Total Value Locked) es el valor total de los activos bloqueados en los contratos inteligentes de un protocolo: en pools de liquidez, staking, plataformas de préstamo. El TVL se usa a menudo como indicador del tamaño y la confianza de los usuarios en un protocolo o en toda una red blockchain.",
            },
            {
              type: "paragraph",
              text: "Es importante tener en cuenta que el aumento del TVL puede deberse no solo a la entrada de capital nuevo, sino también al aumento del precio de los activos ya bloqueados. Una caída brusca del TVL, en cambio, puede indicar tanto salida de capital como caída del precio de los tokens bloqueados.",
            },
            {
              type: "list",
              items: [
                "El TVL mide el valor de los activos bloqueados en los contratos inteligentes de un protocolo",
                "El aumento del TVL puede reflejar tanto entrada de capital nuevo como subida del precio de los activos",
                "Una caída brusca del TVL suele considerarse una señal de alerta para el protocolo",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué mide el indicador TVL?",
              options: [
                "El número de desarrolladores que trabajan en el proyecto",
                "El número total de transacciones de la red en toda su historia",
                "El valor total de los activos bloqueados en los contratos inteligentes de un protocolo",
              ],
              correctAnswer: "El valor total de los activos bloqueados en los contratos inteligentes de un protocolo",
            },
            {
              prompt: "¿Por qué puede subir el TVL aunque no entre capital nuevo?",
              options: [
                "El TVL no puede subir sin entrada de capital nuevo",
                "Por la subida del precio de los activos ya bloqueados",
                "Por la caída de la capitalización general del mercado",
              ],
              correctAnswer: "Por la subida del precio de los activos ya bloqueados",
            },
            {
              prompt: "¿Cómo suelen interpretar los traders una caída brusca del TVL de un protocolo?",
              options: [
                "El TVL no tiene ninguna relación con el estado del protocolo",
                "Como una posible señal de alerta (salida de capital o caída del precio de los activos)",
                "Como una señal inequívocamente positiva para comprar",
              ],
              correctAnswer: "Como una posible señal de alerta (salida de capital o caída del precio de los activos)",
            },
          ],
        },
        {
          slug: "stablecoins",
          title: "Stablecoins",
          summary: "El papel de las stablecoins en el mercado cripto y sus reservas en exchanges como indicador de demanda potencial.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Las stablecoins son criptomonedas cuyo valor está vinculado a un activo estable, casi siempre al dólar estadounidense (USDT, USDC). Sirven como principal «unidad de cuenta» del mercado cripto, permitiendo pasar entre activos y fijar el valor sin salir hacia el sistema bancario tradicional.",
            },
            {
              type: "paragraph",
              text: "El volumen total de stablecoins en carteras de exchanges suele considerarse un indicador de «pólvora seca»: la capacidad de compra potencial del mercado. Un aumento de las reservas de stablecoins en los exchanges puede preceder a una entrada de demanda hacia activos de riesgo.",
            },
            {
              type: "list",
              items: [
                "Las stablecoins están vinculadas a un activo estable, generalmente el dólar estadounidense",
                "Cumplen la función de unidad de cuenta y reserva de valor dentro del mercado cripto",
                "Un aumento de las reservas de stablecoins en exchanges suele asociarse con un potencial aumento de la capacidad de compra",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué distingue a las stablecoins de la mayoría de las demás criptomonedas?",
              options: [
                "No pueden transferirse entre carteras",
                "Solo existen fuera de la blockchain",
                "Su valor está vinculado a un activo estable, generalmente el dólar estadounidense",
              ],
              correctAnswer: "Su valor está vinculado a un activo estable, generalmente el dólar estadounidense",
            },
            {
              prompt: "¿Qué función cumplen las stablecoins en el mercado cripto?",
              options: [
                "De unidad de cuenta y reserva de valor dentro del mercado",
                "De sustituto del mecanismo de consenso de la blockchain",
                "De único medio de minería",
              ],
              correctAnswer: "De unidad de cuenta y reserva de valor dentro del mercado",
            },
            {
              prompt: "¿Qué puede indicar un aumento de las reservas de stablecoins en los exchanges?",
              options: [
                "Un potencial aumento de la capacidad de compra del mercado",
                "Una parada total de las operaciones en el exchange",
                "Un fallo técnico de la stablecoin",
              ],
              correctAnswer: "Un potencial aumento de la capacidad de compra del mercado",
            },
          ],
        },
        {
          slug: "onchain-metriki",
          title: "Métricas on-chain",
          summary: "Repaso de las métricas de red clave: direcciones activas, comisiones de red y su aplicación en el análisis.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Las métricas on-chain son datos que se pueden obtener directamente de la blockchain: número de direcciones activas, volumen de transferencias, comisiones de red, número de carteras nuevas. A diferencia de los datos de mercado (precio, volumen del exchange), reflejan la actividad real de la red.",
            },
            {
              type: "paragraph",
              text: "Un aumento del número de direcciones activas y del volumen de transferencias con un precio relativamente estable puede indicar un uso fundamental creciente de la red. Estas métricas resultan especialmente útiles para el análisis de medio y largo plazo, más que para determinar el momento exacto de entrada.",
            },
            {
              type: "list",
              items: [
                "Las métricas on-chain reflejan la actividad real de la red, no solo el precio en el exchange",
                "Un aumento de direcciones activas con precio estable puede indicar un uso fundamental creciente",
                "El análisis on-chain se adapta mejor a conclusiones de medio y largo plazo que a un timing preciso",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se diferencian las métricas on-chain de los datos puramente de mercado como el precio y el volumen del exchange?",
              options: [
                "Se obtienen directamente de la blockchain y reflejan la actividad real de la red",
                "Solo están disponibles para los propietarios del exchange",
                "Coinciden por completo con los datos de mercado",
              ],
              correctAnswer: "Se obtienen directamente de la blockchain y reflejan la actividad real de la red",
            },
            {
              prompt: "¿Qué puede indicar un aumento de direcciones activas de la red con un precio relativamente estable?",
              options: [
                "Una avería técnica de la blockchain",
                "Una parada total de las transacciones",
                "Un uso fundamental creciente de la red",
              ],
              correctAnswer: "Un uso fundamental creciente de la red",
            },
            {
              prompt: "¿Para qué horizonte de análisis suelen ser más adecuadas las métricas on-chain?",
              options: [
                "Para el análisis de medio y largo plazo",
                "Las métricas on-chain no tienen ninguna aplicación práctica",
                "Exclusivamente para el timing de entrada con precisión de minutos",
              ],
              correctAnswer: "Para el análisis de medio y largo plazo",
            },
          ],
        },
      ],
    },
    {
      title: "Trading profesional",
      lessons: [
        {
          slug: "torgovy-zhurnal",
          title: "Diario de trading",
          summary: "Por qué registrar cada operación y qué debe incluir cada entrada del diario.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El diario de trading es un registro sistemático de cada operación: motivo de entrada, tamaño de la posición, stop-loss y take-profit, resultado final y estado emocional del trader. Sin un diario, el trader depende de la memoria, que recuerda selectivamente las operaciones exitosas y borra las fallidas.",
            },
            {
              type: "paragraph",
              text: "El análisis regular del diario permite encontrar patrones: por ejemplo, que la mayoría de las pérdidas se concentran en operaciones abiertas sin una señal clara, o que cierta franja horaria es sistemáticamente menos rentable. Esto convierte las sensaciones intuitivas en datos concretos y verificables.",
            },
            {
              type: "list",
              items: [
                "El diario debe registrar el motivo de entrada, no solo el resultado de la operación",
                "El análisis regular del diario ayuda a detectar errores recurrentes",
                "Los datos del diario son más objetivos que la memoria subjetiva del trader",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Por qué debe un trader llevar un diario de trading?",
              options: [
                "El diario solo sirve para la declaración de impuestos",
                "Es un requisito del exchange para poder abrir operaciones",
                "Para registrar las operaciones de forma objetiva en lugar de depender de una memoria selectiva",
              ],
              correctAnswer: "Para registrar las operaciones de forma objetiva en lugar de depender de una memoria selectiva",
            },
            {
              prompt: "¿Qué debe registrarse obligatoriamente en una entrada del diario, además del resultado de la operación?",
              options: [
                "El nombre del dispositivo utilizado",
                "El motivo de la entrada en la operación",
                "Solo la ganancia final en dólares",
              ],
              correctAnswer: "El motivo de la entrada en la operación",
            },
            {
              prompt: "¿Qué aporta el análisis regular del diario de trading?",
              options: [
                "Aumenta automáticamente el volumen del depósito",
                "Garantiza la ausencia de operaciones perdedoras en el futuro",
                "Permite encontrar patrones y errores recurrentes",
              ],
              correctAnswer: "Permite encontrar patrones y errores recurrentes",
            },
          ],
        },
        {
          slug: "sozdanie-strategii",
          title: "Creación de una estrategia",
          summary: "Qué elementos obligatorios componen una estrategia de trading completa.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Una estrategia de trading es un conjunto de reglas claramente descritas: en qué mercado operar, en qué condiciones entrar en una operación, dónde colocar el stop-loss y el take-profit, qué porcentaje del depósito arriesgar. Sin estas reglas definidas de antemano, el trading se convierte en una serie de decisiones aleatorias.",
            },
            {
              type: "paragraph",
              text: "Una buena estrategia debe ser lo bastante concreta como para poder explicarla a otra persona y comprobarla con datos históricos. No tiene que funcionar en el 100% de los casos; lo importante es que las reglas sean reproducibles y que la esperanza matemática sea positiva.",
            },
            {
              type: "list",
              items: [
                "Una estrategia incluye obligatoriamente condiciones de entrada, salida y reglas de gestión de riesgo",
                "Las reglas deben ser lo bastante concretas como para poder comprobarse con datos históricos",
                "El objetivo de la estrategia es una esperanza matemática positiva, no una precisión del 100%",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué debe incluir obligatoriamente la descripción de una estrategia de trading?",
              options: [
                "Una lista de las criptomonedas favoritas del trader",
                "Condiciones de entrada, salida y reglas de gestión de riesgo",
                "Solo la suma de ganancia deseada al mes",
              ],
              correctAnswer: "Condiciones de entrada, salida y reglas de gestión de riesgo",
            },
            {
              prompt: "¿Por qué debe ser concreta una estrategia, en lugar de ambigua?",
              options: [
                "Para ocultarla de otros traders",
                "Para poder explicarla y comprobarla con datos históricos",
                "La ambigüedad de las reglas no tiene ninguna importancia",
              ],
              correctAnswer: "Para poder explicarla y comprobarla con datos históricos",
            },
            {
              prompt: "¿Debe una buena estrategia ser rentable en el 100% de las operaciones?",
              options: [
                "Sí, pero solo en el timeframe diario",
                "Sí, de lo contrario la estrategia se considera inservible",
                "No, lo importante es una esperanza matemática positiva en conjunto",
              ],
              correctAnswer: "No, lo importante es una esperanza matemática positiva en conjunto",
            },
          ],
        },
        {
          slug: "backtest",
          title: "Backtest",
          summary: "Comprobación de una estrategia de trading con datos históricos antes de aplicarla en real.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El backtest es la comprobación de una estrategia de trading con datos históricos: las reglas se aplican a datos de precio pasados para evaluar si la estrategia habría sido rentable. Es una forma de obtener estadísticas de una estrategia sin arriesgar capital real.",
            },
            {
              type: "paragraph",
              text: "El backtest tiene limitaciones: los resultados pasados no garantizan los futuros, y una comprobación descuidada puede llevar a un sobreajuste de las reglas a un período histórico concreto. Aun así, el backtest es un primer paso necesario antes de confiar dinero real a una estrategia.",
            },
            {
              type: "list",
              items: [
                "El backtest permite evaluar una estrategia con datos históricos sin riesgo real",
                "Los resultados pasados de un backtest no garantizan un resultado similar en el futuro",
                "El sobreajuste de las reglas a un período histórico concreto es un error típico del backtesting",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué consiste el backtest de una estrategia de trading?",
              options: [
                "En una encuesta a otros traders sobre la estrategia",
                "En operar en real con un depósito mínimo",
                "En comprobar las reglas de la estrategia con datos históricos de precio",
              ],
              correctAnswer: "En comprobar las reglas de la estrategia con datos históricos de precio",
            },
            {
              prompt: "¿Garantiza un backtest exitoso el mismo resultado en el futuro?",
              options: [
                "No, los resultados pasados no garantizan los futuros",
                "Lo garantiza, pero solo para acciones",
                "Sí, el resultado del backtest siempre se repite en el trading real",
              ],
              correctAnswer: "No, los resultados pasados no garantizan los futuros",
            },
            {
              prompt: "¿Qué es el sobreajuste (overfitting) en el contexto del backtesting?",
              options: [
                "Operar sin stop-loss",
                "Un ajuste excesivo de las reglas a un período histórico concreto",
                "El uso de muy pocos indicadores",
              ],
              correctAnswer: "Un ajuste excesivo de las reglas a un período histórico concreto",
            },
          ],
        },
        {
          slug: "forward-test",
          title: "Forward-test",
          summary: "Comprobación de una estrategia con datos nuevos, aún no usados, después del backtest.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El forward-test es la comprobación de una estrategia en una cuenta real o de demostración hacia adelante en el tiempo, con datos que no se usaron al desarrollar ni comprobar las reglas mediante backtest. Es un paso clave que muestra si la estrategia funciona con datos verdaderamente nuevos.",
            },
            {
              type: "paragraph",
              text: "El forward-test ayuda a detectar un sobreajuste que podría haber pasado desapercibido en el backtest: si los resultados del forward-test difieren mucho de los del backtest, es probable que la estrategia se ajustara demasiado a los datos pasados.",
            },
            {
              type: "list",
              items: [
                "El forward-test se realiza con datos no usados al desarrollar la estrategia",
                "Permite detectar un sobreajuste que pasa desapercibido en un backtest normal",
                "Una gran discrepancia entre los resultados del backtest y del forward-test es una señal de alerta",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es la diferencia clave entre el forward-test y el backtest?",
              options: [
                "No hay ninguna diferencia entre ambos",
                "El forward-test se realiza con datos nuevos, no usados al desarrollar la estrategia",
                "El forward-test siempre se realiza solo con un depósito real grande",
              ],
              correctAnswer: "El forward-test se realiza con datos nuevos, no usados al desarrollar la estrategia",
            },
            {
              prompt: "¿Qué ayuda a detectar el forward-test, a diferencia del backtest?",
              options: [
                "La comisión del exchange por retiro de fondos",
                "El sobreajuste de la estrategia a los datos pasados",
                "La fecha exacta del próximo halving",
              ],
              correctAnswer: "El sobreajuste de la estrategia a los datos pasados",
            },
            {
              prompt: "¿Qué indica una gran discrepancia entre los resultados del backtest y del forward-test?",
              options: [
                "Que la estrategia es absolutamente fiable",
                "Probablemente la estrategia se ajustó demasiado a los datos pasados",
                "Esto no tiene ninguna importancia para evaluar la estrategia",
              ],
              correctAnswer: "Probablemente la estrategia se ajustó demasiado a los datos pasados",
            },
          ],
        },
        {
          slug: "statistika-sdelok",
          title: "Estadística de operaciones",
          summary: "Las métricas clave que hay que seguir para evaluar objetivamente el propio trading.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "La estadística de operaciones es un conjunto de métricas objetivas calculadas a partir del diario: winrate (proporción de operaciones ganadoras), R/R medio, esperanza matemática de la operación, drawdown máximo, entre otras. Estas cifras muestran el panorama real del trading, no una sensación subjetiva.",
            },
            {
              type: "paragraph",
              text: "Ninguna métrica debe evaluarse de forma aislada: un winrate alto con un R/R medio bajo puede dar el mismo resultado que un winrate bajo con un R/R alto. Precisamente la esperanza matemática —lo que aporta en promedio una operación— es el indicador final de la calidad de una estrategia.",
            },
            {
              type: "list",
              items: [
                "El winrate y el R/R medio deben analizarse juntos, no por separado",
                "La esperanza matemática de la operación es la métrica final clave de la calidad de la estrategia",
                "El drawdown máximo muestra cuánto llegó a caer el depósito en el peor período",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué muestra el winrate de una estrategia de trading?",
              options: [
                "El número de operaciones abiertas en un momento dado",
                "La ganancia total acumulada en dólares",
                "La proporción de operaciones ganadoras sobre el total",
              ],
              correctAnswer: "La proporción de operaciones ganadoras sobre el total",
            },
            {
              prompt: "¿Por qué no se puede evaluar el winrate de forma aislada del R/R medio?",
              options: [
                "Un winrate alto con R/R bajo puede dar el mismo resultado que un winrate bajo con R/R alto",
                "El R/R no influye en absoluto en el resultado final",
                "El winrate y el R/R son siempre exactamente iguales",
              ],
              correctAnswer: "Un winrate alto con R/R bajo puede dar el mismo resultado que un winrate bajo con R/R alto",
            },
            {
              prompt: "¿Qué muestra la métrica de drawdown máximo?",
              options: [
                "El número de activos en la cartera",
                "La rentabilidad anual final de la estrategia",
                "Cuánto llegó a caer el depósito en el peor período del trading",
              ],
              correctAnswer: "Cuánto llegó a caer el depósito en el peor período del trading",
            },
          ],
        },
      ],
    },
    {
      title: "Altcoins y tokenomics",
      lessons: [
        {
          slug: "tokenomics",
          title: "Tokenomics",
          summary: "El modelo económico de un token: la oferta, la distribución y los incentivos de los holders.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El tokenomics describe el modelo económico de un token: la oferta total y máxima, la distribución entre el equipo, los inversores y la comunidad, los mecanismos de emisión y quema, así como los incentivos que motivan a los holders a usar o mantener el token.",
            },
            {
              type: "paragraph",
              text: "Un tokenomics débil —por ejemplo, una gran parte de los tokens en manos del equipo con un período de bloqueo corto— genera una presión vendedora constante sobre el mercado, independientemente de la calidad del producto en sí. Analizar el tokenomics es tan importante para evaluar un proyecto como analizar su tecnología.",
            },
            {
              type: "list",
              items: [
                "El tokenomics describe la oferta, la distribución y los incentivos de los holders del token",
                "Una gran parte de tokens en manos del equipo con un vesting corto crea el riesgo de presión vendedora",
                "Analizar el tokenomics es tan importante como analizar la tecnología del proyecto",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué describe el tokenomics de un proyecto?",
              options: [
                "La lista de exchanges donde cotiza el token",
                "El modelo económico del token: la oferta, la distribución y los incentivos de los holders",
                "Solo el stack tecnológico de la blockchain",
              ],
              correctAnswer: "El modelo económico del token: la oferta, la distribución y los incentivos de los holders",
            },
            {
              prompt: "¿Qué factor del tokenomics genera el riesgo de una presión vendedora constante?",
              options: [
                "La ausencia total de tokens en manos del equipo",
                "Una gran parte de tokens en manos del equipo con un período de bloqueo corto",
                "Una oferta máxima del token igual a cero",
              ],
              correctAnswer: "Una gran parte de tokens en manos del equipo con un período de bloqueo corto",
            },
            {
              prompt: "¿Qué tan importante es analizar el tokenomics en comparación con analizar la tecnología del proyecto?",
              options: [
                "El tokenomics no tiene relevancia para evaluar un proyecto",
                "Solo es importante para proyectos sin blockchain",
                "Es igual de importante y debe considerarse al mismo nivel que la tecnología",
              ],
              correctAnswer: "Es igual de importante y debe considerarse al mismo nivel que la tecnología",
            },
          ],
        },
        {
          slug: "fdv",
          title: "FDV",
          summary: "La valoración totalmente diluida y por qué es más relevante que la capitalización de mercado para los tokens nuevos.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El FDV (Fully Diluted Valuation) es la valoración de un proyecto calculada como si toda la oferta máxima de tokens ya estuviera en circulación, al precio actual. A diferencia de la capitalización de mercado, que solo considera los tokens actualmente en circulación, el FDV muestra la valoración potencial futura.",
            },
            {
              type: "paragraph",
              text: "Una gran diferencia entre la capitalización actual y el FDV significa que una parte importante de la oferta aún no se ha emitido y llegará al mercado con el tiempo, generando una posible presión vendedora en cada desbloqueo; esto es especialmente importante para los tokens nuevos con un bajo porcentaje en circulación.",
            },
            {
              type: "list",
              items: [
                "El FDV se calcula a partir de la oferta máxima, no de la oferta actual, del token",
                "Una gran diferencia entre la capitalización y el FDV indica una emisión futura significativa",
                "Los tokens con bajo porcentaje en circulación y alto FDV requieren especial atención al calendario de desbloqueos",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cómo se calcula el FDV?",
              options: [
                "A partir solo de los tokens negociados en un exchange concreto",
                "A partir del volumen de operaciones de las últimas 24 horas",
                "A partir de la oferta máxima de tokens al precio actual",
              ],
              correctAnswer: "A partir de la oferta máxima de tokens al precio actual",
            },
            {
              prompt: "¿Qué indica una gran diferencia entre la capitalización de mercado y el FDV?",
              options: [
                "Una parte significativa de la oferta que aún no ha entrado en circulación",
                "Un error técnico en el cálculo del precio",
                "Que el token ya está completamente desbloqueado",
              ],
              correctAnswer: "Una parte significativa de la oferta que aún no ha entrado en circulación",
            },
            {
              prompt: "¿Para qué tokens es especialmente importante analizar de cerca la relación entre la capitalización y el FDV?",
              options: [
                "Para los tokens nuevos con un bajo porcentaje de la oferta en circulación",
                "La relación entre capitalización y FDV no tiene relevancia práctica",
                "Solo para las stablecoins",
              ],
              correctAnswer: "Para los tokens nuevos con un bajo porcentaje de la oferta en circulación",
            },
          ],
        },
        {
          slug: "vesting",
          title: "Vesting",
          summary: "El desbloqueo gradual de los tokens del equipo y los inversores según un calendario definido.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El vesting es un mecanismo de desbloqueo gradual de los tokens asignados al equipo, los inversores o los asesores del proyecto, según un calendario predefinido en lugar de una entrega única. Esto debería reducir el incentivo de los primeros participantes para vender los tokens inmediatamente después del listado.",
            },
            {
              type: "paragraph",
              text: "Una estructura de vesting estándar incluye un «cliff» —un período durante el cual los tokens están completamente bloqueados— seguido de un desbloqueo lineal o escalonado. Un cliff corto y un calendario de vesting agresivo aumentan el riesgo de presión vendedora en las primeras etapas.",
            },
            {
              type: "list",
              items: [
                "El vesting desbloquea los tokens del equipo y los inversores de forma gradual, no de inmediato",
                "El cliff es el período de bloqueo total de los tokens al inicio del calendario de vesting",
                "Un cliff corto y un calendario de desbloqueo agresivo aumentan el riesgo de presión vendedora",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué es el vesting de tokens?",
              options: [
                "Una forma de minar nuevos tokens",
                "Un mecanismo de desbloqueo gradual de los tokens según un calendario definido",
                "La venta única de todos los tokens de un proyecto",
              ],
              correctAnswer: "Un mecanismo de desbloqueo gradual de los tokens según un calendario definido",
            },
            {
              prompt: "¿Qué es el cliff en un calendario de vesting?",
              options: [
                "El período de bloqueo total de los tokens al inicio del calendario",
                "Una comisión por el retiro anticipado de tokens",
                "El desbloqueo final de todos los tokens restantes",
              ],
              correctAnswer: "El período de bloqueo total de los tokens al inicio del calendario",
            },
            {
              prompt: "¿Para qué usan los proyectos el vesting con el equipo y los inversores?",
              options: [
                "Es un requisito técnico de cualquier blockchain",
                "Para reducir el incentivo de vender los tokens inmediatamente después del listado",
                "Para excluir por completo al equipo de la participación en el proyecto",
              ],
              correctAnswer: "Para reducir el incentivo de vender los tokens inmediatamente después del listado",
            },
          ],
        },
        {
          slug: "unlocks",
          title: "Unlocks",
          summary: "Los desbloqueos de tokens según el calendario y su impacto en el precio del activo.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Los unlocks (desbloqueos) son los momentos en que una nueva porción de tokens bloqueados (del equipo, los inversores o los fondos del ecosistema) queda disponible para su transferencia y posible venta. Las fechas y los volúmenes de los desbloqueos suelen conocerse de antemano y el proyecto los publica.",
            },
            {
              type: "paragraph",
              text: "Un desbloqueo grande en relación con el volumen de operaciones actual puede generar una presión vendedora notable sobre el precio, sobre todo si los receptores de los tokens no tienen una motivación de largo plazo para mantenerlos. Los traders suelen hacer seguimiento del calendario de desbloqueos como parte de la gestión de riesgo.",
            },
            {
              type: "list",
              items: [
                "Un desbloqueo pone a disposición una nueva porción de tokens para su transferencia y venta",
                "Un desbloqueo grande en relación con el volumen de operaciones puede generar presión sobre el precio",
                "El calendario de próximos desbloqueos es un elemento importante de gestión de riesgo para posiciones en altcoins",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué ocurre en el momento de un desbloqueo (unlock) de tokens?",
              options: [
                "El exchange detiene temporalmente las operaciones con el activo",
                "Una nueva porción de tokens previamente bloqueados queda disponible para su transferencia",
                "Se destruyen todos los tokens del proyecto",
              ],
              correctAnswer: "Una nueva porción de tokens previamente bloqueados queda disponible para su transferencia",
            },
            {
              prompt: "¿Cuándo puede un desbloqueo de tokens generar una presión notable sobre el precio?",
              options: [
                "Cuando su volumen es grande en relación con el volumen de operaciones actual",
                "Solo si el desbloqueo ocurre de noche",
                "Los desbloqueos nunca afectan al precio",
              ],
              correctAnswer: "Cuando su volumen es grande en relación con el volumen de operaciones actual",
            },
            {
              prompt: "¿Por qué los traders hacen seguimiento del calendario de desbloqueos de un token?",
              options: [
                "El calendario de desbloqueos no tiene ninguna aplicación práctica",
                "Es un elemento de gestión de riesgo al mantener una posición en un altcoin",
                "Para calcular con exactitud los impuestos sobre las ganancias",
              ],
              correctAnswer: "Es un elemento de gestión de riesgo al mantener una posición en un altcoin",
            },
          ],
        },
        {
          slug: "emissiya",
          title: "Emisión",
          summary: "La velocidad de emisión de nuevos tokens y su impacto en la presión de largo plazo sobre el precio.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "La emisión es el proceso de creación de nuevos tokens en circulación, por ejemplo mediante recompensas de minería, staking o subvenciones del ecosistema. La velocidad de emisión determina qué tan rápido crece la oferta del token con el tiempo, independientemente de la demanda que tenga.",
            },
            {
              type: "paragraph",
              text: "Una emisión alta y constante sin un crecimiento correspondiente de la demanda genera una presión sostenida sobre el precio a largo plazo; esta es una de las razones por las que algunos proyectos introducen mecanismos de quema de tokens, para compensar parcialmente la emisión.",
            },
            {
              type: "list",
              items: [
                "La emisión aumenta la oferta del token independientemente de la demanda actual",
                "Una emisión alta sin crecimiento de la demanda genera presión sobre el precio a largo plazo",
                "Los mecanismos de quema de tokens se introducen para compensar parcialmente la emisión",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué es la emisión de un token?",
              options: [
                "El proceso de verificar la autenticidad de una wallet",
                "El proceso de creación de nuevos tokens en circulación",
                "El proceso de eliminar por completo un token de un exchange",
              ],
              correctAnswer: "El proceso de creación de nuevos tokens en circulación",
            },
            {
              prompt: "¿Qué ocurre con una emisión alta sin un crecimiento correspondiente de la demanda?",
              options: [
                "La oferta total del token se reduce",
                "Se genera una presión sostenida sobre el precio a largo plazo",
                "El precio del token sube de forma garantizada",
              ],
              correctAnswer: "Se genera una presión sostenida sobre el precio a largo plazo",
            },
            {
              prompt: "¿Para qué introducen algunos proyectos un mecanismo de quema de tokens?",
              options: [
                "Para detener por completo el funcionamiento de la red",
                "Para compensar parcialmente el efecto de la emisión sobre la oferta",
                "Es un requisito de los exchanges para listar un token",
              ],
              correctAnswer: "Para compensar parcialmente el efecto de la emisión sobre la oferta",
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
          summary: "Los exchanges descentralizados y su diferencia fundamental respecto a los centralizados.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El DEX (Decentralized Exchange) es un exchange que funciona mediante contratos inteligentes, sin un operador central que custodie los fondos de los usuarios. Las operaciones se ejecutan directamente entre las wallets de los participantes, y no a través de una base de datos interna del exchange, como en las plataformas centralizadas.",
            },
            {
              type: "paragraph",
              text: "La principal ventaja de un DEX es que el usuario mantiene el control de sus fondos hasta el momento de la operación (el principio de «no tus claves, no tus monedas»). La otra cara de la moneda es que toda la responsabilidad por la seguridad de la wallet y por interactuar correctamente con el contrato inteligente recae en el propio usuario.",
            },
            {
              type: "list",
              items: [
                "Un DEX funciona mediante contratos inteligentes, sin un custodio central de los fondos",
                "El usuario mantiene el control de sus activos hasta el momento de la operación",
                "La responsabilidad por la seguridad de la wallet en un DEX recae por completo en el usuario",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se diferencia fundamentalmente un DEX de un exchange centralizado?",
              options: [
                "Un DEX funciona mediante contratos inteligentes, sin un custodio central de los fondos de los usuarios",
                "Los DEX solo están disponibles para inversores institucionales",
                "En un DEX es imposible realizar operaciones",
              ],
              correctAnswer: "Un DEX funciona mediante contratos inteligentes, sin un custodio central de los fondos de los usuarios",
            },
            {
              prompt: "¿Cuál es la principal ventaja de operar en un DEX en cuanto al control de los activos?",
              options: [
                "El usuario mantiene el control de sus fondos hasta el momento de la operación",
                "Un DEX protege automáticamente contra todo tipo de fraude",
                "Un DEX garantiza no cobrar ninguna comisión",
              ],
              correctAnswer: "El usuario mantiene el control de sus fondos hasta el momento de la operación",
            },
            {
              prompt: "¿En quién recae la responsabilidad por la seguridad de la wallet al usar un DEX?",
              options: [
                "Por completo en los desarrolladores del protocolo",
                "La responsabilidad está automáticamente asegurada por el exchange",
                "Por completo en el propio usuario",
              ],
              correctAnswer: "Por completo en el propio usuario",
            },
          ],
        },
        {
          slug: "amm",
          title: "AMM",
          summary: "Los creadores de mercado automáticos y el principio de funcionamiento de los pools de liquidez.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El AMM (Automated Market Maker) es el mecanismo detrás de la mayoría de los DEX, en el que el precio de un activo se determina mediante una fórmula matemática basada en la proporción de tokens en un pool de liquidez, y no mediante un libro de órdenes, como en los exchanges tradicionales.",
            },
            {
              type: "paragraph",
              text: "El pool de liquidez se nutre de usuarios (proveedores de liquidez) que aportan un par de tokens en igual valor y reciben a cambio una parte de las comisiones de trading. Las operaciones grandes en relación con el tamaño del pool provocan slippage: una desviación notable entre el precio de ejecución y el precio de mercado.",
            },
            {
              type: "list",
              items: [
                "El AMM determina el precio mediante una fórmula basada en la proporción de tokens del pool, no en un libro de órdenes",
                "Los proveedores de liquidez ganan una parte de las comisiones de trading del pool",
                "Una operación grande en relación con el tamaño del pool provoca un slippage de precio notable",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cómo determina el AMM el precio de un activo?",
              options: [
                "Mediante un libro de órdenes, como en un exchange centralizado",
                "Mediante la votación de los holders del token",
                "Mediante una fórmula matemática basada en la proporción de tokens del pool",
              ],
              correctAnswer: "Mediante una fórmula matemática basada en la proporción de tokens del pool",
            },
            {
              prompt: "¿Qué reciben los proveedores de liquidez en un pool de AMM?",
              options: [
                "Un porcentaje anual fijo garantizado sin ningún riesgo",
                "El derecho a gestionar el protocolo en solitario",
                "Una parte de las comisiones de trading del pool",
              ],
              correctAnswer: "Una parte de las comisiones de trading del pool",
            },
            {
              prompt: "¿Qué es el slippage en el contexto de un AMM?",
              options: [
                "El retraso en el procesamiento de una transacción por parte de un nodo de la red",
                "La comisión de la red por confirmar una transacción",
                "La desviación entre el precio de ejecución y el precio de mercado en una operación grande en relación con el tamaño del pool",
              ],
              correctAnswer: "La desviación entre el precio de ejecución y el precio de mercado en una operación grande en relación con el tamaño del pool",
            },
          ],
        },
        {
          slug: "staking",
          title: "Staking",
          summary: "El bloqueo de tokens para participar en el consenso o recibir recompensas.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El staking es el bloqueo de tokens para respaldar el funcionamiento de una red (en blockchains con mecanismo Proof-of-Stake) o para participar en un protocolo a cambio de una recompensa. En las redes con PoS, quienes hacen staking ayudan a confirmar las transacciones y a garantizar la seguridad de la red.",
            },
            {
              type: "paragraph",
              text: "El rendimiento del staking suele expresarse en porcentaje anual (APR/APY), pero es importante tener en cuenta que se genera, parcial o totalmente, a partir de la emisión de nuevos tokens, lo que puede neutralizar el rendimiento nominal mediante una dilución real de la oferta.",
            },
            {
              type: "list",
              items: [
                "En las redes Proof-of-Stake, el staking ayuda a confirmar transacciones y proteger la red",
                "El rendimiento del staking suele expresarse en porcentaje anual (APR/APY)",
                "El rendimiento del staking a menudo se genera en parte por la emisión, no solo por la demanda real",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué función cumple el staking en las redes Proof-of-Stake?",
              options: [
                "Se usa exclusivamente con fines de marketing del proyecto",
                "Ayuda a confirmar las transacciones y a garantizar la seguridad de la red",
                "Sustituye por completo la necesidad de una blockchain",
              ],
              correctAnswer: "Ayuda a confirmar las transacciones y a garantizar la seguridad de la red",
            },
            {
              prompt: "¿En qué suele expresarse el rendimiento del staking?",
              options: [
                "En porcentaje anual (APR/APY)",
                "El rendimiento del staking nunca se expresa numéricamente",
                "Solo en una suma fija en dólares una vez al año",
              ],
              correctAnswer: "En porcentaje anual (APR/APY)",
            },
            {
              prompt: "¿A partir de qué se genera a menudo, en parte, el rendimiento del staking?",
              options: [
                "A partir de la emisión de nuevos tokens",
                "A partir de beneficios fiscales del Estado",
                "Exclusivamente a partir de las comisiones de los exchanges centralizados",
              ],
              correctAnswer: "A partir de la emisión de nuevos tokens",
            },
          ],
        },
        {
          slug: "lending",
          title: "Lending",
          summary: "El préstamo descentralizado con garantía de criptoactivos.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El lending en DeFi permite que unos usuarios presten activos mediante un contrato inteligente y reciban un interés, mientras que otros piden préstamos con garantía de sus propios criptoactivos, generalmente con sobrecolateralización (la garantía vale más que el monto del préstamo).",
            },
            {
              type: "paragraph",
              text: "Si el valor de la garantía cae por debajo de un umbral determinado en relación con el monto del préstamo, el protocolo liquida automáticamente la garantía para cubrir la deuda. Esto protege a los prestamistas, pero implica que los prestatarios deben vigilar de cerca el ratio de colateralización de su posición.",
            },
            {
              type: "list",
              items: [
                "El lending en DeFi suele requerir una garantía sobrecolateralizada por parte del prestatario",
                "El interés del préstamo y del depósito se determina algorítmicamente según la oferta y la demanda del protocolo",
                "Si el valor de la garantía cae por debajo de un umbral, el protocolo liquida la posición automáticamente",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué suele exigirse al prestatario en el lending de DeFi?",
              options: [
                "Una garantía sobrecolateralizada, superior al monto del préstamo",
                "Una garantía de un exchange centralizado",
                "La verificación de identidad a través de un banco",
              ],
              correctAnswer: "Una garantía sobrecolateralizada, superior al monto del préstamo",
            },
            {
              prompt: "¿Qué ocurre si el valor de la garantía cae por debajo de un umbral determinado?",
              options: [
                "El préstamo se anula automáticamente sin consecuencias",
                "El protocolo aumenta el monto del préstamo automáticamente",
                "El protocolo liquida automáticamente la garantía para cubrir la deuda",
              ],
              correctAnswer: "El protocolo liquida automáticamente la garantía para cubrir la deuda",
            },
            {
              prompt: "¿Quién recibe el interés en un sistema de lending de DeFi?",
              options: [
                "En el lending de DeFi no se paga interés a nadie",
                "Los usuarios que prestaron activos a través del protocolo",
                "Solo los desarrolladores del protocolo",
              ],
              correctAnswer: "Los usuarios que prestaron activos a través del protocolo",
            },
          ],
        },
        {
          slug: "yield-farming",
          title: "Yield Farming",
          summary: "La búsqueda del máximo rendimiento combinando distintos protocolos DeFi.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El yield farming es una estrategia para buscar el máximo rendimiento colocando activos en distintos protocolos DeFi (pools de liquidez, lending, staking), a menudo trasladando el capital entre protocolos a medida que cambia el rendimiento ofrecido.",
            },
            {
              type: "paragraph",
              text: "Un rendimiento anunciado muy alto en el farming suele estar asociado a un riesgo mayor: la volatilidad de los propios tokens de recompensa, el riesgo del contrato inteligente del protocolo o las pérdidas impermanentes (impermanent loss) en los pools de liquidez. El rendimiento y el riesgo en DeFi suelen estar estrechamente relacionados.",
            },
            {
              type: "list",
              items: [
                "El yield farming implica mover el capital activamente entre protocolos en busca de rendimiento",
                "Un rendimiento anunciado muy alto suele venir acompañado de un riesgo mayor",
                "Las pérdidas impermanentes (impermanent loss) son un riesgo específico de los pools de liquidez",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué es el yield farming?",
              options: [
                "Un programa estatal de subsidios para proyectos cripto",
                "Una forma de minar bitcoin con hardware especializado",
                "Una estrategia para buscar el máximo rendimiento colocando activos en distintos protocolos DeFi",
              ],
              correctAnswer: "Una estrategia para buscar el máximo rendimiento colocando activos en distintos protocolos DeFi",
            },
            {
              prompt: "¿Con qué suele estar relacionado un rendimiento anunciado muy alto en el farming?",
              options: [
                "Con la ausencia total de riesgo",
                "Con un riesgo mayor (volatilidad del token, riesgo del contrato, impermanent loss)",
                "Con una garantía estatal de rendimiento",
              ],
              correctAnswer: "Con un riesgo mayor (volatilidad del token, riesgo del contrato, impermanent loss)",
            },
            {
              prompt: "¿Qué son las pérdidas impermanentes (impermanent loss)?",
              options: [
                "Una comisión de red por transferir tokens",
                "Una pérdida garantizada en cualquier staking",
                "Un riesgo específico de los pools de liquidez, relacionado con el cambio en la proporción de precios de los activos",
              ],
              correctAnswer: "Un riesgo específico de los pools de liquidez, relacionado con el cambio en la proporción de precios de los activos",
            },
          ],
        },
      ],
    },
    {
      title: "Memecoins y proyectos nuevos",
      lessons: [
        {
          slug: "launchpad",
          title: "Launchpad",
          summary: "Las plataformas para el lanzamiento temprano y la venta de tokens de proyectos nuevos.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Un launchpad es una plataforma que ayuda a los proyectos nuevos a realizar la distribución primaria de tokens y a conseguir liquidez inicial, generalmente ofreciendo acceso anticipado a los participantes de la plataforma a cambio de cumplir ciertas condiciones (staking del token nativo, KYC, etc.).",
            },
            {
              type: "paragraph",
              text: "Participar a través de un launchpad no elimina los riesgos del proyecto: la reputación de la plataforma influye en la selección inicial, pero no garantiza el éxito del token después del listado. Es importante evaluar el proyecto en sí, por separado de la plataforma a través de la cual se lanza.",
            },
            {
              type: "list",
              items: [
                "Un launchpad ayuda a los proyectos con la distribución primaria de tokens y la obtención de liquidez",
                "El acceso al lanzamiento a menudo requiere cumplir condiciones de la plataforma (staking, KYC)",
                "La reputación de un launchpad no garantiza el éxito del token después del listado",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Para qué usan los proyectos las plataformas launchpad?",
              options: [
                "Para renunciar por completo a atraer inversores",
                "Exclusivamente para el soporte técnico de la blockchain",
                "Para la distribución primaria de tokens y la obtención de liquidez",
              ],
              correctAnswer: "Para la distribución primaria de tokens y la obtención de liquidez",
            },
            {
              prompt: "¿Qué se suele exigir a los participantes para acceder a un lanzamiento en un launchpad?",
              options: [
                "Tener un título de analista financiero",
                "Cumplir condiciones de la plataforma, por ejemplo hacer staking del token nativo",
                "Registrar una persona jurídica",
              ],
              correctAnswer: "Cumplir condiciones de la plataforma, por ejemplo hacer staking del token nativo",
            },
            {
              prompt: "¿Una buena reputación del launchpad garantiza el éxito del token lanzado a través de él?",
              options: [
                "Sí, es una garantía de éxito del cien por ciento",
                "Sí, pero solo para proyectos en Bitcoin",
                "No, el proyecto igualmente debe evaluarse por separado",
              ],
              correctAnswer: "No, el proyecto igualmente debe evaluarse por separado",
            },
          ],
        },
        {
          slug: "ico",
          title: "ICO",
          summary: "La oferta inicial de monedas como forma temprana de captar capital en proyectos cripto.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El ICO (Initial Coin Offering) es un modelo de captación de capital en el que un proyecto vende un token nuevo directamente a los inversores, generalmente en una etapa temprana de desarrollo, a cambio de criptomonedas consolidadas o dinero fiduciario. Fue uno de los primeros mecanismos de crowdfunding en la industria cripto.",
            },
            {
              type: "paragraph",
              text: "La ola de ICO de 2017 mostró tanto el potencial del modelo para captar capital rápidamente como sus riesgos: la falta de regulación dio lugar a una gran cantidad de proyectos sin un producto real. Esto motivó la aparición de formatos de lanzamiento más estructurados, incluidos los launchpad y las IDO.",
            },
            {
              type: "list",
              items: [
                "El ICO es un modelo de venta de un token nuevo directamente a los inversores en una etapa temprana del proyecto",
                "El ICO se convirtió en una de las primeras formas de crowdfunding en la industria cripto",
                "La escasa regulación de las ICO históricamente dio lugar a un alto porcentaje de proyectos inviables",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué consiste el modelo de ICO?",
              options: [
                "En el proceso de minería de bitcoin",
                "En vender un token nuevo directamente a los inversores en una etapa temprana del proyecto",
                "En la regulación estatal de las criptomonedas",
              ],
              correctAnswer: "En vender un token nuevo directamente a los inversores en una etapa temprana del proyecto",
            },
            {
              prompt: "¿Qué papel histórico desempeñó el ICO en la industria cripto?",
              options: [
                "Se convirtió en una de las primeras formas de crowdfunding en criptomonedas",
                "Provocó la abolición total de la tecnología blockchain",
                "Sustituyó por completo la negociación en exchanges",
              ],
              correctAnswer: "Se convirtió en una de las primeras formas de crowdfunding en criptomonedas",
            },
            {
              prompt: "¿A qué llevó la escasa regulación de la ola de ICO de 2017?",
              options: [
                "A la prohibición inmediata de todas las criptomonedas en todos los países",
                "A la desaparición total de los riesgos para los inversores",
                "A un alto porcentaje de proyectos sin un producto real",
              ],
              correctAnswer: "A un alto porcentaje de proyectos sin un producto real",
            },
          ],
        },
        {
          slug: "ido",
          title: "IDO",
          summary: "La oferta inicial en un exchange descentralizado como alternativa más transparente al ICO.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "El IDO (Initial DEX Offering) es el lanzamiento de un token directamente a través de un exchange descentralizado o una plataforma launchpad, en el que la liquidez suele añadirse al pool inmediatamente después de la venta, y el listado ocurre más rápido y de forma más transparente que en un ICO tradicional.",
            },
            {
              type: "paragraph",
              text: "El IDO reduce parte de los riesgos característicos del ICO (por ejemplo, la demora entre la recaudación de fondos y el listado), pero no elimina los riesgos del propio proyecto. La alta demanda de un IDO suele provocar una volatilidad brusca del precio justo después de que comienzan las operaciones.",
            },
            {
              type: "list",
              items: [
                "Un IDO se realiza a través de un exchange descentralizado o una plataforma launchpad",
                "La liquidez del pool suele añadirse inmediatamente después de la venta del token",
                "La alta demanda de un IDO suele provocar una volatilidad brusca del precio tras el listado",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿A través de qué suele realizarse un IDO?",
              options: [
                "A través de un regulador central del mercado",
                "A través de un exchange descentralizado o una plataforma launchpad",
                "Solo a través de un banco tradicional",
              ],
              correctAnswer: "A través de un exchange descentralizado o una plataforma launchpad",
            },
            {
              prompt: "¿En qué se diferencia el IDO del ICO clásico en cuanto al listado?",
              options: [
                "No existe ninguna diferencia entre el ICO y el IDO",
                "El IDO nunca implica el listado del token",
                "El listado ocurre más rápido y de forma más transparente gracias a la adición inmediata de liquidez",
              ],
              correctAnswer: "El listado ocurre más rápido y de forma más transparente gracias a la adición inmediata de liquidez",
            },
            {
              prompt: "¿Qué suele ocurrir con el precio del token justo después de que comienzan las operaciones en un IDO?",
              options: [
                "Las operaciones se detienen automáticamente durante un día",
                "El precio siempre se mantiene perfectamente estable",
                "Una volatilidad brusca debido a la alta demanda",
              ],
              correctAnswer: "Una volatilidad brusca debido a la alta demanda",
            },
          ],
        },
        {
          slug: "airdrop",
          title: "Airdrop",
          summary: "La distribución gratuita de tokens entre los usuarios y qué aspectos tener en cuenta.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Un airdrop es la distribución gratuita de tokens de un proyecto entre un grupo determinado de usuarios, a menudo como recompensa por el uso temprano del protocolo, la participación en una testnet o la realización de determinadas acciones. Es una forma de atraer atención y crear una comunidad inicial de holders.",
            },
            {
              type: "paragraph",
              text: "La expectativa de un posible airdrop atrae a muchos usuarios, pero también genera riesgos: se usan airdrops falsos para hacer phishing y robar fondos mediante contratos inteligentes maliciosos. Un airdrop legítimo nunca exige enviar fondos ni claves privadas para recibir los tokens.",
            },
            {
              type: "list",
              items: [
                "Un airdrop es la distribución gratuita de tokens entre un grupo determinado de usuarios",
                "Un airdrop a menudo recompensa el uso temprano del protocolo o la participación en una testnet",
                "Un airdrop legítimo nunca exige enviar fondos ni claves privadas",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué es un airdrop de tokens?",
              options: [
                "Un impuesto obligatorio sobre las transacciones cripto",
                "Una suscripción de pago a las noticias del proyecto",
                "La distribución gratuita de tokens entre un grupo determinado de usuarios",
              ],
              correctAnswer: "La distribución gratuita de tokens entre un grupo determinado de usuarios",
            },
            {
              prompt: "¿Por qué suelen recompensar los proyectos a los usuarios mediante un airdrop?",
              options: [
                "Por eliminar la wallet de la red",
                "Por el uso temprano del protocolo o la participación en una testnet",
                "Por dejar reseñas negativas sobre el proyecto",
              ],
              correctAnswer: "Por el uso temprano del protocolo o la participación en una testnet",
            },
            {
              prompt: "¿Qué señal debería poner en alerta a un usuario ante un posible airdrop?",
              options: [
                "La ausencia de cualquier requisito por parte del usuario",
                "La exigencia de enviar fondos o claves privadas para recibir los tokens",
                "Una simple verificación de la dirección de la wallet en una lista pública",
              ],
              correctAnswer: "La exigencia de enviar fondos o claves privadas para recibir los tokens",
            },
          ],
        },
        {
          slug: "kak-iskat-proekty",
          title: "Cómo buscar proyectos",
          summary: "Una lista de verificación básica para evaluar de forma inicial un proyecto cripto nuevo antes de invertir.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "La búsqueda de proyectos prometedores comienza con una verificación básica: quién es el equipo y si tiene una reputación pública, si existe un producto funcional o solo una presentación, quiénes son los inversores en las rondas tempranas y qué tan transparente y equilibrado es el tokenomics.",
            },
            {
              type: "paragraph",
              text: "También es útil estudiar la actividad de la comunidad y el desarrollo en los repositorios públicos, y no solo los anuncios de marketing en las redes sociales. Un proyecto con una audiencia activa y creciente y actualizaciones de código regulares suele merecer más confianza que un proyecto con un solo anuncio llamativo.",
            },
            {
              type: "list",
              items: [
                "Verificar el equipo, el producto y los inversores es el primer paso básico para evaluar un proyecto",
                "La actividad de desarrollo en repositorios abiertos es una señal más confiable que el marketing",
                "Un tokenomics equilibrado y transparente reduce el riesgo de una futura presión vendedora",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Con qué suele comenzar la verificación básica de un proyecto cripto nuevo?",
              options: [
                "Con el estudio exclusivo del logotipo del proyecto",
                "Con el análisis del equipo, el producto y los inversores tempranos",
                "Con la compra inmediata del máximo volumen posible del token",
              ],
              correctAnswer: "Con el análisis del equipo, el producto y los inversores tempranos",
            },
            {
              prompt: "¿Qué señal suele considerarse un indicador más confiable del progreso real de un proyecto?",
              options: [
                "El número de seguidores en redes sociales sin ninguna otra verificación",
                "La actividad de desarrollo en los repositorios de código abiertos",
                "La cantidad de promesas llamativas en publicaciones de marketing",
              ],
              correctAnswer: "La actividad de desarrollo en los repositorios de código abiertos",
            },
            {
              prompt: "¿Por qué vale la pena prestar atención al tokenomics al evaluar inicialmente un proyecto?",
              options: [
                "El tokenomics solo importa para proyectos sin blockchain",
                "Un tokenomics equilibrado reduce el riesgo de una futura presión vendedora",
                "El tokenomics no tiene ninguna relación con los riesgos del proyecto",
              ],
              correctAnswer: "Un tokenomics equilibrado reduce el riesgo de una futura presión vendedora",
            },
          ],
        },
      ],
    },
    {
      title: "Estrategias de trading",
      lessons: [
        {
          slug: "scalping",
          title: "Scalping",
          summary: "Estrategia de múltiples operaciones cortas con ganancias pequeñas en marcos temporales de minutos.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Scalping es una estrategia en la que el trader abre una gran cantidad de operaciones en un período corto de tiempo (segundos o minutos), buscando obtener una pequeña ganancia en cada una de ellas. El scalping exige alta concentración, comisiones bajas y buena liquidez del instrumento.",
            },
            {
              type: "paragraph",
              text: "Debido a la alta frecuencia de operaciones, incluso una comisión pequeña de la bolsa afecta considerablemente la rentabilidad final del scalper, por lo que es importante calcular con precisión los costes. El scalping también exige mayor velocidad de ejecución de las órdenes y estabilidad de la conexión.",
            },
            {
              type: "list",
              items: [
                "El scalping implica múltiples operaciones cortas con un objetivo de ganancia pequeño",
                "Las comisiones de la bolsa influyen significativamente en la rentabilidad final debido a la alta frecuencia de operaciones",
                "La estrategia requiere alta liquidez del instrumento y una ejecución estable de las órdenes",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es la característica clave del scalping como estrategia?",
              options: [
                "Mantener la posición durante varios meses",
                "El rechazo total del análisis del gráfico",
                "Gran cantidad de operaciones cortas con una pequeña ganancia en cada una",
              ],
              correctAnswer: "Gran cantidad de operaciones cortas con una pequeña ganancia en cada una",
            },
            {
              prompt: "¿Por qué las comisiones de la bolsa son especialmente importantes para un scalper?",
              options: [
                "El scalping está completamente exento de comisiones en cualquier bolsa",
                "Debido a la alta frecuencia de operaciones, influyen considerablemente en la rentabilidad final",
                "Las comisiones solo importan si la posición se mantiene más de un mes",
              ],
              correctAnswer: "Debido a la alta frecuencia de operaciones, influyen considerablemente en la rentabilidad final",
            },
            {
              prompt: "¿Qué es especialmente importante para el instrumento utilizado en scalping?",
              options: [
                "Ausencia de gráfico de precios en tiempo real",
                "Liquidez lo más baja posible",
                "Alta liquidez y ejecución rápida de las órdenes",
              ],
              correctAnswer: "Alta liquidez y ejecución rápida de las órdenes",
            },
          ],
        },
        {
          slug: "day-trading",
          title: "Day Trading",
          summary: "Trading intradía con el cierre de todas las posiciones antes del final de la sesión de negociación.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Day Trading (trading diario) es una estrategia en la que todas las operaciones se abren y se cierran dentro de un mismo día, sin trasladar posiciones al día siguiente. Esto elimina el riesgo de los gaps nocturnos y permite al trader controlar por completo su exposición al mercado al final de la sesión.",
            },
            {
              type: "paragraph",
              text: "El day trading exige más tiempo de análisis y monitoreo del mercado durante el día en comparación con los enfoques de más largo plazo, pero ofrece más oportunidades de entrada que el scalping gracias a objetivos de ganancia más amplios.",
            },
            {
              type: "list",
              items: [
                "En el day trading, todas las posiciones se cierran antes del final del día de negociación",
                "La ausencia de traslado de posiciones elimina el riesgo de los gaps nocturnos",
                "El day trading requiere una cantidad considerable de tiempo para el monitoreo activo del mercado",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es la regla clave del day trading?",
              options: [
                "Las posiciones se mantienen obligatoriamente varias semanas",
                "Las operaciones se abren solo una vez al mes",
                "Todas las posiciones se cierran dentro del mismo día de negociación",
              ],
              correctAnswer: "Todas las posiciones se cierran dentro del mismo día de negociación",
            },
            {
              prompt: "¿Qué riesgo elimina la ausencia de traslado de posiciones al día siguiente?",
              options: [
                "El riesgo de la comisión de la bolsa",
                "El riesgo de cambio de nombre del token",
                "El riesgo de los gaps nocturnos de precio",
              ],
              correctAnswer: "El riesgo de los gaps nocturnos de precio",
            },
            {
              prompt: "¿En qué se diferencia el day trading del scalping en cuanto a los objetivos de ganancia?",
              options: [
                "El day trading no contempla objetivos de ganancia en absoluto",
                "Los objetivos de ganancia de ambas estrategias son absolutamente idénticos",
                "El day trading suele tener objetivos de ganancia más amplios por operación",
              ],
              correctAnswer: "El day trading suele tener objetivos de ganancia más amplios por operación",
            },
          ],
        },
        {
          slug: "swing-trading",
          title: "Swing Trading",
          summary: "Mantener una posición desde varios días hasta varias semanas en movimientos de mediano plazo.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Swing Trading es una estrategia de mantener posiciones desde varios días hasta varias semanas con el objetivo de capturar un movimiento de precio de mediano plazo (un «swing»). Esto requiere menos tiempo de monitoreo constante en comparación con el day trading y el scalping.",
            },
            {
              type: "paragraph",
              text: "Los swing traders suelen apoyarse en marcos temporales más altos (H4, D1) para determinar la tendencia y los puntos de entrada, mientras que la operación queda inevitablemente expuesta a los gaps nocturnos y de fin de semana, por lo que el stop-loss y el tamaño de la posición deben tenerlo en cuenta.",
            },
            {
              type: "list",
              items: [
                "El swing trading implica mantener una posición desde varios días hasta varias semanas",
                "La estrategia requiere menos monitoreo constante que el day trading o el scalping",
                "Las posiciones en swing trading están expuestas al riesgo de gaps nocturnos y de fin de semana",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es el horizonte típico de mantenimiento de una posición en swing trading?",
              options: [
                "Desde varios segundos hasta varios minutos",
                "Desde varios días hasta varias semanas",
                "Varios años sin excepción",
              ],
              correctAnswer: "Desde varios días hasta varias semanas",
            },
            {
              prompt: "¿Qué marcos temporales utilizan con más frecuencia los swing traders para el análisis?",
              options: [
                "Exclusivamente el gráfico de ticks",
                "Marcos temporales más altos, por ejemplo H4 y D1",
                "Solo el marco temporal de un minuto",
              ],
              correctAnswer: "Marcos temporales más altos, por ejemplo H4 y D1",
            },
            {
              prompt: "¿A qué riesgo específico están expuestas las posiciones en swing trading debido a la duración de su mantenimiento?",
              options: [
                "Al riesgo de ejecución instantánea de la orden",
                "Al riesgo de ausencia total de volatilidad",
                "Al riesgo de gaps de precio nocturnos y de fin de semana",
              ],
              correctAnswer: "Al riesgo de gaps de precio nocturnos y de fin de semana",
            },
          ],
        },
        {
          slug: "position-trading",
          title: "Position Trading",
          summary: "Mantenimiento de posiciones a largo plazo basado en grandes tendencias y factores fundamentales.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Position Trading es una estrategia de mantener posiciones desde varias semanas hasta meses o más, orientada a capturar tendencias grandes y de largo plazo. Los traders de posición prestan menos atención al ruido de precio de corto plazo y más al contexto macroeconómico y fundamental.",
            },
            {
              type: "paragraph",
              text: "Debido al horizonte prolongado, el position trading exige una mayor tolerancia a las caídas intermedias dentro de la tendencia general y suele usar stops más amplios en relación con el capital por operación, compensando esto con un menor número de posiciones simultáneas.",
            },
            {
              type: "list",
              items: [
                "El position trading está orientado a mantener posiciones desde varias semanas hasta meses",
                "La estrategia se apoya más en el contexto macroeconómico y fundamental que en el ruido de corto plazo",
                "Los traders de posición suelen usar stops más amplios y un menor número de posiciones simultáneas",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se orienta principalmente el position trading?",
              options: [
                "En las fluctuaciones de precio de un minuto",
                "En el arbitraje entre bolsas en tiempo real",
                "En capturar tendencias grandes y de largo plazo",
              ],
              correctAnswer: "En capturar tendencias grandes y de largo plazo",
            },
            {
              prompt: "¿Para qué debe estar preparado un trader de posición debido al horizonte prolongado de mantenimiento?",
              options: [
                "Para la ausencia total de cualquier fluctuación de precio",
                "Para las caídas intermedias dentro de la tendencia general",
                "Para el cierre obligatorio de la operación al final de cada día",
              ],
              correctAnswer: "Para las caídas intermedias dentro de la tendencia general",
            },
            {
              prompt: "¿Qué tipo de análisis juega un papel especialmente importante en el position trading?",
              options: [
                "Exclusivamente el análisis del libro de órdenes del último minuto",
                "El análisis macroeconómico y fundamental",
                "No se requiere ningún análisis",
              ],
              correctAnswer: "El análisis macroeconómico y fundamental",
            },
          ],
        },
        {
          slug: "liquidity-sweep-strategiya",
          title: "Liquidity Sweep",
          summary: "Estrategia de trading de entrada tras la toma de liquidez detrás de un nivel clave.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Como estrategia de trading, Liquidity Sweep se basa en la idea de que el precio a menudo rompe de forma falsa un nivel significativo (máximo, mínimo, zona de acumulación de stop-loss), recoge liquidez allí y luego revierte en dirección contraria; precisamente ese punto de giro se usa como señal de entrada.",
            },
            {
              type: "paragraph",
              text: "La diferencia clave respecto a una simple ruptura de nivel es que el trader no espera la continuación del movimiento más allá del nivel, sino precisamente un rápido regreso del precio dentro del rango, lo que confirma que la ruptura fue causada por una toma de liquidez y no por una fuerza real de tendencia.",
            },
            {
              type: "list",
              items: [
                "La estrategia se basa en una ruptura falsa de nivel seguida de una reversión rápida del precio",
                "La entrada se produce tras confirmar el regreso del precio dentro del rango, no en el momento mismo de la ruptura",
                "La estrategia requiere paciencia y confirmación para distinguir un sweep de una ruptura real",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué idea se basa la estrategia Liquidity Sweep?",
              options: [
                "En una ruptura falsa de nivel con toma de liquidez y posterior reversión del precio",
                "En ignorar cualquier nivel de soporte y resistencia",
                "En mantener la posición constantemente sin analizar niveles",
              ],
              correctAnswer: "En una ruptura falsa de nivel con toma de liquidez y posterior reversión del precio",
            },
            {
              prompt: "¿Qué confirma que la ruptura de un nivel fue en realidad un sweep y no una ruptura real?",
              options: [
                "La ausencia total de volumen en la ruptura",
                "La continuación del movimiento del precio mucho más allá del nivel",
                "El rápido regreso del precio dentro del rango tras la ruptura",
              ],
              correctAnswer: "El rápido regreso del precio dentro del rango tras la ruptura",
            },
            {
              prompt: "¿Cuándo suele abrir la operación un trader que utiliza esta estrategia?",
              options: [
                "De inmediato al tocar el nivel, sin esperar confirmación",
                "Tras confirmar el regreso del precio dentro del rango",
                "Solo después del cierre de la semana de negociación",
              ],
              correctAnswer: "Tras confirmar el regreso del precio dentro del rango",
            },
          ],
        },
        {
          slug: "breakout",
          title: "Breakout",
          summary: "Estrategia de entrada en la dirección de una ruptura confirmada de un nivel clave.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Breakout (estrategia de ruptura) implica entrar en una operación en la dirección del movimiento cuando el precio supera un nivel significativo de soporte, resistencia o el límite de una consolidación con confirmación, generalmente un volumen mayor y el cierre de la vela más allá del nivel, y no un simple toque.",
            },
            {
              type: "paragraph",
              text: "El principal riesgo de la estrategia de ruptura son las rupturas falsas, cuando el precio sale brevemente del nivel y regresa de inmediato. Por eso los traders a menudo esperan el retest del nivel roto (cuando pasa de ser resistencia a soporte, o viceversa) para una entrada más confiable.",
            },
            {
              type: "list",
              items: [
                "La estrategia de ruptura implica entrar en la dirección de una ruptura confirmada del nivel",
                "La confirmación de la ruptura suele ser un volumen mayor y el cierre de la vela más allá del nivel",
                "Esperar el retest del nivel roto reduce el riesgo de entrar en una ruptura falsa",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué se basa la estrategia de ruptura (breakout)?",
              options: [
                "En entrar exclusivamente en contra de la dirección de la ruptura",
                "En ignorar por completo los niveles de soporte y resistencia",
                "En entrar en la dirección de una ruptura confirmada de un nivel significativo",
              ],
              correctAnswer: "En entrar en la dirección de una ruptura confirmada de un nivel significativo",
            },
            {
              prompt: "¿Qué suele confirmar que una ruptura es real y no falsa?",
              options: [
                "Una caída del volumen a cero",
                "Un simple toque del nivel por el precio sin cierre de vela",
                "Un volumen mayor y el cierre de la vela fuera del nivel",
              ],
              correctAnswer: "Un volumen mayor y el cierre de la vela fuera del nivel",
            },
            {
              prompt: "¿Por qué a veces los traders esperan el retest del nivel roto antes de entrar?",
              options: [
                "Para aumentar garantizadamente la comisión de la operación",
                "El retest no tiene ninguna importancia para la entrada",
                "Para reducir el riesgo de entrar en una ruptura falsa",
              ],
              correctAnswer: "Para reducir el riesgo de entrar en una ruptura falsa",
            },
          ],
        },
        {
          slug: "mean-reversion",
          title: "Mean Reversion",
          summary: "Estrategia de retorno al valor medio tras una fuerte desviación del precio.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Mean Reversion (retorno a la media) se basa en la idea de que el precio, tras desviarse fuertemente de su valor medio (por ejemplo, de una media móvil o del VWAP), tiende a regresar a él con el tiempo. La estrategia suele funcionar mejor en un mercado lateral que en una tendencia fuerte.",
            },
            {
              type: "paragraph",
              text: "Los traders que utilizan esta estrategia suelen combinar osciladores como el RSI con niveles de desviación respecto a la media (por ejemplo, las Bollinger Bands), abriendo una operación en contra de la dirección de un fuerte movimiento de corto plazo a la espera de una corrección hacia el nivel medio.",
            },
            {
              type: "list",
              items: [
                "La estrategia implica el retorno del precio al valor medio tras una fuerte desviación",
                "Mean reversion suele ser más efectiva en un mercado lateral que en una tendencia direccional fuerte",
                "Los osciladores y las bandas de desviación suelen usarse juntos para buscar puntos de entrada",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿En qué idea se basa la estrategia Mean Reversion?",
              options: [
                "El precio nunca regresa a su valor medio",
                "El precio, tras desviarse fuertemente del valor medio, tiende a regresar a él",
                "El precio siempre continúa su movimiento en la misma dirección indefinidamente",
              ],
              correctAnswer: "El precio, tras desviarse fuertemente del valor medio, tiende a regresar a él",
            },
            {
              prompt: "¿En qué tipo de mercado suele funcionar mejor la estrategia mean reversion?",
              options: [
                "En un mercado sin ningún participante aparte del propio trader",
                "En un mercado lateral",
                "Exclusivamente en períodos de hiperinflación",
              ],
              correctAnswer: "En un mercado lateral",
            },
            {
              prompt: "¿Qué herramientas combinan a menudo los traders para buscar puntos de entrada en mean reversion?",
              options: [
                "Solo noticias de redes sociales",
                "Osciladores como el RSI y bandas de desviación respecto a la media",
                "Exclusivamente datos sobre las comisiones de la bolsa",
              ],
              correctAnswer: "Osciladores como el RSI y bandas de desviación respecto a la media",
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
          title: "Trading completo en el simulador",
          summary: "Práctica final: aplicación de todos los conceptos aprendidos en una cuenta virtual.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Esta lección reúne todo el material del curso: desde los conceptos básicos del mercado hasta la gestión de riesgo, la psicología, los indicadores y las estrategias de trading. La tarea consiste en realizar una serie de operaciones en una cuenta virtual, aplicando las reglas de gestión de riesgo y un plan definido de antemano para cada operación.",
            },
            {
              type: "paragraph",
              text: "El objetivo de esta etapa no es una ganancia grande y puntual, sino demostrar un enfoque coherente y disciplinado: el cálculo correcto del tamaño de la posición, un stop-loss y un take profit fundamentados, además de llevar un registro de cada operación, tal como lo hacen los traders profesionales.",
            },
            {
              type: "list",
              items: [
                "Cada operación debe ir acompañada de un plan de entrada y salida definido de antemano",
                "El tamaño de la posición se calcula en función del riesgo, no de la ganancia deseada",
                "El resultado de una operación individual es menos importante que la consistencia en el cumplimiento de las reglas",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Cuál es el objetivo principal de la práctica final en la cuenta virtual?",
              options: [
                "Obtener la máxima ganancia posible a cualquier precio",
                "Demostrar un enfoque coherente y disciplinado hacia el trading",
                "Realizar la mayor cantidad posible de operaciones sin análisis",
              ],
              correctAnswer: "Demostrar un enfoque coherente y disciplinado hacia el trading",
            },
            {
              prompt: "¿Qué debe preceder a la apertura de cada operación en esta etapa?",
              options: [
                "El aumento máximo del apalancamiento",
                "Un plan de entrada y salida definido de antemano",
                "La elección aleatoria de un activo sin análisis",
              ],
              correctAnswer: "Un plan de entrada y salida definido de antemano",
            },
            {
              prompt: "¿Qué determina el tamaño de la posición según el material del curso?",
              options: [
                "Exclusivamente la intuición del trader",
                "El tipo de cambio del dólar en el momento de la operación",
                "El riesgo admisible por operación, no la ganancia deseada",
              ],
              correctAnswer: "El riesgo admisible por operación, no la ganancia deseada",
            },
          ],
        },
        {
          slug: "proyti-vse-zadaniya",
          title: "Hay que completar todas las tareas",
          summary: "Verificación final: por qué es importante cerrar cada módulo para completar el curso.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Cada módulo del curso está construido para apoyarse en el anterior: la comprensión de la gestión de riesgo se apoya en la comprensión de la volatilidad y la estructura del mercado, la psicología de las operaciones se apoya en la comprensión de cómo funciona el riesgo, y las estrategias se apoyan en el dominio de los indicadores y el análisis de volumen.",
            },
            {
              type: "paragraph",
              text: "Saltarse módulos individuales crea lagunas que se manifiestan más adelante, por ejemplo al usar una estrategia sin comprender cómo calcular correctamente el tamaño de la posición para ella. Por eso, para completar el curso es necesario realizar todas las tareas, y no solo módulos sueltos a elección.",
            },
            {
              type: "list",
              items: [
                "Los módulos del curso están construidos de forma secuencial y se apoyan unos en otros",
                "Saltarse un módulo crea lagunas que se manifiestan en etapas posteriores del aprendizaje",
                "Completar el curso por completo requiere finalizar todas las tareas, no solo algunos módulos seleccionados",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Por qué se recomienda completar los módulos del curso de forma secuencial?",
              options: [
                "Esto solo se necesita para obtener XP",
                "El orden en que se completan los módulos no tiene ninguna importancia",
                "Cada módulo siguiente se apoya en los conocimientos de los anteriores",
              ],
              correctAnswer: "Cada módulo siguiente se apoya en los conocimientos de los anteriores",
            },
            {
              prompt: "¿A qué puede llevar saltarse determinados módulos del curso?",
              options: [
                "A obtener automáticamente el certificado sin haber estudiado",
                "Esto no afecta en absoluto al aprendizaje posterior",
                "A lagunas de conocimiento que se manifestarán en etapas posteriores",
              ],
              correctAnswer: "A lagunas de conocimiento que se manifestarán en etapas posteriores",
            },
            {
              prompt: "¿Qué se requiere para completar el curso por completo?",
              options: [
                "Basta con abrir solamente la primera lección del curso",
                "Completar todas las tareas, y no solo algunos módulos seleccionados",
                "Completar cualquier módulo único a elección",
              ],
              correctAnswer: "Completar todas las tareas, y no solo algunos módulos seleccionados",
            },
          ],
        },
        {
          slug: "poluchenie-sertifikata",
          title: "Obtención del certificado",
          summary: "Qué significa completar el curso «El camino del trader» y cómo aprovechar los conocimientos adquiridos.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Completar todos los módulos del curso «El camino del trader» significa haber recorrido el camino completo desde los conceptos básicos del mercado hasta temas avanzados: indicadores, análisis de volumen, datos on-chain, DeFi, tokenómica y la construcción de una estrategia de trading propia con verificación sobre datos históricos.",
            },
            {
              type: "paragraph",
              text: "Completar el curso por sí solo no sustituye la experiencia práctica: las condiciones reales del mercado, la psicología en vivo bajo presión y el trabajo con capital real requieren práctica adicional. Los conocimientos del curso son el fundamento sobre el que se construye el desarrollo posterior como trader.",
            },
            {
              type: "list",
              items: [
                "El curso abarca el camino desde los conceptos básicos del mercado hasta temas avanzados de análisis y estrategias",
                "Completar el curso es un fundamento, no un sustituto de la experiencia real de trading",
                "El desarrollo posterior requiere práctica, llevar un diario de trading y analizar constantemente las propias decisiones",
              ],
            },
          ],
          questions: [
            {
              prompt: "¿Qué abarca la finalización completa del curso «El camino del trader»?",
              options: [
                "Solo los fundamentos del uso de una billetera",
                "Exclusivamente los aspectos legales de las criptomonedas",
                "El camino desde los conceptos básicos del mercado hasta temas avanzados de análisis y estrategias",
              ],
              correctAnswer: "El camino desde los conceptos básicos del mercado hasta temas avanzados de análisis y estrategias",
            },
            {
              prompt: "¿Completar el curso sustituye la experiencia real de trading?",
              options: [
                "Sí, el curso sustituye por completo cualquier práctica",
                "No, el curso es un fundamento, y la experiencia real requiere práctica adicional",
                "Sí, pero solo para operaciones con apalancamiento superior a 10x",
              ],
              correctAnswer: "No, el curso es un fundamento, y la experiencia real requiere práctica adicional",
            },
            {
              prompt: "¿Qué se recomienda seguir haciendo después de completar el curso?",
              options: [
                "Abandonar de inmediato la gestión de riesgo",
                "Llevar un diario de trading y analizar constantemente las propias decisiones",
                "Dejar por completo de analizar la propia operativa",
              ],
              correctAnswer: "Llevar un diario de trading y analizar constantemente las propias decisiones",
            },
          ],
        },
      ],
    },
  ],
};
