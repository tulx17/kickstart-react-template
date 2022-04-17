import { default as accounts } from './accounts.json';
import { default as metadata } from './metadata.json';

const database = {
  ...accounts,
  ...metadata
};

export default database;
