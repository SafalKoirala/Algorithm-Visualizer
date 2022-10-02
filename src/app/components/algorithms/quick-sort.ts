let animations: any[][] = [];
export function getAnimationsForQuickSort(array: any[]) {
  let newArray = array.slice();
  quickSort(0, newArray.length, newArray);
  let tempArray = animations.slice();
  animations = [];
  return tempArray;
}

function quickSort(low: number, high: number, array: any[]) {
  //Checking If low is less than High or not
  if (low < high) {
    // Make partation in which on left side all the smaller elemnts of partation and on the right hand side all the greater elements
    let j = partation(low, high, array);
    // Divinding the array with pivote taken as a partation
    quickSort(low, j, array);
    quickSort(j + 1, high, array);
  }
  return array;
}

function partation(low: number, high: number, unsortedArray: any[]) {
  let pivote = unsortedArray[low];
  animations.push(["pivotOn", low]);
  let i = low;
  let j = high;

  while (i < j) {
    do {
      i++;
    } while (unsortedArray[i] <= pivote);

    do {
      j--;
    } while (unsortedArray[j] > pivote);

    if (i < j) {
      swap(i, j, unsortedArray);
      //Logic for animating highlihts and swaping
      animations.push(["highLightOn", i, j]);
      animations.push(["highLightoff", i, j]);
      animations.push(["swap", i, j]);
    }

  }
  swap(low, j, unsortedArray);
  animations.push(["highLightOn", low, j]);
  animations.push(["highLightOff", low, j]);
  animations.push(["swap", low, unsortedArray[low], j, unsortedArray[j]]);
  animations.push(["pivotOff", low]);
  return j;
}

function swap(i: number, j: number, unsortedArray: any[]) {
  let temp = unsortedArray[i];
  unsortedArray[i] = unsortedArray[j];
  unsortedArray[j] = temp;
}