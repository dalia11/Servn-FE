import { Signup } from "@/services/actions/authActions";

export default function SignupPage() {
  return (
<main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Create Account
      </h1>
      <p className="text-gray-500 mt-2">
        Join us and get started today!
      </p>
    </div>

    <form action={Signup} className="space-y-5">

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          autoComplete="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
          autoComplete="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Create a password"
          minLength={8}
          required
          autoComplete="new-password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          minLength={8}
          required
          autoComplete="new-password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="mt-1 accent-blue-600"
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms & Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
      >
        Create Account
      </button>

    </form>

    <p className="text-center text-sm text-gray-500 mt-6">
      Already have an account?{" "}
      <a href="/auth/login" className="text-blue-600 font-semibold hover:underline">
        Sign in
      </a>
    </p>

  </div>
</main>
  );
}