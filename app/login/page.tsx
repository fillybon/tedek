import AuthForm from "./components/AuthForm";

const Login = () => {
  return (
    <main className="w-full h-full flex items-center">
      <div className="w-fit h-fit m-auto bg-black/50 p-6 rounded-2xl">
        <div className="w-[20rem] m-auto">
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
