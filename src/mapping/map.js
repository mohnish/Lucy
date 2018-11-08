import nlp from 'compromise';
import { findVerbs } from '~/src/compromise/parse';

//callback example
const sendEmail = function(string) {
  console.log(string);
};

//input example
const string = "Send Email to Vijay";

//mapping example
const mappingSample = { 
  send: {
    '#Email': {
      callback: sendEmail,
    },
    namedEntity: {
      callback: sendEmail,
    },
    noun: {
      callback: sendEmail,
    },
    callback: "openCompose",
  }
}

const findActionVerbMap = (input, mapping) => {
  const actions = findVerbs(input);

  actions.forEach((verb) => {
    if (Object.keys(mapping).includes(verb)) {
      return mapping[verb];
    }
  })
  return {};
};

//recursively search for valid cb, consume keys, parse what's left for cb args
const = findCallback(input, mapping) => {
  if (mapping === {}) {
    //error invalid map
  }
  else if (mapping.keys === ['callback']) {
    const parsedInput; //parse inpu with compromise calls
    return mapping.callback.bind(null, parsedInput);
  } else if (input && mapping) {
    const match;//compromise call to match
    if (match !== '') {
      const regex = new RegExp(match);
      const nextInput = input.replace(regex, ''); //strip what matched from input, I think there's a compromise way to do this
      return findCallback(nextInput, nextMappings);
    }
  } else {
    //error invalid map
  }
}