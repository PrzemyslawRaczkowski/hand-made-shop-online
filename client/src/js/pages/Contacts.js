import React from 'react';

import MainComponent from '../components/MainComponent';
import { loadContactTitle } from '../actions';
import { connect } from 'react-redux';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        if (!this.props.contactTitle) {
            this.props.loadContactTitle();
        }
    }

    render() {
        if (!this.props.contactTitle) {
            return (
                <div>
                    Loading title
                </div>
            )
        }

        return (
            <div>
                <MainComponent title={this.props.contactTitle}/>
            </div>
        );
    }
}

export default connect(
    function (state) {
        return {
            contactTitle: state.contactTitle
        }
    },
    {loadContactTitle}
)(Contacts);