# GraphQL Starter

This is the rule how to

## How to run

```
npm install
```

or

```
yarn install
```

Edit `start.sh` with your database information

```
MYSQL_DATABASE=<db> MYSQL_HOST=<host> MYSQL_PASSWORD=<password> MYSQL_PORT=<mysql_port> MYSQL_USER=<user> PORT=<app_port> nodemon index.js
```

install Nodemon if you don't have that

```
npm install -g nodemon
```

```
sh start.sh
```

## How to add more node

Copy `app/nodes/GraphQLDefault` to other node and rename the folder.

Implement the function in type, mutation and query.

Import in `app/schema.js`

```
import NewNode from './nodes/NewNode'

const nodes = [
  ...

  NewNode,
]
```