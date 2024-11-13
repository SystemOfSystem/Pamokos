const fetchUserData = async (userId) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await res.json();
    console.log(data);
    if (res.status === 404) {
      throw new Error();
    }
  } catch (err) {
    console.error("User not found");
  }
};

fetchUserData(1);
fetchUserData(999);
