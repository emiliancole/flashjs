// FLASH.FUNCTIONS.05.JS

// UTILITIES
function showSource(id) {
    var x = document.getElementById(id).innerHTML;
    alert(x);
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime() ) {
   }
}

// REMOVE AND DELETE ELEMENTS
function removeChild(id, pid) {
    var x = document.getElementById(id);
    var px = document.getElementById(pid);
    px.removeChild(x);
}

function removeElement(id) {
    var x = document.getElementById(id);
   // var px = document.getElementById(pid);
    document.body.removeChild(x);
}

// ADD ELEMENTS
function addA(id, pid, href, text) { //1
 if(arguments.length != 4) {  //2    
        alert("id, pid, href, text"); return;
    } //1
    var x = document.createElement("A");
    var px = document.getElementById(pid);
    x.setAttribute("id", id);
    x.setAttribute("href", href);
    var t = document.createTextNode(text);
    x.appendChild(t);
    px.appendChild(x);
} //0

function addAbbr(id, pid, abbr, title) {
    var x = document.createElement("ABBR");
    var t = document.createTextNode(abbr);
    x.setAttribute("title", title);
    x.appendChild(t);
    var px = document.getElementById(pid);
    px.appendChild(x);
}

function addAddress(id, pid, address) {
    var x = document.createElement("ADDRESS");
    var t = document.createTextNode(address);
    x.appendChild(t);
    x.setAttribute("id", id);
    var px = document.getElementById(pid);
    px.appendChild(x);
}

function addAttr(id, attrname, attrvalue) {
    var x = document.getElementById(id);
    x.setAttribute(attrname, attrvalue); 
}

function addBr(pid) {
    var br = document.createElement("BR");
    var px = document.getElementById(pid);
    px.appendChild(br);
}

function addButton(id, pid, text) {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode(text);
    x.setAttribute("id", id);
    x.appendChild(t);
    var px = document.getElementById(pid);
    px.appendChild(x);
}

function addCanvas(id, pid) {
    var x = document.createElement("CANVAS");
    x.setAttribute("id", id);
    var px = document.getElementById(pid);
    px.appendChild(x);
}

function addCaption(id, pid, captiontext) {
    var x = document.createElement("CAPTION");
    x.setAttribute("id", id);
    var px = document.getElementById(pid);
    var t = document.createTextNode(captiontext);
    x.appendChild(t);
    px.appendChild(x);
}

function addH(hn, id, pid, text) {
    var x = document.getElementById(pid);
    var h = document.createElement(hn);
    x.appendChild(h);
    var t = document.createTextNode(text);
    h.appendChild(t);
}

function addImg(id, pid, srcvalue, altvalue) {
    var x = document.createElement("IMG");
    var px = document.getElementById(pid);
    x.setAttribute("id", id);
    x.setAttribute("src", srcvalue);
    x.setAttribute("alt", altvalue);
    px.appendChild(x);
}

function addLabel(id, pid, text) {
    var x = document.createElement("LABEL");
    var t = document.createTextNode(text);
    x.setAttribute("for", pid);
    x.appendChild(t);
    var y = document.getElementById(pid);
    y.insertBefore(x,document.getElementById(pid) );
}

function addLi(id, pid, tlabel) {
    var x = document.createElement("LI");
    x.setAttribute("id", id);  
    var t = document.createTextNode(tlabel);
    x.appendChild(t);
    document.getElementById(pid).appendChild(x);
}

function addMeter(id, pid, min, max, value) {
    var x = document.createElement("METER");
    var px = document.getElementById(pid);
    x.setAttribute("id", id);
    x.setAttribute("min", min);
    x.setAttribute("max", max);
    x.setAttribute("value", value);
    px.appendChild(x);
}

function addOlReversed(olid) {
    var x = document.getElementById(olid);
    x.setAttribute("reversed", true); 
}

function addOption(id, selid, toption) {
    var x = document.getElementById(selid);
    var opt = document.createElement("OPTION");
    opt.setAttribute("id", id);
    opt.text = toption;
    x.add(opt);
}

function addTable(id, pid) {
    var px = document.getElementById(pid);
    var x = document.createElement("TABLE");
    x.setAttribute("id", id);
    px.appendChild(x);
}

function addTh(id, pid) {
    var px = document.getElementById(pid);
    var x = document.createElement("TH");
    x.setAttribute("id", id);
    px.appendChild(x);
}

function addTr(id, pid) {
    var px = document.getElementById(pid);
    var x = document.createElement("TR");
    x.setAttribute("id", id);
    px.appendChild(x);
}

function createTable(id) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", id);
    document.body.appendChild(x);
}

function addTd(id, pid, text) {
    var px = document.getElementById(pid);
    var x = document.createElement("TD");
    var t = document.createTextNode(text);
    x.setAttribute("id", id);
    x.appendChild(t);
    px.appendChild(x);
}

function addText(pid, text) {
    var x = document.getElementById(pid);
    var t = document.createTextNode(text);
    x.appendChild(t);
}

function addTextInput(id, pid, value) {
    var x = document.createElement("INPUT");
    var px = document.getElementById(pid);
    x.setAttribute("type", "text");
    x.setAttribute("id", id);
    x.setAttribute("value", value);
    px.appendChild(x);
}

// CSS STYLE

/* function idAlignContent(id, a) { //1
if(a!="stretch" || a!="center" || a!="flex-start" || a!="flex-end" || a!="space-between" +
|| a!="space-around" || a!="initial" || a!="inherit") {  //2    
        alert("stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit"); 
        return;
    } //1
    var x = document.getElementById(id);
    x.style.alignContent = a;
} //0
*/

function idTextAlign(id, a) { //1
//if(a!==="left" || a!==="right" || a!==="center") {  //2    
//       alert("left|right|center"); return;
//   } //1
    var x = document.getElementById(id);
    x.style.textAlign = a;
} //0


function idAlignItems(id, align) {
    var x = document.getElementById(id);
    x.style.alignItems = align;
}

function idAlignSelf(id, align) {
    var x = document.getElementById(id);
    x.style.alignSelf = align;
}

function idAnimation(id, animation) {
    var x = document.getElementById(id);
    x.style.animation = animation;
}

function idAnimationDelay(id, delay) {
    var x = document.getElementById(id);
    x.style.animationDelay = delay;
}

function idAnimationDirection(id, direction) {
    var x = document.getElementById(id);
    x.style.animationDirection = direction;
}

function idBackground(id, properties) {
    var x = document.getElementById(id);
    x.style.background = properties;
}

function idBackgroundAttachment(id, attachment) {
    var x = document.getElementById(id);
    x.style.backgroundAttachment = attachment;
}

function idBackgroundColor(id, color) {
    var x = document.getElementById(id);
    x.style.backgroundColor = color;
}

function idBackgroundPosition(id, position) {
    var x = document.getElementById(id);
    x.style.backgroundPosition = position;
}

function idBorder(id, value) { // width, style, color, initial, inherit
    var x = document.getElementById(id);
    x.style.border = value;
}


function idBorderColor(id, style) {
    var x = document.getElementById(id);
    x.style.borderColor = style;
}

function idBorderRadius(id, nnpx) {
    var x = document.getElementById(id);
    x.style.borderRadius = nnpx;
}

function idBorderSpacing(id, nnpx) {
    var x = document.getElementById(id);
    x.style.borderSpacing = nnpx;
}

function idBorderStyle(id, style) { //style="solid|dotted|double|dashed|..
var styles = ["solid", "dotted", "double", "dashed", "groove", "ridge", "inset", "outset", "initial", "inherit"]; 
var a = styles.indexOf(style);
if (a > -1) {
    var x = document.getElementById(id);
    x.style.borderStyle = style;
	} else
alert("BORDER ERROR!");
} 

function idBorderWidth(id, nnpx) {
    var x = document.getElementById(id);
    x.style.borderWidth = nnpx;
}

function idBottom(id, nnnpx) {
    var x = document.getElementById(id);
    x.style.bottom = nnnpx;
}

function idBoxShadow(id, string) { // string="h-shadowpx, v-shadowpx, [blurpx, spreadpx, color]"
    var x = document.getElementById(id);
    x.style.boxShadow = string;
}

function idBoxSizing(id, sizing) { // sizing="content-box|border-box|initial|inherit"
var sizes = ["content-box", "border-box", "initial", "inherit"]; 
var a = sizes.indexOf(sizing);
if (a > -1) {
    var x = document.getElementById(id);
    x.style.boxSizing = sizing;
	} else
alert("SIZING ERROR!");
} 

function idCaptionSide(id, side) { // side="top|bottom|initial|inherit"
var sides = ["top", "bottom", "initial", "inherit"]; 
var a = sides.indexOf(side);
if (a > -1) {
    var x = document.getElementById(id);
    x.style.captionSide = side;
	} else
alert("CAPTION SIDE ERROR!");
} 

function idColor(id, color) {
    var x = document.getElementById(id);
    x.style.color = color;
}

function idFont(id, fontstring) { // fontstring="font-style font-variant font-weight 
                                 // font-size/line-height|caption|icon|menu|
                                 // message-box|small-caption|status-bar|initial|inherit;"
    var x = document.getElementById(id);
    x.style.font = fontstring;
}

function idFontStyle(id, style) { // style="normal|italic|oblique|initial|inherit"
var styles = ["normal", "italic", "oblique", "initial", "inherit"]; 
var a = styles.indexOf(style);
if (a > -1) {
    var x = document.getElementById(id);
    x.style.fontStyle = style;
	} else
alert("FONT STYLE ERROR!");
} 

function idFontVariant(id, variant) { // variant="normal|small-caps|initial|inherit"
var variants = ["normal", "small-caps", "initial", "inherit"]; 
var a = variants.indexOf(variant);
if (a > -1) {
    var x = document.getElementById(id);
    x.style.fontVariant = variant;
	} else
alert("FONT VARIANT ERROR!");
} 

function idPadding(id, nnpx) {
    var x = document.getElementById(id);
    x.style.padding = nnpx;
}

function idPosition(id, pos) {
var positions = ["absolute", "relative", "static", "fixed", "initial", "inherit"]; 
var a = positions.indexOf(pos);
if (a > -1) {
    var x = document.getElementById(id);
    x.style.position = pos;
    } 
else
alert("POSITION ERROR!");
} 

function idLeft(id, nnnpx) {
    var x = document.getElementById(id);
    x.style.left = nnnpx;
}

function idRight(id, nnnpx) {
    var x = document.getElementById(id);
    x.style.right = nnnpx;
}

function idStyle(id, stylestring) {
    var x = document.getElementById(id);
    x.setAttribute("style", stylestring);
}

function idTop(id, nnnpx) {
    var x = document.getElementById(id);
    x.style.top = nnnpx;
}

function idWidth(id, nnnpx) {
    var x = document.getElementById(id);
    x.style.width = nnnpx;
}

function idHeight(id, nnnpx) {
    var x = document.getElementById(id);
    x.style.height = nnnpx;
}

function idZindex(id, nn) {
    var x = document.getElementById(id);
    x.style.zIndex = nn;
}

function idValue(id, value) {
    var x = document.getElementById(id);
    x.value = value;
}

// CREATE ELEMENTS FOR THE BODY TAG.

function createA(id, href, text) {
    var x = document.createElement("A");
    x.setAttribute("id", id);
    x.setAttribute("href", href);
    var t = document.createTextNode(text);
    x.appendChild(t);
    document.body.appendChild(x);
}

function createAbbr(id, abbr, title) {
    var x = document.createElement("ABBR");
    var t = document.createTextNode(abbr);
    x.setAttribute("title", title);
    x.appendChild(t);
    document.body.appendChild(x);
}

function createAddress(id, address) {
    var x = document.createElement("ADDRESS");
    var t = document.createTextNode(address);
    x.appendChild(t);
    x.setAttribute("id", id);
    document.body.appendChild(x);
}

function createBr() {
    var br = document.createElement("BR");
    document.body.appendChild(br);
}

function createH(hn, id, text) {
    var h = document.createElement(hn);
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}

function createMarkedText() {
    var x = document.createElement("MARK");
    var t = document.createTextNode("Some marked text");
    x.appendChild(t);
    document.body.appendChild(x);
}

function createMeta(name, content) {
    var x = document.createElement("META");
    x.setAttribute("name", name);
    x.setAttribute("content", content);
    document.head.appendChild(x);

    document.getElementById("demo").innerHTML = "You have now created a META element in the HEAD section of your document.";
}

function createMeter(id, min, max, value) {
    var x = document.createElement("METER");
    x.setAttribute("id", id);
    x.setAttribute("min", min);
    x.setAttribute("max", max);
    x.setAttribute("value", value);
    document.body.appendChild(x);
}

function createSelect(id) {
    var x = document.createElement("SELECT");
    x.setAttribute("id", id);
    document.body.appendChild(x);
}

function createTextInput(id, value) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("id", id);
    x.setAttribute("value", value);
    document.body.appendChild(x);
}

function createTextarea(id, value) {
    var x = document.createElement("TEXTAREA");
    //x.setAttribute("type", "text");
    x.setAttribute("id", id);
    x.setAttribute("value", value);
    document.body.appendChild(x);
}

function createPassword(id, value) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "password");
    x.setAttribute("id", id);
   // x.setAttribute("value", value);
    document.body.appendChild(x);
}

function createButton(id, btext) {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode(btext);
    x.appendChild(t);
    x.setAttribute("id", id);
    document.body.appendChild(x);
}

function createCheck(id, value) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute("id", id);
    x.setAttribute("value", value);
    document.body.appendChild(x);
}


function createDiv(id, divtext) {
    var x = document.createElement("DIV");
    var t = document.createTextNode(divtext);
    x.setAttribute("id", id);
    x.appendChild(t);
    document.body.appendChild(x);
}

function createForm(id, action, method) {
    var x = document.createElement("FORM");
    x.setAttribute("id", id);
    x.setAttribute("action", action);
    x.setAttribute("method", method);
    document.body.appendChild(x);
}

function createH1(id, h1text) {
    var x = document.createElement("H1");
    x.setAttribute("id", id);
    var t = document.createTextNode(h1text);
    x.appendChild(t);
    document.body.appendChild(x);
}

function createImg(id, srcvalue, altvalue) {
    var x = document.createElement("IMG");
    x.setAttribute("id", id);
    x.setAttribute("src", srcvalue);
    x.setAttribute("alt", altvalue);
    document.body.appendChild(x);
}

function createLink(id, cssfile) {
    var x = document.createElement("LINK");
    x.setAttribute("id", id);
    x.setAttribute("rel", "stylesheet");
    x.setAttribute("type", "text/css");
    x.setAttribute("href", cssfile);
    document.head.appendChild(x);
}

function createOl(id) {
    var x = document.createElement("OL");
    x.setAttribute("id", id);
    document.body.appendChild(x);
}

function createP(id, ptext) {
    var x = document.createElement("P");
    var t = document.createTextNode(ptext);
    x.appendChild(t);
    x.setAttribute("id", id);
    document.body.appendChild(x);
}

function createRadio(id, value) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    x.setAttribute("id", id);
    x.setAttribute("value", value);
    document.body.appendChild(x);
}

function createScript(id, scriptfile) {
    var x = document.createElement("SCRIPT");
    x.setAttribute("id", id);
    x.setAttribute("type", "text/javascript");
    x.setAttribute("src", scriptfile);
    document.head.appendChild(x);
}

function createUl(id) {
    var x = document.createElement("UL");
    x.setAttribute("id", id);
    document.body.appendChild(x);
}

function idAutocomplete(id, value) {
    var x = document.getElementById(id);
    x.autocomplete = value;
}

function idName(id, name) {
    var x = document.getElementById(id);
    x.name = name;
}
