const axios = require('axios');

class SocialMediaAPI {
constructor(apiKey) {
this.apiKey = apiKey;
this.headers = {
'Authorization': Bearer ${apiKey}
};
}

async getInstagramPosts(username) {
try {
const response = await axios.get(https://api.instagram.com/${username}/posts, { headers: this.headers });
return response.data;
} catch (error) {
console.error(error);
return null;
}
}

async getTwitterTweets(username) {
try {
const response = await axios.get(https://api.twitter.com/${username}/tweets, { headers: this.headers });
return response.data;
} catch (error) {
console.error(error);
return null;
}
}

async getFacebookPosts(username) {
try {
const response = await axios.get(https://api.facebook.com/${username}/posts, { headers: this.headers });
return response.data;
} catch (error) {
console.error(error);
return null;
}
}
}

module.exports = SocialMediaAPI;