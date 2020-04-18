import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cAmY8ZB2sW11ArWCoCLOm_hVoNQmmo3ymVN4FiQEmssGaaBVDPy514Rsv83hwN2UogNWOdl5XkQGqieqhSgMOcbGrWnoDe1EvNkCt08wZ-13UR4vLJUtSU23E6SOXnYx'
    }
}); 