const timesTwo = () => {
  const inputEl = document.getElementById('timesTwo');
  const value = inputEl.value;
  const result = value * 2;
  alert(result);
};


const sum = () => {
  // sum the 2 values together and add answer in h1
  // document.getElementById('example').innerHTML = 'blah'

}

const addImgSrc = () => {
  const image = document.getElementsByTagName('img')[0]; // [img1, img2, img3]
  const inputEl = document.getElementsByClassName('imageSrc')[0]
  image.src = inputEl.value

}


const addColour = () => {
document.getElementById('circle').classList.add('circleColor')
}

const removeColour = () => {
  document.getElementById('circle').classList.remove('circleColor')
}

const toggleColor = () => {
  const hasClass = document.getElementById('circle').classList.contains('circleColor')
  if (!hasClass) {
    addColour(); 
  }
  else { removeColour();  
  }
}


// Filter List
const array = [1, 0, 9, 7, 55, 48, 87, 45, 23, 9, 57, 51, 26, 587]

const logLength = () => {
  const length = array.length;
  console.log(length)
}
