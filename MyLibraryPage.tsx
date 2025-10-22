import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { BookCard } from "./BookCard";
import {
  Clock,
  Download,
  Heart,
  Settings,
  User,
  Bell,
  Globe,
  Moon,
} from "lucide-react";

interface MyLibraryPageProps {
  onNavigateToBook: (bookId: string) => void;
  onBack: () => void;
}

export function MyLibraryPage({ onNavigateToBook, onBack }: MyLibraryPageProps) {
  const readingHistory = [
    {
      id: "rh-1",
      title: "السر",
      author: "روندا بايرن",
      category: "تطوير ذات",
      rating: 4.8,
      coverUrl: "https://images.unsplash.com/photo-1546913760-e23d946dd386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwaGVscCUyMGJvb2t8ZW58MXx8fHwxNzYxMDY5MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 75,
      lastRead: "منذ ساعتين",
    },
    {
      id: "rh-2",
      title: "العادات الذرية",
      author: "جيمس كلير",
      category: "تطوير ذات",
      rating: 4.9,
      coverUrl: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA1OTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 45,
      lastRead: "منذ يوم",
    },
    {
      id: "rh-3",
      title: "قواعد العشق الأربعون",
      author: "أليف شافاق",
      category: "رواية",
      rating: 4.8,
      coverUrl: "https://images.unsplash.com/photo-1708591835196-1123f3689e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2t8ZW58MXx8fHwxNzYxMDMzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 100,
      lastRead: "منذ 3 أيام",
    },
  ];

  const downloads = [
    {
      id: "d-1",
      title: "فن اللامبالاة",
      author: "مارك مانسون",
      category: "تطوير ذات",
      rating: 4.5,
      coverUrl: "https://images.unsplash.com/photo-1657388452493-6ca36b8278f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2MTA0NTU3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "d-2",
      title: "1984",
      author: "جورج أورويل",
      category: "رواية",
      rating: 4.7,
      coverUrl: "https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZXxlbnwxfHx8fDE3NjEwNjY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "d-3",
      title: "قوة العقل الباطن",
      author: "جوزيف ميرفي",
      category: "تطوير ذات",
      rating: 4.7,
      coverUrl: "https://images.unsplash.com/photo-1725870475677-7dc91efe9f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA5NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const wishlist = [
    {
      id: "w-1",
      title: "الخيميائي",
      author: "باولو كويلو",
      category: "رواية",
      rating: 4.6,
      coverUrl: "https://images.unsplash.com/photo-1708591835196-1123f3689e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2t8ZW58MXx8fHwxNzYxMDMzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "w-2",
      title: "قوة الآن",
      author: "إيكهارت تول",
      category: "تطوير ذات",
      rating: 4.6,
      coverUrl: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA1OTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "w-3",
      title: "مئة عام من العزلة",
      author: "غابرييل غارسيا ماركيز",
      category: "رواية",
      rating: 4.9,
      coverUrl: "https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZXxlbnwxfHx8fDE3NjEwNjY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="" />
              <AvatarFallback className="bg-[var(--primary-blue)] text-white text-2xl">
                أم
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-right">
              <h2 className="mb-2">أحمد محمد</h2>
              <p className="text-gray-600 mb-4">ahmed.mohamed@example.com</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <div className="mb-1" style={{ color: 'var(--primary-blue)' }}>
                    45
                  </div>
                  <p className="text-gray-600">كتاب مقروء</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="mb-1" style={{ color: 'var(--primary-blue)' }}>
                    12
                  </div>
                  <p className="text-gray-600">كتاب محمّل</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="mb-1" style={{ color: 'var(--primary-blue)' }}>
                    28
                  </div>
                  <p className="text-gray-600">في قائمة الأمنيات</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Settings className="w-4 h-4" />
              الإعدادات
            </Button>
          </div>
        </Card>

        {/* Library Tabs */}
        <Tabs defaultValue="history" className="w-full" dir="rtl">
          <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
            <TabsTrigger value="history" className="gap-2">
              <Clock className="w-4 h-4" />
              سجل القراءة
            </TabsTrigger>
            <TabsTrigger value="downloads" className="gap-2">
              <Download className="w-4 h-4" />
              تحميلاتي
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="gap-2">
              <Heart className="w-4 h-4" />
              مفضلتي
            </TabsTrigger>
          </TabsList>

          {/* Reading History Tab */}
          <TabsContent value="history">
            <div className="space-y-4">
              {readingHistory.map((book) => (
                <Card
                  key={book.id}
                  className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => onNavigateToBook(book.id)}
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="mb-1">{book.title}</h3>
                          <p className="text-gray-600">{book.author}</p>
                        </div>
                        <Badge variant="secondary">{book.category}</Badge>
                      </div>
                      <p className="text-gray-500 mb-3">{book.lastRead}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>{book.progress}%</span>
                          <span className="text-gray-500">تقدم القراءة</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${book.progress}%`,
                              backgroundColor: 'var(--primary-blue)',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Downloads Tab */}
          <TabsContent value="downloads">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {downloads.map((book) => (
                <BookCard
                  key={book.id}
                  {...book}
                  onClick={() => onNavigateToBook(book.id)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {wishlist.map((book) => (
                <BookCard
                  key={book.id}
                  {...book}
                  onClick={() => onNavigateToBook(book.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Settings Section */}
        <Card className="p-6 mt-8">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="w-5 h-5" />
            <h3>إعدادات الحساب</h3>
          </div>

          <div className="space-y-6">
            {/* Language Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <div>
                  <Label>اللغة</Label>
                  <p className="text-gray-600">اختر لغة الواجهة</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-lg">
                <button className="px-4 py-2 rounded-md bg-white shadow-sm transition-all">
                  العربية
                </button>
                <button className="px-4 py-2 rounded-md hover:bg-white/50 transition-all">
                  English
                </button>
              </div>
            </div>

            <Separator />

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-600" />
                <div>
                  <Label>الوضع الليلي</Label>
                  <p className="text-gray-600">تفعيل الوضع المظلم</p>
                </div>
              </div>
              <Switch />
            </div>

            <Separator />

            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <Label>الإشعارات</Label>
                  <p className="text-gray-600">استلام إشعارات حول الكتب الجديدة</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
