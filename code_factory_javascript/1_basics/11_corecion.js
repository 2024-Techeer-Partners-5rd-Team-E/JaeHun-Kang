/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 25;

console.log("------------------명시적");
// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

console.log("------------------암묵적");
// 암묵적
let test = age + "";
console.log(typeof test, test);

console.log("98" + "2");
console.log(98 * 2);
console.log("98" - 2);

console.log("------------------명시적 몇 가지 더");
/**
 * 명시적 변환 몇 가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

console.log("------------------명시적 몇 가지 더 (숫자)");
//숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0.99"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1");

console.log("------------------명시적 몇 가지 더 (불리안)");
/**
 * Boolean 타입으로 변환
 * string 안에 값이 들어있으면 이건 Boolean 기준 true다
 */
console.log(!"Macintosh");
console.log(!!"x");
console.log(!!"");

console.log(!!0);
console.log(!!"0");
console.log(!!"false");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{},"오브젝트 트루");
console.log(!![],"Array 트루");

/**
 * <false 반환하는 것들>
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 */
