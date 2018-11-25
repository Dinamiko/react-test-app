import math from '../../reducers/math';
import {MULTIPLY} from '../../actions/types';

test('handles MULTIPLY action type', () => {
	const action = {
		type: MULTIPLY,
		payload: 123
	};

	const newState = math({}, action);

	expect(newState).toEqual({result:123});
});
