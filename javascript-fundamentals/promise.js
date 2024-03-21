const SlowlyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done slowly");
  }); //resolves after 500ms
  
  const QuicklyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quickly");
  }); //resolves after 100ms
  
  const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected"); //always rejected
  });
  
  Promise.any([SlowlyDone, QuicklyDone, Rejection])
    .then((value) => {
      console.log(value);
      //  QuicklyDone fulfils first
    })
    .catch((err) => {
      console.log(err);
    });



    

    const pro1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("one"), 200);
      });
      
      const pro2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("two"), 100);
      });
      
      Promise.race([pro1, pro2])
        .then((response) => {
          console.log(response); //output: two
        })
        .catch((err) => {
          console.log(err);
        });
      
      const pro3 = new Promise((resolve, reject) => {
        setTimeout(() => reject("rejected"), 300);
      });
      
      const pro4 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("four"), 400);
      });
      
      Promise.race([pro3, pro4])
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        }); //output: rejected