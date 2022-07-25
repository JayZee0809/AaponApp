export const logger = (store) => (next) => (action) => {
    if(!action.type)
        return next(action);
    
    console.log('\ncurrent state: ',  store.getState());
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);

    next(action);

    console.log('next state: ', store.getState());
}