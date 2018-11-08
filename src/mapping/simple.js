import { withTags, allTags } from '~/src/compromise/parse';

const sendEmail = (...params) => (console.log('Email', JSON.stringify(params)));
const sendInvite = (...params) => (console.log('Invite', JSON.stringify(params)));
const callPhone = (...params) => (console.log('Phone', JSON.stringify(params)));
const createTask = (...params) => (console.log('Phone', JSON.stringify(params)));

const sampleMapping = {
  'send? email #Conjunction? #Email?': sendEmail,
  'send? invite #Conjunction? #Email?': sendInvite,
  'call? #PhoneNumber': callPhone,
  'create? task': createTask,
}

const findCallback = (input, mapping) => {
  let callback;
  Object.keys(mapping).some( (key) => {
    const parse = withTags(input, key);
    if (parse != undefined || parse.length === 0) {
      let params = allTags(input);
      callback = mapping[key].bind(null, parse, params);
    }
    return (parse != undefined || parse.length === 0);
  });

  if (!callback) {
    return new Error('No match for input');
  }

  return callback;
}