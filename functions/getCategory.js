const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const category = event.queryStringParameters.category
  const filterlist = event.queryStringParameters.filter
  let filterarray = filterlist.split(',')
  

  const apps = await getCollection();
  try {
    let res;
      if (filterquery) {
        for (filter in filterarray) {

        }
        res = await apps.find({ category: { $eq: category } });
      } else {
        res = await apps.find({ category: { $eq: category } });
      }
      const 
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

