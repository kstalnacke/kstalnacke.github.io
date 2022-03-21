

function darkMode(){
  document.getElementById("text").style.color = "white";
  document.documentElement.style.setProperty("background", "linear-gradient(to right, #232526, #414345)");
  document.getElementById("form").style.color = "rgb(22, 22, 22)";
  document.cookie = "isDark=true";
  
}

function lightMode(){
  document.getElementById("text").style.color = "rgb(22,22,22)";
  document.documentElement.style.setProperty("background", "linear-gradient(to right, #e0eafc, #cfdef3)");
}



document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      darkMode()
    } else {
      lightMode()
    }
  });
});



document.getElementById("openbutton").addEventListener("click", openForm);

document.getElementById("closebutton").addEventListener("click", closeForm);


function openForm() {
  document.getElementById("form").style.display = "block";
}

function closeForm() {
  document.getElementById("form").style.display = "none";
}
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
  var fnameCorr = false;
  var lnameCorr = false;
	
	if(fnameValue === '') {
		setErrorFor(fname, 'Förnamn kan inte lämnas tomt');
	} else {
		setSuccessFor(fname);
    fnameCorr = true;

	}
	
	if(lnameValue === '') {
		setErrorFor(lname, 'Efternamn kan inte lämnas tomt');
	} else {
		setSuccessFor(lname);
    lnameCorr = true;
	}

  if (fnameCorr && lnameCorr){
    const head = document.getElementById('head');
    head.innerText = 'Tack för din prenumeration' + ' ' + fnameValue + '!';
    closeForm();
  }

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

}
const flipcards = document.querySelectorAll('.flip-card');

flipcards.forEach(flipcard => {
  flipcard.addEventListener('click',  flipCard);
});

function flipCard() {
  var x = document.getElementById(this.id);
  x.classList.toggle("hover");

}

document.getElementById("video").addEventListener("click", playVideo);

function playVideo(){
  var vid = document.getElementById("video");
  if (vid.paused){
    vid.play();
  } else {
    vid.pause();
  }
}