const initState = {
    email: "",
    password: "",
    phone: "",
    isd_code: "",
    is_logged: false,
    access_token: "",
    refresh_token: "",
    active_domains: ""
}

const userReducer = (state=initState, action) => {
    switch (action.type) {
        default:
            return {...state}
    }

}

export default userReducer;