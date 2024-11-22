const textarea = document.getElementById('content1');
const inputField = document.getElementById('content2');

// Add event listeners to both elements
textarea.addEventListener('input', () => {
  inputField.value = textarea.value;
});

inputField.addEventListener('input', () => {
  textarea.value = inputField.value;
});


// Clear Sambanova API Key
$(document).ready(function(){
$("#clear_api_key_btn").click(function(){
$('#sambanova_api_key').val('');
alert('API Key Cleared Successfully...');
});
});



// Clear TextBox
$(document).ready(function(){
$("#clear_textbox_btn").click(function(){
$('#content1').val('');
$('#content2').val('');
$('.d_upload').val('');

alert('TextBox Cleared Successfully...');
});
});

 



// Clear Sambanova AI Responses
$(document).ready(function(){
//$(".res_clear_btn").click(function(){
$(document).on( 'click', '.res_clear_btn', function(){ 
$('.res_clear').empty();
alert('Sambanova AI Responses Cleared Successfully...');
});
});



// check if PHP Backend URL is set
$(document).ready(function(){
if(backend_url ==''){
alert('Edit (script/app_backend_url.js) file to update your PHP Application Backend URL');
$("#result_check").html("<br><div class='bad_css'> Error Warning:  Edit <b>script/app_backend_url.js</b> file to update your PHP Application Backend URL</div><br>");
return false;
}
});



// Sambanova AI Summarization starts
$(document).ready(function(){


$(".Summarize").click(function(){
var post_id = this.id; 
var id = post_id;
var content = $('.content').val();
var sambanova_api_key= $('#sambanova_api_key').val();
var sambanova_model= $('#sambanova_model').val();

if(sambanova_api_key == ''){
alert('Sambanova API Key cannot be empty');
return false;
}
if(sambanova_model == ''){
alert('Please Select Sambanova AI Model');
return false;
}

$("#result_ai_"+id).empty();
if(content == ''){
alert('Content cannot be empty');
return false;
}



//remove all double quote
var content_remove_double_quotes = content.replace(/"/g, '');

// remove all single quotes
var content_remove_single_quotes = content_remove_double_quotes.replace(/'/g, "");

var content_validate = content_remove_single_quotes;


        // AJAX Request


$("#loader_ai_"+id).fadeIn(400).html('<center><span class="loader_css"><img src="img/loader.gif">&nbsp; Summarizing  Data.</span></center>');

        $.ajax({
            url: backend_url+'/sambanova_ai_summarization.php',
            type: 'post',
            data: {content:content_validate,sambanova_api_key:sambanova_api_key, sambanova_model:sambanova_model},
            dataType: 'html',
            success: function(data){
$("#loader_ai_"+id).hide();
$("#result_ai_"+id).html(marked.parse(data));
$(".alerts_summarize").delay(5000).fadeOut('slow');
            }
        });
    });
});

// Sambanova AI Summarization ends






// Sambanova AI Keywords starts
$(document).ready(function(){

$(".Keywords").click(function(){
var post_id = this.id; 
var id = post_id;
var content = $('.content').val();
var sambanova_api_key= $('#sambanova_api_key').val();
var sambanova_model= $('#sambanova_model').val();

if(sambanova_api_key == ''){
alert('Sambanova API Key cannot be empty');
return false;
}
if(sambanova_model == ''){
alert('Please Select Sambanova AI Model');
return false;
}

$("#result_ai_"+id).empty();
if(content == ''){
alert('Content cannot be empty');
return false;
}



//remove all double quote
var content_remove_double_quotes = content.replace(/"/g, '');

// remove all single quotes
var content_remove_single_quotes = content_remove_double_quotes.replace(/'/g, "");

var content_validate = content_remove_single_quotes;


        // AJAX Request


$("#loader_ai_"+id).fadeIn(400).html('<center><span class="loader_css"><img src="img/loader.gif">&nbsp;  Data Keywords Analysis.</span></center>');

        $.ajax({
            url: backend_url+'/sambanova_ai_keywords.php',
            type: 'post',
            data: {content:content_validate,sambanova_api_key:sambanova_api_key, sambanova_model:sambanova_model},
            dataType: 'html',
            success: function(data){
$("#loader_ai_"+id).hide();
$("#result_ai_"+id).html(marked.parse(data));
$(".alerts_keywords").delay(5000).fadeOut('slow');
            }
        });
    });
});

// Sambanova AI Keywords ends








// Sambanova AI Sentiments starts
$(document).ready(function(){
$(".Sentiments").click(function(){ 
var post_id = this.id; 
var id = post_id;
var content =  $('.content').val();
var sambanova_api_key= $('#sambanova_api_key').val();
var sambanova_model= $('#sambanova_model').val();

if(sambanova_api_key == ''){
alert('Sambanova API Key cannot be empty');
return false;
}
if(sambanova_model == ''){
alert('Please Select Sambanova AI Model');
return false;
}

$("#result_ai_"+id).empty();
if(content == ''){
alert('Content cannot be empty');
return false;
}



//remove all double quote
var content_remove_double_quotes = content.replace(/"/g, '');

// remove all single quotes
var content_remove_single_quotes = content_remove_double_quotes.replace(/'/g, "");

var content_validate = content_remove_single_quotes;



        // AJAX Request


$("#loader_ai_"+id).fadeIn(400).html('<center><span class="loader_css"><img src="img/loader.gif">&nbsp;  Data Sentiments Analysis.</span></center>');

        $.ajax({
            url: backend_url+'/sambanova_ai_sentiments.php',
            type: 'post',
            data: {content:content_validate,sambanova_api_key:sambanova_api_key, sambanova_model:sambanova_model},
            dataType: 'html',
            success: function(data){
$("#loader_ai_"+id).hide();
$("#result_ai_"+id).html(marked.parse(data));
$(".alerts_sentiments").delay(5000).fadeOut('slow');
            }
        });
    });
});

// Sambanova AI Sentiments ends





// Sambanova AI Translate starts
$(document).ready(function(){
$(".Translate").click(function(){
var post_id = this.id; 
var id = post_id;
var content =  $('.content').val();
var sambanova_api_key= $('#sambanova_api_key').val();
var sambanova_model= $('#sambanova_model').val();

if(sambanova_api_key == ''){
alert('Sambanova API Key cannot be empty');
return false;
}
if(sambanova_model == ''){
alert('Please Select Sambanova AI Model');
return false;
}


var lang = $("#lang_"+id).val();

if(lang ==''){
alert("Please Select Language to be Translated Content Description to");
return false;
}

$("#result_ai_"+id).empty();
if(content == ''){
alert('Content cannot be empty');
return false;
}


//remove all double quote
var content_remove_double_quotes = content.replace(/"/g, '');

// remove all single quotes
var content_remove_single_quotes = content_remove_double_quotes.replace(/'/g, "");

var content_validate = content_remove_single_quotes;


        // AJAX Request


$("#loader_ai_"+id).fadeIn(400).html('<center><span class="loader_css"><img src="img/loader.gif">&nbsp;  Data is being Translated.</span></center>');

        $.ajax({
            url: backend_url+'/sambanova_ai_translate.php',
            type: 'post',
            data: {content:content_validate, lang:lang,sambanova_api_key:sambanova_api_key, sambanova_model:sambanova_model},
            dataType: 'html',
            success: function(data){
$("#loader_ai_"+id).hide();
$("#result_ai_"+id).html(marked.parse(data));
$(".alerts_translate").delay(5000).fadeOut('slow');
            }
        });
    });
});

// Sambanova AI Translate ends







// Extract Text from PDF using pdf.js Starts here 

$(document).ready(function(){

$('#div_extract').hide();

   // const fileInput_docs = document.querySelector('input');
 const fileInput_d = document.querySelector('.d_upload');


    // Listen for the change event so we can capture the file
    fileInput_d.addEventListener('change', (e) => {



var fname=  $('.file_content_docs').val();
var ext = fname.split('.').pop();
//alert(ext);


// add double quotes around the variables
var fileExtention_quotes = ext;
fileExtention_quotes = "'"+fileExtention_quotes+"'";

 var allowedtypes = ["PDF", "pdf"];
    if(allowedtypes.indexOf(ext) !== -1){
//alert('Good this is a valid Image');
}else{
alert("Only PDF Files are allowed");
return false;
    }


   const fxa = e.target.files;
  const file_size_x = fxa[0].size;

/*
// 1 kb is 1000 bytes

if (file_size_x > 10 * 1000) { // allow file of less than 10 kb
alert('Documents Larger than 10KB not allowed.  Hence PDF Text Content Extraction Failed...');

return false;
}
*/



$('#loader_extract').fadeIn(400).html('<br><div style="color:black;background:#ddd;padding:10px;"><img src="img/loader.gif"> Please Wait! .Extracting Text from PDF in Progress...</div>');


  //const pdfFile = $('#pdfFileInput')[0].files[0];

 const pdfFile = e.target.files[0];

                if (!pdfFile) {
                    alert('Please select a PDF file first.');
                    return;
                }






                const fileReader = new FileReader();
                fileReader.onload = function () {
                    const arrayBuffer = this.result;
                    const pdfData = new Uint8Array(arrayBuffer);

                    pdfjsLib.getDocument({ data: pdfData }).promise.then(function (pdf) {
                        return pdf.getPage(1);
                    }).then(function (page) {
                        return page.getTextContent();
                    }).then(function (textContent) {
                        const textItems = textContent.items.map(function (item) {
                            return item.str;
                        });
                        const extractedText = textItems.join(' ');

       //$('.extracted_text').val(extractedText).value;

//remove all double quotes
var extractedText_remove_double_quotes = extractedText.replace(/"/g, '');
$('.extracted_text').val(extractedText_remove_double_quotes).value;

if(extractedText !=''){
$('#loader_extract').hide();
$('#div_extract').show();
$('#result_extract').html("<div style='color:white;background:green;padding:8px;border:none;'>PDF Documents Text Extraction Successful</div>");
setTimeout(function(){ $('#result_extract').html(''); }, 5000);
}

                        $('#textResult').text(extractedText);
                        $('#extractedText').show();
                    }).catch(function (error) {
                        console.error('Error extracting text from PDF:', error);
                    });
                };

                fileReader.readAsArrayBuffer(pdfFile);
    });
});

// Extract Text from PDF using pdf.js ends here 

