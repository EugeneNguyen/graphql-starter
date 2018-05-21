# GraphQL Starter

## How to run

```
npm install
```

or

```
yarn install
```

then

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