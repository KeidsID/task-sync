/** @type {import('lint-staged').Config} */
const config = {
  "apps/backend/{src,test}/**/*.{ts,js,cjs}": ["npm run lint:be"],
};

export default config;
