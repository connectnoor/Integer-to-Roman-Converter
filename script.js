let inputEl = document.getElementById("number");
let buttonEl = document.getElementById("convert-btn");
let outputEl = document.getElementById("output-text");
let formEl = document.getElementById("my-form");

buttonEl.addEventListener('click' , () => {
    if (inputEl.value === "") {
        alert("please enter a value");
    }
    else if(parseInt(inputEl.value) <= 1){
        alert("must be integer")
    }
    // else if(parseInt(inputEl.value) > 3999){
    //     alert("value should be less then 4000")
    // }
    else{
        numberToRoman(parseInt(inputEl.value))
    }
   
})
formEl.addEventListener('submit' , (e) => {
    e.preventDefault();
})


let listOf = [
    { roman: "M", number: 1000 },
    { roman: "CM", number: 900 },
    { roman: "D", number: 500 },
    { roman: "CD", number: 400 },
    { roman: "C", number: 100 },
    { roman: "XC", number: 90 },
    { roman: "L", number: 50 },
    { roman: "XL", number: 40 },
    { roman: "X", number: 10 },
    { roman: "IX", number: 9 },
    { roman: "V", number: 5 },
    { roman: "IV", number: 4 },
    { roman: "I", number: 1 },
];
function numberToRoman(inputEl) {
    let roman = "";

    for (let i = 0; i < listOf.length; i++) {

        if (listOf[i].number <= inputEl) {
            inputEl = inputEl - listOf[i].number;
            roman += listOf[i].roman;
            i--
        }

    }
    outputEl.style.visibility = "visible"
   outputEl.textContent = roman ;
}
// numberToRoman(88); // here we will put inputvalue;