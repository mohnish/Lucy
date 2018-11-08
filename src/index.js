window.onload = function() {
  // By default, the bar is hidden
  const powerBar = document.querySelector('#lucy-power-bar');

  function hide() {
  	powerBar.classList.add('hide');
  }

  function open() {
  	powerBar.classList.remove('hide');
  }

  function toggle() {
  	powerBar.classList.toggle('hide');
  }

  function get() {
  	var input = powerBar.querySelector('input');
  	return input.value;
  }

  Mousetrap.bind('shift+l', function(e) {
  	e.preventDefault();
    toggle();

    var input = powerBar.querySelector('input');
  	input.focus();
  });

  document.onkeydown = function(e) {
    var key = (e) ? e.which : window.event.keyCode;
    const command = get();
    
    // 13 will handle enter and 27 will handle esc
    if((key === 13 && command.length > 0) || key == 27) {
    		hide();
    }
  };
};
