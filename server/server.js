const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("i am form http server");
});
const port = 3000;
server.listen(port,()=>{
    console.log(`server is running in port ${port}`);
});