function Posts({ users }) {
  return (
    <>
      <div className="container-fluid bg-info w-100">
        <ul className="list-unstyled pt-5">
          {users.map((user) => (
            <li className="shadow-lg p-3 mb-5 bg-body rounded" key={user.id}>
              {user.id} {"  "}
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Posts;
