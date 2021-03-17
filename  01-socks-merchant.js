// Complete the sockMerchant function below.
function sockMerchant(n, arr) {
	//sanity check - rare cases
	if (!arr || arr.length !== n) return;
	//sort the array with built-in sort method
	let sorted = arr.sort((a, b) => a - b);
	//set a var that keeps track of the count of matching socks
	let pairs = 0;

	// use for loop to loop through each element and compare if there is match
	for (let i = 0; i < n - 1; i++) {
		if (sorted[i] === sorted[i + 1]) {
			//if matching, increase the count
			pairs++;
			//scape the element we have already compared
			i += 1;
		}
	}

	// return number of pairs
	return pairs;
}

let n = 9;
const arr = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ];

console.log(sockMerchant(n, arr));

// To optimize the performace,O(n), we can convert array to object
