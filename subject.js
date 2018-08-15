let database = firebase.database().ref("Calculus/");
database.on("child_added",(row) => {
	let post = row.val()
	
	let title = document.createElement("div");
	let user = document.createElement("div");
	let content = document.createElement("div");
	let container = document.createElement("div");

	title.innerHTML = post.title;
	user.innerHTML = post.user;
	content.innerHTML = post.content;

	container.appendChild(title);
	container.appendChild(user);
	container.appendChild(content);

	let posts = document.getElementById('posts');
	posts.appendChild(container);
})

let btn = document.getElementById('post');
btn.addEventListener('click', createPost)

function createPost(){
	let title = document.getElementById("title").value
	let user = document.getElementById("user").value
	let content = document.getElementById("content").value

	database.push({
		title: title,
		user: user,
		content: content
	});	
}
