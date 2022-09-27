const pow = (x, n) => (n == 1 ? x : x * pow(x, n - 1));

let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, cur) => prev + cur.salary, 0);
  } else {
    let sum = 0;

    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

// linked list

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

let list2 = { value: 1 };
list2.next = { value: 2 };
list2.next.next = { value: 3 };
list2.next.next.next = null;
let newList = { value: 0, next: list2 };

// sum ALL
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

function sumToR(n) {
  if (n == 1) return 1;
  return n + sumToR(n - 1);
}

function sumToA(n) {
  return (n * (n + 1)) / 2;
}

function fac(n) {
  return n == 1 ? 1 : n * fac(n - 1);
}

function fib(n) {
    const memo = {};
    function helper(n) {
        if (n < 3)
            return 1;
        if (n in memo)
            return memo[n]
        else {
            let x = helper(n - 1) + helper(n - 2);
            return memo[n] = x;
        }
    }
    return helper(n);
}



let ll = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function rprintLL(ll) {
    let l = []
    let temp = ll;
    while (temp) {
        l.push(temp.value);
        temp = temp.next;
        
    }
    for (let i = l.length - 1; i >= 0; i--)
        console.log(l[i])
}





// rprintLL(ll);




// print values
// function printLL(ll) {
//     if (ll.next == null) {
//         console.log(ll.value);
//         return
//     }
//     console.log(ll.value);
//     printLL(ll.next);
// }


// function rprintLL(ll) {
//     if (ll.next == null) {
//         console.log(ll.value);
//         return
//     }
    
//     printLL(ll.next);
//     console.log(ll.value);
// }


function sumRangeRecursion(n, total = 0) {
    if (n <=0)
        return total
    return sumRangeRecursion(n - 1, total + n);
}



const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};


function printChildrenRecursive(t) {
    if (t.children.length === 0)
        return
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    })
}


function collatz(n) {
  
        if (n == 1)
            return 1;
        else {
            if (n % 2 == 0) {
                
              return 1+ collatz(n / 2);

            }
            else {
                
               return 1+ collatz(3n + 1);
            }
        }

}

function all(arr, fun) {    
    var copy = copy || arr.slice();

    if (copy.length <= 0)
        return true;
    else {
        let res = fun(copy[0]);
        copy.shift();
        return res && all(copy, fun);
    }
}

function product(arr) {
    if (arr.length == 0)
        return 1;
    else {
        let ans = arr[0];
        arr.shift();
        return ans * product(arr);
    }
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(nestedObject, val) {
    for (let key in nestedObject) {
        if (typeof nestedObject[key] === "object") {
           return contains(nestedObject[key], val);
        }
        if (nestedObject[key] == val)
            return true;
        
    }
    return false;

    
    
}

// console.log(contains(nestedObject,44))
// let x = new Promise( (res) =>setTimeout(() => {
//     res(2)
// }, 4000));

// x.then(res => console.log(res));


function countInt(arr) {
  let count = 0;
  function helper(arr) {
    for (let i of arr) {
      if (Number.isInteger(i)) {
        count++;
      }
      else if (Array.isArray(i)) {
        helper(i);
      }
    }
    return count;
  }
 return helper(arr);
}

function squareSum(arr) {
  let sum =0
  for (const i of arr) {
    if (Array.isArray(i)) {
      sum += squareSum(i);
    }
    if (Number.isInteger(i)) {
      sum += i * i;
    }
  }
  return sum
}

function replicate(n, x) {
  let arr = []
  if (n <= 0)
    return arr;
  return arr.concat(x).concat(replicate(n - 1, x));
}

console.log(replicate(3,5));

// let arr = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];
// console.log(countInt(arr));