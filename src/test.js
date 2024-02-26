//console.log(this)

const obj = {
  pippo: 'suca',

  suca: function () {
    console.log(this)
  }
}

//obj.suca();

//setTimeout(() => obj.suca(), 1000);

const test = () => obj.suca()

function test2 () {
  test()
}

test2()
console.log();
