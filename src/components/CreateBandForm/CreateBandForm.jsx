import React, { useState, useEffect } from 'react'
import './CreateBandForm.css';


// Components
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import Loader from '../Loader/Loader';

// Scripts
import { createBand, editBand, obtainSelectedBand } from '../scripts/crud';
import Band from '../Band/Band';


      // <div className='add-container'>
      //   <label htmlFor={`album-name-${i}`}>Album name</label>
      //   <input type="text" name={`album-${i}`} id={`album-${i}`}/>
      //   <label htmlFor={`album-year-${i}`}>Album year</label>
      //   <input type="text" name={`album-name-${i}`} id={`album-year-${i}`}/>
      // </div>


const CreateBandForm = props => {
  let [band, setBand] = useState(false)
    useEffect(async () => {
      if(!band && props.editMode) {
        let newBand = await obtainSelectedBand(props.selectedBand.name);
        setBand(newBand);
      }
    })

  let [albums, setAlbums] = useState([1]);
  let [members, setMembers] = useState([1]);

  if(props.editMode) {
    if(band) {
      return (
        <div className="CreateBandForm">
          <form>
            <label htmlFor="name">Band name</label>
            <input type="text" name="name" id="name" defaultValue={band.name}/>
            <label htmlFor="year">Band year</label>
            <input type="number" name="year" id="year" defaultValue={band.year}/>
            <label htmlFor="country">Band country</label>
            <input type="text" name="country" id="country" defaultValue={band.country}/>
            <div className='form-add-container'>
              {band.albums.map((album, i) => {
                return (
                  <div className='add-container' key={i}>
                    <label htmlFor={`album-name-${i}`}>Album name</label>
                    <input type="text" name={`album-${i}`} id={`album-${i}`} defaultValue={album.name}/>
                    <label htmlFor={`album-year-${i}`}>Album year</label>
                    <input type="number" name={`album-name-${i}`} id={`album-year-${i}`} defaultValue={album.year}/>
                  </div>
                )
              })
              }
              <SecondaryButton 
                action={() => setAlbums([...albums, 1])}
                value='Add Album'
              />
            </div>
            <div className='form-add-container'>
              {band.members.map((member, i) => {
                return ( 
                  <div key={i} className='add-container'>
                    <label htmlFor={`members-${i}`}>Member</label>
                    <input type="text" name={`members-${i}`} id={`members-${i}`} defaultValue={member.name}/>
                  </div>
                )
              })
              }
              <SecondaryButton 
                action={() => setMembers([...members, 1])}
                value='Add member'
              />
            </div>
            <PrimaryButton 
              action={() => {
                editBand(props.selectedBand.id, albums, members);
                props.setShowCreateBand(false)
                props.setBands(null)
              }} 
              value='Edit band' 
            />
          </form>
        </div>
      )
    } else {
      return (
        <div className="bands-container">
          <Loader />
        </div>
      )
    }
  } else {
    return (
      <div className="CreateBandForm">
        <form>
          <label htmlFor="name">Band name</label>
          <input type="text" name="name" id="name"/>
          <label htmlFor="year">Band year</label>
          <input type="number" name="year" id="year"/>
          <label htmlFor="country">Band country</label>
          <input type="text" name="country" id="country"/>
          <div className='form-add-container'>
            {albums.map((_, i) => {
              return (
                <div className='add-container' key={i}>
                  <label htmlFor={`album-name-${i}`}>Album name</label>
                  <input type="text" name={`album-${i}`} id={`album-${i}`}/>
                  <label htmlFor={`album-year-${i}`}>Album year</label>
                  <input type="number" name={`album-name-${i}`} id={`album-year-${i}`}/>
                </div>
              )
            })
            }
            <SecondaryButton 
              action={() => setAlbums([...albums, 1])}
              value='Add Album'
            />
          </div>
          <div className='form-add-container'>
            {members.map((_, i) => {
              return ( 
                <div key={i} className='add-container'>
                  <label htmlFor={`members-${i}`}>Member</label>
                  <input type="text" name={`members-${i}`} id={`members-${i}`}/>
                </div>
              )
            })
            }
            <SecondaryButton 
              action={() => setMembers([...members, 1])}
              value='Add member'
            />
          </div>
          <PrimaryButton 
            action={() => {
              createBand(albums, members);
              props.setShowCreateBand(false)
              props.setBands(null)
            }} 
            value='Create band' 
          />
        </form>
      </div>
    )
  }
}

export default CreateBandForm;