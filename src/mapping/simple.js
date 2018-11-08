// import { withTags, allTags } from '~/src/compromise/parse';

const sendEmail = (...params) => (console.log('Email', JSON.stringify(params)));
const sendInvite = (...params) => (console.log('Invite', JSON.stringify(params)));
const callPhone = (...params) => (console.log('Phone', JSON.stringify(params)));
const createTask = (...params) => (console.log('Task', JSON.stringify(params)));
const moveTo = (...params) => (console.log('Move To', JSON.stringify(params)));

const sampleMapping = {
  '[#verb] * task #Preposition [(email|call|inmail|custom)]': createTask,
  'send? email #Conjunction? [#FirstName] [#LastName]': sendEmail,
  'send? email #Conjunction? [(#Email|#Person)]': sendEmail,
  'send? invite #Conjunction? [(#Email|#Person)]': sendInvite,
  'call? [#PhoneNumber]': callPhone,
  'call [#NamedEntiity]': callPhone,
  '(open|navigate|move) #Preposition? [*]': moveTo,
}

const findCallback = (input, mapping) => {
  let callback;
  Object.keys(mapping).some( (key) => {
    const parse = withTags(input, key);
    const valid = (parse != undefined && Object.keys(parse).length !== 0);

    if (valid) {
      let params = allTags(input);
      callback = mapping[key].bind(null, parse, params);
    }
    return valid;
  });

  if (!callback) {
    throw new Error('No match for input');
  }

  return callback;
}