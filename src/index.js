import app from "./app.js";
import logger from "./configs/logger.config.js";

//env variables
const PORT = process.env.PORT || 3300;

let server = app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`);
});

//handle server errors
const exitHandler = () => {
    if (server) {
        logger.info("Server closed.");
        process.exit(1);
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

//SIGTERM
process.on("SIGTERM", () => {
    if (server) {
        logger.info("Server closed.");
        process.exit(1);
    }
});