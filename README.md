```md
# Team FS-02 – Full Stack Project (Legacy Team Work)

This repository contains a **legacy full-stack team project** that I participated in as part of a group work.  
The goal of this repo is to preserve and run the original application in a clean and consistent structure.

> Note: This is an older team project (“csapatmunka”), I contributed as a team member. The codebase has been cleaned up to feel consistent and easier to run locally.

---

## Tech Stack
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma

---

## Project Structure
```

/
backend/     # Express API + Prisma
frontend/    # React (Vite) client

````

---

## Requirements
- **Node.js 18+** (recommended: 20)
- **PostgreSQL 14+**

---

## Setup & Run (Simple)

### 1) Install dependencies
From the repository root:

```bash
npm install
````

---

### 2) Configure PostgreSQL

Create an empty database, for example:

* `team_fs_02`

---

### 3) Backend environment variables

Copy the example env file:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and set:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/team_fs_02?schema=public"
JWT_SECRET="your-long-random-secret"
```

---

### 4) Run Prisma migrations

From the repository root:

```bash
npm run backend:prisma:migrate
```

---

### 5) Frontend environment variables (optional)

Copy:

```bash
cp frontend/.env.example frontend/.env
```

Default is usually fine:

```env
VITE_API_URL="http://localhost:8080"
```

---

### 6) Start the app

From the repository root:

```bash
npm run dev
```

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:8080`

---

## Troubleshooting

### `net::ERR_CONNECTION_REFUSED` in the browser

This means the frontend can’t reach the backend on `http://localhost:8080`:

* Make sure the backend is running
* Check the backend terminal logs for startup errors
* Verify `VITE_API_URL` matches the backend port

---

## Notes

This project is kept as a reference from a previous team-based work.
If you have issues running it, check:

* `backend/.env` exists and contains a valid `DATABASE_URL`
* PostgreSQL is running and the database exists
* Prisma migrations were applied successfully

```
```
