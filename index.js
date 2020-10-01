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
 * @return {*} : Returns exact value that was passed into value parameter unchanged. 
 */
 
 function identity(value){
     return value;
 }
 module.exports.identity = identity;

/**
 * typeOf: This takes in a value and returns the what type of value it is as a string 
 * 
 * 
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
 * first
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
 * last 
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
 * indexOf
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
 * contains:
 * 
 */
 function contains( array, value){
    return(array.includes(value)? true: false);
}

module.exports.contains = contains;

/**
 * 
 * unique:
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
 * filter:
 * 
 */
 
 function filter(array, func){
    let filterArray = [];
   array.each(function(e, i, array){
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
 * reject:
 * 
 */
 
 function reject(array, func){
    let filterArray = [];
    array.each(function(e, i, array){
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
 * partition: 
 * 
 */
 
 function partition(array, func){
    
    let truthy = [];
    let falsy = [];
    array.each(function( e, i, array){
        let result = func(e, i, array);
            if( result){
               truthy.push(e);   
            }else if(!result){
                falsy.push(e);
            }
        
    });
    return [truthy,falsy];
}

module.exports.partition = partition; 

/** 
 * 
 * map
 */
 
 function map(collection, func){
    let newArray = [];
    collection.each(function( thing, i, array){
      newArray.push(func(thing,i,array)); 
    });
    return newArray;
    
}

module.exports.map = map; 

/**
 * 
 * pluck:
 */
 
 function pluck(array, property){
    
  return array.map(function(element){
        return element[property];
    });
    
    
}

module.exports.pluck = pluck; 

/**
 * 
 * every:
 * 
 */
 
 function every(collection,func){
    let result = true;
    collection.each(function(e, i, collection){
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
 * some
 */
 
function some(collection, func){
    let result = false;
    collection.each(function(e,i,collection){
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
 * reduce
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
 * extend:
 * 
 */
 
function extend(object1, object2){
    return Object.assign(...arguments);
}

module.exports.extend = extend;