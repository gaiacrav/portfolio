const intro = document.getElementById('intro');
const portfolio = document.getElementById('portfolio');
const start = document.getElementById('start');

const portfolioShow = () => {
  intro.style.display ='none';
  portfolio.style.display ='block';
}

start.onclick = portfolioShow;
