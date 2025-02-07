const optionalChainObj = {
    name: 'Alice',
    address: {
      city: 'New York',
    },
  };
  
  console.log('없는 값 출력해도 에러 발생 X', optionalChainObj?.address.hello); // undefined 반환됨 -> 이렇게 하면 에러는 발생 안 함
  