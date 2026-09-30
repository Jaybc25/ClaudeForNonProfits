"use strict";
(() => {
  const count = document.getElementById('seat-count');
  const rate = document.getElementById('seat-rate');
  const next = document.getElementById('seat-next');
  const error = document.getElementById('seat-error');
  count.setAttribute('aria-describedby','seat-error');
  const money = value => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value);
  function renderSeats(){
    const seats = Number(count.value), unit = Number(rate.value);
    const valid = count.value.trim() !== '' && count.validity.valid && Number.isSafeInteger(seats) && [8,3].includes(unit);
    count.setAttribute('aria-invalid',String(!valid));
    error.hidden = valid;
    error.textContent = valid ? '' : 'Enter 2 to 150 whole seats. Use an approved Enterprise quote for larger deployments.';
    document.getElementById('seat-monthly').textContent = valid ? money(seats*unit)+' / month' : '—';
    document.getElementById('seat-annual').textContent = valid ? money(seats*unit*12)+' / year' : 'Check the seat count';
    document.getElementById('seat-math').textContent = valid ? `${seats} seats × $${unit} per user per month` : '';
    next.hidden = !valid;
    if(valid){
      const url = new URL('pilot-value.html',location.href);
      url.searchParams.set('planMonthly',String(seats*unit));
      const id = new URLSearchParams(location.search).get('case');
      if(id && /^[a-z0-9-]{1,80}$/.test(id)) url.searchParams.set('case',id);
      next.href = url;
    }
  }
  document.getElementById('seat-form').addEventListener('input',renderSeats);
  document.getElementById('seat-form').addEventListener('submit',event => event.preventDefault());
  renderSeats();
})();
