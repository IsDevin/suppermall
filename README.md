# suppermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### 1.划分目录结构

D:\myproject\suppermall

├─src `文件源代码`
|  ├─App.vue `主要组件`
|  ├─main.js `主要js入口`
|  ├─views `视图组件`
|  ├─store `Vuex相关的文件`
|  ├─router `router相关的文件`
|  ├─network `网络请求相关的文件`
|  ├─components `组件`
|  |     ├─content `此项目的公共组件`
|  |     ├─common `公共组件`
|  ├─common `公共代码`
|  ├─assets `公共资源`
|  |   ├─images `图片`
|  |   ├─css `css`

#### 2.引用两个公共css文件

normalize.css

base.css

#### 3. 创建 `vue.config.js`文件 和 .editorconfig

```javascript
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
```

#### 4.项目的模块划分 -> tabbar -> 路由映射关系