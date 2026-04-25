import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const rows = await sql`
      SELECT date::text, weight, resting_hr, sleep
      FROM health_entries
      ORDER BY date ASC
    `;
    return res.status(200).json(rows);
  }

  if (req.method === 'POST') {
    const { date, weight, resting_hr, sleep } = req.body;
    if (!date) return res.status(400).json({ error: 'date is required' });

    await sql`
      INSERT INTO health_entries (date, weight, resting_hr, sleep, updated_at)
      VALUES (${date}, ${weight}, ${resting_hr}, ${sleep}, NOW())
      ON CONFLICT (date) DO UPDATE SET
        weight     = EXCLUDED.weight,
        resting_hr = EXCLUDED.resting_hr,
        sleep      = EXCLUDED.sleep,
        updated_at = NOW()
    `;
    return res.status(200).json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
