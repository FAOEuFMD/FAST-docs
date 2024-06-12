---
sidebar_position: 4
---

# Deployment

How do we ship?

We deploy to AWS and Render with Continuous Integration and Deployment pipelines (CI/CD) using CircleCI. Configurations can be found in a `config.yml` file in the `.circleci` folder of your root.

- Deployment to Render is for **staging** and is connected to a **staging** database in AWS.&#x20;
- Deployment to AWS is for **production** only**.**&#x20;

We have three deployed sites in use:

Production – [https://eufmd-tom.com](https://eufmd-tom.com/)&#x20;

Pilot - [https://eufmd-tom-pilot.onrender.com](https://eufmd-tom-pilot.onrender.com/)&#x20;

Staging - [https://eufmd-tom-staging.onrender.com](https://eufmd-tom-staging.onrender.com/)&#x20;

## Deployment flow&#x20;

1. Push to feature branch
2. Feature merges to `staging`
3. Staging is deployed using `circleci` to Render
4. Staging is merged to `staging-pilot`&#x20;
5. Staging-pilot is deployed using `circleci` to Render
6. Staging-pilot is merged to `main`&#x20;
7. Main is deployed using `circleci` to AWS (production)
