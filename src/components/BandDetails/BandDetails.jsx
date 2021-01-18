import React from 'react'
import './BandDetails.css';
import membersSVG from './resources/membersSVG.svg';
import moreOptions from './resources/moreOptions.svg';

// Components
import Band from '../Band/Band';
import Album from '../Album/Album';
import Member from '../Member/Member';

// Scripts
import { deleteBand, editBand } from '../scripts/crud';

const handleEvent = () => {
  const displayOptions = document.getElementById('displayOptions');

  displayOptions.classList.toggle('display');
}

const BandDetails = props => {
  return (
    <div className='BandDetails'>
      <header>
        <Band band={props.selectedBand} inBandDetails={true}/>
        <div>
          <img className='options' src={moreOptions} alt="options" onClick={handleEvent}/>
          <ul className='displayOptions' id='displayOptions'>
            <li onClick={() => props.setShowEditBand(true)} >Edit</li>
            <li onClick={() => deleteBand(props.selectedBand.id)} ><strong>Delete</strong></li>
          </ul>
        </div>
      </header>
      {props.selectedBand.albums &&
        <main className='Band-albums-container'>
            <h2>Albums</h2>
          <div className='Band-albums'>
            { props.selectedBand.albums[1] ? 
              props.selectedBand.albums.map((album, i) => {
                return(
                  <Album
                    key={i}
                    album={album}
                  />
                );
              })
            :
              <h2 className='not-finded'>We didn't find any</h2>
            }  
          </div>  
        </main>
      }
      <footer className='BandDetails-footer'>
          <h2>Members</h2>
          <img src={membersSVG} alt='svg'/>
        <div className='Members'>
          {props.selectedBand.members.map((member, i) => 
              <Member
                member={member.name}
                key={i}
              />)
          }
        </div>
      </footer>
    </div> 
  );
}

export default BandDetails;