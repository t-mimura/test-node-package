# test-node-package
this is test.

## package

### install

```bash
$ npm install --save https://github.com/t-mimura/test-node-package.git
```

### usage

```javascript:hoge.js
cont test = require('test-node-package');

test.sayHoge();
test.sayHoge('fuga');
```

## cli

### install

```bash
$ npm install --global https://github.com/t-mimura/test-node-package.git
```

### usage

```bash
$ tnp
hoge
$ tnp --times 3
hoge
hoge
hoge
$ tnp fuga
fuga
```

