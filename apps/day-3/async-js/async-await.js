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
      const postsForUser = posts.filter(p => p.userId === userId);

      console.log('getPosts() - end');

      if (postsForUser.length <= 0) {
        reject('Posts not found');
        return;
      }

      resolve(postsForUser);
    }, 3000);
  });
};

const doWork = async () => {
  try {
    const user = await getUser('hari');
    console.log('user:', user);

    const postsForUser = await getPosts(user.id);
    console.log('posts for user:', postsForUser);
  } catch (error) {
    console.log('error:', error);
  }
};

console.log('begin');

doWork();

console.log('end');
