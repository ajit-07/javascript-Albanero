const searchRoatedArray = function (arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == target) return mid
        //check if the left part is sorted
        if (arr[low] <= arr[mid]) {
            if (target >= arr[low] && target <= arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { //if left is not sorted then the right part is sorted
            if (target >= arr[mid] && target <= arr[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
};
console.log(searchRoatedArray([4, 5, 6, 7, 0, 1, 2], 0))