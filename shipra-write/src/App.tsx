import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Write from './components/write';
import { signIn } from './apis/signin';
import { Loader2 } from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Please provide both email and password.');
      return;
    }

    try {
      setIsLoading(true)
      const success = await signIn(email, password);

      if (success) {
        setIsLoggedIn(true);
        toast.success('Login successful!');
      } else {
        setIsLoggedIn(false);
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setIsLoggedIn(false);
      toast.error('Something went wrong. Please try again.');
      console.error('Login error:', error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {isLoggedIn ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <Write />
        </div>
      ) : (
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-bold">Login</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading}
                className="group  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center"
              >
               {isLoading &&  <Loader2 className='animate-spin text-md mx-2'/>}
                Login
              </button>
            </div>
          </form>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default App;
