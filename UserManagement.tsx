import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Eye, Edit, Trash2, Search, UserCog, Ban, CheckCircle } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
  booksRead: number;
  status: "active" | "suspended" | "banned";
  role: "user" | "admin";
}

export function UserManagement() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "أحمد محمد", email: "ahmed@example.com", registrationDate: "2024-01-15", booksRead: 45, status: "active", role: "user" },
    { id: "2", name: "سارة علي", email: "sara@example.com", registrationDate: "2024-02-20", booksRead: 32, status: "active", role: "user" },
    { id: "3", name: "محمد خالد", email: "mohamed@example.com", registrationDate: "2024-03-10", booksRead: 28, status: "active", role: "user" },
    { id: "4", name: "فاطمة أحمد", email: "fatima@example.com", registrationDate: "2024-04-05", booksRead: 15, status: "suspended", role: "user" },
    { id: "5", name: "عمر حسن", email: "omar@example.com", registrationDate: "2024-05-12", booksRead: 52, status: "active", role: "admin" },
  ]);

  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [editStatus, setEditStatus] = useState<string>("");
  const [editRole, setEditRole] = useState<string>("");

  const handleView = (user: User) => {
    setSelectedUser(user);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEditStatus(user.status);
    setEditRole(user.role);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (user: User) => {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleStatusChange = () => {
    if (selectedUser) {
      setUsers(users.map(u => 
        u.id === selectedUser.id 
          ? { ...u, status: editStatus as User["status"], role: editRole as User["role"] }
          : u
      ));
    }
    setIsEditDialogOpen(false);
  };

  const confirmDelete = () => {
    if (selectedUser) {
      setUsers(users.filter(u => u.id !== selectedUser.id));
    }
    setIsDeleteDialogOpen(false);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-50 text-green-700 border-green-200">نشط</Badge>;
      case "suspended":
        return <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">معلق</Badge>;
      case "banned":
        return <Badge className="bg-red-50 text-red-700 border-red-200">محظور</Badge>;
    }
  };

  const getRoleBadge = (role: User["role"]) => {
    return role === "admin" 
      ? <Badge className="bg-purple-50 text-purple-700 border-purple-200">مسؤول</Badge>
      : <Badge variant="secondary">مستخدم</Badge>;
  };

  return (
    <div className="p-6" dir="rtl">
      <div className="mb-6">
        <h1 className="mb-2">إدارة المستخدمين</h1>
        <p className="text-gray-600">عرض وإدارة حسابات المستخدمين</p>
      </div>

      <Card className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div className="flex gap-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن مستخدم..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 text-right"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px] text-right">
                <SelectValue placeholder="تصفية حسب الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="suspended">معلق</SelectItem>
                <SelectItem value="banned">محظور</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <UserCog className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">إجمالي المستخدمين: {users.length}</span>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الإجراءات</TableHead>
                <TableHead className="text-right">الصلاحية</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الكتب المقروءة</TableHead>
                <TableHead className="text-right">تاريخ التسجيل</TableHead>
                <TableHead className="text-right">البريد الإلكتروني</TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleView(user)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(user)}
                        className="border-[var(--ai-accent-blue)] text-[var(--ai-accent-blue)]"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(user)}
                        className="border-red-500 text-red-500"
                        disabled={user.role === "admin"}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>{user.booksRead}</TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-[var(--primary-blue)] text-white text-xs">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            لا توجد نتائج للبحث
          </div>
        )}
      </Card>

      {/* View User Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent dir="rtl">
          <DialogHeader>
            <DialogTitle>تفاصيل المستخدم</DialogTitle>
            <DialogDescription>عرض المعلومات الكاملة للمستخدم</DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-[var(--primary-blue)] text-white text-xl">
                    {selectedUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3>{selectedUser.name}</h3>
                  <p className="text-gray-600">{selectedUser.email}</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-600">تاريخ التسجيل</Label>
                  <p>{selectedUser.registrationDate}</p>
                </div>
                <div>
                  <Label className="text-gray-600">الكتب المقروءة</Label>
                  <p>{selectedUser.booksRead}</p>
                </div>
                <div>
                  <Label className="text-gray-600">الحالة</Label>
                  <div className="mt-1">{getStatusBadge(selectedUser.status)}</div>
                </div>
                <div>
                  <Label className="text-gray-600">الصلاحية</Label>
                  <div className="mt-1">{getRoleBadge(selectedUser.role)}</div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              إغلاق
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Status Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent dir="rtl">
          <DialogHeader>
            <DialogTitle>تعديل حالة المستخدم</DialogTitle>
            <DialogDescription>تغيير حالة وصلاحية المستخدم</DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-[var(--primary-blue)] text-white">
                    {selectedUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p>{selectedUser.name}</p>
                  <p className="text-gray-600">{selectedUser.email}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>الحالة</Label>
                <Select value={editStatus} onValueChange={setEditStatus}>
                  <SelectTrigger className="text-right">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>نشط</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="suspended">
                      <div className="flex items-center gap-2">
                        <Ban className="w-4 h-4 text-yellow-600" />
                        <span>معلق</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="banned">
                      <div className="flex items-center gap-2">
                        <Ban className="w-4 h-4 text-red-600" />
                        <span>محظور</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>الصلاحية</Label>
                <Select value={editRole} onValueChange={setEditRole}>
                  <SelectTrigger className="text-right">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">مستخدم</SelectItem>
                    <SelectItem value="admin">مسؤول</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              إلغاء
            </Button>
            <Button
              onClick={handleStatusChange}
              style={{ backgroundColor: 'var(--primary-blue)' }}
            >
              حفظ التعديلات
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent dir="rtl">
          <AlertDialogHeader>
            <AlertDialogTitle>هل أنت متأكد؟</AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              {selectedUser?.role === "admin" ? (
                <span className="text-red-600">
                  لا يمكن حذف حساب المسؤول. قم بتغيير الصلاحية أولاً.
                </span>
              ) : (
                `سيتم حذف حساب المستخدم "${selectedUser?.name}" نهائياً. هذا الإجراء لا يمكن التراجع عنه.`
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            {selectedUser?.role !== "admin" && (
              <AlertDialogAction
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600"
              >
                حذف
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
