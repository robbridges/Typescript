const names: Array<string> = ['Rob', 'Shawn'];
//names[0].split('');

const promise:Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000)
});

promise.then(data => {
  //data.split('');
})