let posts = ["Post 1", "Post 2", "Post 3"];

const listPost = () => {
  let promise = new Promise((resolve, reject) => {
    resolve(posts.map((post) => console.log(post)));
    reject("Postlar listelenemedi");
  });
  return promise;
};

const addPost = (post) => {
  posts.push(post);
  let promise = new Promise((resolve, reject) => {
    resolve("Post eklendi");
    reject("Post eklenemedi");
  });
  return promise;
};

/*promise*/

// addPost("Post 4").then((res) => {
//   console.log(res);
//   return listPost();
// });

/*async-await*/

async function process() {
  let res = await addPost("Post 4");
  console.log(res);
  listPost();
}

// process();

/*callback*/

// const listPost = () => {
//   posts.map((post) => console.log(post));
// };

// const addPost = (post, callback) => {
//   posts.push(post);
//   callback();
// };

// addPost("Post 4", listPost);