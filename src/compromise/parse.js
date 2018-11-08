// import nlp from 'compromise';

const findVerbs = (input) => {
  //there's probably a better way to do this, also need to strip punctuation
  return nlp(input).verbs().out('text').split(" ");
}

//returns all labels hash for all queried
const withTags = (input, query) => {
  let raw = nlp(input).match(query).out('tags');
  let result = {};
  raw.map( (value) => {
    result[value.text] = value.tags;
  })
  return result;
}

const allTags = (input, query) => {
  let raw = nlp(input).out('tags');
  let result = {};
  raw.map( (value) => {
    result[value.text] = value.tags;
  })
  return result;
}

//find if there is match
const matchInString = (key, input) => {
  return nlp(input).match(key).out('tags');
}