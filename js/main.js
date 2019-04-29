const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let states;

// Get states
const getStates = async () => {
  const res = await fetch('../data/states.json');
  states = await res.json();
};

// Filter states
const searchStates = searchText => {
  // Get matches to current text input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });
  console.log(matches);
};

window.addEventListener('DOMContentLoaded', getStates);
search.addEventListener('input', () => searchStates(search.value));
