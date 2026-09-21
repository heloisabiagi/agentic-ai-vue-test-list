# Express + Vue + SQLite (Users)

[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)

This project demonstrates a minimal Express REST API with a Vue frontend that stores users in a local SQLite database.

Setup

```bash
cd /path/to/ai-test-project
npm install
npm start
```

Open http://localhost:3000 in your browser.

API endpoints

- `GET /api/users` — list users
- `GET /api/users/:id` — get a user
- `POST /api/users` — create a user (JSON body `{ name, email }`)
- `PUT /api/users/:id` — update a user
- `DELETE /api/users/:id` — delete a user

Notes

- The SQLite database file `database.sqlite` will be created automatically in the project root when the server runs.
- The frontend is served from the `public/` folder.
