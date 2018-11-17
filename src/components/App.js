import React, {Component} from 'react';
import Calculator from './Calculator';
import PostList from './PostList';

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
                <p>Calculator State: {this.state.calculatorState}</p>
                <Calculator title="Calculator Title Here" getEventFromCalculator={(event) => this.updateFromCalculator(event)}/>
                <hr style={{'marginTop': '30px', 'marginBottom': '30px'}}/>
                <PostList/>
            </div>
        );
    }
}
export default App;
