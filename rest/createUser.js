const db = require('../db');

module.exports = async (req, res) => {
  const { name, email, age } = req.body;
  const rawAge = age === undefined || age === null ? '' : String(age).trim();
  const parsedAge = Number(rawAge);

  if (!name || !email || rawAge === '' || !Number.isFinite(parsedAge)) {
    return res.status(400).json({ error: 'Name, email and valid age required' });
  }

  try {
    const result = await db.run('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, parsedAge]);
    const user = await db.get('SELECT id, name, email, age FROM users WHERE id = ?', [result.id]);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
