# Express + Vue + SQLite (Users)

This project is my experimentation creating a simple RESTful Users list with Vue.js, Unit tests and some pre-commit hooks/ . It demonstrates a minimal Express REST API with a Vue frontend that stores users in a local SQLite database.

This repo is loosely based on this [YouTube video tutorial](https://www.youtube.com/watch?v=wlpBCazAY9Q&t=377s), but I'm adding my personal preferences.

You can also check my development log in the Status section.

##Setup

```bash
cd /path/to/copilot-vue-test-list
npm install
npm start
```

Open http://localhost:3000 in your browser.

##API endpoints

- `GET /api/users` — list users
- `GET /api/users/:id` — get a user
- `POST /api/users` — create a user (JSON body `{ name, email }`)
- `PUT /api/users/:id` — update a user
- `DELETE /api/users/:id` — delete a user

##Notes

- The SQLite database file `database.sqlite` will be created automatically in the project root when the server runs.
- The frontend is served from the `public/` folder.

# Development status

## Day 1: Scaffolding

This app is loosely based on this [Youtube video tutorial](https://www.youtube.com/watch?v=wlpBCazAY9Q&t=377s) and it consists of a very basic (for now) Users List. I'm working with VS Code and Copilot. Thoughts:
- By using the Agent mode, I've simply asked Copilot to create a RESTful API with Express that saves users to a local SQLite database (as per the video tutorial). I asked it to make it a Vue.js app as it's my framework of preference.
- The initial scaffolding was quite impressive with the minimalistic instructions, and it immediately generated a working app.
- I've suggested some code refactoring to separate the Vue.js code into individual components in separate files. It might seem like an overkill for now, but it keeps the code more organized. The code refactoring gave Copilot some extra headache with duplicated code and it took it a while to find the issues that were preventing the app from initialing.
- I've done the a similar suggestion for the REST methods, separating them into individual files. This one was straightforward.
- I've asked it to add some JEST unit tests (didn't give specific details) to both Vue components. As it suggested incompatible dependencies, it took it a while to make the tests run properly. 