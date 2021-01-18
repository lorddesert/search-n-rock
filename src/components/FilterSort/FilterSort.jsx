import React from 'react'
import './FilterSort.css';
import searchSVG from './resources/search.svg';

// Scripts
import { search } from '../scripts/crud.js';

const orderAsc = bands => {
  let orderBands = bands.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })

  return orderBands;
}

const orderDesc = bands => {
  let orderBands = bands.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1
    }
    return 0;
  })

  return orderBands;
}

const FilterSort = props => {

  const orderBandsAsc = orderAsc([...props.bands]);
  const orderBandsDesc = orderDesc([...props.bands]);

  return (
    <div className='filterSort'>
      <div className='Filter'>
        <label htmlFor='Filter'></label>
        <div className='filter-container'>
          <input type="text" name="filter" id="filter" placeholder='Band name...'/>
          <img src={searchSVG} alt="search" onClick={async () => {
            try {
              let res = await search(document.getElementById('filter').value);
              
              if(res) {
                props.setSearchError('');
                props.setBands([...res]);
              }
              else
                props.setSearchError('Error 404 not found.');
            } catch(error) {
                console.log(error);
                alert('Something happened, try again.');
            }
          }}/>
        </div>
      </div>
      <div className='Sort-container'>
        <label htmlFor='Sort'></label>
        {props.enableSort &&
          <select name='Sort' id='Sort' defaultValue='Sort'>
            <option value='Sort' disabled>Sort</option>
            <option value='Ascendent' onClick={() => props.setBands([...orderBandsAsc])}>Ascendent</option>
            <option value='Descendent' onClick={() => props.setBands([...orderBandsDesc])}>Descendent</option>
          </select>
        }
      </div>
    </div>
  )
}

export default FilterSort;