# Solutions to LeetCode Problems

> [leetcode](https://leetcode.com)
> [leetcode-cn](https://leetcode-cn.com)

## Problems

\# | Title | Solutions | Difficulty
:-- | :-------- | :-- | :----: |
1|Two Sum|[JS](/js/src/two-sum.js),[Java](/java/src/TwoSum.java) |
2 | Add Tow Numbers |[JS](./2.Add&#32;Tow&#32;Numbers/add_tow_numbers.py)|
3 | Longest Substring Without Repeating Characters | [JS](./3.Longest&#32;Substring&#32;Without&#32;Repeating&#32;Characters/index.js) |
4 | Median of Two Sorted Arrays ||
6|ZigZag Conversion|
14|Longest Common Prefix|

## Project Directory

```bash
|__1.Two Sum // letcode problems
|    |__README.md // js docs to markdown
|    |__tow_sum.py // based on python3
|    |__TowSum.java // based on java
|    |__tow_sum.cpp // based on c++
|    |__tow_sum.go // based on golang
|    |__towSum.js // based on js
|__2.**
|__build.py // scripts to build md files
|__README.md // readme.md files builded by python script
```

## Run-script

```zsh
➜  leetcode ✗ node build.js new 50 all|c++|go|java|js|python
+ 50.Pow(x, n)
+ 50.Pow(x, n)/powxN.cpp
+ 50.Pow(x, n)/powxN.go
+ 50.Pow(x, n)/PodxN.java
+ 50.Pow(x, n)/powx_n.js
+ 50.Pow(x, n)/powx_n.py

➜  leetcode ✗ node build.js readme 50
./50.Pow(x, n)/README.md       | 128 ++++++++++++++

➜  leetcode ✗ node build.js readme
./README.ms                    | 2 +-
```