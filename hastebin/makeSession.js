const axios = require("axios");
const token = "427ab9bad04c076e1d20bfd8d4bae160b6598120246fee71dde98ffb4da39abe79b11890ae4f8c535abb07036a34fff9ad1d83183d71c97b876123069acf5f8e";
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
