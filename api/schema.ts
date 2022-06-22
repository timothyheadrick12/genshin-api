// api/schema.ts
import {makeSchema, connectionPlugin} from 'nexus';
import {join} from 'path';
import * as types from './graphql/index';

export const schema = makeSchema({
  types,
  plugins: [connectionPlugin()],
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '..', 'schema.graphql'), // 3
  },
});
