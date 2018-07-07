const express = require("express");
const server = express();
const swig = require("swig");
const htmlRouter = require("./routers/htmlRouter");
const ajaxRouter = require("./routers/ajaxRouter");
server.use("/static",express.static("./public"));
server.set('views', './www');//html实际已经存放的目录
server.set('view engine', 'html');
server.engine('html', swig.renderFile);
swig.setDefaults({cache: false});//设置不用缓存

server.use("/api",ajaxRouter);
//用路由渲染html页面
server.use("/",htmlRouter);
server.listen(9000,(err)=>{
	if(err) {
		console.log("服务器启动失败");
	} else {
		console.log("服务器启动成功");
		console.log("http://localhost:9000");
	}
})