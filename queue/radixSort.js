/* 기수정렬 */

/*
0~99사이의 숫자가 랜덤하게 10개 8개 생성
*/

// const nums = [91, 46, 85, 15, 92, 35, 31, 32];

function initRadixSort(nums) {
  const arr = []; 

  for(let i = 0; i < 10; i++) {
    arr.push(new Queue());
  }

  nums.forEach(item => {
    const restNum =  item % 10;
    arr[restNum].enqueue(item);
  })
  console.log(arr);

  let tempNums = [];

  // debugger;
  arr.forEach(item => {
    if(item.data.length > 0) {
    tempNums = tempNums.concat(item.data);
    }
  })

  arr.forEach(item => {
    item.data = [];
  })

  tempNums.forEach(item => {
    const num = Math.floor(item / 10);
    arr[num].enqueue(item);
  });

  tempNums = [];

  arr.forEach(item => {
    if(item.data.length > 0) {
    tempNums = tempNums.concat(item.data);
    }
  })

  console.log(tempNums);
}
