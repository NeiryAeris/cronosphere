export default function page() {
  return (
    <div className="absolute h-screen max-h-full bg-slate-700 max-w-full w-screen items-center">
      <div className="bg-blue-900 max-w-[400px] justify-center m-auto p-4 rounded-lg">
        <div className="ml-2">
          <p>Username</p>
          <input type="text"  className="w-[350px] pl-2" placeholder="Enter your username" />
          <p>Password</p>
          <input type="text"  className="w-[350px] pl-2" placeholder="Enter your password" />
        </div>
      </div>
    </div>
  );
}
