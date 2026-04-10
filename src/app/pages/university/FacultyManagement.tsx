import { GraduationCap, Mail, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';

const faculty = [
  { id: 1, name: 'Dr. Robert Johnson', email: 'robert.j@stanford.edu', department: 'Computer Science', students: 85, courses: 4, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
  { id: 2, name: 'Prof. Sarah Williams', email: 'sarah.w@stanford.edu', department: 'Engineering', students: 72, courses: 3, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
];

export function FacultyManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Faculty Management</h1>
        <Button className="gap-2"><UserPlus className="w-4 h-4" /> Add Faculty</Button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {faculty.map(f => (
          <Card key={f.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={f.avatar} />
                  <AvatarFallback>{f.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{f.name}</h3>
                  <p className="text-sm text-gray-600">{f.email}</p>
                  <Badge variant="secondary" className="mt-2">{f.department}</Badge>
                  <div className="flex gap-4 mt-3 text-sm text-gray-600">
                    <span>{f.students} students</span>
                    <span>{f.courses} courses</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
