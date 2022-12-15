import axios from "axios";

 const baseUrl = "https://digital.kadabraservices.com/";
 
 export const mediaBaseUrl = "https://agent.kadabraservices.com";

export const postResource =async (path, body, onSuccess, onFail) => {
	try {
		const res = await axios.post(baseUrl + path,body);
		onSuccess(res.data)	 
	 } catch (err) {
		onFail(err)	
	  }
	// axios({
	// 	method: "post",
	// 	url: baseUrl + path,
	// 	data: body,
	// })
	// 	.then((success) => )
	// 	.catch((err) => onFail(err));
};

export const getResource = async(path, onSuccess, onFail) => {
	try {
		const res = await axios.post(baseUrl + path);
		onSuccess(res.data)	 
	 } catch (err) {
		onFail(err)	
	  }
	// axios({
	// 	method: "get",
	// 	url: baseUrl + path,
	// })
	// 	.then((success) => onSuccess(success.data))
	// 	.catch((err) => onFail(err));
};
