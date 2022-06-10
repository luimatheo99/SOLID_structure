import { app } from "./app";

console.log(`initialized sentry with DSN ${process.env.SENTRY_DSN}`)

app.listen(3333, () => console.log("Server is running!"));
