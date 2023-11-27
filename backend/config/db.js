const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://decal:decal_12345678@cluster0.iz3faux.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Export the client
module.exports = client;