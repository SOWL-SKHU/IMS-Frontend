function Login() {
  return (
    <form method='post'>
      <div>
        <table>
          <tr>
            <td>ID</td><td><input type="text" id='userID' /></td>
          </tr>
          <tr>
            <td>PW</td><td><input type="text" id='userPW' /></td>
          </tr>
        </table>
      </div>
    </form>
  )
}

export default Login;