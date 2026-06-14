import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const repository = process.env.GITHUB_REPOSITORY ?? env.GITHUB_REPOSITORY;
  const repositoryName = repository?.split('/')[1];
  const isUserPagesRepository = repositoryName?.endsWith('.github.io');
  const base =
    process.env.VITE_BASE_PATH ??
    env.VITE_BASE_PATH ??
    (process.env.GITHUB_ACTIONS === 'true' &&
    repositoryName &&
    !isUserPagesRepository
      ? `/${repositoryName}/`
      : '/');

  return {
    base,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
