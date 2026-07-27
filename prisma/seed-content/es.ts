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
                "El trading implica operaciones frecuentes en horizontes cortos",
                "El trading solo está disponible para los bancos",
                "El trading no implica riesgo",
              ],
              correctAnswer: "El trading implica operaciones frecuentes en horizontes cortos",
            },
            {
              prompt: "A diferencia del inversor clásico, ¿quién puede ganar también con la caída del precio de un activo?",
              options: ["El trader que abre posiciones cortas", "Solo los bancos", "Solo los market makers"],
              correctAnswer: "El trader que abre posiciones cortas",
            },
            {
              prompt: "¿Qué aportan los market makers al mercado?",
              options: ["Liquidez para las operaciones de otros participantes", "Regulación estatal", "Un tipo de cambio fijo del activo"],
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
              options: ["Opera 24/7 sin días de descanso", "Solo se negocia en días laborables durante el día", "Está totalmente regulado por el Estado"],
              correctAnswer: "Opera 24/7 sin días de descanso",
            },
            {
              prompt: "¿Qué se negocia en el mercado Forex?",
              options: ["Pares de divisas", "Acciones de empresas", "Materias primas"],
              correctAnswer: "Pares de divisas",
            },
            {
              prompt: "¿Cuál de los siguientes mercados suele destacar por la mayor volatilidad?",
              options: ["El de criptomonedas", "El mercado de bonos del Estado", "Los pares de divisas del G7"],
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
              options: ["El precio del activo", "El volumen de negociación", "El número de traders"],
              correctAnswer: "El precio del activo",
            },
            {
              prompt: "¿Qué es un timeframe?",
              options: [
                "El período de tiempo que representa un elemento del gráfico",
                "El nombre de la bolsa",
                "Un tipo de orden",
              ],
              correctAnswer: "El período de tiempo que representa un elemento del gráfico",
            },
            {
              prompt: "¿Por qué los traders analizan varios timeframes al mismo tiempo?",
              options: [
                "Para ver el panorama general de la tendencia y el punto exacto de entrada al mismo tiempo",
                "No tiene ningún sentido práctico",
                "Para evitar las comisiones de la bolsa",
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
                "El rango entre el precio de apertura y de cierre",
                "El volumen máximo de negociación",
                "El número de participantes del mercado",
              ],
              correctAnswer: "El rango entre el precio de apertura y de cierre",
            },
            {
              prompt: "¿Qué muestran las sombras (mechas) de la vela?",
              options: [
                "El rango de precio fuera del cuerpo: el máximo y el mínimo del período",
                "El volumen promedio de negociación",
                "El número de operaciones del día",
              ],
              correctAnswer: "El rango de precio fuera del cuerpo: el máximo y el mínimo del período",
            },
            {
              prompt: "¿Qué puede indicar una sombra inferior larga tras una caída del precio?",
              options: [
                "Los compradores recompraron activamente el precio desde abajo: es posible un giro",
                "El mercado seguramente continuará cayendo",
                "El volumen de negociación fue nulo",
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
                "El precio donde los compradores han detenido históricamente la caída",
                "El precio de apertura de la bolsa",
                "La comisión por operación",
              ],
              correctAnswer: "El precio donde los compradores han detenido históricamente la caída",
            },
            {
              prompt: "¿Qué suele ocurrir con un nivel de resistencia después de que se rompe al alza?",
              options: [
                "A menudo se convierte en un nuevo soporte",
                "Desaparece y deja de influir en el precio",
                "El precio debe regresar de inmediato",
              ],
              correctAnswer: "A menudo se convierte en un nuevo soporte",
            },
            {
              prompt: "¿Cómo se deben trazar correctamente niveles fiables en el gráfico?",
              options: [
                "Con varios toques del precio, no con un solo punto",
                "Exactamente en el centro del gráfico",
                "Solo en el timeframe de un minuto",
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
                "De una secuencia de máximos y mínimos crecientes",
                "De velas de la misma altura",
                "Solo de velas verdes consecutivas",
              ],
              correctAnswer: "De una secuencia de máximos y mínimos crecientes",
            },
            {
              prompt: "¿Qué es una tendencia lateral (flat)?",
              options: [
                "El movimiento del precio dentro de un rango sin dirección clara",
                "Una caída brusca del precio",
                "Un período de suspensión de la negociación en la bolsa",
              ],
              correctAnswer: "El movimiento del precio dentro de un rango sin dirección clara",
            },
            {
              prompt: "¿Por qué se dice que \"la tendencia es tu amiga\"?",
              options: [
                "Operar a favor de la tendencia da estadísticamente más probabilidades de éxito",
                "La tendencia nunca cambia de dirección",
                "Es solo una figura retórica sin sentido práctico",
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
                "El movimiento es débil y puede no estar confirmado",
                "Es la señal más fiable para entrar",
                "La liquidez del activo es máxima",
              ],
              correctAnswer: "El movimiento es débil y puede no estar confirmado",
            },
            {
              prompt: "¿Qué es la liquidez del mercado?",
              options: [
                "La facilidad de comprar/vender un activo sin afectar mucho su precio",
                "La cantidad total de monedas en circulación",
                "La comisión de la bolsa por operación",
              ],
              correctAnswer: "La facilidad de comprar/vender un activo sin afectar mucho su precio",
            },
            {
              prompt: "¿Qué riesgo corre un trader al operar con un activo poco líquido?",
              options: [
                "Un gran slippage al ejecutar la operación",
                "La ausencia total de comisiones",
                "Una ganancia garantizada",
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
                "Limitar la pérdida de la operación de antemano",
                "Aumentar el tamaño de la posición",
                "Garantizar la ganancia",
              ],
              correctAnswer: "Limitar la pérdida de la operación de antemano",
            },
            {
              prompt: "¿Qué porcentaje del depósito se recomienda arriesgar habitualmente en una sola operación?",
              options: ["1-2%", "25-30%", "Todo el depósito"],
              correctAnswer: "1-2%",
            },
            {
              prompt: "¿Qué significa una relación riesgo/beneficio de 1:3?",
              options: [
                "La ganancia potencial es 3 veces mayor que el riesgo",
                "El riesgo es 3 veces mayor que la ganancia",
                "La operación se cerrará en 3 horas",
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
                "La EMA da más peso a los precios más recientes",
                "La SMA solo funciona en el gráfico de un minuto",
                "No hay diferencia, es lo mismo",
              ],
              correctAnswer: "La EMA da más peso a los precios más recientes",
            },
            {
              prompt: "¿Qué indica que el precio esté por encima de la media móvil?",
              options: ["La tendencia probablemente es alcista", "El activo está seguramente sobrevalorado", "El volumen de negociación es cero"],
              correctAnswer: "La tendencia probablemente es alcista",
            },
            {
              prompt: "¿A qué se le llama \"cruce dorado\"?",
              options: [
                "El cruce de una MA corta por encima de una larga: una señal alcista",
                "El momento en que se lista una nueva moneda",
                "El cruce del precio con la línea cero",
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
              options: ["De 0 a 100", "De -1 a 1", "De 0 a 10000"],
              correctAnswer: "De 0 a 100",
            },
            {
              prompt: "¿Qué suele significar un RSI por encima de 70?",
              options: ["El activo está en zona de sobrecompra", "El activo no se puede vender", "El volumen de negociación cayó a cero"],
              correctAnswer: "El activo está en zona de sobrecompra",
            },
            {
              prompt: "¿Qué es la divergencia del RSI?",
              options: [
                "El precio y el indicador se mueven en direcciones opuestas: una señal de posible giro",
                "La coincidencia total entre el movimiento del precio y del indicador",
                "Un fallo técnico del indicador",
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
              options: ["61.8%", "10%", "100%"],
              correctAnswer: "61.8%",
            },
            {
              prompt: "¿Para qué se utilizan los retrocesos de Fibonacci?",
              options: [
                "Para buscar puntos de entrada en la corrección dentro de la tendencia",
                "Para calcular la comisión de la bolsa",
                "Para determinar la hora exacta de publicación de noticias",
              ],
              correctAnswer: "Para buscar puntos de entrada en la corrección dentro de la tendencia",
            },
            {
              prompt: "¿Para qué sirven las extensiones de Fibonacci?",
              options: [
                "Para determinar objetivos de precio más allá del impulso",
                "Para determinar el tamaño del stop-loss en porcentaje",
                "Para mostrar el volumen de negociación",
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
                "Una continuación garantizada del alza",
                "La suspensión de la negociación en la bolsa",
              ],
              correctAnswer: "Un probable giro de la tendencia alcista",
            },
            {
              prompt: "¿Qué confirma la formación del patrón \"doble techo\"?",
              options: ["La ruptura de la línea de cuello hacia abajo", "La aparición de un tercer pico", "El aumento de volumen justo en el pico"],
              correctAnswer: "La ruptura de la línea de cuello hacia abajo",
            },
            {
              prompt: "¿Por qué es importante el volumen al confirmar la ruptura de un patrón?",
              options: [
                "Sin volumen, la ruptura suele resultar falsa",
                "El volumen no influye en absoluto en los patrones",
                "El volumen solo importa en el timeframe diario",
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
              options: ["En la dirección de la tendencia previa", "Siempre estrictamente hacia abajo", "En una dirección aleatoria"],
              correctAnswer: "En la dirección de la tendencia previa",
            },
            {
              prompt: "¿Qué tienen en común los triángulos, las banderas y los rectángulos?",
              options: [
                "Son pausas/consolidaciones dentro de la tendencia",
                "Siempre son señales de giro",
                "Solo aparecen en el forex",
              ],
              correctAnswer: "Son pausas/consolidaciones dentro de la tendencia",
            },
            {
              prompt: "¿Qué suele acompañar a una salida real de un triángulo?",
              options: ["Un pico de volumen", "La ausencia total de volumen", "La suspensión de la negociación"],
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
              options: ["Con el superior (por ejemplo, el diario)", "Con el de un minuto", "Con cualquiera al azar"],
              correctAnswer: "Con el superior (por ejemplo, el diario)",
            },
            {
              prompt: "¿Para qué sirve el timeframe inferior en el análisis multitemporal?",
              options: ["Para entrar con precisión en la operación", "Para sustituir por completo al timeframe superior", "Para calcular la comisión de la bolsa"],
              correctAnswer: "Para entrar con precisión en la operación",
            },
            {
              prompt: "¿Qué puede ocurrir si se ignora el timeframe superior?",
              options: [
                "Operar en contra de la tendencia principal",
                "Un aumento automático de la ganancia",
                "Nada, no tiene ninguna importancia",
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
                "El intento de recuperar de inmediato una pérdida mediante operaciones emocionales",
                "Una estrategia oficial de los fondos de cobertura",
                "La devolución de la comisión por parte de la bolsa",
              ],
              correctAnswer: "El intento de recuperar de inmediato una pérdida mediante operaciones emocionales",
            },
            {
              prompt: "¿Para qué le sirve a un trader llevar un diario de trading?",
              options: [
                "Para analizar errores y mejorar la estrategia",
                "Es un requisito de la bolsa",
                "Para reducir los impuestos",
              ],
              correctAnswer: "Para analizar errores y mejorar la estrategia",
            },
            {
              prompt: "¿Qué emoción suele hacer que se mantenga demasiado tiempo una posición perdedora?",
              options: ["La esperanza de un giro y el miedo a asumir la pérdida", "El aburrimiento", "La confianza en que la bolsa tiene razón"],
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
                "El punto de entrada, el stop-loss y el objetivo de ganancia",
                "Solo el punto de entrada",
                "No hace falta definir nada de antemano",
              ],
              correctAnswer: "El punto de entrada, el stop-loss y el objetivo de ganancia",
            },
            {
              prompt: "¿Por qué conviene practicar primero con un saldo virtual?",
              options: [
                "Para poner a prueba la estrategia sin arriesgar dinero real",
                "El saldo virtual genera más ganancias",
                "Es un requisito legal obligatorio",
              ],
              correctAnswer: "Para poner a prueba la estrategia sin arriesgar dinero real",
            },
            {
              prompt: "¿Qué es importante hacer justo después de cerrar una operación?",
              options: [
                "Analizarla y anotar el resultado en el diario",
                "Abrir de inmediato una operación contraria",
                "Borrar el historial de la operación",
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
                "Los activos de riesgo (incluida la cripto) suelen caer",
                "El mercado cripto no reacciona en absoluto a la tasa",
                "El bitcoin siempre sube cuando se eleva la tasa",
              ],
              correctAnswer: "Los activos de riesgo (incluida la cripto) suelen caer",
            },
            {
              prompt: "¿Qué es el FOMC?",
              options: [
                "El comité de la Fed que toma las decisiones sobre la tasa de interés",
                "La mayor exchange de criptomonedas de EE. UU.",
                "Un índice de volatilidad del mercado",
              ],
              correctAnswer: "El comité de la Fed que toma las decisiones sobre la tasa de interés",
            },
            {
              prompt: "¿Cómo se denomina en la jerga del mercado a la flexibilización de la política monetaria?",
              options: ["Política \"dovish\"", "Política \"hawkish\"", "Emisión \"neutral\""],
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
                "El cambio de precios de la canasta de bienes y servicios de consumo",
                "El tipo de cambio del bitcoin frente al dólar",
                "El volumen de negociación en la bolsa",
              ],
              correctAnswer: "El cambio de precios de la canasta de bienes y servicios de consumo",
            },
            {
              prompt: "¿Cómo suele reaccionar el mercado cuando el CPI sale por encima del pronóstico?",
              options: [
                "Los activos de riesgo suelen caer",
                "El mercado nunca reacciona al CPI",
                "El mercado cripto detiene automáticamente la negociación",
              ],
              correctAnswer: "Los activos de riesgo suelen caer",
            },
            {
              prompt: "¿Qué indicador de inflación se considera el preferido de la propia Fed?",
              options: ["PCE", "DXY", "RSI"],
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
                "La volatilidad del bitcoin",
                "La capitalización total del mercado cripto",
              ],
              correctAnswer: "La fortaleza del dólar estadounidense frente a una canasta de otras divisas",
            },
            {
              prompt: "¿Cómo suelen relacionarse los movimientos del DXY y del bitcoin?",
              options: [
                "Suelen moverse en direcciones opuestas",
                "Siempre se mueven de forma absolutamente sincronizada",
                "No tienen ninguna relación",
              ],
              correctAnswer: "Suelen moverse en direcciones opuestas",
            },
            {
              prompt: "¿De qué puede ser una advertencia una subida brusca del índice DXY?",
              options: [
                "De una probable corrección en el mercado cripto",
                "De una subida garantizada del bitcoin",
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
                "Con las acciones tecnológicas (Nasdaq)",
                "Con los bonos del Estado",
                "No se correlaciona con nada",
              ],
              correctAnswer: "Con las acciones tecnológicas (Nasdaq)",
            },
            {
              prompt: "¿Qué significa una alta correlación entre BTC y Nasdaq?",
              options: [
                "Suelen moverse en la misma dirección",
                "Están obligados a moverse en direcciones opuestas",
                "BTC sustituye por completo al índice Nasdaq",
              ],
              correctAnswer: "Suelen moverse en la misma dirección",
            },
            {
              prompt: "¿Qué puede debilitar temporalmente la correlación de BTC con el mercado bursátil?",
              options: [
                "Eventos específicos del sector cripto (hackeo de exchange, noticias regulatorias)",
                "Un día festivo en la bolsa",
                "Un cambio de huso horario",
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
                "Para hacer seguimiento de las fechas de noticias importantes que influyen en el mercado",
                "Para planificar sus vacaciones personales",
                "Para reemplazar por completo el análisis técnico",
              ],
              correctAnswer: "Para hacer seguimiento de las fechas de noticias importantes que influyen en el mercado",
            },
            {
              prompt: "¿Qué es el NFP?",
              options: [
                "El informe de empleo no agrícola de EE. UU.",
                "Un nuevo protocolo criptográfico",
                "El índice de miedo y codicia",
              ],
              correctAnswer: "El informe de empleo no agrícola de EE. UU.",
            },
            {
              prompt: "¿Qué es razonable hacer antes de la publicación de una noticia de alta importancia?",
              options: [
                "Reducir el riesgo o abstenerse de abrir nuevas operaciones",
                "Aumentar al máximo el tamaño de la posición",
                "Desactivar los stop-loss",
              ],
              correctAnswer: "Reducir el riesgo o abstenerse de abrir nuevas operaciones",
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
                "Un nivel de stop-loss",
                "Un indicador de volumen",
              ],
              correctAnswer: "El hueco entre las mechas de la 1.ª y la 3.ª vela debido a un impulso brusco",
            },
            {
              prompt: "¿Qué suele hacer el mercado más tarde con una zona de imbalance?",
              options: [
                "Regresa y la \"cierra\" parcial o totalmente",
                "Nunca vuelve a tocarla",
                "La elimina automáticamente del gráfico",
              ],
              correctAnswer: "Regresa y la \"cierra\" parcial o totalmente",
            },
            {
              prompt: "¿De cuántas velas se compone el patrón FVG clásico?",
              options: ["De tres", "De una", "De siete"],
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
                "Cerca de máximos/mínimos iguales y de niveles evidentes de soporte/resistencia",
                "Exactamente en el medio del rango, sin motivo",
                "Solo en velas de noticias",
              ],
              correctAnswer: "Cerca de máximos/mínimos iguales y de niveles evidentes de soporte/resistencia",
            },
            {
              prompt: "¿Qué es la liquidez buy-side?",
              options: [
                "Los stops de los vendedores en corto, ubicados por encima de los máximos locales",
                "Los stops de los compradores en largo por debajo de los mínimos locales",
                "La comisión de la bolsa por la compra",
              ],
              correctAnswer: "Los stops de los vendedores en corto, ubicados por encima de los máximos locales",
            },
            {
              prompt: "¿Para qué necesitan los grandes jugadores liquidez en el mercado?",
              options: [
                "Para construir o cerrar una posición grande sin un slippage importante",
                "Para detener por completo la negociación",
                "Esto no tiene relación con los grandes jugadores",
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
                "El precio siempre continúa el movimiento en la dirección de la perforación",
                "Nada, el volumen cae a cero",
              ],
              correctAnswer: "Un giro brusco en la dirección opuesta a la perforación",
            },
            {
              prompt: "¿Qué zona suele convertirse en el objetivo de un liquidity sweep?",
              options: [
                "Una zona con órdenes pendientes, por ejemplo, máximos/mínimos iguales",
                "El medio de un rango aleatorio sin niveles",
                "Una zona con liquidez nula",
              ],
              correctAnswer: "Una zona con órdenes pendientes, por ejemplo, máximos/mínimos iguales",
            },
            {
              prompt: "¿Qué error es típico de los principiantes al ver un sweep?",
              options: [
                "Entrar en la dirección de la ruptura sin considerar un posible giro",
                "Cerrar demasiado pronto una posición ganadora",
                "Colocar el stop-loss antes de entrar en la operación",
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
                "Un posible giro de la tendencia actual",
                "La continuación de la tendencia con aceleración",
                "La ausencia de liquidez en el mercado",
              ],
              correctAnswer: "Un posible giro de la tendencia actual",
            },
            {
              prompt: "¿Qué confirma el Break of Structure (BOS)?",
              options: [
                "La continuación de la tendencia actual",
                "La suspensión automática de la negociación",
                "La anulación de todos los niveles anteriores",
              ],
              correctAnswer: "La continuación de la tendencia actual",
            },
            {
              prompt: "¿De qué se compone la estructura de una tendencia alcista?",
              options: [
                "De Higher High y Higher Low",
                "De Lower High y Lower Low",
                "De velas de la misma altura",
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
                "La última vela opuesta antes de un fuerte movimiento impulsivo",
                "Un indicador de volumen de negociación",
                "Un tipo de orden bursátil con ejecución retardada",
              ],
              correctAnswer: "La última vela opuesta antes de un fuerte movimiento impulsivo",
            },
            {
              prompt: "¿Cómo suelen utilizar los traders los order blocks?",
              options: [
                "Como zonas potenciales de entrada cuando el precio regresa a ellas",
                "Como un indicador de inflación",
                "Para calcular la comisión de la bolsa",
              ],
              correctAnswer: "Como zonas potenciales de entrada cuando el precio regresa a ellas",
            },
            {
              prompt: "¿En qué se diferencia un order block alcista de uno bajista?",
              options: [
                "Se forma antes de un impulso al alza, no a la baja",
                "Siempre es de mayor tamaño",
                "Solo aparece en el timeframe diario",
              ],
              correctAnswer: "Se forma antes de un impulso al alza, no a la baja",
            },
          ],
        },
      ],
    },
  ],
};
