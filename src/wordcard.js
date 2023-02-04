import style from './wordcard.module.css'


function WordCard({ wordinfo }){
    return (
        <div className={ style.card }>
        <h1 className= { style.title }>
            { wordinfo.word.charAt(0).toUpperCase() + wordinfo.word.slice(1) }
        </h1>
        <ul>
            {!!wordinfo.pos && wordinfo.pos.map(item => 
                <li key={ item }>{ item.charAt(0).toUpperCase() + item.slice(1) }</li>
            ) }
        </ul>
        </div>
    );
}


export default WordCard;

