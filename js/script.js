


// let counter = document.querySelector(".counter");
// console.log(counterUp.dataset.number);


// let count = 0

// function counterUp(){
//     count ++;
//     counter.innerHTML = count;

//     if (count == counter.dataset.number){

//         clearInterval(stop);

//     }


// }

// let stop = setInterval(function () {

//     counterUp();

// }, 1000);

let counterUp = document.querySelectorAll(".counterUp");
let arr = Array.from(counterUp)

// console.log(arr);

arr.map((item) => {

    // console.log(item);
    // console.log(item.dataset.number);

    let counter = 0

    function count() {
        counter++;
        item.innerHTML = counter;

        if (counter == item.dataset.number) {
            clearInterval(stop);
        }

    }

    let stop = setInterval(function () {
        count();
    }, 1000/item.dataset.number);


})

