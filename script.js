let n = 100;
let sortit = 1;
let slider = document.getElementById("range");
const time = document.getElementById("time");
n = slider.value;
slider.addEventListener("input", update_array);
// slider.oninput = function () {
//   n = this.value;
// };
let d;

let d1; 

//sound
const playSound = (val) => {
  const audio = new Audio("./Sounds/select.mp3");
  let x = val.toFixed(1);
  let vol = (x >= 0 && x < 1) ? x : (x /= 100);
  audio.volume = Number(vol);
  audio.play();
};
const changeRange = (e) => {
  n = e.value;
};
let arr = [];
const unsort = () => {
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
    let bar = document.querySelectorAll(".bar")[i];
    bar.style.height = arr[i] * 100 + "%";
  }
};

//normal_array
function generate_array() {
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
  }
}

//update_array
function update_array() {
  n = slider.value;
  generate_array();
}

window.onload = update_array();

function custom_arr(arr) {
  const modifiedArray = [];
  const max = Math.max.apply(null, arr);
  for (let i = 0; i < arr.length; i++) {
    modifiedArray.push((arr[i] / max) * 100);
  }
  return modifiedArray;
}
function generate_custom_array() {
  const stringArray = custom.value.split(",");
  const numberArray = stringArray.map(Number);
  const arr1 = custom_arr(numberArray);
  n = arr1.length;
  arr = arr1;
  container.innerHTML = "";
  for (let i = 0; i < arr1.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr1[i] + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
  }
}
const changeColor = (i, j, mode) => {
  try {
    let bar1 = document.querySelectorAll(".bar")[i];
    let bar2 = document.querySelectorAll(".bar")[j];
    if (mode == "swap") {
      bar1.style.backgroundColor = "red";
      bar2.style.backgroundColor = "blue";
    } else {
      bar1.style.backgroundColor = "white";
      bar2.style.backgroundColor = "white";
    }
  } catch (e) {}
};
const swap = (i, j) => {
  let bar1 = document.querySelectorAll(".bar")[i];
  let bar2 = document.querySelectorAll(".bar")[j];
  if(arr[i]>=0&&arr[i]<1&&arr[j]>=0&&arr[j]<1){
    bar1.style.height = arr[j] * 100 + "%";
  bar2.style.height = arr[i] * 100 + "%";
  }else{
    bar1.style.height = arr[j] + "%";
    bar2.style.height = arr[i] + "%";
  }
};

function changeType(type) {
  sortit = type;
}
let m = (d1-d)/1000;
const sortVisual = async() => {
  switch (sortit) {
    case 1:
      d=new Date();
      await bubble_sort(arr, changeColor, playSound, swap);
      d1 = new Date();
      console.log((d1-d)/1000);
      time.innerHTML=((d1-d)/1000).toFixed(2)+"s";
      break;
    case 2:
      d=new Date();
      await mergesort(arr, 0, n - 1, changeColor, playSound);
      d1 = new Date();
      console.log((d1-d)/1000);
      time.innerHTML=((d1-d)/1000).toFixed(2)+"s";
      break;
    case 3:
      d=new Date();
      await insertionSort(arr, changeColor, playSound, swap);
      d1 = new Date();
      console.log((d1-d)/1000);
      time.innerHTML=((d1-d)/1000).toFixed(2)+"s";
      break;
    default:
      break;
  }
};
