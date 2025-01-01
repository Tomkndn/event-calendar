import { SigninForm } from "@/components/auth/sign-in";

export default function HomeRoute() {
  return (
    <main className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-tl from-teal-100 via-sky-100 to-blue-100 min-h-screen space-y-6">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mt-12 sm:mt-16 tracking-tight text-center">
        Event Calendar App
      </h1>
      <SigninForm />
    </main>
  );
}
