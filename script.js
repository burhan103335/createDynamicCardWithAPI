const posts = [

    {
        title : "This is title 1",
        body : "this is body 1",
    },
    {
        title : "This is title 2",
        body : "this is body 2",
    },
    {
        title : "This is title 3",
        body : "this is body 3",
    },
    {
        title : "This is title 4",
        body : "this is body 4",
    },
    {
        title : "This is title 5",
        body : "this is body 5",
    },
    {
        title : "This is title 6",
        body : "this is body 6",
    },
    {
        title : "This is title 7",
        body : "this is body 7",
    },
    {
        title : "This is title 8",
        body : "this is body 8",
    },
    {
        title : "This is title 9",
        body : "this is body 9",
    },
];


{/* <div class="post">
        <h4 class="post-title">post title 1</h4>
        <p class="post-body">description 1 </p>
    </div> */}

//selection
const postsElement = document.querySelector('.posts');

const loadAllData  = () => {
    posts.map(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
};

loadAllData();