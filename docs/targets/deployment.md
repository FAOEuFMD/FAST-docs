---
sidebar_position: 4
---

# Deployment

The application is currently deployed on Render with a staging environment accessible at:
https://milestones-dashboard-staging.onrender.com/

# ESLint Configuration

For production applications, it's recommended to enable type-aware lint rules. Update the ESLint configuration as follows:

export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  // Add recommended plugins
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ]
}

