import React, {Component} from 'react';
import Sum from './Sum';
import Multiply from './Multiply';
import {connect} from 'react-redux';

class App extends Component {

    state = {
        calculatorState: 0
    };

    updateFromCalculator = (event) => {
        this.setState({calculatorState: event});
    };

    render() {
        return (
            <div>
                <p>Sum State: {this.state.calculatorState}</p>
                <Sum title="Sum Title Here" getEventFromCalculator={(event) => this.updateFromCalculator(event)}/>
                <hr style={{'marginTop': '30px', 'marginBottom': '30px'}}/>
                <p>Multiply State: {this.props.math.result}</p>
                <Multiply/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        math: state.math
    };
}

export default connect(mapStateToProps)(App);
