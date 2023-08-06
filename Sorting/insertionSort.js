async function insertionSort(arr,changeColor,playSound,swap) {
    let i, key, j;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        swap(j, j + 1);
        changeColor(j, j + 1, "swap");
        playSound(arr[j]);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            changeColor(j, j + 1, "black");
          }, 50);
        });
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      let bar = document.querySelectorAll(".bar")[j + 1];
      bar.style.height = (key>=0&&key<1)?key * 100 + "%":key+"%";
      arr[j + 1] = key;
    }
  }