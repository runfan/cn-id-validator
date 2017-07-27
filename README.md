# cn-id-validator
18位中国公民身份证号码合法性校验
基于 es6 语法
install 

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
// 0 女，1 男
```