function show() {
    document.querySelector(".container").classList.remove('disappear');
    document.querySelector(".container").classList.add('appear');
} 

function hide() {
    document.querySelector(".container").classList.remove('disappear');
    document.querySelector(".container").classList.add('appear');
} 

document.querySelector('.show').oneclick = ()=>{
    show();

    setTimeout(hide, 3000);
}