---
sidebar_position: 3
---

# Environment setup

How do we run the project locally?

## Dependencies

Run `npm install` on the root folder to install dependencies related to Express.

`cd client` and run `npm install` to install dependencies related to Vue.

The CLI Service `(@vue/cli-service)` is a development dependency. It's an npm package installed locally into every project created by @vue/cli. Therefore, you will need to run `npm install @vue/cli-service --save-dev` in your client folder to access the Vue CLI from your terminal.

If you don't have the correct Node version installed, you may encounter terminal errors. To avoid this, ensure you are running the appropriate Node version. If necessary, you can use Node Version Manager (nvm) to easily install and manage multiple versions of Node.js on the same machine.

:::tip
To check if nvm is installed, run:
`nvm --version`

If this command returns nothing, you can install nvm by running the following command for macOS or Linux:
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`

After installing, add the following lines to your ~/.bashrc, ~/.zshrc, or ~/.profile file:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

By doing this, you ensure nvm is correctly set up and ready to manage your Node.js versions.

:::

Lastly. make sure you have a linter enabled to maintain code quality. Popular choices are ESLint and Prettier.

To install ESLint, run:

```
npm install eslint --save-dev
```

To install Prettier, run:

```
npm install prettier --save-dev
```

Enabling these tools in your development environment helps ensure consistent code style and catch potential errors early.

## Backend

### Server

To start the app, you first need to spin up the server locally by running `npm start` from your root.

### Database prep

Create your `.env` file in the project directory and add

```
DB_HOST=localhost
DB_USER=root
DB_NAME=YOUR_DATABASE
DB_PASS=your_mysql_password
```

Replace `your__mysql_password` with your actual password and type `mysql -u root -p` in the terminal to access the local MySQL client.
:::tip

It's possible you might need to update your authentication method for the root user in order to run the MySQL server. You can do this by running the below command from your terminal.

`ALTER USER 'root' @ 'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`

:::

In the MySQL terminaL, type `CREATE database tom_db;` to create a local database in MySQL.

Run `npm run migrate` in the project directory to create the tables and add data from the MySQL dump file located in `server/model` directory.

In addition to our local database connection, we also have a second connection to several databases hosted in Amazon Web Services (AWS) named `staging_db_tompilot`. You can think of this connection as the "source of the truth", as the databases within it are regularly updated by our data science team.

To facilitate testing, it is recommended to maintain active connections to both the `staging_db_tompilot` and your local `tom_db`. This setup allows you to easily switch between the two environments as needed.

For example, if a new table has been added and you're developing a feature that interacts with it, testing against the `staging_db_tompilot` would be beneficial. On the other hand, if your testing involves generating a large amount of dummy data, it is more practical to conduct these tests locally on `tom_db` to prevent cluttering the real database.

To connect to our staging database, add the following credentials to your `.env` file. These credentials will also allow you to connect to the production database named `db_tompilot`.

```
DB_HOST2="eufmd-database-1.cqodkl4vazie.eu-north-1.rds.amazonaws.com"
DB_USER2=root
DB_NAME2=staging_db_tompilot
DB_PASS2=YOUR_PASSWORD
```

## Frontend

This project is built on the Vue.js framework, specifically Vue 3. For additional reading, see the migration docs [here](https://v3-migration.vuejs.org/).

Then navigate to your client folder and run `npm run serve` to launch the app in the browser.

### Authentication

We use signed JSON Web Tokens (JWT) for user authorization, meaning that once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. For more information on how JSON Web Tokens work read more [here](https://jwt.io/introduction).

In order to use JWT add a super secret to your `.env` file.

`SUPER_SECRET=YOUR_SECRET`
