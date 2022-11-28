import './ScrollToTopButton.css'

function ScrollToTopButton() {

//Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document


function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

    return <button onClick={backToTop} id="btn-back-to-top">Topasdasdsad</button>
}

export default ScrollToTopButton;