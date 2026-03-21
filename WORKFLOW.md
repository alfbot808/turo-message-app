# Development Workflow

## Branches

- `main` → Live production site (Vercel auto-deploys from here)
- `dev` → Safe space to experiment and break things

## How to Work

### Making Changes
```bash
# Start from dev branch
git checkout dev

# Make your changes, then commit
git add .
git commit -m "what you changed"
git push

# Test on dev (if needed), then merge to main
git checkout main
git merge dev
git push
```

### What Goes Where

| Use `dev` branch | Use `main` branch |
|-----------------|-------------------|
| Testing new features | Live site code |
| Experimenting | Bug fixes for production |
| Learning/playing around | Final validated changes |

**Rule:** Never push broken code to `main`. That's what `dev` is for.

## Auto-Deploy

Vercel watches `main` branch. Every push to `main` = automatic deploy to live site.

## Emergency Fix

If you break `main` and need to fix fast:
```bash
git checkout main
git revert HEAD  # undoes last commit
git push
```
