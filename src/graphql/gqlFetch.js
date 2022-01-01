import axios from "axios";

const gqlFetch = async ({ query, variables }) => {
    try {
        const { data } = await axios({
            url: process.env.REACT_APP_BACKEND_URL,
            method: "POST",
            data: {
                query,
                variables,
            },
        }).then(({ data }) => data);
        return { data, error: null };
    } catch (err) {
        return { data: null, error: err?.response };
    }
};

export default gqlFetch;
