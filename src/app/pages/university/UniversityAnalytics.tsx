import { TrendingUp, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', enrollments: 120, completions: 45, activeUsers: 650 },
  { month: 'Feb', enrollments: 150, completions: 62, activeUsers: 720 },
  { month: 'Mar', enrollments: 180, completions: 78, activeUsers: 780 },
  { month: 'Apr', enrollments: 200, completions: 95, activeUsers: 842 },
];

export function UniversityAnalytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics & Reports</h1>
      
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">842</div>
            <p className="text-sm text-gray-600">Active Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <BookOpen className="w-8 h-8 text-green-600 mb-2" />
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-sm text-gray-600">Course Enrollments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <Award className="w-8 h-8 text-purple-600 mb-2" />
            <div className="text-2xl font-bold">234</div>
            <p className="text-sm text-gray-600">Certificates Issued</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
            <div className="text-2xl font-bold">76%</div>
            <p className="text-sm text-gray-600">Avg Completion Rate</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enrollment Trends</CardTitle>
          <CardDescription>Monthly student enrollment and completion data</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="enrollments" stroke="#3b82f6" strokeWidth={2} name="Enrollments" />
              <Line type="monotone" dataKey="completions" stroke="#10b981" strokeWidth={2} name="Completions" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Users</CardTitle>
          <CardDescription>Monthly active user growth</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="activeUsers" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
