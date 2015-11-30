<?php


    $id = $_GET["id"];

    $data[] = array("id"=>$id,"title"=>"跨越53年，图解历任007的那些装备".$id,"content"=>'<p>大到可以让你从头抱到脚~</p><p><img alt="TB2MfeLgFXXXXXnXpXXXXXXXXXX_!!183639554.jpg" src="http://x.pingwest.com/uploads/post_images/4ae53e4ca5311bcd431984d2ecae2c09.jpg" data-image-size="790,731"> <br></p><p> <br></p><p><img alt="TB2DtmgXVXXXXb6XXXXXXXXXXXX-183639554.jpg" src="http://x.pingwest.com/uploads/post_images/12d2f6fd260a6de521fba9574ea9d60d.jpg" data-image-size="790,846"> <br></p><p><img alt="TB2ddm7eVXXXXXqXpXXXXXXXXXX_!!183639554.jpg" src="http://x.pingwest.com/uploads/post_images/7061e655141ca0253729c57a2b86302c.jpg" data-image-size="790,1170"> <br></p><p><img alt="TB2UNaJgFXXXXXGXpXXXXXXXXXX_!!183639554.jpg" src="http://x.pingwest.com/uploads/post_images/71e47f29cb0d8ae740287837d4a2e99d.jpg" data-image-size="790,692"> <br></p>',"next_post_id"=>$id+1);
  		
  	
 //$callback=$_GET['callback']; 
   $data=json_encode($data); 
//echo $callback."($data)"; 

   echo $data;
exit;


?>