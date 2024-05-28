import app from "./app.js";

//env variables
const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});