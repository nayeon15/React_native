# Hello JS 

*JavaScript: 주기적으로 내용이 갱신되는 기능이나 능동적인 지도... 등등 웹페이지에 적용할 수 있게 하는 스크립트 혹은 프로그래밍 언어*

> 아니 그래서 핵심적인 역할이 뭐야?

```javascript
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```

+ 변수 안에 값을 저장할 수 있다. 위 예시를 보면 작성된 새로운 이름을 ```name```이라는 변수에 저장함.
+ '문자열 (String)'이라고 불리는 문자들도 조작 가능함. 위 예시를 보면 "Player 1: "이라는 문자열을 ```name```이라고 만든 변수와 겹합하여 "Player 1: Chris"라는 글을 완성할 수 있음.
+ 웹 페이지상의 이벤트에 응답하는 코드를 작성할 수 있음.

------

### js 실행순서

*일반적으로는 위에서 아래 순서대로 실행됨. 이는 순서에 주의하여 코드를 작성해야 됨을 의미함.*

```javascript
const para = document.querySelector('p');
//HTML 요소 중 p태그를 선택

para.addEventListener('click', updateName);
//para에 저장된 객체가 클릭되었을 때 updateName 함수를 실행

function updateName() {
  let name = prompt('Enter a new name');
  //'Enter a new name'과 입력란 출력하여 입력받은 값을 name에 저장
  para.textContent = 'Player 1: ' + name;
  //papa(p태그)에 새로운 문자열 저장
}
```

1. p태그의 요소를 para변수에 저장.
2. event listener를 붙여 p태그가 클릭되었을 때 ```updateName()``` 코드 블록 실행되도록 함.
3. ```updateName()``` 코드 블록 (계속적으로 사용할 수 있는 코드 블럭을 함수라고 함) 사용자로 하여금 새로운 이름을 입력받기를 요청하고, 사용자가 이름을 입력하면 화면에 출력하게 함.

> 만약 1번째 줄과 3번째 줄을 바꿨다면 실행되지 않을 것임. 대신 콘솔창에 ```TypeError: para is undefined```이라는 오류가 뜰 것임. 이는 para라는 객체가 아직 존재하지 않는다는 뜻. 

