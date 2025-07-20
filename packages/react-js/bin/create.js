#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Helper function to log with colors
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateProjectName(name) {
  if (!name) {
    return 'Project name is required';
  }

  if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
    return 'Project name can only contain letters, numbers, hyphens, and underscores';
  }

  if (fs.existsSync(name)) {
    return `Directory "${name}" already exists`;
  }

  return null;
}

function copyDirectory(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function updatePackageJson(projectPath, projectName) {
  const packageJsonPath = path.join(projectPath, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Update name and remove template-specific fields
    packageJson.name = projectName;
    delete packageJson.publishConfig;
    delete packageJson.files;

    // Reset version
    packageJson.version = '0.1.0';

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    log(`📝 Updated package.json with project name: ${projectName}`, 'blue');
  }
}

function installDependencies(projectPath) {
  log(`📦 Installing dependencies...`, 'blue');

  try {
    // Detect package manager
    const hasYarnLock = fs.existsSync(path.join(projectPath, 'yarn.lock'));
    const hasPnpmLock = fs.existsSync(path.join(projectPath, 'pnpm-lock.yaml'));

    let installCommand;
    if (hasPnpmLock) {
      installCommand = 'pnpm install';
    } else if (hasYarnLock) {
      installCommand = 'yarn install';
    } else {
      installCommand = 'npm install';
    }

    execSync(installCommand, {
      cwd: projectPath,
      stdio: 'inherit'
    });

    log(`✅ Dependencies installed successfully`, 'green');
  } catch (error) {
    log(`⚠️  Failed to install dependencies automatically`, 'yellow');
    log(`Please run 'npm install' manually in your project directory`, 'yellow');
  }
}

async function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName || projectName === '--help' || projectName === '-h') {
    log('\n🧙‍♂️ Boilerplate Wizard - React + JavaScript\n', 'cyan');
    log('Usage:', 'bright');
    log('  npm create bp-wizard-react-js <project-name>', 'blue');
    log('  npx create-bp-wizard-react-js <project-name>', 'blue');
    log('\nExample:', 'bright');
    log('  npm create bp-wizard-react-js my-react-app', 'green');
    return;
  }

  // Validate project name
  const nameError = validateProjectName(projectName);
  if (nameError) {
    log(`❌ ${nameError}`, 'red');
    return process.exit(1);
  }

  try {
    log(`\n🧙‍♂️ Creating React + JavaScript project: ${projectName}\n`, 'cyan');

    // Set up paths
    const templatePath = path.join(__dirname, '..', 'template');
    const targetPath = path.resolve(projectName);

    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template not found at ${templatePath}`);
    }

    // Create project directory
    log(`📁 Creating project directory: ${projectName}`, 'blue');
    fs.mkdirSync(targetPath, { recursive: true });

    // Copy template files
    log(`📋 Copying template files...`, 'blue');
    copyDirectory(templatePath, targetPath);

    // Update package.json
    updatePackageJson(targetPath, projectName);

    // Install dependencies
    installDependencies(targetPath);

    // Success message
    log(`\n🎉 Successfully created ${projectName}!`, 'green');
    log(`📁 Template: React + JavaScript\n`, 'blue');

    log('Next steps:', 'bright');
    log(`  cd ${projectName}`, 'cyan');
    log(`  npm run dev`, 'cyan');
    log('\nHappy coding! 🚀', 'magenta');

  } catch (error) {
    log(`❌ Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

main().catch((error) => {
  log(`❌ Fatal error: ${error.message}`, 'red');
  process.exit(1);
});
