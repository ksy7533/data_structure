function _swap(arr, a, b) {
  let temp = 0;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

// 버블정렬
function bubbleSort(data) {
  for(let x = data.length; x > 0; x--) {
    for(let y = 0; y < x; y++) {
      if(data[y] > data[y + 1]) {
        _swap(data, y, y + 1);
      }
    }
  }

  return data;
};

// 삽입정렬
function insertionSort(data) {
  for(let i = 1; i < data.length; i++) {
    for(let x = i; x >= 0; x--) {
      if(data[i] < data[x]) {
        _swap(data, x, i);
      }
    }
  }
  return data;
};