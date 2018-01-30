import { Handler } from 'aws-lambda';
import { wrapHandle} from '../../../utils/HandleUtils';
import Main from './main';

export const hello: Handler = wrapHandle(new Main());
