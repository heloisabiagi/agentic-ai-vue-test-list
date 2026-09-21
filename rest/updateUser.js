const db = require('../db');

module.exports = async (req, res) => {
  const { name, email } = req.body;

  try {
    await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id]);
    const user = await db.get('SELECT id, name, email FROM users WHERE id = ?', [req.params.id]);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
