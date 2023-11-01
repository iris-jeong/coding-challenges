/* 
  -- INSTRUCTIONS --
  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

  For example:
  * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
  * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
  * url = "https://www.cnet.com"                -> domain
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function domainName(url) {
	let domainStartIndex;
	let domainEndIndex;

	// Find the index of the start of the domain.
	if (url.indexOf("https://www.") !== -1) {
		domainStartIndex = url.indexOf("https://www.") + 12;
	} else if (url.indexOf("http://www.") !== -1) {
		domainStartIndex = url.indexOf("http://www.") + 11;
	} else if (url.indexOf("//") !== -1 && url.indexOf("www.") === -1) {
		domainStartIndex = url.indexOf("//") + 2;
	} else if (url.indexOf("//") === -1 && url.indexOf("www.") !== -1) {
		domainStartIndex = url.indexOf("www.") + 4;
	} else {
		domainStartIndex = 0;
	}

	//Find the index of the end of the domain.
	domainEndIndex = url.indexOf(".", domainStartIndex);

	return url.slice(domainStartIndex, domainEndIndex);
}
