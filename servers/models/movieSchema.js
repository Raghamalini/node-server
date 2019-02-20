const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const movieSchema = new Schema(
    {
        name: String,
        actor: String,
        director: String
    }
);
module.exports=mongoose.model('movie',movieSchema, 'movie'); // first movie is just to assign name and second is shema name and third name is collection name