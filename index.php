<?php
	if(isset($_GET['url'])){
		if(file_exists($_GET['url']).'.html'){
			include($_GET['url'].'.html');
		}else{
			include('home.html');
		}
	}else{
		include('home.html');
	}
?>