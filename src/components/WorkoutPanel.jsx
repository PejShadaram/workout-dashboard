import { useState } from 'react'
import { workouts } from '../data/workoutData'
import ExerciseDetail from './ExerciseDetail'

const dayAccent = {
  Monday:    { tab: 'text-orange-400 border-orange-400', heading: 'text-orange-400' },
  Tuesday:   { tab: 'text-blue-400 border-blue-400',    heading: 'text-blue-400' },
  Wednesday: { tab: 'text-green-400 border-green-400',  heading: 'text-green-400' },
  Thursday:  { tab: 'text-purple-400 border-purple-400',heading: 'text-purple-400' },
  Friday:    { tab: 'text-red-400 border-red-400',      heading: 'text-red-400' },
}

export default function WorkoutPanel() {
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const defaultDay = workouts.find(w => w.day === todayName)?.day ?? workouts[0].day
  const [selected, setSelected] = useState(defaultDay)
  const [openExercise, setOpenExercise] = useState(null)

  const workout = workouts.find(w => w.day === selected)

  function toggleExercise(name) {
    setOpenExercise(prev => prev === name ? null : name)
  }

  return (
    <div className="bg-[#161b22] border border-white/8 rounded-2xl shadow-lg shadow-black/30 overflow-hidden">
      {/* Day tabs */}
      <div className="flex border-b border-white/8 overflow-x-auto">
        {workouts.map(w => {
          const accent = dayAccent[w.day]
          const isActive = selected === w.day
          return (
            <button
              key={w.day}
              onClick={() => { setSelected(w.day); setOpenExercise(null) }}
              className={`flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-all cursor-pointer ${
                isActive
                  ? `${accent.tab} bg-white/4`
                  : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/3'
              }`}
            >
              {w.day}
            </button>
          )
        })}
      </div>

      {workout && (
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className={`text-xl font-semibold ${dayAccent[workout.day]?.heading}`}>{workout.focus}</h2>
              <p className="text-sm text-slate-500 mt-1">{workout.rounds} rounds · 45 sec work · 15 sec rest · 90 sec between rounds</p>
            </div>
          </div>

          {/* Exercise list */}
          <div className="space-y-2">
            <p className="text-xs text-slate-600 uppercase tracking-widest pb-1">Tap an exercise for form cues</p>
            {workout.exercises.map((ex, i) => {
              const isOpen = openExercise === ex.name
              return (
                <div key={i}>
                  <button
                    onClick={() => toggleExercise(ex.name)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all cursor-pointer text-left ${
                      isOpen
                        ? 'bg-white/6 border-white/15'
                        : 'bg-[#1c2128] border-white/6 hover:bg-white/5 hover:border-white/12'
                    }`}
                  >
                    <span className="text-sm text-slate-600 w-5 text-right flex-shrink-0 font-mono">{i + 1}</span>
                    <span className="text-sm font-medium text-slate-200 flex-1">{ex.name}</span>
                    <span className="text-xs font-semibold font-mono text-slate-400 bg-white/6 border border-white/8 px-3 py-1 rounded-lg">
                      {ex.reps}
                    </span>
                    <span className={`text-slate-600 transition-transform duration-200 text-xs ${isOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {isOpen && <ExerciseDetail name={ex.name} />}
                </div>
              )
            })}
          </div>

          {/* Finisher */}
          <div className="flex items-start gap-4 p-5 rounded-xl bg-orange-500/8 border border-orange-500/20">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400 text-sm">
              ⚡
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-1">Finisher</p>
              <p className="text-sm text-slate-300">{workout.finisher}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
