export default function MarketPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold text-white">Виртуальный рынок</h1>
      <p className="mt-2 text-sm text-white/45">
        Тренируйтесь открывать сделки на симулированном рынке без риска для
        реальных денег.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <p className="text-sm text-white/40">
          Торговый движок появится на следующем этапе разработки.
        </p>
        <p className="mt-1 text-xs text-white/25">
          Портфель и модель сделок уже спроектированы в схеме данных
          (VirtualPortfolio, VirtualTrade).
        </p>
      </div>
    </div>
  );
}
