import { Post } from '../post';
import { User } from '../user';

const collection: Post[] = [
  { id: 1, title: 'article by chris', writter: 1 },
  { id: 2, title: 'article by cassie', writter: 1 },
  { id: 3, title: 'article by lena', writter: 2 },
  { id: 4, title: 'article by brahim', writter: 2 },
  { id: 5, title: 'article by chris', writter: 3 },
  { id: 6, title: 'article by cassie', writter: 3 },
  { id: 7, title: 'article by lena', writter: 4 },
  { id: 8, title: 'article by brahim', writter: 4 }
];

export default function list(limit: number): Post[] {
  return collection;
}
