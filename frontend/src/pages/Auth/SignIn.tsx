// import { useNavigate } from "react-router-dom";
import Button from "@/components/Common/Button";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
  // const navigate = useNavigate();

  const signinHandler = () => {
    // Redirect to backend GitHub OAuth endpoint
    window.location.href = "http://localhost:3000/auth/github/callback";
  };

  return (
    <div className="text-gray-800 flex flex-col justify-center min-h-screen dark:text-gray-200">
      <div className="max-w-xl mx-auto w-full px-4 sm:px-6 py-16">
        <div className="bg-linear-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sign in or Sign up to your account</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Start your learning journey today</p>
          </div>

          <div className="space-y-6">
            <Button
              icon={<FaGithub />}
              fullWidth
              size="lg"
              onClick={signinHandler}
              className="bg-white text-gray-800 border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
              Continue with GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
