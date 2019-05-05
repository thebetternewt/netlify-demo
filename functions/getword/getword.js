const randomWords = require('random-words');

const getWords = () => Promise.resolve(randomWords().toUpperCase());

exports.handler = async (event, context) => {
  try {
    const body = await getWords();

    return { statusCode: 200, body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
