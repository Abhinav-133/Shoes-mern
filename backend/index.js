const express = require('express');
const mongoDB = require('./db');
const userRoutes = require('./Routes/CreateUser');
const displayRoutes=require("./Routes/DisplayData");

const app = express();
const PORT = 9000;

mongoDB();

// app.use("/",(req,res)=>{
//   res.send("this is onde xfile");
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://shoes-frontend-delta.vercel.app"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/',displayRoutes);
app.use('/api',require("./Routes/CreateOrder"));


app.get('/api', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
