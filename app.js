const express =require("express");
const mongoose=require("mongoose");
const ejs = require("ejs");
const bodyParser= require("body-parser");

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser: true});
const articleSchema={
    title:String,
    content:String
}
const Article = mongoose.model("Article",articleSchema);



app.route("/articles")

.get(function(req,res){

    async function fun1(){
        try{
            const data= await Article.find({});
            res.send(data);
        }
        catch(err){
            res.send(err.message);
        }
    }
    fun1();

})

.post(function(req,res){


    const newArticle =new Article ({
        title:req.body.title,
        content:req.body.content
    })
    async function fun2 (){
        try{
            newArticle.save();
            res.send("Successfully added a new article")
        }
        catch (err){
            res.send(err.message)
        }
    }
    fun2();


})

.delete(function(req,res){
    async function fun3(){
        try{
            await Article.deleteMany({});
            res.send("Successfully deleted all article");
            
        }
        catch(err){
            res.send(err.message);
        }
    }
    fun3();
});


app.route("/articles/:articleTitle")

.get(function(req,res){ 
    async function fun4(){

        try{
            const data=await Article.findOne({title:req.params.articleTitle});
            await res.send(data);
            
        }
        catch(err){
            await res.send("No articles matching that title was found");
        }
    }
    fun4();

})
.put(function(req,res){

    async function fun4(){

        try{
            await Article.updateMany(
                {title:req.params.articleTitle},
                {title: req.body.title, content: req.body.content},
                {overwrite :true}
                );
            await res.send("Sucessfully updated the data");
            
        }
        catch(err){
            await res.send("No articles matching that title was found");
        }
    }
    fun4();

})
.patch(function(req,res){

    

    async function fun5(){

        try{
            await Article.updateMany(
                {title:req.params.articleTitle},
                {$set :req.body}
                );
            await res.send("Sucessfully updated the data");
            
        }
        catch(err){
            await res.send("No articles matching that title was found");
        }
    }
    fun5();

})
.delete(function(req,res){

    async function fun6(){

        try{
            await Article.deleteOne(
                {title:req.params.articleTitle}
                );
            await res.send("Sucessfully deleted the data");
            
        }
        catch(err){
            await res.send("No articles matching that title was found");
        }
    }
    fun6();

});





app.listen(3000,function(){
    console.log("Server Started on port : 3000");
});