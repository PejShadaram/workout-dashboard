import { useState } from 'react'

const KEY = 'workoutHealthData'

export function useHealthData() {
  const [data, setData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]')
    } catch {
      return []
    }
  })

  function addEntry(entry) {
    const updated = [...data.filter(d => d.date !== entry.date), entry]
      .sort((a, b) => a.date.localeCompare(b.date))
    localStorage.setItem(KEY, JSON.stringify(updated))
    setData(updated)
  }

  return { data, addEntry }
}
