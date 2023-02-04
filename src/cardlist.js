import WordCard from './wordcard';
import style from './cardlist.module.css';


function CardList({ wordlist }){
    return (
        <div className={ style.list }>
            { !!wordlist && wordlist.map(item => 
                <WordCard key={ item.word } wordinfo={ item } />
            ) }
        </div>
    );
}


export default CardList;

