const initialState = {
    codesList : [
        {id:1, name:'demo'},
        {id:2, name:'Elma'}
      ]
};

export default function CodesReducer(state=initialState, action){

    let updatedList = state.codesList;
    switch(action.type){
        case 'Add':
            return {
                ...state,
                codesList: updatedList
            };
            break;
        default:
            return state;
            break;
    }
}