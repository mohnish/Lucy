import nlp from 'compromise';

export const findVerbs = (input) => {
  //there's probably a better way to do this, also need to strip punctuation
  return nlp(input).verbs().out('text').split(" ");
}

//returns all possible labels hash
export const withTags = (input) => {
  return nlp(input).out('tags');
}

//find if there is match
export const match = (key, input) => {
  return nlp(input).match(key).out('text');