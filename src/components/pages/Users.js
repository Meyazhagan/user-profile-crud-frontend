import React from "react";
import UserCard from "../app/UserCard";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_USER, INIT_USER } from "../../graphql/Mutation";
import { deleteUsers as deleteUserAction, setUsers } from "../../redux/actions";
import gqlFetch from "../../graphql/gqlFetch";
import { toast } from "react-toastify";

function Users() {
    const users = useSelector((s) => s.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleCreateUser = () => {
        navigate("/create-user");
    };

    const onDelete = async (id) => {
        const {
            data: { deleteUser },
            error,
        } = await gqlFetch({ query: DELETE_USER, variables: { id } });
        if (error) console.log(error);
        if (deleteUser?.ok) {
            toast.info("User Deleted");
            dispatch(deleteUserAction({ id }));
        } else {
            toast.error(deleteUser?.errors[0].message);
        }
    };

    const generateUser = async () => {
        const {
            data: { initUser },
            error,
        } = await gqlFetch({ query: INIT_USER });
        if (error) console.log(error);
        if (initUser?.ok) {
            toast.info("Users Generated");
            dispatch(setUsers({ users: initUser?.users }));
        } else {
            toast.error(initUser?.errors[0].message);
        }
    };
    return (
        <div
            className="
            mx-10 md:10/12 xl:w-8/12 xl:mx-auto
            ">
            <div className="flex justify-end p-6 gap-4">
                {users?.length <= 0 && (
                    <button
                        onClick={generateUser}
                        className="flex gap-2 border-2 border-accent text-accent py-2 px-4 rounded-md hover:bg-accent hover:text-dark">
                        Generate Users
                    </button>
                )}
                <button
                    onClick={handleCreateUser}
                    className="flex gap-2 border-2 border-accent text-accent py-2 px-4 rounded-md hover:bg-accent hover:text-dark">
                    Add New User
                </button>
            </div>
            <div className="grid grid-cols-12 gap-6">
                {users?.length <= 0 && (
                    <div className="col-span-full text-center">No User Avaiable</div>
                )}
                {users?.map((user) => (
                    <UserCard
                        key={user.id}
                        {...user}
                        onDelete={onDelete}
                        classes="lg:col-span-4 md:col-span-6 col-span-12 w-full"
                    />
                ))}
            </div>
        </div>
    );
}

export default Users;
