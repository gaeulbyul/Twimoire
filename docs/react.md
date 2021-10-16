React
=====

[React](https://reactjs.org)는 페이스북에서 만든 JavaScript용 라이브러리중 하나이며, [트위터](https://blog.twitter.com/engineering/en_us/topics/open-source/2017/how-we-built-twitter-lite)를 비롯해 수많은 웹사이트에서 사용하고 있다.

숨은 값 접근하기
---------

React를 갖고 렌더링한 Element에는 기존 HTMLElement에 없는 다음 두 속성이 추가된다. 아래 표에서 "무작위 값"이란 영+숫자로 이루어져있고, 페이지 로딩시마다 매번 바뀐다. React v16과 v17의 키 이름이 다른데[^1], 트위터에서는 v16의 키 값을 통해 접근할 수 있다.

|React v16 (트위터)                      | React v17                     |
|------------------------------------ |------------------------------ |
|`__reactInternalInstance$` + (무작위 값) | `__reactFibers$` + (무작위 값)  |
|`__reactEventHandlers$` + (무작위 값)    | `__reactEvents$` + (무작위 값)  |

페이지를 불러올 때 마다 바뀌므로 스크립트 등에서 사용시 아래와 같은 방법으로 접근한다.

```javascript
// element는 트위터의 #react-root 아래의 요소.
Object.entries(element).find(([key, value]) => {
  return /^__reactEventHandlers\$/.test(key)
})[1]
```

[^1]: [https://github.com/facebook/react/pull/17798](https://github.com/facebook/react/pull/17798) 를 기점으로 바뀌었다.