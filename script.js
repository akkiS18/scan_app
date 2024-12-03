document.addEventListener("DOMContentLoaded", () => {
	let scan;

	document.getElementById("startButton").addEventListener("click", () => {
		document.getElementById("main").style.display = "none";
		document.getElementById("reader").style.display = "block";

		scan = new Html5Qrcode("reader");
		scan.start(
			{ facingMode: "environment" },
			{
				fps: 10,
				qrbox: 800,
			},
			(decodedText) => {
				document.getElementById("result").innerText = `QR kod: ${decodedText}`;
				scan.stop();
				document.getElementById("main").style.display = "flex";
				if (decodedText) {
					document.getElementById("second").style.display = "flex";
				}
			},
			(error) => {
				console.log(error);
			}
		);
	});

	document.getElementById("submit").addEventListener("click", () => {
		location.reload();
	});
});
