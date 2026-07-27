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

function DiagramFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
      <svg viewBox="0 0 400 220" className="w-full">
        <line x1="0" y1="55" x2="400" y2="55" stroke={GRID} strokeWidth={1} />
        <line x1="0" y1="110" x2="400" y2="110" stroke={GRID} strokeWidth={1} />
        <line x1="0" y1="165" x2="400" y2="165" stroke={GRID} strokeWidth={1} />
        {children}
      </svg>
      <div className="border-t border-black/[0.06] px-4 py-2 text-center text-xs text-neutral-500 dark:border-white/[0.06] dark:text-white/40">
        {label}
      </div>
    </div>
  );
}

export function FvgDiagram() {
  return (
    <DiagramFrame label="Bullish FVG: разрыв между хвостом свечи 1 и хвостом свечи 3">
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

export function ImbalanceDiagram() {
  return (
    <DiagramFrame label="Имбаланс: зона неэффективного, однонаправленного движения цены">
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

export function LiquiditySweepDiagram() {
  return (
    <DiagramFrame label="Снятие ликвидности: прокол уровня равных хаёв и разворот вниз">
      <line x1={40} y1={70} x2={330} y2={70} stroke={LINE} strokeWidth={1} strokeDasharray="4 4" />
      <text x={40} y={62} fontSize={10} fill={LABEL}>
        equal highs (ликвидность)
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

export function TrendStructureDiagram() {
  return (
    <DiagramFrame label="Структура тренда: HH/HL, слом структуры (BOS)">
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

export const DIAGRAMS = {
  fvg: FvgDiagram,
  imbalance: ImbalanceDiagram,
  "liquidity-sweep": LiquiditySweepDiagram,
  "trend-structure": TrendStructureDiagram,
} as const;

export type DiagramKey = keyof typeof DIAGRAMS;
