import {doMultiply} from '../../actions';
import {MULTIPLY} from '../../actions/types';

test('has correct type', () => {
	const action = doMultiply();
	expect(action.type).toEqual(MULTIPLY);
});

test('has correct payload', () => {
	const action = doMultiply(2,3);
	expect(action.payload).toEqual(6);
});
