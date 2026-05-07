import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http uses CJS exports; unwrap the callable regardless of module interop
const pinoHttp =
  typeof pinoHttpModule === "function"
    ? pinoHttpModule
    : (pinoHttpModule as unknown as { default: typeof pinoHttpModule }).default;

const app: Express = express();

app.use(
  (pinoHttp as unknown as (opts: Record<string, unknown>) => ReturnType<typeof express>)({
    logger,
    serializers: {
      req(req: Record<string, unknown>) {
        return {
          id: req["id"],
          method: req["method"],
          url: (req["url"] as string | undefined)?.split("?")[0],
        };
      },
      res(res: Record<string, unknown>) {
        return {
          statusCode: res["statusCode"],
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
