import { Link } from 'react-router';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  Award,
  Play,
  CheckCircle,
  ArrowRight,
  Zap,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  {
    title: 'Courses Enrolled',
    value: '8',
    change: '+2 this month',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'XP Earned',
    value: '2,450',
    change: '+350 this week',
    icon: Zap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Completed',
    value: '12',
    change: '75% completion rate',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Certificates',
    value: '5',
    change: '+1 this month',
    icon: Award,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const activeRoadmaps = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    progress: 65,
    currentModule: 'React Advanced Concepts',
    totalModules: 12,
    completedModules: 8,
    estimatedTime: '2 weeks left',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Data Science & ML',
    progress: 35,
    currentModule: 'Python for Data Analysis',
    totalModules: 15,
    completedModules: 5,
    estimatedTime: '6 weeks left',
    color: 'from-purple-500 to-pink-500',
  },
];

const continueWatching = [
  {
    id: 1,
    title: 'Advanced React Hooks',
    course: 'React Mastery',
    progress: 45,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    duration: '2h 15m',
    lastWatched: '2 hours ago',
  },
  {
    id: 2,
    title: 'Neural Networks Basics',
    course: 'Deep Learning',
    progress: 20,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop',
    duration: '1h 45m',
    lastWatched: '1 day ago',
  },
];

const upcomingAssignments = [
  {
    id: 1,
    title: 'Build a Todo App with React',
    course: 'React Mastery',
    dueDate: 'Apr 15, 2026',
    status: 'pending',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Data Analysis Project',
    course: 'Python Data Science',
    dueDate: 'Apr 18, 2026',
    status: 'in-progress',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'ML Model Training',
    course: 'Machine Learning',
    dueDate: 'Apr 22, 2026',
    status: 'pending',
    priority: 'low',
  },
];

const learningActivity = [
  { day: 'Mon', hours: 2 },
  { day: 'Tue', hours: 3 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 4 },
  { day: 'Fri', hours: 2.5 },
  { day: 'Sat', hours: 5 },
  { day: 'Sun', hours: 3 },
];

const recentAchievements = [
  { title: 'Fast Learner', description: 'Completed 5 courses in a month', icon: '🚀', color: 'bg-blue-100' },
  { title: 'Perfect Score', description: 'Scored 100% in React Quiz', icon: '🎯', color: 'bg-green-100' },
  { title: 'Streak Master', description: '7-day learning streak', icon: '🔥', color: 'bg-orange-100' },
];

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John! 👋</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your learning journey</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
                <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Roadmaps */}
      <div className="grid lg:grid-cols-2 gap-6">
        {activeRoadmaps.map((roadmap) => (
          <Card key={roadmap.id} className="overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${roadmap.color}`}></div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{roadmap.name}</CardTitle>
                  <CardDescription className="mt-2">{roadmap.currentModule}</CardDescription>
                </div>
                <Badge variant="secondary">{roadmap.progress}%</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={roadmap.progress} className="h-2" />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{roadmap.completedModules}/{roadmap.totalModules} modules completed</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {roadmap.estimatedTime}
                </span>
              </div>
              <Link to={`/student/roadmaps/${roadmap.id}`}>
                <Button className="w-full gap-2">
                  Continue Learning
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Continue Watching */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Continue Watching</CardTitle>
            <Link to="/student/courses">
              <Button variant="ghost" size="sm" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {continueWatching.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden mb-3">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600">{video.course}</p>
                  <Progress value={video.progress} className="h-1" />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{video.progress}% complete</span>
                    <span>{video.lastWatched}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Learning Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Learning Activity</CardTitle>
            <CardDescription>Your study hours this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={learningActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Your latest badges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-10 h-10 ${achievement.color} rounded-lg flex items-center justify-center text-lg`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Assignments */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Upcoming Assignments</CardTitle>
            <Link to="/student/assignments">
              <Button variant="ghost" size="sm" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    assignment.priority === 'high' ? 'bg-red-500' :
                    assignment.priority === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                    <p className="text-sm text-gray-600">{assignment.course}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {assignment.dueDate}
                    </div>
                    <Badge variant={assignment.status === 'pending' ? 'secondary' : 'default'} className="mt-1">
                      {assignment.status}
                    </Badge>
                  </div>
                  <Button size="sm">Start</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
