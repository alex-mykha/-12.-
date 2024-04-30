let line1 = prompt("Введіть перший рядок");
let line2 = prompt("Введіть второй рядок");
let line3 = prompt("Введіть третий рядок");

let resalt = `${line1} ${line2} ${line3}`;
alert(resalt)

let addNumber = prompt("введите число");
let resaltNumber = "";
for (let index = 0; index < addNumber.length; index++) {
resaltNumber += addNumber[index] + " ";    
}
alert(resaltNumber);
