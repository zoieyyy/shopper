function toggle(displayId, toggleId, showmsg, hidemsg) {
	var ele = document.getElementById(toggleId);
	var text = document.getElementById(displayId);
	if (ele.style.display == "block") {
		ele.style.display = "none";
		text.innerHTML = showmsg;
	}
	else {
		ele.style.display = "block";

		text.innerHTML = hidemsg;
	}
}function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


$(document).ready(function () {
	LoadEditor();
	Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);

	function EndRequestHandler(sender, args) {
		LoadEditor();
	}
});

function LoadEditor() {

	new FroalaEditor('.ContectEditor', {

		key: "YNB3fA2A8A7D6C5D2A-9UJHAEFZMUJOYGYQEa1c1ZJg1RAeF5C4C3E3E2C2A3D6D4F3==",		
		imageUploadURL: '../FroalaHandler.ashx',
		fileUploadURL: '../FroalaHandler.ashx',
		toolbarButtons: [
			['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'],
			['fontFamily', 'fontSize', 'textColor', 'backgroundColor'], ['inlineClass', 'inlineStyle', 'clearFormatting'],
			['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent'],
			['insertImage', 'insertFile', 'insertLink', 'insertTable', 'insertHR'],
			['undo', 'redo', 'fullscreen', 'selectAll', 'html']
		],
		quickInsertButtons: ['image', 'table', 'hr'],
		fontFamily: ['ITC Avant Garde Gothic Std Book'],
		fontFamilyDefaultSelection: "ITC Avant Garde Gothic Std Book",
		colorsBackground: [
			'#d3ffce', '#ffa500', '#f0f8ff', '#b0e0e6', '#0000ff', '#c6e2ff', '#faebd7', '#fa8072', '#7fffd4', '#003366', '#800000', '#eeeeee', '#cccccc', '#800080', '#ffff00', '#ffb6c1', '#00ff00', '#ffc3a0', '#f08080', '#333333',
			'#20b2aa', '#fff68f', '#4ca3dd', '#66cdaa', '#c39797', '#f6546a', '#ff6666', '#468499', '#ff7f50', '#ffdab9', '#ff00ff', '#00ced1', '#c0d6e4', '#660066', '#008000', '#0e2f44', '#101010', '#8b0000', '#088da5', '#afeeee',
			'#f5f5f5', '#990000', '#808080', '#cbbeb5', '#b4eeb4', '#daa520', '#ffff66', '#f5f5dc', '#dddddd', '#b6fcd5', '#8a2be2', '#6897bb', '#00ff7f', '#81d8d0', '#000080', '#ff4040', '#a0db8e', '#794044', '#66cccc', '#3399ff',
			'#ccff00', '#FF0000', '#1429a0', '#ffffff', 'REMOVE'
		],
		colorsStep: 20,
		colorsText: [
			'#d3ffce', '#ffa500', '#f0f8ff', '#b0e0e6', '#0000ff', '#c6e2ff', '#faebd7', '#fa8072', '#7fffd4', '#003366', '#800000', '#eeeeee', '#cccccc', '#800080', '#ffff00', '#ffb6c1', '#00ff00', '#ffc3a0', '#f08080', '#333333',
			'#20b2aa', '#fff68f', '#4ca3dd', '#66cdaa', '#c39797', '#f6546a', '#ff6666', '#468499', '#ff7f50', '#ffdab9', '#ff00ff', '#00ced1', '#c0d6e4', '#660066', '#008000', '#0e2f44', '#101010', '#8b0000', '#088da5', '#afeeee',
			'#f5f5f5', '#990000', '#808080', '#cbbeb5', '#b4eeb4', '#daa520', '#ffff66', '#f5f5dc', '#dddddd', '#b6fcd5', '#8a2be2', '#6897bb', '#00ff7f', '#81d8d0', '#000080', '#ff4040', '#a0db8e', '#794044', '#66cccc', '#3399ff',
			'#ccff00', '#FF0000', '#1429a0', '#ffffff', 'REMOVE'
		]

	});
}
$('.phonenumber').keyup(function () {
	$(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'))
});
$('.bsb').keyup(function () {
	$(this).val($(this).val().replace(/(\d{3})\-?(\d{3})/, '$1-$2'))
});
function RefreshRadGrid(id) {
	var masterTable = $find(id).get_masterTableView();
	masterTable.rebind();
}
function LoadIFramePage(pagepath, pageid, categoryid) {
	var frame = document.getElementById("frame");
	var pageurl = pagepath.concat("?", "DocPageID=", pageid, "&DocCategoryID=", categoryid);
	frame.src = pageurl;
}
function ShowLoading(targetid) {
	if (Page_ClientValidate()) {
		$(targetid).addClass("btn-loading");
	}
}
function ShowButtonWaiting(targetid) {
	//if (Page_ClientValidate()) {
		$(targetid).innerHTML = "<i class='fas fa-circle-notch fa-spin ml-2 text-white'></i>";
	//}
}
function EnableDisable(targetid, chkbox) {
	var t = $(targetid);
	if (t != null) {
		t.prop('disabled', !chkbox.checked);
	}
}
function ToggleDisable(targetid, chkboxid) {
	var t = document.getElementById(targetid);//$(targetid);
	var c = document.getElementById(chkboxid);
	if (t != null) {
		t.disabled=!c.checked;
	}
}
function AutoGrowText(textboxId) {
	debugger;
	//var textarea = document.getElementById(textboxId);
	var textarea = $("#" + textboxId);
	if (textarea == null) textarea = document.getElementById(textboxId);

	if (textarea != null) {
		if (textarea.clientHeight < textarea.scrollHeight) {
			textarea.style.height = textarea.scrollHeight + "px";
			if (textarea.clientHeight < textarea.scrollHeight) {
				textarea.style.height = (textarea.scrollHeight * 2 - textarea.clientHeight) + "px";
			}
		}
	}

} function onlyNumbers(event) {
	var charCode = (event.which) ? event.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}

function HideShortCutIcons() {
	$("#btnEmail").hide();
	$("#btnShortCut").hide();
	$("#back-to-top").hide();
}
function ConfirmSwal(title, msg, type, confirmtext, canceltext) {
	swal({
		title: title,
		text: msg,
		type: type,
		showCancelButton: true,
		confirmButtonText: confirmtext,
		cancelButtonText: canceltext
	},function (inputValue) {
		//Use the "Strict Equality Comparison" to accept the user's input "false" as string)
		debugger;
		if (inputValue === false) {
			swal("Well done!");
			console.log("Do here everything you want");
		} else {
			//swal("Oh no...", "press CANCEL please!");
			//console.log("The user says: ", inputValue);
		}
	});
}

function GetCurrentGeoLoc(callback, id) {
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};
	
	navigator.geolocation.getCurrentPosition(
		function (position) {
			var returnValue = {
				Id:id,
				Latitude: position.coords.latitude,
				Longitude: position.coords.longitude,
				Retry: false
			}
			// data you need to return as a parameter.
			callback(returnValue);
		}, function (error) {
			//alert('GPS location failed!');
			//swal('GPS Failed!', 'Your GPS location could not be captured!', 'error');
			var gpserror = "Your Location Services are not set up correctly. Please go to your device Settings and turn your browser Location Services on. Failure to do so will affect your Star Rating. Click 'OK' to continue without location otherwise click 'Cancel' and turn on your location and try again. "
			//var tryagain = ConfirmSwal('GPS failed', gpserror, 'error','Want to set location','Continue without location');
			//alert(tryagain);
			var tryagain = !confirm(gpserror);
			var returnValue = {
				Id: id,
				Latitude: "",
				Longitude: "",
				Retry:tryagain
			}
			callback(returnValue);
	}, options
	)
}
function CopyToClipboard(containerid) {
	/* Get the text field */
	var copyText = document.getElementById(containerid);
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	/* Copy the text inside the text field */
	document.execCommand("copy");
	alert("Copied the text: " + text);
	return false;
}
function copyTextToClipboard(text) {
	var dummy = document.createElement("textarea");
	// to avoid breaking orgain page when copying more words
	// cant copy when adding below this code
	// dummy.style.display = 'none'
	document.body.appendChild(dummy);
	//Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
	dummy.value = text;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
	//alert("Copied the text: " + text);
	return false;
}