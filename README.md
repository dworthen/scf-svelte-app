This is a fork of [sveltejs/template](https://github.com/sveltejs/template) and combines functionality with [sveltejs/template-webpack](https://github.com/sveltejs/template-webpack). This repo has the ability scaffold out pojects using [Rollup](https://rollupjs.org/guide/en/) or [webpack](https://webpack.js.org/).

*Psst — looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a SCF template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/dworthen/scf-svelte-app.

```shell
npx scf dworthen/svelte-app myApp -s
```

The scaffolding process will prompt for which build tool to use. [Rollup](https://rollupjs.org/guide/en/) or [webpack](https://webpack.js.org/).

View [dworthen/scf](https://github.com/dworthen/scf) for more information on project scaffolding with SCF.

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```shell
cd myApp
npm install
```

...then start the dev process:

```shell
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
