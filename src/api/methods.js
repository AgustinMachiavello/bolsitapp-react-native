export const SERVER_URL = 'http://192.168.1.4:8000/';

export const get = async (url, data, onCatchError) => {
    try {
        let response = await fetch(url, data);
        let json = await response.json();
        return json;
      } catch (error) {
        if (!onCatchError) {
            alert(error);
        }
        else {
            onCatchError();
        }
    }
}