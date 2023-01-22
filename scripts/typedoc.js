const execa = require('execa');

const { readdirSync } = require('node:fs');
const { resolve: resolvePath } = require('node:path');

const { Listr } = require('listr2');

const packagesFolder = resolvePath(__dirname, '../', 'packages/');
const packagesList = readdirSync(packagesFolder);

function getCommands() {
	const commands = [];

	packagesList.forEach((package) => {
		const packageFolder = resolvePath(packagesFolder, package);

		if (readdirSync(packageFolder).length === 0) return;

		const srcFolder = resolvePath(packageFolder, 'src/');
		const docsFolder = resolvePath(packageFolder, 'docs/');

		const commandArgs = [
			'--plugin',
			'typedoc-plugin-markdown',
			'--tsconfig',
			resolvePath(packageFolder, 'tsconfig.json'),
			'--out',
			docsFolder,
			resolvePath(srcFolder, 'index.ts')
		];

		commands.push('pnpm typedoc ' + commandArgs.join(' '));
	});

	return commands;
}

const commandsList = getCommands();

const tasks = new Listr({
	title: `Generating documentation for ${commandsList.length} packages`,
	task: (ctx, task) => {
		const subprocess = execa(commandsList.join(' && '));

		subprocess.stdout.pipe(task.stdout());

		return subprocess;
	}
});

try {
	tasks.run();
} catch (e) {
	console.error(e);
}
