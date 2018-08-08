// import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);

document.querySelector('.index-name').addEventListener('animationend', goToHomePage);
document.querySelector('.shrine-login').addEventListener('transitionend', disappearHomePage);

function goToHomePage(evt) {
  if (evt.target.classList.contains('index-name')) {
    // document.querySelector('.shrine-login').classList.add('logo-disappear');
  }
}

function disappearHomePage(evt) {
  if (evt.target.classList.contains('logo-disappear')) {
    document.querySelector('.shrine-login').remove();
  }
}
