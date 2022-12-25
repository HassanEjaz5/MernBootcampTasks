const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    email:''
}

function reducer(state, action)
{
    switch (action.type)
    {
        case 'changeValue':
            return {...state, [action.field] : action.value}
        case 'resetForm':
            return initialState
            default:
                throw new Error()
    }

}

export {reducer, initialState};