//This will populate a given mongodb database using the data folder
//of the genshin-api repo

const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const url = 'mongodb://127.0.0.1:8001';

const dbName = 'genshinDB';

let db;

const dataURL = './assets/data/';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  if (err) return console.log(err);
  db = client.db(dbName);
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);

  /**** CREATE SIMPLE COLLECTIONS ******/
  const simpleInserts = [
    'artifacts',
    'characters',
    'domains',
    'elements',
    'enemies',
    'nations',
    'weapons',
  ];
  simpleInserts.forEach((type) => {
    fs.readdirSync(dataURL + type).forEach((dir) => {
      db.collection(type).insertOne(
        JSON.parse(fs.readFileSync(dataURL + type + '/' + dir + '/en.json')),
        (err) => {
          if (err) throw err;
          console.log('1 document inserted');
        }
      );
    });
  });

  /**** CREATE BOSS COLLECTION ******/
  fs.readdirSync(dataURL + 'boss/weekly-boss').forEach((dir) => {
    obj = JSON.parse(
      fs.readFileSync(dataURL + 'boss/weekly-boss/' + dir + '/en.json')
    );
    obj.type = 'weekly';
    db.collection('bosses').insertOne(obj, (err) => {
      if (err) throw err;
      console.log('1 document inserted');
    });
  });

  /**** CREATE FOOD COLLECTION ******/
  obj = JSON.parse(fs.readFileSync(dataURL + 'consumables/food/en.json'));
  Object.values(obj).forEach((jobj) => {
    db.collection('foods').insertOne(jobj, (err) => {
      if (err) throw err;
      console.log('1 document inserted');
    });
  });

  /**** CREATE POTION COLLECTION ******/
  obj = JSON.parse(fs.readFileSync(dataURL + 'consumables/potions/en.json'));
  Object.values(obj).forEach((jobj) => {
    db.collection('potions').insertOne(jobj, (err) => {
      if (err) throw err;
      console.log('1 document inserted');
    });
  });

  /**** CREATE SIMPLE MATERIAL TYPE COLLECTIONS ******/
  const simpleMaterialTypes = [
    'boss-material',
    'cooking-ingredients',
    'talent-boss',
  ];
  simpleMaterialTypes.forEach((type) => {
    obj = JSON.parse(
      fs.readFileSync(dataURL + 'materials/' + type + '/en.json')
    );
    Object.values(obj).forEach((jobj) => {
      db.collection(type).insertOne(jobj, (err) => {
        if (err) throw err;
        console.log('1 document inserted');
      });
    });
  });

  /**** CREATE NAMELESS MATERIAL TYPE COLLECTIONS ******/
  const namelessMaterialTypes = [
    'common-ascension',
    'talent-book',
    'weapon-ascension',
    'character-ascension',
  ];
  namelessMaterialTypes.forEach((type) => {
    obj = JSON.parse(
      fs.readFileSync(dataURL + 'materials/' + type + '/en.json')
    );
    let keys = Object.keys(obj);
    Object.values(obj).forEach((jobj, index) => {
      jobj.name = keys[index];
      db.collection(type).insertOne(jobj, (err) => {
        if (err) throw err;
        console.log('1 document inserted');
      });
    });
  });

  /**** CREATE ARRAY MATERIAL TYPE COLLECTIONS ******/
  const arrayMaterialTypes = ['character-experience', 'weapon-experience'];
  arrayMaterialTypes.forEach((type) => {
    obj = JSON.parse(
      fs.readFileSync(dataURL + 'materials/' + type + '/en.json')
    );
    obj.items.forEach((jobj) => {
      db.collection(type).insertOne(jobj, (err) => {
        if (err) throw err;
        console.log('1 document inserted');
      });
    });
  });

  /**** CREATE LOCAL SPECIALTY MATERIAL TYPE COLLECTION ******/
  obj = JSON.parse(
    fs.readFileSync(dataURL + 'materials/local-specialties/en.json')
  );
  let keys = Object.keys(obj);
  Object.values(obj).forEach((array, index) => {
    array.forEach((item) => {
      item.location = keys[index];
      db.collection('local-specialties').insertOne(item, (err) => {
        if (err) throw err;
        console.log('1 document inserted');
      });
    });
  });
});
