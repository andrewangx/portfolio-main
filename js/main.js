'use strict';

console.log('check');


// nav bar menu for mobile input
const hamSrc = './images/svg-icons/hamburger.svg';
const crossSrc = './images/svg-icons/cross.svg';

var navMenu = document.querySelector('#navmenu');
let isHidden = navMenu.style.display === 'none' ? true : false;
navMenu.setAttribute('aria-hidden', String( isHidden ) );
navMenu.setAttribute('aria-expanded', String( !isHidden ) );

var menuToggle = document.querySelector( '#navmenu-toggle' );
menuToggle.setAttribute( 'src', isHidden ? hamSrc : crossSrc );

navMenu.setAttribute('aria-labelledby','menu-toggle');

menuToggle.addEventListener('click', 
    function(){
        console.log('clicked');

		let isHidden = navMenu.style.display === 'none' ? true : false;
		navMenu.style.display = isHidden ? 'block' : 'none';
		menuToggle.setAttribute( 'src', isHidden ? hamSrc : crossSrc );
		navMenu.setAttribute('aria-hidden', String( !isHidden ));
		navMenu.setAttribute('aria-expanded', String( isHidden ));
    }
);


//for form section

let submit_button = document.querySelector('#form-submit-btn');
submit_button.addEventListener('click', function(captured_event) { // Here we are capturing the event itself in a variable
  captured_event.preventDefault(); // Here we cancel the 'default' action that event would take, in this case the form submitting 
  window.location.href = 'complete-msg.html';
});

