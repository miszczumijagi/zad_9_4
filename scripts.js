function drawTree (k) {
	for ( var i = 0 ; i <= k ; i++) {
		var star = '';
		k += '\n';
		for (var j=0 ; j<i ; j++) {
			star += '*';
		}
		console.log(star);
  	}	
}
drawTree(5);
