const CHANGE_DAY = 'palette/CHANGE_DAY';

export const changeDay = day => ({ type : CHANGE_DAY, day});

const initialState = {
    day : '일',
};

export default function palette(state=initialState,action){
    switch (action.type){
        case CHANGE_DAY:
            return {
                ...state,
                day:action.day,
            };
        default:
            return state;
    }
}
