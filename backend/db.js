const mongoose = require("mongoose");

const mongoDB = async () => {
  const uri =
    "mongodb://abhinavmittal743:$Secret123@ac-eps5jyd-shard-00-00.ojlptwr.mongodb.net:27017,ac-eps5jyd-shard-00-01.ojlptwr.mongodb.net:27017,ac-eps5jyd-shard-00-02.ojlptwr.mongodb.net:27017/shoesmern?ssl=true&replicaSet=atlas-7skh62-shard-0&authSource=admin&retryWrites=true&w=majority&appName=merncluster";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
    });
    console.log("Connected to MongoDB");
    const shoesCategory = await mongoose.connection.db.collection(
      "shoesCategory"
    );
    global.shoes_category = await shoesCategory.find({}).toArray();
    // console.log("ShoesCategoryDB  - ", global.shoes_category);

    const fetchData = await mongoose.connection.db.collection("shoes_items");
      global.shoes_items = await fetchData.find({}).toArray();
      // console.log("ShoesItemsDB  - ",global.shoes_items);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
