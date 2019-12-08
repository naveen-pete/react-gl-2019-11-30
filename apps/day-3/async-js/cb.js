const getUser = (userName, cb) => {
  console.log('getUser() - begin');
  setTimeout(() => {
    const user = users.find(u => u.name === userName);

    console.log('getUser() - end');

    if (!user) {
      cb('User not found');
      return;
    }
    cb(null, user);
  }, 3000);
};

const getPosts = (userId, cb) => {
  console.log('getPosts() - begin');
  setTimeout(() => {
    const postsForUser = posts.filter(p => p.userId === userId);

    console.log('getPosts() - end');

    if (postsForUser.length <= 0) {
      cb('Posts not found');
      return;
    }

    cb(null, postsForUser);
  }, 3000);
};

console.log('begin');

getUser('hari', (error, result) => {
  if (error) {
    console.log('getUsers() error:', error);
    return;
  }

  console.log('user:', result);
  getPosts(result.id, (error, result) => {
    if (error) {
      console.log('getPosts() error:', error);
      return;
    }

    console.log('posts for user:', result);
  });
});

console.log('end');
