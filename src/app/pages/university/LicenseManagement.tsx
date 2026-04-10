import { useState } from 'react';
import {
  CreditCard,
  Download,
  Upload,
  Plus,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

const licenseOverview = {
  total: 1000,
  active: 842,
  available: 158,
  expired: 15,
  pending: 12,
  utilizationRate: 84.2,
};

const licenseAllocations = [
  {
    id: 1,
    department: 'Computer Science',
    allocated: 350,
    active: 320,
    available: 30,
    head: 'Dr. Robert Johnson',
  },
  {
    id: 2,
    department: 'Engineering',
    allocated: 300,
    active: 280,
    available: 20,
    head: 'Prof. Sarah Williams',
  },
  {
    id: 3,
    department: 'Business Administration',
    allocated: 200,
    active: 150,
    available: 50,
    head: 'Dr. Michael Chen',
  },
  {
    id: 4,
    department: 'Arts & Humanities',
    allocated: 150,
    active: 92,
    available: 58,
    head: 'Prof. Emily Davis',
  },
];

const recentTransactions = [
  { id: 1, action: 'License Allocation', department: 'Computer Science', count: 50, date: 'Apr 10, 2026', status: 'completed' },
  { id: 2, action: 'License Renewal', department: 'Engineering', count: 100, date: 'Apr 8, 2026', status: 'completed' },
  { id: 3, action: 'Bulk Import', department: 'Business', count: 25, date: 'Apr 5, 2026', status: 'pending' },
  { id: 4, action: 'License Revocation', department: 'Arts', count: 10, date: 'Apr 3, 2026', status: 'completed' },
];

const upcomingRenewals = [
  { department: 'Computer Science', licenses: 320, renewalDate: 'May 15, 2026', daysLeft: 35 },
  { department: 'Engineering', licenses: 280, renewalDate: 'Jun 1, 2026', daysLeft: 52 },
];

export function LicenseManagement() {
  const [showAllocationModal, setShowAllocationModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">License Management</h1>
          <p className="text-gray-600 mt-1">Manage student licenses and allocations</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button className="gap-2" onClick={() => setShowAllocationModal(true)}>
            <Plus className="w-4 h-4" />
            Allocate Licenses
          </Button>
        </div>
      </div>

      {/* License Overview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <CreditCard className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{licenseOverview.total}</div>
            <p className="text-sm text-gray-600 mt-1">Total Licenses</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{licenseOverview.active}</div>
            <p className="text-sm text-gray-600 mt-1">Active Licenses</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{licenseOverview.available}</div>
            <p className="text-sm text-gray-600 mt-1">Available</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{licenseOverview.expired}</div>
            <p className="text-sm text-gray-600 mt-1">Expired</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{licenseOverview.pending}</div>
            <p className="text-sm text-gray-600 mt-1">Pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Utilization Overview */}
      <Card>
        <CardHeader>
          <CardTitle>License Utilization</CardTitle>
          <CardDescription>Overall license usage across the institution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Utilization Rate</span>
              <span className="text-2xl font-bold text-blue-600">{licenseOverview.utilizationRate}%</span>
            </div>
            <Progress value={licenseOverview.utilizationRate} className="h-3" />
            <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
              <span>{licenseOverview.active} of {licenseOverview.total} licenses in use</span>
              <span>{licenseOverview.available} available</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Department-wise Allocation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Department-wise License Allocation</CardTitle>
              <CardDescription>License distribution across departments</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="w-4 h-4" />
              Bulk Import
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Department
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Department Head
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Allocated
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Active
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Available
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Utilization
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {licenseAllocations.map((allocation) => {
                  const utilization = ((allocation.active / allocation.allocated) * 100).toFixed(1);
                  return (
                    <tr key={allocation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">{allocation.department}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{allocation.head}</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="secondary">{allocation.allocated}</Badge>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-medium text-green-600">{allocation.active}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-medium text-blue-600">{allocation.available}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Progress value={parseFloat(utilization)} className="h-2 flex-1" />
                          <span className="text-sm font-medium text-gray-600">{utilization}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm">Manage</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest license activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{transaction.action}</p>
                    <p className="text-xs text-gray-600">{transaction.department} • {transaction.count} licenses</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">{transaction.date}</span>
                    <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Renewals */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Renewals</CardTitle>
            <CardDescription>Licenses due for renewal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingRenewals.map((renewal, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-gray-900">{renewal.department}</p>
                      <p className="text-sm text-gray-600">{renewal.licenses} licenses</p>
                    </div>
                    <Badge variant={renewal.daysLeft < 30 ? 'destructive' : 'secondary'}>
                      {renewal.daysLeft} days left
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Renewal Date: {renewal.renewalDate}
                  </div>
                  <Button size="sm" className="w-full mt-3">Renew Now</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Allocation Modal (simplified version) */}
      {showAllocationModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Allocate Licenses</CardTitle>
              <CardDescription>Assign licenses to a department</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Department</Label>
                <select className="w-full h-10 px-3 border border-gray-200 rounded-lg">
                  <option>Computer Science</option>
                  <option>Engineering</option>
                  <option>Business Administration</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Number of Licenses</Label>
                <Input type="number" placeholder="Enter number of licenses" />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowAllocationModal(false)}>
                  Cancel
                </Button>
                <Button className="flex-1" onClick={() => setShowAllocationModal(false)}>
                  Allocate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
