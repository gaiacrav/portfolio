const intro = document.getElementById('intro');
const portfolio = document.getElementById('portfolio');
const start = document.getElementById('start');

//show portfolio
const portfolioShow = () => {
  intro.style.opacity='0';
  intro.style.display ='none';
  portfolio.style.display ='block';
}

start.onclick = portfolioShow;


