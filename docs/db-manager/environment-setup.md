---
sidebar_position: 4
---

# Environment setup

## Prerequisites
Node.js

npm (Node Package Manager)

Git

## Installation Steps
1-Clone the repository:

```bash
git clone https://github.com/FAOEuFMD/db-manager.git
```

2-Set up the client:
```bash
cd db-manager/client
npm install
```

3-Set up the server:
```bash
cd ../server
npm install
```

4-Database Configuration:
Follow the database setup guide at from step 2 using the dumps provided: 
https://eufmd-fast-docs.onrender.com/blog/testing-environment

The App uses 4 databases db_manager, PCP, RMT and db_training. You must import all 4 databases on your local mysql. (Dumps are on the project) Name them exactly the same to avoid connectivity issues.  You will find a .env.example with all the variables needed and the right DB names for each one. Copy paste the .env.example and change only your local user and password credentials.
