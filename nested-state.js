const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
    name: 'Rizal',
    address: {
        street: 'Jl. Krueng Arakundo No. 27',
        city: 'Banda Aceh',
        state: 'Banda Aceh'
    }
}

// constant action type name
const STREET_UPDATED = 'STREET_UPDATED';

// constant update action
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

// define a reducer for action
const reducer = (state = initialState, action) => {

    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default: {
            return state
        }
    }
}

const store = redux.createStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));
store.dispatch(updateStreet('Jl. Patimura Gang Sempit No. 3'))
unsubscribe();