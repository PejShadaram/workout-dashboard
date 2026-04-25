export default function StatCard({ label, value, sub, accent = false }) {
  return (
    <div className={`rounded-2xl p-6 flex flex-col gap-2 shadow-lg ${
      accent
        ? 'bg-orange-500/10 border border-orange-500/25 shadow-orange-500/5'
        : 'bg-[#161b22] border border-white/8 shadow-black/30'
    }`}>
      <span className="text-xs font-medium uppercase tracking-widest text-slate-500">{label}</span>
      <span className={`text-3xl font-semibold tracking-tight ${accent ? 'text-orange-400' : 'text-white'}`}>
        {value}
      </span>
      {sub && <span className="text-xs text-slate-500">{sub}</span>}
    </div>
  )
}
