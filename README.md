# 说明

## 第一次

测试用例三步走

1. 安装`yarn add --dev jest`
2. 写代码
3. 测试

```js
const sum=require('./sum')

test('adds 1+2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
})```
