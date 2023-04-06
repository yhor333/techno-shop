import { FC, ReactNode } from 'react';

import Styles from './LayoutHeader.module.scss';

interface ILayoutHeader {
  children: ReactNode;
}

const LayoutHeader: FC<ILayoutHeader> = ({ children }) => {
  return <div className={Styles.container}>{children}</div>;
};

export default LayoutHeader;
