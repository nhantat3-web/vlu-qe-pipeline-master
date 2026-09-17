const { login } = require("./auth");

describe("Regression Test - chức năng đăng nhập", () => {

    test("Đăng nhập sai mật khẩu", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username rỗng", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Username chỉ chứa khoảng trắng", () => {
        expect(login("   ", "123")).toBe(false);
    });

    test("Mật khẩu chứa ký tự đặc biệt", () => {
        expect(login("admin", "12@3")).toBe(false);
    });

    test("Tài khoản không tồn tại", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Tài khoản bị khóa", () => {
        expect(login("lockedUser", "123")).toBe(false);
    });

    test("Password bị bỏ trống", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Password không phải kiểu chuỗi", () => {
        expect(login("admin", 123)).toBe(false);
    });

    test("Username không tồn tại và password sai", () => {
        expect(login("unknown", "999")).toBe(false);
    });

});