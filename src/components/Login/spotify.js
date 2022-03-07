
export const userAuth = "https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000/";

const clientID = "68dcbfd9951c450293039b846867b5fc";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getToken = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginURL = `${userAuth}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;