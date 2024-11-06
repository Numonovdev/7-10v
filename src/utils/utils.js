async function getToken() {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(
            "8a2761d58a11457bb92339a6ff442466" +
              ":" +
              "6842a55c7dcb4ae6891acf74f6f691f0"
          )}`,
        },
        body: "grant_type=client_credentials",
      });
      const auth = await response.json();
      localStorage.setItem("token", `${auth.token_type} ${auth.access_token}`);
    } catch (error) {
      console.error(error);
    }
  }
  
  export { getToken };