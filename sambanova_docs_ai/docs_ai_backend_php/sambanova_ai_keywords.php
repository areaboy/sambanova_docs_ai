<?php
error_reporting(0);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if (isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST") {
include('settings.php');
$content = strip_tags($_POST['content']);
$sambanova_api_key = strip_tags($_POST['sambanova_api_key']);
$sambanova_api_model = strip_tags($_POST['sambanova_model']);


if ($content == ''){
echo "<div class='bad_css' id='alerts_keywords'>AI Content to be Analyzed cannot be empty</div>";
exit();
}


$text_prompt ="List all the keywords in the text only. Each seperated by comma Or in Comma delimeted? only. $content";


$url = $sambanova_api_url;
$payload ='{
	"stream": true,
	"model": "'.$sambanova_api_model.'",
	"messages": [
		{
			"role": "system",
			"content": "You are a helpful assistant"
		},
		{
			"role": "user",
			"content": "'.$text_prompt.'"
		}
	]
	}' ;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Authorization: Bearer $sambanova_api_key" , 'Content-Type:application/json'));
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
$output = curl_exec($ch); 


if($output == ''){
echo "<div class='alerts_keywords bad_css' >API Call to Sambanova AI Failed. Ensure there is an Internet  Connections...</div><br>";
exit();
}

$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// catch error message before closing
if (curl_errno($ch)) {
   //echo $error_msg = curl_error($ch);
}

curl_close($ch);

if($http_status == 400){
echo "<div class='alerts_keywords bad_css' >Server Unable to understand Your Request. Ensure The Sambanova Model is Correct</div><br>";
exit();
}

if($http_status == 401){
echo "<div class='alerts_lang bad_css'>Invalid Authentication Keys</div><br>";
exit();
}


if($http_status == 408){
echo "<div class='alerts_keywords bad_css'>Request Timeout</div><br>";
exit();
}


if($http_status == 429){
echo "<div class='alerts_keywords bad_css'>Too Many Request. Insufficient Quota</div><br>";
exit();
}

if($http_status == 200){


// Split the output into individual JSON strings
$json_strings = explode('data: ', trim($output, ' data: [DONE]'));

// Initialize an empty string to store the content
$allContent = "";

// Loop through each string, decode, and access the content
foreach ($json_strings as $json_string) {
  $json = json_decode($json_string, true);
  if (isset($json['choices'][0]['delta']['content'])) {
    $allContent .= $json['choices'][0]['delta']['content'] . "\n";
  }
}



$extract_keywords = "<div class='css_aix'>".str_replace(',', "</div><div class='css_aix'>", $allContent)."</div>";
echo "
<div class='res_clear'>
<div class='alert alert-info'> 
<button class='btn btn-danger btn-xs pull-right res_clear_btn' title='Clear Result'>Clear Result</button><br>
<div class='sambo_css'>Content Description Keywords Analysis Successfully by Sambanova AI....</div>
<b>Result: </b> $extract_keywords<br>
</div></div>";


}







}

?>



