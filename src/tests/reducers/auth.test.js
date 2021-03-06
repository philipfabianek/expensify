import authReducer from "./../../reducers/auth";

test("should set uid for login", () => {
    const uid = "A1B2C3D4E5";
    const action = {
        type: "LOGIN",
        uid
    };

    const state = authReducer({}, action);
    expect(state).toEqual({ uid });
});

test("should clear uid for logout", () => {
    const action = {
        type: "LOGOUT"
    };

    const state = authReducer({ uid: "DJLHDJFDD1G24G" }, action);
    expect(state).toEqual({});
});
