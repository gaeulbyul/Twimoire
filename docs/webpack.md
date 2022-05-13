Webpack
=======

JavaScript 모듈번들러 중 하나. `webpackJsonp` 전역변수를 통해 모듈을 꺼내올 수 있다. 이 기법은 [moduleRaid](https://github.com/pixeldesu/moduleRaid/)를 참고하였고, 현재 트위터뿐만 아니라 트윗덱 신버전(React 기반) 및 트윗덱 구버전(jQuery 기반)에서도 이용할 수 있다.

```javascript
const id = 'webpackRequire'
window[id] = window.webpackJsonp.push([
    [],
    {
        [id](module, exports, require) {
          module.exports = require
        },
    },
    [[id]],
])

```

이렇게 만들어낸 `webpackRequire`는 `import`나 `require()`처럼 쓸 수 있다.

```javascript
// twitter.com
const React = webpackRequire('ERkP')
const ReactDOM = webpackRequire('w/UT')
```