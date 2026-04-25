import { exerciseDetails } from '../data/workoutData'

const muscleColors = {
  "Chest":          "bg-orange-500/15 text-orange-300 border-orange-500/20",
  "Front Deltoid":  "bg-orange-500/15 text-orange-300 border-orange-500/20",
  "Triceps":        "bg-amber-500/15 text-amber-300 border-amber-500/20",
  "Shoulders":      "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "Upper Chest":    "bg-orange-500/15 text-orange-300 border-orange-500/20",
  "Side Deltoids":  "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "Traps":          "bg-slate-500/15 text-slate-300 border-slate-500/20",
  "Quads":          "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Glutes":         "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "Hamstrings":     "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  "Lower Back":     "bg-slate-500/15 text-slate-300 border-slate-500/20",
  "Balance":        "bg-teal-500/15 text-teal-300 border-teal-500/20",
  "Core":           "bg-green-500/15 text-green-300 border-green-500/20",
  "Lats":           "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Rhomboids":      "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "Biceps":         "bg-green-500/15 text-green-300 border-green-500/20",
  "Rear Delts":     "bg-teal-500/15 text-teal-300 border-teal-500/20",
  "Rear Deltoids":  "bg-teal-500/15 text-teal-300 border-teal-500/20",
  "Forearms":       "bg-slate-500/15 text-slate-300 border-slate-500/20",
  "Hip Flexors":    "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "Deep Core":      "bg-green-500/15 text-green-300 border-green-500/20",
  "Cardio":         "bg-red-500/15 text-red-300 border-red-500/20",
  "Full Body":      "bg-red-500/15 text-red-300 border-red-500/20",
}

export default function ExerciseDetail({ name }) {
  const detail = exerciseDetails[name]
  if (!detail) return null

  const searchQuery = encodeURIComponent(`${name} exercise form tutorial`)
  const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`

  return (
    <div className="mx-1 mb-2 rounded-xl bg-[#1c2128] border border-white/8 overflow-hidden">
      <div className="p-6 space-y-5">

        {/* Muscles */}
        <div className="flex flex-wrap gap-2">
          {detail.muscles.map(m => (
            <span
              key={m}
              className={`text-xs font-medium px-3 py-1 rounded-full border ${muscleColors[m] ?? 'bg-white/5 text-slate-300 border-white/10'}`}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/6" />

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed">{detail.description}</p>

        {/* Form cues */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Form Cues</p>
          <ul className="space-y-2.5">
            {detail.cues.map((cue, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="w-5 h-5 rounded-md bg-orange-500/15 text-orange-400 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {cue}
              </li>
            ))}
          </ul>
        </div>

        {/* Watch demo */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-sm font-medium bg-[#212830] hover:bg-[#262e38] border border-white/8 hover:border-white/15 text-slate-300 rounded-xl px-4 py-3 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
          </svg>
          Watch demo on YouTube
        </a>
      </div>
    </div>
  )
}
