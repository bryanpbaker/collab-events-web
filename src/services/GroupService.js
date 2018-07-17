class GroupService {
  endpoint = `${process.env.REACT_APP_API_URL}/groups`;

  /**
   * authorize a user with a jwt
   * @param {String} token
   */
  async fetchGroups() {
    const { token } = JSON.parse(localStorage.getItem('authenticatedUser'));

    try {
      const res = await fetch(`${this.endpoint}`, {
        method: 'GET',
        headers: {
          Authorization: `bearer ${token}`
        }
      });

      return res.json() || [];
    } catch (error) {
      return error;
    }
  }
}

export default GroupService;
