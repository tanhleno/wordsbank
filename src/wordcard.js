import style from './wordcard.module.css'


function WordCard({ wordinfo }){
    return (
        <div className={ style.card }>
        <h1 className= { style.title }>
            { !!wordinfo.word && (wordinfo.word.charAt(0).toUpperCase() + wordinfo.word.slice(1)) }
        </h1>
        <ul>
            { !!wordinfo.meanings && wordinfo.meanings.map(({ partOfSpeech }) => (
                <li key={ partOfSpeech }>
                    { partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1) }
                </li>
            )) }
        </ul>
        </div>
    );
}


export default WordCard;

