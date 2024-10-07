/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한 개의 Object Type이 있다
 * ----------------------------
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * ----------------------------
 * 7) Object (객체)
 * ----------------------------
 */
const age = 25;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("-----------------------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log("-----------------------");

/**
 * String 타입
 */
const codeFactory = '"C"ode Factory';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);
console.log("-----------------------");
/**
 * Template Literal
 *
 * Escaping Caractor
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다
 */
const iveYuJin = "아이브\n안유진";
console.log(iveYuJin);
const iveWonYoung = "아이브\t장원영";
console.log(iveWonYoung);
const backSlash = "아이브\\Code Factory";
console.log(backSlash);
const smallQutoation = "아이브'Code Factory";
console.log(smallQutoation);

// Template Literal
const iveWonYoung2 = `아이브 '" //////
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = "IVE";
console.log(groupName + " 안유진");
console.log(`${groupName} 안유진`);
console.log("-----------------------");
/**
 * Boolean Type
 */

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("-----------------------");
/**
 * Undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다
 *
 * 직접 undefined로 값을 초기화하는건 지양한다
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log("-----------------------");

/**
 * Null 타입
 *
 * Undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값을 초기화할 때
 * 사용된다
 */
let init = null;
console.log(init);
console.log(typeof init);
console.log("-----------------------");

/**
 * Symebol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다
 */
const test1 = "1";
const test2 = "1";

console.log(test1 == test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 == symbol2);
console.log("-----------------------");

/**
 * Object 타입
 *
 * Map
 * 키:벨류의 쌍으로 이루어져있다
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);

console.log(typeof dictionary);

/**
 * Array Type
 * 
 * 값을 리스트로 나열할 수 있는 타입이다
 */
const iveMemberArray = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서'
];
console.log(iveMemberArray);
/**
 * index
 * 
 * 0부터 시작한다
 * 1씩 올라간다
 */
console.log(iveMemberArray[0]);
console.log(iveMemberArray[5]);

iveMemberArray[0] = 'Code Factory';
console.log(iveMemberArray);
console.log(typeof iveMemberArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시한다
 *                  C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다
 * JS -> dynamic typing
 */