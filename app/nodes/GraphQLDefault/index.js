import mutations from './mutations';
import queries from './queries';
import types from './types';

module.exports = {
  schemas: {
    types: types.schema,
    queries: queries.schema,
    mutations: mutations.schema,
  },
  resolvers: {
    types: types.resolver,
    queries: queries.resolver,
    mutations: mutations.resolver,
  }
};