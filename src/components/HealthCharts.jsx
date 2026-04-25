import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'

const tip = {
  contentStyle: { background: '#1c2128', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, fontSize: 13, padding: '8px 14px' },
  labelStyle: { color: '#8b949e', marginBottom: 4 },
  itemStyle: { color: '#e6edf3' },
  cursor: { stroke: 'rgba(255,255,255,0.06)' },
}

function ChartCard({ title, sub, children, empty }) {
  return (
    <div className="bg-[#161b22] border border-white/8 rounded-2xl p-6 shadow-lg shadow-black/30 space-y-5">
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
      </div>
      {empty
        ? (
          <div className="h-44 flex flex-col items-center justify-center gap-2 text-slate-600">
            <span className="text-2xl">📊</span>
            <p className="text-sm">Log your first entry to see the trend</p>
          </div>
        )
        : children
      }
    </div>
  )
}

export default function HealthCharts({ data }) {
  const hasData = data && data.length >= 1
  const fmt = (d) => d?.slice(5)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <ChartCard title="Weight" sub="Goal: 158 lbs" empty={!hasData}>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="date" tickFormatter={fmt} tick={{ fontSize: 11, fill: '#484f58' }} axisLine={false} tickLine={false} />
            <YAxis domain={['auto', 'auto']} tick={{ fontSize: 11, fill: '#484f58' }} axisLine={false} tickLine={false} />
            <Tooltip {...tip} formatter={(v) => [`${v} lbs`, 'Weight']} />
            <ReferenceLine y={158} stroke="#f97316" strokeDasharray="4 4" label={{ value: 'Goal', fill: '#f97316', fontSize: 10, position: 'insideTopRight' }} />
            <Line type="monotone" dataKey="weight" stroke="#f97316" strokeWidth={2.5} dot={{ r: 3, fill: '#f97316', strokeWidth: 0 }} activeDot={{ r: 5 }} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Resting Heart Rate" sub="Lower over time = fitter heart">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="date" tickFormatter={fmt} tick={{ fontSize: 11, fill: '#484f58' }} axisLine={false} tickLine={false} />
            <YAxis domain={['auto', 'auto']} tick={{ fontSize: 11, fill: '#484f58' }} axisLine={false} tickLine={false} />
            <Tooltip {...tip} formatter={(v) => [`${v} bpm`, 'Resting HR']} />
            <Line type="monotone" dataKey="resting_hr" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3, fill: '#ef4444', strokeWidth: 0 }} activeDot={{ r: 5 }} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Sleep" sub="Target: 7.5 hrs — critical at 43">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="date" tickFormatter={fmt} tick={{ fontSize: 11, fill: '#484f58' }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 10]} tick={{ fontSize: 11, fill: '#484f58' }} axisLine={false} tickLine={false} />
            <Tooltip {...tip} formatter={(v) => [`${v} hrs`, 'Sleep']} />
            <ReferenceLine y={7.5} stroke="#6366f1" strokeDasharray="4 4" label={{ value: '7.5h', fill: '#6366f1', fontSize: 10, position: 'insideTopRight' }} />
            <Bar dataKey="sleep" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
