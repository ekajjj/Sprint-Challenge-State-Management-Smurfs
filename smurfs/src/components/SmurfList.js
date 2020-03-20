import React from 'react';
import Smurf from './Smurf'

import { connect } from 'react-redux'

import './App.css'

const SmurfList = props => {
    return (
        <>            
            {props.isLoading ? (<h2>Loading smurfs</h2>) : (props.smurfs && props.smurfs.map(smurf => 
                <Smurf key={smurf.id} smurf={smurf} />
            )) }
            <button className="find-smurf-button" onClick={props.fetchSmurf}>Get All Smurfs!</button>
        </>
    )
}


const mapStateToProps = state => ({
    smurfs: state.smurfs[0],
    error: state.error,
    isLoading: state.isLoading
});
export default connect(
mapStateToProps, 
{}
)(SmurfList);