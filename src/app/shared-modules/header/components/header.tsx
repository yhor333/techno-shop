import LayoutHeader from './layout-header/layout-header';
import NavbarHeader from './navbar-header/navbar-header';
import UserPanelHeader from './user-panel-header/user-panel-header';

const Header = () => {
  return (
    <LayoutHeader>
      <NavbarHeader />
      <UserPanelHeader />
    </LayoutHeader>
  );
};

export default Header;
