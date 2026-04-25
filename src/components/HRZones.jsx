import { hrZones, profile } from '../data/workoutData'

export default function HRZones() {
  return (
    <div className="bg-[#161b22] border border-white/8 rounded-2xl shadow-lg shadow-black/30 overflow-hidden">
      <div className="px-8 py-5 border-b border-white/8">
        <h2 className="text-base font-semibold text-white">Heart Rate Zones</h2>
        <p className="text-sm text-slate-500 mt-0.5">Max HR: {profile.maxHR} bpm (220 − age {profile.age})</p>
      </div>

      <div className="divide-y divide-white/6">
        {hrZones.map((zone) => (
          <div key={zone.name} className="flex items-center gap-6 px-8 py-5 hover:bg-white/2 transition-colors">
            <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: zone.color }} />

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">{zone.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{zone.when}</p>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-sm font-semibold text-white tabular-nums">{zone.bpmMin}–{zone.bpmMax} <span className="text-xs font-normal text-slate-500">bpm</span></p>
              <p className="text-xs text-slate-500 mt-0.5">{zone.pctMin}–{zone.pctMax}% max HR</p>
            </div>

            <div className="w-32 h-1.5 bg-white/8 rounded-full overflow-hidden flex-shrink-0">
              <div
                className="h-full rounded-full"
                style={{
                  background: zone.color,
                  width: `${zone.pctMax - zone.pctMin}%`,
                  marginLeft: `${zone.pctMin - 45}%`,
                  opacity: 0.8,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
