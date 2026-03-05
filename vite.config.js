import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const homepage = process.env.npm_package_homepage;

const getBasePath = () => {
  if (process.env.GITHUB_PAGES !== 'true') {
    return '/';
  }

  if (homepage) {
    try {
      const path = new URL(homepage).pathname;
      return path.endsWith('/') ? path : `${path}/`;
    } catch {
      // Fallback to repository-based path when homepage is not a valid URL.
    }
  }

  return repository ? `/${repository}/` : '/playfix/';
};

export default defineConfig({
  plugins: [react()],
  base: getBasePath()
});
