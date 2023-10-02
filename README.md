# Node Typescript Server

![GitHub top language](https://img.shields.io/github/languages/top/kauefraga/node-typescript-server)
![NPM downloads](https://img.shields.io/npm/dm/create-node-typescript-server)
![GitHub's license](https://img.shields.io/github/license/kauefraga/node-typescript-server)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/kauefraga/node-typescript-server/main)

<!-- tag: downloads/execuções do cnts (create-node-typescript-server) -->

> 🧰 An awesome kickstart server with all the features you would expect, for Node + Typescript + Koa development.

### Features

- [x] Simplicity and flexibility.
- [x] Typescript out-of-box.
  - [x] Use [`tsx`](https://github.com/esbuild-kit/tsx) to develop with a blazingly fast hot-reloading.
  - [x] Use [`tsup`](https://github.com/egoist/tsup) to bundle code with no configuration.
- [x] Path aliases to clean up noisy paths, see [more explanation](docs/path-aliases.md).
- [x] Tiny and robust web framework, [Koa](https://koajs.com).
  - [x] Equipped with [Koa Router](https://www.npmjs.com/package/koa-router).

## ⬇ How to install it

```bash
pnpx create-node-typescript-server # or npx create-node-typescript-server
```

Or

1. Clone the repository
2. Copy the environment variables
3. Install the dependencies
4. Change some stuff

```bash
# (1)
git clone https://github.com/kauefraga/node-typescript-server.git {your-project-name}
cd {your-project-name}

# (2)
cp .env.example .env

# (3)
pnpm install --frozen-lockfile # or npm ci

# (4)
# You should rewrite the README for your project
# You should change the "name" in the package.json
# You probably will need to remove the example files
```

## 🗺 Getting started

### Typescript Settings

Look at [the tsconfig.json](tsconfig.json).

I highly recommend you to read those resources:

- [tsconfig cheat sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet)
- [strictest tsconfig/base](https://github.com/tsconfig/bases/blob/031273b815ff7f672c7c9057fb7d19ef363054b1/bases/strictest.json)

### Environment Variables

Look at [the .env.example](.env.example).

- `PORT`: the HTTP server port number (default: 3333).

> [!NOTE]
> Currently, i am using Node 18.17.1, therefore i choose `dotenv` package to load environment variables because it's the most stable solution. If you are reading it in the future (20.8.x LTS or above), consider removing `dotenv` and using [`node --env-file=.env`](https://nodejs.org/api/cli.html#--env-fileconfig).

### Unit Tests

Run tests:

```bash
pnpm test # or npm run test
```

Look at [the vitest config](vitest.config.ts).
Powered by [Vitest](https://vitest.dev).

## 🏗 Architecture and codebase

It's a monolithic application and you should keep it like that for this boilerplate.

Below you can see an explanation of the codebase:

- `src` - It's where our code lives.
  - `core` - Specifications and business rules will be here.
  - `http` - The HTTP thing (server, API, ...) will go here.
  - `infra` - Infrastructure stuff, such as database, migrations, cache...
- `core/domain`
  - `entities/models/schemas` - Definitions of our entities (User, Book, Post, Pet, etc...).
  - `repositories` - Interfaces and implementations of repositories.
  - `usecases` - Use cases of our application.

Where is the test folder?? You will see the tests right next of their definition/implementation.

Look at [the source code](src).

## ⭐ Recommendations

The following list has some suggestions, remember that you don't need to follow them strictly, as the codebase specifications.

- I suggest you to write git commit messages following [Gitmoji](https://github.com/carloscuesta/gitmoji) and/or [Conventional Commits](https://www.conventionalcommits.org).
- Also, configure a linter to make your codebase more consistent. Here's [a guide for eslint setup](docs/eslint.md).
- Type `npx create-node-typescript-server` on your terminal and hit enter 🧞‍♂️

<!-- fazer/procurar um middleware simples de limite de requisições

pensar sobre banco de dados, logger...

descrever a estrutura de pastas (core, http e infra -> controllers, middlewares, entities/models, repositories, usecases, migrations...) -->

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/node-typescript-server/blob/main/LICENSE) for more information.
