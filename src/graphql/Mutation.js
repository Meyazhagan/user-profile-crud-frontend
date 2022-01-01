import { profile, user } from "./Common";

export const INIT_USER = `
    mutation {
        initUser{
            ok
            users{
                ${user}
            }
            errors{
                message
            }
        }
    }
`;

export const CREATE_USER = `
    mutation createUser($user: UserInput!) {
        createUser(input: $user) {
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

export const UPDATE_USER = `
    mutation updateUser($id: ID!, $user: UserUpdateInput!) {
        updateUser(input: $user, id:$id) {
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

export const DELETE_USER = `
    mutation updateUser($id: ID!) {
        deleteUser(id:$id) {
            ok
            errors {
                message
            }
        }
    }
`;

export const CREATE_PROFILE = `
    mutation createProfile($userId: ID!, $profile: ProfileInput!) {
        createProfile(userId: $userId, input: $profile) {
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

export const UPDATE_PROFILE = `
    mutation updateProfile($userId: ID!, $profile: ProfileUpdateInput!) {
        updateProfile(userId: $userId, input: $profile) {
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

export const DELETE_PROFILE = `
    mutation deleteProfile($userId: ID!) {
        deleteProfile(userId: $userId) {
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
