import React, { useState, useEffect } from 'react'
import './Home.css';

// Components
import Header from '../Header/Header';
import Band from '../Band/Band';
import Loader from '../Loader/Loader';
import BandDetails from '../BandDetails/BandDetails';
import ErrorOccurred from '../ErrorOccurred/ErrorOccurred';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import CreateBandForm from '../CreateBandForm/CreateBandForm';
import FilterSort from '../FilterSort/FilterSort';

// Scripts
import { obtainBands, obtainSelectedBand } from '../scripts/crud';

const Home = props => {
  const [showCreateBand, setShowCreateBand] = useState(false);
  const [showEditBand, setShowEditBand] = useState(false);

  const [bands, setBands] = useState(null);
  useEffect( async () => {
    if(!bands) {
      let res = await obtainBands();
      
      setBands(res);
    }
  })

  const [selectedBand, setSelectedBand] = useState(null);
  useEffect( async () => {
    if(typeof selectedBand != 'object') {
      let res = await obtainSelectedBand(selectedBand);

      setSelectedBand(res);
    }
  })
 
  const [searchError, setSearchError] = useState('')
  useEffect(() => {
    if(searchError === 'false')
      setSearchError('');
  })

  if(searchError) {
    return ( 
      <div className="Home">
        <Header 
          enableMenu={true} 
          setShowLogin={props.setShowLogin}
          setShowCreateBand={setShowCreateBand}
          setSelectedBand={setSelectedBand}
          setBands={setBands}
          setSearchError={setSearchError}
        />
        <FilterSort 
          bands={bands}
          setBands={setBands}
          setSearchError={setSearchError}
          enableSort={false}
        />
        <div className="bands-container">
          <ErrorOccurred 
            error={searchError} 
            setBands={setBands}
            setSearchError={setSearchError}
          />
        </div>
      </div>
    )
  } else if(showEditBand) {
    return (
      <div className="Home">
        <Header 
          enableMenu={true} 
          setSelectedBand={setSelectedBand}
          setShowLogin={props.setShowLogin}
          setShowCreateBand={setShowCreateBand}
          setBands={setBands}
          setShowEditBand={setShowEditBand}
        />
        <CreateBandForm 
          setShowCreateBand={setShowCreateBand}
          setBands={setBands}
          editMode={true}
          selectedBand={selectedBand}
        />
      </div>
    )
  } else if(selectedBand) {
    return (
      <div className="Home">
        <Header 
          enableMenu={true} 
          setSelectedBand={setSelectedBand}
          setShowLogin={props.setShowLogin}
          setShowCreateBand={setShowCreateBand}
          setBands={setBands}
        /> 
        {typeof selectedBand === 'object' ?
          <BandDetails 
            selectedBand={selectedBand}
            setSelectedBand={setSelectedBand}
            setShowEditBand={setShowEditBand}
          />
        :
        <div className="bands-container">
          <Loader />
        </div>
        }
      </div>
    )

  } else if(showCreateBand) {
    return (
      <div className="Home">
        <Header 
          enableMenu={true} 
          setSelectedBand={setSelectedBand}
          setShowLogin={props.setShowLogin}
          setShowCreateBand={setShowCreateBand}
          setBands={setBands}
        />
        <CreateBandForm 
          setShowCreateBand={setShowCreateBand}
          setBands={setBands}
        />
      </div>
    )
  } else {
      return (
        <div className="Home">
          <Header 
            enableMenu={true} 
            setSelectedBand={setSelectedBand}
            setShowLogin={props.setShowLogin}
            setShowCreateBand={setShowCreateBand}
            setBands={setBands}
          />
          {bands && !bands.error &&
            <FilterSort 
              bands={bands}
              setBands={setBands}
              setSearchError={setSearchError}
              enableSort={true}
            />
          }
          <div className="bands-container">
            {bands && !bands.error ?
              bands.map((band, i) => <Band 
                      key={i}
                      band={band}
                      obtainSelectedBand={obtainSelectedBand}
                      setSelectedBand={setSelectedBand}
                    />)
              : bands && bands.error ?
                <ErrorOccurred 
                  error={bands.error} 
                  setSearchError={setSearchError}
                  setBands={setBands}
                />
              :
                <Loader />
            }
            { bands && !bands.error &&
              <div className='addBand'>
                <PrimaryButton
                  value='Add new band' 
                  action={() => setShowCreateBand(!showCreateBand)}
                />
              </div>
            }
          </div>
        </div>
      )
  }
}

export default Home;