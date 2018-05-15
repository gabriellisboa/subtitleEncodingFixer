fs = require('fs')

var charsList = {
    "&Aacute;": "Á",
    "&aacute;": "á",
    "&Acirc;": "Â",
    "&acirc;": "â",
    "&Agrave;": "À",
    "&agrave;": "à",
    "&Aring;": "Å",
    "&aring;": "å",
    "&Atilde;": "Ã",
    "&atilde;": "ã",
    "&Auml;": "Ä",
    "&auml;": "ä",
    "&AElig;": "Æ",
    "&aelig;": "æ",
    "&Eacute;": "É",
    "&eacute;": "é",
    "&Ecirc;": "Ê",
    "&ecirc;": "ê",
    "&Egrave;": "È",
    "&egrave;": "è",
    "&Euml;": "Ë",
    "&euml;": "ë",
    "&ETH;": "Ð",
    "&eth;": "ð",
    "&Iacute;": "Í",
    "&iacute;": "í",
    "&Icirc;": "Î",
    "&icirc;": "î",
    "&Igrave;": "Ì",
    "&igrave;": "ì",
    "&Iuml;": "Ï",
    "&iuml;": "ï",
    "&Oacute;": "Ó",
    "&oacute;": "ó",
    "&Ocirc;": "Ô",
    "&ocirc;": "ô",
    "&Ograve;": "Ò",
    "&ograve;": "ò",
    "&Oslash;": "Ø",
    "&oslash;": "ø",
    "&Otilde;": "Õ",
    "&otilde;": "õ",
    "&Ouml;": "Ö",
    "&ouml;": "ö",
    "&Uacute;": "Ú",
    "&uacute;": "ú",
    "&Ucirc;": "Û",
    "&ucirc;": "û",
    "&Ugrave;": "Ù",
    "&ugrave;": "ù",
    "&Uuml;": "Ü",
    "&uuml;": "ü",
    "&Ccedil;": "Ç",
    "&ccedil;": "ç",
    "&Ntilde;": "Ñ",
    "&ntilde;": "ñ",
    "lt;": "<",
    "gt;": ">",
    "amp;": "&",
    "quot;": "\"",
    "&reg;": "®",
    "&copy;": "©",
    "&Yacute;": "Ý",
    "&yacute;": "ý",
    "&THORN;": "Þ",
    "&thorn;": "þ",
    "&szlig;": "ß",
  };

var fileName = process.argv[2];
console.log("Reading file '" + fileName + "'...");
fs.readFile(fileName, 'utf8', function (err,subtitle) {
  if (err) {
    return console.error("Error reading file: " + err);
  }

  for (var property in charsList) {
    if (charsList.hasOwnProperty(property)) {
        console.log("Replacing: " + property + " = " + charsList[property]);
        subtitle = subtitle.replace(new RegExp(property, "g"), charsList[property]);
    }
  }

  console.log("Writing file '" + fileName.replace(/.srt/g, '') + "-fixed.srt'");
  fs.writeFile(fileName.replace(/.srt/g, '') + "-fixed.srt", subtitle, function(err) {
    if(err) {
        return console.error("Error swriting file: " + err);
    }
    console.log("SUCCESS");
  }); 
});
// TODO: colocar outros idiomas e coisas: 
// http://www.thesauruslex.com/typo/eng/enghtml.htm
