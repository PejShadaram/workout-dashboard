import { useState } from 'react'
import { profile, calorieTargets } from './data/workoutData'
import { useHealthData } from './hooks/useHealthData'
import StatCard from './components/StatCard'
import GoalProgress from './components/GoalProgress'
import HealthCharts from './components/HealthCharts'
import HRZones from './components/HRZones'
import WeeklySchedule from './components/WeeklySchedule'
import WorkoutPanel from './components/WorkoutPanel'
import LogEntry from './components/LogEntry'
import './index.css'

const TABS = [
  {
    id: 'Overview', label: 'Overview',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#f97316' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    id: 'Health', label: 'Health',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#f97316' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: 'Schedule', label: 'Schedule',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#f97316' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    id: 'Workout', label: 'Workout',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#f97316' : '#6b7280'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4v16M18 4v16M3 8h4M17 8h4M3 16h4M17 16h4M7 12h10"/>
      </svg>
    ),
  },
]

function DesktopNav({ tab, setTab }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useState(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  })
  if (isMobile) return null
  return (
    <nav style={{ display: 'flex' }}>
      {TABS.map(t => (
        <button
          key={t.id}
          onClick={() => setTab(t.id)}
          className={`px-6 py-5 text-sm font-medium border-b-2 transition-all cursor-pointer -mb-px whitespace-nowrap ${
            tab === t.id
              ? 'border-orange-500 text-orange-400'
              : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-white/20'
          }`}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}

function daysSince(dateStr) {
  return Math.floor((new Date() - new Date(dateStr)) / 86400000)
}

export default function App() {
  const [tab, setTab] = useState('Overview')
  const { data, addEntry, loading } = useHealthData()

  const latest = data.length > 0 ? data[data.length - 1] : {}
  const days = daysSince(profile.startDate)
  const currentWeight = latest.weight ?? profile.currentWeight
  const lostSoFar = profile.currentWeight - currentWeight

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">

      {/* Header */}
      <div className="bg-[#161b22] border-b border-white/8 sticky top-0 z-10 shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between" style={{ minHeight: 64 }}>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">Workout Dashboard</h1>
              <p className="text-xs md:text-sm text-slate-500">Day {days} · Circuit + HIIT · 5×/week</p>
            </div>

            {/* Desktop top tabs — hidden on mobile via inline style + matchMedia */}
            <DesktopNav tab={tab} setTab={setTab} />
          </div>
        </div>
      </div>

      {/* Page content — extra bottom padding on mobile for tab bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10 space-y-6 pb-24 md:pb-10">

        {tab === 'Overview' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              <StatCard label="Current Weight" value={`${currentWeight} lbs`} sub={`Goal: ${profile.targetWeight} lbs`} accent />
              <StatCard label="Lost So Far" value={lostSoFar > 0 ? `${lostSoFar.toFixed(1)} lbs` : '—'} sub="Since Apr 25" />
              <StatCard label="Daily Calories" value={`${calorieTargets.dailyTarget}`} sub={`${calorieTargets.deficit} cal deficit`} />
              <StatCard label="Protein Target" value={`${calorieTargets.protein}g`} sub="per day" />
            </div>
            <GoalProgress currentWeight={currentWeight} />
            <WeeklySchedule />
            <WorkoutPanel />
          </>
        )}

        {tab === 'Health' && (
          <>
            {loading && (
              <div className="text-center py-12 text-slate-500 text-sm">Loading your data…</div>
            )}
            {!loading && <LogEntry onSave={addEntry} lastEntry={latest} />}
            <div className="grid grid-cols-3 gap-4 md:gap-5">
              <StatCard label="Weight" value={latest.weight ? `${latest.weight} lbs` : '—'} sub={`Goal: ${profile.targetWeight} lbs`} accent />
              <StatCard label="Resting HR" value={latest.resting_hr ? `${latest.resting_hr} bpm` : '—'} sub="Apple Watch" />
              <StatCard label="Sleep" value={latest.sleep ? `${latest.sleep} hrs` : '—'} sub="Last night" />
            </div>
            <HealthCharts data={data} />
            <HRZones />
          </>
        )}

        {tab === 'Schedule' && (
          <>
            <WeeklySchedule />
            <div className="bg-[#161b22] border border-white/8 rounded-2xl shadow-lg shadow-black/30 overflow-hidden">
              <div className="px-6 md:px-8 py-5 border-b border-white/8">
                <h2 className="text-base font-semibold text-white">Session Structure</h2>
                <p className="text-sm text-slate-500 mt-0.5">Same format every day — 60 minutes total</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/6">
                {[
                  { block: 'Warm-up',   time: '5 min',  detail: 'Easy row + dynamic movement',    dot: 'bg-blue-500' },
                  { block: 'Circuit',   time: '45 min', detail: '3–4 rounds · 45s on / 15s rest', dot: 'bg-orange-500' },
                  { block: 'Finisher',  time: '5 min',  detail: 'Row intervals or HIIT burst',     dot: 'bg-red-500' },
                  { block: 'Cool-down', time: '5 min',  detail: 'Stretch / breathe down',          dot: 'bg-green-500' },
                ].map(s => (
                  <div key={s.block} className="p-6 md:p-8 space-y-3">
                    <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                    <p className="text-2xl font-semibold text-white">{s.time}</p>
                    <p className="text-sm font-medium text-slate-300">{s.block}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === 'Workout' && <WorkoutPanel />}
      </div>

      {/* Mobile bottom tab bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 bg-[#161b22] border-t border-white/8 z-20"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex">
          {TABS.map(t => {
            const active = tab === t.id
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="flex-1 flex flex-col items-center gap-1 py-3 cursor-pointer bg-transparent border-0"
              >
                {t.icon(active)}
                <span className={`text-[10px] font-medium ${active ? 'text-orange-400' : 'text-slate-500'}`}>
                  {t.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
