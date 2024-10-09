/**
 * Array Functions
 */
console.log("[Array functions]");
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);
console.log(" ");

// push()
// Array 맨 끝에 값 추가, 추가된 길이를 반환값으로 반환
console.log("[Array push]");
console.log(iveMembers.push("Code Factory"));
console.log(iveMembers);
console.log(" ");

// pop()
// Array 맨 끝의 값 삭제, 삭제된 값을 반환값으로 반환
console.log("[Array pop]");
console.log(iveMembers.pop());
console.log(iveMembers);
console.log(" ");

// shift()
// 첫번째 값을 반환 및 삭제
console.log("[Array shift]");
console.log(iveMembers.shift());
console.log(iveMembers);
console.log(" ");

// unshift()
// 첫번째 Array에 값을 추가 및 반환
console.log("[Array unshift]");
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);
console.log(" ");

// splice()
// splice(몇 번째 index부터, 몇 개 지울까?)
// 삭제된 Array 반환
console.log("[Array splice]");
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log(" ");

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);
console.log(" ");

// concat()
// 새로운 Array를 만들어서 반환
// 다른 메모리 공간에 저장이 됨
// 변경이 없다
console.log("[Array concat]");
console.log(iveMembers.concat("Code Factory"));
console.log(iveMembers);
console.log(" ");

// slice()
// slice(몇 번째 index부터, 몇 번째 index '전'까지 지울래?)
// 기존 Array는 변경이 없음
console.log("[Array slice]");
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);
console.log(" ");

// spread operator = ...
console.log("[Array spread oprator]");
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);
console.log(" ");

console.log("[Array No spread]");
let iveMembers3 = [iveMembers];
console.log(iveMembers3);
console.log(" ");

console.log("[Array 대입]");
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 == iveMembers);
console.log(" ");

// 메모리 공간이 다른 새로운 Array
console.log("[Array spread operator 2]");
console.log([...iveMembers] === iveMembers);
console.log(" ");

// join()
console.log("[Array join]");
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));
console.log(" ");

// sort()
// 오름차순
console.log("[Array sort]");
console.log(iveMembers.sort());
console.log(" ");

// reverse()
// 내림차순
console.log("[Array reverse]");
console.log(iveMembers.reverse());
console.log(" ");

// a와 b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
console.log("[Array sort?]");
let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

console.log(" ");

// map()
// Array에 있는 모든 값들을 순회하면서
// 변화를 일으킴
// 원본 Array에는 변화가 없다!
console.log("[Array map]");
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `IVE : ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") return `IVE : ${x}`;
    else return x;
  })
);
console.log(iveMembers);
console.log(" ");

// filter()
// 조건에 맞는 숫자만 반환
console.log("[Array filter]");
numbers = [1, 8, 6, 7, 3];
console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
console.log(numbers.filter((x) => x % 2 === 0));
console.log(" ");

// find
// 가장 첫번째로 조건에 맞는 값만 반환
console.log("[Array find]");
console.log(numbers.find((x) => x % 2 === 0));
console.log(" ");

// findIndex()
// 인덱스 반환
console.log("[Array findIndex]");
console.log(numbers.findIndex((x) => x % 2 === 0));
console.log(" ");

// reduce()
// reduce(함수(previous, next), 시작하고 싶은 값)
console.log("[Array reduce]");
console.log(numbers.reduce((p, n) => p + n, 0));
console.log(" ");
