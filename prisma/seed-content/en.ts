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
                "Trading involves frequent trades over short time horizons",
                "Trading is only available to banks",
                "Trading carries no risk",
              ],
              correctAnswer: "Trading involves frequent trades over short time horizons",
            },
            {
              prompt: "Unlike a classic investor, who can profit even when an asset's price falls?",
              options: ["A trader who opens short positions", "Only banks", "Only market makers"],
              correctAnswer: "A trader who opens short positions",
            },
            {
              prompt: "What do market makers provide in the market?",
              options: ["Liquidity for other participants' trades", "Government regulation", "A fixed asset price"],
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
              options: ["It operates 24/7 with no days off", "It only trades on weekday afternoons", "It's fully regulated by the government"],
              correctAnswer: "It operates 24/7 with no days off",
            },
            {
              prompt: "What is traded on the Forex market?",
              options: ["Currency pairs", "Company stocks", "Raw commodities"],
              correctAnswer: "Currency pairs",
            },
            {
              prompt: "Which of the listed markets is usually the most volatile?",
              options: ["Cryptocurrency", "The government bond market", "G7 currency pairs"],
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
              options: ["The asset's price", "Trading volume", "The number of traders"],
              correctAnswer: "The asset's price",
            },
            {
              prompt: "What is a timeframe?",
              options: [
                "The period of time represented by one element of the chart",
                "The name of an exchange",
                "A type of order",
              ],
              correctAnswer: "The period of time represented by one element of the chart",
            },
            {
              prompt: "Why do traders analyze several timeframes at once?",
              options: [
                "To see the overall trend picture and a precise entry point at the same time",
                "It has no practical purpose",
                "To avoid exchange fees",
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
                "The range between the open and close price",
                "The maximum trading volume",
                "The number of market participants",
              ],
              correctAnswer: "The range between the open and close price",
            },
            {
              prompt: "What do the wicks (shadows) of a candle show?",
              options: [
                "The price range beyond the body — the high and low for the period",
                "The average trading volume",
                "The number of trades in a day",
              ],
              correctAnswer: "The price range beyond the body — the high and low for the period",
            },
            {
              prompt: "What might a long lower wick after a price drop indicate?",
              options: [
                "Buyers actively bought up the price from below — a reversal is possible",
                "The market will definitely continue falling",
                "Trading volume was zero",
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
                "A price where buyers have historically halted a decline",
                "The exchange's opening price",
                "A trading fee",
              ],
              correctAnswer: "A price where buyers have historically halted a decline",
            },
            {
              prompt: "What usually happens to a resistance level after it's broken to the upside?",
              options: [
                "It often becomes new support",
                "It disappears and no longer affects the price",
                "The price is guaranteed to instantly return",
              ],
              correctAnswer: "It often becomes new support",
            },
            {
              prompt: "How should reliable levels be drawn on a chart?",
              options: [
                "Based on multiple price touches, not a single point",
                "Strictly in the center of the chart",
                "Only on the 1-minute timeframe",
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
                "A sequence of higher highs and higher lows",
                "Candles of the same height",
                "Only green candles in a row",
              ],
              correctAnswer: "A sequence of higher highs and higher lows",
            },
            {
              prompt: "What is a sideways trend (range)?",
              options: [
                "Price movement within a range with no clear direction",
                "A sharp price decline",
                "A pause in exchange trading",
              ],
              correctAnswer: "Price movement within a range with no clear direction",
            },
            {
              prompt: "Why do people say \"the trend is your friend\"?",
              options: [
                "Trading with the trend statistically offers better odds of success",
                "A trend never changes direction",
                "It's just a figure of speech with no practical meaning",
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
                "The move is weak and may not be confirmed",
                "It's the most reliable entry signal",
                "The asset's liquidity is at its maximum",
              ],
              correctAnswer: "The move is weak and may not be confirmed",
            },
            {
              prompt: "What is market liquidity?",
              options: [
                "The ease of buying/selling an asset without significantly affecting its price",
                "The total number of coins in circulation",
                "The exchange's trading fee",
              ],
              correctAnswer: "The ease of buying/selling an asset without significantly affecting its price",
            },
            {
              prompt: "What risk does a trader face when working with a low-liquidity asset?",
              options: [
                "Significant slippage when executing a trade",
                "A complete absence of fees",
                "Guaranteed profit",
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
                "To limit the loss on a trade in advance",
                "To increase position size",
                "To guarantee profit",
              ],
              correctAnswer: "To limit the loss on a trade in advance",
            },
            {
              prompt: "What percentage of the deposit is usually recommended to risk on one trade?",
              options: ["1–2%", "25–30%", "The entire deposit"],
              correctAnswer: "1–2%",
            },
            {
              prompt: "What does a risk/reward ratio of 1:3 mean?",
              options: [
                "Potential profit is 3 times greater than the risk",
                "Risk is 3 times greater than the profit",
                "The trade will close after 3 hours",
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
                "EMA gives more weight to recent prices",
                "SMA only works on the 1-minute chart",
                "There's no difference, they're the same thing",
              ],
              correctAnswer: "EMA gives more weight to recent prices",
            },
            {
              prompt: "What does it suggest when the price is above the moving average?",
              options: ["The trend is likely upward", "The asset is definitely overvalued", "Trading volume is zero"],
              correctAnswer: "The trend is likely upward",
            },
            {
              prompt: "What is called a \"golden cross\"?",
              options: [
                "A short MA crossing above a long MA — a bullish signal",
                "The moment a new coin is listed",
                "The price crossing the zero line",
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
              options: ["From 0 to 100", "From -1 to 1", "From 0 to 10,000"],
              correctAnswer: "From 0 to 100",
            },
            {
              prompt: "What does an RSI above 70 usually mean?",
              options: ["The asset is in the overbought zone", "The asset cannot be sold", "Trading volume has fallen to zero"],
              correctAnswer: "The asset is in the overbought zone",
            },
            {
              prompt: "What is RSI divergence?",
              options: [
                "Price and the indicator move in different directions — a signal of a possible reversal",
                "Price and the indicator move in complete sync",
                "A technical glitch in the indicator",
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
              options: ["61.8%", "10%", "100%"],
              correctAnswer: "61.8%",
            },
            {
              prompt: "What are Fibonacci retracements used for?",
              options: [
                "Looking for entry points on a pullback within a trend",
                "Calculating the exchange fee",
                "Determining the exact time news will be published",
              ],
              correctAnswer: "Looking for entry points on a pullback within a trend",
            },
            {
              prompt: "What are Fibonacci extensions used for?",
              options: [
                "Determining price targets beyond the impulse",
                "Determining stop-loss size in percentage terms",
                "Showing trading volume",
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
                "Guaranteed continuation of the rally",
                "A halt in exchange trading",
              ],
              correctAnswer: "A likely reversal of an uptrend",
            },
            {
              prompt: "What confirms that a \"double top\" pattern has played out?",
              options: ["A break of the neckline to the downside", "The appearance of a third peak", "A volume increase at the very top"],
              correctAnswer: "A break of the neckline to the downside",
            },
            {
              prompt: "Why is volume important when confirming a pattern breakout?",
              options: [
                "Without volume, a breakout is more often false",
                "Volume has no effect on patterns at all",
                "Volume only matters on the daily timeframe",
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
              options: ["In the direction of the prior trend", "Always strictly downward", "In a random direction"],
              correctAnswer: "In the direction of the prior trend",
            },
            {
              prompt: "What do triangles, flags, and rectangles have in common?",
              options: [
                "They are pauses/consolidations within a trend",
                "They are always reversal signals",
                "They only occur on forex",
              ],
              correctAnswer: "They are pauses/consolidations within a trend",
            },
            {
              prompt: "What most often accompanies a genuine breakout from a triangle?",
              options: ["A spike in volume", "A complete absence of volume", "A halt in trading"],
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
              options: ["The higher one (for example, daily)", "The 1-minute one", "Any random one"],
              correctAnswer: "The higher one (for example, daily)",
            },
            {
              prompt: "Why is a lower timeframe needed in multi-timeframe analysis?",
              options: ["For a precise trade entry", "To completely replace the higher timeframe", "To calculate the exchange fee"],
              correctAnswer: "For a precise trade entry",
            },
            {
              prompt: "What can happen if you ignore the higher timeframe?",
              options: [
                "Trading against the main trend",
                "An automatic increase in profit",
                "Nothing, it doesn't matter",
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
                "Trying to immediately recover a loss through emotional trades",
                "An official hedge fund strategy",
                "A fee refund from the exchange",
              ],
              correctAnswer: "Trying to immediately recover a loss through emotional trades",
            },
            {
              prompt: "Why should a trader keep a trading journal?",
              options: [
                "To analyze mistakes and improve the strategy",
                "It's an exchange requirement",
                "To reduce taxes",
              ],
              correctAnswer: "To analyze mistakes and improve the strategy",
            },
            {
              prompt: "Which emotion most often causes traders to hold a losing position too long?",
              options: ["Hope for a reversal and fear of locking in the loss", "Boredom", "Confidence in the exchange being right"],
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
                "Entry point, stop-loss, and profit target",
                "Only the entry point",
                "Nothing needs to be determined in advance",
              ],
              correctAnswer: "Entry point, stop-loss, and profit target",
            },
            {
              prompt: "Why practice on a virtual balance first?",
              options: [
                "To work out a strategy without risking real money",
                "A virtual balance yields more profit",
                "It's a mandatory legal requirement",
              ],
              correctAnswer: "To work out a strategy without risking real money",
            },
            {
              prompt: "What's important to do right after closing a trade?",
              options: [
                "Analyze it and record the result in a journal",
                "Immediately open the opposite trade",
                "Delete the trade history",
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
                "Risky assets (including crypto) most often fall",
                "The crypto market doesn't react to rates at all",
                "Bitcoin always rises when rates are hiked",
              ],
              correctAnswer: "Risky assets (including crypto) most often fall",
            },
            {
              prompt: "What is the FOMC?",
              options: [
                "The Fed committee that makes interest rate decisions",
                "The largest crypto exchange in the US",
                "A market volatility index",
              ],
              correctAnswer: "The Fed committee that makes interest rate decisions",
            },
            {
              prompt: "What is the easing of monetary policy called in market slang?",
              options: ["\"Dovish\" policy", "\"Hawkish\" policy", "\"Neutral\" issuance"],
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
                "Changes in the prices of a consumer basket of goods and services",
                "The bitcoin-to-dollar exchange rate",
                "Trading volume on the exchange",
              ],
              correctAnswer: "Changes in the prices of a consumer basket of goods and services",
            },
            {
              prompt: "How does the market usually react when CPI comes in above forecast?",
              options: [
                "Risky assets more often fall",
                "The market never reacts to CPI",
                "The crypto market automatically halts trading",
              ],
              correctAnswer: "Risky assets more often fall",
            },
            {
              prompt: "Which inflation gauge is considered the Fed's own preferred indicator?",
              options: ["PCE", "DXY", "RSI"],
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
                "Bitcoin's volatility",
                "The total market cap of the crypto market",
              ],
              correctAnswer: "The strength of the US dollar relative to a basket of other currencies",
            },
            {
              prompt: "How are DXY and bitcoin movements usually related?",
              options: [
                "They more often move in opposite directions",
                "They always move in perfect sync",
                "They're not related at all",
              ],
              correctAnswer: "They more often move in opposite directions",
            },
            {
              prompt: "What might a sharp rise in the DXY index warn of?",
              options: [
                "A likely correction in the crypto market",
                "Guaranteed bitcoin growth",
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
                "High-tech stocks (Nasdaq)",
                "Government bonds",
                "It doesn't correlate with anything",
              ],
              correctAnswer: "High-tech stocks (Nasdaq)",
            },
            {
              prompt: "What does a high correlation between BTC and Nasdaq mean?",
              options: [
                "They more often move in the same direction",
                "They must move in opposite directions",
                "BTC completely replaces the Nasdaq index",
              ],
              correctAnswer: "They more often move in the same direction",
            },
            {
              prompt: "What can temporarily weaken BTC's correlation with the stock market?",
              options: [
                "Crypto-specific events (an exchange hack, regulatory news)",
                "A day off at the exchange",
                "A time zone change",
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
                "To track the dates of important news that affects the market",
                "To plan personal vacations",
                "To completely replace technical analysis",
              ],
              correctAnswer: "To track the dates of important news that affects the market",
            },
            {
              prompt: "What is NFP?",
              options: [
                "The US non-farm payrolls employment report",
                "A new cryptographic protocol",
                "The fear and greed index",
              ],
              correctAnswer: "The US non-farm payrolls employment report",
            },
            {
              prompt: "What's sensible to do before a high-impact news release?",
              options: [
                "Reduce risk or avoid new trades",
                "Maximize position size",
                "Turn off stop-losses",
              ],
              correctAnswer: "Reduce risk or avoid new trades",
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
                "A stop-loss level",
                "A volume indicator",
              ],
              correctAnswer: "A gap between the wicks of the 1st and 3rd candles caused by a sharp impulse",
            },
            {
              prompt: "What does the market most often do with an imbalance zone later on?",
              options: [
                "It returns and partially or fully \"fills\" it",
                "It never touches it again",
                "It automatically removes it from the chart",
              ],
              correctAnswer: "It returns and partially or fully \"fills\" it",
            },
            {
              prompt: "How many candles make up the classic FVG pattern?",
              options: ["Three", "One", "Seven"],
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
                "Around equal highs/lows and obvious support/resistance levels",
                "Strictly in the middle of the range for no reason",
                "Only on news candles",
              ],
              correctAnswer: "Around equal highs/lows and obvious support/resistance levels",
            },
            {
              prompt: "What is buy-side liquidity?",
              options: [
                "Short sellers' stops positioned above local highs",
                "Long holders' stops below local lows",
                "The exchange's fee for buying",
              ],
              correctAnswer: "Short sellers' stops positioned above local highs",
            },
            {
              prompt: "Why do large players need liquidity in the market?",
              options: [
                "To build or close a large position without significant slippage",
                "To completely halt trading",
                "It has nothing to do with large players",
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
                "The price always continues in the direction of the piercing",
                "Nothing, volume falls to zero",
              ],
              correctAnswer: "A sharp reversal in the direction opposite the piercing",
            },
            {
              prompt: "Which zone most often becomes the target of a liquidity sweep?",
              options: [
                "A zone with pending orders — for example, equal highs/lows",
                "The middle of a random range with no levels",
                "A zone with zero liquidity",
              ],
              correctAnswer: "A zone with pending orders — for example, equal highs/lows",
            },
            {
              prompt: "What mistake is typical for beginners when they see a sweep?",
              options: [
                "Entering in the direction of the breakout without considering a possible reversal",
                "Closing a profitable position too early",
                "Setting a stop-loss before entering a trade",
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
                "A possible reversal of the current trend",
                "Continuation of the trend with acceleration",
                "An absence of liquidity in the market",
              ],
              correctAnswer: "A possible reversal of the current trend",
            },
            {
              prompt: "What does a Break of Structure (BOS) confirm?",
              options: [
                "Continuation of the current trend",
                "An automatic halt in trading",
                "Cancellation of all previous levels",
              ],
              correctAnswer: "Continuation of the current trend",
            },
            {
              prompt: "What does the structure of an uptrend consist of?",
              options: [
                "Higher Highs and Higher Lows",
                "Lower Highs and Lower Lows",
                "Candles of equal height",
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
                "The last opposite-direction candle before a strong impulsive move",
                "A trading volume indicator",
                "A type of exchange order with delayed execution",
              ],
              correctAnswer: "The last opposite-direction candle before a strong impulsive move",
            },
            {
              prompt: "How do traders usually use order blocks?",
              options: [
                "As potential entry zones when price returns",
                "As an inflation indicator",
                "To calculate the exchange fee",
              ],
              correctAnswer: "As potential entry zones when price returns",
            },
            {
              prompt: "How does a bullish order block differ from a bearish one?",
              options: [
                "It forms before an upward impulse, not a downward one",
                "It's always larger in size",
                "It only appears on the daily timeframe",
              ],
              correctAnswer: "It forms before an upward impulse, not a downward one",
            },
          ],
        },
      ],
    },
  ],
};
