import { useState } from 'react';


function Filter({ options, handleFilter }){
    const [ selected, setSelected] = useState('all');

    return (
        <div className='filter' onChange={ e => setSelected(e.target.value) }>
            <select>
                <option value='all'>All</option>
                { 
                    !!options && options.map( item => (
                        <option key={ item } value={ item }>
                            { item.charAt(0).toUpperCase() + item.slice(1) }
                        </option>
                    ))
                }
            </select>
            <button onClick={ () => handleFilter(selected) } >Filter</button>
        </div>
    )
}


export default Filter;

