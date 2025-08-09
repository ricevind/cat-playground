A playground to play with

### ISSUES

#### x-prepare script

The `x-prepare` script in `package.json` is intended to run `npx simple-git-hooks` to set up git hooks automatically. However, this does **not** work until [simple-git-hooks issue #132](https://github.com/toplenboren/simple-git-hooks/issues/132) is fixed.

**Workaround:**
Copy the `pre-commit` hook from the `.git/hooks` folder in `ui` to the `.git/hooks` folder in the root of the repo after installing dependencies.
