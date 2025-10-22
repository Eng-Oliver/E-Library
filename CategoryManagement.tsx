import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
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
import { Badge } from "../ui/badge";
import { Plus, Edit, Trash2, FolderTree } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  bookCount: number;
}

export function CategoryManagement() {
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "رواية", description: "الروايات والقصص الأدبية", bookCount: 243 },
    { id: "2", name: "تطوير ذات", description: "كتب التنمية البشرية وتطوير الذات", bookCount: 156 },
    { id: "3", name: "علمية", description: "الكتب العلمية والأكاديمية", bookCount: 89 },
    { id: "4", name: "تاريخ", description: "كتب التاريخ والسير الذاتية", bookCount: 72 },
    { id: "5", name: "فلسفة", description: "الكتب الفلسفية والفكرية", bookCount: 45 },
    { id: "6", name: "أطفال", description: "قصص وكتب الأطفال", bookCount: 128 },
    { id: "7", name: "طبخ", description: "كتب الطبخ والوصفات", bookCount: 34 },
    { id: "8", name: "رياضة", description: "كتب الرياضة واللياقة البدنية", bookCount: 27 },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleAdd = () => {
    setSelectedCategory(null);
    setFormData({
      name: "",
      description: "",
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (category: Category) => {
    setSelectedCategory(category);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory) {
      setCategories(categories.map(c => 
        c.id === selectedCategory.id 
          ? { ...selectedCategory, ...formData }
          : c
      ));
    } else {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        bookCount: 0,
      };
      setCategories([...categories, newCategory]);
    }
    setIsDialogOpen(false);
  };

  const confirmDelete = () => {
    if (selectedCategory) {
      setCategories(categories.filter(c => c.id !== selectedCategory.id));
    }
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="p-6" dir="rtl">
      <div className="mb-6">
        <h1 className="mb-2">إدارة التصنيفات</h1>
        <p className="text-gray-600">إضافة وتعديل وحذف تصنيفات الكتب</p>
      </div>

      <Card className="p-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <FolderTree className="w-5 h-5" style={{ color: 'var(--primary-blue)' }} />
            <h3>جميع التصنيفات ({categories.length})</h3>
          </div>
          <Button
            onClick={handleAdd}
            style={{ backgroundColor: 'var(--primary-blue)' }}
          >
            <Plus className="w-5 h-5 ml-2" />
            إضافة تصنيف جديد
          </Button>
        </div>

        {/* Categories Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الإجراءات</TableHead>
                <TableHead className="text-right">عدد الكتب</TableHead>
                <TableHead className="text-right">الوصف</TableHead>
                <TableHead className="text-right">اسم التصنيف</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(category)}
                        className="border-[var(--ai-accent-blue)] text-[var(--ai-accent-blue)]"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(category)}
                        className="border-red-500 text-red-500"
                        disabled={category.bookCount > 0}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{category.bookCount}</Badge>
                  </TableCell>
                  <TableCell className="max-w-md">
                    <p className="text-gray-600 line-clamp-2">{category.description}</p>
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent dir="rtl">
          <DialogHeader>
            <DialogTitle>
              {selectedCategory ? 'تعديل التصنيف' : 'إضافة تصنيف جديد'}
            </DialogTitle>
            <DialogDescription>
              {selectedCategory ? 'تحديث معلومات التصنيف' : 'إضافة تصنيف جديد للمكتبة'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">اسم التصنيف *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="مثال: رواية"
                  className="text-right"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">الوصف *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="وصف مختصر للتصنيف..."
                  className="text-right resize-none"
                  rows={4}
                  required
                />
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                إلغاء
              </Button>
              <Button
                type="submit"
                style={{ backgroundColor: 'var(--primary-blue)' }}
              >
                {selectedCategory ? 'حفظ التعديلات' : 'إضافة التصنيف'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent dir="rtl">
          <AlertDialogHeader>
            <AlertDialogTitle>هل أنت متأكد؟</AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              {selectedCategory?.bookCount && selectedCategory.bookCount > 0 ? (
                <span className="text-red-600">
                  لا يمكن حذف هذا التصنيف لأنه يحتوي على {selectedCategory.bookCount} كتاب. 
                  قم بنقل الكتب إلى تصنيف آخر أولاً.
                </span>
              ) : (
                `سيتم حذف التصنيف "${selectedCategory?.name}" نهائياً. هذا الإجراء لا يمكن التراجع عنه.`
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            {(!selectedCategory?.bookCount || selectedCategory.bookCount === 0) && (
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
