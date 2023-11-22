let button = document.querySelector('button');
let sidebar = document.querySelector('#sidebar');
let close = document.querySelector('.ri-close-line');
let flag = 0;

button.addEventListener('click', () => {
    if (flag === 0) {
        sidebar.style.transform = 'translate(0%, -100%)';
        flag = 1;
    }else {
        sidebar.style.transform = 'translate(-100%, -100%)';
        flag = 0;
    }
});

close.addEventListener('click', () => {
    sidebar.style.transform = 'translate(-100%, -100%)';
});



