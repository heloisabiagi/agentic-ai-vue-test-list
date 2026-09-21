const db = require('../db');

module.exports = async (req, res) => {
  const { name, email, age } = req.body;
  const rawAge = age === undefined || age === null ? '' : String(age).trim();
  const parsedAge = Number(rawAge);

  if (!name || !email || rawAge === '' || !Number.isFinite(parsedAge)) {
    return res.status(400).json({ error: 'Name, email and valid age required' });
  }

  try {
    await db.run('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, parsedAge, req.params.id]);
    const user = await db.get('SELECT id, name, email, age FROM users WHERE id = ?', [req.params.id]);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
