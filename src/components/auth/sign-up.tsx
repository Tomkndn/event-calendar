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
import { Credentials } from "./types"
import { useState } from "react"
import {supabase} from "@/lib/supabase"

export function SignupForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confPassword, setConfPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSignUp = async () => {
    if (confPassword !== password) {
      setError("Passwords must match!");
      return;
    }
    setLoading(true);
    try {
      const credentials: Credentials = {
        email: email,
        password: password,
      };

      const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        setError(error.message);
        console.error("Sign up failed", error);
      } else {
        console.log("User data:", data);
        setError("");
        navigate("/");
      }
    } catch (err) {
      console.error("Unexpected error during sign-up:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm sm:max-w-md shadow-lg rounded-lg bg-white p-4 sm:p-6">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
          Sign Up
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm text-center">
          Enter your credentials below to sign up.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:gap-6">
        <div className="grid gap-4 sm:gap-6">
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
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
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
              required
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password-conf" className="text-gray-700">
              Confirm Password
            </Label>
            <Input
              id="password-conf"
              name="password-conf"
              type="password"
              required
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="*******"
              className={`border p-3 rounded-md focus:ring-2 ${
                confPassword !== password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>
          <Button
            onClick={handleSignUp}
            className="w-full flex items-center justify-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </Button>
          {error && (
            <div className="text-red-500 text-center mt-2">{error}</div>
          )}
        </div>
      </CardContent>
      <CardFooter className="grid gap-2">
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="underline text-blue-600 hover:text-blue-700">
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
