---
slug: testing-environment
title: Set up a testing environment
authors:
  name: Ioanna Papaioannou
  title: Full Stack Developer @ EuFMD
  url: https://github.com/Papioani
  image_url: https://github.com/Papioani.png
tags: [testing, process, database, fake, dump]
---

### Set up a testing environment with a fake or mock database to test your code without affecting production data.

#### Introduction

Set up a testing environment where you can use a fake or mock database to test your code without affecting your production data. This is a common practice in development to ensure that your tests are isolated and do not interfere with real data.

Here's a step-by-step guide on how you can achieve this:

**I. Create the Database Dump:**

**Option A: Using DBeaver**

1.  Open DBeaver and connect to the database you want to export.
2.  From the list in `Databases`, right-click on the database you want to dump.
3.  Go to `Tools` > `Dump Database`. This will open the database dump configuration window.
4.  Select the specific database that contains the tables you want to export. Check the boxes next to the tables you wish to include in the export.
5.  Choose the output folder where you want the SQL file to be saved and enter a name for the file in the File Name Pattern field (e.g. `DBeaver_export_dump.sql`).
6.  Click START to begin the dump process. The SQL file will be saved with the name you provided in the specified location.
7.  When the MySQL dump progress is over (you´ll get a message like : "Task 'MySQL dump' finished at Fri Sep 27 17:42:02 CEST 2024"), close the configuration window manually and confirm that the file exists in the desired location.

**Option B: Using the Terminal**

1.  Open your terminal.
2.  Use the `cd` command to navigate into your project folder
3.  Run the following command:

```sql
mysqldump -u root -p the_database_name > database_dump_name.sql

/*
Replace `the_database_name` with the name of the database you want to dump, and `database_dump_name` with the desired name for your dump file.
*/
```

4.  This command will create an SQL file (e.g.`database_dump_name.sql`) in the root directory where the core files of your project are stored. This file contains all the SQL commands necessary to recreate the original database, including its structure and data.

**II. Import the Dump into a Local Database:**

**1. Create a New Local Database:**

- Open your terminal.
- Log in to MySQL with the command: `mysql -u root -p`
- Create a new database by running:

```sql
  CREATE DATABASE local_database_dump_name;

  /*
Replace `local_database_dump_name` with the name you want to assign to the new database. This name will appear in your MySQL databases, and you can choose any name you prefer.
*/
```

- Exit the MySQL client by typing: `EXIT;`

**2. Import the Dump into the New Local Database:**

**Option A. If You Used DBeaver to Create the Dump:**

- Import the saved SQL file (e.g. `DBeaver_export_dump.sql`) by running:

```bash
mysql -u root -p local_database_dump_name < DBeaver_export_dump.sql
```

**Option B. If You Used the Terminal to Create the Dump:**

- Import the dump file (e.g.`database_dump_name.sql`) by running:

```bash
mysql -u root -p local_database_dump_name < database_dump_name.sql
```

Note: If you don’t want to save the dump file in the current working directory (the directory you're in when you run the command), provide the full path to the file, like this:

```bash
mysql -u root -p local_database_dump_name < /path/to/directory/database_dump_name.sql

```

**III. Create a New Connection in DBeaver:**

1.  Open DBeaver.
2.  Go to `Database` > `New Database Connection`.
3.  Select `MySQL` from the list.
4.  Fill in the connection details

```bash
Server Host: localhost
Port: 3306;
Database: local_database_dump_name;
Username: root;
Password: YOUR_MySQL_PASSWORD;
```

```js
/*
Replace `YOUR_MySQL_PASSWORD` with your actual MySQL password. You can choose whether to save your password for future connections.

*/
```

5. Click `Test Connection` to ensure everything is set up correctly.
6. Click `Finish` to save the connection.

Note: Port 3306 is the default port for MySQL.

### **The `.env` File**

The `.env` file is a local configuration file used to store environment variables in VSCode. It is typically included in the `.gitignore` file, which means its contents are not pushed to GitHub when you push your branch. This setup ensures that sensitive information, such as database credentials, remains private and is not exposed in version control.

When pushing your branch to GitHub, you **don’t** need to modify the .env file, as it is ignored by Git.

When connecting to the dump database, ensure that the database connection in your .env file is configured with the correct settings. For the dump database, the `.env` file should be modified as follows:

```bash
DB_HOST=localhost
DB_NAME=local_database_dump_name;
DB_PASS=YOUR_MySQL_PASSWORD
```

**Switching Between Databases in DBeaver**

To switch between the original database and the dump database in DBeaver, you can maintain separate settings for each connection (e.g., one for the original database and one for the local dump database).

Comment out the settings for the database you're not using by adding # at the beginning of those lines.

If you need to revert to the original database:

1. Disconnect from the current database in DBeaver.
2. Connect to the original database in DBeaver.
3. Open the .env file and uncomment the relevant settings for the original AWS connection (remember to comment out the dump database settings).

Before testing your connection and running your code, confirm that you're connected to the correct database. Look for the green tick mark next to the database name in DBeaver to ensure the connection is active and correct.

---
