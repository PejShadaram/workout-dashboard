import { schedule } from '../data/workoutData'

const focusColors = {
  'Upper Push':           'text-orange-300 bg-orange-500/15 border-orange-500/25',
  'Lower Body':           'text-blue-300 bg-blue-500/15 border-blue-500/25',
  'Upper Pull + Row':     'text-green-300 bg-green-500/15 border-green-500/25',
  'Core + Conditioning':  'text-purple-300 bg-purple-500/15 border-purple-500/25',
  'Full Body HIIT':       'text-red-300 bg-red-500/15 border-red-500/25',
  'Rest / Walk':          'text-slate-500 bg-white/4 border-white/8',
  'Rest':                 'text-slate-500 bg-white/4 border-white/8',
}

export default function WeeklySchedule() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <div className="bg-[#161b22] border border-white/8 rounded-2xl p-8 shadow-lg shadow-black/30 space-y-6">
      <div>
        <h2 className="text-base font-semibold text-white">Weekly Schedule</h2>
        <p className="text-sm text-slate-500 mt-0.5">5 training days · 2 rest days</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {schedule.map(({ day, focus, muscles, active }) => {
          const isToday = day === today
          return (
            <div
              key={day}
              className={`rounded-xl p-4 border space-y-3 transition-all ${
                isToday
                  ? 'bg-orange-500/10 border-orange-500/40 ring-1 ring-orange-500/20 shadow-lg shadow-orange-500/5'
                  : 'bg-[#1c2128] border-white/6'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className={`text-[11px] font-semibold tracking-wider ${isToday ? 'text-orange-400' : 'text-slate-400'}`}>
                  {day.slice(0, 3).toUpperCase()}
                </span>
                {isToday && (
                  <span className="text-[9px] font-semibold bg-orange-500 text-white rounded-full px-1.5 py-0.5 leading-none">
                    TODAY
                  </span>
                )}
              </div>
              <div className={`text-[11px] font-medium border rounded-lg px-2 py-1.5 leading-tight ${focusColors[focus] ?? 'bg-white/5 text-white border-white/10'}`}>
                {focus}
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">{muscles}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
