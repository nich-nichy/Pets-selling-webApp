const colcol2 = document.getElementById('colcol');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

colcol2.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
