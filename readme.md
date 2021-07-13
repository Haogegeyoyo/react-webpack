# 项目文档

## 项目分支
    =>webpack 在配置中，会出现许多问题，所以配置时，将各需要的功能放在分支上处理 
    |   master  --主分支
    |   complete  --具备、当前最新的开发环境的分支
    |—— react_webpack_set  --配置 react 环境的分支（引入 react 、与 快捷路径等）
           |—— px_changeTo_vwOrRem  --配置了 移动端 px 转换成 vw
                  |—— import_antd_mobile  --引入 antd-mobile
                         |—— router_set  --  路由配置

## 更新日志
    07/13 
          `import_antd_mobile 分支，webpack 配置了 按需加载，不需要单独引入样式，但是 出现了 less-loader 版本不匹配的问题，所以将 less-loader 版本从 7.x 降到了 5.x`
          `router-set` 分支，使用 react-router-dom 进行了路由配置，新增路由可到 router 文件夹下 index 文件新增，若 路由过多时，可在 router 新增其他文件，并汇总到 index 文件