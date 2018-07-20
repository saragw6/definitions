function printCurlFromEntry(entry) {
	console.log("curl -d \'" + JSON.stringify(entry).replace(/\'/g, "\'\\\'\'") + "\' -H \"Content-Type: application/json\" -X POST http://localhost:5000/potentials");
}

function allCurlsFromEntries(entries) {
	entries.forEach(printCurlFromEntry); //(entry) => printCurlFromEntry(enrty)
}

