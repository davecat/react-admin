这个项目是官方推荐create-react-app构建的。

下面，你会快速了解到一个基于react的SPA是如何搭建起来的。


## 文件结构

创建完成后，你的项目应该如下：

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## 目录

- 选择请求工具
```
  这里推荐使用axios  npm install axios --save
  axios.get('url').then(function (res) {
      //do something
  }).catch(function (){
     //do something
  });
  为了解决跨域问题，只需在package.json文件加上
  "proxy": {
      "/api": {
        "target": "url",
        "ws": true
      }
    }
   
  详细参考create-react-app github
```
- react-route 4.x
```
  react-route已经更新到4.x版本，而且废除老版本API（蛋疼）
  我们需要从 react-router-dom 里面引入需要的模块，而不是 react-router,如下：
  import {
      BrowserRouter as Router,
      Route
  } from 'react-router-dom' 
  
  具体见 react-route 4
  
  Redirect：重定向
  
  <Router>
          <Switch>
              {/*必须加上exact，严格匹配路由*/}
              <Redirect exact from='/' to='/login'/>
              <Route exact path='/login' component={Login}/>
          </Switch>
  </Router>
  
  方法内跳转路由采用 this.props.history.push('url');
```




