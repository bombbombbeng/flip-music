## 安装依赖
通过 yarn workspace 安装
```shell script
yarn add -W <package-name> // 安装通用依赖, 仅更新根目录下的 package.json
yarn workspace <workspace-name> add <package-name> // <workspace-name>为对应包 package.json 中的 name
```
通过 lerna 安装
```shell script
lerna add <package-name> // 为所有 packages/* 安装依赖
lerna add <package-name> --scope <workspace-name> // 效果同 yarn workspace
```
