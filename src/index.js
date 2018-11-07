window.onload = function() {
  document.getElementById("input-search").focus();
  
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

  function close() {
  	var powerbar = document.getElementById('power-search');
  	powerbar.style.display = 'none';
  }

  function get() {
  	var input = document.getElementById('input-search');
  	return input.value;
  }
};
