import { Link } from 'react-router';
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen, 
  Brain, 
  Trophy, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const features = [
  {
    icon: BookOpen,
    title: 'Structured Learning Paths',
    description: 'Follow step-by-step roadmaps designed to take you from beginner to job-ready professional',
  },
  {
    icon: Brain,
    title: 'AI-Powered Mentor',
    description: 'Get personalized guidance, doubt resolution, and career advice from our intelligent AI assistant',
  },
  {
    icon: Trophy,
    title: 'Gamified Learning',
    description: 'Earn XP, badges, and compete on leaderboards while learning new skills',
  },
  {
    icon: Award,
    title: 'Industry Certificates',
    description: 'Earn verified certificates upon course completion to boost your career prospects',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Book live sessions with industry professionals and experienced instructors',
  },
  {
    icon: Target,
    title: 'Goal-Oriented Learning',
    description: 'Choose your career goal and get a customized learning path to achieve it',
  },
];

const roadmaps = [
  { name: 'Full Stack Web Development', students: '12.5k', duration: '6 months', color: 'from-blue-500 to-cyan-500' },
  { name: 'Data Science & ML', students: '8.3k', duration: '8 months', color: 'from-purple-500 to-pink-500' },
  { name: 'AI Engineering', students: '5.2k', duration: '10 months', color: 'from-orange-500 to-red-500' },
  { name: 'Cloud & DevOps', students: '6.7k', duration: '5 months', color: 'from-green-500 to-teal-500' },
];

const stats = [
  { value: '50k+', label: 'Active Learners' },
  { value: '200+', label: 'Expert Courses' },
  { value: '95%', label: 'Success Rate' },
  { value: '100+', label: 'University Partners' },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">EduPath AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#roadmaps" className="text-gray-600 hover:text-gray-900">Roadmaps</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#universities" className="text-gray-600 hover:text-gray-900">For Universities</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/signup">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Learning Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Career with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI-Guided Learning</span>
              </h1>
              <p className="text-xl text-gray-600">
                Follow structured career roadmaps, learn from expert courses, and get personalized guidance 
                from AI mentors. From beginner to job-ready in months, not years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="gap-2 text-lg px-8 h-14">
                    Start Learning Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  View Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758612214882-03f8a1d7211f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwb25saW5lJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NTcyNDE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600">Powerful features designed for modern learners</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmaps Section */}
      <section id="roadmaps" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Career Roadmaps</h2>
            <p className="text-xl text-gray-600">Choose your path and start your journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmaps.map((roadmap, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className={`h-32 bg-gradient-to-br ${roadmap.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{roadmap.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {roadmap.students} students
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      {roadmap.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">For Universities & Institutions</h2>
              <p className="text-xl text-blue-100">
                Deploy our AI-powered LMS across your institution. Manage thousands of students, 
                track progress, and deliver world-class education at scale.
              </p>
              <div className="space-y-4">
                {[
                  'Bulk student license management',
                  'Department & batch-wise assignment',
                  'Detailed analytics & reporting',
                  'Faculty monitoring tools',
                  'Custom branding options',
                  'Priority support & training',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 mt-4">
                Request Demo
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzc1NzE0MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="University campus"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Individual Plan */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual</h3>
                <p className="text-gray-600 mb-6">Perfect for solo learners</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['All courses access', 'AI mentor support', 'Certificates', 'Assignments & projects'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600 mb-6">For serious learners</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Everything in Individual', 'Live mentorship', 'Priority support', 'Career guidance', 'Mock interviews'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* University Plan */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">University</h3>
                <p className="text-gray-600 mb-6">For institutions</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Bulk licenses', 'Admin dashboard', 'Analytics & reports', 'Custom branding', 'Dedicated support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who are already on their path to success
          </p>
          <Link to="/signup">
            <Button size="lg" className="gap-2 text-lg px-12 h-14">
              Start Learning Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6" />
              <span className="text-xl font-bold">EduPath AI</span>
            </div>
            <p className="text-gray-400">
              Transforming education with AI-powered learning paths
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Roadmaps</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 EduPath AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
