    let player = 'X';
    const a = document.querySelector('.b1');
    const b = document.querySelector('.b2');
    const c = document.querySelector('.b3');
    const d = document.querySelector('.b4');
    const e = document.querySelector('.b5');
    const f = document.querySelector('.b6');
    const g = document.querySelector('.b7');
    const h = document.querySelector('.b8');
    const i = document.querySelector('.b9');

    function clk (v1) {
      if (player === 'X' && v1.innerText === '') {
        player = 'O';
        v1.innerText = 'X';
      } else if (player === 'O' && v1.innerText === '') {
        player = 'X';
        v1.innerText = 'O';
      }

      if (
      ((a.innerText === 'X' || a.innerText === 'O') && (a.innerText === b.innerText && a.innerText === c.innerText)) || 
      ((d.innerText === 'X' || d.innerText === 'O') && (d.innerText === e.innerText && d.innerText === f.innerText)) || 
      ((g.innerText === 'X' || g.innerText === 'O') && (g.innerText === h.innerText && g.innerText === i.innerText)) || 
      ((a.innerText === 'X' || a.innerText === 'O') && (a.innerText === d.innerText && a.innerText === g.innerText)) || 
      ((b.innerText === 'X' || b.innerText === 'O') && (b.innerText === e.innerText && b.innerText === h.innerText)) || 
      ((c.innerText === 'X' || c.innerText === 'O') && (c.innerText === f.innerText && c.innerText === i.innerText)) || 
      ((a.innerText === 'X' || a.innerText === 'O') && (a.innerText === e.innerText && a.innerText === i.innerText)) || 
      ((c.innerText === 'X' || c.innerText === 'O') && (c.innerText === e.innerText && c.innerText === g.innerText))
      ) {
          if (player === 'X') {
            player = 'O';
            document.querySelector('.text').innerHTML = `${player} wins.`;
          } else if (player === 'O') {
            player = 'X';
            document.querySelector('.text').innerHTML = `${player} wins.`;
          }
      } else if (a.innerText !== '' && b.innerText !== '' && c.innerText !== '' && d.innerText !== '' && e.innerText !== '' && f.innerText !== '' && g.innerText !== '' && h.innerText !== '' && i.innerText !== '') {
        document.querySelector('.text').innerHTML = 'Draw.';
      }
    }