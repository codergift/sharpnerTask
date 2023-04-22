let posts = [];
let lastActivityTime = null;

function createPost(postData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(postData);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      console.log("User's last activity time updated to:", lastActivityTime);
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length === 0) {
        reject(new Error("No posts to delete"));
      } else {
        posts.pop();
        console.log("Last post deleted");
        resolve();
      }
    }, 1000);
  });
}

// Usage:
createPost({ title: 'First post', content: 'This is the first post.' })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("All promises resolved successfully!");
    console.log("Posts:", posts);
    console.log("Last activity time:", lastActivityTime);
    return deleteLastPost();
  })
  .then(() => {
    console.log("Posts after deletion:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
