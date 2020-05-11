import React from 'react';
import styles from './App.module.css';
import AppBar from './components/AppBar';
import BadJokesViewer from './components/BadJokesViewer';
const menuItems = [{path: '/', name: 'Login'}, {path: '/', name: 'Blog'}]

function App() {
  return (
    <div className={styles.app}>
        <AppBar items={menuItems}/>
        <div className={styles.main}>
          <BadJokesViewer />
        </div>
    </div>
  );
}

export default App;
