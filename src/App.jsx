import React from 'react';
import Header from './components/header/Header';
import LateralMenu from './components/header/lateral-menu/LateralMenu';
import MainContent from './components/main-content/MainContent';
import './App.scss';

export const HOME = 'Home';
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

    return (
      <div className="app">
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
              isMenuOpen={isMenuOpen}
              selectNavItem={this.selectNavItem}
            />
          </div>
        </div>
        <MainContent />
      </div>
    );
  }
}

export default App;
