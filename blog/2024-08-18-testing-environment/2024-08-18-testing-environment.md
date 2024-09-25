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

**1. Create the Database Dump:**

**Option A: Using DBeaver**

1.  Open DBeaver and connect to the database you want to export.
2.  From the Databases list, right-click on the database you want
    to dump.
3.  Select `Tools` > `Dump Database`. This will open the database dump configuration window.
4.  Select the tables you want to export by checking the boxes next to them.
5.  Choose the output folder where you want the SQL file to be saved and a name for the file.
6.  Start the dump process. The SQL file (e.g., `dump-db_manager-202408081154.sql`) will be saved in the location you specified.

**Option B: Using the Terminal**

1.  Open your terminal.
2.  Run the following command: (`mysqldump -u root -p THE_DATABASE_NAME > DATABASE_DUMP_NAME.sql`)
3.  This will create an SQL file (`DATABASE_DUMP_NAME.sql`) in the current directory. This file contains all the SQL commands necessary to recreate the original database, including its structure and data.

**2. Import the Dump into a Local Database:**

**1. Create a New Local Database:**

- Open your terminal.
- Log in to MySQL with the command: `mysql -u root -p`
- Create a new database by running: `CREATE DATABASE LOCAL_DATABASE_DUMP_NAME;`
- Exit the MySQL client by typing: `EXIT;`

**2. Import the Dump:**

1.  **If Using a DBeaver Export:**

- Import the dump file (e.g., `dump-db_manager-202408081154.sql`) by running: `mysql -u root -p LOCAL_DATABASE_DUMP_NAME < dump-db_manager-202408081154.sql`

2.  **If Using `mysqldump`:**

- Import the dump file (e.g., `database_dump_name.sql`) by running: `mysql -u root -p LOCAL_DATABASE_DUMP_NAME < DATABASE_DUMP_NAME.sql`

**3. Create a New Connection in DBeaver:**

1.  Open DBeaver.
2.  Go to `Database` > `New Database Connection`.
3.  Select `MySQL` from the list.
4.  Fill in the connection details
5.  Fill in the connection details:

Server Host: localhost
Port: 3306
Database: local_database_dump_name
Username: root
Password: YOUR_MySQL_PASSWORD

(Note: Port 3306 is the default port for MySQL)
(Note: alternative for server host: 127.0.0.1)

5.  Click `Test Connection` to ensure everything is set up correctly.
6.  Click `Finish` to save the connection.

### **The `.env` File**

1.  The `.env` file is a local configuration file used to store environment variables in VSCode. It is typically included in the `.gitignore` file, which means its contents are not pushed to GitHub when you push your branch.
2.  This setup ensures that sensitive information, such as database credentials, remains private and is not exposed in version control.
3.  When pushing your branch to GitHub, you don’t need to modify the `.env` file, as it is ignored by Git.
4.  If you need to switch back to using the original database, you will need to update the `.env` file with the correct values for the AWS connection.

---
