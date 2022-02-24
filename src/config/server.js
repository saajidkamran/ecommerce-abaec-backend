const port = process.env.PORT || 5000;
const server = () => console.log(`im  on port ${port}`);
module.exports = { server, port };
