import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { Credentials, JWTRes } from "./types"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import {env} from "@/env"

export function SigninForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSignIn = async (guest:boolean=false) => {
    setLoading(true);
    try {

      const credentials: Credentials = {
        email: email,
        password: password,
      };

      const { data, error } = await supabase.auth.signInWithPassword({
        email: guest ? env.VITE_GUEST_EMAIL : credentials.email,
        password: guest? env.VITE_GUEST_PASSWORD : credentials.password,
      });

      if (error) {
        setError(error.message);
        console.error("Sign in failed", error);
      } else {
        console.log("User data:", data);
        const token: JWTRes = data.session;
        localStorage.setItem("token", token.access_token);
        setError("");
        navigate("/events/");
      }
    } catch (err) {
      console.error("Unexpected error during sign-in:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Card className="w-full max-w-md shadow-lg rounded-lg bg-white p-6">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-gray-800">
          Sign In
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">
          Enter your credentials below to sign in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="John@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="*********"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button
            onClick={()=>handleSignIn()}
            className="w-full flex items-center justify-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
              "Sign In"
            )}
          </Button>
          <Button
            onClick={()=>handleSignIn(true)}
            className="w-full flex items-center justify-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
            disabled={loading}
          >
              Sign In with guest
          </Button>
          {error && (
            <div className="text-red-500 text-center mt-2">{error}</div>
          )}
        </div>
      </CardContent>
      <CardFooter className="grid gap-2">
        <div className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            to="/sign-up"
            className="underline text-blue-600 hover:text-blue-700"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
