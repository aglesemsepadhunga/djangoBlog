const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');

const slugify = (val) =>{
	
	return val.toString().toLowerCase().trim()
	//replace & with '-and-'
	.replace(/&/g,'-and-')
	//replace space,non word characters and dashes with '-'
	.replace(/[\s\W-]+/g,'-')
};
titleInput.addEventListener('keyup',(e)=>{
	slugInput.setAttribute('value',slugify(titleInput.value));
});