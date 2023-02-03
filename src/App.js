//import WordCard from './wordcard';
import CardList from './cardlist';


const data = [
    {'word': 'cow', 'pos': ['noun']},
    {'word': 'be', 'pos': ['verb']},
    {'word': 'here', 'pos': ['adverb']},
    {'word': 'talk', 'pos': ['verb', 'noun']},
]


function App(){
    return (
        <>
            <h1>Welcome to the WordsBank!</h1>
            <CardList words={ data } />
        </>
    );
}


export default App;

