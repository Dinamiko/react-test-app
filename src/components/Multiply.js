import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Multiply extends Component {

    onChangeA = (value) => {
        this.props.updateA(parseInt(value, 10));
    };

    onChangeB = (value) => {
        this.props.updateB(parseInt(value, 10));
    };

    doMultiply = () => {
        this.props.doMultiply(this.props.math.a, this.props.math.b);
    };

    render() {
        return(
            <div>
                <input id="a" type="number" value={this.props.math.a}
                       onChange={(event) => this.onChangeA(event.target.value)}/>
                <label> * </label>
                <input id="b" type="number" value={this.props.math.b}
                       onChange={(event) => this.onChangeB(event.target.value)}/>
                <label> = </label>
                <input id="result" type="number" value={this.props.math.result} readOnly/>
                <button onClick={this.doMultiply}>Multiply!</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        math: state.math
    }
}

export default connect(mapStateToProps, actions)(Multiply);
