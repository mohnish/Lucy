import nlp from 'compromise';

export const findVerbs = (input) => {
  //there's probably a better way to do this, also need to strip punctuation
  return nlp(input).verbs().out('text').split(" ");
}