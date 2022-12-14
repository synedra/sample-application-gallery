const { createClient } = require("@astrajs/collections");

let astraClient = null;
console.log("Getting tags")

const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createClient(
      {
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
      },
      30000
    );
  }
  return astraClient;
};

const getCollection = async () => {
  const documentClient = await getAstraClient();
  console.log(documentClient)
  return documentClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection("apptags");
};

module.exports = { getAstraClient, getCollection };
