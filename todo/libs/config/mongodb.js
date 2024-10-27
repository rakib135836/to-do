// getting-started.js
import mongoose from "mongoose";

main().catch((err) => console.log(err));

export async function main() {
    
  await mongoose.connect(

    " mongodb+srv://to-do:BIEPDUvzgNjLR6ZM@cluster0.qtepxet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   
  );
  console.log("Connet to mongodb .....")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

