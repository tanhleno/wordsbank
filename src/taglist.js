import style from './taglist.module.css';


function TagList({ tags, selected=0, handleTag=() => {} }){
    return (
        <div className={ style.list }>
            {
                !!tags &&
                tags.map((tag, index) => (
                    <button
                        key={ tag }
                        className={ `${style.tag}${index === selected? ` ${style.selected}`: ''}` }
                        onClick={() => handleTag(index)}
                    >
                        { tag }
                    </button>
                ))
            }
        </div>
    );
}


export default TagList;

