import mongoose from 'mongoose';
// import { sequelize as s, DataTypes } from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets', {
  useNewUrlParser: true,
});

const widgetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
  },
  soldOut: {
    type: String,
  },
  inventory: {
    type: String,
  },
  stores: {
    type: Array,
  },
});

const Widgets = mongoose.model('widgets', widgetSchema);

/* // Sequelize connection

// creates a db sqlite inside of the memory of local system
const sequelize = new Sequelize('sqlite::memory');

const Categories = sequelize.define('categories', {
  category: DataTypes.STRING,
  desc: DataTypes.STRING,
});

Categories.sync({ force: true }).then(() => {
  _.times(5, (i) => {
    Categories.create({
      category: casual.word,
      desc: casual.sentence,
    });
  });
}); */

export { Widgets, /* Categories */ };
