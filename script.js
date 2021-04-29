helper = (image, about) => {
	document.getElementById("imageCircle").style.backgroundImage = `url(images/${image}.png)`;
	document.getElementById("imageCircle").style.backgroundSize = "cover";
	document.getElementById("intro").innerHTML = about;
}

changeContent = (image) =>{
	if (image === "image1"){
		about = "Hi there, I'm Ankit";
		helper(image, about);
	}
	else if (image === "image2"){
		about = "Aeromodelling";
		helper(image, about);
	}
	else if (image === "image3"){
		about = "3D Visualization";
		helper(image, about);
	}
	else if (image === "image4"){
		about = "Product Design";
		helper(image, about);
	}
	else if (image === "image5"){
		about = "UI/UX";
		helper(image, about);

	}
	else if (image === "image6"){
		about = "A Visual Book";
		helper(image, about);
		
	}
	else if (image === "image7"){
		about = "A Visual Montage";
		helper(image, about);
		
	}
}