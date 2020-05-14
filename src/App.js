import React from 'react';
import {Helmet} from 'react-helmet'
import styles from './App.module.css';
import AppBar from './components/AppBar';
import smile from './smile.png';
import Text from './components/Text'
import BadJokesViewer from './components/BadJokesViewer';

function App() {
  return (
    <div className={styles.app}>
        <Helmet>
          <title>BadJokes</title>
          <meta name="description" content="The world's #1 source for bad jokes." />
          <link rel="icon" href={smile} />
        </Helmet>
        <AppBar>
          <AppBar.Item path="javascript:alert('No point in that...');">Login</AppBar.Item>
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
