/*
 * JS PAGE FOR INDEX.HTML PAGE
 */

// Assign to QUOTE_URL the address of the query to retrieve QUOTES
let QUOTE_URL = 'https://api.quotable.io/quotes/random';

var quote_total;

// Call the function to get the quote_totals

getQuotefromTheAPI();
/**
 * START ASYNC AWAIT SYNTAX
 * the call to getQuotefromTheAPI() is at the end of the page
 */
async function getQuotefromTheAPI() {

  try {
    // Fetch and wait for the result

    let responseQUOTE = await fetch(QUOTE_URL);
    quote_total = await responseQUOTE.json();
    console.log(quote_total);

    document.getElementById('text').innerHTML = `${quote_total[0].content}`;
    document.getElementById('author').innerHTML = `${quote_total[0].author}`;
    document.getElementById('tweet-quote_cont').innerHTML = `
      <a title=\"Tweet this quote!\" id=\"tweet-quote\" href=\"https://twitter.com/intent/tweet?text=${quote_total[0].content}\" target=\"_blank\" class=\"btn btn-primary d-inline-flex align-items-center\" type=\"button\">
      Share on
      <svg id="tweet_icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
      </a>
      `;


  } catch (e) {
    alert(`Error: ${e}`);
  }



}


document.getElementById('new-quote').addEventListener("click", function () {
  getQuotefromTheAPI();
  document.getElementById('body_bg').style.backgroundColor = randomRGB();

});

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
