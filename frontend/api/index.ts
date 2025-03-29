const NautilusApi = {
  async fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/users')
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error)
    }
  }, 
  async fetchUser(userId: string) {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async createUser(username: string, email: string, password: string) {
    try {
      const response = await fetch('http://localhost:3000/users', {
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

  async createUserWorkspace(userId: string, workspaceName: string, workspaceType: string) {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workspaceName: workspaceName,
          workspaceType: workspaceType
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