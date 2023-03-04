function wait() {
    return new Promise(resolve=> {
        setTimeout(()=> resolve(), 10);
    });
}

async function changeBarHeight(idx, height) {
    // let bar = bars[idx];
    // bar.style.fill = "rgb(34, 149, 86)";

    await wait();

    // bar.setAttribute("height", height);

    await wait();
    // bar.style.fill = "rgb(108, 108, 201)";
}

async function merge(start, mid, end) {
    let arr1 = Array(mid-start+1), arr2 = Array(end-mid);

    // initializing the starting indices for the subarrays
    let i=0, j=0, k=start;
    while(i<(mid-start+1)) {
        arr1[i] = barsInfo[k];
        i++;
        k++;
    }

    // let x = 1;
    console.log("k: " + k);

    while(j<(end-mid)) {
        arr2[j] = barsInfo[k];
        j++;
        k++;
    }

    // x = 1;

    console.log("start: " + start + " mid: " + mid + " end: " + end);
    console.log("arr1:");
    console.log(arr1);
    console.log("arr2:");
    console.log(arr2);
    console.log("barsInfo:");
    console.log(barsInfo);

    // initializing the starting index before starting the merging of sorted subarrays
    i=0, j=0, k=start;
    while(i<(mid-start+1) && j<(end-mid)) {
        if(arr1[i].barHeight > arr2[j].barHeight) {
            barsInfo[k] = arr2[j];
            await changeBarHeight(k, arr2[j].barHeight);
            console.log("flag 1");
            j++;
        }
        else {
            barsInfo[k] = arr1[i];
            await changeBarHeight(k, arr1[i].barHeight);
            console.log("flag 2");
            i++;
        }
        k++;
    }

    // x = 1;

    while(i < (mid-start+1)) {
        barsInfo[k] = arr1[i];
        // await changeBarHeight(k, arr1[i].barHeight);
        i++;
        k++;
    }

    while(j < (end-mid)) {
        barsInfo[k] = arr2[j];
        // await changeBarHeight(k, arr2[j].barHeight);
        j++;
        k++;
    }

    console.log("After merging: ");
    console.log("barsInfo:");
    console.log(barsInfo);
    console.log("---------------------");

    // x = 1;
}

async function mergeSort(start, end) {
    if((start >=0 && end >= 0) && (start <= end)) {
        if(start == end)
            return;
        let mid = Math.floor((start + end)/2);
        await mergeSort(start, mid);
        await mergeSort(mid+1, end);
        await merge(start, mid, end);
    }
}

var barsInfo = [
        {
            barHeight: 177,
            initialPos: 0
        },
        {
            barHeight: 240,
            initialPos: 1
        },
        {
            barHeight: 324,
            initialPos: 2
        },
        {
            barHeight: 285,
            initialPos: 3
        },
        {
            barHeight: 109,
            initialPos: 4
        },
        {
            barHeight: 291,
            initialPos: 5
        },
        {
            barHeight: 118,
            initialPos: 6
        },
        {
            barHeight: 282,
            initialPos: 7
        },
        {
            barHeight: 157,
            initialPos: 8
        },
        {
            barHeight: 72,
            initialPos: 9
        }
    ];

async function startSorting() {
    console.log(barsInfo);
    await mergeSort(0, barsInfo.length-1);
    console.log(barsInfo);
    console.log("End")
}

startSorting();