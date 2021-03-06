import {
    login,
    logout
} from "./../../actions/auth";

test("should generate login action object", () => {
    const uid = "a1b2c3d4e5";
    const action = login(uid);

    expect(action).toEqual({
        type: "LOGIN",
        uid
    });
});

test("should generate logout action object", () => {
    const action = logout();

    expect(action).toEqual({
        type: "LOGOUT"
    });
});
