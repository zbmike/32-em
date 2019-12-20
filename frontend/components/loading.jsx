import React from 'react';
import { connect } from 'react-redux';

const msp = state => ({
    loading: state.ui.loading
});

const LoadingAnimation = ({ loading }) => {
    return loading ? (
        <div className="fullscreen-animation">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    ) : null;
}

export default connect(msp, null)(LoadingAnimation);