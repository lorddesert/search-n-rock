async function obtainBands () {
  try {
    let res = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands');
    let bands = await res.json();

    return bands;
  } catch (error) {
      console.log(error);
  }
}

export default obtainBands;