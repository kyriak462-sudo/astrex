import type { Locale } from "@/i18n/locales";
import { t } from "@/components/learn/diagram-i18n";

const UP = "var(--color-up)";
const DOWN = "var(--color-down)";
const GRID = "var(--color-border)";
const LINE = "var(--color-fg-subtle)";
const LABEL = "var(--color-fg-muted)";
const DOT = "var(--color-fg)";

type Candle = {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width?: number;
};

type DiagramProps = { locale: Locale };

function Candlestick({ x, open, close, high, low, width = 20 }: Candle) {
  const up = close < open;
  const color = up ? UP : DOWN;
  const bodyTop = Math.min(open, close);
  const bodyHeight = Math.max(Math.abs(open - close), 2);
  return (
    <g>
      <line x1={x} x2={x} y1={high} y2={low} stroke={color} strokeWidth={1.5} />
      <rect
        x={x - width / 2}
        y={bodyTop}
        width={width}
        height={bodyHeight}
        fill={color}
        opacity={0.9}
        rx={1.5}
      />
    </g>
  );
}

function DiagramFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <svg viewBox="0 0 400 220" className="w-full">
        <line x1="0" y1="55" x2="400" y2="55" stroke={GRID} strokeWidth={1} />
        <line x1="0" y1="110" x2="400" y2="110" stroke={GRID} strokeWidth={1} />
        <line x1="0" y1="165" x2="400" y2="165" stroke={GRID} strokeWidth={1} />
        {children}
      </svg>
    </div>
  );
}

export function FvgDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={90} open={150} close={110} high={160} low={105} />
      <Candlestick x={140} open={110} close={60} high={115} low={55} />
      <Candlestick x={190} open={62} close={40} high={80} low={35} />
      <rect x={70} y={80} width={140} height={25} fill={UP} opacity={0.14} />
      <line x1={70} y1={80} x2={210} y2={80} stroke={UP} strokeWidth={1} strokeDasharray="3 3" />
      <line x1={70} y1={105} x2={210} y2={105} stroke={UP} strokeWidth={1} strokeDasharray="3 3" />
      <text x={140} y={72} textAnchor="middle" fontSize={11} fill={LABEL}>
        FVG
      </text>
      <Candlestick x={260} open={45} close={70} high={80} low={40} />
      <Candlestick x={310} open={72} close={100} high={105} low={68} />
    </DiagramFrame>
  );
}

export function ImbalanceDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={80} open={150} close={135} high={155} low={130} />
      <Candlestick x={125} open={135} close={70} high={138} low={65} width={16} />
      <rect x={108} y={65} width={34} height={73} fill={DOWN} opacity={0.16} />
      <text x={125} y={57} textAnchor="middle" fontSize={11} fill={LABEL}>
        Imbalance
      </text>
      <Candlestick x={170} open={68} close={50} high={72} low={45} />
      <Candlestick x={215} open={50} close={60} high={65} low={45} />
      <Candlestick x={260} open={58} close={40} high={62} low={35} />
      <Candlestick x={305} open={42} close={30} high={45} low={25} />
    </DiagramFrame>
  );
}

export function LiquiditySweepDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={40} y1={70} x2={330} y2={70} stroke={LINE} strokeWidth={1} strokeDasharray="4 4" />
      <text x={40} y={62} fontSize={10} fill={LABEL}>
        {`equal highs (${t(locale, "liquidityWord")})`}
      </text>
      <Candlestick x={70} open={130} close={72} high={135} low={68} />
      <Candlestick x={120} open={120} close={71} high={125} low={69} />
      <Candlestick x={200} open={100} close={90} high={102} low={88} />
      <Candlestick x={250} open={92} close={55} high={95} low={50} />
      <Candlestick x={290} open={57} close={130} high={165} low={55} />
      <text x={290} y={183} textAnchor="middle" fontSize={11} fill={DOWN}>
        sweep
      </text>
      <path
        d="M 290 145 L 250 100"
        stroke={DOWN}
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrow-down)"
      />
      <defs>
        <marker id="arrow-down" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={DOWN} />
        </marker>
      </defs>
      <Candlestick x={330} open={100} close={140} high={145} low={98} />
    </DiagramFrame>
  );
}

export function TrendStructureDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <polyline
        points="30,150 80,90 130,110 180,50 230,75 280,30"
        fill="none"
        stroke={UP}
        strokeWidth={1.75}
      />
      <circle cx={80} cy={90} r={3} fill={DOT} />
      <text x={80} y={82} fontSize={9} fill={LABEL} textAnchor="middle">
        HH
      </text>
      <circle cx={130} cy={110} r={3} fill={DOT} />
      <text x={130} y={124} fontSize={9} fill={LABEL} textAnchor="middle">
        HL
      </text>
      <circle cx={180} cy={50} r={3} fill={DOT} />
      <text x={180} y={42} fontSize={9} fill={LABEL} textAnchor="middle">
        HH
      </text>
      <line x1={180} y1={50} x2={330} y2={50} stroke={LINE} strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={230} cy={75} r={3} fill={DOT} />
      <text x={230} y={89} fontSize={9} fill={LABEL} textAnchor="middle">
        HL
      </text>
      <text x={300} y={44} fontSize={11} fill={UP}>
        BOS
      </text>
    </DiagramFrame>
  );
}

export function OrderBlockDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={40} open={95} close={118} high={92} low={121} width={16} />
      <rect x={60} y={118} width={280} height={30} fill={UP} opacity={0.14} />
      <line x1={60} y1={118} x2={340} y2={118} stroke={UP} strokeWidth={1} strokeDasharray="3 3" />
      <line x1={60} y1={148} x2={340} y2={148} stroke={UP} strokeWidth={1} strokeDasharray="3 3" />
      <text x={200} y={112} textAnchor="middle" fontSize={11} fill={LABEL}>
        Order Block
      </text>
      <Candlestick x={80} open={118} close={148} high={115} low={151} width={18} />
      <Candlestick x={120} open={150} close={70} high={153} low={65} width={18} />
      <Candlestick x={160} open={68} close={42} high={72} low={38} width={16} />
      <Candlestick x={230} open={58} close={95} high={55} low={98} width={16} />
      <Candlestick x={270} open={97} close={135} high={94} low={145} width={16} />
      <path
        d="M 310 140 L 310 92"
        stroke={UP}
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrow-up-ob)"
      />
      <defs>
        <marker id="arrow-up-ob" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,8 L4,0 L8,8 Z" fill={UP} />
        </marker>
      </defs>
      <text x={340} y={90} fontSize={11} fill={UP}>
        {t(locale, "reaction")}
      </text>
      <Candlestick x={310} open={138} close={85} high={142} low={80} width={16} />
    </DiagramFrame>
  );
}

export function RsiDiagram({ locale }: DiagramProps) {
  const overboughtY = 183; // RSI=70
  const oversoldY = 227; // RSI=30
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <svg viewBox="0 0 400 280" className="w-full">
        <text x={10} y={20} fontSize={10} fill={LABEL}>
          {t(locale, "price")}
        </text>
        <polyline
          points="30,110 90,70 150,40 190,90 250,55 280,20 330,80"
          fill="none"
          stroke={UP}
          strokeWidth={1.75}
        />
        <circle cx={150} cy={40} r={3} fill={DOT} />
        <circle cx={280} cy={20} r={3} fill={DOT} />
        <line x1={150} y1={34} x2={280} y2={14} stroke={UP} strokeWidth={1} strokeDasharray="3 3" />
        <text x={280} y={12} textAnchor="middle" fontSize={10} fill={UP}>
          {t(locale, "newPriceHigh")}
        </text>

        <line x1={0} y1={140} x2={400} y2={140} stroke={GRID} strokeWidth={1} />

        <text x={10} y={158} fontSize={10} fill={LABEL}>
          RSI
        </text>
        <rect x={0} y={150} width={400} height={overboughtY - 150} fill={DOWN} opacity={0.06} />
        <rect x={0} y={oversoldY} width={400} height={260 - oversoldY} fill={UP} opacity={0.06} />
        <line
          x1={0}
          y1={overboughtY}
          x2={400}
          y2={overboughtY}
          stroke={LINE}
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <text x={385} y={overboughtY - 4} fontSize={9} fill={LABEL}>
          70
        </text>
        <line
          x1={0}
          y1={oversoldY}
          x2={400}
          y2={oversoldY}
          stroke={LINE}
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <text x={385} y={oversoldY - 4} fontSize={9} fill={LABEL}>
          30
        </text>
        <polyline
          points="30,240 90,210 150,160 190,220 250,205 280,195 330,230"
          fill="none"
          stroke={DOWN}
          strokeWidth={1.75}
        />
        <circle cx={150} cy={160} r={3} fill={DOT} />
        <circle cx={280} cy={195} r={3} fill={DOT} />
        <line x1={150} y1={165} x2={280} y2={200} stroke={DOWN} strokeWidth={1} strokeDasharray="3 3" />
        <text x={280} y={215} textAnchor="middle" fontSize={10} fill={DOWN}>
          {t(locale, "rsiDivergence")}
        </text>
      </svg>
    </div>
  );
}

export function IntroChartDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <text x={10} y={20} fontSize={10} fill={LABEL}>{t(locale, "price")}</text>
      <text x={355} y={210} fontSize={10} fill={LABEL}>{t(locale, "time")}</text>
      <Candlestick x={40} open={150} close={130} high={155} low={125} width={14} />
      <Candlestick x={80} open={128} close={100} high={132} low={95} width={14} />
      <Candlestick x={120} open={98} close={110} high={102} low={92} width={14} />
      <Candlestick x={160} open={112} close={70} high={115} low={65} width={14} />
      <Candlestick x={200} open={68} close={85} high={90} low={64} width={14} />
      <Candlestick x={240} open={87} close={50} high={92} low={45} width={14} />
      <Candlestick x={280} open={48} close={60} high={65} low={44} width={14} />
      <Candlestick x={320} open={62} close={30} high={66} low={25} width={14} />
      <Candlestick x={360} open={32} close={45} high={48} low={28} width={14} />
    </DiagramFrame>
  );
}

export function MarketTypesDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <text x={90} y={35} textAnchor="middle" fontSize={11} fill={LABEL}>{`${t(locale, "spot")} (1x)`}</text>
      <rect x={70} y={150} width={40} height={20} fill={UP} opacity={0.85} rx={2} />
      <text x={90} y={185} textAnchor="middle" fontSize={10} fill={UP}>+2%</text>

      <text x={300} y={35} textAnchor="middle" fontSize={11} fill={LABEL}>{`${t(locale, "futures")} (10x)`}</text>
      <rect x={280} y={60} width={40} height={110} fill={UP} opacity={0.85} rx={2} />
      <text x={300} y={185} textAnchor="middle" fontSize={10} fill={UP}>+20%</text>

      <line x1={0} y1={170} x2={400} y2={170} stroke={GRID} strokeWidth={1} />
      <text x={200} y={205} textAnchor="middle" fontSize={9} fill={LABEL}>
        {t(locale, "samePctMove")}
      </text>
    </DiagramFrame>
  );
}

export function ChartAnatomyDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={40} y1={20} x2={40} y2={190} stroke={LINE} strokeWidth={1} />
      <line x1={40} y1={190} x2={390} y2={190} stroke={LINE} strokeWidth={1} />
      <text x={15} y={30} fontSize={9} fill={LABEL}>{t(locale, "price")}</text>
      <text x={370} y={205} fontSize={9} fill={LABEL}>{t(locale, "time")}</text>
      <Candlestick x={100} open={140} close={90} high={150} low={80} width={20} />
      <line x1={100} y1={80} x2={200} y2={80} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <text x={205} y={83} fontSize={9} fill={LABEL}>{t(locale, "periodHigh")}</text>
      <line x1={100} y1={150} x2={200} y2={150} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <text x={205} y={153} fontSize={9} fill={LABEL}>{t(locale, "periodLow")}</text>
      <Candlestick x={180} open={92} close={130} high={85} low={135} width={20} />
      <Candlestick x={260} open={128} close={100} high={122} low={140} width={20} />
    </DiagramFrame>
  );
}

export function CandlestickAnatomyDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={100} open={150} close={90} high={165} low={80} width={30} />
      <line x1={135} y1={90} x2={175} y2={90} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <text x={180} y={93} fontSize={10} fill={LABEL}>close</text>
      <line x1={135} y1={150} x2={175} y2={150} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <text x={180} y={153} fontSize={10} fill={LABEL}>open</text>
      <line x1={100} y1={165} x2={60} y2={175} stroke={LINE} strokeWidth={1} />
      <text x={20} y={190} fontSize={10} fill={LABEL}>upper wick</text>
      <Candlestick x={280} open={90} close={150} high={165} low={80} width={30} />
      <text x={280} y={30} textAnchor="middle" fontSize={10} fill={UP}>{t(locale, "bullish")}</text>
      <text x={100} y={30} textAnchor="middle" fontSize={10} fill={DOWN}>{t(locale, "bearish")}</text>
    </DiagramFrame>
  );
}

export function SupportResistanceDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={0} y1={50} x2={400} y2={50} stroke={DOWN} strokeWidth={1} strokeDasharray="4 4" />
      <text x={10} y={44} fontSize={10} fill={DOWN}>{t(locale, "resistance")}</text>
      <line x1={0} y1={165} x2={400} y2={165} stroke={UP} strokeWidth={1} strokeDasharray="4 4" />
      <text x={10} y={182} fontSize={10} fill={UP}>{t(locale, "support")}</text>
      <Candlestick x={40} open={110} close={90} high={115} low={165} width={14} />
      <Candlestick x={90} open={92} close={130} high={165} low={90} width={14} />
      <Candlestick x={140} open={128} close={70} high={130} low={50} width={14} />
      <Candlestick x={190} open={68} close={100} high={70} low={165} width={14} />
      <Candlestick x={240} open={98} close={140} high={165} low={95} width={14} />
      <Candlestick x={290} open={138} close={80} high={140} low={50} width={14} />
      <Candlestick x={340} open={78} close={110} high={165} low={75} width={14} />
    </DiagramFrame>
  );
}

export function BasicTrendDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <polyline points="30,170 90,100 140,130 190,60 240,90 290,40" fill="none" stroke={UP} strokeWidth={1.75} />
      <circle cx={90} cy={100} r={3} fill={DOT} />
      <text x={90} y={92} fontSize={9} fill={LABEL} textAnchor="middle">HH</text>
      <circle cx={140} cy={130} r={3} fill={DOT} />
      <text x={140} y={144} fontSize={9} fill={LABEL} textAnchor="middle">HL</text>
      <circle cx={190} cy={60} r={3} fill={DOT} />
      <text x={190} y={52} fontSize={9} fill={LABEL} textAnchor="middle">HH</text>
      <circle cx={240} cy={90} r={3} fill={DOT} />
      <text x={240} y={104} fontSize={9} fill={LABEL} textAnchor="middle">HL</text>
      <circle cx={290} cy={40} r={3} fill={DOT} />
      <text x={290} y={32} fontSize={9} fill={LABEL} textAnchor="middle">HH</text>
    </DiagramFrame>
  );
}

export function VolumeLiquidityDiagram({ locale }: DiagramProps) {
  const vols = [30, 55, 20, 70, 45, 90, 35];
  const ups = [true, true, false, false, true, false, true];
  return (
    <DiagramFrame>
      {vols.map((v, i) => {
        const x = 50 + i * 50;
        return <Candlestick key={i} x={x} open={140} close={ups[i] ? 100 : 170} high={95} low={175} width={16} />;
      })}
      {vols.map((v, i) => {
        const x = 50 + i * 50;
        return (
          <rect
            key={i}
            x={x - 8}
            y={215 - v}
            width={16}
            height={v}
            fill={ups[i] ? UP : DOWN}
            opacity={0.7}
          />
        );
      })}
      <line x1={0} y1={182} x2={400} y2={182} stroke={GRID} strokeWidth={1} />
      <text x={10} y={198} fontSize={9} fill={LABEL}>{t(locale, "volume")}</text>
    </DiagramFrame>
  );
}

export function RiskBasicDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <rect x={40} y={100} width={320} height={35} fill={UP} opacity={0.12} />
      <rect x={40} y={135} width={320} height={20} fill={DOWN} opacity={0.14} />
      <line x1={40} y1={100} x2={360} y2={100} stroke={UP} strokeWidth={1} strokeDasharray="3 3" />
      <text x={365} y={103} fontSize={9} fill={UP}>Take-Profit</text>
      <line x1={40} y1={135} x2={360} y2={135} stroke={LINE} strokeWidth={1.5} />
      <text x={365} y={138} fontSize={9} fill={LABEL}>{t(locale, "entry")}</text>
      <line x1={40} y1={155} x2={360} y2={155} stroke={DOWN} strokeWidth={1} strokeDasharray="3 3" />
      <text x={365} y={158} fontSize={9} fill={DOWN}>Stop-Loss</text>
      <Candlestick x={200} open={140} close={110} high={150} low={100} width={16} />
    </DiagramFrame>
  );
}

export function MovingAveragesDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={40} open={140} close={125} high={145} low={120} width={12} />
      <Candlestick x={75} open={128} close={110} high={132} low={105} width={12} />
      <Candlestick x={110} open={112} close={95} high={116} low={90} width={12} />
      <Candlestick x={145} open={97} close={80} high={100} low={75} width={12} />
      <Candlestick x={180} open={82} close={70} high={85} low={65} width={12} />
      <Candlestick x={215} open={72} close={60} high={75} low={55} width={12} />
      <Candlestick x={250} open={62} close={75} high={65} low={57} width={12} />
      <Candlestick x={285} open={77} close={95} high={80} low={73} width={12} />
      <Candlestick x={320} open={97} close={120} high={100} low={93} width={12} />
      <Candlestick x={355} open={122} close={140} high={125} low={118} width={12} />
      <polyline points="40,130 75,118 110,102 145,86 180,73 215,64 250,66 285,80 320,102 355,124"
        fill="none" stroke={UP} strokeWidth={1.5} />
      <polyline points="40,105 75,100 110,95 145,88 180,80 215,72 250,68 285,68 320,74 355,88"
        fill="none" stroke={DOWN} strokeWidth={1.5} />
      <circle cx={250} cy={67} r={3} fill={DOT} />
      <text x={250} y={45} textAnchor="middle" fontSize={10} fill={UP}>golden cross</text>
    </DiagramFrame>
  );
}

export function FibonacciDiagram(_: DiagramProps) {
  const levels = [
    { pct: "0", y: 40 },
    { pct: "0.236", y: 65 },
    { pct: "0.382", y: 85 },
    { pct: "0.5", y: 100 },
    { pct: "0.618", y: 115 },
    { pct: "1", y: 160 },
  ];
  return (
    <DiagramFrame>
      {levels.map((l) => (
        <g key={l.pct}>
          <line x1={0} y1={l.y} x2={400} y2={l.y} stroke={LINE} strokeWidth={1} strokeDasharray="3 3" />
          <text x={355} y={l.y - 3} fontSize={9} fill={LABEL}>{l.pct}</text>
        </g>
      ))}
      <Candlestick x={60} open={175} close={160} high={178} low={162} width={14} />
      <Candlestick x={100} open={158} close={120} high={160} low={115} width={14} />
      <Candlestick x={140} open={118} close={70} high={120} low={65} width={14} />
      <Candlestick x={180} open={68} close={40} high={70} low={38} width={14} />
      <Candlestick x={220} open={45} close={75} high={42} low={90} width={14} />
      <Candlestick x={260} open={78} close={100} high={75} low={118} width={14} />
      <Candlestick x={300} open={98} close={65} high={95} low={62} width={14} />
      <Candlestick x={340} open={62} close={45} high={60} low={42} width={14} />
    </DiagramFrame>
  );
}

export function ReversalPatternsDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <polyline points="30,170 100,50 160,110 230,50 300,120 360,170" fill="none" stroke={LINE} strokeWidth={1.75} />
      <circle cx={100} cy={50} r={3} fill={DOT} />
      <circle cx={230} cy={50} r={3} fill={DOT} />
      <line x1={70} y1={50} x2={260} y2={50} stroke={LABEL} strokeWidth={1} strokeDasharray="2 2" />
      <text x={165} y={40} textAnchor="middle" fontSize={10} fill={LABEL}>{t(locale, "equalHighs")}</text>
      <line x1={0} y1={110} x2={400} y2={110} stroke={DOWN} strokeWidth={1} strokeDasharray="4 4" />
      <text x={10} y={104} fontSize={10} fill={DOWN}>neckline</text>
      <path d="M 300 130 L 340 165" stroke={DOWN} strokeWidth={1.5} fill="none" markerEnd="url(#arrow-rev)" />
      <defs>
        <marker id="arrow-rev" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={DOWN} />
        </marker>
      </defs>
    </DiagramFrame>
  );
}

export function ContinuationPatternsDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <polyline points="20,180 90,40" fill="none" stroke={UP} strokeWidth={1.75} />
      <line x1={90} y1={40} x2={230} y2={90} stroke={LINE} strokeWidth={1} strokeDasharray="3 3" />
      <line x1={90} y1={65} x2={230} y2={115} stroke={LINE} strokeWidth={1} strokeDasharray="3 3" />
      <polyline points="90,50 120,60 150,75 180,68 210,82 230,100" fill="none" stroke={DOWN} strokeWidth={1.5} />
      <text x={155} y={35} textAnchor="middle" fontSize={10} fill={LABEL}>{t(locale, "flagConsolidation")}</text>
      <polyline points="230,100 300,45 370,15" fill="none" stroke={UP} strokeWidth={1.75} />
      <text x={330} y={20} fontSize={10} fill={UP}>{t(locale, "continuation")}</text>
    </DiagramFrame>
  );
}

export function MultiTimeframeDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <text x={100} y={20} textAnchor="middle" fontSize={11} fill={LABEL}>{`4H — ${t(locale, "higherTfTrend")}`}</text>
      <polyline points="20,80 80,60 140,65 200,35" fill="none" stroke={UP} strokeWidth={2} />
      <line x1={0} y1={90} x2={200} y2={90} stroke={GRID} strokeWidth={1} />
      <text x={300} y={20} textAnchor="middle" fontSize={11} fill={LABEL}>{`15m — ${t(locale, "lowerTfEntry")}`}</text>
      <Candlestick x={220} open={130} close={110} high={133} low={106} width={10} />
      <Candlestick x={245} open={112} close={95} high={115} low={90} width={10} />
      <Candlestick x={270} open={97} close={100} high={100} low={85} width={10} />
      <Candlestick x={295} open={98} close={70} high={102} low={65} width={10} />
      <Candlestick x={320} open={72} close={55} high={75} low={50} width={10} />
      <Candlestick x={345} open={57} close={80} high={54} low={95} width={10} />
      <Candlestick x={370} open={82} close={60} high={85} low={57} width={10} />
      <line x1={0} y1={100} x2={400} y2={100} stroke={GRID} strokeWidth={1} />
    </DiagramFrame>
  );
}

export function LiquidityTypesDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={30} y1={45} x2={370} y2={45} stroke={UP} strokeWidth={1} strokeDasharray="4 4" />
      <text x={10} y={38} fontSize={9} fill={UP}>buy-side liquidity</text>
      <Candlestick x={60} open={90} close={50} high={95} low={45} width={14} />
      <Candlestick x={120} open={92} close={48} high={97} low={45} width={14} />
      <Candlestick x={190} open={90} close={130} high={88} low={135} width={14} />
      <Candlestick x={250} open={132} close={170} high={128} low={175} width={14} />
      <Candlestick x={310} open={172} close={168} high={169} low={175} width={14} />
      <Candlestick x={340} open={170} close={166} high={167} low={173} width={14} />
      <line x1={30} y1={175} x2={370} y2={175} stroke={DOWN} strokeWidth={1} strokeDasharray="4 4" />
      <text x={10} y={188} fontSize={9} fill={DOWN}>sell-side liquidity</text>
    </DiagramFrame>
  );
}

export function RiskRewardDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <rect x={60} y={110} width={280} height={20} fill={DOWN} opacity={0.16} />
      <rect x={60} y={30} width={280} height={80} fill={UP} opacity={0.12} />
      <line x1={60} y1={110} x2={340} y2={110} stroke={LINE} strokeWidth={1.5} />
      <text x={345} y={113} fontSize={9} fill={LABEL}>{t(locale, "entry")}</text>
      <line x1={60} y1={130} x2={340} y2={130} stroke={DOWN} strokeWidth={1} strokeDasharray="3 3" />
      <text x={345} y={133} fontSize={9} fill={DOWN}>-1R</text>
      <line x1={60} y1={30} x2={340} y2={30} stroke={UP} strokeWidth={1} strokeDasharray="3 3" />
      <text x={345} y={33} fontSize={9} fill={UP}>+3R</text>
      <line x1={30} y1={130} x2={30} y2={110} stroke={DOWN} strokeWidth={2} />
      <line x1={30} y1={110} x2={30} y2={30} stroke={UP} strokeWidth={2} />
      <text x={10} y={125} fontSize={9} fill={DOWN}>{t(locale, "risk")}</text>
      <text x={10} y={65} fontSize={9} fill={UP}>{t(locale, "profit")}</text>
    </DiagramFrame>
  );
}

export function PositionSizeDiagram({ locale }: DiagramProps) {
  const bars = [
    { label: "SL 1%", h: 150, x: 70 },
    { label: "SL 3%", h: 90, x: 200 },
    { label: "SL 6%", h: 45, x: 330 },
  ];
  return (
    <DiagramFrame>
      {bars.map((b) => (
        <g key={b.label}>
          <rect x={b.x - 30} y={190 - b.h} width={60} height={b.h} fill={UP} opacity={0.7} rx={2} />
          <text x={b.x} y={205} textAnchor="middle" fontSize={10} fill={LABEL}>{b.label}</text>
        </g>
      ))}
      <line x1={0} y1={190} x2={400} y2={190} stroke={GRID} strokeWidth={1} />
      <text x={200} y={20} textAnchor="middle" fontSize={10} fill={LABEL}>
        {t(locale, "positionSizeAtRisk")}
      </text>
    </DiagramFrame>
  );
}

export function StopLossDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={40} y1={90} x2={360} y2={90} stroke={LINE} strokeWidth={1.5} />
      <text x={365} y={93} fontSize={9} fill={LABEL}>{t(locale, "entry")}</text>
      <line x1={40} y1={155} x2={360} y2={155} stroke={DOWN} strokeWidth={1.5} strokeDasharray="3 3" />
      <text x={365} y={158} fontSize={9} fill={DOWN}>stop-loss</text>
      <Candlestick x={80} open={90} close={100} high={85} low={105} width={14} />
      <Candlestick x={120} open={102} close={115} high={98} low={118} width={14} />
      <Candlestick x={160} open={113} close={130} high={110} low={135} width={14} />
      <Candlestick x={200} open={128} close={145} high={125} low={148} width={14} />
      <Candlestick x={240} open={143} close={155} high={140} low={157} width={14} />
      <Candlestick x={280} open={153} close={158} high={150} low={162} width={14} />
      <Candlestick x={320} open={156} close={162} high={153} low={165} width={14} />
      <circle cx={320} cy={155} r={4} fill={DOWN} />
      <text x={320} y={182} textAnchor="middle" fontSize={9} fill={DOWN}>{t(locale, "stopTriggered")}</text>
    </DiagramFrame>
  );
}

export function TakeProfitDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={40} y1={155} x2={360} y2={155} stroke={LINE} strokeWidth={1.5} />
      <text x={365} y={158} fontSize={9} fill={LABEL}>{t(locale, "entry")}</text>
      <line x1={40} y1={60} x2={360} y2={60} stroke={UP} strokeWidth={1.5} strokeDasharray="3 3" />
      <text x={365} y={63} fontSize={9} fill={UP}>take-profit</text>
      <Candlestick x={80} open={155} close={140} high={158} low={135} width={14} />
      <Candlestick x={120} open={138} close={120} high={140} low={115} width={14} />
      <Candlestick x={160} open={118} close={100} high={120} low={95} width={14} />
      <Candlestick x={200} open={98} close={85} high={100} low={80} width={14} />
      <Candlestick x={240} open={83} close={70} high={85} low={67} width={14} />
      <Candlestick x={280} open={72} close={65} high={75} low={62} width={14} />
      <Candlestick x={320} open={67} close={58} high={70} low={55} width={14} />
      <circle cx={320} cy={60} r={4} fill={UP} />
      <text x={320} y={40} textAnchor="middle" fontSize={9} fill={UP}>{t(locale, "targetReached")}</text>
    </DiagramFrame>
  );
}

export function MacdDiagram({ locale }: DiagramProps) {
  const hist = [10, 18, 24, 16, 6, -8, -20, -14, -4, 8];
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <svg viewBox="0 0 400 220" className="w-full">
        <text x={10} y={20} fontSize={10} fill={LABEL}>MACD</text>
        <line x1={0} y1={110} x2={400} y2={110} stroke={GRID} strokeWidth={1} />
        {hist.map((h, i) => (
          <rect
            key={i}
            x={30 + i * 35}
            y={h >= 0 ? 110 - h : 110}
            width={16}
            height={Math.abs(h)}
            fill={h >= 0 ? UP : DOWN}
            opacity={0.6}
          />
        ))}
        <polyline
          points="38,150 73,130 108,105 143,90 178,95 213,120 248,150 283,165 318,158 353,140"
          fill="none"
          stroke={UP}
          strokeWidth={1.5}
        />
        <polyline
          points="38,165 73,155 108,140 143,120 178,100 213,100 248,120 283,145 318,160 353,155"
          fill="none"
          stroke={DOWN}
          strokeWidth={1.5}
        />
        <circle cx={178} cy={98} r={3} fill={DOT} />
        <text x={178} y={80} textAnchor="middle" fontSize={9} fill={UP}>{t(locale, "crossoverUp")}</text>
      </svg>
    </div>
  );
}

export function EmaDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={40} open={140} close={130} high={144} low={126} width={12} />
      <Candlestick x={75} open={132} close={110} high={135} low={106} width={12} />
      <Candlestick x={110} open={112} close={85} high={115} low={80} width={12} />
      <Candlestick x={145} open={87} close={65} high={90} low={60} width={12} />
      <Candlestick x={180} open={67} close={75} high={64} low={90} width={12} />
      <Candlestick x={215} open={77} close={100} high={74} low={103} width={12} />
      <Candlestick x={250} open={102} close={125} high={99} low={128} width={12} />
      <Candlestick x={285} open={127} close={140} high={124} low={143} width={12} />
      <polyline
        points="40,133 75,120 110,100 145,78 180,72 215,88 250,108 285,128"
        fill="none"
        stroke={UP}
        strokeWidth={2}
      />
      <text x={320} y={128} fontSize={11} fill={UP}>EMA</text>
    </DiagramFrame>
  );
}

export function SmaDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={40} open={140} close={130} high={144} low={126} width={12} />
      <Candlestick x={75} open={132} close={110} high={135} low={106} width={12} />
      <Candlestick x={110} open={112} close={85} high={115} low={80} width={12} />
      <Candlestick x={145} open={87} close={65} high={90} low={60} width={12} />
      <Candlestick x={180} open={67} close={75} high={64} low={90} width={12} />
      <Candlestick x={215} open={77} close={100} high={74} low={103} width={12} />
      <Candlestick x={250} open={102} close={125} high={99} low={128} width={12} />
      <Candlestick x={285} open={127} close={140} high={124} low={143} width={12} />
      <polyline
        points="40,110 75,112 110,108 145,98 180,90 215,88 250,92 285,100"
        fill="none"
        stroke={DOWN}
        strokeWidth={2}
      />
      <text x={320} y={98} fontSize={11} fill={DOWN}>SMA</text>
    </DiagramFrame>
  );
}

export function VwapDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={0} y1={110} x2={400} y2={110} stroke={LABEL} strokeWidth={1.5} strokeDasharray="4 4" />
      <text x={10} y={104} fontSize={10} fill={LABEL}>VWAP</text>
      <Candlestick x={40} open={100} close={90} high={103} low={85} width={12} />
      <Candlestick x={75} open={92} close={70} high={95} low={65} width={12} />
      <Candlestick x={110} open={72} close={95} high={68} low={98} width={12} />
      <Candlestick x={145} open={97} close={125} high={94} low={128} width={12} />
      <Candlestick x={180} open={123} close={105} high={126} low={100} width={12} />
      <Candlestick x={215} open={107} close={95} high={110} low={90} width={12} />
      <Candlestick x={250} open={93} close={115} high={90} low={118} width={12} />
      <Candlestick x={285} open={113} close={130} high={110} low={133} width={12} />
      <Candlestick x={320} open={128} close={108} high={131} low={104} width={12} />
    </DiagramFrame>
  );
}

export function AtrDiagram(_: DiagramProps) {
  const atrVals = [15, 18, 20, 30, 45, 55, 48, 35];
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <svg viewBox="0 0 400 220" className="w-full">
        <Candlestick x={40} open={140} close={130} high={148} low={122} width={14} />
        <Candlestick x={80} open={132} close={120} high={140} low={112} width={14} />
        <Candlestick x={120} open={122} close={105} high={132} low={95} width={14} />
        <Candlestick x={160} open={107} close={70} high={125} low={55} width={14} />
        <Candlestick x={200} open={72} close={35} high={95} low={20} width={14} />
        <Candlestick x={240} open={38} close={80} high={20} low={95} width={14} />
        <Candlestick x={280} open={82} close={55} high={100} low={40} width={14} />
        <Candlestick x={320} open={57} close={65} high={70} low={48} width={14} />
        <line x1={0} y1={150} x2={400} y2={150} stroke={GRID} strokeWidth={1} />
        <text x={10} y={168} fontSize={10} fill={LABEL}>ATR</text>
        {atrVals.map((v, i) => (
          <rect key={i} x={30 + i * 40} y={210 - v} width={20} height={v} fill={LABEL} opacity={0.5} />
        ))}
      </svg>
    </div>
  );
}

export function BollingerDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      <path
        d="M 20 90 C 100 100, 180 108, 220 108 C 280 108, 340 40, 380 20"
        stroke={LINE}
        strokeWidth={1}
        fill="none"
        strokeDasharray="3 3"
      />
      <path
        d="M 20 150 C 100 130, 180 118, 220 118 C 280 118, 340 170, 380 190"
        stroke={LINE}
        strokeWidth={1}
        fill="none"
        strokeDasharray="3 3"
      />
      <text x={220} y={100} textAnchor="middle" fontSize={9} fill={LABEL}>squeeze</text>
      <Candlestick x={40} open={120} close={115} high={124} low={110} width={12} />
      <Candlestick x={80} open={117} close={122} high={113} low={126} width={12} />
      <Candlestick x={120} open={120} close={117} high={124} low={113} width={12} />
      <Candlestick x={160} open={118} close={121} high={115} low={124} width={12} />
      <Candlestick x={200} open={119} close={116} high={122} low={113} width={12} />
      <Candlestick x={240} open={117} close={90} high={119} low={85} width={12} />
      <Candlestick x={280} open={92} close={60} high={95} low={55} width={12} />
      <Candlestick x={320} open={62} close={35} high={65} low={30} width={12} />
      <text x={330} y={20} fontSize={10} fill={DOWN}>expansion</text>
    </DiagramFrame>
  );
}

export function VolumeBarsDiagram(_: DiagramProps) {
  const vols = [25, 30, 20, 35, 90, 40, 25];
  const ups = [true, false, true, false, false, true, true];
  return (
    <DiagramFrame>
      {vols.map((v, i) => {
        const x = 60 + i * 45;
        return <Candlestick key={i} x={x} open={130} close={ups[i] ? 90 : 170} high={85} low={175} width={16} />;
      })}
      <line x1={0} y1={182} x2={400} y2={182} stroke={GRID} strokeWidth={1} />
      {vols.map((v, i) => {
        const x = 60 + i * 45;
        return <rect key={i} x={x - 8} y={215 - v} width={16} height={v} fill={ups[i] ? UP : DOWN} opacity={0.7} />;
      })}
      <text x={285} y={35} fontSize={10} fill={DOWN}>climax volume</text>
    </DiagramFrame>
  );
}

export function DeltaDiagram({ locale }: DiagramProps) {
  const deltas = [10, 18, -8, 22, -15, -25, 12, 30];
  return (
    <DiagramFrame>
      <line x1={0} y1={110} x2={400} y2={110} stroke={GRID} strokeWidth={1} />
      <text x={10} y={105} fontSize={9} fill={LABEL}>0</text>
      {deltas.map((d, i) => (
        <rect
          key={i}
          x={30 + i * 45}
          y={d >= 0 ? 110 - d * 2.5 : 110}
          width={22}
          height={Math.abs(d) * 2.5}
          fill={d >= 0 ? UP : DOWN}
          opacity={0.75}
        />
      ))}
      <text x={200} y={20} textAnchor="middle" fontSize={10} fill={LABEL}>{`Delta ${t(locale, "volumeDeltaByCandle")}`}</text>
    </DiagramFrame>
  );
}

export function OpenInterestDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <polyline points="30,150 90,120 150,100 210,60 270,45 330,20" fill="none" stroke={UP} strokeWidth={1.75} />
      <text x={30} y={30} fontSize={10} fill={UP}>{t(locale, "price")}</text>
      <polyline points="30,180 90,170 150,155 210,135 270,115 330,95" fill="none" stroke={LABEL} strokeWidth={1.5} strokeDasharray="4 3" />
      <text x={30} y={200} fontSize={10} fill={LABEL}>Open Interest</text>
    </DiagramFrame>
  );
}

export function FundingRateDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={0} y1={110} x2={400} y2={110} stroke={GRID} strokeWidth={1} />
      <text x={370} y={105} fontSize={9} fill={LABEL}>0%</text>
      <rect x={0} y={40} width={400} height={70} fill={UP} opacity={0.05} />
      <rect x={0} y={110} width={400} height={70} fill={DOWN} opacity={0.05} />
      <polyline
        points="30,100 70,80 110,60 150,45 190,55 230,90 270,120 310,135 350,115"
        fill="none"
        stroke={LABEL}
        strokeWidth={1.75}
      />
      <text x={150} y={30} textAnchor="middle" fontSize={9} fill={UP}>{t(locale, "longsPayShorts")}</text>
      <text x={310} y={160} textAnchor="middle" fontSize={9} fill={DOWN}>{t(locale, "shortsPayLongs")}</text>
    </DiagramFrame>
  );
}

export function LiquidationsDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <Candlestick x={60} open={130} close={120} high={133} low={116} width={16} />
      <Candlestick x={110} open={122} close={110} high={125} low={106} width={16} />
      <Candlestick x={160} open={112} close={100} high={115} low={96} width={16} />
      <Candlestick x={210} open={102} close={60} high={104} low={40} width={20} />
      <text x={210} y={30} textAnchor="middle" fontSize={9} fill={DOWN}>{t(locale, "liquidationCascade")}</text>
      {[70, 82, 94].map((y, i) => (
        <text key={i} x={230 + i * 5} y={y} fontSize={11} fill={DOWN}>×</text>
      ))}
      <Candlestick x={260} open={62} close={90} high={58} low={140} width={16} />
      <Candlestick x={310} open={92} close={100} high={88} low={104} width={16} />
      <text x={310} y={125} textAnchor="middle" fontSize={9} fill={UP}>{t(locale, "sharpBounce")}</text>
    </DiagramFrame>
  );
}

export function ScalpingDiagram(_: DiagramProps) {
  return (
    <DiagramFrame>
      {Array.from({ length: 12 }).map((_, i) => {
        const x = 30 + i * 30;
        const up = i % 2 === 0;
        const base = 100 + Math.sin(i) * 25;
        return (
          <Candlestick key={i} x={x} open={base} close={up ? base - 12 : base + 12} high={base - 16} low={base + 16} width={10} />
        );
      })}
      <path d="M 60 100 L 90 80" stroke={UP} strokeWidth={1.5} markerEnd="url(#arrow-scalp1)" />
      <path d="M 210 105 L 240 125" stroke={DOWN} strokeWidth={1.5} markerEnd="url(#arrow-scalp2)" />
      <defs>
        <marker id="arrow-scalp1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,8 L4,0 L8,8 Z" fill={UP} />
        </marker>
        <marker id="arrow-scalp2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={DOWN} />
        </marker>
      </defs>
    </DiagramFrame>
  );
}

export function DayTradingDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={30} y1={20} x2={30} y2={190} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <text x={30} y={12} textAnchor="middle" fontSize={9} fill={LABEL}>{t(locale, "sessionOpen")}</text>
      <line x1={370} y1={20} x2={370} y2={190} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <text x={370} y={12} textAnchor="middle" fontSize={9} fill={LABEL}>{t(locale, "sessionClose")}</text>
      <Candlestick x={60} open={140} close={125} high={144} low={120} width={14} />
      <Candlestick x={100} open={127} close={100} high={130} low={95} width={14} />
      <Candlestick x={140} open={102} close={115} high={98} low={118} width={14} />
      <Candlestick x={180} open={113} close={80} high={116} low={75} width={14} />
      <Candlestick x={220} open={82} close={95} high={78} low={98} width={14} />
      <Candlestick x={260} open={93} close={60} high={96} low={55} width={14} />
      <Candlestick x={300} open={62} close={70} high={58} low={73} width={14} />
      <Candlestick x={340} open={68} close={50} high={71} low={47} width={14} />
      <circle cx={60} cy={140} r={4} fill={UP} />
      <circle cx={340} cy={50} r={4} fill={DOWN} />
    </DiagramFrame>
  );
}

export function SwingTradingDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <polyline
        points="30,160 90,140 150,80 210,60 270,90 330,150 380,100"
        fill="none"
        stroke={UP}
        strokeWidth={1.75}
      />
      <circle cx={90} cy={140} r={4} fill={UP} />
      <text x={90} y={158} textAnchor="middle" fontSize={9} fill={UP}>{t(locale, "entry")}</text>
      <circle cx={210} cy={60} r={4} fill={DOWN} />
      <text x={210} y={45} textAnchor="middle" fontSize={9} fill={DOWN}>{t(locale, "exit")}</text>
      <line x1={90} y1={140} x2={90} y2={20} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <line x1={210} y1={60} x2={210} y2={20} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <text x={150} y={16} textAnchor="middle" fontSize={9} fill={LABEL}>{t(locale, "severalDays")}</text>
    </DiagramFrame>
  );
}

export function PositionTradingDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <polyline
        points="20,180 70,165 120,150 170,120 220,100 270,75 320,55 380,25"
        fill="none"
        stroke={UP}
        strokeWidth={2}
      />
      <circle cx={30} cy={178} r={4} fill={UP} />
      <text x={30} y={196} fontSize={9} fill={UP}>{t(locale, "entry")}</text>
      <circle cx={370} cy={28} r={4} fill={DOWN} />
      <text x={340} y={16} fontSize={9} fill={DOWN}>{t(locale, "exitAfterMonths")}</text>
      <line x1={30} y1={178} x2={30} y2={20} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <line x1={370} y1={28} x2={370} y2={20} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
    </DiagramFrame>
  );
}

export function BreakoutDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={0} y1={90} x2={330} y2={90} stroke={DOWN} strokeWidth={1} strokeDasharray="4 4" />
      <text x={10} y={84} fontSize={10} fill={DOWN}>{t(locale, "resistance")}</text>
      <Candlestick x={40} open={120} close={100} high={124} low={95} width={14} />
      <Candlestick x={80} open={102} close={95} high={106} low={90} width={14} />
      <Candlestick x={120} open={97} close={92} high={101} low={88} width={14} />
      <Candlestick x={160} open={94} close={90} high={98} low={86} width={14} />
      <Candlestick x={200} open={92} close={95} high={89} low={98} width={14} />
      <Candlestick x={240} open={93} close={60} high={95} low={55} width={16} />
      <Candlestick x={285} open={58} close={30} high={62} low={25} width={16} />
      <Candlestick x={330} open={32} close={15} high={35} low={10} width={16} />
      <text x={280} y={20} textAnchor="middle" fontSize={10} fill={UP}>{t(locale, "breakoutImpulse")}</text>
    </DiagramFrame>
  );
}

export function MeanReversionDiagram({ locale }: DiagramProps) {
  return (
    <DiagramFrame>
      <line x1={0} y1={110} x2={400} y2={110} stroke={LABEL} strokeWidth={1.5} strokeDasharray="4 4" />
      <text x={10} y={104} fontSize={10} fill={LABEL}>{t(locale, "meanExample")}</text>
      <line x1={0} y1={60} x2={400} y2={60} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <line x1={0} y1={160} x2={400} y2={160} stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <polyline
        points="30,115 80,105 130,50 180,45 230,90 280,115 330,155 370,120"
        fill="none"
        stroke={DOWN}
        strokeWidth={1.75}
      />
      <circle cx={180} cy={45} r={4} fill={DOWN} />
      <text x={180} y={30} textAnchor="middle" fontSize={9} fill={DOWN}>{t(locale, "overboughtShort")}</text>
      <circle cx={330} cy={155} r={4} fill={UP} />
      <text x={330} y={188} textAnchor="middle" fontSize={9} fill={UP}>{t(locale, "oversoldLong")}</text>
    </DiagramFrame>
  );
}

export const DIAGRAMS = {
  fvg: FvgDiagram,
  imbalance: ImbalanceDiagram,
  "liquidity-sweep": LiquiditySweepDiagram,
  "trend-structure": TrendStructureDiagram,
  "order-block": OrderBlockDiagram,
  rsi: RsiDiagram,
  "intro-chart": IntroChartDiagram,
  "market-types": MarketTypesDiagram,
  "chart-anatomy": ChartAnatomyDiagram,
  "candlestick-anatomy": CandlestickAnatomyDiagram,
  "support-resistance": SupportResistanceDiagram,
  "trend-basic": BasicTrendDiagram,
  "volume-liquidity": VolumeLiquidityDiagram,
  "risk-basic": RiskBasicDiagram,
  "moving-averages": MovingAveragesDiagram,
  fibonacci: FibonacciDiagram,
  "reversal-patterns": ReversalPatternsDiagram,
  "continuation-patterns": ContinuationPatternsDiagram,
  "multi-timeframe": MultiTimeframeDiagram,
  "liquidity-types": LiquidityTypesDiagram,
  "risk-reward": RiskRewardDiagram,
  "position-size": PositionSizeDiagram,
  "stop-loss-chart": StopLossDiagram,
  "take-profit-chart": TakeProfitDiagram,
  macd: MacdDiagram,
  ema: EmaDiagram,
  sma: SmaDiagram,
  vwap: VwapDiagram,
  atr: AtrDiagram,
  bollinger: BollingerDiagram,
  "volume-bars": VolumeBarsDiagram,
  delta: DeltaDiagram,
  "open-interest": OpenInterestDiagram,
  "funding-rate": FundingRateDiagram,
  liquidations: LiquidationsDiagram,
  scalping: ScalpingDiagram,
  "day-trading": DayTradingDiagram,
  "swing-trading": SwingTradingDiagram,
  "position-trading": PositionTradingDiagram,
  breakout: BreakoutDiagram,
  "mean-reversion": MeanReversionDiagram,
} as const;

export type DiagramKey = keyof typeof DIAGRAMS;
