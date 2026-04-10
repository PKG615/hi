import { Building2, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';

const departments = [
  { id: 1, name: 'Computer Science', head: 'Dr. Robert Johnson', students: 320, faculty: 12, courses: 45, licenseAllocation: 350, color: 'from-blue-500 to-cyan-500' },
  { id: 2, name: 'Engineering', head: 'Prof. Sarah Williams', students: 280, faculty: 10, courses: 38, licenseAllocation: 300, color: 'from-purple-500 to-pink-500' },
  { id: 3, name: 'Business Administration', head: 'Dr. Michael Chen', students: 150, faculty: 8, courses: 28, licenseAllocation: 200, color: 'from-green-500 to-teal-500' },
];

export function DepartmentManagement() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Department Management</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map(dept => (
          <Card key={dept.id} className="overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center`}>
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{dept.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Head: {dept.head}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-1">
                    <Users className="w-4 h-4" /> Students
                  </span>
                  <span className="font-semibold">{dept.students}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-1">
                    <BookOpen className="w-4 h-4" /> Courses
                  </span>
                  <span className="font-semibold">{dept.courses}</span>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">License Usage</span>
                    <span className="font-semibold">{dept.students}/{dept.licenseAllocation}</span>
                  </div>
                  <Progress value={(dept.students / dept.licenseAllocation) * 100} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
