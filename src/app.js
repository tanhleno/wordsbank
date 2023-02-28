import { useState } from 'react';

import CardList from './cardlist';
import Filter from './filter';

import apple from './assets/apple.json';
import talk from './assets/talk.json';
import john from './assets/john.json';
import here from './assets/here.json';
import cow from './assets/cow.json';
import love from './assets/love.json';
import hello from './assets/hello.json';


const rawdata = [
    apple,
    talk,
    john,
    cow,
    here,
    love,
    hello,
];

const options = [...rawdata.reduce(
    (current, [ wordinfo ]) => (
        new Set([...current].concat(wordinfo.meanings.map(item => item.partOfSpeech)))
    ),
    new Set(),
)];


function App(){
    const [ data, setData ] = useState(rawdata);
    const handleSubmit = (opt) => (
        opt === 'all'?
        setData(rawdata):
        setData(rawdata.filter(([ wordinfo ]) => (
            wordinfo.meanings.map(item => item.partOfSpeech).reduce(
                (current, partOfSpeech) => current || partOfSpeech === opt,
                false,
            )
        )))
    );

    return (
        <>
            <h1>Welcome to the WordsBank!</h1>
            <Filter options={ options } handleFilter={ handleSubmit } />
            <CardList wordlist={ data } />
        </>
    );
}


export default App;

