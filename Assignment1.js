function fibs(n) {
    let arr = [0, 1];
    if (n <= 0) return []
    if (n <= 2) return arr.slice(0, n);
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr;
}

function fibsRec(n) {
    let arr = [0, 1];
    if (n <= 0) return []
    if (n <= 2) return arr.slice(0, n);
    let res = fibsRec(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return res
    
}

console.log(fibsRec(3))  // [0,1,1,2]