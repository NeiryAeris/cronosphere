export default function SignIn() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-800">
      <div className="w-[400px] h-[500px] bg-slate-700 rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-slate-300">Sign in</h1>
        <input
          type="text"
          placeholder="Email"
          className="w-[300px] h-[40px] bg-slate-600 rounded-lg mt-5 px-2 text-slate-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[300px] h-[40px] bg-slate-600 rounded-lg mt-5 px-2 text-slate-300"
        />
        <button className="w-[300px] h-[40px] bg-slate-400 rounded-lg mt-5 text-slate-300">Sign in</button>
        <p className="mt-5 text-slate-300">
          Don't have an account?{" "}
          <a href="/SignUp" className="text-blue-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
