import mongoose  from "mongoose";
import express from "express"

const formSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const sform = mongoose.model("form", formSchema);//dat base creation if not present

await mongoose.connect("mongodb://localhost:27017/sform")// dta base connection


const app = express();
const port = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const newsform = new sform({ name: "Akash", age: 12 });
  await newsform.save(); // ⬅ save to MongoDB
  res.send("Todo saved!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});