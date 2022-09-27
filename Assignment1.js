function fibs(n) {
    let arr = [0, 1];
    if (n <= 0) return []
    if (n <= 2) return arr.slice(0, n);
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr;
}

