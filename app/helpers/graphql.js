export function typeDefs(nodes) {
  let typeString = nodes
    .filter(node => node.schemas.types)
    .map(node => node.schemas.types)
    .reduce((result, node) => result += node);

  let queryString = nodes
    .filter(node => node.schemas.queries)
    .map(node => node.schemas.queries)
    .reduce((result, node) => result += node);

  let mutationString = nodes
    .filter(node => node.schemas.mutations)
    .map(node => node.schemas.mutations)
    .reduce((result, node) => result += node);

  // let subscriptionString = nodes
  //   .filter(node => node.schemas.subscriptions)
  //   .map(node => node.schemas.subscriptions)
  //   .reduce((result, node) => result += node);

  return `
  ${ typeString }

  type Query {
    ${ queryString }
  }

  type Mutation {
    ${ mutationString }
  }
  `
}

export function resolvers(nodes) {
  const Query = nodes.reduce((result, node) => Object.assign(result, node.resolvers.queries), {});
  const Mutation = nodes.reduce((result, node) => Object.assign(result, node.resolvers.mutations), {});
  // const Subscription = nodes.reduce((result, node) => Object.assign(result, node.resolvers.subscriptions), {});
  const resolvers = nodes.reduce((result, node) => Object.assign(result, node.resolvers.types), {});

  return {
    Query,
    Mutation,
    ...resolvers
  };
}