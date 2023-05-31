function Login() {
  return (
    <form method='post'>
      <div>
        ID
        <input type="text" id='userID' />
        PW
        <input type="text" id='userPW' />
      </div>
    </form>
  )
}

export default Login;