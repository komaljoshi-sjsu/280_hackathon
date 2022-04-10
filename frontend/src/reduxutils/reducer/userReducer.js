const initState = {
    country:"India",
    name:"Government Representive",
    disableAnno: false
}

export const userReducer = (state=initState,action) => {
    let type = action.type;
    switch(type) {
        case "setName":
            let nameState = {
                ...state,'name':action.payload
            }
            return nameState;
        case "setCountry":
            let newstate = {
                ...state,'country':action.payload
            }
            return newstate;
        case "disableAnno":
            let stt = {
                ...state,'disableAnno':action.payload
            }
            return stt;
    }
    return state;
}


