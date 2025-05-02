const NautilusApi = {
  async fetchUsers() {
    try {
      const response = await fetch('https://nautilus-mongodb-connection.vercel.app/users')
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error)
    }
  }, 
  async fetchUser(userId: string) {
    try {
      const response = await fetch(`https://nautilus-mongodb-connection.vercel.app/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async createUser(username: string, email: string, password: string) {
    try {
      const response = await fetch('https://nautilus-mongodb-connection.vercel.app/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      });
      const data = await response.json();
      console.log(data)

    } catch (error) {
      console.error(error)
    }
  },

  async createUserWorkspace(userId: string, workspaceName: string) {
    try {
      const response = await fetch(`https://nautilus-mongodb-connection.vercel.app/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workspaceName: workspaceName
        })
      });
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }
}

export default NautilusApi;