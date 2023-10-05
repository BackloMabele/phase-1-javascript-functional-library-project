function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (const key in collection) {
                  callback(collection[key]);
      }
    }
  
    return collection;
  }

  function myMap(collection, callback) {
    const finalArray = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            finalArray.push(callback(collection[i]));
        }
    } else {
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            finalArray.push(callback(values[i]));
        }
    }
    return finalArray;
}

function myReduce(collection, callback, acc) {
    let values;
    let startingIndex = 0;

    if (Array.isArray(collection)) {
        values = collection;
    } else if (typeof collection === 'object' && collection !== null) {
        values = Object.values(collection);
        startingIndex = acc === undefined ? 1 : 0;
    } else {
        throw new Error('invalid');
    }

    if (acc === undefined) {
        acc = values[startingIndex];
        startingIndex++;
    }

    for (let i = startingIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    return acc;
}


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    } else {
        throw new Error('invalid');
    }

    return undefined;
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
        const finalArray = [];
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                finalArray.push(collection[i]);
            }
        }
        return finalArray;
    } else if (typeof collection === 'object' && collection !== null) {
        const finalArray = [];
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])) {
                finalArray.push(collection[key]);
            }
        }
        return finalArray;
    } else {
        throw new Error('invalid');
    }
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length;
    } else {
        throw new Error('invalid');
    }
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else if (n > 0) {
        return array.slice(0, n);
    } else {
        return [];
    }
}

function myLast(array, n) {
    const length = array.length;

    if (n === undefined) {
        return array[length - 1];
    } else if (n > 0) {
        return array.slice(Math.max(length - n, 0));
    } else {
        return [];
    }
}

function myKeys(object) {
    if (typeof object !== 'object' || object === null) {
        throw new Error('invalid');
    }

    return Object.keys(object);
}

function myValues(object) {
    if (typeof object !== 'object' || object === null) {
        throw new Error('Invalid parameter. Must be an object.');
    }

    return Object.values(object);
}





