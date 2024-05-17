import express from "express";
import {config} from "dotenv";
const app = express();

config();
const PORT = process.env.PORT || 4000;




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});