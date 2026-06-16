const express=require("express");

const app=express();

app.get("/",(req,resp)=>{
    resp.send("library Home");
});

app.get("/books",(req,resp)=>{
    resp.send("lists of books");

});

app.get("/authors",(req,resp)=>{
    resp.send("List of author");
});

app.use((req,resp)=>{
   resp.status(404).send("404 page not found");
});

app.listen(3000);