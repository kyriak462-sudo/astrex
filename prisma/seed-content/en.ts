import type { CourseSeed } from "./types";

export const COURSE_EN: CourseSeed = {
  slug: "put-treydera",
  title: "The Trader's Path",
  description:
    "A structured path from basic market concepts to hands-on practice with a virtual account.",
  modules: [
    {
      title: "Trading Basics",
      lessons: [
        {
          slug: "chto-takoe-treyding",
          title: "What Is Trading",
          summary: "The difference between investing and trading, and the main market participants.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "Trading is the buying and selling of financial assets (cryptocurrencies, stocks, currencies) with the goal of profiting from changes in their price. Unlike classic investing, where an asset is held for years in anticipation of its growth, a trader profits from the price movement itself — both up and down.",
            },
            {
              type: "paragraph",
              text: "Different participants act in the market at the same time: retail traders (private individuals), institutional investors (funds, banks), market makers (who provide liquidity), and algorithmic systems. Understanding who is trading and why helps explain why the price moves the way it does.",
            },
            {
              type: "list",
              items: [
                "An investor tends to hold an asset for a long time and focuses on its fundamental value",
                "A trader opens and closes trades more frequently — anywhere from minutes to weeks",
                "A trader can also profit from a falling price by opening short positions",
              ],
            },
          ],
          questions: [
            {
              prompt: "What fundamentally distinguishes trading from long-term investing?",
              options: [
                "Trading is only available to banks",
                "Trading involves frequent trades over short time horizons",
                "Trading carries no risk",
              ],
              correctAnswer: "Trading involves frequent trades over short time horizons",
            },
            {
              prompt: "Unlike a classic investor, who can profit even when an asset's price falls?",
              options: ["Only market makers", "A trader who opens short positions", "Only banks"],
              correctAnswer: "A trader who opens short positions",
            },
            {
              prompt: "What do market makers provide in the market?",
              options: ["A fixed asset price", "Government regulation", "Liquidity for other participants' trades"],
              correctAnswer: "Liquidity for other participants' trades",
            },
          ],
        },
        {
          slug: "vidy-rynkov",
          title: "Types of Markets",
          summary: "Crypto, forex, stocks, and commodities — what's the difference.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "The crypto market trades around the clock, with no days off, and is decentralized — there's no single exchange that sets the price. Forex is the world's largest market for currency pairs, with enormous liquidity, but with limited trading hours on weekends. The stock market operates on the schedule of specific exchanges and is heavily regulated. Commodity markets (oil, gold) reflect the real balance of supply and demand for raw materials.",
            },
            {
              type: "list",
              items: [
                "Crypto: 24/7, high volatility, low barrier to entry",
                "Forex: enormous liquidity, operates 5 days a week",
                "Stocks: tied to a company's business, exchange trading hours",
                "Commodities: depend on real supply/demand and geopolitics",
              ],
            },
          ],
          questions: [
            {
              prompt: "How does the crypto market differ from the stock market?",
              options: ["It's fully regulated by the government", "It only trades on weekday afternoons", "It operates 24/7 with no days off"],
              correctAnswer: "It operates 24/7 with no days off",
            },
            {
              prompt: "What is traded on the Forex market?",
              options: ["Company stocks", "Raw commodities", "Currency pairs"],
              correctAnswer: "Currency pairs",
            },
            {
              prompt: "Which of the listed markets is usually the most volatile?",
              options: ["The government bond market", "Cryptocurrency", "G7 currency pairs"],
              correctAnswer: "Cryptocurrency",
            },
          ],
        },
        {
          slug: "kak-chitat-grafik",
          title: "How to Read a Chart",
          summary: "Axes, timeframes, open/close price.",
          xpReward: 10,
          content: [
            {
              type: "paragraph",
              text: "On a price chart, the vertical axis shows the asset's price, and the horizontal axis shows time. Each data point (a candle or bar) contains the open, close, high, and low price for the selected period — this is called a timeframe.",
            },
            {
              type: "paragraph",
              text: "A timeframe is the time interval represented by one element of the chart: a minute, an hour, a day, a week. The choice of timeframe depends on the trading style: scalpers look at minute charts, swing traders look at hourly and daily charts.",
            },
            {
              type: "list",
              items: [
                "Line chart — the simplest, shows only the closing price",
                "Candlestick chart — shows open/high/low/close, the most popular among traders",
                "Bar chart — similar to a candlestick chart, but visually less clear",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is shown on the vertical axis of a price chart?",
              options: ["The asset's price", "The number of traders", "Trading volume"],
              correctAnswer: "The asset's price",
            },
            {
              prompt: "What is a timeframe?",
              options: [
                "The name of an exchange",
                "The period of time represented by one element of the chart",
                "A type of order",
              ],
              correctAnswer: "The period of time represented by one element of the chart",
            },
            {
              prompt: "Why do traders analyze several timeframes at once?",
              options: [
                "To see the overall trend picture and a precise entry point at the same time",
                "To avoid exchange fees",
                "It has no practical purpose",
              ],
              correctAnswer: "To see the overall trend picture and a precise entry point at the same time",
            },
          ],
        },
        {
          slug: "svechnoy-analiz",
          title: "Candlestick Analysis",
          summary: "The anatomy of a Japanese candlestick and basic candlestick patterns.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "The Japanese candlestick is the main price visualization tool for traders. It consists of a body (the range between the open and close price) and wicks/shadows above and below (the highest and lowest price for the period). A green (bullish) candle means the close is above the open; a red (bearish) candle means the opposite.",
            },
            {
              type: "paragraph",
              text: "A single candle already tells the story of the struggle between buyers and sellers: a long body indicates a confident move, while long wicks show that the price was actively \"pushed back\" in the opposite direction.",
            },
          ],
          questions: [
            {
              prompt: "What does the body of a candle show?",
              options: [
                "The number of market participants",
                "The range between the open and close price",
                "The maximum trading volume",
              ],
              correctAnswer: "The range between the open and close price",
            },
            {
              prompt: "What do the wicks (shadows) of a candle show?",
              options: [
                "The number of trades in a day",
                "The price range beyond the body — the high and low for the period",
                "The average trading volume",
              ],
              correctAnswer: "The price range beyond the body — the high and low for the period",
            },
            {
              prompt: "What might a long lower wick after a price drop indicate?",
              options: [
                "Trading volume was zero",
                "Buyers actively bought up the price from below — a reversal is possible",
                "The market will definitely continue falling",
              ],
              correctAnswer: "Buyers actively bought up the price from below — a reversal is possible",
            },
          ],
        },
        {
          slug: "podderzhka-i-soprotivlenie",
          title: "Support and Resistance",
          summary: "How to find key levels on a chart.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "A support level is a price at which buyers have repeatedly halted a decline in the past. A resistance level is the opposite — a price where sellers have halted a rally. These levels form the market's \"memory\": price often reacts to them again.",
            },
            {
              type: "paragraph",
              text: "An important principle: after a breakout, a level often switches roles — former resistance becomes support, and vice versa. Reliable levels are built not on a single point, but on multiple price touches.",
            },
          ],
          questions: [
            {
              prompt: "What is a support level?",
              options: [
                "A trading fee",
                "A price where buyers have historically halted a decline",
                "The exchange's opening price",
              ],
              correctAnswer: "A price where buyers have historically halted a decline",
            },
            {
              prompt: "What usually happens to a resistance level after it's broken to the upside?",
              options: [
                "The price is guaranteed to instantly return",
                "It disappears and no longer affects the price",
                "It often becomes new support",
              ],
              correctAnswer: "It often becomes new support",
            },
            {
              prompt: "How should reliable levels be drawn on a chart?",
              options: [
                "Based on multiple price touches, not a single point",
                "Only on the 1-minute timeframe",
                "Strictly in the center of the chart",
              ],
              correctAnswer: "Based on multiple price touches, not a single point",
            },
          ],
        },
        {
          slug: "trend-i-ego-struktura",
          title: "Trend and Its Structure",
          summary: "Uptrend, downtrend, and sideways trend; high/low structure.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "An uptrend consists of a sequence of higher highs (Higher High) and higher lows (Higher Low). A downtrend is the mirror image: Lower High and Lower Low. When price moves within a range with no clear direction, this is called a sideways trend, or range.",
            },
            {
              type: "paragraph",
              text: "Trading in the direction of the trend statistically offers better odds of success than trying to catch a reversal against it — hence the well-known rule \"the trend is your friend.\"",
            },
          ],
          questions: [
            {
              prompt: "What does an uptrend consist of?",
              options: [
                "Only green candles in a row",
                "A sequence of higher highs and higher lows",
                "Candles of the same height",
              ],
              correctAnswer: "A sequence of higher highs and higher lows",
            },
            {
              prompt: "What is a sideways trend (range)?",
              options: [
                "A sharp price decline",
                "Price movement within a range with no clear direction",
                "A pause in exchange trading",
              ],
              correctAnswer: "Price movement within a range with no clear direction",
            },
            {
              prompt: "Why do people say \"the trend is your friend\"?",
              options: [
                "It's just a figure of speech with no practical meaning",
                "A trend never changes direction",
                "Trading with the trend statistically offers better odds of success",
              ],
              correctAnswer: "Trading with the trend statistically offers better odds of success",
            },
          ],
        },
        {
          slug: "obyom-i-likvidnost",
          title: "Volume and Liquidity",
          summary: "Why watch volume, and what market liquidity is.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Trading volume shows how much of an asset was bought and sold over a period. Strong price moves confirmed by high volume are considered more reliable than the same moves on low volume.",
            },
            {
              type: "paragraph",
              text: "Liquidity is the ability to buy or sell an asset quickly and without significantly affecting its price. On low-liquidity assets, even a small trade can seriously move the price and lead to slippage — execution of an order at a worse price than expected.",
            },
          ],
          questions: [
            {
              prompt: "What does a price increase on low trading volume suggest?",
              options: [
                "It's the most reliable entry signal",
                "The asset's liquidity is at its maximum",
                "The move is weak and may not be confirmed",
              ],
              correctAnswer: "The move is weak and may not be confirmed",
            },
            {
              prompt: "What is market liquidity?",
              options: [
                "The ease of buying/selling an asset without significantly affecting its price",
                "The exchange's trading fee",
                "The total number of coins in circulation",
              ],
              correctAnswer: "The ease of buying/selling an asset without significantly affecting its price",
            },
            {
              prompt: "What risk does a trader face when working with a low-liquidity asset?",
              options: [
                "Guaranteed profit",
                "Significant slippage when executing a trade",
                "A complete absence of fees",
              ],
              correctAnswer: "Significant slippage when executing a trade",
            },
          ],
        },
        {
          slug: "risk-menedzhment-osnovy",
          title: "Risk Management: Basics",
          summary: "Position size, stop-loss, risk/reward ratio.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Risk management is what separates a professional trader from a casino gambler. A stop-loss is a pre-set level at which a trade closes with a limited loss if the market moves against the forecast.",
            },
            {
              type: "paragraph",
              text: "Most experienced traders risk no more than 1–2% of their deposit on a single trade — this allows them to survive a series of losing trades without losing their entire capital. The risk/reward ratio shows how many times the potential profit exceeds the risk: for example, 1:3 means the profit is three times larger than the possible loss.",
            },
            {
              type: "list",
              items: [
                "A stop-loss is placed before entering a trade, not after",
                "Position size is calculated based on the risk in money terms, not the other way around",
                "Even a profitable strategy can wipe out an account without risk control",
              ],
            },
          ],
          questions: [
            {
              prompt: "Why is a stop-loss needed?",
              options: [
                "To guarantee profit",
                "To increase position size",
                "To limit the loss on a trade in advance",
              ],
              correctAnswer: "To limit the loss on a trade in advance",
            },
            {
              prompt: "What percentage of the deposit is usually recommended to risk on one trade?",
              options: ["25–30%", "The entire deposit", "1–2%"],
              correctAnswer: "1–2%",
            },
            {
              prompt: "What does a risk/reward ratio of 1:3 mean?",
              options: [
                "The trade will close after 3 hours",
                "Risk is 3 times greater than the profit",
                "Potential profit is 3 times greater than the risk",
              ],
              correctAnswer: "Potential profit is 3 times greater than the risk",
            },
          ],
        },
      ],
    },
    {
      title: "Technical Analysis",
      lessons: [
        {
          slug: "skolzyashchie-srednie",
          title: "Indicators: Moving Averages",
          summary: "SMA and EMA — how to use them to determine a trend.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "A moving average smooths the price over a chosen period, helping to see the overall trend direction without the \"noise\" of individual candles. SMA (simple) gives equal weight to all prices in the period, while EMA (exponential) reacts more strongly to recent prices.",
            },
            {
              type: "paragraph",
              text: "When the price is above the moving average, the trend is usually considered upward; below it, downward. A crossover of a short and a long moving average (for example, MA50 crossing above MA200) is a popular signal known as a \"golden cross.\"",
            },
          ],
          questions: [
            {
              prompt: "What is the difference between SMA and EMA?",
              options: [
                "There's no difference, they're the same thing",
                "EMA gives more weight to recent prices",
                "SMA only works on the 1-minute chart",
              ],
              correctAnswer: "EMA gives more weight to recent prices",
            },
            {
              prompt: "What does it suggest when the price is above the moving average?",
              options: ["The trend is likely upward", "Trading volume is zero", "The asset is definitely overvalued"],
              correctAnswer: "The trend is likely upward",
            },
            {
              prompt: "What is called a \"golden cross\"?",
              options: [
                "The moment a new coin is listed",
                "The price crossing the zero line",
                "A short MA crossing above a long MA — a bullish signal",
              ],
              correctAnswer: "A short MA crossing above a long MA — a bullish signal",
            },
          ],
        },
        {
          slug: "rsi-i-oscillyatory",
          title: "RSI and Oscillators",
          summary: "Overbought, oversold, divergences.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "RSI (Relative Strength Index) is an oscillator that measures the speed and strength of price changes on a scale from 0 to 100. Values above 70 are usually considered overbought, and below 30 — oversold.",
            },
            {
              type: "paragraph",
              text: "Divergence occurs when price and RSI move in different directions: for example, price makes a new high, but RSI doesn't. This is often seen as an early warning that the trend is weakening and a reversal may be coming.",
            },
          ],
          questions: [
            {
              prompt: "What range does the RSI indicator operate in?",
              options: ["From -1 to 1", "From 0 to 100", "From 0 to 10,000"],
              correctAnswer: "From 0 to 100",
            },
            {
              prompt: "What does an RSI above 70 usually mean?",
              options: ["Trading volume has fallen to zero", "The asset cannot be sold", "The asset is in the overbought zone"],
              correctAnswer: "The asset is in the overbought zone",
            },
            {
              prompt: "What is RSI divergence?",
              options: [
                "A technical glitch in the indicator",
                "Price and the indicator move in different directions — a signal of a possible reversal",
                "Price and the indicator move in complete sync",
              ],
              correctAnswer: "Price and the indicator move in different directions — a signal of a possible reversal",
            },
          ],
        },
        {
          slug: "urovni-fibonachchi",
          title: "Fibonacci Levels",
          summary: "Fibonacci retracements and extensions in chart mapping.",
          xpReward: 15,
          content: [
            {
              type: "paragraph",
              text: "Fibonacci retracement levels (23.6%, 38.2%, 50%, 61.8%, 78.6%) are drawn between the start and end of an impulsive move and help estimate where the price might halt a pullback before continuing the trend. Many traders consider the 61.8% level to be key.",
            },
            {
              type: "paragraph",
              text: "Fibonacci extensions, unlike retracements, are used to forecast price targets beyond the original impulse — in other words, where price might go next.",
            },
          ],
          questions: [
            {
              prompt: "Which Fibonacci level do many traders consider key for a retracement?",
              options: ["61.8%", "100%", "10%"],
              correctAnswer: "61.8%",
            },
            {
              prompt: "What are Fibonacci retracements used for?",
              options: [
                "Looking for entry points on a pullback within a trend",
                "Determining the exact time news will be published",
                "Calculating the exchange fee",
              ],
              correctAnswer: "Looking for entry points on a pullback within a trend",
            },
            {
              prompt: "What are Fibonacci extensions used for?",
              options: [
                "Showing trading volume",
                "Determining stop-loss size in percentage terms",
                "Determining price targets beyond the impulse",
              ],
              correctAnswer: "Determining price targets beyond the impulse",
            },
          ],
        },
        {
          slug: "patterny-razvorota",
          title: "Reversal Patterns",
          summary: "Head and shoulders, double top/bottom.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "The \"head and shoulders\" pattern is one of the best-known signals of an uptrend reversal: the price forms three peaks, where the middle one (the head) is higher than the two neighboring ones (the shoulders). A double top/bottom is a similar pattern made of two roughly equal peaks or troughs.",
            },
            {
              type: "paragraph",
              text: "A pattern is only considered confirmed after a break of the \"neckline\" — the level connecting the local lows between the peaks. A breakout without volume often turns out to be false.",
            },
          ],
          questions: [
            {
              prompt: "What does the \"head and shoulders\" pattern signal?",
              options: [
                "A likely reversal of an uptrend",
                "A halt in exchange trading",
                "Guaranteed continuation of the rally",
              ],
              correctAnswer: "A likely reversal of an uptrend",
            },
            {
              prompt: "What confirms that a \"double top\" pattern has played out?",
              options: ["The appearance of a third peak", "A break of the neckline to the downside", "A volume increase at the very top"],
              correctAnswer: "A break of the neckline to the downside",
            },
            {
              prompt: "Why is volume important when confirming a pattern breakout?",
              options: [
                "Volume only matters on the daily timeframe",
                "Without volume, a breakout is more often false",
                "Volume has no effect on patterns at all",
              ],
              correctAnswer: "Without volume, a breakout is more often false",
            },
          ],
        },
        {
          slug: "patterny-prodolzheniya",
          title: "Continuation Patterns",
          summary: "Flags, triangles, rectangles.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Continuation patterns — flags, triangles, rectangles — represent a pause or consolidation within an existing trend. Unlike reversal patterns, they most often resolve in the direction of the prior move.",
            },
            {
              type: "paragraph",
              text: "The price breaking out of such a consolidation is usually accompanied by a spike in volume, which helps distinguish a genuine breakout from a false one.",
            },
          ],
          questions: [
            {
              prompt: "In which direction does a \"flag\" pattern most often resolve?",
              options: ["Always strictly downward", "In the direction of the prior trend", "In a random direction"],
              correctAnswer: "In the direction of the prior trend",
            },
            {
              prompt: "What do triangles, flags, and rectangles have in common?",
              options: [
                "They are always reversal signals",
                "They only occur on forex",
                "They are pauses/consolidations within a trend",
              ],
              correctAnswer: "They are pauses/consolidations within a trend",
            },
            {
              prompt: "What most often accompanies a genuine breakout from a triangle?",
              options: ["A spike in volume", "A halt in trading", "A complete absence of volume"],
              correctAnswer: "A spike in volume",
            },
          ],
        },
        {
          slug: "multitaymfreym-analiz",
          title: "Timeframes and Multi-Timeframe Analysis",
          summary: "How to align signals across different timeframes.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Multi-timeframe analysis is a \"top-down\" approach: first, you determine the overall trend on a higher timeframe (for example, daily), then look for an entry point on a lower one (for example, hourly or 15-minute).",
            },
            {
              type: "paragraph",
              text: "Ignoring the higher timeframe is a common beginner mistake: a trade might look great on the 5-minute chart but go against the dominant daily trend, which sharply reduces the chances of success.",
            },
          ],
          questions: [
            {
              prompt: "Which timeframe does the \"top-down\" analysis method usually start with?",
              options: ["Any random one", "The higher one (for example, daily)", "The 1-minute one"],
              correctAnswer: "The higher one (for example, daily)",
            },
            {
              prompt: "Why is a lower timeframe needed in multi-timeframe analysis?",
              options: ["For a precise trade entry", "To calculate the exchange fee", "To completely replace the higher timeframe"],
              correctAnswer: "For a precise trade entry",
            },
            {
              prompt: "What can happen if you ignore the higher timeframe?",
              options: [
                "An automatic increase in profit",
                "Nothing, it doesn't matter",
                "Trading against the main trend",
              ],
              correctAnswer: "Trading against the main trend",
            },
          ],
        },
        {
          slug: "psikhologiya-treydera",
          title: "Trader Psychology",
          summary: "Emotional control, discipline, trading journal.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "Fear and greed are the two emotions that most often destroy trading strategies. Fear makes traders close profitable trades too early or avoid entering the market altogether; greed makes them hold a position longer than planned or increase risk after a winning streak.",
            },
            {
              type: "paragraph",
              text: "\"Revenge trading\" — trying to immediately recover a loss through a series of emotional trades without analysis — is one of the fastest ways to blow up a deposit. Keeping a trading journal helps review mistakes and gradually build discipline.",
            },
          ],
          questions: [
            {
              prompt: "What is \"revenge trading\"?",
              options: [
                "A fee refund from the exchange",
                "Trying to immediately recover a loss through emotional trades",
                "An official hedge fund strategy",
              ],
              correctAnswer: "Trying to immediately recover a loss through emotional trades",
            },
            {
              prompt: "Why should a trader keep a trading journal?",
              options: [
                "To analyze mistakes and improve the strategy",
                "To reduce taxes",
                "It's an exchange requirement",
              ],
              correctAnswer: "To analyze mistakes and improve the strategy",
            },
            {
              prompt: "Which emotion most often causes traders to hold a losing position too long?",
              options: ["Boredom", "Confidence in the exchange being right", "Hope for a reversal and fear of locking in the loss"],
              correctAnswer: "Hope for a reversal and fear of locking in the loss",
            },
          ],
        },
        {
          slug: "pervaya-virtualnaya-sdelka",
          title: "Your First Virtual Trade",
          summary: "Applying everything you've learned on a virtual balance.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "It's time to bring the theory together: before opening a trade, determine your entry point (based on levels and trend structure), your stop-loss (the maximum acceptable loss), and your profit target — in advance, before pressing the Long or Short button.",
            },
            {
              type: "paragraph",
              text: "The ASTREX \"Virtual Market\" section lets you practice the entire process on simulated data without risking real money — it's the best way to build discipline before moving on to trading with real capital.",
            },
          ],
          questions: [
            {
              prompt: "What should you determine before opening a trade?",
              options: [
                "Only the entry point",
                "Entry point, stop-loss, and profit target",
                "Nothing needs to be determined in advance",
              ],
              correctAnswer: "Entry point, stop-loss, and profit target",
            },
            {
              prompt: "Why practice on a virtual balance first?",
              options: [
                "A virtual balance yields more profit",
                "It's a mandatory legal requirement",
                "To work out a strategy without risking real money",
              ],
              correctAnswer: "To work out a strategy without risking real money",
            },
            {
              prompt: "What's important to do right after closing a trade?",
              options: [
                "Analyze it and record the result in a journal",
                "Delete the trade history",
                "Immediately open the opposite trade",
              ],
              correctAnswer: "Analyze it and record the result in a journal",
            },
          ],
        },
      ],
    },
    {
      title: "Macroeconomics and the Crypto Market",
      lessons: [
        {
          slug: "frs-i-protsentnye-stavki",
          title: "The Fed and Interest Rates",
          summary: "How US Federal Reserve rate decisions move the entire market, including crypto.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "The Fed (the US Federal Reserve) sets the key interest rate, which determines the cost of money throughout the global economy. When the rate is raised, borrowing becomes more expensive, and investors move out of risky assets — stocks and cryptocurrencies — into bonds and deposits.",
            },
            {
              type: "paragraph",
              text: "When the Fed cuts the rate or hints at easing policy, risky assets usually rise: money becomes cheaper, and investors are willing to take on risk again in pursuit of returns.",
            },
            {
              type: "list",
              items: [
                "FOMC meetings are held 8 times a year — these are key dates for the market",
                "The market reacts not just to the decision itself, but to the tone of the commentary (\"hawkish\" or \"dovish\")",
                "The crypto market is especially sensitive to rates due to its high share of speculative capital",
              ],
            },
          ],
          questions: [
            {
              prompt: "How does the market usually react to a Fed rate hike?",
              options: [
                "Bitcoin always rises when rates are hiked",
                "The crypto market doesn't react to rates at all",
                "Risky assets (including crypto) most often fall",
              ],
              correctAnswer: "Risky assets (including crypto) most often fall",
            },
            {
              prompt: "What is the FOMC?",
              options: [
                "The largest crypto exchange in the US",
                "The Fed committee that makes interest rate decisions",
                "A market volatility index",
              ],
              correctAnswer: "The Fed committee that makes interest rate decisions",
            },
            {
              prompt: "What is the easing of monetary policy called in market slang?",
              options: ["\"Neutral\" issuance", "\"Hawkish\" policy", "\"Dovish\" policy"],
              correctAnswer: "\"Dovish\" policy",
            },
          ],
        },
        {
          slug: "inflyatsiya-i-cpi",
          title: "Inflation and the CPI",
          summary: "Why inflation data moves the market more than many other news events.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "CPI (Consumer Price Index) is the main inflation indicator in the US, published monthly. If inflation comes in higher than expected, the market prices in tighter Fed policy — risky assets fall. If inflation is slowing, the market rallies.",
            },
            {
              type: "list",
              items: [
                "The CPI release is one of the most volatile moments of the month for the crypto market",
                "What matters isn't the figure itself, but how it differs from analysts' forecasts",
                "Besides CPI, there's PCE — the Fed's preferred inflation gauge",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does the CPI index measure?",
              options: [
                "Trading volume on the exchange",
                "Changes in the prices of a consumer basket of goods and services",
                "The bitcoin-to-dollar exchange rate",
              ],
              correctAnswer: "Changes in the prices of a consumer basket of goods and services",
            },
            {
              prompt: "How does the market usually react when CPI comes in above forecast?",
              options: [
                "The crypto market automatically halts trading",
                "The market never reacts to CPI",
                "Risky assets more often fall",
              ],
              correctAnswer: "Risky assets more often fall",
            },
            {
              prompt: "Which inflation gauge is considered the Fed's own preferred indicator?",
              options: ["RSI", "PCE", "DXY"],
              correctAnswer: "PCE",
            },
          ],
        },
        {
          slug: "indeks-dollara-dxy",
          title: "The Dollar Index (DXY)",
          summary: "The inverse correlation between the dollar and cryptocurrencies.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "DXY measures the strength of the US dollar relative to a basket of other currencies. Historically, DXY and bitcoin often move in opposite phases: a strong dollar weighs on crypto and other risky assets, while a weak dollar supports their growth.",
            },
            {
              type: "paragraph",
              text: "Experienced traders keep the DXY chart on a separate panel alongside BTC — a sharp rise in the dollar index often warns of a correction in the crypto market before it's even visible on the bitcoin chart itself.",
            },
          ],
          questions: [
            {
              prompt: "What does the DXY index measure?",
              options: [
                "The strength of the US dollar relative to a basket of other currencies",
                "The total market cap of the crypto market",
                "Bitcoin's volatility",
              ],
              correctAnswer: "The strength of the US dollar relative to a basket of other currencies",
            },
            {
              prompt: "How are DXY and bitcoin movements usually related?",
              options: [
                "They more often move in opposite directions",
                "They're not related at all",
                "They always move in perfect sync",
              ],
              correctAnswer: "They more often move in opposite directions",
            },
            {
              prompt: "What might a sharp rise in the DXY index warn of?",
              options: [
                "Guaranteed bitcoin growth",
                "A likely correction in the crypto market",
                "A technical glitch at the exchange",
              ],
              correctAnswer: "A likely correction in the crypto market",
            },
          ],
        },
        {
          slug: "korrelyatsiya-s-fondovym-rynkom",
          title: "Correlation With the Stock Market",
          summary: "Bitcoin's relationship with the Nasdaq index and risk appetite.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "In recent years, bitcoin has increasingly behaved like a high-tech risk asset rather than \"digital gold\" — its price often correlates with the Nasdaq index. When investors are eager to buy tech stocks, the crypto market usually rises too, and vice versa.",
            },
            {
              type: "paragraph",
              text: "This correlation isn't constant: during crypto-specific events (an exchange hack, regulatory news, a major listing), the crypto market can move independently of stocks.",
            },
          ],
          questions: [
            {
              prompt: "Which asset class has bitcoin most often correlated with in recent years?",
              options: [
                "Government bonds",
                "High-tech stocks (Nasdaq)",
                "It doesn't correlate with anything",
              ],
              correctAnswer: "High-tech stocks (Nasdaq)",
            },
            {
              prompt: "What does a high correlation between BTC and Nasdaq mean?",
              options: [
                "BTC completely replaces the Nasdaq index",
                "They must move in opposite directions",
                "They more often move in the same direction",
              ],
              correctAnswer: "They more often move in the same direction",
            },
            {
              prompt: "What can temporarily weaken BTC's correlation with the stock market?",
              options: [
                "A time zone change",
                "Crypto-specific events (an exchange hack, regulatory news)",
                "A day off at the exchange",
              ],
              correctAnswer: "Crypto-specific events (an exchange hack, regulatory news)",
            },
          ],
        },
        {
          slug: "ekonomicheskiy-kalendar",
          title: "The Economic Calendar and News",
          summary: "Which events you absolutely need to track before trading.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "The economic calendar is a schedule of important macroeconomic data releases: Fed meetings, inflation reports (CPI), labor market reports (NFP), and other indicators capable of sharply increasing volatility.",
            },
            {
              type: "paragraph",
              text: "Events on the calendar are usually marked with an impact level (high/medium/low). Ahead of high-impact releases, experienced traders often reduce risk, tighten their positions, or avoid new trades altogether — volatility can be unpredictable at these moments.",
            },
          ],
          questions: [
            {
              prompt: "Why does a trader need an economic calendar?",
              options: [
                "To plan personal vacations",
                "To track the dates of important news that affects the market",
                "To completely replace technical analysis",
              ],
              correctAnswer: "To track the dates of important news that affects the market",
            },
            {
              prompt: "What is NFP?",
              options: [
                "The fear and greed index",
                "A new cryptographic protocol",
                "The US non-farm payrolls employment report",
              ],
              correctAnswer: "The US non-farm payrolls employment report",
            },
            {
              prompt: "What's sensible to do before a high-impact news release?",
              options: [
                "Maximize position size",
                "Reduce risk or avoid new trades",
                "Turn off stop-losses",
              ],
              correctAnswer: "Reduce risk or avoid new trades",
            },
          ],
        },
        {
          slug: "etf",
          title: "ETF",
          summary: "What an exchange-traded fund is and why crypto ETF approvals move the market.",
          xpReward: 20,
          content: [
            {
              type: "paragraph",
              text: "An ETF (Exchange-Traded Fund) is a financial instrument that trades on an exchange like an ordinary stock but tracks the price of an underlying asset or basket of assets. A spot crypto ETF lets investors gain price exposure to an asset, such as Bitcoin, without buying or storing it directly — the fund's manager holds the underlying asset itself.",
            },
            {
              type: "paragraph",
              text: "Regulatory approval (for example, by the SEC in the US) of spot Bitcoin or Ethereum ETFs is considered a major market event: it opens access to the asset for institutional and retail investors who find it inconvenient or are prohibited from holding cryptocurrency directly. Traders use daily inflows and outflows into such ETFs as an indicator of institutional demand.",
            },
            {
              type: "list",
              items: [
                "An ETF tracks the price of an underlying asset but trades like an ordinary stock on a traditional exchange",
                "A spot ETF means the fund manager actually holds the underlying asset",
                "Daily inflows and outflows in crypto ETFs are used as an indicator of institutional demand",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is an ETF?",
              options: [
                "A type of cryptocurrency wallet",
                "A blockchain consensus protocol",
                "A financial instrument that trades like a stock and tracks the price of an underlying asset",
              ],
              correctAnswer: "A financial instrument that trades like a stock and tracks the price of an underlying asset",
            },
            {
              prompt: "What does a spot crypto ETF give an investor?",
              options: [
                "Price exposure to an asset without having to buy and store it themselves",
                "A guaranteed fixed return",
                "Voting rights in blockchain governance",
              ],
              correctAnswer: "Price exposure to an asset without having to buy and store it themselves",
            },
            {
              prompt: "How do traders use crypto ETF inflow/outflow data?",
              options: [
                "As an indicator of institutional demand for the asset",
                "As a replacement for volume and volatility analysis",
                "As an exact price forecast for the next day",
              ],
              correctAnswer: "As an indicator of institutional demand for the asset",
            },
          ],
        },
      ],
    },
    {
      title: "Smart Money Concepts",
      lessons: [
        {
          slug: "imbalans-i-fvg",
          title: "Imbalance and Fair Value Gap (FVG)",
          summary: "Zones of price inefficiency and how to find them on a chart.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "An imbalance is a zone on the chart where the price moved too quickly in one direction, not allowing both sides (buyers and sellers) to trade fully. The market often \"comes back to fill\" these zones later.",
            },
            {
              type: "paragraph",
              text: "A Fair Value Gap (FVG) is a specific type of imbalance made up of three candles: a visible gap remains between the wick of the first candle and the wick of the third candle. This is one of the most popular zones of interest in Smart Money Concepts.",
            },
            { type: "diagram", diagram: "fvg", caption: "A classic bullish FVG across three candles" },
            { type: "diagram", diagram: "imbalance", caption: "A wider imbalance zone on a single impulsive candle" },
          ],
          questions: [
            {
              prompt: "What is a Fair Value Gap (FVG)?",
              options: [
                "A gap between the wicks of the 1st and 3rd candles caused by a sharp impulse",
                "A volume indicator",
                "A stop-loss level",
              ],
              correctAnswer: "A gap between the wicks of the 1st and 3rd candles caused by a sharp impulse",
            },
            {
              prompt: "What does the market most often do with an imbalance zone later on?",
              options: [
                "It returns and partially or fully \"fills\" it",
                "It automatically removes it from the chart",
                "It never touches it again",
              ],
              correctAnswer: "It returns and partially or fully \"fills\" it",
            },
            {
              prompt: "How many candles make up the classic FVG pattern?",
              options: ["One", "Seven", "Three"],
              correctAnswer: "Three",
            },
          ],
        },
        {
          slug: "likvidnost-na-rynke",
          title: "Liquidity and Its Types",
          summary: "Where pending orders from large players pool on the chart.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Liquidity refers to pools of pending orders (stop-losses and limit orders) at specific price levels. It tends to accumulate around equal highs/lows and obvious support/resistance levels that everyone can see.",
            },
            {
              type: "list",
              items: [
                "Buy-side liquidity — short sellers' stops above local highs",
                "Sell-side liquidity — long holders' stops below local lows",
                "Large players need liquidity to build or close a position without significant slippage",
              ],
            },
          ],
          questions: [
            {
              prompt: "Where does liquidity most often pool on a chart?",
              options: [
                "Only on news candles",
                "Around equal highs/lows and obvious support/resistance levels",
                "Strictly in the middle of the range for no reason",
              ],
              correctAnswer: "Around equal highs/lows and obvious support/resistance levels",
            },
            {
              prompt: "What is buy-side liquidity?",
              options: [
                "The exchange's fee for buying",
                "Long holders' stops below local lows",
                "Short sellers' stops positioned above local highs",
              ],
              correctAnswer: "Short sellers' stops positioned above local highs",
            },
            {
              prompt: "Why do large players need liquidity in the market?",
              options: [
                "To build or close a large position without significant slippage",
                "It has nothing to do with large players",
                "To completely halt trading",
              ],
              correctAnswer: "To build or close a large position without significant slippage",
            },
          ],
        },
        {
          slug: "snyatie-likvidnosti",
          title: "Liquidity Sweep",
          summary: "Why price first takes out stops, then reverses.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "A liquidity sweep is a situation where the price deliberately pierces a level holding liquidity (for example, equal highs), collects the pending orders there, and then sharply reverses in the opposite direction — the direction the larger move was actually intended to go.",
            },
            { type: "diagram", diagram: "liquidity-sweep", caption: "A piercing of equal highs followed by a sharp reversal downward" },
            {
              type: "paragraph",
              text: "Understanding sweeps helps you avoid falling into the trap: a breakout of a level on its own doesn't guarantee continuation in that direction — it's often just a hunt for liquidity.",
            },
          ],
          questions: [
            {
              prompt: "What usually happens to the price immediately after a liquidity sweep?",
              options: [
                "A sharp reversal in the direction opposite the piercing",
                "Nothing, volume falls to zero",
                "The price always continues in the direction of the piercing",
              ],
              correctAnswer: "A sharp reversal in the direction opposite the piercing",
            },
            {
              prompt: "Which zone most often becomes the target of a liquidity sweep?",
              options: [
                "A zone with zero liquidity",
                "The middle of a random range with no levels",
                "A zone with pending orders — for example, equal highs/lows",
              ],
              correctAnswer: "A zone with pending orders — for example, equal highs/lows",
            },
            {
              prompt: "What mistake is typical for beginners when they see a sweep?",
              options: [
                "Setting a stop-loss before entering a trade",
                "Entering in the direction of the breakout without considering a possible reversal",
                "Closing a profitable position too early",
              ],
              correctAnswer: "Entering in the direction of the breakout without considering a possible reversal",
            },
          ],
        },
        {
          slug: "struktura-trenda-bos-choch",
          title: "Trend Structure: BOS and CHoCH",
          summary: "How to use highs and lows to tell whether a trend is alive or already broken.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "An uptrend consists of a sequence of Higher Highs (HH) and Higher Lows (HL). As long as this structure holds, the trend is considered to be intact.",
            },
            {
              type: "paragraph",
              text: "Break of Structure (BOS) is a break of the previous high, confirming the trend's continuation. Change of Character (CHoCH) is a break in the opposite direction — the first signal of a possible trend reversal.",
            },
            { type: "diagram", diagram: "trend-structure", caption: "HH/HL structure of an uptrend and a BOS" },
          ],
          questions: [
            {
              prompt: "What does a Change of Character (CHoCH) signal?",
              options: [
                "Continuation of the trend with acceleration",
                "An absence of liquidity in the market",
                "A possible reversal of the current trend",
              ],
              correctAnswer: "A possible reversal of the current trend",
            },
            {
              prompt: "What does a Break of Structure (BOS) confirm?",
              options: [
                "An automatic halt in trading",
                "Cancellation of all previous levels",
                "Continuation of the current trend",
              ],
              correctAnswer: "Continuation of the current trend",
            },
            {
              prompt: "What does the structure of an uptrend consist of?",
              options: [
                "Candles of equal height",
                "Lower Highs and Lower Lows",
                "Higher Highs and Higher Lows",
              ],
              correctAnswer: "Higher Highs and Higher Lows",
            },
          ],
        },
        {
          slug: "order-bloki",
          title: "Order Blocks",
          summary: "Zones where large players launched a strong price move.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "An order block is the last opposite-direction candle before a strong impulsive price move. For example, the last red candle before a sharp rally is considered a bullish order block: it's assumed that this is where large players built their position.",
            },
            {
              type: "paragraph",
              text: "Traders use order blocks as potential entry zones: if the price returns to this zone in the future, a reaction is expected — a continuation of the move in the original direction.",
            },
          ],
          questions: [
            {
              prompt: "What is an order block?",
              options: [
                "A trading volume indicator",
                "A type of exchange order with delayed execution",
                "The last opposite-direction candle before a strong impulsive move",
              ],
              correctAnswer: "The last opposite-direction candle before a strong impulsive move",
            },
            {
              prompt: "How do traders usually use order blocks?",
              options: [
                "To calculate the exchange fee",
                "As potential entry zones when price returns",
                "As an inflation indicator",
              ],
              correctAnswer: "As potential entry zones when price returns",
            },
            {
              prompt: "How does a bullish order block differ from a bearish one?",
              options: [
                "It only appears on the daily timeframe",
                "It forms before an upward impulse, not a downward one",
                "It's always larger in size",
              ],
              correctAnswer: "It forms before an upward impulse, not a downward one",
            },
          ],
        },
      ],
    },
    {
      title: "Risk Management",
      lessons: [
        {
          slug: "risk-reward",
          title: "Risk/Reward",
          summary: "The ratio of risk to reward, and why it matters more than your win rate.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Risk/Reward (R/R) is the ratio of a trade's potential loss to its potential profit. If you risk $100 to make $300, your R/R is 1:3. This is one of the key metrics that determines whether a trading system will be profitable in the long run.",
            },
            {
              type: "paragraph",
              text: "Even a system with a low win rate can be profitable if the average R/R is high enough. For example, with an R/R of 1:3, being right just 30% of the time is enough to break even. That's why experienced traders focus not on their hit rate, but on the expected value of a trade.",
            },
            {
              type: "list",
              items: [
                "R/R is calculated before entering a trade, not after",
                "The higher the R/R, the lower the required win rate can be",
                "A good R/R doesn't guarantee profit without disciplined execution",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does a Risk/Reward ratio of 1:3 mean?",
              options: [
                "You need to open 3 trades in a row",
                "Potential profit is 3 times greater than the potential risk",
                "The trade closes after 3 hours",
              ],
              correctAnswer: "Potential profit is 3 times greater than the potential risk",
            },
            {
              prompt: "Why can a system with an R/R of 1:3 be profitable even with a 40% win rate?",
              options: [
                "The profit from winning trades outweighs the losses from losing trades",
                "Because exchange fees decrease",
                "Because 40% is always higher than 33%",
              ],
              correctAnswer: "The profit from winning trades outweighs the losses from losing trades",
            },
            {
              prompt: "When should a trader calculate a trade's Risk/Reward?",
              options: [
                "Before entering the trade",
                "Calculating R/R isn't necessary",
                "Only after the trade closes",
              ],
              correctAnswer: "Before entering the trade",
            },
          ],
        },
        {
          slug: "razmer-pozitsii",
          title: "Position Size",
          summary: "How to calculate trade size based on the risk to your deposit, not your desired profit.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Position size is the amount of capital you commit to a specific trade. It should be determined not by desired profit but by acceptable risk: traders typically risk no more than 1-2% of their deposit per trade, regardless of how confident the setup looks.",
            },
            {
              type: "paragraph",
              text: "The formula is simple: position size = (deposit × risk percentage) / distance to stop-loss in percent. This approach automatically accounts for the asset's volatility and stop distance — the wider the stop, the smaller the position size for the same dollar risk.",
            },
            {
              type: "list",
              items: [
                "A fixed risk percentage protects the deposit from a series of losing trades",
                "Position size should decrease if the stop-loss is placed farther away",
                "Using leverage increases size but doesn't eliminate the need to calculate risk",
              ],
            },
          ],
          questions: [
            {
              prompt: "What should position size primarily depend on?",
              options: [
                "How much money is on the card",
                "The trader's mood",
                "Acceptable risk as a percentage of the deposit",
              ],
              correctAnswer: "Acceptable risk as a percentage of the deposit",
            },
            {
              prompt: "What happens to position size if the stop-loss is placed farther from the entry price?",
              options: [
                "Position size should decrease for the same dollar risk",
                "Position size isn't related to stop distance",
                "Position size should increase",
              ],
              correctAnswer: "Position size should decrease for the same dollar risk",
            },
            {
              prompt: "What percentage of the deposit is usually recommended to risk on a single trade?",
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
          summary: "Why a stop-loss is needed, where to place it correctly, and the most common mistakes.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "A stop-loss is a pre-set price level at which a trade automatically closes at a loss. It's the main tool for protecting capital: it limits losses to a known amount in advance, instead of letting a loss grow uncontrollably.",
            },
            {
              type: "paragraph",
              text: "A stop-loss should be placed based on market structure — beyond the nearest support, resistance, or candle extreme — not based on the amount a trader is willing to lose. A stop that's too tight gets knocked out by ordinary market noise; one that's too wide increases the risk per position.",
            },
            {
              type: "list",
              items: [
                "A stop-loss protects against emotional decisions during a drawdown",
                "The stop level should be based on chart structure, not a desired loss amount",
                "Moving the stop farther from price during a drawdown is one of the most common beginner mistakes",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the main function of a stop-loss?",
              options: [
                "Automatically double the position",
                "Increase the trade's profit",
                "Limit the loss to a pre-known amount",
              ],
              correctAnswer: "Limit the loss to a pre-known amount",
            },
            {
              prompt: "What is the best basis for determining a stop-loss level?",
              options: [
                "A random number",
                "The desired profit amount",
                "Market structure (support/resistance levels)",
              ],
              correctAnswer: "Market structure (support/resistance levels)",
            },
            {
              prompt: "What mistake is typical for beginners during a trade's drawdown?",
              options: [
                "Moving the stop-loss farther from price to 'give the trade more of a chance'",
                "Calculating risk before entry",
                "Closing the trade strictly at the stop",
              ],
              correctAnswer: "Moving the stop-loss farther from price to 'give the trade more of a chance'",
            },
          ],
        },
        {
          slug: "take-profit",
          title: "Take Profit",
          summary: "How to set profit targets and when partial position closing makes sense.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Take Profit (TP) is a pre-set level at which a trade automatically closes for a profit. Like a stop-loss, it should be determined by market logic — the nearest resistance, support, or liquidity zone — not an arbitrary desire to earn a specific amount.",
            },
            {
              type: "paragraph",
              text: "Many traders use partial closing: locking in part of the position at the first target while letting the rest run further with the stop moved to breakeven. This lets them secure profit while not exiting the trade too early if the move continues.",
            },
            {
              type: "list",
              items: [
                "TP, like the stop, should be placed based on chart structure",
                "Partial closing reduces the psychological pressure of an open trade",
                "Moving the stop to breakeven after the first target protects profit already secured",
              ],
            },
          ],
          questions: [
            {
              prompt: "What should the Take Profit level be based on?",
              options: [
                "The number of hours spent in the trade",
                "Chart structure: resistance, support, or liquidity levels",
                "A random number the trader likes",
              ],
              correctAnswer: "Chart structure: resistance, support, or liquidity levels",
            },
            {
              prompt: "Why do traders use partial position closing?",
              options: [
                "To guarantee the trade closes at a loss",
                "To increase the exchange fee",
                "To lock in part of the profit and let the rest run further",
              ],
              correctAnswer: "To lock in part of the profit and let the rest run further",
            },
            {
              prompt: "What do traders usually do with their stop-loss after reaching the first profit target?",
              options: [
                "Remove the stop-loss entirely",
                "Move it farther from price",
                "Move it to breakeven to protect the profit gained",
              ],
              correctAnswer: "Move it to breakeven to protect the profit gained",
            },
          ],
        },
        {
          slug: "psihologiya-ubytkov",
          title: "The Psychology of Losses",
          summary: "How losing trades affect a trader's decisions and why it's important to accept losses calmly.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Losses are an inevitable part of trading: even a profitable system regularly loses money on individual trades. The problem isn't the loss itself but the reaction to it — trying to immediately 'win it back' with a larger position, or refusing to close a trade at the stop in hopes of a reversal.",
            },
            {
              type: "paragraph",
              text: "A trader who treats every loss as an expected statistical cost of the system, rather than a personal failure, makes more rational decisions. Keeping a trading journal and defining risk in advance for every trade helps separate emotion from process.",
            },
            {
              type: "list",
              items: [
                "A series of losses is a normal part of even a profitable trading system",
                "Trying to 'win it back' after a loss usually increases risk rather than profit",
                "A predefined risk per trade reduces emotional pressure in the moment of a loss",
              ],
            },
          ],
          questions: [
            {
              prompt: "What's the best way to view an individual loss in trading?",
              options: [
                "As a reason to stop keeping a trading journal",
                "As an expected statistical cost of the trading system",
                "As a sign to immediately double the size of the next trade",
              ],
              correctAnswer: "As an expected statistical cost of the trading system",
            },
            {
              prompt: "What does trying to 'win back' losses immediately after a loss usually lead to?",
              options: [
                "Automatic cancellation of the previous trade",
                "Increased risk and new losses",
                "Guaranteed profit",
              ],
              correctAnswer: "Increased risk and new losses",
            },
            {
              prompt: "What helps a trader separate emotions from trading decisions?",
              options: [
                "Increasing leverage after every loss",
                "Completely abandoning trade analysis",
                "A predefined risk per trade and keeping a journal",
              ],
              correctAnswer: "A predefined risk per trade and keeping a journal",
            },
          ],
        },
      ],
    },
    {
      title: "Trader Psychology",
      lessons: [
        {
          slug: "fomo",
          title: "FOMO",
          summary: "The fear of missing out on a move, and why it pushes traders into positions at the worst moment.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "FOMO (Fear Of Missing Out) is the fear of missing a profitable price move. It arises when an asset rises sharply and a trader sees others 'making money' while they aren't. Under the influence of FOMO, trades are often opened without a plan, at the peak of a move, without accounting for risk.",
            },
            {
              type: "paragraph",
              text: "The problem with FOMO is that the entry happens exactly when the move has largely already played out and the risk of a reversal is at its highest. A disciplined trader sticks to predefined entry conditions and skips the move if it doesn't fit their strategy.",
            },
            {
              type: "list",
              items: [
                "FOMO most often pushes traders to enter after a price has already moved strongly",
                "Decisions made from FOMO are usually made without a stop-loss or risk calculation",
                "A trade plan written in advance reduces the influence of FOMO",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is FOMO in trading?",
              options: [
                "A technical volume indicator",
                "The fear of missing a profitable price move",
                "A type of exchange order",
              ],
              correctAnswer: "The fear of missing a profitable price move",
            },
            {
              prompt: "At what stage of a price move does a trader most often enter a trade under the influence of FOMO?",
              options: [
                "At the very start of the move",
                "Closer to the end of the move, when reversal risk is already high",
                "Before the move has even begun",
              ],
              correctAnswer: "Closer to the end of the move, when reversal risk is already high",
            },
            {
              prompt: "What helps reduce the influence of FOMO on a trader's decisions?",
              options: [
                "Constantly watching other people's profitable trades",
                "Increasing leverage during a sharp rally",
                "A predefined plan and entry conditions",
              ],
              correctAnswer: "A predefined plan and entry conditions",
            },
          ],
        },
        {
          slug: "zhadnost",
          title: "Greed",
          summary: "How greed makes traders hold a profitable trade longer than planned and turn profit into loss.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Greed in trading shows up as the desire to squeeze more profit out of a trade than the original plan called for: not closing a position at its target, increasing size after a run of winning trades, or canceling a previously set Take Profit.",
            },
            {
              type: "paragraph",
              text: "Greed most often causes a profitable trade to reverse and close at the stop or at breakeven, even though it could have been closed with a solid result. Discipline in sticking to a predefined plan is the main tool against greed.",
            },
            {
              type: "list",
              items: [
                "Greed often shows up as canceling a previously set Take Profit",
                "Increasing size after a run of wins without changing risk management is also a form of greed",
                "Following a plan set out in advance reduces the influence of greed",
              ],
            },
          ],
          questions: [
            {
              prompt: "How does greed most often show up in managing an open trade?",
              options: [
                "The trader closes the trade strictly according to plan",
                "The trader reduces position size",
                "The trader cancels a previously set Take Profit, hoping for more profit",
              ],
              correctAnswer: "The trader cancels a previously set Take Profit, hoping for more profit",
            },
            {
              prompt: "What outcome does greed most often lead to in a profitable trade?",
              options: [
                "The exchange fee decreases",
                "Profit is guaranteed to increase",
                "The trade reverses and closes at the stop or at breakeven",
              ],
              correctAnswer: "The trade reverses and closes at the stop or at breakeven",
            },
            {
              prompt: "What's the main tool against greed in trading?",
              options: [
                "Increasing leverage after every profitable trade",
                "Never setting a Take Profit at all",
                "Sticking to a predefined trade plan",
              ],
              correctAnswer: "Sticking to a predefined trade plan",
            },
          ],
        },
        {
          slug: "strah",
          title: "Fear",
          summary: "How fear of loss stops traders from following their strategy and leads to closing trades too early.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Fear in trading most often shows up as a fear of losing money: a trader closes a profitable trade too early over the slightest drawdown, is afraid to enter on a confirmed signal, or avoids trading entirely after a run of losses.",
            },
            {
              type: "paragraph",
              text: "Unlike greed, fear makes a trader act too cautiously and miss opportunities that fully match their strategy. Trading a size at which the risk per trade feels psychologically comfortable helps reduce the influence of fear.",
            },
            {
              type: "list",
              items: [
                "Fear often shows up as closing a profitable trade prematurely",
                "A position size that's too large amplifies fear and interferes with following the plan",
                "A comfortable risk size per trade reduces the emotional pressure of fear",
              ],
            },
          ],
          questions: [
            {
              prompt: "How does fear most often affect the management of a profitable trade?",
              options: [
                "The trader closes it too early over the slightest drawdown",
                "The trader increases position size",
                "The trader holds the trade well beyond the plan",
              ],
              correctAnswer: "The trader closes it too early over the slightest drawdown",
            },
            {
              prompt: "What amplifies fear in managing an open position?",
              options: [
                "Keeping a trading journal",
                "A position size that's too large relative to the deposit",
                "A predefined risk of 1-2% of the deposit",
              ],
              correctAnswer: "A position size that's too large relative to the deposit",
            },
            {
              prompt: "How does fear in trading fundamentally differ from greed?",
              options: [
                "Fear increases position size more than greed does",
                "Fear and greed lead to exactly the same decisions",
                "Fear makes a trader act too cautiously and miss trades that fit their strategy",
              ],
              correctAnswer: "Fear makes a trader act too cautiously and miss trades that fit their strategy",
            },
          ],
        },
        {
          slug: "distsiplina",
          title: "Discipline",
          summary: "Why following your own rules matters more than any single trade.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Discipline in trading is the ability to consistently follow predefined rules for entry, exit, and risk management, even when you want to do otherwise in the moment. Discipline is exactly what separates a trader with a system from someone trading on emotion.",
            },
            {
              type: "paragraph",
              text: "Even a perfect trading strategy won't produce results if the rules are broken every time a trade doesn't go according to plan. Discipline is built on simple, clearly stated rules and regularly reviewing whether they were followed.",
            },
            {
              type: "list",
              items: [
                "Discipline matters more than the result of any single trade",
                "Breaking your own rules undermines even a good strategy",
                "Regularly reviewing rule compliance helps strengthen discipline",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is discipline in the context of trading?",
              options: [
                "Using maximum leverage",
                "Consistently following predefined rules",
                "The ability to predict price direction",
              ],
              correctAnswer: "Consistently following predefined rules",
            },
            {
              prompt: "Why doesn't even a good strategy work without discipline?",
              options: [
                "Because discipline has no effect on results",
                "Because strategies always work equally well",
                "Because the rules get broken the moment a trade doesn't go according to plan",
              ],
              correctAnswer: "Because the rules get broken the moment a trade doesn't go according to plan",
            },
            {
              prompt: "What helps strengthen discipline over time?",
              options: [
                "Completely abandoning trade analysis",
                "Regularly reviewing whether your own rules were followed",
                "Constantly changing the rules after every trade",
              ],
              correctAnswer: "Regularly reviewing whether your own rules were followed",
            },
          ],
        },
        {
          slug: "emotsionalny-kontrol",
          title: "Emotional Control",
          summary: "Practical techniques that help you make decisions based on a plan rather than emotions.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Emotional control is the ability to recognize an emotional state (excitement, fear, irritation after a loss) and not let it directly drive trading decisions. It's not the absence of emotions, but the ability to act according to plan despite them.",
            },
            {
              type: "paragraph",
              text: "Practical tools for emotional control include pausing before entering a trade, a daily limit on the number of trades or losses, and keeping a journal that records not just the result but also the trader's emotional state at the moment of the trade.",
            },
            {
              type: "list",
              items: [
                "Emotional control means managing your reaction to emotions, not eliminating them",
                "A daily limit on the number of trades or losses reduces the influence of tilt",
                "Recording emotional state in a journal helps identify recurring mistakes",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does emotional control mean in trading?",
              options: [
                "The complete absence of any emotions while trading",
                "The ability to predict other traders' emotions",
                "The ability to act according to plan despite emotions, not their complete absence",
              ],
              correctAnswer: "The ability to act according to plan despite emotions, not their complete absence",
            },
            {
              prompt: "How does a daily limit on the number of trades help a trader?",
              options: [
                "It completely eliminates the need for a stop-loss",
                "It guarantees a profit by the end of the day",
                "It reduces the risk of a series of emotional decisions in a row (tilt)",
              ],
              correctAnswer: "It reduces the risk of a series of emotional decisions in a row (tilt)",
            },
            {
              prompt: "Why record emotional state in a trading journal during a trade?",
              options: [
                "It's an exchange requirement for opening a trade",
                "It doesn't help with trading analysis in any way",
                "To identify recurring emotional mistakes in the future",
              ],
              correctAnswer: "To identify recurring emotional mistakes in the future",
            },
          ],
        },
      ],
    },
    {
      title: "Indicators",
      lessons: [
        {
          slug: "rsi",
          title: "RSI",
          summary: "The Relative Strength Index: how to measure an asset's overbought and oversold conditions.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "RSI (Relative Strength Index) is an oscillator that measures the speed and magnitude of recent price changes on a scale from 0 to 100. Values above 70 are traditionally considered an overbought zone, and below 30 an oversold zone, although in a strong trend RSI can stay in these zones for a long time.",
            },
            {
              type: "paragraph",
              text: "Besides overbought/oversold zones, traders use RSI divergences: if price makes a new high but RSI doesn't, this can signal weakening momentum. RSI is rarely used in isolation and is usually combined with market structure analysis.",
            },
            {
              type: "list",
              items: [
                "RSI above 70 is potential overbought territory, below 30 is oversold",
                "In a strong trend, RSI can stay in an extreme zone for a long time without reversing",
                "Divergence between price and RSI can indicate a weakening trend",
              ],
            },
          ],
          questions: [
            {
              prompt: "What range of values does RSI measure?",
              options: [
                "-1 to 1",
                "0 to 10,000",
                "0 to 100",
              ],
              correctAnswer: "0 to 100",
            },
            {
              prompt: "What does an RSI value above 70 traditionally mean?",
              options: [
                "A potential overbought zone",
                "An absence of trading volume",
                "A guaranteed price reversal downward",
              ],
              correctAnswer: "A potential overbought zone",
            },
            {
              prompt: "What can a divergence between price and RSI signal?",
              options: [
                "A technical error in the indicator",
                "A change in the asset's listing exchange",
                "Weakening of the current price momentum",
              ],
              correctAnswer: "Weakening of the current price momentum",
            },
          ],
        },
        {
          slug: "macd",
          title: "MACD",
          summary: "The Moving Average Convergence Divergence indicator and its crossover and divergence signals.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "MACD (Moving Average Convergence Divergence) is built on the difference between two exponential moving averages (typically 12 and 26 periods) and a signal line (a 9-period EMA of the MACD itself). The histogram shows the difference between the MACD line and the signal line.",
            },
            {
              type: "paragraph",
              text: "The main MACD signals are the crossover of the MACD line and the signal line (a potential shift in momentum) and the crossover of the zero line (a shift in trend direction). Like RSI, MACD can show divergences with price, which is often used as additional confirmation.",
            },
            {
              type: "list",
              items: [
                "MACD is built on the difference between two EMAs and a signal line",
                "The crossover of the MACD line and signal line is one of the main trading signals",
                "A zero-line crossover is often associated with a change in trend direction",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the MACD indicator based on?",
              options: [
                "Open interest volume",
                "The difference between two exponential moving averages",
                "The number of active wallets on the network",
              ],
              correctAnswer: "The difference between two exponential moving averages",
            },
            {
              prompt: "What does the MACD histogram show?",
              options: [
                "The difference between the MACD line and the signal line",
                "The number of open positions on the exchange",
                "The total trading volume for the day",
              ],
              correctAnswer: "The difference between the MACD line and the signal line",
            },
            {
              prompt: "What is the MACD line's crossing of the zero level often associated with?",
              options: [
                "A change in trend direction",
                "A change in the exchange's fees",
                "The listing of a new token",
              ],
              correctAnswer: "A change in trend direction",
            },
          ],
        },
        {
          slug: "ema",
          title: "EMA",
          summary: "The exponential moving average and why it reacts to price faster than a simple one.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "EMA (Exponential Moving Average) is a moving average that gives more weight to recent prices, making it react to price changes faster than a simple moving average (SMA). This makes EMA more responsive, but also more prone to false signals during sideways movement.",
            },
            {
              type: "paragraph",
              text: "Traders often use several EMAs of different periods at once (for example, 20 and 50) to determine trend direction and dynamic support/resistance zones. The crossover of a fast and slow EMA is a popular, if lagging, signal.",
            },
            {
              type: "list",
              items: [
                "EMA gives more weight to recent prices compared to SMA",
                "Multiple EMAs of different periods help assess trend direction",
                "A fast/slow EMA crossover is a lagging but popular signal",
              ],
            },
          ],
          questions: [
            {
              prompt: "How does EMA differ from a simple moving average (SMA)?",
              options: [
                "EMA doesn't account for price at all",
                "EMA gives more weight to recent prices and reacts to changes faster",
                "EMA is always calculated only from volume",
              ],
              correctAnswer: "EMA gives more weight to recent prices and reacts to changes faster",
            },
            {
              prompt: "Why do traders use several EMAs of different periods at once?",
              options: [
                "It provides no useful information",
                "To assess trend direction and dynamic support/resistance zones",
                "To reduce the exchange fee",
              ],
              correctAnswer: "To assess trend direction and dynamic support/resistance zones",
            },
            {
              prompt: "What downside does the crossover of a fast and slow EMA have as a signal?",
              options: [
                "The signal can't be seen on the chart",
                "The signal appears before the move begins",
                "The signal lags behind the current price move",
              ],
              correctAnswer: "The signal lags behind the current price move",
            },
          ],
        },
        {
          slug: "sma",
          title: "SMA",
          summary: "The simple moving average as a baseline for determining overall trend direction.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "SMA (Simple Moving Average) is a simple moving average calculated as the arithmetic mean of the closing price over N periods. Unlike EMA, every period in an SMA carries equal weight, which makes it react to price changes more slowly and smooth out noise more strongly.",
            },
            {
              type: "paragraph",
              text: "SMA is often used to determine the overall, longer-term trend direction — for example, price position relative to the 200-day SMA is widely used as a reference point for the broader bull or bear market.",
            },
            {
              type: "list",
              items: [
                "SMA is the arithmetic mean of price over a given number of periods",
                "SMA smooths out noise more than EMA but reacts more slowly",
                "The 200-day SMA is often used as a reference point for the overall trend",
              ],
            },
          ],
          questions: [
            {
              prompt: "How is SMA calculated?",
              options: [
                "As the arithmetic mean of the closing price over a given number of periods",
                "As the difference between the day's high and low",
                "As the sum of all trading volumes for a month",
              ],
              correctAnswer: "As the arithmetic mean of the closing price over a given number of periods",
            },
            {
              prompt: "How does SMA differ from EMA in terms of reaction speed to price?",
              options: [
                "There is no difference in reaction speed",
                "SMA always reacts faster than EMA",
                "SMA reacts more slowly because every period carries equal weight",
              ],
              correctAnswer: "SMA reacts more slowly because every period carries equal weight",
            },
            {
              prompt: "What is the 200-day SMA often used for?",
              options: [
                "For calculating the exchange fee",
                "For determining the exact time of a token's listing",
                "As a reference point for the overall bull or bear market",
              ],
              correctAnswer: "As a reference point for the overall bull or bear market",
            },
          ],
        },
        {
          slug: "vwap",
          title: "VWAP",
          summary: "The volume-weighted average price and its role as a benchmark for the day's 'fair' price.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "VWAP (Volume Weighted Average Price) is the average price of an asset over a period, weighted by the trading volume at each price level. Unlike a simple moving average, VWAP shows the price at which the bulk of trading volume actually occurred.",
            },
            {
              type: "paragraph",
              text: "Institutional traders often use VWAP as a benchmark for the day's 'fair' price: a price above VWAP is considered relatively expensive, below it relatively cheap. VWAP is also used as a dynamic support/resistance level within a trading session.",
            },
            {
              type: "list",
              items: [
                "VWAP accounts for volume at each level, not just price",
                "A price above VWAP is interpreted as relatively expensive, below it as relatively cheap",
                "VWAP is typically recalculated from scratch at the start of each trading session",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does VWAP account for that a simple moving average does not?",
              options: [
                "Only the day's highest price",
                "Only the previous day's closing price",
                "Trading volume at each price level",
              ],
              correctAnswer: "Trading volume at each price level",
            },
            {
              prompt: "How is a price above VWAP interpreted?",
              options: [
                "As a guaranteed buy signal",
                "As a sign trading has stopped",
                "As relatively expensive compared to the average volume-weighted level",
              ],
              correctAnswer: "As relatively expensive compared to the average volume-weighted level",
            },
            {
              prompt: "Who most often relies on VWAP when executing large orders?",
              options: [
                "Only beginner traders",
                "Only project marketers",
                "Institutional traders",
              ],
              correctAnswer: "Institutional traders",
            },
          ],
        },
        {
          slug: "atr",
          title: "ATR",
          summary: "The average true range as a tool for measuring volatility when placing stops.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "ATR (Average True Range) measures an asset's average volatility over a given period, accounting for gaps between candles. It's not a directional indicator but one of amplitude — a high ATR means the price is making large swings, a low ATR means the market is relatively calm.",
            },
            {
              type: "paragraph",
              text: "ATR is often used to calculate a stop-loss size adapted to current volatility: instead of a fixed percentage, a trader places the stop at a distance that's a multiple of ATR, which reduces the chance of being stopped out prematurely by ordinary market noise.",
            },
            {
              type: "list",
              items: [
                "ATR measures the amplitude of price movement, not its direction",
                "High ATR means increased volatility in the asset",
                "A stop-loss calculated using ATR adapts to current market volatility",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does the ATR indicator measure?",
              options: [
                "The number of active addresses on the network",
                "Trend direction",
                "An asset's average volatility (movement amplitude)",
              ],
              correctAnswer: "An asset's average volatility (movement amplitude)",
            },
            {
              prompt: "What does a high ATR value indicate?",
              options: [
                "An upcoming delisting of the asset",
                "Low exchange liquidity",
                "Increased volatility and large price swings",
              ],
              correctAnswer: "Increased volatility and large price swings",
            },
            {
              prompt: "What do traders often use ATR for in practice?",
              options: [
                "To determine the exact listing price of a token",
                "To calculate network fees",
                "To calculate stop-loss size accounting for current volatility",
              ],
              correctAnswer: "To calculate stop-loss size accounting for current volatility",
            },
          ],
        },
        {
          slug: "bollinger-bands",
          title: "Bollinger Bands",
          summary: "Bollinger Bands as an indicator of volatility and relative price expensiveness.",
          xpReward: 25,
          content: [
            {
              type: "paragraph",
              text: "Bollinger Bands consist of a moving average (typically a 20-period SMA) and two bands set a defined number of standard deviations of price away from it. Band width changes dynamically with volatility: they widen during periods of strong movement and narrow during periods of calm.",
            },
            {
              type: "paragraph",
              text: "Band narrowing ('squeeze') often precedes a strong price move in either direction, and price touching the upper or lower band is not by itself a reversal signal — in a strong trend, price can move along a band for a long time.",
            },
            {
              type: "list",
              items: [
                "The bands are built around a moving average based on standard deviation",
                "Band narrowing often precedes a strong price move",
                "Touching a band doesn't guarantee a reversal, especially in a strong trend",
              ],
            },
          ],
          questions: [
            {
              prompt: "What do Bollinger Bands consist of?",
              options: [
                "Three independent volume lines",
                "A moving average and two bands based on standard deviation",
                "A single closing price line",
              ],
              correctAnswer: "A moving average and two bands based on standard deviation",
            },
            {
              prompt: "According to Bollinger Bands, what often precedes a strong price move?",
              options: [
                "A narrowing (squeeze) of the bands",
                "The bands disappearing from the chart entirely",
                "The bands widening to their maximum",
              ],
              correctAnswer: "A narrowing (squeeze) of the bands",
            },
            {
              prompt: "Does price touching the upper Bollinger Band guarantee a reversal downward?",
              options: [
                "Yes, but only on the weekly timeframe",
                "No, in a strong trend price can move along the band for a long time",
                "Yes, it's always a 100% reversal signal",
              ],
              correctAnswer: "No, in a strong trend price can move along the band for a long time",
            },
          ],
        },
      ],
    },
    {
      title: "Volume Analysis",
      lessons: [
        {
          slug: "volume",
          title: "Volume",
          summary: "Trading volume as confirmation of the strength of a price move.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Volume shows the amount of an asset traded over a period. Volume is one of the few indicators not derived from price but reflecting the actual activity of market participants, which is why it's often used as independent confirmation of a move.",
            },
            {
              type: "paragraph",
              text: "A price move on high volume is considered more reliable than the same move on low volume: a level breakout without rising volume is more often a fake. Sharp spikes in volume also frequently coincide with key market turning points.",
            },
            {
              type: "list",
              items: [
                "Volume reflects the actual activity of participants, not a derivative of price",
                "A breakout on low volume is more often a fake",
                "Sharp volume spikes often coincide with turning points",
              ],
            },
          ],
          questions: [
            {
              prompt: "Why is volume considered independent confirmation of a price move?",
              options: [
                "Because volume always rises together with price",
                "It reflects the actual activity of participants rather than being derived from price itself",
                "Because volume is measured as a percentage of market cap",
              ],
              correctAnswer: "It reflects the actual activity of participants rather than being derived from price itself",
            },
            {
              prompt: "Which level breakout is considered less reliable?",
              options: [
                "Reliability doesn't depend on volume",
                "A breakout on low volume",
                "A breakout on high volume",
              ],
              correctAnswer: "A breakout on low volume",
            },
            {
              prompt: "What do sharp spikes in volume often coincide with?",
              options: [
                "A token's name change",
                "Key market turning points",
                "Only exchange technical outages",
              ],
              correctAnswer: "Key market turning points",
            },
          ],
        },
        {
          slug: "delta",
          title: "Delta",
          summary: "The difference between buy and sell volume as an indicator of pressure on price.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Delta is the difference between the volume of aggressive buys (market buy orders) and aggressive sells over a period. Positive delta means buyers are dominant, negative delta means sellers are, regardless of where the price ultimately moved.",
            },
            {
              type: "paragraph",
              text: "A divergence between delta and price movement — for example, price rising while delta is negative — can indicate that the rise is being driven not by market buying but by short covering, making such a rally less sustainable.",
            },
            {
              type: "list",
              items: [
                "Positive delta means aggressive buying outweighs selling",
                "Delta measures participant pressure, not the resulting price change",
                "A divergence between price and delta can indicate an unstable move",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does positive delta show?",
              options: [
                "A guaranteed future price increase",
                "An absence of trading activity",
                "Aggressive buying outweighing selling",
              ],
              correctAnswer: "Aggressive buying outweighing selling",
            },
            {
              prompt: "What can a price rise combined with negative delta indicate?",
              options: [
                "That delta is being calculated incorrectly",
                "A technical error on the exchange",
                "The rise may be driven by short covering rather than new buying",
              ],
              correctAnswer: "The rise may be driven by short covering rather than new buying",
            },
            {
              prompt: "What exactly does volume delta measure?",
              options: [
                "The number of token holders",
                "The asset's total market cap",
                "Buyer and seller pressure through aggressive orders",
              ],
              correctAnswer: "Buyer and seller pressure through aggressive orders",
            },
          ],
        },
        {
          slug: "open-interest",
          title: "Open Interest",
          summary: "Open interest as a measure of the number of active positions in the derivatives market.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Open Interest (OI) is the total number of open, not-yet-closed contracts in the derivatives market (futures, perpetuals). Unlike volume, which resets every period, OI shows the accumulated number of active positions.",
            },
            {
              type: "paragraph",
              text: "Rising OI alongside rising price usually means an inflow of new capital and a strengthening trend. Rising price with falling OI more often points to short covering rather than new demand. A sharp drop in OI is often linked to mass liquidations.",
            },
            {
              type: "list",
              items: [
                "OI shows the number of open, not-yet-closed contracts",
                "Rising price together with rising OI usually indicates an inflow of new capital",
                "A sharp drop in OI often accompanies mass position liquidations",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does Open Interest show?",
              options: [
                "The total number of open, not-yet-closed contracts",
                "The number of registered exchange users",
                "The total volume of all trades in the exchange's history",
              ],
              correctAnswer: "The total number of open, not-yet-closed contracts",
            },
            {
              prompt: "What does simultaneously rising price and Open Interest usually indicate?",
              options: [
                "An inflow of new capital and a strengthening trend",
                "Volatility dropping to zero",
                "A technical outage at the exchange",
              ],
              correctAnswer: "An inflow of new capital and a strengthening trend",
            },
            {
              prompt: "What is a sharp drop in Open Interest often linked to?",
              options: [
                "A new token being added to a listing",
                "Mass liquidations of open positions",
                "A scheduled exchange upgrade",
              ],
              correctAnswer: "Mass liquidations of open positions",
            },
          ],
        },
        {
          slug: "funding-rate",
          title: "Funding Rate",
          summary: "The funding rate on perpetual futures and what it says about market sentiment.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Funding Rate is a periodic payment between holders of long and short positions on perpetual futures — a mechanism that keeps the contract price close to the spot price. Positive funding means longs pay shorts; negative funding means the reverse.",
            },
            {
              type: "paragraph",
              text: "Persistently high positive funding usually indicates an overheated market with an excess of longs, which raises the risk of cascading liquidations on a downturn. Sharply negative funding, on the other hand, can signal excessive pessimism and potential for a bounce.",
            },
            {
              type: "list",
              items: [
                "Funding Rate keeps the perpetual futures price close to the spot price",
                "Persistently high positive funding signals a market overheated with longs",
                "Sharply negative funding can indicate excessive market pessimism",
              ],
            },
          ],
          questions: [
            {
              prompt: "What function does the Funding Rate serve on perpetual futures?",
              options: [
                "It sets the exchange's withdrawal fee",
                "It sets the maximum leverage",
                "It keeps the contract price close to the spot price",
              ],
              correctAnswer: "It keeps the contract price close to the spot price",
            },
            {
              prompt: "What does persistently high positive funding mean?",
              options: [
                "The market is overheated with an excess of long positions",
                "The asset's price is guaranteed to keep rising",
                "There are no traders in the market at all",
              ],
              correctAnswer: "The market is overheated with an excess of long positions",
            },
            {
              prompt: "Who pays whom when the Funding Rate is positive?",
              options: [
                "The exchange pays all traders equally",
                "Holders of short positions pay holders of long positions",
                "Holders of long positions pay holders of short positions",
              ],
              correctAnswer: "Holders of long positions pay holders of short positions",
            },
          ],
        },
        {
          slug: "liquidations",
          title: "Liquidations",
          summary: "The forced closing of leveraged positions and why liquidations amplify price moves.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Liquidations are the forced closing of a position by the exchange when its loss reaches a level at which margin is no longer sufficient to maintain it. Liquidations happen at market price and don't depend on the trader's wishes.",
            },
            {
              type: "paragraph",
              text: "Mass liquidations in one direction (cascading liquidations) amplify price movement on their own: closing longs creates additional selling pressure, closing shorts creates additional demand, which explains the sharp, fast price moves seen during strong volatility.",
            },
            {
              type: "list",
              items: [
                "A liquidation is the exchange's forced closing of a position due to insufficient margin",
                "Cascading liquidations amplify and accelerate price movement in one direction",
                "Liquidation heatmaps are used by traders to assess zones of elevated risk",
              ],
            },
          ],
          questions: [
            {
              prompt: "What happens when a position is liquidated?",
              options: [
                "The trader voluntarily closes the position at a profit",
                "The exchange forcibly closes the position due to insufficient margin",
                "The exchange automatically doubles the position size",
              ],
              correctAnswer: "The exchange forcibly closes the position due to insufficient margin",
            },
            {
              prompt: "Why do cascading liquidations amplify price movement?",
              options: [
                "Liquidations always stop price movement completely",
                "Closing positions creates additional pressure in the direction of the move",
                "Liquidations have no effect on price at all",
              ],
              correctAnswer: "Closing positions creates additional pressure in the direction of the move",
            },
            {
              prompt: "What do traders use liquidation heatmaps for?",
              options: [
                "To calculate taxes on profit",
                "To assess zones of elevated risk of a sharp price move",
                "To find out the exact date of the next halving",
              ],
              correctAnswer: "To assess zones of elevated risk of a sharp price move",
            },
          ],
        },
      ],
    },
    {
      title: "On-Chain Analysis",
      lessons: [
        {
          slug: "koshelki-kitov",
          title: "Whale Wallets",
          summary: "How tracking large wallets helps gauge the sentiment of major holders.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "'Whales' are addresses holding a large share of an asset's total supply. Since all blockchain transactions are public, traders track the movements of such wallets — for example, large transfers to exchanges (potential preparation to sell) or, conversely, from exchanges into cold storage.",
            },
            {
              type: "paragraph",
              text: "Context matters: a transfer from an exchange doesn't always mean a long-term hold, and a transfer to an exchange doesn't always mean an immediate sale — it could be a redistribution between wallets belonging to the same owner. Whale data is a supplementary signal, not a standalone one.",
            },
            {
              type: "list",
              items: [
                "Whale wallets can be tracked because blockchain transactions are public",
                "A large transfer to an exchange is often interpreted as potential preparation to sell",
                "Whale movement data should be used alongside other types of analysis, not on its own",
              ],
            },
          ],
          questions: [
            {
              prompt: "Why is it possible to track the movements of whale wallets?",
              options: [
                "This is only possible for regulators",
                "All blockchain transactions are publicly available",
                "Exchanges publish their clients' personal data daily",
              ],
              correctAnswer: "All blockchain transactions are publicly available",
            },
            {
              prompt: "How is a large transfer of tokens to an exchange often interpreted?",
              options: [
                "As a guaranteed signal of long-term holding",
                "As a technical network error",
                "As potential preparation to sell",
              ],
              correctAnswer: "As potential preparation to sell",
            },
            {
              prompt: "What's the best way to use whale movement data?",
              options: [
                "As the sole, sufficient signal for entering a trade",
                "Such data is useless and shouldn't be considered",
                "As a supplementary signal alongside other types of analysis",
              ],
              correctAnswer: "As a supplementary signal alongside other types of analysis",
            },
          ],
        },
        {
          slug: "birzhevye-pritoki-i-ottoki",
          title: "Exchange Inflows and Outflows",
          summary: "What coin movement to and from exchanges means for potential pressure on price.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Exchange inflow is the volume of coins transferred to exchange wallets; exchange outflow is the volume of coins withdrawn from exchanges. Rising inflows are often interpreted as growing potential selling pressure, while rising outflows suggest accumulation and a shrinking available supply.",
            },
            {
              type: "paragraph",
              text: "A sustained net outflow from exchanges over an extended period is usually associated with an accumulation phase and a decline in liquid supply available for sale. A sharp one-time inflow of a large amount, on the other hand, often precedes local volatility.",
            },
            {
              type: "list",
              items: [
                "Inflow to exchanges is often linked to growing potential selling pressure",
                "Sustained outflow from exchanges is usually associated with an accumulation phase",
                "A sharp one-time inflow of a large amount often precedes local volatility",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is called exchange inflow?",
              options: [
                "The volume of coins transferred to exchange wallets",
                "The number of new exchange users",
                "The volume of coins mined per day",
              ],
              correctAnswer: "The volume of coins transferred to exchange wallets",
            },
            {
              prompt: "What market phase is a sustained outflow of coins from exchanges usually associated with?",
              options: [
                "A new token listing",
                "The accumulation phase",
                "A panic sell-off phase",
              ],
              correctAnswer: "The accumulation phase",
            },
            {
              prompt: "What often precedes a sharp one-time inflow of a large amount to an exchange?",
              options: [
                "A complete halt in trading",
                "Local price volatility",
                "An automatic reduction in exchange fees",
              ],
              correctAnswer: "Local price volatility",
            },
          ],
        },
        {
          slug: "tvl",
          title: "TVL",
          summary: "Total value locked as an indicator of trust in a DeFi protocol.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "TVL (Total Value Locked) is the total value of assets locked in a protocol's smart contracts: in liquidity pools, staking, and lending platforms. TVL is often used as a measure of scale and user trust in a protocol or an entire blockchain network.",
            },
            {
              type: "paragraph",
              text: "It's important to consider that rising TVL can be driven not only by an inflow of new capital but also by the rising price of already-locked assets. A sharp drop in TVL, conversely, can signal either a capital outflow or a decline in the price of locked tokens.",
            },
            {
              type: "list",
              items: [
                "TVL measures the value of assets locked in a protocol's smart contracts",
                "Rising TVL can reflect either an inflow of new capital or rising asset prices",
                "A sharp drop in TVL is often viewed as a warning sign for a protocol",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does the TVL metric measure?",
              options: [
                "The number of developers working on a project",
                "The total number of network transactions of all time",
                "The total value of assets locked in a protocol's smart contracts",
              ],
              correctAnswer: "The total value of assets locked in a protocol's smart contracts",
            },
            {
              prompt: "Why can TVL rise even if no new capital is coming in?",
              options: [
                "TVL cannot rise without an inflow of new capital",
                "Because the price of already-locked assets is rising",
                "Because overall market capitalization is falling",
              ],
              correctAnswer: "Because the price of already-locked assets is rising",
            },
            {
              prompt: "How do traders usually interpret a sharp drop in a protocol's TVL?",
              options: [
                "TVL has no connection to a protocol's condition",
                "As a potentially worrying signal (capital outflow or falling asset prices)",
                "As an unambiguously positive buy signal",
              ],
              correctAnswer: "As a potentially worrying signal (capital outflow or falling asset prices)",
            },
          ],
        },
        {
          slug: "stablecoins",
          title: "Stablecoins",
          summary: "The role of stablecoins in the crypto market and their exchange reserves as a demand indicator.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Stablecoins are cryptocurrencies whose value is pegged to a stable asset, most often the US dollar (USDT, USDC). They serve as the crypto market's main 'unit of account,' allowing traders to move between assets and lock in value without withdrawing into the traditional banking system.",
            },
            {
              type: "paragraph",
              text: "The total volume of stablecoins held in exchange wallets is often viewed as an indicator of 'dry powder' — the market's potential buying power. A rise in stablecoin reserves on exchanges can precede an inflow of demand into risk assets.",
            },
            {
              type: "list",
              items: [
                "Stablecoins are pegged to a stable asset, usually the US dollar",
                "They serve as a unit of account and a store of value within the crypto market",
                "Rising stablecoin reserves on exchanges are often linked to potential growth in buying power",
              ],
            },
          ],
          questions: [
            {
              prompt: "What distinguishes stablecoins from most other cryptocurrencies?",
              options: [
                "They cannot be transferred between wallets",
                "They exist only outside the blockchain",
                "Their value is pegged to a stable asset, usually the US dollar",
              ],
              correctAnswer: "Their value is pegged to a stable asset, usually the US dollar",
            },
            {
              prompt: "What function do stablecoins serve in the crypto market?",
              options: [
                "A unit of account and a store of value within the market",
                "A replacement for a blockchain's consensus mechanism",
                "The sole means of mining",
              ],
              correctAnswer: "A unit of account and a store of value within the market",
            },
            {
              prompt: "What can rising stablecoin reserves on exchanges indicate?",
              options: [
                "A potential rise in the market's buying power",
                "A complete halt in trading on the exchange",
                "A technical failure of the stablecoin",
              ],
              correctAnswer: "A potential rise in the market's buying power",
            },
          ],
        },
        {
          slug: "onchain-metriki",
          title: "On-Chain Metrics",
          summary: "An overview of key network metrics: active addresses, network fees, and their use in analysis.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "On-chain metrics are data that can be obtained directly from the blockchain: the number of active addresses, transfer volume, network fees, the number of new wallets. Unlike market data (price, exchange volume), they reflect actual network activity.",
            },
            {
              type: "paragraph",
              text: "Rising active addresses and transfer volume alongside a relatively calm price can indicate growing fundamental use of the network. Such metrics are especially useful for medium- and long-term analysis rather than for precisely timing an entry.",
            },
            {
              type: "list",
              items: [
                "On-chain metrics reflect actual network activity, not just exchange price",
                "Rising active addresses alongside a calm price can indicate growing fundamental use",
                "On-chain analysis is better suited to medium- and long-term conclusions than precise timing",
              ],
            },
          ],
          questions: [
            {
              prompt: "How do on-chain metrics differ from purely market data like price and exchange volume?",
              options: [
                "They come directly from the blockchain and reflect actual network activity",
                "They're only available to exchange owners",
                "They completely match market data",
              ],
              correctAnswer: "They come directly from the blockchain and reflect actual network activity",
            },
            {
              prompt: "What can rising network active addresses alongside a relatively calm price indicate?",
              options: [
                "A technical breakdown of the blockchain",
                "A complete halt in transactions",
                "Growing fundamental use of the network",
              ],
              correctAnswer: "Growing fundamental use of the network",
            },
            {
              prompt: "What analysis horizon are on-chain metrics usually best suited for?",
              options: [
                "Medium- and long-term analysis",
                "On-chain metrics have no practical application",
                "Exclusively minute-precision entry timing",
              ],
              correctAnswer: "Medium- and long-term analysis",
            },
          ],
        },
      ],
    },
    {
      title: "Professional Trading",
      lessons: [
        {
          slug: "torgovy-zhurnal",
          title: "Trading Journal",
          summary: "Why every trade should be recorded and what a journal entry should include.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "A trading journal is a systematic record of every trade: the reason for entry, position size, stop-loss and take profit, the final result, and the trader's emotional state. Without a journal, a trader relies on memory, which selectively remembers winning trades and erases losing ones.",
            },
            {
              type: "paragraph",
              text: "Regularly reviewing a journal helps identify patterns: for example, that most losses come from trades opened without a clear signal, or that a certain time of day is consistently less profitable. This turns intuitive impressions into concrete, verifiable data.",
            },
            {
              type: "list",
              items: [
                "A journal should record the reason for entry, not just the trade's result",
                "Regularly reviewing the journal helps identify recurring mistakes",
                "Journal data is more objective than a trader's subjective memory",
              ],
            },
          ],
          questions: [
            {
              prompt: "Why should a trader keep a trading journal?",
              options: [
                "The journal is only needed for tax reporting",
                "It's an exchange requirement for opening trades",
                "To objectively record trades instead of relying on selective memory",
              ],
              correctAnswer: "To objectively record trades instead of relying on selective memory",
            },
            {
              prompt: "What must be recorded in a journal entry besides the trade's result?",
              options: [
                "The name of the device used",
                "The reason for entering the trade",
                "Only the final profit in dollars",
              ],
              correctAnswer: "The reason for entering the trade",
            },
            {
              prompt: "What does regularly reviewing a trading journal provide?",
              options: [
                "It automatically increases the deposit size",
                "It guarantees no losing trades in the future",
                "It helps identify recurring patterns and mistakes",
              ],
              correctAnswer: "It helps identify recurring patterns and mistakes",
            },
          ],
        },
        {
          slug: "sozdanie-strategii",
          title: "Building a Strategy",
          summary: "The essential elements that make up a complete trading strategy.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "A trading strategy is a clearly described set of rules: which market to trade, under what conditions to enter a trade, where to place the stop-loss and take profit, and what percentage of the deposit to risk. Without these rules defined in advance, trading turns into a series of random decisions.",
            },
            {
              type: "paragraph",
              text: "A good strategy should be specific enough to explain to another person and test on historical data. It doesn't have to work 100% of the time — what matters is that the rules are reproducible and the expected value is positive.",
            },
            {
              type: "list",
              items: [
                "A strategy must include entry conditions, exit conditions, and risk management rules",
                "The rules should be specific enough to be tested on historical data",
                "The goal of a strategy is a positive expected value, not 100% accuracy",
              ],
            },
          ],
          questions: [
            {
              prompt: "What must be included in a description of a trading strategy?",
              options: [
                "A list of the trader's favorite cryptocurrencies",
                "Entry conditions, exit conditions, and risk management rules",
                "Only the desired monthly profit amount",
              ],
              correctAnswer: "Entry conditions, exit conditions, and risk management rules",
            },
            {
              prompt: "Why should a strategy be specific rather than vague?",
              options: [
                "To hide it from other traders",
                "So it can be explained and tested on historical data",
                "Vagueness in the rules doesn't matter",
              ],
              correctAnswer: "So it can be explained and tested on historical data",
            },
            {
              prompt: "Does a good strategy need to be profitable on 100% of trades?",
              options: [
                "Yes, but only on the daily timeframe",
                "Yes, otherwise the strategy is considered non-functional",
                "No, what matters is a positive expected value overall",
              ],
              correctAnswer: "No, what matters is a positive expected value overall",
            },
          ],
        },
        {
          slug: "backtest",
          title: "Backtesting",
          summary: "Testing a trading strategy on historical data before applying it for real.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "A backtest is a test of a trading strategy on historical data: the rules are applied to past price data to assess whether the strategy would have been profitable. It's a way to get statistics on a strategy without risking real capital.",
            },
            {
              type: "paragraph",
              text: "Backtesting has limitations: past results don't guarantee future ones, and careless testing can lead to overfitting the rules to a specific historical period. Even so, backtesting is a necessary first step before trusting a strategy with real money.",
            },
            {
              type: "list",
              items: [
                "Backtesting lets you evaluate a strategy on historical data without real risk",
                "Past backtest results don't guarantee a similar result in the future",
                "Overfitting rules to a specific historical period is a common backtesting mistake",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does backtesting a trading strategy involve?",
              options: [
                "Surveying other traders about the strategy",
                "Real trading with a minimal deposit",
                "Testing the strategy's rules on historical price data",
              ],
              correctAnswer: "Testing the strategy's rules on historical price data",
            },
            {
              prompt: "Does a successful backtest guarantee the same result in the future?",
              options: [
                "No, past results don't guarantee future ones",
                "Yes, but only for stocks",
                "Yes, backtest results always repeat in real trading",
              ],
              correctAnswer: "No, past results don't guarantee future ones",
            },
            {
              prompt: "What is overfitting in the context of backtesting?",
              options: [
                "Trading without a stop-loss",
                "Excessively tailoring the rules to a specific historical period",
                "Using too few indicators",
              ],
              correctAnswer: "Excessively tailoring the rules to a specific historical period",
            },
          ],
        },
        {
          slug: "forward-test",
          title: "Forward Testing",
          summary: "Testing a strategy on new, previously unused data after backtesting.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "A forward test is a test of a strategy on a real or demo account moving forward in time, using data that wasn't used when developing and backtesting the rules. It's a key step that shows whether the strategy works on genuinely new data.",
            },
            {
              type: "paragraph",
              text: "Forward testing helps reveal overfitting that may have gone unnoticed during the backtest: if forward-test results diverge significantly from backtest results, the strategy was likely tailored too precisely to past data.",
            },
            {
              type: "list",
              items: [
                "Forward testing is done on data not used when developing the strategy",
                "It helps reveal overfitting that a standard backtest wouldn't catch",
                "A large divergence between backtest and forward-test results is a warning sign",
              ],
            },
          ],
          questions: [
            {
              prompt: "What's the key difference between forward testing and backtesting?",
              options: [
                "There is no difference between them",
                "Forward testing is done on new data not used when developing the strategy",
                "Forward testing is always done only on a large real deposit",
              ],
              correctAnswer: "Forward testing is done on new data not used when developing the strategy",
            },
            {
              prompt: "What does forward testing help reveal that backtesting doesn't?",
              options: [
                "The exchange's withdrawal fee",
                "Overfitting of the strategy to past data",
                "The exact date of the next halving",
              ],
              correctAnswer: "Overfitting of the strategy to past data",
            },
            {
              prompt: "What does a large divergence between backtest and forward-test results indicate?",
              options: [
                "That the strategy is absolutely reliable",
                "The strategy was likely tailored too precisely to past data",
                "It has no bearing on evaluating the strategy",
              ],
              correctAnswer: "The strategy was likely tailored too precisely to past data",
            },
          ],
        },
        {
          slug: "statistika-sdelok",
          title: "Trade Statistics",
          summary: "Key metrics you need to track for an objective assessment of your trading.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Trade statistics are a set of objective metrics calculated from the journal: win rate (share of profitable trades), average R/R, expected value per trade, maximum drawdown, and others. These numbers show the real picture of your trading rather than a subjective feeling.",
            },
            {
              type: "paragraph",
              text: "No single metric should be evaluated in isolation: a high win rate with a low average R/R can produce the same result as a low win rate with a high R/R. It's expected value — the average outcome of a single trade — that's the ultimate benchmark of a strategy's quality.",
            },
            {
              type: "list",
              items: [
                "Win rate and average R/R need to be analyzed together, not separately",
                "A trade's expected value is the key overall metric of a strategy's quality",
                "Maximum drawdown shows how much the deposit fell during the worst period",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does a trading strategy's win rate show?",
              options: [
                "The number of currently open trades",
                "The total profit in dollars over all time",
                "The share of profitable trades out of the total number",
              ],
              correctAnswer: "The share of profitable trades out of the total number",
            },
            {
              prompt: "Why can't win rate be evaluated separately from average R/R?",
              options: [
                "A high win rate with low R/R can produce the same outcome as a low win rate with high R/R",
                "R/R has no effect on the final result at all",
                "Win rate and R/R are always exactly identical",
              ],
              correctAnswer: "A high win rate with low R/R can produce the same outcome as a low win rate with high R/R",
            },
            {
              prompt: "What does the maximum drawdown metric show?",
              options: [
                "The number of assets in the portfolio",
                "The strategy's total annual return",
                "How much the deposit fell during the worst trading period",
              ],
              correctAnswer: "How much the deposit fell during the worst trading period",
            },
          ],
        },
      ],
    },
    {
      title: "Altcoins and Tokenomics",
      lessons: [
        {
          slug: "tokenomics",
          title: "Tokenomics",
          summary: "A token's economic model: supply, distribution, and holder incentives.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Tokenomics describes a token's economic model: total and maximum supply, distribution among the team, investors, and community, emission and burn mechanisms, and the incentives that drive holders to use or hold the token.",
            },
            {
              type: "paragraph",
              text: "Weak tokenomics — for example, a large team allocation with a short lock-up period — creates constant selling pressure on the market regardless of the underlying product's quality. Analyzing tokenomics is just as important for evaluating a project as analyzing its technology.",
            },
            {
              type: "list",
              items: [
                "Tokenomics describes a token's supply, distribution, and holder incentives",
                "A large team allocation with short vesting creates a risk of selling pressure",
                "Analyzing tokenomics is no less important than analyzing a project's technology",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does a project's tokenomics describe?",
              options: [
                "The list of exchanges where the token trades",
                "The token's economic model: supply, distribution, and holder incentives",
                "Only the blockchain's technical stack",
              ],
              correctAnswer: "The token's economic model: supply, distribution, and holder incentives",
            },
            {
              prompt: "Which tokenomics factor creates the risk of constant selling pressure?",
              options: [
                "The team holding no tokens at all",
                "A large team allocation with a short lock-up period",
                "A maximum token supply of zero",
              ],
              correctAnswer: "A large team allocation with a short lock-up period",
            },
            {
              prompt: "How important is analyzing tokenomics compared to analyzing a project's technology?",
              options: [
                "Tokenomics doesn't matter for evaluating a project",
                "It only matters for projects without a blockchain",
                "It's no less important and should be weighed equally with the technology",
              ],
              correctAnswer: "It's no less important and should be weighed equally with the technology",
            },
          ],
        },
        {
          slug: "fdv",
          title: "FDV",
          summary: "Fully diluted valuation and why it matters more than market cap for new tokens.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "FDV (Fully Diluted Valuation) is a project's valuation calculated as if its entire maximum token supply were already in circulation, at the current price. Unlike market capitalization, which counts only tokens currently in circulation, FDV shows a potential future valuation.",
            },
            {
              type: "paragraph",
              text: "A large gap between current market cap and FDV means a significant portion of the supply has yet to be issued and will enter the market over time, creating potential selling pressure at unlock events — this is especially important to consider for new tokens with a low circulating percentage.",
            },
            {
              type: "list",
              items: [
                "FDV is calculated using the maximum token supply, not the current one",
                "A large gap between market cap and FDV indicates significant future emission",
                "Tokens with a low circulating percentage and high FDV require extra attention to the unlock schedule",
              ],
            },
          ],
          questions: [
            {
              prompt: "How is FDV calculated?",
              options: [
                "Based only on tokens traded on one specific exchange",
                "Based on trading volume over the last 24 hours",
                "Based on the maximum token supply at the current price",
              ],
              correctAnswer: "Based on the maximum token supply at the current price",
            },
            {
              prompt: "What does a large gap between market capitalization and FDV indicate?",
              options: [
                "A significant share of supply that hasn't yet entered circulation",
                "A technical error in the price calculation",
                "That the token is already fully unlocked",
              ],
              correctAnswer: "A significant share of supply that hasn't yet entered circulation",
            },
            {
              prompt: "For which tokens is it especially important to watch the relationship between market cap and FDV?",
              options: [
                "New tokens with a low percentage of supply in circulation",
                "The relationship between market cap and FDV has no practical significance",
                "Only stablecoins",
              ],
              correctAnswer: "New tokens with a low percentage of supply in circulation",
            },
          ],
        },
        {
          slug: "vesting",
          title: "Vesting",
          summary: "The gradual unlocking of team and investor tokens according to a set schedule.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Vesting is a mechanism for gradually unlocking tokens allocated to a project's team, investors, or advisors according to a predefined schedule, rather than a one-time payout. It's meant to reduce the incentive for early participants to immediately sell tokens after listing.",
            },
            {
              type: "paragraph",
              text: "A standard vesting structure includes a 'cliff' — a period during which tokens are fully locked — followed by linear or stepped unlocking. A short cliff and an aggressive vesting schedule raise the risk of selling pressure in the early stages.",
            },
            {
              type: "list",
              items: [
                "Vesting unlocks team and investor tokens gradually rather than all at once",
                "A cliff is a period of full token lock-up at the start of the vesting schedule",
                "A short cliff and an aggressive unlock schedule raise the risk of selling pressure",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is token vesting?",
              options: [
                "A method for mining new tokens",
                "A mechanism for gradually unlocking tokens according to a set schedule",
                "A one-time sale of all of a project's tokens",
              ],
              correctAnswer: "A mechanism for gradually unlocking tokens according to a set schedule",
            },
            {
              prompt: "What is a cliff in a vesting schedule?",
              options: [
                "A period of full token lock-up at the start of the schedule",
                "A fee for early token withdrawal",
                "The final unlock of all remaining tokens",
              ],
              correctAnswer: "A period of full token lock-up at the start of the schedule",
            },
            {
              prompt: "Why do projects use vesting for their team and investors?",
              options: [
                "It's a technical requirement of every blockchain",
                "To reduce the incentive to immediately sell tokens after listing",
                "To completely exclude the team from participating in the project",
              ],
              correctAnswer: "To reduce the incentive to immediately sell tokens after listing",
            },
          ],
        },
        {
          slug: "unlocks",
          title: "Unlocks",
          summary: "Scheduled token unlocks and their impact on an asset's price.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Unlocks are moments when the next batch of previously locked tokens (team, investor, or ecosystem fund allocations) becomes available for transfer and potential sale. Unlock dates and amounts are usually known in advance and published by the project.",
            },
            {
              type: "paragraph",
              text: "A large unlock relative to current trading volume can create noticeable selling pressure on price, especially if the recipients have no long-term incentive to hold the tokens. Traders often track the unlock calendar in advance as part of risk management.",
            },
            {
              type: "list",
              items: [
                "An unlock makes the next batch of tokens available for transfer and sale",
                "A large unlock relative to trading volume can create pressure on price",
                "The upcoming unlock calendar is an important risk management element for altcoin positions",
              ],
            },
          ],
          questions: [
            {
              prompt: "What happens at the moment of a token unlock?",
              options: [
                "The exchange temporarily halts trading of the asset",
                "The next batch of previously locked tokens becomes available for transfer",
                "All of a project's tokens are destroyed",
              ],
              correctAnswer: "The next batch of previously locked tokens becomes available for transfer",
            },
            {
              prompt: "When can a token unlock create noticeable pressure on price?",
              options: [
                "When its size is large relative to current trading volume",
                "Only if the unlock happens at night",
                "Unlocks never affect price",
              ],
              correctAnswer: "When its size is large relative to current trading volume",
            },
            {
              prompt: "Why do traders track a token's unlock calendar?",
              options: [
                "The unlock calendar has no practical use",
                "It's a risk management element when holding an altcoin position",
                "To precisely calculate profit taxes",
              ],
              correctAnswer: "It's a risk management element when holding an altcoin position",
            },
          ],
        },
        {
          slug: "emissiya",
          title: "Emission",
          summary: "The rate at which new tokens are issued and its effect on long-term price pressure.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Emission is the process of issuing new tokens into circulation, for example through mining rewards, staking, or ecosystem grants. The emission rate determines how quickly the token's supply grows over time, regardless of demand for it.",
            },
            {
              type: "paragraph",
              text: "High, constant emission without a corresponding rise in demand creates sustained downward pressure on price over the long term — this is one reason some projects introduce token burn mechanisms to partially offset emission.",
            },
            {
              type: "list",
              items: [
                "Emission increases a token's supply regardless of current demand",
                "High emission without rising demand creates long-term pressure on price",
                "Burn mechanisms are introduced to partially offset emission",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is token emission?",
              options: [
                "The process of verifying a wallet's authenticity",
                "The process of issuing new tokens into circulation",
                "The process of completely delisting a token from an exchange",
              ],
              correctAnswer: "The process of issuing new tokens into circulation",
            },
            {
              prompt: "What happens with high emission and no corresponding rise in demand?",
              options: [
                "The token's total supply shrinks",
                "Sustained long-term pressure on price emerges",
                "The token's price is guaranteed to rise",
              ],
              correctAnswer: "Sustained long-term pressure on price emerges",
            },
            {
              prompt: "Why do some projects introduce a token burn mechanism?",
              options: [
                "To completely halt the network's operation",
                "To partially offset the effect of emission on supply",
                "It's a requirement from exchanges for listing a token",
              ],
              correctAnswer: "To partially offset the effect of emission on supply",
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
          summary: "Decentralized exchanges and their fundamental difference from centralized ones.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "A DEX (Decentralized Exchange) is an exchange that operates through smart contracts without a central operator holding users' funds. Trades execute directly between participants' wallets rather than through an exchange's internal database, as on centralized platforms.",
            },
            {
              type: "paragraph",
              text: "The main advantage of a DEX is that the user retains control over their funds until the moment of the trade (the principle of 'not your keys, not your coins'). The flip side is that all responsibility for wallet security and correctly interacting with the smart contract falls on the user.",
            },
            {
              type: "list",
              items: [
                "A DEX operates through smart contracts without a central custodian of funds",
                "The user retains control over their assets until the moment of the trade",
                "Responsibility for wallet security on a DEX rests entirely with the user",
              ],
            },
          ],
          questions: [
            {
              prompt: "How does a DEX fundamentally differ from a centralized exchange?",
              options: [
                "A DEX operates through smart contracts without a central custodian of users' funds",
                "DEXs are only accessible to institutional investors",
                "It's impossible to make trades on a DEX",
              ],
              correctAnswer: "A DEX operates through smart contracts without a central custodian of users' funds",
            },
            {
              prompt: "What's the main advantage of trading through a DEX in terms of control over assets?",
              options: [
                "The user retains control of funds until the moment of the trade",
                "A DEX automatically protects against all forms of fraud",
                "A DEX is guaranteed to charge no fees",
              ],
              correctAnswer: "The user retains control of funds until the moment of the trade",
            },
            {
              prompt: "Who bears responsibility for wallet security when using a DEX?",
              options: [
                "Entirely the protocol's developers",
                "Responsibility is automatically insured by the exchange",
                "Entirely the user themselves",
              ],
              correctAnswer: "Entirely the user themselves",
            },
          ],
        },
        {
          slug: "amm",
          title: "AMM",
          summary: "Automated market makers and how liquidity pools work.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "AMM (Automated Market Maker) is the mechanism underlying most DEXs, where an asset's price is determined by a mathematical formula based on the ratio of tokens in a liquidity pool, rather than by an order book as on traditional exchanges.",
            },
            {
              type: "paragraph",
              text: "A liquidity pool is funded by users (liquidity providers) who deposit a pair of tokens of equal value and earn a share of trading fees in return. Large trades relative to the pool's size cause slippage — a noticeable deviation of the execution price from the market price.",
            },
            {
              type: "list",
              items: [
                "AMM determines price through a formula based on the ratio of tokens in the pool, not an order book",
                "Liquidity providers earn a share of the pool's trading fees",
                "A large trade relative to the pool's size causes noticeable price slippage",
              ],
            },
          ],
          questions: [
            {
              prompt: "How does an AMM determine an asset's price?",
              options: [
                "Through an order book, as on a centralized exchange",
                "Through a vote of token holders",
                "Through a mathematical formula based on the ratio of tokens in the pool",
              ],
              correctAnswer: "Through a mathematical formula based on the ratio of tokens in the pool",
            },
            {
              prompt: "What do liquidity providers receive in an AMM pool?",
              options: [
                "A guaranteed fixed annual percentage with no risk",
                "The sole right to manage the protocol",
                "A share of the pool's trading fees",
              ],
              correctAnswer: "A share of the pool's trading fees",
            },
            {
              prompt: "What is slippage in the context of an AMM?",
              options: [
                "The delay in a network node processing a transaction",
                "The network fee for confirming a transaction",
                "The deviation of the execution price from the market price on a large trade relative to pool size",
              ],
              correctAnswer: "The deviation of the execution price from the market price on a large trade relative to pool size",
            },
          ],
        },
        {
          slug: "staking",
          title: "Staking",
          summary: "Locking tokens to participate in consensus or earn rewards.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Staking is locking tokens to support network operation (in blockchains using a Proof-of-Stake mechanism) or to participate in a protocol in exchange for a reward. In PoS networks, stakers help validate transactions and secure the network.",
            },
            {
              type: "paragraph",
              text: "Staking returns are usually expressed as an annual percentage (APR/APY), but it's important to consider that this yield is partly or entirely generated through the emission of new tokens, which can offset the nominal return with real supply dilution.",
            },
            {
              type: "list",
              items: [
                "In Proof-of-Stake networks, staking helps validate transactions and secure the network",
                "Staking returns are usually expressed as an annual percentage (APR/APY)",
                "Staking returns are often partly generated by emission rather than purely by real demand",
              ],
            },
          ],
          questions: [
            {
              prompt: "What role does staking play in Proof-of-Stake networks?",
              options: [
                "It's used exclusively for project marketing",
                "It helps validate transactions and secure the network",
                "It completely replaces the need for a blockchain",
              ],
              correctAnswer: "It helps validate transactions and secure the network",
            },
            {
              prompt: "How is staking yield usually expressed?",
              options: [
                "As an annual percentage (APR/APY)",
                "Staking yield is never expressed numerically",
                "Only as a fixed dollar amount once a year",
              ],
              correctAnswer: "As an annual percentage (APR/APY)",
            },
            {
              prompt: "What is staking yield often partly generated from?",
              options: [
                "The emission of new tokens",
                "Government tax breaks",
                "Exclusively centralized exchange fees",
              ],
              correctAnswer: "The emission of new tokens",
            },
          ],
        },
        {
          slug: "lending",
          title: "Lending",
          summary: "Decentralized lending backed by crypto asset collateral.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Lending in DeFi allows some users to supply assets as a loan through a smart contract and earn interest, while others borrow against their own crypto assets as collateral, usually with over-collateralization (the collateral is worth more than the loan amount).",
            },
            {
              type: "paragraph",
              text: "If the collateral's value falls below a certain threshold relative to the loan amount, the protocol automatically liquidates the collateral to cover the debt. This protects lenders, but means borrowers must closely watch their position's collateralization ratio.",
            },
            {
              type: "list",
              items: [
                "DeFi lending usually requires over-collateralization from the borrower",
                "Interest rates on loans and deposits are set algorithmically by supply and demand in the protocol",
                "If collateral value falls below a threshold, the protocol automatically liquidates the position",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is usually required from a borrower in DeFi lending?",
              options: [
                "Over-collateralization exceeding the loan amount",
                "A guarantee from a centralized exchange",
                "Identity verification through a bank",
              ],
              correctAnswer: "Over-collateralization exceeding the loan amount",
            },
            {
              prompt: "What happens if the collateral's value falls below a certain threshold?",
              options: [
                "The loan is automatically canceled with no consequences",
                "The protocol automatically increases the loan amount",
                "The protocol automatically liquidates the collateral to cover the debt",
              ],
              correctAnswer: "The protocol automatically liquidates the collateral to cover the debt",
            },
            {
              prompt: "Who earns interest in a DeFi lending system?",
              options: [
                "No one is paid interest in DeFi lending",
                "Users who supplied assets as a loan through the protocol",
                "Only the protocol's developers",
              ],
              correctAnswer: "Users who supplied assets as a loan through the protocol",
            },
          ],
        },
        {
          slug: "yield-farming",
          title: "Yield Farming",
          summary: "Chasing maximum returns by combining different DeFi protocols.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Yield Farming is a strategy of seeking maximum returns by placing assets across various DeFi protocols (liquidity pools, lending, staking), often moving capital between protocols as the offered returns change.",
            },
            {
              type: "paragraph",
              text: "A high advertised farming yield is often tied to elevated risk: volatility of the reward tokens themselves, protocol smart contract risk, or impermanent loss in liquidity pools. Return and risk in DeFi are usually closely linked.",
            },
            {
              type: "list",
              items: [
                "Yield farming involves actively moving capital between protocols in pursuit of returns",
                "High advertised returns usually come with elevated risk",
                "Impermanent loss is a risk specific to liquidity pools",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is yield farming?",
              options: [
                "A government program subsidizing crypto projects",
                "A method of mining bitcoin using specialized hardware",
                "A strategy of seeking maximum returns by placing assets across different DeFi protocols",
              ],
              correctAnswer: "A strategy of seeking maximum returns by placing assets across different DeFi protocols",
            },
            {
              prompt: "What is a very high advertised farming yield usually tied to?",
              options: [
                "A complete absence of risk",
                "Elevated risk (token volatility, contract risk, impermanent loss)",
                "A government-guaranteed return",
              ],
              correctAnswer: "Elevated risk (token volatility, contract risk, impermanent loss)",
            },
            {
              prompt: "What is impermanent loss?",
              options: [
                "A network fee for transferring tokens",
                "A guaranteed loss on any staking",
                "A risk specific to liquidity pools tied to changes in the relative prices of the assets",
              ],
              correctAnswer: "A risk specific to liquidity pools tied to changes in the relative prices of the assets",
            },
          ],
        },
      ],
    },
    {
      title: "Memecoins and New Projects",
      lessons: [
        {
          slug: "launchpad",
          title: "Launchpad",
          summary: "Platforms for the early launch and sale of tokens for new projects.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "A launchpad is a platform that helps new projects carry out an initial token distribution and raise starting liquidity, usually providing early access to platform participants in exchange for meeting certain conditions (staking the native token, KYC, and so on).",
            },
            {
              type: "paragraph",
              text: "Participating through a launchpad doesn't eliminate a project's risks — a platform's reputation affects initial screening but doesn't guarantee the token's success after listing. It's important to evaluate the project itself separately from the platform through which it launches.",
            },
            {
              type: "list",
              items: [
                "A launchpad helps projects with the initial distribution of tokens and raising liquidity",
                "Access to a launch often requires meeting platform conditions (staking, KYC)",
                "A launchpad's reputation doesn't guarantee the token's success after listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "What do projects use launchpad platforms for?",
              options: [
                "To completely avoid raising investment",
                "Exclusively for blockchain technical support",
                "For the initial distribution of tokens and raising liquidity",
              ],
              correctAnswer: "For the initial distribution of tokens and raising liquidity",
            },
            {
              prompt: "What's often required from participants to access a launch on a launchpad?",
              options: [
                "Holding a financial analyst diploma",
                "Meeting platform conditions, such as staking the native token",
                "Registering a legal entity",
              ],
              correctAnswer: "Meeting platform conditions, such as staking the native token",
            },
            {
              prompt: "Does a launchpad's good reputation guarantee the success of a token launched through it?",
              options: [
                "Yes, it's a 100% guarantee of success",
                "Yes, but only for Bitcoin-based projects",
                "No, the project still needs to be evaluated separately",
              ],
              correctAnswer: "No, the project still needs to be evaluated separately",
            },
          ],
        },
        {
          slug: "ico",
          title: "ICO",
          summary: "The initial coin offering as an early form of capital raising in crypto projects.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "ICO (Initial Coin Offering) is a capital-raising model in which a project sells a new token directly to investors, usually at an early stage of development, in exchange for established cryptocurrencies or fiat. It was one of the first crowdfunding mechanisms in the crypto industry.",
            },
            {
              type: "paragraph",
              text: "The 2017 ICO wave demonstrated both the model's potential for rapidly raising capital and its risks: the lack of regulation led to a large number of projects with no real product. This drove the emergence of more structured launch formats, including launchpads and IDOs.",
            },
            {
              type: "list",
              items: [
                "ICO is a model for selling a new token directly to investors at an early project stage",
                "ICOs became one of the first forms of crowdfunding in the crypto industry",
                "Weak ICO regulation historically led to a high percentage of unviable projects",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does the ICO model involve?",
              options: [
                "The process of mining bitcoin",
                "Selling a new token directly to investors at an early project stage",
                "Government regulation of cryptocurrencies",
              ],
              correctAnswer: "Selling a new token directly to investors at an early project stage",
            },
            {
              prompt: "What historical role did ICOs play in the crypto industry?",
              options: [
                "They became one of the first forms of crowdfunding in cryptocurrencies",
                "They led to the abolition of blockchain technology",
                "They completely replaced exchange trading",
              ],
              correctAnswer: "They became one of the first forms of crowdfunding in cryptocurrencies",
            },
            {
              prompt: "What did the weak regulation of the 2017 ICO wave lead to?",
              options: [
                "An immediate ban on all cryptocurrencies in every country",
                "The complete disappearance of risk for investors",
                "A high percentage of projects with no real product",
              ],
              correctAnswer: "A high percentage of projects with no real product",
            },
          ],
        },
        {
          slug: "ido",
          title: "IDO",
          summary: "The initial DEX offering as a more transparent alternative to the ICO.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "IDO (Initial DEX Offering) is a token offering conducted directly through a decentralized exchange or launchpad platform, in which liquidity is usually added to the pool immediately after the sale, and listing happens faster and more transparently than with a traditional ICO.",
            },
            {
              type: "paragraph",
              text: "IDOs reduce some of the risks typical of ICOs (for example, the delay between raising funds and listing), but they don't eliminate the risks of the project itself. High demand for an IDO often leads to sharp price volatility immediately after trading opens.",
            },
            {
              type: "list",
              items: [
                "IDOs are conducted through a decentralized exchange or launchpad platform",
                "Liquidity in the pool is usually added immediately after the token sale",
                "High demand for an IDO often causes sharp price volatility after listing",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is an IDO usually conducted through?",
              options: [
                "A central market regulator",
                "A decentralized exchange or launchpad platform",
                "Only a traditional bank",
              ],
              correctAnswer: "A decentralized exchange or launchpad platform",
            },
            {
              prompt: "How does an IDO differ from a classic ICO in terms of listing?",
              options: [
                "There's no difference between an ICO and an IDO",
                "An IDO never involves listing a token",
                "Listing happens faster and more transparently thanks to immediate added liquidity",
              ],
              correctAnswer: "Listing happens faster and more transparently thanks to immediate added liquidity",
            },
            {
              prompt: "What often happens to a token's price right after trading opens on an IDO?",
              options: [
                "Trading automatically halts for 24 hours",
                "The price always remains perfectly stable",
                "Sharp volatility due to high demand",
              ],
              correctAnswer: "Sharp volatility due to high demand",
            },
          ],
        },
        {
          slug: "airdrop",
          title: "Airdrop",
          summary: "The free distribution of tokens to users, and what to watch out for.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "An airdrop is the free distribution of a project's tokens to a specific group of users, often as a reward for early use of the protocol, participation in a testnet, or completing certain actions. It's a way to attract attention and build an initial community of holders.",
            },
            {
              type: "paragraph",
              text: "The expectation of a potential airdrop attracts many users, but it also creates risks: fake airdrops are used for phishing and stealing funds through malicious smart contracts. A legitimate airdrop never requires sending funds or private keys to receive tokens.",
            },
            {
              type: "list",
              items: [
                "An airdrop is the free distribution of tokens to a specific group of users",
                "Airdrops often reward early use of a protocol or participation in a testnet",
                "A legitimate airdrop never requires sending funds or private keys",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is a token airdrop?",
              options: [
                "A mandatory tax on cryptocurrency transactions",
                "A paid subscription to project news",
                "The free distribution of tokens to a specific group of users",
              ],
              correctAnswer: "The free distribution of tokens to a specific group of users",
            },
            {
              prompt: "What do projects often reward users for through an airdrop?",
              options: [
                "Removing a wallet from the network",
                "Early use of the protocol or participation in a testnet",
                "Negative reviews of the project",
              ],
              correctAnswer: "Early use of the protocol or participation in a testnet",
            },
            {
              prompt: "What warning sign should alert a user to a potential airdrop scam?",
              options: [
                "The absence of any requirements from the user",
                "A request to send funds or private keys to receive tokens",
                "A simple check of the wallet address on a public list",
              ],
              correctAnswer: "A request to send funds or private keys to receive tokens",
            },
          ],
        },
        {
          slug: "kak-iskat-proekty",
          title: "How to Find Projects",
          summary: "A basic checklist for the initial evaluation of a new crypto project before investing.",
          xpReward: 30,
          content: [
            {
              type: "paragraph",
              text: "Searching for promising projects starts with a basic check: who is the team and do they have a public reputation, is there a working product or just a pitch deck, who are the early-round investors, and how transparent and balanced is the tokenomics.",
            },
            {
              type: "paragraph",
              text: "It's also useful to study community activity and development in public code repositories, rather than just marketing claims on social media. A project with an active, growing audience and regular code updates usually deserves more trust than one with a single flashy announcement.",
            },
            {
              type: "list",
              items: [
                "Checking the team, product, and investors is the basic first step in evaluating a project",
                "Development activity in open repositories is a more reliable signal than marketing",
                "Balanced, transparent tokenomics reduces the risk of future selling pressure",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does a basic check of a new crypto project usually start with?",
              options: [
                "Looking only at the project's logo",
                "Analyzing the team, product, and early investors",
                "Immediately buying the maximum amount of the token",
              ],
              correctAnswer: "Analyzing the team, product, and early investors",
            },
            {
              prompt: "Which signal is usually considered a more reliable indicator of a project's real progress?",
              options: [
                "The number of social media followers with no other verification",
                "Development activity in open code repositories",
                "The number of bold promises in marketing posts",
              ],
              correctAnswer: "Development activity in open code repositories",
            },
            {
              prompt: "Why is it worth paying attention to tokenomics during an initial project evaluation?",
              options: [
                "Tokenomics only matters for projects without a blockchain",
                "Balanced tokenomics reduces the risk of future selling pressure",
                "Tokenomics has no connection to a project's risks",
              ],
              correctAnswer: "Balanced tokenomics reduces the risk of future selling pressure",
            },
          ],
        },
      ],
    },
    {
      title: "Trading Strategies",
      lessons: [
        {
          slug: "scalping",
          title: "Scalping",
          summary: "A strategy of many short trades with small profits on minute timeframes.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Scalping is a strategy in which a trader opens a large number of trades over a short period (seconds to minutes), aiming to earn a small profit from each. Scalping requires high concentration, low fees, and good instrument liquidity.",
            },
            {
              type: "paragraph",
              text: "Because of the high frequency of trades, even a small exchange fee significantly affects a scalper's overall return, which is why precisely calculating costs is important. Scalping also places heavy demands on order execution speed and connection stability.",
            },
            {
              type: "list",
              items: [
                "Scalping involves many short trades with a small profit target",
                "Exchange fees significantly affect overall returns due to high trade frequency",
                "The strategy requires high instrument liquidity and stable order execution",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the key characteristic of scalping as a strategy?",
              options: [
                "Holding a position for several months",
                "Completely abandoning chart analysis",
                "A large number of short trades with a small profit on each",
              ],
              correctAnswer: "A large number of short trades with a small profit on each",
            },
            {
              prompt: "Why are exchange fees especially important for a scalper?",
              options: [
                "Scalping is completely exempt from fees on every exchange",
                "Due to high trade frequency, they significantly affect overall returns",
                "Fees only matter when holding a position for over a month",
              ],
              correctAnswer: "Due to high trade frequency, they significantly affect overall returns",
            },
            {
              prompt: "What is especially important for an instrument used in scalping?",
              options: [
                "The absence of a real-time price chart",
                "The lowest possible liquidity",
                "High liquidity and fast order execution",
              ],
              correctAnswer: "High liquidity and fast order execution",
            },
          ],
        },
        {
          slug: "day-trading",
          title: "Day Trading",
          summary: "Intraday trading with all positions closed before the end of the trading session.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Day Trading is a strategy in which all trades are opened and closed within a single day, with no positions carried over to the next day. This eliminates the risk of overnight gaps and lets the trader fully control market exposure by the end of the session.",
            },
            {
              type: "paragraph",
              text: "Day trading requires more time for market analysis and monitoring throughout the day compared to longer-term approaches, but it offers more entry opportunities than scalping thanks to wider profit targets.",
            },
            {
              type: "list",
              items: [
                "All day trading positions are closed before the end of the trading day",
                "Not carrying positions overnight eliminates the risk of overnight gaps",
                "Day trading requires significant time for active market monitoring",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the key rule of day trading?",
              options: [
                "Positions are necessarily held for several weeks",
                "Trades are opened only once a month",
                "All positions are closed within the same trading day",
              ],
              correctAnswer: "All positions are closed within the same trading day",
            },
            {
              prompt: "What risk does not carrying positions over to the next day eliminate?",
              options: [
                "The risk of exchange fees",
                "The risk of a token's name changing",
                "The risk of overnight price gaps",
              ],
              correctAnswer: "The risk of overnight price gaps",
            },
            {
              prompt: "How does day trading differ from scalping in terms of profit targets?",
              options: [
                "Day trading doesn't involve profit targets at all",
                "Both strategies have absolutely identical profit targets",
                "Day trading usually has wider profit targets per trade",
              ],
              correctAnswer: "Day trading usually has wider profit targets per trade",
            },
          ],
        },
        {
          slug: "swing-trading",
          title: "Swing Trading",
          summary: "Holding a position from several days to several weeks to capture medium-term moves.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Swing Trading is a strategy of holding positions from several days to several weeks in order to capture a medium-term price move (a 'swing'). It requires less time for constant monitoring compared to day trading and scalping.",
            },
            {
              type: "paragraph",
              text: "Swing traders more often rely on higher timeframes (H4, D1) to determine trend and entry points, while a trade is inevitably exposed to overnight and weekend gaps, so the stop-loss and position size need to account for this.",
            },
            {
              type: "list",
              items: [
                "Swing trading involves holding a position from several days to several weeks",
                "The strategy requires less constant monitoring than day trading or scalping",
                "Swing trading positions are exposed to the risk of overnight and weekend gaps",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the typical holding horizon for a position in swing trading?",
              options: [
                "From a few seconds to a few minutes",
                "From several days to several weeks",
                "Several years without exception",
              ],
              correctAnswer: "From several days to several weeks",
            },
            {
              prompt: "Which timeframes do swing traders most often use for analysis?",
              options: [
                "Exclusively the tick chart",
                "Higher timeframes, such as H4 and D1",
                "Only the one-minute timeframe",
              ],
              correctAnswer: "Higher timeframes, such as H4 and D1",
            },
            {
              prompt: "What specific risk are swing trading positions exposed to because of their holding duration?",
              options: [
                "The risk of instantaneous order execution",
                "The risk of a complete absence of volatility",
                "The risk of overnight and weekend price gaps",
              ],
              correctAnswer: "The risk of overnight and weekend price gaps",
            },
          ],
        },
        {
          slug: "position-trading",
          title: "Position Trading",
          summary: "Long-term position holding based on major trends and fundamental factors.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Position Trading is a strategy of holding positions from several weeks to months or longer, aimed at capturing major, long-term trends. Position traders pay less attention to short-term price noise and more to macroeconomic and fundamental context.",
            },
            {
              type: "paragraph",
              text: "Because of its long horizon, position trading requires greater tolerance for interim drawdowns within the overall trend and typically uses wider stops relative to capital per trade, offset by holding fewer simultaneous positions.",
            },
            {
              type: "list",
              items: [
                "Position trading is focused on holding positions from several weeks to months",
                "The strategy relies on macroeconomic and fundamental context more than short-term noise",
                "Position traders usually use wider stops and hold fewer simultaneous positions",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is position trading primarily focused on?",
              options: [
                "Minute-by-minute price fluctuations",
                "Real-time arbitrage between exchanges",
                "Capturing major, long-term trends",
              ],
              correctAnswer: "Capturing major, long-term trends",
            },
            {
              prompt: "What must a position trader be prepared for because of the long holding horizon?",
              options: [
                "A complete absence of any price fluctuations",
                "Interim drawdowns within the overall trend",
                "Being required to close the trade at the end of every day",
              ],
              correctAnswer: "Interim drawdowns within the overall trend",
            },
            {
              prompt: "What kind of analysis plays an especially important role in position trading?",
              options: [
                "Exclusively order book analysis over the last minute",
                "Macroeconomic and fundamental analysis",
                "No analysis is required at all",
              ],
              correctAnswer: "Macroeconomic and fundamental analysis",
            },
          ],
        },
        {
          slug: "liquidity-sweep-strategiya",
          title: "Liquidity Sweep",
          summary: "A trading strategy of entering after liquidity is taken beyond a key level.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "As a trading strategy, the Liquidity Sweep is built on the idea that price often falsely breaks a significant level (a high, low, or a cluster of stop-losses), collects liquidity there, and then reverses in the opposite direction — this reversal point itself is used as the entry signal.",
            },
            {
              type: "paragraph",
              text: "The key difference from a simple breakout is that the trader isn't waiting for continuation beyond the level, but specifically for a quick return of price back inside the range, which confirms that the break was caused by a liquidity grab rather than genuine trend strength.",
            },
            {
              type: "list",
              items: [
                "The strategy is built on a false break of a level followed by a quick price reversal",
                "Entry happens after confirmation that price has returned inside the range, not at the moment of the break itself",
                "The strategy requires patience and confirmation to tell a sweep apart from a real breakout",
              ],
            },
          ],
          questions: [
            {
              prompt: "What idea is the Liquidity Sweep strategy built on?",
              options: [
                "A false break of a level that collects liquidity, followed by a price reversal",
                "Ignoring all support and resistance levels",
                "Constantly holding a position without any level analysis",
              ],
              correctAnswer: "A false break of a level that collects liquidity, followed by a price reversal",
            },
            {
              prompt: "What confirms that a level break was a sweep rather than a real breakout?",
              options: [
                "A complete absence of volume on the break",
                "Price continuing well beyond the level",
                "Price quickly returning back inside the range after the break",
              ],
              correctAnswer: "Price quickly returning back inside the range after the break",
            },
            {
              prompt: "When does a trader using this strategy usually open a trade?",
              options: [
                "The moment price touches the level, without waiting for confirmation",
                "After confirmation that price has returned inside the range",
                "Only after the trading week closes",
              ],
              correctAnswer: "After confirmation that price has returned inside the range",
            },
          ],
        },
        {
          slug: "breakout",
          title: "Breakout",
          summary: "A strategy of entering in the direction of a confirmed break of a key level.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Breakout trading involves entering a trade in the direction of movement when price clears a significant support, resistance, or consolidation boundary with confirmation — typically increased volume and a candle close beyond the level, not just a touch.",
            },
            {
              type: "paragraph",
              text: "The main risk of a breakout strategy is false breakouts, when price briefly moves beyond a level and immediately returns. That's why traders often wait for a retest of the broken level (when it flips from resistance to support, or vice versa) for a more reliable entry.",
            },
            {
              type: "list",
              items: [
                "A breakout strategy involves entering in the direction of a confirmed level break",
                "Confirmation of a breakout is usually increased volume and a candle close beyond the level",
                "Waiting for a retest of the broken level reduces the risk of entering on a false breakout",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the breakout strategy built on?",
              options: [
                "Entering exclusively against the direction of the break",
                "Completely ignoring support and resistance levels",
                "Entering in the direction of a confirmed break of a significant level",
              ],
              correctAnswer: "Entering in the direction of a confirmed break of a significant level",
            },
            {
              prompt: "What usually confirms a real breakout rather than a false one?",
              options: [
                "Volume dropping to zero",
                "A simple touch of the level by price without a candle close",
                "Increased volume and a candle close beyond the level",
              ],
              correctAnswer: "Increased volume and a candle close beyond the level",
            },
            {
              prompt: "Why do traders sometimes wait for a retest of the broken level before entering?",
              options: [
                "To guarantee an increase in the trade's fee",
                "A retest has no significance for entry at all",
                "To reduce the risk of entering on a false breakout",
              ],
              correctAnswer: "To reduce the risk of entering on a false breakout",
            },
          ],
        },
        {
          slug: "mean-reversion",
          title: "Mean Reversion",
          summary: "A strategy of returning to an average value after a strong price deviation.",
          xpReward: 35,
          content: [
            {
              type: "paragraph",
              text: "Mean Reversion is built on the idea that price which has deviated significantly from its average value (for example, from a moving average or VWAP) tends to return to it over time. The strategy tends to work better in a sideways market than in a strong trend.",
            },
            {
              type: "paragraph",
              text: "Traders using this strategy often combine oscillators like RSI with deviation bands (for example, Bollinger Bands), entering against the direction of a strong short-term move in anticipation of a correction back to the average level.",
            },
            {
              type: "list",
              items: [
                "The strategy assumes price returns to its average value after a strong deviation",
                "Mean reversion is usually more effective in a sideways market than in a strong directional trend",
                "Oscillators and deviation bands are often used together to find entry points",
              ],
            },
          ],
          questions: [
            {
              prompt: "What idea is the Mean Reversion strategy built on?",
              options: [
                "Price never returns to its average value",
                "Price that has deviated significantly from its average tends to return to it",
                "Price always continues in the same direction indefinitely",
              ],
              correctAnswer: "Price that has deviated significantly from its average tends to return to it",
            },
            {
              prompt: "What type of market does mean reversion usually work better in?",
              options: [
                "A market with no participants other than the trader",
                "A sideways market",
                "Exclusively during periods of hyperinflation",
              ],
              correctAnswer: "A sideways market",
            },
            {
              prompt: "What tools do traders often combine to find entry points in mean reversion?",
              options: [
                "Only social media news",
                "Oscillators like RSI and deviation bands",
                "Exclusively exchange fee data",
              ],
              correctAnswer: "Oscillators like RSI and deviation bands",
            },
          ],
        },
      ],
    },
    {
      title: "Final Exam",
      lessons: [
        {
          slug: "polnaya-torgovlya-na-simulyatore",
          title: "Full Trading on a Simulator",
          summary: "Final practice: applying everything you've learned on a virtual account.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "This lesson brings together everything covered in the course — from basic market concepts to risk management, psychology, indicators, and trading strategies. The task is to execute a series of trades on a virtual account, applying risk management rules and a predefined plan for each trade.",
            },
            {
              type: "paragraph",
              text: "The goal of this stage isn't a single large profit, but demonstrating a consistent, disciplined approach: correctly calculating position size, a justified stop-loss and take profit, and keeping records of every trade, the way professional traders do.",
            },
            {
              type: "list",
              items: [
                "Every trade should be accompanied by a predefined entry and exit plan",
                "Position size is calculated based on risk, not desired profit",
                "The result of a single trade matters less than consistently following the rules",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the main goal of the final practice on a virtual account?",
              options: [
                "Getting the maximum possible profit at any cost",
                "Demonstrating a consistent and disciplined approach to trading",
                "Making as many trades as possible without analysis",
              ],
              correctAnswer: "Demonstrating a consistent and disciplined approach to trading",
            },
            {
              prompt: "What should precede the opening of every trade at this stage?",
              options: [
                "Maximizing leverage",
                "A predefined entry and exit plan",
                "A random choice of asset without analysis",
              ],
              correctAnswer: "A predefined entry and exit plan",
            },
            {
              prompt: "What determines position size according to the course material?",
              options: [
                "The trader's intuition alone",
                "The dollar exchange rate at the time of the trade",
                "Acceptable risk per trade, not desired profit",
              ],
              correctAnswer: "Acceptable risk per trade, not desired profit",
            },
          ],
        },
        {
          slug: "proyti-vse-zadaniya",
          title: "You Need to Complete All Assignments",
          summary: "The final check: why completing every module matters for finishing the course.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Every module in the course is built to rely on the one before it: understanding risk management relies on understanding volatility and market structure, trade psychology relies on understanding how risk works, and strategies rely on mastering indicators and volume analysis.",
            },
            {
              type: "paragraph",
              text: "Skipping individual modules creates gaps that show up later — for example, when using a strategy without understanding how to correctly size a position for it. That's why completing the course requires finishing all assignments, not just selected modules.",
            },
            {
              type: "list",
              items: [
                "The course modules are built sequentially and rely on one another",
                "Skipping a module creates gaps that show up at later stages of learning",
                "Fully completing the course requires finishing all assignments, not only select modules",
              ],
            },
          ],
          questions: [
            {
              prompt: "Why is it recommended to complete the course modules in sequence?",
              options: [
                "It's required solely to earn XP",
                "The order in which modules are completed doesn't matter at all",
                "Each subsequent module relies on knowledge from the previous ones",
              ],
              correctAnswer: "Each subsequent module relies on knowledge from the previous ones",
            },
            {
              prompt: "What can skipping individual course modules lead to?",
              options: [
                "Automatically receiving a certificate without studying",
                "It has no effect on further learning at all",
                "Gaps in knowledge that show up at later stages",
              ],
              correctAnswer: "Gaps in knowledge that show up at later stages",
            },
            {
              prompt: "What is required to fully complete the course?",
              options: [
                "Simply opening the course's first lesson is enough",
                "Completing all assignments, not just select modules",
                "Completing any single module of your choice",
              ],
              correctAnswer: "Completing all assignments, not just select modules",
            },
          ],
        },
        {
          slug: "poluchenie-sertifikata",
          title: "Getting Your Certificate",
          summary: "What completing the 'The Trader's Path' course means and how to use what you've learned going forward.",
          xpReward: 40,
          content: [
            {
              type: "paragraph",
              text: "Completing all modules of 'The Trader's Path' course means finishing the full journey from basic market concepts to advanced topics: indicators, volume analysis, on-chain data, DeFi, tokenomics, and building your own trading strategy tested on historical data.",
            },
            {
              type: "paragraph",
              text: "Completing the course on its own doesn't replace practical experience: real market conditions, live psychology under pressure, and working with real capital all require further practice. The course's knowledge is the foundation on which your further development as a trader is built.",
            },
            {
              type: "list",
              items: [
                "The course covers the journey from basic market concepts to advanced topics in analysis and strategy",
                "Completing the course is a foundation, not a substitute for real trading experience",
                "Further development requires practice, keeping a journal, and constantly reviewing your own decisions",
              ],
            },
          ],
          questions: [
            {
              prompt: "What does fully completing 'The Trader's Path' course cover?",
              options: [
                "Only the basics of using a wallet",
                "Exclusively the legal aspects of cryptocurrencies",
                "The journey from basic market concepts to advanced topics in analysis and strategy",
              ],
              correctAnswer: "The journey from basic market concepts to advanced topics in analysis and strategy",
            },
            {
              prompt: "Does completing the course replace real trading experience?",
              options: [
                "Yes, the course fully replaces any practice",
                "No, the course is a foundation, and real experience requires further practice",
                "Yes, but only for trades with leverage above 10x",
              ],
              correctAnswer: "No, the course is a foundation, and real experience requires further practice",
            },
            {
              prompt: "What is recommended to keep doing after finishing the course?",
              options: [
                "Immediately abandon risk management",
                "Keep a trading journal and continuously review your own decisions",
                "Completely stop analyzing your trading",
              ],
              correctAnswer: "Keep a trading journal and continuously review your own decisions",
            },
          ],
        },
      ],
    },
  ],
};
