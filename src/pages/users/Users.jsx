import React from "react";
import { useSelector } from "react-redux";
import { deleteUser, editUser } from "../../redux/slices/user-clise";
import { useDispatch } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const usersItems = users?.map((user) => (
    <div
      key={user.id}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-800">Name: {user.name}</h3>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Age: {user.age}</p>
      <p className="text-gray-600">Profession: {user.profession}</p>
      <p className="text-gray-600">Gender: {user.gender}</p>
      <div className="flex items-center gap-6">
        <button
          onClick={() => dispatch(deleteUser(user))}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-200"
        >
          Delete
        </button>
        <button
          onClick={() => dispatch(editUser(user))}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-200"
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 min-h-screen py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {usersItems.length > 0 ? (
            usersItems
          ) : (
            <p className="text-white text-lg">Userlar mavjud emas</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
