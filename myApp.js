require('dotenv').config();

const MONGOURI = process.env['MONGO_URI']

var mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  name : { type: String, required: true },
  age :  Number,
  favoriteFoods : [String]
});

var Person = mongoose.model("Person", personSchema);

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

//console.dir(Person);

const createAndSavePerson = (done) => {
  var newPerson = new Person ({
      name: 'Person', 
      age: 1, 
      favoriteFoods: ['banana']
    });

  newPerson.save((err, data) => err ? done(err) : done(null, data));

};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => err ? done(err) : done(null, data));
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, data) => err ? done(err) : done(null, data));
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data) => err ? done(err) : done(null, data));
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, (err, data) => err ? done(err) : done(null, data));
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
