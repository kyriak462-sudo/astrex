# ASTREX

Интерактивная образовательная платформа по трейдингу и криптовалютам —
«Duolingo для трейдинга». Архитектура и дизайн-решения описаны в
[ARCHITECTURE.md](./ARCHITECTURE.md).

## Быстрый старт

```bash
npm install
cp .env.example .env   # заполнить переменные, см. ниже
npx prisma generate
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

## Переменные окружения

| Переменная | Назначение |
| --- | --- |
| `DATABASE_URL` | Строка подключения PostgreSQL (Vercel Postgres / Neon / Supabase) |
| `AUTH_SECRET` | Секрет для Auth.js, сгенерировать: `npx auth secret` |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | OAuth-креды Google (не обязательны для входа по email/паролю) |

## База данных

Схема данных — `prisma/schema.prisma`. После настройки `DATABASE_URL`:

```bash
npx prisma migrate dev --name init
```

Prisma 7 использует driver adapters вместо встроенного query-движка —
подключение к Postgres идёт через `@prisma/adapter-pg` (см. `src/lib/db.ts`).

## Деплой на Vercel

1. Создать Postgres-базу (Vercel Postgres, Neon или Supabase) и указать
   `DATABASE_URL` в переменных окружения проекта на Vercel.
2. Указать `AUTH_SECRET` (и опционально Google OAuth креды).
3. Запустить `npx prisma migrate deploy` при первом деплое.
