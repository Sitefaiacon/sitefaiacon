#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('[v0] Updating pnpm-lock.yaml...');

try {
  execSync('pnpm install --no-frozen-lockfile', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit'
  });
  console.log('[v0] Lock file updated successfully!');
} catch (error) {
  console.error('[v0] Error updating lock file:', error.message);
  process.exit(1);
}
