import { User } from '../user';
import { Id } from '../shared';

export default interface Post {
  id: Id;
  title: string;
  writter?: User['id'];
}
