// Update login feature
const users = {
    admin: {
        password: "123",
        locked: false
    },

    lockedUser: {
        password: "123",
        locked: true
    }
};

function login(username, password) {
    // Username rỗng
    if (!username || username.trim() === "") {
        return false;
    }

    // Password không phải chuỗi
    if (typeof password !== "string") {
        return false;
    }

    // Password chứa ký tự đặc biệt
    if (/[^a-zA-Z0-9]/.test(password)) {
        return false;
    }

    // Tìm tài khoản
    const user = users[username];

    // Không tồn tại tài khoản
    if (!user) {
        return false;
    }

    // Tài khoản bị khóa
    if (user.locked) {
        return false;
    }

    // Kiểm tra mật khẩu
    return user.password === password;
}

module.exports = { login };
