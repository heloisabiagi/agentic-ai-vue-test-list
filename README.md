# Express + Vue + SQLite (Users)

[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)

This project is my experimentation creating a simple RESTful Users list with Vue.js, Unit tests and some pre-commit hooks/ . It demonstrates a minimal Express REST API with a Vue frontend that stores users in a local SQLite database.

This repo is loosely based on this video tutorial: https://www.youtube.com/watch?v=wlpBCazAY9Q&t=377s

You can also check my considerations in the `STATUS.md` file

Setup

```bash
cd /path/to/copilot-vue-test-list
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
