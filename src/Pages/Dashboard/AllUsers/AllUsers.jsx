import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/api/v1/users/makeAdmin/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful.");
          refetch();
        }
      });
  };

  const handleDeleteAdmin = (id) => {
    fetch(`http://localhost:5000/api/v1/users/deleteAdmin/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Admin delete successful");
          refetch();
        }
      });
  };

  return (
    <section className="w-full m-2">
      <h1 className="m-4 text-3xl ">All Users</h1>
      <div className="h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="bg-gray-200 py-2 px-4 text-normal text-gray-700">
                Name
              </th>
              <th className="bg-gray-200 py-2 px-4 text-normal text-gray-700">
                Email
              </th>
              <th className="bg-gray-200 py-2 px-6 text-normal text-gray-700">
                Admin
              </th>
              <th className="bg-gray-200 py-2 px-6 text-normal text-gray-700">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.name}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user?.role !== "admin" ? (
                      <Button
                        size="sm"
                        color="blue"
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        color="amber"
                        onClick={() => handleDeleteAdmin(user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Delete Admin
                      </Button>
                    )}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue"
                    className="font-medium"
                  >
                    <Button size="sm" color="red">
                      Delete User
                    </Button>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
