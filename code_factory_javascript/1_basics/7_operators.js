/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log("------------------------------");

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;
number++;
console.log(number);

number--;
console.log(number);

console.log("------------------------------");
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

console.log("------------------------------");

/**
 * 숫자 타입이 아닌 타입에 +. -를 사용하면?
 */
let sample = "99";

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = "안유진";
console.log(+sample);

sample = "99";
console.log(-sample);
console.log(typeof -sample);

console.log("------------------------------");

/**
 * 할당 연산자 (Assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

console.log("------------------------------");

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log(5 == 5);
console.log(5 == "5");
console.log(0 == "");
console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log("------------------");
console.log(5 === 5);
console.log(5 === "5");
console.log(0 === "");
console.log(true === 1);
console.log(false === 0);
console.log(true === "1");
console.log("------------------");
console.log(5 != 5);
console.log(5 != "5");
console.log(0 != "");
console.log(true != 1);
console.log(false != 0);
console.log(true != "1");
console.log("------------------");
console.log(5 !== 5);
console.log(5 !== "5");
console.log(0 !== "");
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== "1");

console.log("------------------------------");

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);

console.log("------------------------------");

/**
 * 삼항 조건 연산자 (Ternary Operator)
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("------------------------------");

/**
 * 논리 연산자
 * 1) &&
 * 2) ||
 */
// && 조건은 모두 true여야 true를 반환한다
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("------------------");

// ||는 하나만 true여도 true를 반환한다
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("------------------");

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log("------------------");

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

console.log("------------------------------");

/**
 * 단축 평가 (short circuit evaluation)
 *
 * && 를 사용했을 때 좌측이 true면 우측 값 반환
 * && 를 사용했을 때 좌측이 false면 좌측 값 반환
 * || 를 사용했을 때 좌측이 true면 좌측 값 반환
 * || 를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true || "IVE");
console.log(false || "IVE");
console.log(true && "IVE");
console.log(false && "IVE");

console.log("------------------");

console.log(true && true && "IVE");
console.log(true && false && "IVE");

console.log("------------------------------");

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(11 ** 3);

console.log("------------------------------");

/**
 * Null 연산자
 */
let name;
console.log(name);

name = name ?? "Code Factory";
console.log(name);

name = name ?? "IVE";
console.log(name);

let name2;
name2 ??= "IVE";
console.log(name2);

console.log("------------------------------");
