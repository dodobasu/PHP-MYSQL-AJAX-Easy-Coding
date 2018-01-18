<?php
include("../connection/connection.php");


///////////////////   chain select//////////////////////////
if($_POST['action']=='chain_combo'){
	
	$tables=trim($_POST['tables']);
	$child_field=trim($_POST['child_field']);
	$pvalue=trim($_POST['pvalue']);
	$fields=trim($_POST['fields']);
	$values=trim($_POST['values']);
	$pvalue=trim($_POST['pvalue']);
   
$sql2="select distinct $fields , $values from $tables where $child_field='" . $pvalue ."' ";
$result2=mysql_query($sql2);
$data1 = array();
while($rs2=mysql_fetch_array($result2)){
//$option1 .= $rs2[$fields]."|"  ;
$data1[]=$rs2;
}


echo json_encode($data1);
mysql_free_result($result2);
exit;
}

////////////////////////  main select

if($_POST['action']=='select_combo'){
	
	$tables=trim($_POST['tables']);
	$fields=trim($_POST['fields']);
	$values=trim($_POST['values']);
    $combos=trim($_POST['combos']);
$sql2="select distinct $fields , $values from $tables where type='".'H'."'";
$result2=mysql_query($sql2);
$data1 = array();
while($rs2=mysql_fetch_array($result2)){
//$option1 .= $rs2[$fields]."|"  ;
$data1[]=$rs2;
}
echo json_encode($data1);
mysql_free_result($result2);
exit;
}

if($_POST['action']=='conditional_select_combo'){
	
	$tables=trim($_POST['tables']);
	$fields=trim($_POST['fields']);
	$values=trim($_POST['values']);
    $combos=trim($_POST['combos']);
	$cond=trim($_POST['cond']);
$sql2="select distinct $fields , $values from $tables where choice_pass='".$cond."' and type='".'P'."'";
$result2=mysql_query($sql2);
$data1 = array();
while($rs2=mysql_fetch_array($result2)){
//$option1 .= $rs2[$fields]."|"  ;
$data1[]=$rs2;
}
echo json_encode($data1);

mysql_free_result($result2);
exit;
}

?>