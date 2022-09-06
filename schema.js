import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Product {
    id: ID!
    name: String!
    desc: String
    price: Float
    soldOut: Boolean
    stores: [Store]!
  }

  type Store {
    store: String
  }

  type Query {
    product: Product
  }

  type StoreInput {
    store: String
  }

  input ProductInput {
    id: ID
    name: String
    desc: String
    price: Float
    soldOut: Boolean
    stores: [StoreInput]!
  }

  type Mutation {
    createProduct(input: ProductInput): Product
  }
`);

export default schema;
