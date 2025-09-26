const user = {
    name: "홍길동",
    age: 20,
    address: {
        city: "서울"
    }
};

// ["속성명"]
// .속성명
// 옵셔널 체이닝 -> ?.속성명

console.log(user?.address);
console.log(user?.address?.city);
console.log(user?.address?.country); // country가 없으니까 undifined

console.log(user?.contact?.mail); // 원래는 오류가 나야하나는데 옵셔널 체이닝을 사용해 undifined로 나타남
console.log(user?.contact?.phone);