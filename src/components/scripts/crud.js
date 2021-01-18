const bandsURL = 'https://my-json-server.typicode.com/improvein/dev-challenge/bands';
const albumsURL = 'https://my-json-server.typicode.com/improvein/dev-challenge/albums';
const genreURL = 'https://my-json-server.typicode.com/improvein/dev-challenge/genre';
const dbURL = 'https://my-json-server.typicode.com/improvein/dev-challenge/db';

export async function obtainBands () {
  try {
    const res = await fetch(bandsURL);
    const bands = await res.json();

    return bands;
  } catch (error) {
      console.log(error);
  }
}

export async function obtainSelectedBand (name) {
  try {
    if (name) {
    // needs to be and object with all the info.
      let selectedBand = {};

      let bands = await (await fetch(bandsURL)).json();
      let albums = await (await fetch(albumsURL)).json()

      // Instead of doing multiples petitions we can fetch the info only one time and place in the state, and grab them.
      selectedBand = bands.find(band => band.name === name)

      albums = albums.filter(album => album.bandId === selectedBand.id)
        
      selectedBand.albums = albums;

      return selectedBand;
    }
  } catch (error) {
    // Show some error to the user depending of the error code.
    console.log(error)
  }
}

export async function createBand(albumsArr, membersArr) {
  try {
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const year = document.getElementById('year').value;
    let albums = [];
    let members = [];

    for (let i = 0; i < albumsArr.length; i++) {
      albums.push(
        {
          name: document.getElementById(`album-${i}`).value,
          year: document.getElementById(`album-year-${i}`).value
        }
      );
    }

    for (let i = 1; i < membersArr.length; i++) {
      members.push(
        document.getElementById(`members-${i}`).value
      );
    }

    const newBand = {
      name,
      country,
      year,
      albums,
      members,
    };

    await fetch(bandsURL, {
      method: 'POST',
      body: JSON.stringify(newBand),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    alert('Band created correctly! ✔️');

  } catch (error) {
    console.log(error);
    alert('Something happened, try again.')
  }
}

export async function deleteBand(id) {
  try {
    let decision = confirm('Are you sure?')
    let res = null;

    if(decision)
      res = await fetch(`${bandsURL}/${id}`, {
        method: 'DELETE'
      })
    alert('Band deleted correctly! ✔️');
  } catch (error) {
    console.log(error)
    alert('Something happened, try again.')
  }
}
// I can use the same from for createBand, to make editBand.
export async function editBand(id, albumsArr, membersArr) {
  try {
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const year = document.getElementById('year').value;
    let albums = [];
    let members = [];

    for (let i = 0; i < albumsArr.length; i++) {
      albums.push(
        {
          name: document.getElementById(`album-${i}`).value,
          year: document.getElementById(`album-year-${i}`).value
        }
      );
    }

    for (let i = 1; i < membersArr.length; i++) {
      members.push(
        document.getElementById(`members-${i}`).value
      );
    }

    const newBand = {
      name,
      country,
      year,
      albums,
      members,
    };

    
    await fetch(`${bandsURL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newBand)
    })
    alert('Band updated succesfully! ✔️');
  } catch (error) {
    console.log(error);
  }

}

export async function search(req) {
  try {
    // let res = await fetch(`${bandsURL}?name=${req}`, {
    //   method: 'GET'
    // });

    // `${bandsURL}?id=1&id=2`
    let res = await fetch(`${bandsURL}?name=${req}`, {
      method: 'GET'
    });
     res = await res.json();
    
     if (res.length === 0)
      res = null;

     return res;
  } catch (error) {
    console.log(error);
    alert('Something happened, try again.');
  }

}