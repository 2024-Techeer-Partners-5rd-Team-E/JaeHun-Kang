/**
 * try...catch
 * 에러를 잡을 사용
 *
 * 1) 발생시킬 때 -> 던진다고 한다 (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 한다 (catch)
 */
function runner() {
  try {
    console.log("Hello");

    // throw new Error("큰 문제가 생겼당께요?!");

    console.log("Code Factory");
  } catch (e) {
    console.log("|---CATCH---|");
    console.log(e); // 에러 출력
  } finally { // 뭐가 되었든 이녀석을 실행됌. 써도 돼고 안써도 돼고
    console.log("|---FINALLY---|");
  }
}
runner();
