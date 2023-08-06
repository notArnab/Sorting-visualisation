async function merge(arr,low, mid, high,changeColor,playSound) {
    let i, j, k;
    let b = new Array(100);
    i = low;
    j = mid + 1;
    k = low;
    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        b[k] = arr[i];
        i++;
      } else {
        b[k] = arr[j];
        j++;
      }
      k++;
    }
    if (i > mid) {
      while (j <= high) {
        b[k] = arr[j];
        j++;
        k++;
      }
    } else {
      while (i <= mid) {
        b[k] = arr[i];
        i++;
        k++;
      }
    }
    for (i = low; i <= high; i++) {
      let bar = document.querySelectorAll(".bar")[i];
      bar.style.height = (b[i]>=0&&b[i]<1)?b[i] * 100 + "%":b[i] + "%";
      changeColor(i, -1, "swap");
      arr[i] = b[i];
      playSound(b[i]);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          changeColor(i, -1, "black");
        }, 50);
      });
    }
  }
  async function mergesort(arr,low, high,changeColor,playSound) {
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      await mergesort(arr,low, mid,changeColor,playSound);
      await mergesort(arr,mid + 1, high,changeColor,playSound);
      await merge(arr,low, mid, high,changeColor,playSound);
    }
  }