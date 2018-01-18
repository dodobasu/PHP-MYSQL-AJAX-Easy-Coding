<?php
include('../../connection/connection.php');


	
$table=$_POST['table']; /// table name 
$operation=$_POST['method']; //// operation ////
$form_data=$_POST['form_data']; /// which data pass from Form object
$table_data=$_POST['table_data']; /// table datafield of database
$data_streams=isset($_POST['data_streams'])?$_POST['data_streams']:''; /// form data actual field


$total_no=$_POST['total_no'];
//////// table data /////////////////////
$table_data =json_encode($table_data);
$table_array=json_decode($table_data, true);
$count_table=count($table_array);
/////////// form data /////////////////
$form_data= json_encode($form_data);
$form_array =json_decode($form_data,true);
$count_form=count($form_array);
///////////// data stream //////////
$data_stream= json_encode($data_streams);
$data_stream_array = json_decode($data_stream, true);

////////////////////////////////////






//////////////// SAVE OPERATION //////////////////////////////////////
if($operation=='Save'){
	
//////////// DUPLICATE  /////////
$duplicate_field=$_POST['duplicate_field']; // DUPLICATE FIELD CHECK
$duplicate =json_encode($duplicate_field);
$duplicate_array=json_decode($duplicate, true);
$count_duplicate=count($duplicate_array);
$dp_both=count($duplicate_array['duplicate_both']);
$dp_single=count($duplicate_array['duplicate_single']);
	
	
//// //////// DUPLICATE OPERATION  //////////

$token1=0;
$token2=0;
///// checking duplicate_both ////////////////////
if($dp_both>0){
$sql2="SELECT * FROM " . $table . " WHERE ";
$tt2='';
$i2=0;

foreach ($duplicate_array['duplicate_both'] as $key => $value) { 
    $i2=$i2+1; 
  	if($dp_both>$i2){
       $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."' AND "; 
             }
   if($dp_both==$i2){
      $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."';";
	       }

  } /// end dp_both loop
$sql2=$sql2 .$tt2 ;
$result=mysql_query($sql2);
if(mysql_num_rows($result)) {
	$token1=2;
 echo "duplicate";
    exit;	
} /// if delete
} /// end if duplicate both

///// /////////checking duplicate_single ////////////////////
if($dp_single>0){
$sql2="SELECT * FROM " . $table . " WHERE ";
$tt2='';
$i2=0;

foreach ($duplicate_array['duplicate_single'] as $key => $value) { 
    $i2=$i2+1; 
  	if($dp_single>$i2){
       $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."' OR "; 
             }
   if($dp_single==$i2){
      $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."';";
	       }

  } /// end dp_both loop
$sql2=$sql2 .$tt2 ;
$result=mysql_query($sql2);
if(mysql_num_rows($result)) {	
$token2=2;
 echo "duplicate";
    exit;	
} /// if delete
} /// end if duplicate single	
	

///// insert 
if($token1<=0 && $token2<=0){	
	
$sql="INSERT INTO " . $table . "(";
/////// getting field name form table_data//////////
$i=0;
foreach ($table_array as $key => $value) { 
 $i=$i+1; 
if($count_form>$i && $key>0){
   $tt=$tt. "`". $value ."`,"; 
  }
 if($count_form==$i && $key>0){
   $tt=$tt. "`".$value."`" ; 
  }
}
$sql=$sql .$tt .") VALUES(";
///// gating form field value ////////////////
$i=0;
foreach ($form_array as $key => $value) { 
$i=$i+1; 
if($count_form>$i && $key>0){   
    $v=$v. "'".$data_stream_array[$value] . "',";
 }
if($count_form==$i && $key>0){ 
 $v=$v. "'". $data_stream_array[$value]."'" ;
}
 
 
}

$sql=$sql.$v.");";


if(!mysql_query($sql)){

echo "no";
}else
{
echo "yes";
}

///// end
	
	
} // end if of insert



} //// end save module ////


/////////////////////////////////////// SEARCH /////////////////////////////////

if($operation=="Search")
{
	
$list_data=$_POST['list_data']; /// table datafield
$href_data=$_POST['href_value']; /// form data///
$search_data=$_POST['search_data']; // DUPLICATE FIELD CHAKE
$input_data=$_POST['search_box_id'];
$heading_data=$_POST['heading_data'];
$table_search=$_POST['table_search'];

//////// list data /////////////////////
$list_data =json_encode($list_data);
$list_array=json_decode($list_data, true);
$lk=count($list_array);

//////// Head data /////////////////////
$heading_data =json_encode($heading_data);
$heading_data_array=json_decode($heading_data, true);
$heading_count=count($heading_data_array);

///////////Searching Table/////////////////////
$search_data= json_encode($search_data);
$search_array =json_decode($search_data,true);
$sk=count($search_array);
///////////////////////////////////
	echo "<br><br/><ul  class='list-group ' id='nav'>";
	echo "<li class='list-group-item active'> ";
	foreach ($heading_data_array as $key => $value) { 
	echo "   &nbsp; &nbsp; &nbsp; &nbsp;" .  $value . " &nbsp;  &nbsp; &nbsp;" ;
	}
	
	echo "</li>";
    $tt3='';
	$sql3="SELECT * FROM " . $table_search . " WHERE ";  ////// name like '" . $_POST['names']. "%'";
	
	$i=0;
	 foreach ($search_array as $key => $value) { 
     if($sk-1>$i){
     $tt3=$tt3 . $value. " like '" . $data_streams[$input_data] . "%' OR " ;
	 }
	 if($sk-1==$i){
     $tt3=$tt3 . $value. " like '" . $data_streams[$input_data ]. "%';" ;
	 }
	 $i=$i+1;	 
}
$sql3=$sql3. $tt3;
	
	$results=mysql_query($sql3);
	while($rs=mysql_fetch_array($results)){
	
	echo "<li class='list-group-item list-group-item-default'> ";
	echo "<span class='glyphicon glyphicon-plus-sign'></span> <a style='text-decoration: none;' href='#' value='".	$rs[$href_data]."'>";
	
	foreach ($list_array as $key => $value) { 	
	echo  $rs[$value] . " &nbsp; &nbsp  "; 
	}
	echo "</a></li>";
		
	}
	
echo "</ul>";
mysql_free_result($results);	
exit;
}

/////////////////////////////////////// FILL Form/////////////////////////////////
if($operation=="FillForm")
{

$table_form=$_POST['table_form'];
$attr_name=$_POST['attr_name'];
$attr_value=$_POST['attr_value'];


$tt3='';
$sql3="SELECT "; //FROM " . $table . " WHERE ";  ////// name like '" . $_POST['names']. "%'";
$i=0;
	 foreach ($table_array as $key => $value) { 
     if($count_table-1>$i){
     $tt3=$tt3 . $value. " , " ;
	 }
	 if($count_table-1==$i){
     $tt3=$tt3 . $value.  " " ;
	 }
	 $i=$i+1;
}
$tt3=$tt3 . " FROM " . $table_form . " WHERE " . $attr_name . "='" .$attr_value . "';";
$sql3=$sql3. $tt3;

$result3=mysql_query($sql3);
$data3 = array();
$rs3=mysql_fetch_object($result3);
//$option1 .= $rs2[$fields]."|"  ;
$data3[]=$rs3;
mysql_free_result($result3);
echo json_encode($data3);
exit;

}



///////////////////// UPDATE OPERATION //////////////////////////////////////

if($operation=="Edit"){	

//////////// DUPLICATE  /////////
$duplicate_field=$_POST['duplicate_field']; // DUPLICATE FIELD CHECK
$duplicate =json_encode($duplicate_field);
$duplicate_array=json_decode($duplicate, true);
$count_duplicate=count($duplicate_array);
$dp_both=count($duplicate_array['duplicate_both']);
$dp_single=count($duplicate_array['duplicate_single']);


///// update field data/////
$form_update_data=$_POST['form_update_data'];
$table_update_data=$_POST['table_update_data'];
$form_update_type=$_POST['form_update_type'];

//////// form data /////////////////////
$form_update_data =json_encode($form_update_data);
$form_update_array=json_decode($form_update_data, true);
$form_update_count=count($form_update_array);

//////// table data /////////////////////
$table_update_data =json_encode($table_update_data);
$table_update_array=json_decode($table_update_data, true);
$table_update_count=count($table_update_array);

//////// form type /////////////////////
$form_type_update =json_encode($form_update_type);
$form_type_update_array=json_decode($form_type_update, true);
$form_type_update_count=count($form_type_update_array);


$where_field=$_POST['where_field']; // DUPLICATE FIELD CHAKE
//////// table data /////////////////////
$where_data =json_encode($where_field);
$where_array=json_decode($where_data, true);

$sql3="SELECT * FROM " . $table . " WHERE ";
$tt3='';
$i3=0;
foreach ($where_array as $key => $value) { 
if($i3==0){
 $tt3=$tt3 . $value. "= '" ;
}
 $i3=$i3+1;
 }
 
 ///////////////     
$i3=0;
foreach ($where_array as $key => $value) { 
if($i3==1){
 $tt3=$tt3 . $data_stream_array[$value]  ."';";
}
 $i3=$i3+1;
 } 
$sql3=$sql3 .$tt3 ;
$result3=mysql_query($sql3);
$n3=mysql_num_rows($result3);
mysql_free_result($result3);
if($n3<=0){
  echo "no_exist";
    exit;
   }

if($n3>0){	

//// //////// DUPLICATE OPERATION  //////////

$token1=0;
$token2=0;
///// checking duplicate_both ////////////////////
if($dp_both>0){
$sql2="SELECT * FROM " . $table . " WHERE ";
$tt2='';
$i2=0;

foreach ($duplicate_array['duplicate_both'] as $key => $value) { 
    $i2=$i2+1; 
  	if($dp_both>$i2){
       $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."' AND "; 
             }
   if($dp_both==$i2){
      $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."';";
	       }

  } /// end dp_both loop
$sql2=$sql2 .$tt2 ;
$result=mysql_query($sql2);
if(mysql_num_rows($result)) {
	$token1=2;
 echo "duplicate";
    exit;	
} /// if delete
} /// end if duplicate both

///// /////////checking duplicate_single ////////////////////
if($dp_single>0){
$sql2="SELECT * FROM " . $table . " WHERE ";
$tt2='';
$i2=0;

foreach ($duplicate_array['duplicate_single'] as $key => $value) { 
    $i2=$i2+1; 
  	if($dp_single>$i2){
       $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."' OR "; 
             }
   if($dp_single==$i2){
      $tt2=$tt2 . $value. "='" . $data_stream_array[$value]  ."';";
	       }

  } /// end dp_both loop
$sql2=$sql2 .$tt2 ;
$result=mysql_query($sql2);
if(mysql_num_rows($result)) {	
$token2=2;
 echo "duplicate";
    exit;	
} /// if delete
} /// end if duplicate single	







if($n1<=0){
	
/////////// up dating record 

// UPDATE `dipanjan_training`.`student_entry` SET `name` = 'goutam', `address` = 'dhup', `roll` = '15', `caste` = 'SC' WHERE `student_entry`.`id` = 114;
	
   $sql="UPDATE " . $table . " SET  ";
/////// getting field name form table_data//////////
$i=0;


for($j=0; $j<$form_update_count;$j++) {
	
if($j<$form_update_count-1){
   $tt=$tt. $table_update_array[$j]. "= '" . $data_stream_array[$form_update_array[$j]]  . "',"; 
    }
 if($j==$form_update_count-1){
   $tt=$tt. $table_update_array[$j]. "= '" . $data_stream_array[$form_update_array[$j]]  . "'";
  }		
}
$sql=$sql .$tt . " WHERE " ;
///// gating form field value ////////////////
$i3=0;
$tt='';
foreach ($where_array as $key => $value) { 
if($i3==0){
 $tt=$tt . $value. "= '" . $data_stream_array[$value]  ."';";
}
 $i3=$i3+1;
}

$sql=$sql.$tt;


if(!mysql_query($sql)){

echo "no";
}else
{
	echo "yes";
}

} 
	
} 
} 

//////////////// DELETE OPERATION //////////////////////////////////////
if($operation=="Delete"){
	
$where_field=$_POST['where_field']; // DUPLICATE FIELD CHAKE
//////// table data /////////////////////
$where_data =json_encode($where_field);
$where_array=json_decode($where_data, true);

$sql3="SELECT * FROM " . $table . " WHERE ";
$tt3='';
$i3=0;
foreach ($where_array as $key => $value) { 
if($i3==0){
 $tt3=$tt3 . $value. "= '" ;
}
 $i3=$i3+1;
 }
 
 ///////////////     
$i3=0;
foreach ($where_array as $key => $value) { 
if($i3==1){
 $tt3=$tt3 . $data_stream_array[$value]  ."';";
}
 $i3=$i3+1;
 } 
$sql3=$sql3 .$tt3 ;
$result3=mysql_query($sql3);
$n3=mysql_num_rows($result3);
mysql_free_result($result3);
$sql3='';
if($n3<=0){
  echo "no_exist";
    exit;
   }

if($n3>0){
 $sql4="DELETE FROM " . $table . " WHERE  ";
   
$tt3='';
$i3=0;
foreach ($where_array as $key => $value) { 
if($i3==0){
 $tt3=$tt3 . $value. "= '" ;
}
 $i3=$i3+1;
 }
 
 ///////////////     
$i3=0;
foreach ($where_array as $key => $value) { 
if($i3==1){
 $tt3=$tt3 . $data_stream_array[$value]  ."';";
}
 $i3=$i3+1;
 } 
$sql4=$sql4 .$tt3 ; 
if(!mysql_query($sql4)){
echo "no";
}else
{
	echo "yes";
} 
} // where id if 
} //end delete delete 





?>