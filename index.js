'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: This takes a value and simply returns that exact value that is passed in. 
 * 
 * @param {*} value : The value to be returned from this function. 
 * @return {*} value : Returns exact value that was passed into value parameter unchanged. 
 */
 
 function identity(value){
     return value;
 }
 module.exports.identity = identity;

/**
 * typeOf: This takes in a value and returns the what type of value it is as a string 
 * 
 * @param {*}value: Any value 
 * @return {string}: Returns type of value as a string
 */
 
function typeOf(value){
    if( Array.isArray(value)){
        return "array"; 
    } else if ( value === null){
        return "null";
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: This takes an array and a number and returns the number of items at the beginning of
 * the given array in a new array. If the array argument provided is not an argument then just return [].
 * If the number argument is not a number then return the first element in the array. 
 * If number is negative then return []. If number is greater than array length then return the entire array.
 * 
 * @param {Array}: Array which to pull elements from. 
 * @param {Number}: Numerical value of elements that need to be pulled from given array
 * @return {Array}: New array with <number> of elements from <array>
 * 
 * 
 */
 
function first(array,number){
    if(!Array.isArray(array)|| number < 0){
        return [];
    } else if (typeof number !== 'number'){
        return array[0];
    } else if (number > array.length){
        return array;
    
    }else {
        return array.splice(0,number);
    }
        
    
}
module.exports.first = first;

/**
 * last: This will take in an array and a number and return a new array with the <number> of elements
 *       from the end of the array in a new array. If array argument given is not an array then return [].
 *       If number argument given is not a number then return the last element in the array.
 *       If the number given is negative then return []. If the number given is greater than the array length then return the entire array.
 * 
 * @param {Array}: Array which to pull elements from. 
 * @param {Number}: Number is numerical value indicating number of elements to pull from end of array given. 
 * @return {Array}: New array containing <number> of items from end of original array 
 * 
 */
 
 function last(array, number){
    if(!Array.isArray(array)|| number < 0){
        return [];
    } else if (typeof number !== 'number'){
        return array[array.length -1];
    }else if( number > array.length){
        return array;
    }
    else {
        return array.slice(array.length - number); 
    }
}
module.exports.last = last;

/**
 * indexOf: This will take an array and a value and return the index of where that value was first found in the array. 
 *          If the <value> is not found in the array then return -1.
 * 
 * @param {Array}: Array from which to search through. 
 * @param {*} any value: This will be the item for which you are looking through the array for. 
 * 
 * @return{Number}: This will be index where that value was first found in the array. 
 * 
 * 
 */
 
 function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(value === array[i]){
            return i;
        }
    }
        return -1; 
        
    
}
module.exports.indexOf = indexOf;

/**
 * contains: This takes an array and a value and returns true if the array contains the value otherwise it 
 *           returns false if it does not contain the value. 
 * 
 * @param {Array} : Array which to search through to look for the value. 
 * @param {*} any value: Item to look for in the given array. 
 * 
 * @return {Boolean} true or false: Return true if value is found in array and false if it is not found. 
 * 
 */
 function contains( array, value){
    return(array.includes(value)? true: false);
}

module.exports.contains = contains;

/**
 * 
 * unique: This will take an array and return a new array with duplicates removed. 
 * 
 * @param {Array}: Array which to iterate through to search for duplicates. 
 * 
 * @return {Array}: New array with all duplicates removed. 
 * 
 */
 
 function unique(array){
    let newArray =[];
    for( let i = 0; i< array.length; i++){
        if ( !newArray.includes(array[i]) ){
         newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.unique = unique;

/**
 * filter: This will take an array and a function and return a new array with elements that held true after running
 *         the function on them. 
 * 
 * @param {Array}: Array for which each element in it will have a function applied. 
 * @param {Function} func: The function that will be applied to each element in array. 
 * 
 * @return {Array}: Array containing only the elements for which running the function returned true. 
 * 
 */
 
 function filter(array, func){
    let filterArray = [];
   each(array, function(e, i, array){
       let outcome = func(e,i,array);
            if(outcome === true){
            filterArray.push(e); 
            }
   });
    return filterArray;
}

module.exports.filter = filter;

/**
 * 
 * reject: This will take an array and a function and return an array with the elements for which applying the 
 *         function resulted in a false result. 
 * 
 * @param {Array}: Array with elements that the function will be applied to. 
 * @param {Function} func: The function that will be applied to each element in the array. 
 * 
 * @return {Array}: Array containing all the elements for which applying the function resulted in a false result. 
 * 
 */
 
 function reject(array, func){
    let filterArray = [];
    each(array, function(e, i, array){
    let outcome = func(e,i,array);
        if(outcome === false){
        filterArray.push(e); 
        }
    });
    return filterArray;
}

module.exports.reject = reject;

/**
 * 
 * partition: This will take an array and a function. The function will be applied to each element in the array
 *            and two subarrays will be returned together in an array. One subarray will contain false results after
 *            running function and one subarray will contain true results after running function on each element. 
 * 
 * @param {Array}: The array for which a function will be run on element. 
 * @param {Function} func: Function that will be applied to each element in the array.  
 * @return {Array} array with two subarrays: One array with subarray of true results after running function and subarray of
 *            of false results after running function. 
 * 
 */
 
 function partition(array, func){
    
    let truthy = [];
    let falsy = [];
    each(array, function( e, i, array){
        if(func(e, i, array)){
               truthy.push(e);   
            }else if(!func(e, i, array)){
                falsy.push(e);
            }
        
    });
    return [truthy,falsy];
}

module.exports.partition = partition; 

/** 
 * 
 * map: This will take a collection and a function and apply the function to each element and return 
 *      an array of the results of running the funciton on the elements. 
 * 
 * @param {collection} Array or Object: The collection contains the elements for which the function will be applied to. 
 * @param {Function} func: The function that will be applied to each element in the collection. 
 * @return {Array}: New array with all the elements after applying the function to them. 
 */
 
 function map(collection, func){
    let newArray = [];
    each(collection, function( thing, i, array){
      newArray.push(func(thing,i,array)); 
    });
    return newArray;
    
}

module.exports.map = map; 

/**
 * 
 * pluck: This will take an array of obejcts and a property and find the value for which the key matches the property given. 
 *
 * @param {Array} array of objects: The array of objects which to look for the key that matches the property given. 
 * @param {*}property: Property that represents key. 
 * 
 * @return {Object}: The element or element in the objects in the array for which the key matches the property given. 
 * 
 */
 
 function pluck(array, property){
    
  return map(array, function(element){
        return element[property];
    });
    
    
}

module.exports.pluck = pluck; 

/**
 * 
 * every: Takes a collection and a function and returns a boolean of true if applying the function to every 
 *         element returned true and false if it is even false for one element. 
 * 
 * @param {Collection} array or object: The collection for which the function will be applied to each element. 
 * @param {Function} func: The function to be applied to each element in array or object. 
 * 
 * @return {Boolean} true or false: Return true if applying the function to every item was true and return false if
 *          applying the function was false even for one item.  Also return true if no function is given and if every
 *          element on its own is truthy. 
 * 
 * 
 */
 
 function every(collection,func){
    let result = true;
    each(collection, function(e, i, collection){
        if (typeof func === "function"){ 
            if(!func(e ,i, collection)){
        
            result = false;
            }
            
        }else if ( !e ){
          result = false;
        }
        
        
    });
   return result;  
}

module.exports.every = every; 

/** 
 * 
 * some: Takes a collection and a function and returns a boolean of false if applying the function to every 
 *         element returned false and returns true if applying the function is true for even one element. 
 * 
 * @param {Collection} array or object: The collection for which the function will be applied to each element. 
 * @param {Function} func: The function to be applied to each element in array or object. 
 * 
 * @return {Boolean} true or false: Return false if applying the function to every item was false and return true if
 *          applying the function was true even for one item.  Also return true if no function is given and if at least
 *          one element on its own is truthy. 
 * 
 * 
 * 
 */
 
function some(collection, func){
    let result = false;
    each(collection, function(e,i,collection){
        if(typeof func !== "function"){
            
            if (e){
            result = true;
            }
        }
        else if(func(e, i, collection)){
            result = true;
        }
        
        
    });
    return result; 
}

module.exports.some = some; 

/** 
 * reduce: This will take an array a function and a seed and return a value of the final function call on all the elements in the array. 
 * 
 * @param {Array}: This is the array to apply the function to. 
 * @param {Function} func: This is the function which will take the arguments of a previous value, element, index,
 *                  and array.  This function will be applied the items in the array. 
 * @param {*} Seed: This is the initial value that can be used to start as the initial value. 
 * @return {*} any value: Depending on what you indicate with your function it can be any final value for which
 *             the final function calls resolves to.
 * 
 * 
 */
 
 function reduce(array,func,seed){
    
        let previous = seed;
        if(seed === undefined){
            let previous = array[0];
            for(let i =1; i < array.length; i++){
        
                previous= func(previous, array[i], i );
            }
        return previous; 
        }
        for(let i = 0; i < array.length; i++){
            previous = func(previous, array[i], i);
        }
        return previous;
}

module.exports.reduce = reduce; 

/**
 * 
 * extend: This will take two or more objects and combine all their elements into one object. 
 * 
 * @param{Object}: First object with elements. 
 * @param{Object}: Second object with elements that will be copied over into first object. 
 * @param{Object} unlimited possible additional objects: Other objects whose elements will also be copied to first object
 * 
 * @return {Object}: Final object with all items from other objects combined. 
 * 
 */
 
function extend(object1, object2){
    return Object.assign(...arguments);
}

module.exports.extend = extend;