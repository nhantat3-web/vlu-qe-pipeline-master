const { login } = require("./auth");

test("Smoke Test - đăng nhập đúng admin/123", () => {
    expect(login("admin", "123")).toBe(true);
});