React
=====

[React](https://reactjs.org)는 페이스북에서 만든 JavaScript용 라이브러리중 하나이며, [트위터](https://blog.twitter.com/engineering/en_us/topics/open-source/2017/how-we-built-twitter-lite)를 비롯해 수많은 웹사이트에서 사용하고 있다.

숨은 값 접근하기
---------

React를 갖고 렌더링한 Element에는 기존 HTMLElement에 없는 속성이 추가된다. "무작위 값"이란 영+숫자로 이루어져있고, *페이지 로딩시마다 매번 바뀐다.* React v16과 v17의 키 이름이 다른데[^1], 트위터에서는 v17의 키 값을 통해 접근할 수 있다.

* `__reactFibers$` + (무작위 값)
* `__reactProps$` + (무작위 값)

실제로 사용시 아래와 같은 방법으로 접근한다.

```javascript
// element는 React가 렌더링한 요소.
Object.entries(element).find(([key, _value]) => {
  return /^__reactProps\$/.test(key)
})[1]
```

[^1]: [https://github.com/facebook/react/pull/17798](https://github.com/facebook/react/pull/17798) 를 기점으로 바뀌었다.