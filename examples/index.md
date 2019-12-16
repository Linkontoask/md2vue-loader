# 前端代码(风格)检测工具说明

启用此工具的原因：  
+ 风格不一、支持静态检测（在编译之前可发现错误提高效率）
+ 生态完善（各种插件，满足开发需求）

## 链接

+ [ESLint](https://cn.eslint.org/)
+ [Prettier](https://prettier.io/)
+ [eslint-config-airbnb-base](https://github.com/airbnb/javascript) （使用`base`规范）
+ [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

## 环境

+ Webstrom 2019.1 以上，低版本会有`eslint`错误，官方在2019.1版本中修复。（破解文件和2019.3版本在 `\\172.16.1.3\share\Link`）
+ Node 4 以上。（这项都满足）
+ 全局 yarn。

## 快速开始 （下面部分都已经在项目中实现，可以做为技术文档阅读，切勿随意改变配置文件）

+ 安装（二选一）
  + `npm install eslint --save-dev`
  + `yarn add eslint --save-dev`
+ 创建配置文件（二选一）
  + 项目根目录下创建 `.eslintrc` 或 `.eslintrc.json` 或 `.eslintrc.yaml`
  + 运行 `eslint --init`
+ 继承
  + 使用 `eslint-config-airbnb-base`
  + 使用 `eslint-plugin-vue`
+ 插件
  + `prettier`
  + `vue`

结合 `Prettier` 自动格式化代码：

+ `prettier --write "src/**/*.js" "src/**/*.vue"`

`eslint` 的自动修复只能修复带有可修复标签的语法

在 webpack 的 module -> rules 中可以使用 `eslint-loader` 加入代码编译检验机制。（项目中已使用，无需改变）

如果需要捕捉`commit`或者`push`等git事件，可以使用[husky](https://github.com/typicode/husky)

# webpack 编译优化与体积优化策略 

## 体积优化

+ split chunk
+ tree shaking
+ upgrade `webpack 4` (也是编译优化)

## 编译优化

+ [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/)
+ cache (babel、terser、module)
+ use yarn

| a | b |
| :---: | :---: |
| 1 | 2 |
