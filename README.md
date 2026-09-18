# Daniel Gonzalez Cuetara — Software Developer Portfolio

An English-language professional portfolio for Daniel Gonzalez Cuetara. The
site presents selected software projects, professional background, and
downloadable resumes.

## Stack

- Next.js with the App Router
- React
- TypeScript
- Tailwind CSS
- ESLint

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Deployment

- Mode: Node/Nixpacks-style deployment through Dokploy
- Runtime: Node.js 22.x and pnpm 10.10.0 through Corepack
- Install: `pnpm install --frozen-lockfile`
- Build: `pnpm build`
- Start: `pnpm start`
- Public hostname: `daniel.corex4dev.com`
- Container port: `3000` by default; the server honors the platform-provided
  `PORT` value and listens on `0.0.0.0`
- Health check: `GET /` should return HTTP `200`
- Application environment variables: none required
