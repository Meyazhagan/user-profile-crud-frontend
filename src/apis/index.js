import http from "./http";

export const login = async ({ email, password }) => {
    try {
        const { data } = await http.post("/auth/login", { email, password });
        return { data, error: null };
    } catch (err) {
        return { data: {}, error: err?.response };
    }
};
export const register = async ({ email, password, name }) => {
    try {
        const { data } = await http.post("/auth/register", { email, password, name });
        return { data, error: null };
    } catch (err) {
        return { data: {}, error: err?.response };
    }
};
