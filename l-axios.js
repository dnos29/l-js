const axios = require('axios');

axios.get('https://api.github.com/users/sonnck94').then(
    data => console.log(data)
)