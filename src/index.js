import app from "./app.js";
import logger from "./configs/logger.config.js";

//env variables
const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`);
});