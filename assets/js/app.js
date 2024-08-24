//Select Elements :
const [numberInput, stepInput] = document.getElementsByClassName("input-box");
const [shiftUpBtn, shiftDownBtn] = document.getElementsByClassName("btn");
const shapes = document.querySelector(".shapes");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Circles Style :
const circleStyle = () => {
    shapes.textContent = "";
    numbers.map((number) => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.textContent = number;
      shapes.appendChild(circle);
    });
  };

//Shift Functions :
const shiftUpCircle = () => {
    const [numberValue, stepValue] = [numberInput.value, +stepInput.value];
    const findValueIndex = numbers.findIndex((number) => {
      return number === +numberValue;
    });
    if (numberValue === "" || findValueIndex < 0) {
      alert("Please choose a  number that in the circles ❗");
    } else if (findValueIndex + stepValue > numbers.length - 1 || stepValue < 0) {
      alert("❌ You can't move!");
    } else {
      [numbers[findValueIndex], numbers[findValueIndex + stepValue]] = [
        numbers[findValueIndex + stepValue],
        numbers[findValueIndex],
      ];
      circleStyle();
    }
  };
  
const shiftDownCircle = () => {
    const [numberValue, stepValue] = [numberInput.value, +stepInput.value];
    const findValueIndex = numbers.findIndex((number) => {
      return number === +numberValue;
    });
    if (numberValue === "" || findValueIndex < 0) {
      alert("Please choose a  number that in the circles ❗");
    } else if (findValueIndex - stepValue < 0 || stepValue < 0) {
      alert("❌ You can't move!");
    } else {
      [numbers[findValueIndex], numbers[findValueIndex - stepValue]] = [
        numbers[findValueIndex - stepValue],
        numbers[findValueIndex],
      ];
      circleStyle();
    }
  };  

//Events :
shiftUpBtn.addEventListener("click", shiftUpCircle);
shiftDownBtn.addEventListener("click", shiftDownCircle);

circleStyle();  

function reload() {
    numberInput.value = "";
    stepInput.value = "";
}