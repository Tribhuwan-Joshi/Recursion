function mergeSort(arr, l, r) {
    if (l < r) {                            // keep dividing until a single element is left
        let mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }
}


function merge(arr, l, mid, r) {
    let i = l; 
    let j = mid+1;
    let k = l;
    let brr = Array(arr.length).fill(0);
    while (i <= mid && j <= r) {
        if (arr[i] > arr[j]) 
            brr[k++] = arr[j++];
        else
            brr[k++] = arr[i++]
        
    }   
    if (i>mid) {
        while (j <= r) {
            brr[k++] = arr[j++];
        }
    }
    else {
        while (i<=mid) {
             brr[k++] = arr[i++];
        }
    }
    for (k = l; k <= r; k++){
        arr[k] = brr[k]
    }
}


let arr1 = [3, 2, 1, 4];     // Sample array 

mergeSort(arr1, 0, arr1.length-1);
console.log(arr1)