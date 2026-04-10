import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 12500, courses: 45, completions: 450 },
  { month: 'Feb', users: 15200, courses: 52, completions: 580 },
  { month: 'Mar', users: 18400, courses: 58, completions: 720 },
  { month: 'Apr', users: 21800, courses: 64, completions: 890 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Platform Analytics</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">21.8K</div>
            <p className="text-sm text-gray-600">Total Users</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <BookOpen className="w-8 h-8 text-green-600 mb-2" />
            <div className="text-2xl font-bold">64</div>
            <p className="text-sm text-gray-600">Active Courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <Award className="w-8 h-8 text-purple-600 mb-2" />
            <div className="text-2xl font-bold">890</div>
            <p className="text-sm text-gray-600">Completions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
            <div className="text-2xl font-bold">+24%</div>
            <p className="text-sm text-gray-600">Growth Rate</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
