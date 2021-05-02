"use strict";
const names = ['Rob', 'Shawn'];
//names[0].split('');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then(data => {
    //data.split('');
});
