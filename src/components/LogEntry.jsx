import { useState } from 'react'

export default function LogEntry({ onSave, lastEntry }) {
  const today = new Date().toISOString().slice(0, 10)
  const [form, setForm] = useState({
    date: today,
    weight: lastEntry?.weight ?? '',
    resting_hr: lastEntry?.resting_hr ?? '',
    sleep: lastEntry?.sleep ?? '',
  })
  const [saved, setSaved] = useState(false)

  function set(field, val) {
    setForm(f => ({ ...f, [field]: val }))
    setSaved(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSave({
      date: form.date,
      weight:     form.weight     !== '' ? parseFloat(form.weight)     : null,
      resting_hr: form.resting_hr !== '' ? parseFloat(form.resting_hr) : null,
      sleep:      form.sleep      !== '' ? parseFloat(form.sleep)       : null,
    })
    setSaved(true)
  }

  return (
    <div className="bg-[#161b22] border border-white/8 rounded-2xl shadow-lg shadow-black/30 overflow-hidden">
      <div className="px-8 py-5 border-b border-white/8 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-white">Daily Log</h2>
          <p className="text-sm text-slate-500 mt-0.5">Takes 30 seconds each morning</p>
        </div>
        {saved && (
          <span className="text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-1.5">
            Saved
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Field label="Weight" unit="lbs" inputMode="decimal"
            value={form.weight} onChange={v => set('weight', v)} placeholder="e.g. 198.5" color="orange" />
          <Field label="Resting HR" unit="bpm" inputMode="decimal"
            value={form.resting_hr} onChange={v => set('resting_hr', v)} placeholder="e.g. 62.5" color="red" />
          <Field label="Sleep" unit="hrs" inputMode="decimal"
            value={form.sleep} onChange={v => set('sleep', v)} placeholder="e.g. 7.5" color="indigo" />
        </div>

        <div className="flex items-center gap-4 pt-2">
          <input
            type="date"
            value={form.date}
            onChange={e => set('date', e.target.value)}
            className="text-sm bg-[#1c2128] border border-white/8 rounded-xl px-4 py-2.5 text-slate-400 focus:outline-none focus:border-white/20 transition-colors"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer shadow-lg shadow-orange-500/20"
          >
            Save Entry
          </button>
        </div>
      </form>
    </div>
  )
}

const colorFocus = {
  orange: 'focus-within:border-orange-500/60',
  red:    'focus-within:border-red-500/60',
  indigo: 'focus-within:border-indigo-500/60',
}
const colorLabel = {
  orange: 'text-orange-400',
  red:    'text-red-400',
  indigo: 'text-indigo-400',
}

function Field({ label, unit, color, onChange, ...props }) {
  return (
    <div className="space-y-2">
      <label className={`text-xs font-semibold uppercase tracking-widest ${colorLabel[color]}`}>{label}</label>
      <div className={`flex items-center gap-3 bg-[#1c2128] border border-white/8 rounded-xl px-4 py-3.5 transition-colors ${colorFocus[color]}`}>
        <input
          {...props}
          onChange={e => onChange(e.target.value)}
          className="bg-transparent w-full text-xl font-semibold text-white placeholder:text-slate-700 focus:outline-none"
        />
        <span className="text-sm text-slate-500 flex-shrink-0">{unit}</span>
      </div>
    </div>
  )
}
