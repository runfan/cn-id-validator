# cn-id-validator
18位中国公民身份证号码合法性校验
基于 es6 语法
## install 

```
npm install cn-id-validator
```

```javascript
const Validator = require('cn-id-validator');
const validator = new Validator('110101196809021004');
const result = validator.valid();
```

```javascript
false // if faild
{ address: '北京市东城区', birthday: '1968-09-02', age: 48, gender: 0 } //if success
// gender 0 女，1 男
```

# change log
## v0.1.5
- 更新行政区代码，[2018年11月中华人民共和国县以上行政区划代码](http://www.mca.gov.cn/article/sj/xzqh/2018/201804-12/20181101021046.html)

## v0.1.3
- 更新行政区代码，[2018年9月中华人民共和国县以上行政区划代码](http://www.mca.gov.cn/article/sj/xzqh/2018/201804-12/20180910291042.html)