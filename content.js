var elements = document.getElementsByTagName('*');

var replaceText = function(node, regex, erection) {
  var text = node.nodeValue;
  var replacedText = text.replace(regex, erection);
  if (replacedText !== text) {
    element.replaceChild(document.createTextNode(replacedText), node);
  }
}

var erectrify = function(node) {
  // nodeType of 3 is "Node.TEXT_NODE"
  if (node.nodeType === 3) {
    replaceText(node, /\belection/g, "erection");
    replaceText(node, /\bElection/g, "Erection");
    replaceText(node, /\bELECTION/g, "ERECTION");
  }
}

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  for (var j = 0; j < element.childNodes.length; j++) {
    erectrify(element.childNodes[j]);
  }
}
