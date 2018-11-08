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
    match: {
      value: "email",
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
  const actions = nlp(input).verbs(0).out('array');

  actions.forEach((verb) => {
    if (Object.keys(mapping).includes(verb)) {
      return mapping[verb];
    }
  })
  return {};
};

//recursively search for valid cb, consume keys, parse what's left for cb args
const = findCallback(input, mapping, params) => {
  //
}