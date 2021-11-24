function validate() {  
	var result = "";	 	
	result += validateEmail();
	result += validatePassword();

	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}


function validatePassword() {
	var password = valueOf("password");
	var retype = valueOf("retype_password");
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
	
	if (password != retype) 
		return "Passwords do not match.\n";	
	return "";
}

function validateEmail() {
	var email = valueOf("email");
	var retype = valueOf("retype_email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	
	if (email != retype)
		return "Email addresses do not match.\n";
	return "";	
}



function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}