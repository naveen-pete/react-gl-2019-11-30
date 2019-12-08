const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

const getUser = async userName => {
  console.log('getUser() - begin');

  const response = await fetch(`${apiBaseUrl}/users?username=${userName}`);
  const users = await response.json();

  return users;
};

const getPosts = async userId => {
  console.log('getPosts() - begin');

  const response = await fetch(`${apiBaseUrl}/posts?userId=${userId}`);
  const posts = await response.json();

  return posts;
};

const doWork = async () => {
  try {
    const users = await getUser('Antonette');
    console.log('user:', users[0]);

    const postsForUser = await getPosts(users[0].id);
    console.log('posts for user:', postsForUser);
  } catch (error) {
    console.log('error:', error);
  }
};

console.log('begin');

doWork();

console.log('end');
