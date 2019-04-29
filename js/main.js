const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let states;

// Get states
const searchStates = async () => {
  const res = await fetch('../data/states.json');
  states = await res.json();
};

// Filter states
const searchStates = searchText => {};

search.addEventListener('input', () => searchStates(search.value));
