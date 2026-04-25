import { profile } from '../data/workoutData'

export default function GoalProgress({ currentWeight }) {
  const start = profile.currentWeight
  const target = profile.targetWeight
  const current = currentWeight ?? start
  const totalLoss = start - target
  const lost = start - current
  const pct = Math.min(100, Math.max(0, (lost / totalLoss) * 100))

  return (
    <div className="bg-[#161b22] border border-white/8 rounded-2xl p-8 shadow-lg shadow-black/30 space-y-8">
      <div>
        <h2 className="text-base font-semibold text-white">Goal Progress</h2>
        <p className="text-sm text-slate-500 mt-0.5">Target: Fight Club lean · ~10% body fat</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Weight */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Weight</p>
              <p className="text-2xl font-semibold text-white">{current} <span className="text-sm font-normal text-slate-400">lbs</span></p>
            </div>
            <p className="text-sm text-slate-400">Goal: <span className="text-white font-medium">{target} lbs</span></p>
          </div>
          <div className="h-2 bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>{lost > 0 ? `${lost.toFixed(1)} lbs lost` : 'Just started'}</span>
            <span>{(totalLoss - lost).toFixed(1)} lbs remaining</span>
          </div>
        </div>

        {/* Body Fat */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Body Fat</p>
              <p className="text-2xl font-semibold text-white">{profile.currentBodyFat}<span className="text-sm font-normal text-slate-400">%</span></p>
            </div>
            <p className="text-sm text-slate-400">Goal: <span className="text-white font-medium">{profile.targetBodyFat}%</span></p>
          </div>
          <div className="h-2 bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>~{profile.currentBodyFat}% estimated now</span>
            <span>{pct.toFixed(0)}% of the way there</span>
          </div>
        </div>
      </div>
    </div>
  )
}
