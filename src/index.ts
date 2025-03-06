import {APP_PORT} from "./environment";
import {app} from "./app";

const server = app.listen(APP_PORT, () => {
    console.log(`[server]: Server is running at ${APP_PORT} port`)
});
