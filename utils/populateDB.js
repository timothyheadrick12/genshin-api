//This will populate a given mongodb database using the data folder
//of the genshin-api repo

const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const url = 'mongodb://localhost:27017';

const dbName = 'genshinDB';

let db;

const assetsURL = '../assets/';
const dataURL = assetsURL + 'data/';
const imageURL = assetsURL + 'images/';

const addImages = (obj, dir) => {
  if (fs.existsSync(imageURL + dir)) {
    images = fs.readdirSync(imageURL + dir);
    if (images.length == 1) {
      obj['image'] = dir + '/' + images[0];
    } else if (images.length > 1) {
      imagesObj = {};
      images.forEach((image) => {
        imagesObj[image] = dir + '/' + image;
      });
      obj['images'] = imagesObj;
    }
  }
};

const addImage = (obj, image) => {
  if (fs.existsSync(imageURL + image)) {
    obj['image'] = image;
  }
};

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
      obj = JSON.parse(
        fs.readFileSync(dataURL + type + '/' + dir + '/en.json')
      );
      addImages(obj, type + '/' + dir);
      db.collection(type).insertOne(obj, (err) => {
        if (err) throw err;
        console.log('1 document inserted');
      });
    });
  });

  /**** CREATE BOSS COLLECTION ******/
  fs.readdirSync(dataURL + 'boss/weekly-boss').forEach((dir) => {
    obj = JSON.parse(
      fs.readFileSync(dataURL + 'boss/weekly-boss/' + dir + '/en.json')
    );
    obj.type = 'weekly';
    addImages(obj, 'boss/weekly-boss/' + dir);
    db.collection('bosses').insertOne(obj, (err) => {
      if (err) throw err;
      console.log('1 document inserted');
    });
  });

  /**** CREATE FOOD COLLECTION ******/
  obj = JSON.parse(fs.readFileSync(dataURL + 'consumables/food/en.json'));
  Object.values(obj).forEach((jobj, index) => {
    addImage(jobj, 'consumables/food/' + Object.keys(obj)[index]);
    db.collection('foods').insertOne(jobj, (err) => {
      if (err) throw err;
      console.log('1 document inserted');
    });
  });

  /**** CREATE POTION COLLECTION ******/
  obj = JSON.parse(fs.readFileSync(dataURL + 'consumables/potions/en.json'));
  Object.values(obj).forEach((jobj, index) => {
    addImage(jobj, 'consumables/potions/' + Object.keys(obj)[index]);
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
    Object.values(obj).forEach((jobj, index) => {
      addImage(jobj, 'materials/' + type + '/' + Object.keys(obj)[index]);
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
    'character-ascension', //Different image setup
  ];
  namelessMaterialTypes.forEach((type) => {
    obj = JSON.parse(
      fs.readFileSync(dataURL + 'materials/' + type + '/en.json')
    );
    let keys = Object.keys(obj);
    Object.values(obj).forEach((jobj, index) => {
      jobj.name = keys[index];
      if (type != 'character-ascension') {
        jobj.items.forEach((item) => {
          addImage(item, 'materials/' + type + '/' + item.id.replace("'", '-'));
        });
      } else {
        addImage(jobj.sliver, 'materials/' + type + '/' + jobj.sliver.id);
        addImage(jobj.fragment, 'materials/' + type + '/' + jobj.sliver.id);
        addImage(jobj.chunk, 'materials/' + type + '/' + jobj.sliver.id);
        addImage(jobj.gemstone, 'materials/' + type + '/' + jobj.sliver.id);
      }
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
      addImage(jobj, 'materials/' + type + '/' + jobj.id);
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
      addImage(item, 'materials/local-specialties/' + item.id);
      db.collection('local-specialties').insertOne(item, (err) => {
        if (err) throw err;
        console.log('1 document inserted');
      });
    });
  });
});
