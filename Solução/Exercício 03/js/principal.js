var alunos = document.querySelectorAll(".aluno");

alunos.forEach(	function(aluno) {

	var nota1 = parseFloat(aluno.querySelector(".info-p1").textContent);
	var nota2 = parseFloat(aluno.querySelector(".info-p2").textContent);

	var tdMedia = aluno.querySelector(".info-media");
	var media = (nota1 + nota2) / 2;
	
	if(media < 6) {
		aluno.style.backgroundColor = "lightcoral";
	}

	tdMedia.textContent = media.toFixed(1);
});