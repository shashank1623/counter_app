const coutnValue = document.querySelector('#counter');

function increment(){

    //get the value from the UI
    let value = parseInt(coutnValue.innerText);
    //update the value
    value = value+1;
    // console.log(value);
    //set the value
    coutnValue.innerText = value;
}

function decrement(){
    //get the value from UI
    let value = parseInt(coutnValue.innerText);
    //update the value
    value = value-1;
    // console.log(value);
    //set the value
    coutnValue.innerText = value;
}
// const increment =()=>{
//     let value = parseInt(coutnValue.innerText);
//     value = value+1;
//     console.log(value);
//     coutnValue.innerText = value;
// }
// const decrement =()=>{
//     let value = parseInt(coutnValue.innerText);
//     value = value-1;
//     console.log(value);
//     coutnValue.innerText = value;
// }