function createArticle() {
	let titleValue = document.getElementById("createTitle").value;
	let contentValue = document.getElementById("createContent").value;

	let articleElement = document.getElementById("articles");

	if (titleValue !== '' && contentValue !== '') {
		let article = document.createElement('article');
		let h3 = document.createElement('h3');
		h3.textContent = titleValue;
		let p = document.createElement('p');
		p.textContent = contentValue;
		article.appendChild(h3);
		article.appendChild(p);
		articleElement.appendChild(article);
	}

	document.getElementById('createTitle').value = "";
	document.getElementById('createContent').value = "";

}