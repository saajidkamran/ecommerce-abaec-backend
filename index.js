const app = require("./src/routes/approutes");
// const { port, server } = require("./src/config/server");
//local-port access
const port = process.env.PORT || 5000;

app.listen(port, console.log(`im  on port ${port}`));
