import { SignupForm } from "@/components/authentication/signup-form";

export default function Home() {
  return (
    <div className="font-sans flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm/>
      </div>
    </div>
  );
}
