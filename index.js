// function addingEventListener() {
//     const input = document.getElementById('button');

//     function clickAlert() {
//     alert('I was clicked!');
//     }

//     input.addEventListener('click', clickAlert);
// }
// addingEventListener()


// const input = document.getElementById('button');

// function clickAlert() {
//     alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);


function addingEventListener(){

    const input = document.getElementById('button');
    function clickAlert(){
        alert('I was clicked!');
    };

    input.addEventListener('click', clickAlert());
}

addingEventListener();