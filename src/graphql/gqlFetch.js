import http from "../apis/http";

const gqlFetch = async ({ query, variables }) => {
    try {
        const { data } = await http({
            url: "/graphql",
            method: "POST",
            data: {
                query,
                variables,
            },
        }).then(({ data }) => data);
        return { data, error: null };
    } catch (err) {
        return { data: {}, error: err?.response };
    }
};

export default gqlFetch;
