/** @type {import('lint-staged').Config} */
const config = {
  "packages/shared/src/*.{ts,js,cjs}": ["npm run lint:shared"],
  "apps/backend/src/**/*.{ts,js,cjs}": ["npm run lint:be"],
  "apps/frontend/{app,src}/*.{ts,tsx,js,cjs}": ["npm run lint:fe"],
};

export default config;
