// Sorts cars by the "kolejnosc" attribute, descending. Cars without a value
// are treated as 0. Cars with equal "kolejnosc" (including two unset ones)
// are ordered by ascending id.
const getKolejnosc = (car) => car[1].attributes.kolejnosc ?? 0;
const getId = (car) => Number(car[0]);

const mergeSort = (arrayToSplit) => {
    if (arrayToSplit.length <= 1) return arrayToSplit;

    const arrayMiddleOne = arrayToSplit.length / 2;
    const arrayLeft = arrayToSplit.slice(0, arrayMiddleOne);
    const arrayRight = arrayToSplit.slice(arrayMiddleOne);

    return mergeSortComparing(mergeSort(arrayLeft), mergeSort(arrayRight));
}

const mergeSortComparing = (arrayLeft, arrayRight) => {
    const arraySorted = [];

    while (arrayLeft.length && arrayRight.length) {
        const leftKolejnosc = getKolejnosc(arrayLeft[0]);
        const rightKolejnosc = getKolejnosc(arrayRight[0]);

        const takeLeft = leftKolejnosc !== rightKolejnosc
            ? leftKolejnosc > rightKolejnosc
            : getId(arrayLeft[0]) < getId(arrayRight[0]);

        arraySorted.push(takeLeft ? arrayLeft.shift() : arrayRight.shift());
    }

    return arraySorted.concat(arrayLeft.slice()).concat(arrayRight.slice());
}

export default mergeSort;
