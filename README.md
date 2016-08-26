# webpack-reactjs
webpack搭建reactjs项目
##1.架构
webpack+react+babel+redux+material-ui搭建的react项目模板
##2.使用方式
1.npm install     安装所有的依赖

2.npm run build   使用webpack打包输出到build目录

3.npm run dev     开启本地服务，在浏览器输入localhost:8080查看
##3.用于生产环境
1.注释或去掉build/index.html中的<script src="http://localhost:8080/webpack-dev-server.js"></script>,这个只是为了开发的时候便于调试

2.注释或去掉webpack.config.js中config下面entry中的'webpack/hot/dev-server'

3.npm run build   再次打包,build目录包含项目所有的用于生产环境的文件
