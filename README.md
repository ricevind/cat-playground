# Cats playground

### 1. Frontend section:

### ISSUES

#### x-prepare script

The `x-prepare` script in `package.json` is intended to run `npx simple-git-hooks` to set up git hooks automatically. However, this does **not** work until [simple-git-hooks issue #132](https://github.com/toplenboren/simple-git-hooks/issues/132) is fixed.

**Workaround:**
Copy the `pre-commit` hook from the `.git/hooks` folder in `ui` to the `.git/hooks` folder in the root of the repo after installing dependencies.


### 2. Backend section:

Before starting the application:
 - get `db.properties` file from one of devs and put it into your project root

Run the following commands in Maven Tool:
#### Build:
```maven
mvn -f backend/pom.xml clean compile
```

#### Run tests:
```maven
mvn -f backend/pom.xml clean verify
```

#### Start application:
```maven
mvn -f backend/pom.xml spring-boot:run
```
