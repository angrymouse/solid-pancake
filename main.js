let net=require("net");
let server=new net.Server();

const PORT = process.env.PORT || 3000;
server.listen(PORT);
server.on("connection",socket=>{
let redisCli=net.connect(process.env.RPORT,process.env.RHOST)
socket.pipe(redisCli);
redisCli.pipe(socket)
})
