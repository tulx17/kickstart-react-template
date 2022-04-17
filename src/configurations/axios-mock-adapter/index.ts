import { mock, axios } from './configurations';
import './handlers';

mock.onAny().passThrough();

export { mock, axios };
