import express from "express";
import cors from "cors";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes/routes";
import { deserializeUser } from "./middleware/deserializeUser";

const app = express();
app.use(express.json());
app.use(deserializeUser);
app.use(cors())
app.listen(config.get<number>("port"), async () => {
  log.info("App is running ");
  await connect();
  routes(app);
});
