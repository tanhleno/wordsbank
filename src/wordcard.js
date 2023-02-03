import style from './wordcard.module.css'


function WordCard({ word }){
    return (
        <div className={ style.card }>
        <h1 className= { style.title }>
            { word.word.charAt(0).toUpperCase() + word.word.slice(1) }
        </h1>
        <ul>
            { word.pos.map(item => 
                <li key={ item }>{ item.charAt(0).toUpperCase() + item.slice(1) }</li>
            ) }
        </ul>
        </div>
    );
}


export default WordCard;

