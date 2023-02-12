/**
 * A simple script to move natives files to their folder
 */

const { extname, join: joinPaths } = require('node:path');
const { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, unlinkSync, readFileSync, writeFileSync } = require('node:fs');

const _ = require('underscore');

// Constants
const rootDir = joinPaths(__dirname, '../');
const basePackage = joinPaths(rootDir, 'assets/', 'native/', 'base_package/');

async function clean() {
	// Check all natives module in the folder
	const folderContent = readdirSync(__dirname);

	const nativeModules = folderContent.filter((path) => extname(path) === '.node');
	const packages = folderContent.filter((path) => statSync(joinPaths(__dirname, path)).isDirectory());

	const filesToTrash = _.difference(folderContent, ['.gitignore', 'cleaner.js'], packages);

	nativeModules.forEach((nativeModule) => {
		const packageName = nativeModule.replace('termifier-core.', 'termifier-core-').replace('.node', '');
		const packagePlatform = nativeModule.replace('termifier-core.', '').replace('.node', '').split('-');

		const packageOs = packagePlatform[0];
		const packageCpu = packagePlatform[1];

		const packageFolder = joinPaths(__dirname, packageName);
		const packageNativePath = joinPaths(packageFolder, nativeModule);

		if (!existsSync(packageFolder)) {
			mkdirSync(packageFolder);
			console.log(`[INFO] dir ${packageFolder} was created`);

			readdirSync(basePackage).forEach((file) => {
				if (file === 'package.json') {
					const packageJson = readFileSync(joinPaths(basePackage, file));

					const packageJsonContent = packageJson.toString()
						.replace('{PACKAGE_NAME}', packageName)
						.replace('{PACKAGE_OS}', packageOs)
						.replace('{PACKAGE_CPU}', packageCpu)
						.replace(new RegExp('{NATIVE_FILE}', 'g'), `./${nativeModule}`)

					console.log(packageJsonContent);

					writeFileSync(joinPaths(packageFolder, 'package.json'), packageJsonContent, { 'encoding': 'utf-8' });
					console.log(`[INFO] file package.json in ${basePackage} dir was writed`);

					return;
				}

				copyFileSync(joinPaths(basePackage, file), joinPaths(packageFolder, file));
				console.log(`[INFO] file ${file} in ${basePackage} dir was copied to ${packageFolder}`);
			});

			copyFileSync(joinPaths(__dirname, nativeModule), packageNativePath);
			console.log(`[INFO] file ${nativeModule} in ${__dirname} dir was copied to ${packageFolder}`);
		} else {
			if (existsSync(packageNativePath)) {
				unlinkSync(packageNativePath);
				copyFileSync(joinPaths(__dirname, nativeModule), packageNativePath);
				console.log(`[INFO] file ${nativeModule} in ${packageFolder} dir was edited with ${nativeModule} in ${__dirname} dir`);
			} else {
				copyFileSync(joinPaths(__dirname, nativeModule), packageNativePath);
				console.log(`[INFO] file ${nativeModule} in ${__dirname} dir was copied to ${packageFolder}`);
			}
		}
	});

	// Clean files
	filesToTrash.forEach((fileToTrash) => {
		unlinkSync(joinPaths(__dirname, fileToTrash));
		console.log(`[INFO] file ${fileToTrash} in ${__dirname} dir was deleted`);
	});
}

// Run
(async () => clean())();
