import { v4 } from 'uuid';
import { ITab } from '../../types/browsing';

export const initialTab: ITab = {
  id: v4(),
  point: 0,
  stack: ['/'],
};
