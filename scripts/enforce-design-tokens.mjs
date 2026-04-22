import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const scanDir = path.join(rootDir, 'src', 'app');
const allowedPattern = /[\\/]src[\\/]material-theme\.scss$/;
const forbiddenPattern = /--mat-sys-|--mdc-/g;

async function listScssFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const resolved = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listScssFiles(resolved);
      }
      return entry.isFile() && resolved.endsWith('.scss') ? [resolved] : [];
    }),
  );
  return files.flat();
}

function toPosix(inputPath) {
  return inputPath.replace(/\\/g, '/');
}

async function main() {
  const scssFiles = await listScssFiles(scanDir);
  const violations = [];

  for (const filePath of scssFiles) {
    if (allowedPattern.test(filePath)) {
      continue;
    }

    const content = await readFile(filePath, 'utf8');
    let match;
    while ((match = forbiddenPattern.exec(content)) !== null) {
      violations.push({
        file: toPosix(path.relative(rootDir, filePath)),
        token: match[0],
      });
    }
    forbiddenPattern.lastIndex = 0;
  }

  if (violations.length > 0) {
    console.error('Design token enforcement failed.');
    console.error('Use app tokens (`--app-*`) in feature/layout styles.');
    console.error('Direct `--mat-sys-*` and `--mdc-*` usage is only allowed in `src/material-theme.scss`.');
    for (const violation of violations) {
      console.error(`- ${violation.file}: ${violation.token}`);
    }
    process.exit(1);
  }

  console.log('Design token enforcement passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
