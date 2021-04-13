const axios = require('axios')

const getBreeds = async () => {
    try {
        const data = await axios.get('https://dog.ceo/api/breeds/list/all');
            return data;
    } catch (error) {
      console.error(error)
    }
  }

  console.log(getBreeds());