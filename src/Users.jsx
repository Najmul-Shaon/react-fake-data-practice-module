export default function Users({ user }) {
  const { username, age, id } = user;
  //   console.log(user);
  return (
    <div>
      <small>ID: {id}</small>
      <h3>
        Name: <u>{username}</u>
      </h3>
      <p>Age: {age}</p>
      <hr />
      <br />
    </div>
  );
}
