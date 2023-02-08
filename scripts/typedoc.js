const chalkPipe = require('chalk-pipe');
const execa = require('execa');

const { readdirSync } = require('node:fs');
const { resolve: resolvePath } = require('node:path');

const { Listr } = require('listr2');

const packagesFolder = resolvePath(__dirname, '../', 'packages/');
const packagesList = readdirSync(packagesFolder);

function getTasks() {
	const tasks = [];

	packagesList.forEach((package) => {
		const packageFolder = resolvePath(packagesFolder, package);

		if (readdirSync(packageFolder).length === 0) return;

		const srcFolder = resolvePath(packageFolder, 'src/');
		const docsFolder = resolvePath(packageFolder, 'docs/');

		const commandArgs = [
			'--plugin',
			'typedoc-plugin-markdown',
			'--tsconfig',
			resolvePath(packageFolder, 'tsconfig.doc.json'),
			'--out',
			docsFolder,
			resolvePath(srcFolder, 'index.ts')
		];

		tasks.push({
			title: `Generating documentation for ${chalkPipe('yellow')(packageFolder.split('\\').slice(-1)[0])}`,
			task: (ctx, task) => {
				const subprocess = execa('pnpm typedoc ' + commandArgs.join(' '));
				subprocess.stdout.pipe(task.stdout());

				return subprocess;
			}
		});
	});

	return tasks;
}

try {
	new Listr(getTasks()).run();
} catch (e) {
	console.error(e);
}
