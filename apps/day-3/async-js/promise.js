const getUser = userName => {
  console.log('getUser() - begin');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.name === userName);

      console.log('getUser() - end');

      if (!user) {
        reject('User not found');
        return;
      }
      resolve(user);
    }, 3000);
  });
};

const getPosts = userId => {
  console.log('getPosts() - begin');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const postsForUser = postsForUser.filter(p => p.userId === userId);

      console.log('getPosts() - end');

      if (postsForUser.length <= 0) {
        reject('Posts not found');
        return;
      }

      resolve(postsForUser);
    }, 3000);
  });
};

console.log('begin');

getUser('hari')
  .then((result) => {
    console.log('user:', result);

    return getPosts(10);
  })
  .then((posts) => {
    console.log('posts for user:', posts);
  })
  .catch((error) => {
    console.log('error:', error);
  });

console.log('end');
