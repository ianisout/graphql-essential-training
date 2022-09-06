import mongoose, { mongo } from 'mongoose';

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

export { Widgets };
