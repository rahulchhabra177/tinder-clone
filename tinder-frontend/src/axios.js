const axios=require('axios');
const instance =axios.create({
	baseURL:'https://tinder-rahul.herokuapp.com/'
});

module.exports = instance;