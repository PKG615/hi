import { useState } from 'react';
import { Search, Filter, Download, Upload, UserPlus, MoreVertical, Mail, Ban } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

const students = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@stanford.edu',
    studentId: 'STU2024001',
    department: 'Computer Science',
    batch: '2024',
    enrolledCourses: 5,
    completedCourses: 3,
    progress: 75,
    status: 'active',
    licenseStatus: 'active',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.s@stanford.edu',
    studentId: 'STU2024002',
    department: 'Engineering',
    batch: '2024',
    enrolledCourses: 4,
    completedCourses: 2,
    progress: 60,
    status: 'active',
    licenseStatus: 'active',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.b@stanford.edu',
    studentId: 'STU2024003',
    department: 'Computer Science',
    batch: '2023',
    enrolledCourses: 6,
    completedCourses: 4,
    progress: 85,
    status: 'active',
    licenseStatus: 'active',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.p@stanford.edu',
    studentId: 'STU2024004',
    department: 'Business',
    batch: '2024',
    enrolledCourses: 3,
    completedCourses: 1,
    progress: 40,
    status: 'inactive',
    licenseStatus: 'expired',
  },
];

export function StudentManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showBulkImportModal, setShowBulkImportModal] = useState(false);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600 mt-1">Manage student enrollments and licenses</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2" onClick={() => setShowBulkImportModal(true)}>
            <Upload className="w-4 h-4" />
            Bulk Import
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Button className="gap-2">
            <UserPlus className="w-4 h-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-gray-900">842</div>
            <p className="text-sm text-gray-600 mt-1">Total Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">795</div>
            <p className="text-sm text-gray-600 mt-1">Active Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-orange-600">47</div>
            <p className="text-sm text-gray-600 mt-1">Inactive Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">128</div>
            <p className="text-sm text-gray-600 mt-1">New This Month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search by name, email, or student ID..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select className="h-10 px-3 border border-gray-200 rounded-lg text-sm">
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Engineering</option>
                <option>Business</option>
              </select>
              <select className="h-10 px-3 border border-gray-200 rounded-lg text-sm">
                <option>All Batches</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
              <select className="h-10 px-3 border border-gray-200 rounded-lg text-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Students ({filteredStudents.length})</CardTitle>
            <Button variant="ghost" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Student
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Department / Batch
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Courses
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Progress
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Status
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    License
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.email}</p>
                        <p className="text-xs text-gray-500">{student.studentId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{student.department}</p>
                        <p className="text-xs text-gray-600">Batch {student.batch}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">{student.enrolledCourses}</span>
                        <span className="text-gray-600"> enrolled</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {student.completedCourses} completed
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Progress value={student.progress} className="h-2 flex-1 max-w-[100px]" />
                        <span className="text-sm font-medium text-gray-600">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge 
                        variant={student.licenseStatus === 'active' ? 'default' : 'secondary'}
                        className={student.licenseStatus === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 'bg-red-100 text-red-800 hover:bg-red-100'}
                      >
                        {student.licenseStatus}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Mail className="w-4 h-4" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            Assign Course
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            Manage License
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2 text-red-600">
                            <Ban className="w-4 h-4" />
                            Deactivate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Import Modal */}
      {showBulkImportModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Bulk Import Students</CardTitle>
              <p className="text-sm text-gray-600">Upload a CSV file to import multiple students at once</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Drag and drop your CSV file here, or click to browse</p>
                <Button variant="outline" size="sm">Choose File</Button>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-900 mb-2">CSV Format:</p>
                <p className="text-xs text-blue-700">
                  Name, Email, Student ID, Department, Batch
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowBulkImportModal(false)}>
                  Cancel
                </Button>
                <Button className="flex-1">Import Students</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
