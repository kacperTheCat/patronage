const totalMovies = moviesData.length;
const totalCount = document.querySelector('#moviesCounterAll');
const seenMovies = document.querySelector('#moviesCounterSeen');
const totalList = document.querySelector("#moviesList");
let seenCount = 0;

const done = moviesData.map((m) => {
  (m.seen === "T") ? seenCount++ : null
});

const addTotal = function() {
  totalCount.innerHTML = totalMovies
}
const addSeen = function(t) {
  if (t === undefined) return;
  if (t.checked) seenCount++;
  else seenCount--;
  seenMovies.innerHTML = seenCount;
}

addTotal();
addSeen();

seenMovies.innerHTML = seenCount;

const addMovies = function() {
  let list = moviesData.map((m) => `<li>
     title: ${m.title} <br>
     year: ${m.year} <br>
     genere: ${m.genere} <br>
     summary: ${m.summary}
     <br>
     seen
     <input id=${m.id} onChange="addSeen(this)" type='checkbox' ${(m.seen === "T") ? "checked" : null}></input>
  </li>
  `);
  totalList.innerHTML = list;
}


addMovies();
