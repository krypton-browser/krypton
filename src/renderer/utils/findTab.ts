import { ITab } from '../../types/browsing';

interface ISelectTab {
  readonly id: string;
  readonly tabs: ITab[];
}

export const selectTab = ({ id: tabId, tabs }: ISelectTab): ITab =>
  tabs.filter(({ id }) => id === tabId)[0];
