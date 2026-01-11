````md
# OLD TEAM PROJECT – Legacy Team Work (React + Express)

⚠️ **IMPORTANT:** This repository is **NOT a new/active product**.  
It is an old team project** that I participated in as a contributor.  
It’s kept here mainly as a reference and to remain runnable locally.

Frontend: **React + Vite**. Backend: **Express + Prisma + PostgreSQL**.

## ✅ Key features

* **Auth:** register + login (JWT)
* **Main pages:** React SPA pages with API-backed data
* **Backend API:** Express REST endpoints
* **Database:** PostgreSQL via Prisma

## 🧰 Requirements

* Node **18+**
* npm **9+**
* PostgreSQL (**14+ recommended**)

## 📦 Installation

### Backend

```bash
cd backend
npm install
````

### Frontend

```bash
cd frontend
npm install
```

## 🔐 Environment variables

### Backend `.env` (backend root)

Create `backend/.env`:

```env
PORT=8080
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<db_name>?schema=public"
JWT_SECRET="change_me"
```

### Frontend `.env` (frontend root)

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:8080
```

## 🗄️ Database (Prisma + Postgres)

Backend uses PostgreSQL via Prisma (`DATABASE_URL`).

### Migrate / Prisma

```bash
cd backend
npx prisma migrate dev
# (if needed) npx prisma generate
```

## 🚀 Run (dev)

### 1) Backend

```bash
cd backend
npm run dev
# API: http://localhost:8080
```

### 2) Frontend

```bash
cd frontend
npm run dev
# Vite prints the local URL (usually http://localhost:5173)
```

## ℹ️ Notes

* This repository is kept as a reference from a previous team-based project.
* If the backend fails at startup, double-check:

  * `backend/.env` exists
  * `DATABASE_URL` is correct
  * PostgreSQL is running and the DB exists
  * Prisma migrations have been applied

---

## 🧠 AI contribution

* This README was written based on the project structure, **edited with AI assistance**.
