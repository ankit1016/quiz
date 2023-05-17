import axios from "axios";



const useAxios = () => {

    // ---------------------------------------------------------------create common axios api------------------------------------------------------------------------
    const axiosAPi = axios.create({
        baseURL:  "https://opentdb.com/api.php"
    });

    // -----------------------------------------------------------------All request come here------------------------------------------------------------------
    axiosAPi.interceptors.request.use(async (request) => {
        return request;
    }, (error) => {
        return Promise.reject(error);
    });

    // ----------------------------------------------------------------All response go from here----------------------------------------------------------------------
    axiosAPi.interceptors.response.use((response) => {
        return response;
    }, (error) => {
       let errorMessage=""
        if (error && error.response.status >= 500 && error.response.status <= 599){errorMessage="Something Wrong Please Try Again"} ;
        return Promise.reject(errorMessage);
    });

    return axiosAPi;
};

export default useAxios;
