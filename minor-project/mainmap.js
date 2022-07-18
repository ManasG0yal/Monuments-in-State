'use strict'

let go = document.querySelector('.btn');
let inputData;

let states = Array('jammu and kashmir','delhi','rajasthan','gujrat','maharashtra','karnataka','kerala','tamil nadu','andhra pradesh','odisha','west bengal','bihar','jharkhand','uttar pradest','assam','madhya pradesh');
go.addEventListener('click',function()
{
     inputData = String(document.querySelector('.ipt').value);
     inputData=inputData.toLowerCase();

    console.log(inputData);
    console.log(states.length);
    for(let i = 0 ;i < states.length ;i++)
    {
        if(inputData == `${states[i]}`)
        {
            console.log(`${states[i]}`);
        }
        else{
            console.log(`not found`);
        }
    }


    // function search_animal() {
    //     let input = document.getElementById('searchbar').value
    //     input=input.toLowerCase();
    //     let x = document.getElementsByClassName('animals');
          
    //     for (i = 0; i < x.length; i++) { 
    //         if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //             x[i].style.display="none";
    //         }
    //         else {
    //             x[i].style.display="list-item";                 
    //         }
    //     }
    // }




    
} );
// document.addEventListener('keydown',function(e)
// {
//     inputData = document.querySelector('.ipt').value;
//    if(e.key == 'Enter')
//    {
//     console.log(inputData);
//    }
// });
