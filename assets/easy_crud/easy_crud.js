// A function ease use of jquery ajax data CRUD function //
/* this function was created by prativas basu - wbeducare@gmail.com (919475503342 */


 

  


function easy_crud(operation, form_obj, method_obj) {
 
 /////////////////// save operation ////////////////////////////	
if (method_obj['method'] == 'Save') {
        /////////////////////////// common validation ///////////////////////////////////
if (form_obj['validation']['validation_status'] == 'Yes' && method_obj['method'] != 'Search') {
/// /////////////////// - MINIMUM LETTER IF WRITTEN ////////////
   obj = form_obj['validation']['minimum_letter'][0];
            for (var key in obj) {
                if (method_obj['data_streams'][key] != '' && parseInt(method_obj['data_streams'][key].length) < parseInt(obj[key])) {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Minimum  " + obj[key] + " letters </span>");
                    document.getElementById(key).focus();
                    return false;
                }
                document.getElementById(key).style.backgroundColor = '#fff';
                $('.easy_crud_error').remove();
            }

            /// /////////////////// - MAXIMUM LETTER IF WRITTEN ////////////
            obj = form_obj['validation']['maximum_letter'][0];
            for (var key in obj) {
                if (method_obj['data_streams'][key] != '' && parseInt(method_obj['data_streams'][key].length) > parseInt(obj[key])) {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Maximum  " + obj[key] + " letters </span>");
                    return false;
                }
                document.getElementById(key).style.backgroundColor = '#fff';
                $('.easy_crud_error').remove();
            }

/// /////////////////// -Validate Pattern  ////////////
 obj = form_obj['validation']['validation_type'][0];
for (var key in obj) {
 //// alphabate check////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'alpha' && checkalpha(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'>Only letter space and dot allowed </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// numeric check////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'numeric' && isNumber(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Only number  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// decimal numeric check////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'decimal' && isDecimal(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Only decimal or Integer(y.zyx)  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// decimal numeric check 2 decimal point////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'decimal2' && isDecimal2(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> upto 2 decimal point  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// decimal numeric check 3 decimal point////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'decimal3' && isDecimal3(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> upto 3 decimal point </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// only alphabet no space ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'onlyalpha' && onlyalpha(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Only alphabet no space & others  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check email ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'email' && checkemail(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> not valid email  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check date dmy ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'datedmy' && datedmy(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only dd/mm/yyyy date allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check date mdy ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'datemdy' && datemdy(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only mm/dd/yyyy date allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check date ymd yyy-mm-dd ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'dateymd' && dateymd(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only yyyy-mm-dd date allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check mobile 10 ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'mobile10' && mobile10(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only 10 digit allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check mobile 12 ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'mobile12' && mobile12(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only 12 digit allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check alpha and dash ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'alphadash' && alphadash(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only Alphabet and dash allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check alphanumeric ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'alphanumeric' && alphanumeric(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only Alphabet and Number allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check website ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'website' && chkwebsite(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Not valid website  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check password ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'password' && chkpassword(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> password (6-16) number letter special character  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// no space ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'nospace' && nospace(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> No space allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

            }
        }
        /// validation status end

        $('.easy_crud_error').remove();
        /// /////////////////// - REQUIRED FIELD  //////////////
        var n = parseInt(method_obj['required_field'].length);
        for (i = 0; i < n; i++) {
            if (document.forms[form_obj['form_id']][method_obj['required_field'][i]].value == '') {
                bootbox.alert("<span class='glyphicon glyphicon-remove-circle glyphicon-1p5x  red'> <u> Please Enter Required Data </u> </span> <h3> Can not Save !!</h3>  <h5>  Write <strong> " + method_obj['required_field'][i] + " </strong>Field !!</h5>");
                return false;
            }
        }
        ///field blank
        if (document.forms[form_obj['form_id']][method_obj['blank_field']].value != '') {
            bootbox.alert("<span class='glyphicon glyphicon-remove-circle glyphicon-1p5x  red'> <u> In valid Record </u> </span> <h3> Unable to Save !!</h3>  <h5> <strong> " + method_obj['blank_field'] + " </strong> must be blank</h5>");
            return false;
        }

        var finalObj = $.extend(method_obj, form_obj);

        // console.log(method_obj + form_obj);
        $.ajax({
            type: "POST",
            url: "assets/easy_crud/easy_crud.php",
            data: finalObj,
            async: true,

            success: function(data) {

                //// if duplicate ///////
                if (data == 'duplicate') {
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Error! Duplicate Record  Not Saved');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#CC3300',
                        'color': '#FFFF66'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(6000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();

                    bootbox.alert("<span class='glyphicon glyphicon-remove glyphicon-1p5x  red'> Duplicate Record </span><h4> Can not Save !! <h5> <strong> Duplicate Record Found</strong> Unable to Save !!</h5>");
                }

                if (data == 'yes') {

                    bootbox.alert("<h3><span class='glyphicon glyphicon-ok glyphicon-1p2x green'> Saved successfully </span> </h3> <h4> Record Saved Successfully</h4>");
                    for (i = 0; i < parseInt(finalObj['total_no']); i++) {
                        ///////// clear field TEXT BOX
                        if (finalObj['form_type'][i] == 'text') {
                            $('input[name=' + finalObj['form_data'][i] + ']').attr('value', '');
                        }
                        ////// CLEAR FIELD TEXTAREA
                        if (finalObj['form_type'][i] == 'textarea') {
                            $('textarea[name=' + finalObj['form_data'][i] + ']').val('');
                        }
                        /// clear radio
                        if (finalObj['form_type'][i] == 'checkbox') {
                            $('input:checkbox').removeAttr('checked');
                        }

                        /// clear radio/////
                        if (finalObj['form_type'][i] == 'checkbox') {
                            $('input:radio').removeAttr('checked');
                        }

                        ////// CLEAR FIELD SELECT
                        if (finalObj['form_type'][i] == 'select') {
                            $('select[name=' + finalObj['form_data'][i] + ']').val($('select[name=' + finalObj['form_data'][i] + '] option:first').val());
                        }

                    } /// END FOR LOOP

                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Record Saved Sucessfully');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#363',
                        'color': '#FF9'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);

                    $('input[name=' + finalObj['form_data'][0] + ']').focus();

                } ///// INSERT END /////////////////
                /// record not saved				
                if (data == 'no') {

                    bootbox.alert("<span class='glyphicon glyphicon-remove glyphicon-1p5x  red'> Record not Saved </span><h4> Record Error !! </h4><h5> <strong>Unable to save </strong> Try again !!</h5>");
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Error! Record Not Saved');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#CC3300',
                        'color': '#FFFF66'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                }
            },
            //cache: false,
            // contentType: false,
            // processData: false
        });

    }

    ////////////////////////////// reset button ///////////////////////////////////////
    if (method_obj['method'] == 'Reset') {
        for (i = 0; i < parseInt(form_obj['total_no']); i++) {
            if (form_obj['form_type'][i] == 'text') {
                $('input[name=' + form_obj['form_data'][i] + ']').attr('value', '');
            }
            ////// CLEAR FIELD TEXTAREA
            if (form_obj['form_type'][i] == 'textarea') {
                $('textarea[name=' + form_obj['form_data'][i] + ']').val('');
            }
            /// clear checkbox
            if (form_obj['form_type'][i] == 'checkbox') {
                $('input:checkbox').removeAttr('checked');
            }

            /// clear radio/////
            if (form_obj['form_type'][i] == 'radio') {
                $('input:radio').removeAttr('checked');
            }

            ////// CLEAR FIELD SELECT
            if (form_obj['form_type'][i] == 'select') {
                $('select[name=' + form_obj['form_data'][i] + ']').val($('select[name=' + form_obj['form_data'][i] + '] option:first').val());
            }
        } /// end loop

        $('div[id=' + form_obj['status_division'] + ']').html();
        $('#' + form_obj['form_data'][1]).focus();

    } /// end reset

    /////////////////////////////////   SEARCH TABLE AND LISTING ////////////////////////
    if (method_obj['method'] == 'Search') {
        var finalObj = $.extend(method_obj, form_obj);
        //// alert where field	
        if (document.getElementById(finalObj['search_box_id']).value == '') {
            $('div[id=' + finalObj['status_division'] + ']').html();
            $('div[id=' + finalObj['status_division'] + ']').html('Write at least ' + finalObj['min_letter'] + ' Letters to search ');
            $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                'background': '#CC3300',
                'color': '#FFFF66'
            });
            $('div[id=' + finalObj['status_division'] + ']').fadeOut(5000);
            $('div[id=' + finalObj['list_division'] + ']').html('');

            return false;
        }
        //// min letter //////////
        if (parseInt(document.getElementById(finalObj['search_box_id']).value.length) < parseInt(finalObj['min_letter'])) {
            $('div[id=' + finalObj['status_division'] + ']').html();
            $('div[id=' + finalObj['status_division'] + ']').html('Minimum' + finalObj['min_letter'] + ' Letters to search ');
            $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                'background': '#CC3300',
                'color': '#FFFF66'
            });
            $('div[id=' + finalObj['status_division'] + ']').fadeOut(5000);
            $('div[id=' + finalObj['list_division'] + ']').html('');
            return false;
        }

        $.ajax({
            type: "POST",
            url: "assets/easy_crud/easy_crud.php",
            data: finalObj,
            cache: false,
            success: function(data) {
                    /////// if insert clear field if ok  /////	

                    ////////////  record found//////////////
                    $('div[id=' + finalObj['list_division'] + ']').html(data);

                    /// record not found////////		
                } /// end success data //////
        });
    }
    /////////////////////////////////  FILL_DATA //////////
    if (method_obj['method'] == 'FillForm') {
        var finalObj = $.extend(method_obj, form_obj);

        info = finalObj['attr_imposed'];
        if (info[0]['status'] == 'Yes') {
            $("#" + info[0]['id']).attr('value', info[0]['value']);
        }

        $.ajax({
            type: "POST",
            url: "assets/easy_crud/easy_crud.php",
            data: finalObj,
            cache: false,
            success: function(data) {
				
				
                    /////// if insert clear field if ok  /////
                    data1 = JSON.parse(data);
                    for (i=0;i< parseInt(finalObj['form_data'].length); i++) {

                        ////// FILL THE FIELD TEXTBOX
                        if (finalObj['form_type'][i] == 'text') {
                            $('input[name=' + finalObj['form_data'][i] + ']').attr('value', '');
                            $('input[name=' + finalObj['form_data'][i] + ']').attr('value', data1[0][finalObj['table_data'][i]]);
                        }
                        ////// FILL THE FIELD TEXTAREA
                        if (finalObj['form_type'][i] == 'textarea') {
                            $('textarea[name=' + finalObj['form_data'][i] + ']').val('');
                            $('textarea[name=' + finalObj['form_data'][i] + ']').val(data1[0][finalObj['table_data'][i]]);
                        }

                        ////// FILL THE FIELD SELECT ///////////
                        if (finalObj['form_type'][i] == 'select') {
                            $('select[name=' + finalObj['form_data'][i] + ']').val(data1[0][finalObj['table_data'][i]]);
                        }

                        ////// FILL THE FIELD CHECKBOX
                        if (finalObj['form_type'][i] == 'checkbox') {
                            $('#' + finalObj['form_data'][i]).removeAttr('checked');
                            var chkdata = '';
                            var chkdata = data1[0][finalObj['table_data'][i]];
                            if (chkdata == 'ON' || chkdata == 'on' || chkdata == 'yes' || chkdata == 'Yes' || chkdata == '1' || chkdata == 'YES' || chkdata == 'Active' || chkdata == 'Show') {
                                $('#' + finalObj['form_data'][i]).prop('checked', true);
                            }
                        }
                        ////// FILL THE FIELD RADIO
                        if (finalObj['form_type'][i] == 'radio') {
                            $('input:radio[name=' + finalObj['form_data'][i] + ']').filter('[value=' + data1[0][finalObj['table_data'][i]] + ']').attr('checked', true);

                        }
                    }
                } /// end success data //////
        });

    }

    ////////////////////////////////////////////// EDIT DATA ////////////////////////////////////////////////////
    if (method_obj['method'] == 'Edit') {
        if (form_obj['validation']['validation_status'] == 'Yes' && method_obj['method'] != 'Search') {
            /////// 1st { //
            obj = form_obj['validation']['minimum_letter'][0];
            for (var key in obj) {
                if (method_obj['data_streams'][key] != '' && parseInt(method_obj['data_streams'][key].length) < parseInt(obj[key])) {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Minimum  " + obj[key] + " letters </span>");
                    document.getElementById(key).focus();
                    return false;
                }
                document.getElementById(key).style.backgroundColor = '#fff';
                $('.easy_crud_error').remove();
            }
            /// /////////////////// - MAXIMUM LETTER IF WRITTEN ////////////
            obj = form_obj['validation']['maximum_letter'][0];
            for (var key in obj) {
                if (method_obj['data_streams'][key] != '' && parseInt(method_obj['data_streams'][key].length) > parseInt(obj[key])) {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Maximum  " + obj[key] + " letters </span>");
                    return false;
                }
                document.getElementById(key).style.backgroundColor = '#fff';
                $('.easy_crud_error').remove();
            }
            /// /////////////////// -Validate Pattern  ////////////
            obj = form_obj['validation']['validation_type'][0];
            for (var key in obj) {

                //// 2nd {///

                //// alphabate check////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'alpha' && checkalpha(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'>Only letter space and dot allowed </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// numeric check////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'numeric' && isNumber(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Only number  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// decimal numeric check////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'decimal' && isDecimal(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Only decimal or Integer(y.zyx)  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// decimal numeric check 2 decimal point////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'decimal2' && isDecimal2(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> upto 2 decimal point  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// decimal numeric check 3 decimal point////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'decimal3' && isDecimal3(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> upto 3 decimal point </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// only alphabet no space ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'onlyalpha' && onlyalpha(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Only alphabet no space & others  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check email ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'email' && checkemail(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> not valid email  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check date dmy ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'datedmy' && datedmy(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only dd/mm/yyyy date allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check date mdy ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'datemdy' && datemdy(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only mm/dd/yyyy date allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check date ymd yyy-mm-dd ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'dateymd' && dateymd(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only yyyy-mm-dd date allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check mobile 10 ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'mobile10' && mobile10(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only 10 digit allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check mobile 12 ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'mobile12' && mobile12(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only 12 digit allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check alpha and dash ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'alphadash' && alphadash(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only Alphabet and dash allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check alphanumeric ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'alphanumeric' && alphanumeric(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> only Alphabet and Number allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check website ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'website' && chkwebsite(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> Not valid website  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// check password ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'password' && chkpassword(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> password (6-16) number letter special character  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

                //// no space ////	
                if (method_obj['data_streams'][key] != '' && obj[key] == 'nospace' && nospace(method_obj['data_streams'][key]) == 'false') {
                    document.getElementById(key).style.backgroundColor = '#f59970';
                    document.getElementById(key).focus();
                    $('#' + key).after("<span class='easy_crud_error'> <span class='glyphicon glyphicon-remove-circle red'> No space allowed  </span>");
                    return false;
                } else {
                    document.getElementById(key).style.backgroundColor = '#fff';
                    $('.easy_crud_error').remove();
                }

            }
        }
        /// validation status end	

        //// alert where field	
        if (document.forms[form_obj['form_id']][method_obj['where_field']['form_where']].value == '') {
            bootbox.alert("<span class='glyphicon glyphicon-remove-circle glyphicon-1p5x  red'> Select Record </span><h4> Can not Edit <h5> <strong>" + method_obj['where_field']['form_where'] + "</strong> is Required !!</h5>");
            return false;
        }
        var n = parseInt(method_obj['required_field'].length);
        for (i = 0; i < n; i++) {
            if (document.forms[form_obj['form_id']][method_obj['required_field'][i]].value == '') {
                bootbox.alert("<span class='glyphicon glyphicon-remove-circle glyphicon-1p5x  red'> Fill Properly </span><h4> Can not Edit !! <h5> <strong>" + method_obj['required_field'][i] + "</strong> is Required !!</h5>");
                return false;
            }
        }

        finalObj = $.extend(method_obj, form_obj);

        $.ajax({
            type: "POST",
            url: "assets/easy_crud/easy_crud.php",
            data: finalObj,
            cache: false,
            success: function(data) {

                /// where no exit record ///////////
                if (data == 'not_exist') {
                    bootbox.alert("<span class='glyphicon glyphicon-remove glyphicon-1p5x  red'> Not updated </span><h4> Record Error !! </h4><h5> <strong>Unable to Update </strong> Try again !!</h5>");
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Error! No Such Record found to Exist');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#CC3300',
                        'color': '#FFFF66'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                }
                /// duplicate record ///////////
                if (data == 'duplicate') {
                    bootbox.alert("<span class='glyphicon glyphicon-remove glyphicon-1p5x  red'> Duplicate Record </span><h4> Error !! Unable to Update </h4><h5> <strong>Unable to Edit </strong> Try again !!</h5>");
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Error! Dulicate Record Not Updated');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#CC3300',
                        'color': '#FFFF66'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                }
                ////////////  record save//////////////
                if (data == 'yes') {
                    bootbox.alert("<h3><span class='glyphicon glyphicon-ok glyphicon-1p2x green'> Updated successfully </span> </h3> <h4> Record Edited Successfully</h4>");
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Record Updated Sucessfully');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#363',
                        'color': '#FF9'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                }
                /// record not saved				
                if (data == 'no') {
                    bootbox.alert("<span class='glyphicon glyphicon-remove glyphicon-1p5x  red'> Record not Updated</span><h4> Record Error !! </h4><h5> <strong>Unable to Edit </strong> Try again !!</h5>");
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Error! Record Not updated');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#CC3300',
                        'color': '#FFFF66'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                }
            }
        });
    }

    /////////////////////  //////////////// DELETE /////////////////////////////////////
    if (method_obj['method'] == 'Delete') {

        var answer = confirm("Do you really want to delete ?")
        if (!answer) {
            return false;
        }

        //// alert where field	
        if (document.forms[form_obj['form_id']][method_obj['where_field']['form_where']].value == '') {
            bootbox.alert("<span class='glyphicon glyphicon-remove-circle glyphicon-1p5x  red'> Select Record </span><h4> Can not Delete <h5> <strong> " + method_obj['where_field']['form_where'] + "</strong> is Required !!</h5>");
            return false;
        }
        var n = parseInt(method_obj['required_field'].length);
        for (i = 0; i < n; i++) {
            if (document.forms[form_obj['form_id']][method_obj['required_field'][i]].value == '') {
                bootbox.alert("<span class='glyphicon glyphicon-remove-circle glyphicon-1p5x  red'> Fill Properly </span><h4> Can not Delete !! <h5> <strong> " + method_obj['required_field'][i] + " </strong> is Required !!</h5>");
                return false;
            }
        }
        var finalObj = {};
        finalObj = $.extend(method_obj, form_obj);

        
        $.ajax({
            type: "POST",
            url: "assets/easy_crud/easy_crud.php",
            data: finalObj,
            cache: false,
            success: function(data) {
                /// where no exit record ///////////
                
                if (data == 'not_exist') {
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Error! No Such Record found - Not Deleted');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#CC3300',
                        'color': '#FFFF66'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                    bootbox.alert("<span class='glyphicon glyphicon-remove glyphicon-1p5x  red'> Record not Found</span><h4> Unable to Delete !! </h4><h5> <strong>Unable to Delete </strong> Try again !!</h5>");
                }
                ////////////  record save//////////////
                if (data == 'yes') {
                    for (i = 0; i < parseInt(finalObj['total_no']); i++) {
                        ///////// clear field TEXT BOX
                        if (finalObj['form_type'][i] == 'text') {
                            $('input[name=' + finalObj['form_data'][i] + ']').attr('value', '');
                        }
                        ////// CLEAR FIELD TEXTAREA
                        if (finalObj['form_type'][i] == 'textarea') {
                            $('textarea[name=' + finalObj['form_data'][i] + ']').val('');
                        }

                        /// clear checkbox
                        if (form_obj['form_type'][i] == 'checkbox') {
                            $('input:checkbox').removeAttr('checked');
                        }

                        /// clear radio/////
                        if (form_obj['form_type'][i] == 'checkbox') {
                            $('input:radio').removeAttr('checked');
                        }

                        ////// CLEAR FIELD SELECT
                        if (finalObj['form_type'][i] == 'select') {
                            $('select[name=' + finalObj['form_data'][i] + ']').val($('select[name=' + finalObj['form_data'][i] + '] option:first').val());
                        }

                    } /// END FOR LOOP

                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                    //$("#div3").fadeOut(3000)	

                    ////////////// show symbol ////////////////////////

                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Record Deleted Sucessfully');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#363',
                        'color': '#FF9'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();
                    bootbox.alert("<h3><span class='glyphicon glyphicon-ok glyphicon-1p2x green'> Deleted successfully </span> </h3> <h4> Record Deleted Successfully</h4>");
                } ///// INSERT END /////////////////
                /// record not saved				
                if (data == 'no') {
                    $('div[id=' + finalObj['status_division'] + ']').html();
                    $('div[id=' + finalObj['status_division'] + ']').html(' Error! Record Not Deleted');
                    $('div[id=' + finalObj['status_division'] + ']').fadeIn(2000).css({
                        'background': '#CC3300',
                        'color': '#FFFF66'
                    });
                    $('div[id=' + finalObj['status_division'] + ']').fadeOut(3000);
                    $('input[name=' + finalObj['form_data'][0] + ']').focus();

                    bootbox.alert("<span class='glyphicon glyphicon-remove glyphicon-1p5x  red'> Record not Deleted</span><h4> Record Error !! </h4><h5> <strong>Unable to Delete </strong> Try again !!</h5>");
                }
            }
        });
    }

} /// end function



///////////////////////////////////////////// validation functions /////////////////////////////////////////////////

function isNumber(t){var t,e=/^\d+$/;return e.test(t)?"true":"false"}function isDecimal(t){var t,e=/^(0|[1-9][0-9]{0,2}(?:(,[0-9]{3})*|[0-9]*))(\.[0-9]+){0,1}$/;return e.test(t)?"true":"false"}function isDecimal2(t){var t,e=/^\s*-?\d+(\.\d{1,2})?\s*$/;return e.test(t)?"true":"false"}function isDecimal3(t){var t,e=/^\s*-?\d+(\.\d{1,3})?\s*$/;return e.test(t)?"true":"false"}function allnumericplusminus(t){var e=/^[-+]?[0-9]+$/;return t.match(e)?"true":"false"}function checkalpha(t){var t,e=/^[a-zA-Z '.-]+$/;return e.test(t)?"true":"false"}function onlyalpha(t){var t,e=/^[A-Za-z]+$/;return e.test(t)?"true":"false"}function checkemail(t){var t,e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/;return e.test(t)?"true":"false"}function dateymd(t){var t,e=/^(\d{4})-(\d{1,2})-(\d{1,2})/;return e.test(t)?"true":"false"}function datedmy(t){var e=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;if(!t.match(e))return"false";var r=t.split("/"),a=t.split("-");if(lopera1=r.length,lopera2=a.length,lopera1>1)var n=t.split("/");else if(lopera2>1)var n=t.split("-");var s=parseInt(n[0]),u=parseInt(n[1]),l=parseInt(n[2]),f=[31,28,31,30,31,30,31,31,30,31,30,31];if((1==u||u>2)&&s>f[u-1])return"false";if(2==u){var i=!1;if((l%4||!(l%100))&&l%400||(i=!0),0==i&&s>=29)return"false";if(1==i&&s>29)return"false"}}function datemdy(t){var e=/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;if(!t.match(e))return"false";var r=t.split("/"),a=t.split("-");if(lopera1=r.length,lopera2=a.length,lopera1>1)var n=t.split("/");else if(lopera2>1)var n=t.split("-");var s=parseInt(n[0]),u=parseInt(n[1]),l=parseInt(n[2]),f=[31,28,31,30,31,30,31,31,30,31,30,31];if((1==s||s>2)&&u>f[s-1])return"false";if(2==s){var i=!1;if((l%4||!(l%100))&&l%400||(i=!0),0==i&&u>=29)return"false";if(1==i&&u>29)return"false"}}function mobile10(t){var t,e=/^\d{10}$/;return e.test(t)?"true":"false"}function mobile12(t){var t,e=/^\d{12}$/;return e.test(t)?"true":"false"}function alphadash(t){var t,e=/^[a-zA-Z-]+$/;return e.test(t)?"true":"false"}function alphanumeric(t){var t,e=/^[0-9a-zA-Z]+$/;return e.test(t)?"true":"false"}function chkwebsite(t){var t,e=/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;return e.test(t)?"true":"false"}function nospace(t){var t,e=/^\S*$/;return e.test(t)?"true":"false"}function chkpassword(t){var t,e=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;return e.test(t)?"true":"false"}


//// bootbox/////////////////////////////////

!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d.call(c,a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback.call(this):!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)},a.buttons.confirm.callback=function(){return a.callback.call(this,!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback.call(this,c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!b.isArray(k))throw new Error("Please pass an array of input options");if(!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),a.maxlength&&h.attr("maxlength",a.maxlength),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var d=b(n.dialog),f=d.find(".modal-dialog"),i=d.find(".modal-body"),j=a.buttons,k="",l={onEscape:a.onEscape};if(b.fn.modal===c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(g(j,function(a,b){k+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",l[a]=b.callback}),i.find(".bootbox-body").html(a.message),a.animate===!0&&d.addClass("fade"),a.className&&d.addClass(a.className),"large"===a.size?f.addClass("modal-lg"):"small"===a.size&&f.addClass("modal-sm"),a.title&&i.before(n.header),a.closeButton){var m=b(n.closeButton);a.title?d.find(".modal-header").prepend(m):m.css("margin-top","-10px").prependTo(i)}return a.title&&d.find(".modal-title").html(a.title),k.length&&(i.after(n.footer),d.find(".modal-footer").html(k)),d.on("hidden.bs.modal",function(a){a.target===this&&d.remove()}),d.on("shown.bs.modal",function(){d.find(".btn-primary:first").focus()}),"static"!==a.backdrop&&d.on("click.dismiss.bs.modal",function(a){d.children(".modal-backdrop").length&&(a.currentTarget=d.children(".modal-backdrop").get(0)),a.target===a.currentTarget&&d.trigger("escape.close.bb")}),d.on("escape.close.bb",function(a){l.onEscape&&e(a,d,l.onEscape)}),d.on("click",".modal-footer button",function(a){var c=b(this).data("bb-handler");e(a,d,l[c])}),d.on("click",".bootbox-close-button",function(a){e(a,d,l.onEscape)}),d.on("keyup",function(a){27===a.which&&d.trigger("escape.close.bb")}),b(a.container).append(d),d.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1}),a.show&&d.modal("show"),d},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return p.addLocale=function(a,c){return b.each(["OK","CANCEL","CONFIRM"],function(a,b){if(!c[b])throw new Error("Please supply a translation for '"+b+"'")}),q[a]={OK:c.OK,CANCEL:c.CANCEL,CONFIRM:c.CONFIRM},p},p.removeLocale=function(a){return delete q[a],p},p.setLocale=function(a){return p.setDefaults("locale",a)},p.init=function(c){return a(c||b)},p});






/*! JS Avro Phonetic v1.1.4 http://omicronlab.com | https://raw.github.com/torifat/jsAvroPhonetic/master/MPL-1.1.txt */
var OmicronLab={};OmicronLab.Avro={};OmicronLab.Avro.Phonetic={parse:function(input){var fixed=this.fixString(input);var output="";for(var cur=0;cur<fixed.length;++cur){var start=cur,end=cur+1,prev=start-1;var matched=false;for(var i=0;i<this.data.patterns.length;++i){var pattern=this.data.patterns[i];end=cur+pattern.f.length;if(end<=fixed.length&&fixed.substring(start,end)==pattern.f){prev=start-1;if(typeof pattern.u!=="undefined"){for(var j=0;j<pattern.u.length;++j){var rule=pattern.u[j];var r=true;var chk=0;for(var k=0;k<rule.m.length;++k){var match=rule.m[k];if(match.t==="s"){chk=end}else{chk=prev}if(typeof match.negative==="undefined"){match.negative=false;if(match.s.charAt(0)==="!"){match.negative=true;match.s=match.s.substring(1)}}if(typeof match.v==="undefined")match.v="";if(match.s==="p"){if(!(chk<0&&match.t==="p"||chk>=fixed.length&&match.t==="s"||this.isPunctuation(fixed.charAt(chk)))^match.negative){r=false;break}}else if(match.s==="v"){if(!((chk>=0&&match.t==="p"||chk<fixed.length&&match.t==="s")&&this.isVowel(fixed.charAt(chk)))^match.negative){r=false;break}}else if(match.s==="c"){if(!((chk>=0&&match.t==="p"||chk<fixed.length&&match.t==="s")&&this.isConsonant(fixed.charAt(chk)))^match.negative){r=false;break}}else if(match.s==="e"){var s,e;if(match.t==="s"){s=end;e=end+match.v.length}else{s=start-match.v.length;e=start}if(!this.isExact(match.v,fixed,s,e,match.negative)){r=false;break}}}if(r){output+=rule.r;cur=end-1;matched=true;break}}}if(matched==true)break;output+=pattern.r;cur=end-1;matched=true;break}}if(!matched){output+=fixed.charAt(cur)}}return output},fixString:function(input){var fixed="";for(var i=0;i<input.length;++i){var cChar=input.charAt(i);if(this.isCaseSensitive(cChar)){fixed+=cChar}else{fixed+=cChar.toLowerCase()}}return fixed},isVowel:function(c){return this.data.v.indexOf(c.toLowerCase())>=0},isConsonant:function(c){return this.data.c.indexOf(c.toLowerCase())>=0},isPunctuation:function(c){return!(this.isVowel(c)||this.isConsonant(c))},isExact:function(needle,heystack,start,end,not){return(start>=0&&end<heystack.length&&heystack.substring(start,end)===needle)^not},isCaseSensitive:function(c){return this.data.casesensitive.indexOf(c.toLowerCase())>=0},data:{patterns:[{f:"bhl",r:"ভ্ল"},{f:"psh",r:"পশ"},{f:"bdh",r:"ব্ধ"},{f:"bj",r:"ব্জ"},{f:"bd",r:"ব্দ"},{f:"bb",r:"ব্ব"},{f:"bl",r:"ব্ল"},{f:"bh",r:"ভ"},{f:"vl",r:"ভ্ল"},{f:"b",r:"ব"},{f:"v",r:"ভ"},{f:"cNG",r:"চ্ঞ"},{f:"cch",r:"চ্ছ"},{f:"cc",r:"চ্চ"},{f:"ch",r:"ছ"},{f:"c",r:"চ"},{f:"dhn",r:"ধ্ন"},{f:"dhm",r:"ধ্ম"},{f:"dgh",r:"দ্ঘ"},{f:"ddh",r:"দ্ধ"},{f:"dbh",r:"দ্ভ"},{f:"dv",r:"দ্ভ"},{f:"dm",r:"দ্ম"},{f:"DD",r:"ড্ড"},{f:"Dh",r:"ঢ"},{f:"dh",r:"ধ"},{f:"dg",r:"দ্গ"},{f:"dd",r:"দ্দ"},{f:"D",r:"ড"},{f:"d",r:"দ"},{f:"...",r:"..."},{f:".`",r:"."},{f:"..",r:"।।"},{f:".",r:"।"},{f:"ghn",r:"ঘ্ন"},{f:"Ghn",r:"ঘ্ন"},{f:"gdh",r:"গ্ধ"},{f:"Gdh",r:"গ্ধ"},{f:"gN",r:"গ্ণ"},{f:"GN",r:"গ্ণ"},{f:"gn",r:"গ্ন"},{f:"Gn",r:"গ্ন"},{f:"gm",r:"গ্ম"},{f:"Gm",r:"গ্ম"},{f:"gl",r:"গ্ল"},{f:"Gl",r:"গ্ল"},{f:"gg",r:"জ্ঞ"},{f:"GG",r:"জ্ঞ"},{f:"Gg",r:"জ্ঞ"},{f:"gG",r:"জ্ঞ"},{f:"gh",r:"ঘ"},{f:"Gh",r:"ঘ"},{f:"g",r:"গ"},{f:"G",r:"গ"},{f:"hN",r:"হ্ণ"},{f:"hn",r:"হ্ন"},{f:"hm",r:"হ্ম"},{f:"hl",r:"হ্ল"},{f:"h",r:"হ"},{f:"jjh",r:"জ্ঝ"},{f:"jNG",r:"জ্ঞ"},{f:"jh",r:"ঝ"},{f:"jj",r:"জ্জ"},{f:"j",r:"জ"},{f:"J",r:"জ"},{f:"kkhN",r:"ক্ষ্ণ"},{f:"kShN",r:"ক্ষ্ণ"},{f:"kkhm",r:"ক্ষ্ম"},{f:"kShm",r:"ক্ষ্ম"},{f:"kxN",r:"ক্ষ্ণ"},{f:"kxm",r:"ক্ষ্ম"},{f:"kkh",r:"ক্ষ"},{f:"kSh",r:"ক্ষ"},{f:"ksh",r:"কশ"},{f:"kx",r:"ক্ষ"},{f:"kk",r:"ক্ক"},{f:"kT",r:"ক্ট"},{f:"kt",r:"ক্ত"},{f:"kl",r:"ক্ল"},{f:"ks",r:"ক্স"},{f:"kh",r:"খ"},{f:"k",r:"ক"},{f:"lbh",r:"ল্ভ"},{f:"ldh",r:"ল্ধ"},{f:"lkh",r:"লখ"},{f:"lgh",r:"লঘ"},{f:"lph",r:"লফ"},{f:"lk",r:"ল্ক"},{f:"lg",r:"ল্গ"},{f:"lT",r:"ল্ট"},{f:"lD",r:"ল্ড"},{f:"lp",r:"ল্প"},{f:"lv",r:"ল্ভ"},{f:"lm",r:"ল্ম"},{f:"ll",r:"ল্ল"},{f:"lb",r:"ল্ব"},{f:"l",r:"ল"},{f:"mth",r:"ম্থ"},{f:"mph",r:"ম্ফ"},{f:"mbh",r:"ম্ভ"},{f:"mpl",r:"মপ্ল"},{f:"mn",r:"ম্ন"},{f:"mp",r:"ম্প"},{f:"mv",r:"ম্ভ"},{f:"mm",r:"ম্ম"},{f:"ml",r:"ম্ল"},{f:"mb",r:"ম্ব"},{f:"mf",r:"ম্ফ"},{f:"m",r:"ম"},{f:"0",r:"০"},{f:"1",r:"১"},{f:"2",r:"২"},{f:"3",r:"৩"},{f:"4",r:"৪"},{f:"5",r:"৫"},{f:"6",r:"৬"},{f:"7",r:"৭"},{f:"8",r:"৮"},{f:"9",r:"৯"},{f:"NgkSh",r:"ঙ্ক্ষ"},{f:"Ngkkh",r:"ঙ্ক্ষ"},{f:"NGch",r:"ঞ্ছ"},{f:"Nggh",r:"ঙ্ঘ"},{f:"Ngkh",r:"ঙ্খ"},{f:"NGjh",r:"ঞ্ঝ"},{f:"ngOU",r:"ঙ্গৌ"},{f:"ngOI",r:"ঙ্গৈ"},{f:"Ngkx",r:"ঙ্ক্ষ"},{f:"NGc",r:"ঞ্চ"},{f:"nch",r:"ঞ্ছ"},{f:"njh",r:"ঞ্ঝ"},{f:"ngh",r:"ঙ্ঘ"},{f:"Ngk",r:"ঙ্ক"},{f:"Ngx",r:"ঙ্ষ"},{f:"Ngg",r:"ঙ্গ"},{f:"Ngm",r:"ঙ্ম"},{f:"NGj",r:"ঞ্জ"},{f:"ndh",r:"ন্ধ"},{f:"nTh",r:"ন্ঠ"},{f:"NTh",r:"ণ্ঠ"},{f:"nth",r:"ন্থ"},{f:"nkh",r:"ঙ্খ"},{f:"ngo",r:"ঙ্গ"},{f:"nga",r:"ঙ্গা"},{f:"ngi",r:"ঙ্গি"},{f:"ngI",r:"ঙ্গী"},{f:"ngu",r:"ঙ্গু"},{f:"ngU",r:"ঙ্গূ"},{f:"nge",r:"ঙ্গে"},{f:"ngO",r:"ঙ্গো"},{f:"NDh",r:"ণ্ঢ"},{f:"nsh",r:"নশ"},{f:"Ngr",r:"ঙর"},{f:"NGr",r:"ঞর"},{f:"ngr",r:"ংর"},{f:"nj",r:"ঞ্জ"},{f:"Ng",r:"ঙ"},{f:"NG",r:"ঞ"},{f:"nk",r:"ঙ্ক"},{f:"ng",r:"ং"},{f:"nn",r:"ন্ন"},{f:"NN",r:"ণ্ণ"},{f:"Nn",r:"ণ্ন"},{f:"nm",r:"ন্ম"},{f:"Nm",r:"ণ্ম"},{f:"nd",r:"ন্দ"},{f:"nT",r:"ন্ট"},{f:"NT",r:"ণ্ট"},{f:"nD",r:"ন্ড"},{f:"ND",r:"ণ্ড"},{f:"nt",r:"ন্ত"},{f:"ns",r:"ন্স"},{f:"nc",r:"ঞ্চ"},{f:"n",r:"ন"},{f:"N",r:"ণ"},{f:"OI`",r:"ৈ"},{f:"OU`",r:"ৌ"},{f:"O`",r:"ো"},{f:"OI",r:"ৈ",u:[{m:[{t:"p",s:"!c"}],r:"ঐ"},{m:[{t:"p",s:"p"}],r:"ঐ"}]},{f:"OU",r:"ৌ",u:[{m:[{t:"p",s:"!c"}],r:"ঔ"},{m:[{t:"p",s:"p"}],r:"ঔ"}]},{f:"O",r:"ো",u:[{m:[{t:"p",s:"!c"}],r:"ও"},{m:[{t:"p",s:"p"}],r:"ও"}]},{f:"phl",r:"ফ্ল"},{f:"pT",r:"প্ট"},{f:"pt",r:"প্ত"},{f:"pn",r:"প্ন"},{f:"pp",r:"প্প"},{f:"pl",r:"প্ল"},{f:"ps",r:"প্স"},{f:"ph",r:"ফ"},{f:"fl",r:"ফ্ল"},{f:"f",r:"ফ"},{f:"p",r:"প"},{f:"rri`",r:"ৃ"},{f:"rri",r:"ৃ",u:[{m:[{t:"p",s:"!c"}],r:"ঋ"},{m:[{t:"p",s:"p"}],r:"ঋ"}]},{f:"rrZ",r:"রর‍্য"},{f:"rry",r:"রর‍্য"},{f:"rZ",r:"র‍্য",u:[{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"},{t:"p",s:"!e",v:"y"},{t:"p",s:"!e",v:"w"},{t:"p",s:"!e",v:"x"}],r:"্র্য"}]},{f:"ry",r:"র‍্য",u:[{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"},{t:"p",s:"!e",v:"y"},{t:"p",s:"!e",v:"w"},{t:"p",s:"!e",v:"x"}],r:"্র্য"}]},{f:"rr",r:"রর",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!v"},{t:"s",s:"!e",v:"r"},{t:"s",s:"!p"}],r:"র্"},{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"}],r:"্রর"}]},{f:"Rg",r:"ড়্গ"},{f:"Rh",r:"ঢ়"},{f:"R",r:"ড়"},{f:"r",r:"র",u:[{m:[{t:"p",s:"c"},{t:"p",s:"!e",v:"r"},{t:"p",s:"!e",v:"y"},{t:"p",s:"!e",v:"w"},{t:"p",s:"!e",v:"x"},{t:"p",s:"!e",v:"Z"}],r:"্র"}]},{f:"shch",r:"শ্ছ"},{f:"ShTh",r:"ষ্ঠ"},{f:"Shph",r:"ষ্ফ"},{f:"Sch",r:"শ্ছ"},{f:"skl",r:"স্ক্ল"},{f:"skh",r:"স্খ"},{f:"sth",r:"স্থ"},{f:"sph",r:"স্ফ"},{f:"shc",r:"শ্চ"},{f:"sht",r:"শ্ত"},{f:"shn",r:"শ্ন"},{f:"shm",r:"শ্ম"},{f:"shl",r:"শ্ল"},{f:"Shk",r:"ষ্ক"},{f:"ShT",r:"ষ্ট"},{f:"ShN",r:"ষ্ণ"},{f:"Shp",r:"ষ্প"},{f:"Shf",r:"ষ্ফ"},{f:"Shm",r:"ষ্ম"},{f:"spl",r:"স্প্ল"},{f:"sk",r:"স্ক"},{f:"Sc",r:"শ্চ"},{f:"sT",r:"স্ট"},{f:"st",r:"স্ত"},{f:"sn",r:"স্ন"},{f:"sp",r:"স্প"},{f:"sf",r:"স্ফ"},{f:"sm",r:"স্ম"},{f:"sl",r:"স্ল"},{f:"sh",r:"শ"},{f:"Sc",r:"শ্চ"},{f:"St",r:"শ্ত"},{f:"Sn",r:"শ্ন"},{f:"Sm",r:"শ্ম"},{f:"Sl",r:"শ্ল"},{f:"Sh",r:"ষ"},{f:"s",r:"স"},{f:"S",r:"শ"},{f:"oo`",r:"ু"},{f:"oo",r:"ু",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"উ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"উ"}]},{f:"o`",r:""},{f:"oZ",r:"অ্য"},{f:"o",r:"",u:[{m:[{t:"p",s:"v"},{t:"p",s:"!e",v:"o"}],r:"ও"},{m:[{t:"p",s:"v"},{t:"p",s:"e",v:"o"}],r:"অ"},{m:[{t:"p",s:"p"}],r:"অ"}]},{f:"tth",r:"ত্থ"},{f:"t``",r:"ৎ"},{f:"TT",r:"ট্ট"},{f:"Tm",r:"ট্ম"},{f:"Th",r:"ঠ"},{f:"tn",r:"ত্ন"},{f:"tm",r:"ত্ম"},{f:"th",r:"থ"},{f:"tt",r:"ত্ত"},{f:"T",r:"ট"},{f:"t",r:"ত"},{f:"aZ",r:"অ্যা"},{f:"AZ",r:"অ্যা"},{f:"a`",r:"া"},{f:"A`",r:"া"},{f:"a",r:"া",u:[{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"আ"},{m:[{t:"p",s:"!c"},{t:"p",s:"!e",v:"a"},{t:"s",s:"!e",v:"`"}],r:"য়া"},{m:[{t:"p",s:"e",v:"a"},{t:"s",s:"!e",v:"`"}],r:"আ"}]},{f:"i`",r:"ি"},{f:"i",r:"ি",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ই"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ই"}]},{f:"I`",r:"ী"},{f:"I",r:"ী",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ঈ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ঈ"}]},{f:"u`",r:"ু"},{f:"u",r:"ু",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"উ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"উ"}]},{f:"U`",r:"ূ"},{f:"U",r:"ূ",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ঊ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ঊ"}]},{f:"ee`",r:"ী"},{f:"ee",r:"ী",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"ঈ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"ঈ"}]},{f:"e`",r:"ে"},{f:"e",r:"ে",u:[{m:[{t:"p",s:"!c"},{t:"s",s:"!e",v:"`"}],r:"এ"},{m:[{t:"p",s:"p"},{t:"s",s:"!e",v:"`"}],r:"এ"}]},{f:"z",r:"য"},{f:"Z",r:"্য"},{f:"y",r:"্য",u:[{m:[{t:"p",s:"!c"},{t:"p",s:"!p"}],r:"য়"},{m:[{t:"p",s:"p"}],r:"ইয়"}]},{f:"Y",r:"য়"},{f:"q",r:"ক"},{f:"w",r:"ও",u:[{m:[{t:"p",s:"p"},{t:"s",s:"v"}],r:"ওয়"},{m:[{t:"p",s:"c"}],r:"্ব"}]},{f:"x",r:"ক্স",u:[{m:[{t:"p",s:"p"}],r:"এক্স"}]},{f:":`",r:":"},{f:":",r:"ঃ"},{f:"^`",r:"^"},{f:"^",r:"ঁ"},{f:",,",r:"্‌"},{f:",",r:","},{f:"$",r:"৳"},{f:"`",r:""}],v:"aeiou",c:"bcdfghjklmnpqrstvwxyz",casesensitive:"oiudgjnrstyz"}}; (function($){var methods={init:function(options,callback){var defaults={bangla:true};if(options){$.extend(defaults,options)}return this.each(function(){if("bangla"in this){return}this.bangla=defaults.bangla;this.callback=callback||$.noop;$(this).bind("keydown.avro",methods.keydown);$(this).bind("notify.avro",methods.notify);$(this).bind("switch.avro",methods.switchKb);$(this).bind("focus.avro",methods.focus);$(this).bind("ready.avro",methods.ready);$(this).trigger("ready")})},notify:function(e){this.callback(this.bangla)},switchKb:function(e,state){if(typeof state==="undefined"){state=!this.bangla}this.bangla=state;$(this).trigger("notify")},focus:function(e){$(this).trigger("notify")},ready:function(e){$(this).trigger("notify")},destroy:function(){return this.each(function(){$(this).unbind(".avro")})},keydown:function(e){var keycode=e.which;if(keycode===77&&e.ctrlKey&&!e.altKey&&!e.shiftKey){$(this).trigger("switch",[!this.bangla]);return false}if(!this.bangla){return}if(keycode===32||keycode===13||keycode===9){methods.replace(this)}},replace:function(el){var cur=methods.getCaret(el);var last=methods.findLast(el,cur);var bangla=OmicronLab.Avro.Phonetic.parse(el.value.substring(last,cur));if(document.selection){var range=document.selection.createRange();range.moveStart("character",-1*Math.abs(cur-last));range.text=bangla;range.collapse(true)}else{el.value=el.value.substring(0,last)+bangla+el.value.substring(cur);el.selectionStart=el.selectionEnd=cur-(Math.abs(cur-last)-bangla.length)}},findLast:function(el,cur){var last=cur-1;while(last>0){var c=el.value.charAt(last);if($.trim(c)===""){break}last--}return last},getCaret:function(el){if(el.selectionStart){return el.selectionStart}else if(document.selection){el.focus();var r=document.selection.createRange();if(r===null){return 0}var re=el.createTextRange(),rc=re.duplicate();re.moveToBookmark(r.getBookmark());rc.setEndPoint("EndToStart",re);return rc.text.length}return 0}};$.fn.avro=function(method){if(method in["init","destroy"]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist on jQuery.avro")}}})(jQuery);


/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.5.0 (Mar, 2015)

  Copyright (c) 2012, 2015 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/
!function(e){"use strict";e.fn.serializeJSON=function(n){var r,a,t,i,s,u,l;return u=e.serializeJSON,l=u.optsWithDefaults(n),u.validateOptions(l),a=this.serializeArray(),u.readCheckboxUncheckedValues(a,this,l),r={},e.each(a,function(e,n){t=u.splitInputNameIntoKeysArray(n.name),i=t.pop(),"skip"!==i&&(s=u.parseValue(n.value,i,l),l.parseWithFunction&&"_"===i&&(s=l.parseWithFunction(s,n.name)),u.deepSet(r,t,s,l))}),r},e.serializeJSON={defaultOptions:{parseNumbers:!1,parseBooleans:!1,parseNulls:!1,parseAll:!1,parseWithFunction:null,checkboxUncheckedValue:void 0,useIntKeysAsArrayIndex:!1},optsWithDefaults:function(n){var r,a;return null==n&&(n={}),r=e.serializeJSON,a=r.optWithDefaults("parseAll",n),{parseNumbers:a||r.optWithDefaults("parseNumbers",n),parseBooleans:a||r.optWithDefaults("parseBooleans",n),parseNulls:a||r.optWithDefaults("parseNulls",n),parseWithFunction:r.optWithDefaults("parseWithFunction",n),checkboxUncheckedValue:r.optWithDefaults("checkboxUncheckedValue",n),useIntKeysAsArrayIndex:r.optWithDefaults("useIntKeysAsArrayIndex",n)}},optWithDefaults:function(n,r){return r[n]!==!1&&""!==r[n]&&(r[n]||e.serializeJSON.defaultOptions[n])},validateOptions:function(e){var n,r;r=["parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","checkboxUncheckedValue","useIntKeysAsArrayIndex"];for(n in e)if(-1===r.indexOf(n))throw new Error("serializeJSON ERROR: invalid option '"+n+"'. Please use one of "+r.join(","))},parseValue:function(n,r,a){var t;return t=e.serializeJSON,"string"==r?n:"number"==r||a.parseNumbers&&t.isNumeric(n)?Number(n):"boolean"==r||a.parseBooleans&&("true"===n||"false"===n)?-1===["false","null","undefined","","0"].indexOf(n):"null"==r||a.parseNulls&&"null"==n?-1!==["false","null","undefined","","0"].indexOf(n)?null:n:"array"==r||"object"==r?JSON.parse(n):"auto"==r?t.parseValue(n,null,{parseNumbers:!0,parseBooleans:!0,parseNulls:!0}):n},isObject:function(e){return e===Object(e)},isUndefined:function(e){return void 0===e},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},splitInputNameIntoKeysArray:function(n){var r,a,t,i,s;return s=e.serializeJSON,i=s.extractTypeFromInputName(n),a=i[0],t=i[1],r=a.split("["),r=e.map(r,function(e){return e.replace(/]/g,"")}),""===r[0]&&r.shift(),r.push(t),r},extractTypeFromInputName:function(n){var r,a;if(a=e.serializeJSON,r=n.match(/(.*):([^:]+)$/)){var t=["string","number","boolean","null","array","object","skip","auto"];if(-1!==t.indexOf(r[2]))return[r[1],r[2]];throw new Error("serializeJSON ERROR: Invalid type "+r[2]+" found in input name '"+n+"', please use one of "+t.join(", "))}return[n,"_"]},deepSet:function(n,r,a,t){var i,s,u,l,o,p;if(null==t&&(t={}),p=e.serializeJSON,p.isUndefined(n))throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");if(!r||0===r.length)throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");i=r[0],1===r.length?""===i?n.push(a):n[i]=a:(s=r[1],""===i&&(l=n.length-1,o=n[l],i=p.isObject(o)&&(p.isUndefined(o[s])||r.length>2)?l:l+1),""===s?(p.isUndefined(n[i])||!e.isArray(n[i]))&&(n[i]=[]):t.useIntKeysAsArrayIndex&&p.isValidArrayIndex(s)?(p.isUndefined(n[i])||!e.isArray(n[i]))&&(n[i]=[]):(p.isUndefined(n[i])||!p.isObject(n[i]))&&(n[i]={}),u=r.slice(1),p.deepSet(n[i],u,a,t))},readCheckboxUncheckedValues:function(n,r,a){var t,i,s,u,l;null==a&&(a={}),l=e.serializeJSON,t="input[type=checkbox][name]:not(:checked):not([disabled])",i=r.find(t).add(r.filter(t)),i.each(function(r,t){s=e(t),u=s.attr("data-unchecked-value"),u?n.push({name:t.name,value:u}):l.isUndefined(a.checkboxUncheckedValue)||n.push({name:t.name,value:a.checkboxUncheckedValue})})}}}(window.jQuery||window.Zepto||window.$);

 

/* ****************************************************** *
 *                 --- Keycut v1.3.1 ---                  *
 * jQuery plugin for simple keyboard shortcuts            *
 * https://github.com/duncannz/keycut                     *
 *                                                        *
 * Copyright (c) Duncan de Wet, et al.                    *
 * Licensed under the terms of the MIT License.           *
 * See the LICENSE.md file in the root of the repository. *
 * ****************************************************** */


!function(e){e.fn.keycut=function(){return this.keydown(function(t){var c,n,u=t.keyCode;return 65===u?c="a":66===u?c="b":67===u?c="c":68===u?c="d":69===u?c="e":70===u?c="f":71===u?c="g":72===u?c="h":73===u?c="i":74===u?c="j":75===u?c="k":76===u?c="l":77===u?c="m":78===u?c="n":79===u?c="o":80===u?c="p":81===u?c="q":82===u?c="r":83===u?c="s":84===u?c="t":85===u?c="u":86===u?c="v":87===u?c="w":88===u?c="x":89===u?c="y":90===u?c="z":48===u||96===u?c="0":49===u||97===u?c="1":50===u||98===u?c="2":51===u||99===u?c="3":52===u||100===u?c="4":53===u||101===u?c="5":54===u||102===u?c="6":55===u||103===u?c="7":56===u||104===u?c="8":57===u||105===u?c="9":192===u?c="`":189===u?c="-":187===u?c="=":219===u?c="[":221===u?c="]":220===u?c="\\":186===u?c=";":188===u?c=",":190===u?c=".":191===u?c="/":222===u?c="'":13===u?c="enter":32===u?c="space":8===u?c="backspace":37===u?c="left":38===u?c="up":39===u?c="right":40===u?c="down":112===u?c="F1":113===u?c="F2":114===u?c="F3":115===u?c="F4":116===u?c="F5":117===u?c="F6":118===u?c="F7":119===u?c="F8":120===u?c="F9":121===u?c="F10":122===u?c="F11":123===u?c="F12":27===u&&(c="esc",e("input:focus, textarea:focus").blur()),n=e("[data-key='"+c+"']").first(),0===n.length?!0:t.ctrlKey||t.altKey||t.metaKey?!0:e("input:focus, textarea:focus").length>0&&"F"!==c[0]?!0:(n[0].focus(),n[0].click(),!1)})}}(jQuery);