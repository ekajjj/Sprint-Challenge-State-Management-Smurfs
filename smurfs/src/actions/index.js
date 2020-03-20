import axios from 'axios';

export const getSmurfs = () => dispatch => {
    console.log('getSmurfs()')
    dispatch({type: "FETCH_SMURF_START"});
    axios
    .get('http://localhost:3333/smurfs')
    .then( res => {
        console.log('Data', res.data);
        dispatch({ type:"FETCH_SMURF_SUCCESS", payload: res.data });
    })
    .catch(err =>
        dispatch({type:"FETCH_SMURF_ERROR", payload: `ERROR LOADING: ${err}`})
    )
};

export const postSmurfs = (item) => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', item)
    .then(res => {
        console.log(res.data);
        getSmurfs();
    })
    .catch(err => {
        console.log('Error new smurf', err);
        dispatch({type:"POST_SMURF_ERROR", payload: `ERROR CREATING SMURF: ${err}`})
    })
}