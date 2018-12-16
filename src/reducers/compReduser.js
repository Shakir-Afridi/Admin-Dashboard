import _ from 'lodash';

let initialState = {
    renderedComp: 'Dashboard'
  }

export default function(state = initialState, action){
    switch(action.type){
        case 'UPDATE_RENDERED_COMP':
            return Object.assign({}, state, { renderedComp: action.payload })

        default:
            return state;
    }
}