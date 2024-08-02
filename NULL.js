function getUser(userId) {
    // Simulating a user lookup
    if (userId === 1) {
      return { id: 1, name: "Alice" };
    } else {
      return null; // User not found
    }
  }
  
  const user = getUser(2);
  
  if (user === null) {
    console.log("User not found.");
  } else {
    console.log("User found:", user.name);
  }
  