1.安装webpack 
npm install webpack --dev-save

2.安装webpack-dev-server 
npm install webpack-dev-server --dev-save

3.webpack打包的入口文件是app/root.js

4.打包生成的出口文件是 app.js

module 和 plugins 就是打包的过程 用完之后是生成出口文件

5.babel核心是把es6转成es5的，目的是让我们的代码可以在浏览器运行，但是随之时间的发展，babel不仅仅处理es6的转码，还可以处理其他的转码，比如说 react里边有自己的一套语法，浏览器是不认识的，但是babel可以把它转化成浏览器认识的

6.使用babel这些loader，需要npm 来安装这些loader

7.webpack的plugin有点类似钩子 （运行时刻）

8.HtmlWebpackPlugin这个插件帮助我们生成了build/app.js之后，自动生成了一个html，并使用这个app.js

9.需要安装HtmlWebpackPlugin这个插件才可以使用

10.inline: true  HRM 配置热模块加载