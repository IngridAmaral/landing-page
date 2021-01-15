import React from 'react';
import Header from './components/header/Header';
import './App.scss';

export const HOME = 'Home';

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
      <div className="App">
        <Header
          toggleMenu={this.toggleMenu}
          isMenuOpen={isMenuOpen}
          selectNavItem={this.selectNavItem}
          selectedNavItem={selectedNavItem}
        />
      </div>
    );
  }
}

export default App;
