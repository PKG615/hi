import { SignupCarousel } from '../components/SignupCarousel';
import { SignupForm } from '../components/SignupForm';

export function SignupPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Panel - Visual Carousel */}
      <div className="hidden lg:block lg:w-1/2 xl:w-3/5">
        <SignupCarousel />
      </div>

      {/* Right Panel - Signup Form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <SignupForm />
      </div>
    </div>
  );
}
