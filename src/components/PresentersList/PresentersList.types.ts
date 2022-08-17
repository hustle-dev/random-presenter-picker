import { StatusType } from 'pages/choice';
import { Dispatch, SetStateAction } from 'react';

export type PresentersListProps = {
  presenters: string[] | null;
  setSelectedPresenter: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<StatusType>>;
};
