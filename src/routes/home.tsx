import { SigninForm } from "@/components/auth/sign-in";

export default function HomeRoute() {
  return (
    <main className="flex justify-center flex-col items-center w-full space-y-2 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-gray-800 mt-16 tracking-tight">
        Event Calendar App
      </h1>
      <SigninForm />
    </main>
  );
}
