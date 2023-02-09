/**
 * A simple script to move natives files to their folder
 */

const { extname, join: joinPaths } = require('node:path');
const { accessSync, readdirSync, statSync, writeFileSync } = require('node:fs');

async function clean() {
    // Check all natives module in the folder
    const folderContent = readdirSync(__dirname);

    const nativeModules = folderContent.filter(path => path === '.node');
    const packages = folderContent.filter(path => statSync(joinPaths(__dirname, path)).isDirectory());

    // Create new path for news module

    // Edit olds module

    // Clean natives module in the folder




    const nativePath = 'termifier-core.win32-x64-msvc.node';

    // Test if the package folder is already created
    // if (!accessSync(dir))  
};

// Run
(async () => clean())();