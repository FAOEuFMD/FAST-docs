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

1.  Open DBeaver and connect to the database hosted on Amazon Web Services (AWS).
2.  From the list in `Databases`, right-click on the database you want to dump.
3.  Go to `Tools` > `Dump Database`. This will open the database dump configuration window.
4.  Select the specific database that contains the tables you want to export. Check the boxes next to the tables you wish to include in the export and click on `Next >`.
5.  Choose the folder where you want the SQL file to be saved (e.g., your Desktop).
6.  In the File Name Pattern field, enter a name for your SQL file (e.g., `DBeaver_dump.sql`).
7.  Click `START` to begin the dump process. The SQL file will be saved with the name you provided in the chosen location.
8.  Once the MySQL dump is finished (you’ll see a message like: "Task 'MySQL dump' finished at Fri Sep 27 17:42:02 CEST 2024"), manually close the configuration window and confirm the file exists in the specified location.

\*\*_Note_:
If the process fails and the SQL file is not saved in the specified location, request the file from the team and proceed with the next steps.

**II. Import the Dump into a Local Database:**

**1. Create a New Local Database:**

- Open your terminal and navigate to your project’s repository by using the `cd` command:
  `cd /path/to/your/project/repository`

- Log in to MySQL with the command: `mysql -u root -p`
- Create a new database by running:

```sql
  CREATE DATABASE local_database_name;
```

_Replace `local_database_name` with the desired name for your new database. This will be the name that appears in your MySQL database list_.

- Exit the MySQL client by typing: `EXIT;`

**2. Import the Dump into the New Local Database:**

- Import the saved SQL file (e.g., `DBeaver_dump.sql`) by running the following command:

```bash
mysql -u root -p local_database_name < /path/to/directory/DBeaver_dump.sql
```

_Replace `/path/to/directory/` with the full path to where the SQL file is located. For example_:

```
mysql -u root -p local_database_name < /Users/yourname/Desktop/DBeaver_dump.sql
```

**III. Create a New Connection in DBeaver:**

1.  Open DBeaver.
2.  Go to `Database` > `New Database Connection`.
3.  Select `MySQL` from the list of database types.
4.  Fill in the connection details as follows:

```bash
Server Host: localhost
Port: 3306
Database: local_database_name (the name in the MySQL database list)
Username: root
Password: YOUR_MySQL_PASSWORD
```

_Replace `YOUR_MySQL_PASSWORD` with your actual MySQL password. You can choose whether to save your password for future connections_.

5. Click `Test Connection` to ensure everything is set up correctly.
6. Click `Finish` to save the connection.

### **The `.env` File**

The `.env` file is a local configuration file used to store environment variables in VSCode. It is typically included in the `.gitignore` file, which means its contents are not pushed to GitHub when you push your branch. This setup ensures that sensitive information, such as database credentials, remains private and is not exposed in version control.

When pushing your branch to GitHub, you **don’t** need to modify the .env file, as it is ignored by Git.

When connecting to the dump database, ensure that the database connection in your .env file is configured with the correct settings. For the dump database, the `.env` file should be modified as follows:

```bash
DB_HOST=localhost
DB_NAME=local_database_name
DB_PASS=YOUR_MySQL_PASSWORD
```

**Switching Between Databases in DBeaver**

To switch between databases, simply comment out the settings for the database you're not using in the .env file by adding a `#` at the beginning of the relevant lines.

Reverting to the original AWS database:

1. Disconnect from the local dump database in DBeaver.
2. Connect to the original AWS database.
3. Open the .env file and uncomment the AWS database settings, while commenting out the dump database settings.

Before testing your connection and running your code, confirm that you're connected to the correct database. Look for the green tick mark next to the database name in DBeaver to ensure the connection is active and correct.

---

```

```
