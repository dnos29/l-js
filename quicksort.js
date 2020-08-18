var items = [5,3,6,6,7,6,2,9];
function swap(items, leftIdx, rightIdx){
    console.log("--swap--");
    var tmp = items[leftIdx];
    items[leftIdx] = items[rightIdx];
    items[rightIdx] = tmp;
}
function partition(items, left, right){
    var pivot   = items[Math.floor((right + left) / 2)]
    console.log("pivot", pivot);
    var i = left;
    var j = right;
    while(i <= j){
        while(items[i] < pivot){
            i++;
            console.log("i", i);
        }
        while(items[j] > pivot){
            j--;
            console.log("j", j);
        }
        if(i <= j){
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
    
}

function quicksort(items, left, right){
    var idx;
    if(items.length > 1){
        idx = partition(items, left, right);
        if(left < idx -1){
            quicksort(items, left, idx -1);
        }
        if(idx < right){
            quicksort(items, idx, right);
        }
    }
    return items;
}
var sorted = quicksort(items, 0, items.length -1);
console.log(sorted);