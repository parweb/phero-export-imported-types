import { Post } from '../post';
import { Id } from '../shared';

export default interface User {
  id: Id;
  name: string;
  posts?: Post['id'][];
}
