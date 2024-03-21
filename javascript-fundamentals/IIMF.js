{
  (async function () {
    console.log('Start');

    const result = await someAsyncOperation();
    console.log(result);

    console.log('End');
  })();

  async function someAsyncOperation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Async operation completed');
      }, 1000);
    });
  }

}


{
  (async function () {
    console.log("IIMF")
    await someFn()
  })();
  async function someFn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("test")
      }, 1000);
    })
  }
}





