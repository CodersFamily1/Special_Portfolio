let open = document.getElementById('open');
let cancel = document.getElementById('cancel');
let nav_mobile_first = document.getElementById('nav_mobile_first');
let nav_mob = document.getElementById('nav_mob');

open.addEventListener('click', function () {
nav_mobile_first.style.display = 'none';
nav_mob.style.display = 'block';
})

cancel.addEventListener('click', function () {
nav_mobile_first.style.display = 'block';
nav_mob.style.display = 'none';
})

// text style..

const textElement = document.getElementById("animated-text");
const textArray = ["Web Developer", "Web Designer", "Frontend Developer"," BackEnd Developer","CF Founder"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    textElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

typeText();


const scriptURL ='https://script.google.com/macros/s/AKfycbxlYU-Wrdxqnb8aRP5DNVZwHo_gxZ72BCZ3pE1illV3yCITK3H9N3YRaFcFh_V1zYM/exec';
const form = document.forms['submit-to-google-sheet'];
const messageElement = document.getElementById('message'); // Create a new <p> element for the message
messageElement.style.color = 'green';
messageElement.style.display = 'none';
form.appendChild(messageElement); // Add the message element to the form

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);

      // Show success message
      messageElement.textContent = 'Message Sent Successfully!';
      messageElement.style.display = 'block';

      // Clear form fields
      form.reset();

      // Refresh the page after 2 seconds
      setTimeout(() => {
        messageElement.style.display = 'none';
        location.reload();
      }, 2000);
    })
    .catch(error => {
      console.error('Error!', error.message);

      // Show error message if submission fails
      messageElement.textContent = 'Failed to send message. Please try again.';
      messageElement.style.color = 'red';
      messageElement.style.display = 'block';
    });
});
  let voice = new SpeechSynthesisUtterance();
function rahimulInfo() {
  voice.text = 'Hi..I am Rahimul. A FrontEnd Web Developer,  A Web Designer And Aslo Founder Of codersfamily Platform.';
  window.speechSynthesis.speak(voice)
}
