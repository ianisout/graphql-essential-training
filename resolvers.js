class Product {
  constructor(id, { name, desc, price, soldOut, stores }) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.soldOut = soldOut;
    this.stores = stores;
  }
}

const productDatabase = {};

const resolvers = {
  getProducts: ({ id }) => {
    return new Product(id, productDatabase[id]);
  },

  createProduct: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    productDatabase[id] = input;
    return new Product(id, input);
  },
};

export default resolvers;
