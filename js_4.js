const numElements = 10;

function getRndNumber() {
    return Math.floor(Math.random() * 1000 ) + 100;
  }

function generateSequence(size) {
  if (size <= 0) {
    console.log("Довжина послідовності не може бути менше або дорівнювати нулю!");
    return [];
  }

  let count = 0;
  let sequence = [size];

    while (count < size) {
      sequence[count] = getRndNumber()
      count++
    }

  console.log(sequence);
  return sequence;
}

function countEvenNumbers(sequence) {
  if (sequence.length <= 0) {
    return;
  }

  let count = 0;
  let evenNum = 0;
  let oddNum = 0;

    while (count < sequence.length) {
      if (sequence[count] % 2 === 0) {
        evenNum++;
      } else {
        oddNum++;
      }

      count++;
    }

    console.log("Кількісь парних чисел: " + evenNum, "\nКількість непарних чисел: " + oddNum);

    let evenPercentage = Math.floor((evenNum * 100) / count).toFixed(1);
    let oddPercentage = Math.floor((oddNum * 100) / count).toFixed(1);
    
    console.log("Відсоток парних чисел: " + evenPercentage, "\nВідсоток непарних чисел: " + oddPercentage);

    let сorrelation = Math.abs(evenPercentage - oddPercentage) <= 10;
    console.log("Співвідношення парних до непарних чисел приблизно 50 на 50: " + сorrelation);
}

var sequence = generateSequence(numElements);
countEvenNumbers(sequence);