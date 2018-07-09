class UserService {
  endpoint = `${process.env.REACT_APP_API_URL}/users`;

  async login(creds) {
    try {
      const res = await fetch(`${this.endpoint}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(creds)
      });
      const user = await res.json();

      return { user };
    } catch (err) {
      console.log(err);

      return false;
    }
  }
}

export default UserService;
