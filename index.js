const app = require("../backend/src/routes/approutes");
const { port, server } = require("../backend/src/config/server");
//local-port access
app.listen(port, server);
