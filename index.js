// === Constants ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2601-FTB-ET-WEB-FT"; // Make sure to change this!
const RESOURCE = "/events";
const API = BASE + COHORT + RESOURCE;

// === State ===
let parties = [];
let selectedParty = [];

// fetch API

const GetParties = async() => {
  try {
    const res = await fetch(API);
    const resBod = await res.json();
    parties = resBod.data;
  } catch(err) {
    console.log("ERROR RETRIEVING PARTIES:", err);
  }
}


// === Components ===

function PartyList() {
  // loop thru parties
  // 
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Party Planner</h1>
  <section>
    <h2>Upcoming Parties</h2>
    <PartyList></PartyList>
  </section>
  
  `;
  // $app.querySelector("PartyList").replaceWith(PartyList());
}

const init = async() => {
  await GetParties();
  await render();
}

init();