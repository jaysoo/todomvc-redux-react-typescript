const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const cp = require('child_process');
const buildDir = path.resolve(process.cwd(), 'build');
const isProd = process.env.NODE_ENV === 'production'

if (!fs.existsSync(buildDir)) {
  console.log(chalk.yellow('Build folder not found. Running webpack for you...'));
  cp.execSync(`npm run build`);
} else {
  isProd && console.log(chalk.yellow('Starting from previous build. If you want to create a new build, run `npm run build` first.'));
}

require("./setup")({
  outputPath: buildDir,
  publicPath: '/',
});
