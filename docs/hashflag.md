Hashflag
========

해시플래그(Hashflag)는 트윗이나 유저 프로필에 특정 해시태그를 입력하면 그 옆에 나타나는 작은 이미지이다. 일부 해시플래그는 트윗에 넣을 경우 그 트윗에 "마음에 들어요"를 누를때 마다 특별한 애니메이션이 나타나기도 하다. 해시플래그의 목록은 [Redux store](./redux-store.md)를 통해 조회할 수 있다.

```javascript
reduxStore.getState().hashflags.hashflags
```

이 안에는 다음과 같이 생겼다.

```javascript
{
  // ...
  // 항상 소문자다.
  blacktranslivesmatter: [{
    animation: undefined,
    url: 'https://abs.twimg.com/hashflags/BlackTransLivesMatter_2020/BlackTransLivesMatter_2020.png',
    startMs: 1592956800000, // Unix timestamp. 단위: ms
    endMs: 32503680000000,
  }],
  // ...
}
```

대부분은 기간제한(`startMs`, `endMs`)이 있으나, 트위터 관련태그나(예: [#Periscope](https://twitter.com/hashtag/Periscope
), [#LoveTwitter](https://twitter.com/hashtag/LoveTwitter)), 인권 관련 해시태그(예: [#미투](https://twitter.com/hashtag/미투
), [#BlackTransLivesMatter](https://twitter.com/hashtag/BlackTransLivesMatter))의 경우 사용기간이 사실상 반영구(서기 3,000년까지)로 지정되어있는 경우도 있다.



참고 사이트
------
[Hashflag Browser](https://wongmjane.com/hashflag-browser) - 해시플래그 목록을 볼 수 있는 웹페이지. [Jane Manchun Wong](https://wongmjane.com)님이 작성하셨다. 이미지는 트위터에서 직접 가져오므로 광고/트래커 차단설정에 따라 로딩이 안 될 수도 있다.