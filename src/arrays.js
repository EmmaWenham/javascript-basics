const getNthElement = (index, array) => {
 return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};      

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""));
  };

const onlyEven = numbers => {
  return numbers.filter(n => n % 2 == 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((string, idx) => index !== idx);
};

const elementsStartingWithAVowel = strings => {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

    return strings.filter((string) => {
        for (var vowel of vowels) {
            if (string.toLowerCase().startsWith(vowel)) {
                return true;
            }
        }

        return false;
    });
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, number) => acc += number, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => {
    let lastA = a[a.length - 1];
    let lastB = b[b.length - 1];

    if (lastA < lastB) {
      return -1;
    }
    if (lastA > lastB) {
      return 1;
    }
    
    // a must be equal to b
    return 0;
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
