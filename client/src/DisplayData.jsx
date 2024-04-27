import { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;

const QUERY_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      name
      age
      nationality
    }
  }
`;

const DisplayData = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);
  const [id, setId] = useState("");
  const [
    fetchUser,
    { loading: userLoading, error: userError, data: userData },
  ] = useLazyQuery(QUERY_USER_BY_ID);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="h-auto w-full flex flex-col justify-center items-center">
      <div className="h-full" style={{ width: "30%" }}>
        <div className="h-full gap-3 flex flex-wrap">
          {data.users.map((user) => (
            <div
              key={user.id}
              className="border my-1 p-1 border-black/50 rounded-lg"
            >
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Username: {user.username}</p>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex-col flex justify-center items-center">
        <h2 className="text-lg font-bold ">Search User</h2>
        <div className="flex">
          <input
            onChange={(e) => setId(e.target.value)}
            value={id}
            className="px-2 py-1 border border-black focus:outline-none mx-2"
          />
          <button
            className="border border-black/70 px-2 py-1"
            onClick={() =>
              fetchUser({
                variables: { id }, // Passing id variable correctly
              })
            }
          >
            Search
          </button>
        </div>
        {userLoading && <div>Loading user data...</div>}
        {userError && <div>Error: {userError.message}</div>}
        {userData && (
          <div>
            <p>Name: {userData.user.name}</p>
            <p>Age: {userData.user.age}</p>
            <p>Nationality: {userData.user.nationality}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayData;
