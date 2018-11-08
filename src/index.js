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
  	console.log('key shift l');

    toggle();

  var input = powerBar.querySelector('input');

  	input.focus();
  	input.value = '';
    console.log('key shift 2');
  });

  document.onkeydown = function(e) {

    var key = (e) ? e.which : window.event.keyCode;
    console.log('key ', key);
    if(key == 13) {
    	const command = get();

    	//pass to compromise and hide
    	if (command.length > 0) {
    		hide();
    	}
    }
  };
};
