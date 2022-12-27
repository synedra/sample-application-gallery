const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const category = event.queryStringParameters.category
  //const filter = event.queryStringParameters.filter
  const apps = await getCollection();
  try {
   
      const res = await apps.find({ category: { $eq: category } });
    const formattedTodos = Object.values(res.data);
    return {
      statusCode: 200,
      body: JSON.stringify(formattedTodos),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};

