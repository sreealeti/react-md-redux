import React, {Component} from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import '../styles/App.scss';
class App extends Component {

  render() {
    return (
      <NavigationDrawer
        drawerTitle="SimpleApp"
        toolbarTitle="Welcome to SimpleApp"
        drawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        navItems={[]}
      >
        <h1 className="md-text-container md-text-center">Hello World!</h1>
      </NavigationDrawer>
    );
  }
}

export default App;
