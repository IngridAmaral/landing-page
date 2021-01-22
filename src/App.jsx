import React from 'react';
import Header from './components/header/Header';
import LateralMenu from './components/header/lateral-menu/LateralMenu';
import MainContent from './components/main-content/MainContent';
import UserProducts from './components/user-products/UserProducts';
import './App.scss';
import Footer from './components/footer/Footer';

export const HOME = 'home';
export const USER_NAME = 'liqid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      selectedNavItem: HOME
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  selectNavItem = (item) => {
    this.setState({ selectedNavItem: item });
  };

  render() {
    const { isMenuOpen, selectedNavItem } = this.state;
    const fixHeight = isMenuOpen ? '100vh' : 'fit-content';
    return (
      <div className="app" style={{ height: fixHeight }}>
        <div className="header-wrapper">
          <Header
            userName={USER_NAME}
            toggleMenu={this.toggleMenu}
            isMenuOpen={false}
            selectNavItem={this.selectNavItem}
            selectedNavItem={selectedNavItem}
          />
          <div className={`lateral ${isMenuOpen ? 'show' : 'hide'}`}>
            <LateralMenu
              userName={USER_NAME}
              toggleMenu={this.toggleMenu}
              isMenuOpen
              selectNavItem={this.selectNavItem}
            />
          </div>
        </div>
        <MainContent />
        <UserProducts />
        <Footer backgroundColor="mine-shaft" svgColor="primary" />
      </div>
    );
  }
}

export default App;
