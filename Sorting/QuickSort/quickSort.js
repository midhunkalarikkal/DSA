function quickSort(arr, count = { comparisons: 0 }) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftarr = [];
    let rightarr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        count.comparisons++;
        if (arr[i] < pivot) {
            leftarr.push(arr[i]);
        } else {
            rightarr.push(arr[i]);
        }
    }

    return [...quickSort(leftarr, count), pivot, ...quickSort(rightarr, count)];
}

const bestarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const avgarr = [6, 3, 5, 1, 9, 2, 8, 4, 7];
const worstarr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let bestCount = { comparisons: 0 };
let avgCount = { comparisons: 0 };
let worstCount = { comparisons: 0 };

console.log("Best case");
console.log(quickSort(bestarr, bestCount));
console.log("Comparisons:", bestCount.comparisons);

console.log("Average case");
console.log(quickSort(avgarr, avgCount));
console.log("Comparisons:", avgCount.comparisons);

console.log("Worst case");
console.log(quickSort(worstarr, worstCount));
console.log("Comparisons:", worstCount.comparisons);
