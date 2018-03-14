import Post from "./post.js";

const backendUrl = "http://127.0.0.1:3001/";

const createPostList = (post) => {
    const row = $(".row");


    post.forEach(element => {
        let postHTML = createPostHtml(element);
        row.append(postHTML);
    });

    return content;

}

const createPostHtml = (post) => {
    return ` <div class="col s12">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${post.title}</span>
        <p>${post.intro}</p>
      </div>
    </div>
  </div>`
};

const initPost = () => {

    fetch(backendUrl)
        .then((response) => {
            return response.json()
        })
        .then((posts) => {
            console.log(posts);
            return posts.map((e) => {
                const newPost = new Post(e.id, e.title, e.intro);
                return newPost
            });

        })
        .then((list) => {
            console.log();

            console.log(list);
            createPostList(list);
        });
};
export {
    initPost
}