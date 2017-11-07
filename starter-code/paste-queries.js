// 1.2 | Insert our first users in users collection
  db.users.insertOne(
  {
    "firstName": "John",
    "lastName": "Smith",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
      }
    }
  );
  db.users.insertOne(
    {
      "firstName": "Ariel",
      "lastName": "Fonticiella",
      "dateBirth": ISODate("1986-02-10T18:28:09.369Z"),
      "address": {
        "streetAddress": "5010 Coquina Key Drive SE",
        "city": "St. Petersburg",
        "state": "FL",
        "postalCode": "33705"
      }
    }
  );

  db.users.insertOne(
    {
      "firstName": "Alex",
      "lastName": "Del Valle",
      "dateBirth": ISODate("1989-05-16T18:28:09.369Z"),
      "address": {
        "streetAddress": "3741 SW 132 Ave",
        "city": "Miami",
        "state": "FL",
        "postalCode": "33175"
      }
    }
  );

// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
    db.products.insertOne(
  {
     "name": "Water Bottle",
     "description":"High quality glass bottle provides a healthier way to drink.Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel. Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces. Dishwasher safe",
     "category":"Kitchen",
     "price":23.0
  }
);

  db.products.insertOne(
    {
       "name": "PC",
       "description":"High quality PC provides a quicker way to download games.",
       "category":"Electronics",
       "price":1000.00
    }
  );

  db.products.insertOne(
    {
       "name": "Call of Duty",
       "description":"An amazing game foucused on World War II",
       "category":"Gaming",
       "price":60.0
    }
  );

// 1.4 | Getting Started with queries
// ----------------------------------
  db.users.updateOne(
    {"firstName": "John"},
    { $set: {"shoppingCart" : [ObjectId("5a02102ec902393f9e85976e")]} }
  );

  db.users.updateOne(
    {"firstName": "Ariel"},
    { $set: {"shoppingCart" : [ObjectId("5a021038c902393f9e85976f")]} }
  );

  db.users.updateOne(
    {"firstName": "Alex"},
    { $set: {"shoppingCart" : [ObjectId("5a021042c902393f9e859770")]} }
  );


  db.products.find().pretty();


  db.products.find(
    { "category" : {$eq: "Electronics"}},
    { "name": 1, "category": 1}
  ).pretty();


  db.products.deleteOne(
    { "name": "Water Bottle"}
);


// PASTE REVIEW QUERY HERE

  db.products.updateOne(
    { "name": "PC"},{ $set: { "reviews": [{
        "name": "Guadalupe",
        "comment": "It's so fast! Would MOST DEF recommend!",
        "stars": 5,
        "date": "2016-11-10T18:28:09.369Z"
        }]
      }
    }
  );
