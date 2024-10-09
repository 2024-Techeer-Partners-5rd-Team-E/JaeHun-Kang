/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 을
 * 스트링으로 변환해서 반환받고 싶다면?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

console.log("------------------Calculator");
function calculator() {
  console.log((((3 * 10) / 2) % 3).toString());
}

// calculator();

function calculator(num) {
  console.log((((num * 10) / 2) % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 *
 * 실제 입력하는 값은 Argument라고 한다.
 */
calculator(3);
calculator(5);

console.log("------------------Multiply");
function multiply1(x, y) {
  console.log(x * y);
}

multiply1(2, 4);

// argument가 없다면 default값 10을 사용
console.log("------------------Multiply with default Parameter");
function multiply2(x, y = 10) {
  console.log(x * y);
}

multiply2(2, 4);
multiply2(2);

console.log("------------------Multiply with Return Keyword");
/**
 * 반환 받기
 * return 받기
 * 변수에 저장
 */
function multiply3(x, y) {
  return x * y;
}

const result1 = multiply3(2, 4);
console.log(result1);

const result2 = multiply3(4, 5);
console.log(result2);

console.log("------------------Multiply with Arrow Function");
/**
 * Arrow 함수
 */
const multiply4 = (x, y) => {
  return x * y;
};
console.log(multiply4(3, 4));

const multiply5 = (x, y) => x * y;
console.log(multiply5(5, 6));

const multiply6 = (x) => x * 2;
console.log(multiply6(5));

const multiply7 = (x) => x * 2;
console.log(multiply7(5));

const multiply8 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply8(2)(3)(4));

function multiply9(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}
console.log(multiply9(3)(4)(5));

const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(4, 5));

console.log("------------------Multiply with Arguments");
const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};
console.log(multiplyThree(4, 5, 6));

// 무한하게 Parameter를 받는 ...arguments 키워드
// reduce : value 값들을 전부 하나씩 곱해서 반환
const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// 함수 선언과 동시에 실행
// immediately invoked function
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply1);
console.log(multiply1 instanceof Object);
