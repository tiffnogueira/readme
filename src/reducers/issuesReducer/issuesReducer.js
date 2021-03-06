import types from '../../actions/actionTypes';
import initialState from '../initialState';

import objClone from '../../utils/objClone';

export default function (state = initialState.issues, action) {
    switch (action.type) {

    case types.UPDATE_ISSUES: {
        const newState = objClone(state);
        Object.assign(newState, { issues: action.issues });
        return newState;
    }
    default:
        return state;
    }
}
