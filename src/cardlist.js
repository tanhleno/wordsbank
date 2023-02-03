import WordCard from './wordcard';
import style from './cardlist.module.css';


function CardList({ words }){
    return (
        <div className={ style.list }>
            { !!words && words.map(item => 
                <WordCard key={ item.word } word={ item } />
            ) }
        </div>
    );
}


export default CardList;

