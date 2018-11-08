import nlp from 'compromise';
import { findVerbs, withTags, matchInString } from '~/src/compromise/parse';

//callback example
const sendEmail = function(string) {
  console.log(string);
};

//input example
const string = "Send Email to Vijay";

//mapping example
const mappingSample = { 
  "send": {
    '#Email': {
      callback: sendEmail,
    },
    '#namedEntity': {
      callback: sendEmail,
    },
    'noun': {
      callback: sendEmail,
    },
    callback: "openCompose",
  }
}

const findCallback = ( input, callback, params = {}) => {
  if (mapping === {}) {
    return false;
  }

  if (Object.keys(mapping) === ['callback']) {
    const parsedInput = withTags(input); //parse input with compromise tags
    return mapping.callback.bind(null, params, parsedInput);
  }

  if (input && mapping) {
    //TODO: amortize
    Object.keys(mapping).forEach( (key) => {
      const match = matchInString(key, input);//compromise call to match
      if (match !== '') {
        params[key] = "set this"; //compromise call return match
        const nextInput; //strip what matched from input, I think there's a compromise way to do this
        const next = findCallback(nextInput, mapping[key], params);
        if (next === false) {
          if(Object.keys(mapping).includes('callback')) {
            return mapping.callback.bind(null, parsedInput);
          } else {
            return false;
          }
        }
      }
    }
  }


// const findInitialMap = (input, mapping) => {
//   const actions = findVerbs(input);

//   actions.forEach((verb) => {
//     if (Object.keys(mapping).includes(verb)) {
//       return mapping[verb];
//     }
//   })
//   return {};
// };

// //recursively search for valid cb, consume keys, parse what's left for cb args
// const = findCallback(input, mapping, pathInput = {}) => {
//   if (mapping === {}) {
//     return false;
//   }

//   //FIXME I'm too tired to think about recursive algos, refactor tomorrow
//   if (Object.keys(mapping) === ['callback']) {
//     const parsedInput = withTags(input); //parse inpu with compromise tags
//     return mapping.callback.bind(null, pathInput, parsedInput);
//   }

//   if (input && mapping) {
//     //TODO: amortize
//     Object.keys(mapping).forEach( (key) => {
//       const match = matchInString(key, input);//compromise call to match
//       if (match !== '') {
//         const regex = new RegExp(match);
//         path.key = 
//         const nextInput = input.replace(regex, ''); //strip what matched from input, I think there's a compromise way to do this
//         const next = findCallback(nextInput, mapping[key]);
//         if (next === false) {
//           if(Object.keys(mapping).includes('callback')) {
//             return mapping.callback.bind(null, parsedInput);
//           } else {
//             return false;
//           }
//         }
//       }
//     }
//   }
//   return false;
// }

// const mapToAction = (input, mapping) => {
//   let verbMap = findActionVerbMap(mapping);

// }