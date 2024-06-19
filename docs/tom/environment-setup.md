---
sidebar_position: 3
---

# Environment setup

How do we run the project locally?

## Backend

### Server

To start the app, you first need to spin up the server locally by running `npm start` from your root.

### Database prep

Create your `.env` file in the project directory and add

```
DB_HOST=localhost
DB_USER=root
DB_NAME=YOUR_DATABASE
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` in the terminal to access MySQL and type your password.

:::tip

It's possible you might need to update your authentication method for the root user in order to run the MySQL server. You can do this by running the below command from your terminal.

`ALTER USER 'root' @ 'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`

:::

In the MySQL terminaL, type `CREATE database TOM;` to create a database in MySQL.

Run `npm run migrate` in the project directory to create the tables and add data from a MySQL dump file located in `server/model` directory.

In addition to our local database, we also have a second database hosted in Amazon Web Services (AWS) named `staging_db_tompilot`. You can think of this database as the "source of the truth", as it is regularly updated by our data science team. With that in mind, we want to try to make sure that the structure of our local database is the same as that of our `staging_db_tompilot` database to ensure that our frontend can support any new tables.

To connect to our staging database add the following credentials to your `.env` file.

```
DB_HOST2="eufmd-database-1.cqodkl4vazie.eu-north-1.rds.amazonaws.com"
DB_USER2=root
DB_NAME2=staging_db_tompilot
DB_PASS2=YOUR_PASSWORD
```

## Frontend

This project is built on the Vue.js framework, specifically Vue 3. For additional reading, see the migration docs [here](https://v3-migration.vuejs.org/).

You can use the Vetur extension in VSCode for formatting, linting and error-checking. It's possible you may need to add a `jsconfig.json` to your root in order to satisfy Vetur requirements. You can use the below as an example.

```jsonc
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["esnext", "dom"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

Then navigate to your client folder and run `npm run serve` to launch the app in the browser.

## Authentication

We use signed JSON Web Tokens (JWT) for user authorization, meaning that once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. For more information on how JSON Web Tokens work read more [here](https://jwt.io/introduction).

In order to use JWT add a super secret to your `.env` file.

`SUPER_SECRET=YOUR_SECRET`
