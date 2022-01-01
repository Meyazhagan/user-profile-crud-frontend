import { profile, user } from "./Common";

export const GET_ALL_USERS = `
    query allUsers {
        allUsers {
            ok
            users {
                ${user}
            }
            errors {
                message
            }
        }
    }
`;

export const GET_USER = `
    query getUser($id: ID!) {
        getUser(id: $id) {
            ok
            user {
               ${user}
            }
            errors {
                message
            }
        }
    }
`;

export const GET_PROFILE = `
    query getUser($userId: ID!) {
        getUser(id: $userId) {
            ok
            user {
               ${profile}
            }
            errors {
                message
            }
        }
    }
`;
