# Backend made with Drizzle and TypeScript

## Important commands (make sure they're ran inside `/backend` or its subfolders!)

### To be ran upon cloning repo

```bash
npm install
```

### To be ran **every time** a database schema changes, these will create new SQL files and update tables of linked database

```bash
npm run generate
npm run migrate
```

### Compile backend to JavaScript (creates/overwrites output folder `/dist`)

```bash
npm run build
```

### Spin up backend in production (run above command first)

```bash
npm run start
```

### Run in developer environment (backend will rerun on file changes)

```bash
npm run dev
```

## Environment variables

### The backend **expects an environment variable** representing the full link to a PostgreSQL database, e.g.:

```env
DATABASE_URL=postgresql://<username>:@<database url>:<port>/<database name>
```
