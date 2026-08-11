const fetch = require('node-fetch');
// Using native fetch if on Node 18+

fetch("https://multi-tenant-chatbot-production-55f0.up.railway.app/ask", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    bot_id: "tecwrites",
    question: "Hello",
    session_id: "test"
  })
}).then(async r => {
    console.log("Status:", r.status);
    console.log(await r.text());
}).catch(console.error);
