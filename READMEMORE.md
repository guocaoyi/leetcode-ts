# Read me more

## 初始化 & 构建方式 & 部署运维 的说明

### LeetCode-TS 的搭建

#### 获取(同步)数据

1. 获取（更新）所有题目列表：标题、难度、题号
2. 获取 Topics 列表
3. 获取题目详情：标题、题号、内容(Content\Example\Note)、Topic

#### 初始化

1. 输入题号，
2. 生成 目录、index.ts、README.md、index.jest.ts 文件
3. index.ts 生成 注释文档

#### 算法编写阶段

1. write logic
2. Compiler to js
3. js 注释加上 author | github
4. Commit

#### 电子书制作

1. 根据 index.ts 的内容 生成 README.md
2. 更新 根目录的 README.md
3. 更新 topics.md
4. 初始化 README.md
5. ts 代码转译 AST，获取注释信息
6. 生成 readme.md 文档
7. gitbook build

#### 提交分支 & 发布

1. npm run build
2. git commit & git push
