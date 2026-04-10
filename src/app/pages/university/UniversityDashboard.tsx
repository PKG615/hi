import {
  Users,
  GraduationCap,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  BookOpen,
  Award,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const stats = [
  {
    title: 'Active Students',
    value: '842',
    total: '/ 1000 licenses',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Faculty Members',
    value: '45',
    change: '+3 this month',
    trend: 'up',
    icon: GraduationCap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Active Courses',
    value: '128',
    change: '+8 new',
    trend: 'up',
    icon: BookOpen,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Certificates Issued',
    value: '234',
    change: '+45 this month',
    trend: 'up',
    icon: Award,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const enrollmentData = [
  { month: 'Jan', students: 650 },
  { month: 'Feb', students: 720 },
  { month: 'Mar', students: 780 },
  { month: 'Apr', students: 842 },
];

const departmentData = [
  { name: 'Computer Science', students: 320, color: '#3b82f6' },
  { name: 'Engineering', students: 280, color: '#8b5cf6' },
  { name: 'Business', students: 150, color: '#10b981' },
  { name: 'Arts', students: 92, color: '#f59e0b' },
];

const courseEngagement = [
  { course: 'Web Development', completion: 85, enrolled: 120 },
  { course: 'Data Science', completion: 72, enrolled: 95 },
  { course: 'Mobile Development', completion: 68, enrolled: 80 },
  { course: 'Cloud Computing', completion: 91, enrolled: 70 },
];

const recentActivities = [
  { action: 'New student enrollment', details: '25 students from CS Dept', time: '10 mins ago', type: 'enrollment' },
  { action: 'License allocation', details: 'Engineering Dept - 50 licenses', time: '2 hours ago', type: 'license' },
  { action: 'Course completion', details: '15 students completed React course', time: '5 hours ago', type: 'completion' },
  { action: 'Faculty added', details: 'Dr. Sarah Johnson joined', time: '1 day ago', type: 'faculty' },
];

export function UniversityDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">University Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your institutional learning management</p>
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
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  {stat.total && <span className="text-sm text-gray-500">{stat.total}</span>}
                </div>
                <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Student Enrollment Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Student Enrollment Trend</CardTitle>
            <CardDescription>Active students over the past 4 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
            <CardDescription>Students by department</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, students }) => `${name}: ${students}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="students"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Course Engagement */}
      <Card>
        <CardHeader>
          <CardTitle>Top Courses by Engagement</CardTitle>
          <CardDescription>Course completion rates and enrollment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courseEngagement.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{course.course}</p>
                    <p className="text-sm text-gray-600">{course.enrolled} students enrolled</p>
                  </div>
                  <Badge variant="secondary">{course.completion}% completion</Badge>
                </div>
                <Progress value={course.completion} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities and License Info */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates across your institution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'enrollment' ? 'bg-blue-100' :
                    activity.type === 'license' ? 'bg-purple-100' :
                    activity.type === 'completion' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    {activity.type === 'enrollment' && <Users className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'license' && <CreditCard className="w-5 h-5 text-purple-600" />}
                    {activity.type === 'completion' && <Award className="w-5 h-5 text-green-600" />}
                    {activity.type === 'faculty' && <GraduationCap className="w-5 h-5 text-orange-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.details}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* License Summary */}
        <Card>
          <CardHeader>
            <CardTitle>License Summary</CardTitle>
            <CardDescription>Current plan details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Total Licenses</span>
                <span className="text-2xl font-bold">1000</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Active</span>
                <span className="font-semibold text-green-600">842</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Available</span>
                <span className="font-semibold text-blue-600">158</span>
              </div>
              <Progress value={84.2} className="h-2 mt-4" />
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Plan Type</span>
                <Badge>Enterprise</Badge>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Renewal Date</span>
                <span className="text-sm font-medium">Dec 31, 2026</span>
              </div>
            </div>

            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Upgrade Plan
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
