const { getCollection } = require("./utils/astraTags");

exports.handler = async (event, context) => {
  const tags = await getCollection();
  try {
    const res = await tags.find({"count":{"$gt":1}});
    const formattedTags = Object.keys(res.data).map((item) => res.data[item]);
    
    return {
      statusCode: 200,
      body: JSON.stringify(formattedTags),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};

