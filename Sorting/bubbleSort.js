async function bubble_sort(arr, changeColor, playSound, swap) {
  do {
    var swapped = false;
    for (let i = 1; i < n; i++) {
      changeColor(i - 1, i, "swap");
      playSound(arr[i]);
      if (arr[i] < arr[i - 1]) {
        swap(i - 1, i);
        swapped = true;
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          changeColor(i - 1, i, "black");
        }, 50);
      });
    }
  } while (swapped);
}
