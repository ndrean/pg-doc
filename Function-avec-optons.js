function calc(a, opt = {}) {
  console.log(a);
  if (Object.keys(opt).length > 0) {
    for (const x in opt) {
      console.log(x, opt[x]);
    }
  }
}

calc(10);
calc(1, { a: 1, b: 2, c: [3, 4, 5] });

function unknow(...args) {
  console.log("len: ", args.length);
  for (const arg of args) {
    console.log(arg);
  }
}

unknow(1, 2, "a");

function Example() {
  return {
    arguments: (...args) => {
      args.map((a) => console.log(a));
    },
  };
}

const example = new Example();
example.arguments("test :", 1, 2, 3, "a", "b", "c");

/*
Ruby: 
def my_fun(*arg)
  puts arg
end
*/
