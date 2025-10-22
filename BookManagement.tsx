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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { Plus, Edit, Trash2, Search, Upload } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  pages: number;
  language: string;
  publishYear: number;
}

export function BookManagement() {
  const [books, setBooks] = useState<Book[]>([
    { id: "1", title: "السر", author: "روندا بايرن", category: "تطوير ذات", pages: 198, language: "العربية", publishYear: 2006 },
    { id: "2", title: "العادات الذرية", author: "جيمس كلير", category: "تطوير ذات", pages: 320, language: "العربية", publishYear: 2018 },
    { id: "3", title: "قواعد العشق الأربعون", author: "أليف شافاق", category: "رواية", pages: 456, language: "العربية", publishYear: 2010 },
    { id: "4", title: "1984", author: "جورج أورويل", category: "رواية", pages: 328, language: "العربية", publishYear: 1949 },
    { id: "5", title: "فن اللامبالاة", author: "مارك مانسون", category: "تطوير ذات", pages: 224, language: "العربية", publishYear: 2016 },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    pages: "",
    language: "",
    publishYear: "",
  });

  const handleAdd = () => {
    setSelectedBook(null);
    setFormData({
      title: "",
      author: "",
      category: "",
      pages: "",
      language: "",
      publishYear: "",
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      category: book.category,
      pages: book.pages.toString(),
      language: book.language,
      publishYear: book.publishYear.toString(),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (book: Book) => {
    setSelectedBook(book);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBook) {
      setBooks(books.map(b => 
        b.id === selectedBook.id 
          ? { ...selectedBook, ...formData, pages: parseInt(formData.pages), publishYear: parseInt(formData.publishYear) }
          : b
      ));
    } else {
      const newBook: Book = {
        id: Date.now().toString(),
        title: formData.title,
        author: formData.author,
        category: formData.category,
        pages: parseInt(formData.pages),
        language: formData.language,
        publishYear: parseInt(formData.publishYear),
      };
      setBooks([...books, newBook]);
    }
    setIsDialogOpen(false);
  };

  const confirmDelete = () => {
    if (selectedBook) {
      setBooks(books.filter(b => b.id !== selectedBook.id));
    }
    setIsDeleteDialogOpen(false);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6" dir="rtl">
      <div className="mb-6">
        <h1 className="mb-2">إدارة الكتب</h1>
        <p className="text-gray-600">إضافة وتعديل وحذف الكتب من المكتبة</p>
      </div>

      <Card className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="ابحث عن كتاب أو مؤلف..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
          <Button
            onClick={handleAdd}
            style={{ backgroundColor: 'var(--primary-blue)' }}
          >
            <Plus className="w-5 h-5 ml-2" />
            إضافة كتاب جديد
          </Button>
        </div>

        {/* Books Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الإجراءات</TableHead>
                <TableHead className="text-right">سنة النشر</TableHead>
                <TableHead className="text-right">اللغة</TableHead>
                <TableHead className="text-right">الصفحات</TableHead>
                <TableHead className="text-right">التصنيف</TableHead>
                <TableHead className="text-right">المؤلف</TableHead>
                <TableHead className="text-right">العنوان</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBooks.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(book)}
                        className="border-[var(--ai-accent-blue)] text-[var(--ai-accent-blue)]"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(book)}
                        className="border-red-500 text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{book.publishYear}</TableCell>
                  <TableCell>{book.language}</TableCell>
                  <TableCell>{book.pages}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{book.category}</Badge>
                  </TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            لا توجد نتائج للبحث
          </div>
        )}
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl" dir="rtl">
          <DialogHeader>
            <DialogTitle>
              {selectedBook ? 'تعديل الكتاب' : 'إضافة كتاب جديد'}
            </DialogTitle>
            <DialogDescription>
              {selectedBook ? 'تحديث معلومات الكتاب' : 'إضافة كتاب جديد إلى المكتبة'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="title">عنوان الكتاب *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">المؤلف *</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">التصنيف *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر التصنيف" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="رواية">رواية</SelectItem>
                    <SelectItem value="تطوير ذات">تطوير ذات</SelectItem>
                    <SelectItem value="علمية">علمية</SelectItem>
                    <SelectItem value="تاريخ">تاريخ</SelectItem>
                    <SelectItem value="فلسفة">فلسفة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pages">عدد الصفحات *</Label>
                <Input
                  id="pages"
                  type="number"
                  value={formData.pages}
                  onChange={(e) => setFormData({ ...formData, pages: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">اللغة *</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => setFormData({ ...formData, language: value })}
                  required
                >
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر اللغة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="العربية">العربية</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Français">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="publishYear">سنة النشر *</Label>
                <Input
                  id="publishYear"
                  type="number"
                  value={formData.publishYear}
                  onChange={(e) => setFormData({ ...formData, publishYear: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="cover">صورة الغلاف</Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="cover"
                    type="file"
                    accept="image/*"
                    className="text-right"
                  />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="file">ملف الكتاب (PDF/EPUB)</Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf,.epub"
                    className="text-right"
                  />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
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
                {selectedBook ? 'حفظ التعديلات' : 'إضافة الكتاب'}
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
              سيتم حذف الكتاب "{selectedBook?.title}" نهائياً. هذا الإجراء لا يمكن التراجع عنه.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              حذف
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
