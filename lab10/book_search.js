window.onload = function() {
    $("b_xml").onclick=function(){
		new Ajax.Request("books.php", {
			method: "get",
			onSuccess: showBooks_XML,
			onFailure: ajaxFailed,
			onException: ajaxFailed,
			parameters: {category:getCheckedRadio($$("input"))}
		});
	}

    $("b_json").onclick=function(){
    	new Ajax.Request("books_json.php", {
			method: "get",
			onSuccess: showBooks_JSON,
			onFailure: ajaxFailed,
			onException: ajaxFailed,
			parameters: {category:getCheckedRadio($$("input"))}
		});
    }
};

function getCheckedRadio(radio_button){
	for (var i = 0; i < radio_button.length; i++) {
		if(radio_button[i].checked){
			return radio_button[i].value;
		}
	}
	return undefined;
}

function showBooks_XML(ajax) {
	//alert(ajax.responseText);
	var ul = $("books");
	var ulchild = ul.childElements();
	for(var i=0; i<ulchild.length; i++){
		ulchild[i].remove();
	}

	var book = ajax.responseXML.getElementsByTagName("book");
	for(var i=0; i<book.length; i++){
		var title = book[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		var author = book[i].getElementsByTagName("author")[0].firstChild.nodeValue;
		var year = book[i].getElementsByTagName("year")[0].firstChild.nodeValue;

		var li = document.createElement("li");
		li.innerHTML = title+", by "+ author + " (" + year + ")";
		ul.appendChild(li);
	}
}

function showBooks_JSON(ajax) {
	alert(ajax.responseText);
	var ul = $("books");
	var ulchild = ul.childElements();
	for(var i=0; i<ulchild.length; i++){
		ulchild[i].remove();
	}

	var book = JSON.parse(ajax.responseText).books;
	for(var i=0; i < book.length; i++){
		var li = document.createElement("li");
		li.innerHTML = book[i].title + ", by" + book[i].author + " (" + book[i].year + ")";
		ul.appendChild(li);
	}
}

function ajaxFailed(ajax, exception) {
	var errorMessage = "Error making Ajax request:\n\n";
	if (exception) {
		errorMessage += "Exception: " + exception.message;
	} else {
		errorMessage += "Server status:\n" + ajax.status + " " + ajax.statusText + 
		                "\n\nServer response text:\n" + ajax.responseText;
	}
	alert(errorMessage);
}
