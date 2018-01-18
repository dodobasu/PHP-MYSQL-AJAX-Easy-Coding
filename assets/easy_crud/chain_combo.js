// JavaScript Document
//////////////////////////////////////////// CHAIN COMBO
function chain_combo(pcombo,wcombo,ajax_files,tables,child_field,fields,values,txtshow,txtid){
var pvalue;	
	/// parent_combo / own_combo/ name ajaxfile/ table/ child_field / child_value / visible field/ value field/ boolean textshow/ txt field
$('#'+pcombo).on('change',function(){


$('#'+ wcombo +' option').remove();	
$('#'+wcombo).append(new Option("" , "")); 
pvalue=$('#'+pcombo).val();

$.ajax({       type: 'post',
               url: ajax_files,
               data: 'tables=' + tables + '&child_field=' + encodeURIComponent(child_field) + '&pvalue=' + encodeURIComponent(pvalue) + '&fields='+encodeURIComponent(fields)   + '&values='+encodeURIComponent(values) + '&action=chain_combo' ,
               success: function (data, status) {
                 // sp = data.split('|');
				
				 
				data1=JSON.parse(data); 
				

				
for(i=0;i<data1.length;i++){
if((data1[i][0].toLowerCase().indexOf(',') >= 0))
{
var sp=data1[i][0].split(',')
for(k=0; k<parseInt(sp.length);k++){
$('#'+wcombo).append(new Option(sp[k] , sp[k] ));  	
}

}
else
{
$('#'+wcombo).append(new Option(data1[i][0] , data1[i][1] ));  	

}
}
}
}); 
if(txtshow==true){	
$('#'+wcombo).on('change',function(){
$('#'+txtid).val($('#'+wcombo).val());
		
});
}


});


return false;
}


/////////////////////////  SELECT COMBO

function select_combo(combos,ajax_files,tables,fields,values,txtshow,txtid){
	
	/// combofield / name ajaxfile/ table/ visible field/ value field/ boolean textshow/ txt field
$.ajax({       type: 'post',
               url: ajax_files,
               data: 'tables=' + tables + '&fields='+encodeURIComponent(fields) +  '&combos='+ encodeURIComponent(combos) + '&values='+encodeURIComponent(values) + '&action=select_combo' ,
               success: function (data, status) {
                 // sp = data.split('|');
				data1=JSON.parse(data); 
for(i=0;i<data1.length;i++){
$('#'+combos).append(new Option(data1[i][0] , data1[i][1] ));  	
	
}
 }
			   
			}); 

			   
if(txtshow==true){
	
$('#'+combos).on('change',function(){
$('#'+txtid).val($('#'+combos).val());
		
});
}

return false;

}


/////////////////////////  SELECT COMBO

function conditional_select_combo(combos,ajax_files,tables,fields,values,cond, txtshow,txtid){
	
	/// combofield / name ajaxfile/ table/ visible field/ value field/ boolean textshow/ txt field
$.ajax({       type: 'post',
               url: ajax_files,
               data: 'tables=' + tables + '&fields='+encodeURIComponent(fields) +  '&combos='+ encodeURIComponent(combos) + '&values='+encodeURIComponent(values) + '&cond='+encodeURIComponent(cond) + '&action=conditional_select_combo' ,
               success: function (data, status) {
                 // sp = data.split('|');
				data1=JSON.parse(data); 
				
for(i=0;i<data1.length;i++){
if((data1[i][0].toLowerCase().indexOf(',') >= 0))
{
var sp=data1[i][0].split(',')
for(k=0; k<parseInt(sp.length);k++){
$('#'+combos).append(new Option(sp[k] , sp[k] ));  	
}

}
else
{
$('#'+combos).append(new Option(data1[i][0] , data1[i][1] ));  	

}
}
}
});
			   
if(txtshow==true){
	
$('#'+combos).on('change',function(){
$('#'+txtid).val($('#'+combos).val());
		
});
}

return false;

}