import { User } from '../user';

const collection: User[] = [
  { id: 1, name: 'chris', posts: [1, 2] },
  { id: 2, name: 'cassie', posts: [3, 4] },
  { id: 3, name: 'lena', posts: [5, 6] },
  { id: 4, name: 'brahim', posts: [7, 8] }
];

export default function list(limit: number): User[] {
  return collection;
}
