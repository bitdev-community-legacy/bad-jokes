import React, {useState, useEffect} from 'react'
import styles from './BadJokesViewer.module.css';
import Card from '../Card';
import Text from '../Text';
import Button from '../Button'


const BadJokesViewer = () => {
    const [joke, setJoke] = useState(['Loading...']);
    const [isLoading, setIsLoading] = useState(false);

    const getJoke = async () => {
        setIsLoading(true);
        try {
            let res = await fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=racist&type=single');
            let data = await res.json();
            const dataArr = data.joke.split('\n');
            setJoke(dataArr);
            setIsLoading(false);
        }
        catch (err) {
            setJoke([`ERROR: ${err.message}`]);
            setIsLoading(false);
        }      
      }
    
    useEffect(() => {
        getJoke();
    }, [])

    return (
        <div>
            <Card size='md'>
                <div className={styles.contentWrapper}>
                    <Text>
                        {joke.map(line => <p>{line}</p>)}
                    </Text>
                </div>
                <div>
                    <Button disabld={isLoading} onClickMethod={getJoke} name="the_name">another one, please</Button>
                </div>
            </Card>
        </div>
    )
}

export default BadJokesViewer;