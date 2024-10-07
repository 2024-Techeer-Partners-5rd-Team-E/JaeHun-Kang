/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 사용하지 않는다
 * 2) let
 * 3) const 
 */

var name1 = "Code Factory";
console.log(name1);

var age = 32;
console.log(age);

let ive = "Ive"
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다
 */

ive = "안유진";
console.log(ive);

const newJeans = "New Jeans";
console.log(newJeans);

// newJeans = "New Jeans";
/**
  * const로 선언하면
  * 값을 추후 변경할 수 없다
  * 
  * 선언과 할당
  * 
  * 1) 변수를 선언하는 것
  * 2) 할당
  */

var name2; // 사용할 변수 선언
name2 = "Code Factory" // 할당
console.log(name2);

let girlFriend1;
console.log(girlFriend1);

// const girlFriend2; const는 값이 초기화 된 상태로 사용해야한다