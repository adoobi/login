export function login(email, password) {
    return new Promise((resolve, reject) => {
        // Simulasi API
        setTimeout(() => {
            if (email === "admin@aistudy.com" && password === "123456") {
                resolve("Login berhasil!");
            } else {
                reject("Email atau password salah!");
            }
        }, 1000);
    });
}
