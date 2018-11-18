import React, {Component} from 'react';
import {sum} from '../utils/math';

class Sum extends Component {

    state = {
        a: 0,
        b: 0,
        result: 0
    };

    onChangeA = (value) => {
        this.setState({a: parseInt(value, 10)});
    };

    onChangeB = (value) => {
        this.setState({b: parseInt(value, 10)});
    };

    doSum = () => {
        const result = sum(this.state.a, this.state.b);

        this.setState({result: result}, () => {

            this.props.getEventFromCalculator(this.state.result);
        });
    };

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <input id="a" type="number" value={this.state.a}
                       onChange={(event) => this.onChangeA(event.target.value)}/>
                <input id="b" type="number" value={this.state.b}
                       onChange={(event) => this.onChangeB(event.target.value)}/>
                <input id="result" type="number" value={this.state.result} readOnly/>
                <button onClick={this.doSum}>Sum!</button>
            </div>
        );
    }
}

export default Sum;
