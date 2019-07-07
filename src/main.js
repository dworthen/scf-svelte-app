import ${files["src/App.svelte"].__path.name} from './${files["src/App.svelte"].__path.base}';

const app = new ${files["src/App.svelte"].__path.name}({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;