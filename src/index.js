window.onload = function() {
	document.getElementById("lucy-power-bar").style.display = 'none';	 

  function close() {
  	var powerbar = document.getElementById('lucy-power-bar');
  	powerbar.style.display = 'none';
  }

  function get() {
  	var input = document.getElementById('lucy-power-bar-input');
  	return input.value;
  }

  Mousetrap.bind('shift+l', function() {
  	console.log('key shift l');
    document.getElementById("lucy-power-bar").style.display = '';
  	var input = document.getElementById("lucy-power-bar-input");

  	input.focus();
  	input.value = '';
    console.log('key shift 2');
  });

  document.onkeydown = function(e) {
    
    var key = (e) ? e.which : window.event.keyCode;
    console.log('key ', key);
    if(key == 13) {
    	const command = get();

    	//pass to compromise and close
    	if (command.length > 0) {
    		close();
    	}
    }
  };
};
