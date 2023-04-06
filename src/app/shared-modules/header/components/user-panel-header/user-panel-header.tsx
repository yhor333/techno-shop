import Person from '../../../../../assets/img/person';
import Cart from '../../../../../assets/img/cart';

import Styles from './user-panel-header.module.scss';
import { Link } from 'react-router-dom';

const UserPanelHeader = () => {
  return (
    <div className={Styles.userPanel}>
      <Link to={'/account'}>
        <Person className={Styles.userPanel__person} />
      </Link>
      <Link to={'/cart'}>
        <Cart className={Styles.userPanel__cart} />
      </Link>
    </div>
  );
};

export default UserPanelHeader;
