import React from 'react';
import styles from './App.module.css';
import AppBar from './components/AppBar';
import smile from './smile.png';
import Text from './components/Text'
import BadJokesViewer from './components/BadJokesViewer';

// const menuItems = [{path: 'javascript:alert("No point in that.")', name: 'Login'}, {path: '/', name: 'Blog'}]

function App() {
  return (
    <div className={styles.app}>
        <AppBar>
          <AppBar.Item path="/">Login</AppBar.Item>
          <AppBar.Item path="/">Blog</AppBar.Item>
          <AppBar.Logo>
            <Text size="lg">BadJokes </Text>
            <img style={{height: '39px'}} src={smile} alt="smile logo"></img>
          </AppBar.Logo>
        </AppBar>
        <div className={styles.main}>
          <BadJokesViewer />
        </div>
    </div>
  );
}

export default App;
