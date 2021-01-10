## 安装依赖
```
yarn install
```
通过 yarn workspace 安装
```shell script
yarn add -W <package-name> // 安装通用依赖, 仅更新根目录下的 package.json
yarn workspace <workspace-name> add <package-name> // <workspace-name>为对应包 package.json 中的 name
yarn workspace <workspace-name> add <package-name/@version> // 指定了与本地依赖相同或者兼容的版本, 其实是通过 syslinks 的方式指向本地仓库, 如果我们不指定版本,否则会从 npm registry 中拉取在线包
```
通过 lerna 安装
```shell script
lerna add <package-name> // 为所有 packages/* 安装依赖
lerna add <package-name> --scope <workspace-name> // 效果同 yarn workspace
lerna add <package-name/@version> --scope <workspace-name> // 效果同 yarn workspace 安装本地依赖
```
