import { useState, useEffect } from 'react'

const API = '/api/health'

export function useHealthData() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(rows => {
        setData(rows)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  async function addEntry(entry) {
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    })
    // Optimistically update local state, then re-fetch to sync
    setData(prev => {
      const updated = [...prev.filter(d => d.date !== entry.date), entry]
      return updated.sort((a, b) => a.date.localeCompare(b.date))
    })
  }

  return { data, addEntry, loading }
}
