function countDays() {
	const dob = document.getElementById("dob").value;
	const birthday = new Date(dob);
	const today = new Date();
	const diff = Math.floor((birthday.getTime() - today.getTime()) / 1000);
	const days = Math.floor(diff / 86400);
	const resultElement = document.getElementById("result");
	if (days < 0) {
		resultElement.innerHTML = "Your birthday has already passed this year!";
	} else if (days === 0) {
		resultElement.innerHTML = "Happy birthday!";
	} else {
		resultElement.innerHTML = `Your birthday is in ${days} days`;
	}
}
