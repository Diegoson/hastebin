const axios = require("axios");
const token = "57575e64f0071399dbffa7b2ec6ac1ed32d3e9167f87893dcd4fdcfc73de970a1348c31b4711d06426298080cf6072e4ff3fd9675af1bb08101ab259e05f1bbe";
async function create(data) {
  try { 
    const config = {
      method: 'post',
      url: 'https://hastebin.com/documents',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'  
      },
      data: JSON.stringify({ content: data })  
    }; const res = await axios(config);
    return { id: res.data.key };  
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

async function get(key) {
  try {
    const config = {
      method: 'get',
      url: `https://hastebin.com/raw/${key}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }};
    const res = await axios(config);
    return res.data
  } catch (error) {
    throw new Error(`${error.message}`);
  }}

module.exports = { create, get };
