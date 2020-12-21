const citiesReducer = (state, action) => {
    if (state === undefined) {
        return [];
    }
  
    if (action.type === 'SET_CITIES') {
         return action.payload;
    } else {
        return state;
    }


};

export default citiesReducer;