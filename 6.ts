const throwErr = function (): never {
  throw Error("Error occured!");
};

const loopForever = (): never => {
  while (true) {
    console.log("Looping forever");
  }
};
loopForever();
