# Read me more

## 开发&发布流程

### Step1:Init && Fetching Data

1. `➜ leet fetch all` 获取题目列表：`id\title\title slug\difficulty\`
2. `➜ leet fetch topics` 获取题目 Topics：Topics Array List
3. `➜ leet fetch #题号#` 获取题目详情：content

### Step2:Initial

1. `➜ leet init #题号#` 创建新题目录:index.ts\index.jest.ts
   1. 生成 index.ts,获取 题目详情，并生成模板
   2. 更新 topics
   3. 生成 index.jest.ts(empty file)
2. `➜ leet doc #题号#` or `➜ cd ./algorithms/#题号#/ & leet doc` 生成
   `0000.##/REDEME.md` 文档

### Step3:Coding && Testing

1. 编写算法逻辑 && 编写 \*.jest.ts 算法用例
2. `➜ leet trans #题号#` or `➜ cd ./algorithms/#题号#/ & leet trans`
   1. ts 转译成 js
   2. js doc add github && author
3. `➜ leet test #题号#` or `➜ cd ./algorithms/#题号#/ & leet test` 跑测试用例

### Step4:Building && Deploy

1. `➜ leet update doc` 更新 `./README.md`
2. `➜ leet update summary` 更新 `./SUMMARY.md`
3. `➜ git checkout br-graph && gitbook build`

## Leet CLI 工具的说明

## 刷题原则
