# Development: Running the frontend locally

This project uses Vite + React Router. If you don't have Node installed or you'd rather use Docker, there are two options below.

## Option A — Local Node (recommended)

1. Install Node (LTS) via nvm or Homebrew:

```bash
# nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.zshrc
nvm install --lts
nvm use --lts

# or Homebrew
brew install node
```

2. Install dependencies and run dev server:

```bash
cd "$(pwd)/frontend"
npm install
npm run dev -- --host
```

Open the Local URL printed by Vite (usually http://localhost:5173).

## Option B — Docker (no Node required locally)

If you have Docker installed, you can run the frontend inside a container.

1. From the repo root, build and start the frontend service:

```bash
docker compose up --build
```

2. Open http://localhost:5173 in your browser.

Notes:

- The docker-compose mounts `./frontend` into the container so file edits are reflected instantly.
- If port 5173 is busy, change the `ports` mapping in `docker-compose.yml`.

## Troubleshooting

- If Vite chooses a different port, open the printed Local URL.
- If you see `command not found: npm`, follow Option A to install Node or use Option B with Docker.

If you run one of these and paste the terminal output here, I’ll help verify and adjust any errors.
