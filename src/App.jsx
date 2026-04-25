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

const TABS = ['Overview', 'Health', 'Schedule', 'Workout']

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
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between py-5">
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Workout Dashboard</h1>
              <p className="text-sm text-slate-500 mt-0.5">Day {days} · Circuit + HIIT · 5×/week</p>
            </div>

            {/* Tabs */}
            <nav className="flex">
              {TABS.map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-6 py-5 text-sm font-medium border-b-2 transition-all cursor-pointer -mb-px whitespace-nowrap ${
                    tab === t
                      ? 'border-orange-500 text-orange-400'
                      : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-white/20'
                  }`}
                >
                  {t}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="max-w-6xl mx-auto px-8 py-10 space-y-6">

        {tab === 'Overview' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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
            <div className="grid grid-cols-3 gap-5">
              <StatCard label="Weight" value={latest.weight ? `${latest.weight} lbs` : '—'} sub={`Goal: ${profile.targetWeight} lbs`} accent />
              <StatCard label="Resting HR" value={latest.resting_hr ? `${latest.resting_hr} bpm` : '—'} sub="From Apple Watch face" />
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
              <div className="px-8 py-5 border-b border-white/8">
                <h2 className="text-base font-semibold text-white">Session Structure</h2>
                <p className="text-sm text-slate-500 mt-0.5">Same format every day — 60 minutes total</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6">
                {[
                  { block: 'Warm-up',   time: '5 min',  detail: 'Easy row + dynamic movement',    dot: 'bg-blue-500' },
                  { block: 'Circuit',   time: '45 min', detail: '3–4 rounds · 45s on / 15s rest', dot: 'bg-orange-500' },
                  { block: 'Finisher',  time: '5 min',  detail: 'Row intervals or HIIT burst',     dot: 'bg-red-500' },
                  { block: 'Cool-down', time: '5 min',  detail: 'Stretch / breathe down',          dot: 'bg-green-500' },
                ].map(s => (
                  <div key={s.block} className="p-8 space-y-3">
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
    </div>
  )
}
