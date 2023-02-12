import { useState } from 'react';

import style from './wordcard.module.css';
import TagList from './taglist';


function WordCard({ wordinfo }){
    const [ selected, setSelected ] = useState(0);
    const posList = wordinfo.meanings.map(({ partOfSpeech: pos }) => (
        pos.charAt(0).toUpperCase() + pos.slice(1)
    ));

    return (
        <div className={ style.card }>
            <h1 className= { style.title }>
                { 
                    !!wordinfo.word &&
                    (wordinfo.word.charAt(0).toUpperCase() + wordinfo.word.slice(1))
                }
            </h1>
            <TagList
                tags={ posList }
                selected={ selected }
                handleTag={ i => setSelected(i) }
            />
            <h3 className={ style.subtitle }>
                Definition as <i>{ posList[selected] }</i>
            </h3>
            <p>{ wordinfo.meanings[selected].definitions[0].definition }</p>
        </div>
    );
}


export default WordCard;

