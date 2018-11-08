window.onload = function() {
	document.getElementById("power-search").style.display = 'none';	 

  function close() {
  	var powerbar = document.getElementById('power-search');
  	powerbar.style.display = 'none';
  }

  function get() {
  	var input = document.getElementById('input-search');
  	return input.value;
  }

  Mousetrap.bind('shift+l', function() {
  	document.getElementById("power-search").style.display = '';
  	var input = document.getElementById("input-search");

  	input.focus();
  	input.value = '';
  });

  document.onkeydown = function(e) {
    var key = (e) ? e.which : window.event.keyCode;

    if(key == 13) {
    	const command = get();

    	//pass to compromise and close
    	if (command.length > 0) {
    		close();
    	}
    }
  };
};
