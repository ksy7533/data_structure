function bubbleSort(data) {
  let temp;
  for(let x = data.length; x > 0; x--) {
    start = data[0];
    for(let y = 0; y < x; y++) {
      if(data[y] > data[y + 1]) {
        temp = data[y];
        data[y] = data[y + 1];
        data[y + 1] = temp;
      }
    }
  }

  return data;
};