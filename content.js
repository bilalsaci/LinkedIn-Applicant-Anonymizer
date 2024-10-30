window.onload = function() {
  const blurAndGrayscale = (element) => {
    element.style.filter = 'grayscale(100%) blur(5px)';
console.log('applicants anonymised');
  };

  const listImages = document.querySelectorAll('.hiring-selectable-entity > img');
  const listNames = document.querySelectorAll('.hiring-people-card__title');
  const headerName = document.querySelectorAll('.hiring-applicant-header h1');

  const combinedArray = [...listNames, ...listImages, ...headerName];

  combinedArray.forEach(blurAndGrayscale);
};