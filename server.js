const http= require("http");

const server =http.createServer((req,resp)=>{

  console.log(req.method);
  console.log(req.url); 
   
  if(req.url==="/")
  {
    resp.end("about me");
  }

    
  if(req.url==="/skill")
  {
    resp.end("<h1>NODE.JS JAVASCRIPT</h1>");
  }

  
  if(req.url==="/contact")
  {
    resp.end("<h2>Email:krishhna90k@gmail.com</h2>");
  }

  
  if(req.url==="/signup")
  {
    resp.end("sign page");
  }

  else{
    resp.end("404 found");
  }
});

server.listen();

