function setOther() {
  const mainContent = document.getElementById('mainContent');
  const otherContent = document.getElementById('otherContent');

  mainContent.style.display = 'none';
  otherContent.style.display = 'block';

  const toggleInputOther = document.getElementById('sliderToggleOther');
  toggleInputOther.checked = true;

}

function setMain() {
  const mainContent = document.getElementById('mainContent');
  const otherContent = document.getElementById('otherContent');

  mainContent.style.display = 'block';
  otherContent.style.display = 'none';

  const toggleInputMain = document.getElementById('sliderToggleMain');
  toggleInputMain.checked = false;

}