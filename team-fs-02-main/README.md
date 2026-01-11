# Team FS 02 – Fullstack (Vite + Express + Prisma + PostgreSQL)

## Követelmények
- **Node.js 18+** (ajánlott: 20)
- **PostgreSQL 14+** (Docker nélkül is jó)

## Gyors indítás (1x beállítás)
1) Klónozd / csomagold ki a projektet, majd a repo gyökerében futtasd:

```bash
npm install
```

> Ez automatikusan telepíti a `backend` és `frontend` függőségeit is.

2) **PostgreSQL adatbázis létrehozás**
- Hozz létre egy üres adatbázist, pl. `team_fs_02`.
- (Opcionális) Hozz létre felhasználót/jelszót, vagy használd a meglévő postgres usert.

3) **Backend .env**
- Másold le a `backend/.env.example` fájlt `backend/.env` néven
- Állítsd be a saját adataidra:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/team_fs_02?schema=public"
JWT_SECRET="valami-hosszabb-random-string"
```

4) **Adatbázis migráció (Prisma)**
```bash
npm run backend:prisma:migrate
```

5) **Frontend .env**
- Másold le a `frontend/.env.example` fájlt `frontend/.env` néven (alapból jó)
```env
VITE_API_URL="http://localhost:8080"
```

## Fejlesztői futtatás
A repo gyökerében:

```bash
npm run dev
```

- Frontend: Vite (általában) `http://localhost:5173`
- Backend: Express `http://localhost:8080`

## Hasznos parancsok
```bash
# Prisma Studio
npm run backend:prisma:studio

# Lint mindkettőre
npm run lint
```

## Megjegyzés
Ha a backend induláskor azt írja, hogy hiányzó environment változó (pl. DATABASE_URL),
akkor ellenőrizd, hogy a `backend/.env` létezik-e és ki van-e töltve.
