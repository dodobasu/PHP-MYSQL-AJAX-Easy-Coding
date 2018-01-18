<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Prativas Basu">
  <title>Control Panel</title>

  <!-- Bootstrap Core CSS -->
  <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/jqueryui/jquery-ui.css" rel="stylesheet">
  <link href="assets/easy_crud/easy_crud.css" rel="stylesheet">
  <!-- Custom Fonts -->
<script src="assets/jquery/jquery.min.js"></script>
<script src="assets/jquery/jquery-migrate.min.js"></script>
  <script src="assets/jqueryui/jquery-ui.js"></script>
  <script src="assets/easy_crud/easy_crud.js"></script>

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

  <script type="text/javascript" charset="utf-8">
    $(function() {
      $('#names').avro({
        'en': true
      }, function(isBangla) {
        if (isBangla) {
          $('.mode').text('English');
        } else {
          $('.mode').text('Bangla');
        }
      });
    });
  </script>
  <script>
    $(document).keycut();
    $(document).ready(function() {
      ///// ajax indicator////
      $.ajaxSetup({
        beforeSend: function() {
          // show gif here, eg:
          $("#loading").show();
          $("#load").show();
        },
        complete: function() {
          // hide gif here, eg:
          $("#loading").hide();
          $("#load").hide();
        }
      });
    });
  </script>
  <script>
    $(document).ready(function(e) {
      form_obj = {
          form_data: ['id', 'names', 'classs', 'sections'], //// All Main Form Field name or  id ( field name id will be same )
          table_data: ['id', 'names', 'classs', 'sections'], /// same sequence as the form_field name to corresponding mysql field name	
          form_type: ['text', 'text', 'select', 'select'], /// Form field type in same sequence 
          total_no: 4, ///  Total No of Field
          table: 'student', /// name of the mysql table where data goes
          form_id: 'myform', /// name of the form id value
          status_division: 'status_show', ///  div  id name where form manipulation status shows generally top of main form
          
		  
		  validation: { /// validation method discussed above extensively    
            validation_status: 'Yes',
            minimum_letter: [{
              'names': 4
            }],
            maximum_letter: [{
              'names': 30
            }],
            validation_type: [{
              'names': 'alpha'
            }]
          }
        }
        /////////////////////// Save Form /////////////////////////////// 
      $('#save').click(function(event) { //// when save button clicked
        event.stopPropagation(); /// to stop even repeatation
        event.preventDefault(); /// to stop even bubbling
        method_obj = {}; /// to clear method object JSON Data
        method_obj = { /// starting method object         
          method: 'Save', //// method name 
          blank_field: 'id', //// the field which must  be blank 
          duplicate_field: {
            duplicate_both: ['names', 'classs', 'sections'], /// If all the field of table have same value AND Logic                                 
            duplicate_single: [] /// if only individual field have same value OR logic
          },
          required_field: ['names'], /// this fields must be filled   
          data_streams: $('#myform').serializeJSON() /// data stream send  corresponding form
        }
        easy_crud("Save", form_obj, method_obj) /// crud function calling
      });
//////////////////////// Edit Form ////////////////////////
      $('#edit').click(function(event) {
        event.stopPropagation(); /// to stop even repeatation
        event.preventDefault(); /// to stop even bubbling
        method_obj = {}; /// to clear method object JSON Data
        method_obj = { /// starting method object         
          method: "Edit", //// method name
          where_field: {
            table_where: 'id', //// table field primary /unique field 
            form_where: 'id' //// the form field name /id 
          },
          duplicate_field: {
            duplicate_both: [],
            duplicate_single: []
},
          //// in case edit you must form field data as we don't want to edit all the field so it is declared in edit field 
          form_update_data: ['id', 'names', 'classs', 'sections'], /// field of form you want to edit
          table_update_data: ['id', 'names', 'classs', 'sections'], /// same sequence of mysql table data		
          form_update_type: ['text', 'text', 'select', 'select'], /// same sequence of form type data
          required_field: ['names'], /// Required field must be filled  
          data_streams: $('#myform').serializeJSON() /// data stream send to field			
        }
        easy_crud("Edit", form_obj, method_obj);
      });
      //////////////////////// Reset Form  ////////////////////////
      $('#reset').click(function(event) {
        method_obj = {}; /// clear method JSON object
        method_obj = {
          method: 'Reset', /// set the name	   
        }
        easy_crud("Reset", form_obj, method_obj)
      });
      //////////////// search form ///////////////////////////////
      $('#name_search').keyup(function(event) {
        event.stopPropagation(); /// to stop even repeatation
        event.preventDefault(); /// to stop even bubbling
        method_obj = {}; /// to clear method object JSON Data
        method_obj = { /// starting method object        
          method: 'Search', /// Method Name
          table_search: "student", /// table name -may differ from main form table
          list_division: 'search_result', //// div id where search result display may be below the search box
          search_box_id: 'name_search', //// name of search input box 
          search_data: ['names', 'id'], /// data to be search which table data to be search
          min_letter: 3, /// min number of letter need to be searched
          href_value: 'id', //// search table primary key for value linking fields
          heading_data: ['ID', 'Name', 'Class'], /// Listing Heading Row Value
          list_data: ['id', 'names', 'classs'], //// actual table field data to be display			
          data_streams: $('#searchform').serializeJSON()
        }
        easy_crud("Search", form_obj, method_obj)
      });
      //////////////////////////////////  search filling the main form //////////////////////////
      $('#search_result ul li a').live("click", function(event) {
        event.stopPropagation(); /// to stop even repeatation
        event.preventDefault(); /// to stop even bubbling
        method_obj = {}; /// to clear method object JSON Data
        var where_data = $(this).attr('value'); /// get the id of the  record
        method_obj = { /// starting method object        
          method: "FillForm", /// Method Name
          table_form: "student", /// table name
          form_id: 'myform', //// form effected by filling
          attr_value: where_data, /// value of the attr to be link
          attr_name: 'id', /// name of the field from where arrt_value comes 
          ///// attr_imposed is use to where value given to another form field  parameters are (status is Yes/No > imposed or not ,type of control button /textbox , id name of the control , and value attribute value)
          attr_imposed: [{
            'status': 'Yes',
            'type': 'button',
            'id': 'expand',
            'value': where_data
          }]
        }
        easy_crud("FillForm", form_obj, method_obj);
      });
      /////////////////// Delete Operation ////////////////////////////
      $('#delete').click(function(event) {
        event.stopPropagation(); /// to stop even repeatation
        event.preventDefault(); /// to stop even bubbling
        method_obj = {}; /// to clear method object JSON Data
        method_obj = { /// starting method object	         
          method: "Delete", /// Method Name
          where_field: {
            table_where: 'id', //// table field primary /unique field 
            form_where: 'id' //// the form field name /id 
          },
          required_field: ['names', 'id'], //// pre required of the form field
          data_streams: $('#myform').serializeJSON() /// data stream			
        }
        easy_crud("Delete", form_obj, method_obj);
        $('#reset').trigger('click');
      });
    });
  </script>
  </head>

  <body>

<!-- Page Content -->
<div id="page-wrapper">
    <div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
        <h3 class="page-header"> CRUD TESTING </h3>
      </div>
        <!-- /.col-lg-12 --> 
      </div>
    <!-- /.row -->
    
    <div class="row">
        <div class="col-lg-4" style="min-height:30px;"> <img id="loading" style="display:none;" src="assets/ajax_indicator/ajax-loader.gif"> </div>
        <div class="col-lg-8" style="min-height:33px;">
        <div id="status_show" style="padding:6px;;display:none; text-align:center;"> </div>
      </div>
      </div>
    <div class="row">
        <div class="col-lg-4">
        <form name="searchform" id="searchform">
            <!-- search button -->
            <div class="form-group">
            <label class="col-lg-4 control-label">Search Name</label>
            <div class="col-lg-8 ">
                <div class="input-group">
                <input name="name_search" type="text" class="form-control" id="name_search" maxlength="8" autocomplete="off" required>
                <div class="input-group-addon btn btn-group" name="btn-search" id="btn-search"><span class="glyphicon glyphicon-search"></span></div>
              </div>
              </div>
          </div>
          </form>
        <!-- display result -->
        <div id="search_result">search Result</div>
      </div>
        <div class="col-lg-8" style="min-height:30px;">
        <form name="myform" id="myform" enctype="multipart/form-data">
            <table class="table table-responsive">
            <thead>
                <tr>
                <th colspan="2" class="alert-info"> <span class="glyphicon glyphicon-file"></span> Subject Name Entry &nbsp; | <small><code>NOTE</code> &nbsp;Press <code>Ctrl+M </code> to switch to <code> <span class="mode"> </span></code>. Hit Space, Enter or Tab to transliterate.</small></th>
              </tr>
              </thead>
            <tbody class="alert-warning">
                <tr>
                <td>id :</td>
                <td><input type="text" size="5" name="id" id="id" readonly></td>
              </tr>
                <tr>
                <td>name : </td>
                <td><input type="text" size="20" name="names" id="names"></td>
              </tr>
                <tr>
                <td>Class : </td>
                <td><select id="classs" name="classs">
                    <optgroup label="Primary">
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    </optgroup>
                    <optgroup label="Secondary Section">
                    <option value="V">V</option>
                    <option value="VI">VI</option>
                    <option value="VII">VII</option>
                    <option value="VIII">VIII</option>
                    <option value="IX">IX</option>
                    <option value="X">X</option>
                    </optgroup>
                  </select></td>
              </tr>
                <tr>
                <td>Section : </td>
                <td><select id="sections" name="sections">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select></td>
              </tr>
                <tr>
                <td colspan="2" class="alert-info"><button type="button" name="reset" id="reset" class="btn btn-warning" data-key="r"><span class="glyphicon glyphicon-off"></span> <b><u>R</u></b>eset </button>
                    <button type="button" name="save" id="save" class="btn btn-success" data-key="s"><span class="glyphicon glyphicon-save"> <b><u>S</u></b>ave </span> </button>
                    <button type="button" id="edit" name="edit" class="btn btn-primary" data-key="e"><span class="glyphicon glyphicon-edit"> <b><u>E</u></b>dit</span> </button>
                    <button type="button" name="delete" id="delete" class="btn btn-danger" data-key="d"><span class="glyphicon glyphicon-remove"> <b><u>D</u></b>elete</span> </button>
                    <button type="button" name="expand" id="expand" class="btn btn-info" data-key="x"><span class="glyphicon glyphicon-search"> Expand</span> </button>
                    <img id="load" style="display:none;" src="assets/ajax_indicator/ajax-load.gif"></td>
              </tr>
              </tbody>
          </table>
          </form>
      </div>
      </div>
    <!-- end row--> 
  </div>
    <!-- /.container-fluid --> 
  </div>
<!-- /#page-wrapper --> 

<!-- Bootstrap Core JavaScript --> 
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>