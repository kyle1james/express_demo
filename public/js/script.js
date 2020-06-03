function marsFind(event) {
  event.preventDefault();
  console.log('About to get Mars Rover pics');
  catchMars();

  async function catchMars() {
    const sol = document.getElementById('sol');
    const camera = document.getElementById('camera');
    const url = `mars/${sol.value}/${camera.value}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('Populating data');
    console.log(data);
    document.getElementById('myH1').textContent = data.photos[0].camera.full_name;
    document.getElementById('myImg').src=data.photos[0].img_src;
    for (let idx=0; idx < 50; idx++) {
      const newImg = document.createElement('img');
      newImg.src = data.photos[idx].img_src;
      newImg.style.height = '20em';
      newImg.style.width = '20em';
      document.getElementById('myphotos').appendChild(newImg);
    }
  }
}
// callback function
document.querySelector('#find-mars').addEventListener('click', marsFind);
