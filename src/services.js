import axios from "axios";

 const baseUrl = "https://digital.kadabraservices.com/";
 
 export const mediaBaseUrl = "https://agent.kadabraservices.com";

export const postResource = (path, body, onSuccess, onFail) => {
	axios({
		method: "post",
		url: baseUrl + path,
		data: body,
	})
		.then((success) => onSuccess(success.data))
		.catch((err) => onFail(err));
};

export const getResource = (path, onSuccess, onFail) => {
	axios({
		method: "get",
		url: baseUrl + path,
	})
		.then((success) => onSuccess(success.data))
		.catch((err) => onFail(err));
};
