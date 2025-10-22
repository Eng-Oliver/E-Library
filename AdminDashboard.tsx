import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  BookOpen,
  Users,
  FolderTree,
  TrendingUp,
  Star,
  MessageSquare,
} from "lucide-react";

export function AdminDashboard() {
  const stats = [
    {
      id: 1,
      title: "إجمالي المستخدمين",
      value: "2,453",
      change: "+12%",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "إجمالي الكتب",
      value: "1,847",
      change: "+5%",
      icon: BookOpen,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "إجمالي التصنيفات",
      value: "24",
      change: "+2",
      icon: FolderTree,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "التقييمات الجديدة",
      value: "156",
      change: "+8%",
      icon: Star,
      color: "bg-yellow-500",
    },
  ];

  const latestReviews = [
    {
      id: 1,
      user: "أحمد محمد",
      book: "السر",
      rating: 5,
      comment: "كتاب رائع غير حياتي بالكامل!",
      date: "منذ ساعتين",
      status: "pending",
    },
    {
      id: 2,
      user: "سارة علي",
      book: "العادات الذرية",
      rating: 4,
      comment: "محتوى مفيد جداً وأسلوب سلس في الكتابة.",
      date: "منذ 4 ساعات",
      status: "approved",
    },
    {
      id: 3,
      user: "محمد خالد",
      book: "قواعد العشق الأربعون",
      rating: 5,
      comment: "من أفضل الروايات التي قرأتها.",
      date: "منذ 6 ساعات",
      status: "approved",
    },
    {
      id: 4,
      user: "فاطمة أحمد",
      book: "فن اللامبالاة",
      rating: 3,
      comment: "كتاب جيد لكن ليس بالمستوى المتوقع.",
      date: "منذ يوم",
      status: "pending",
    },
  ];

  const recentActivity = [
    { id: 1, action: "تم إضافة كتاب جديد", item: "قوة الآن", time: "منذ ساعة" },
    { id: 2, action: "تسجيل مستخدم جديد", item: "محمد علي", time: "منذ ساعتين" },
    { id: 3, action: "تحديث تصنيف", item: "علوم", time: "منذ 3 ساعات" },
    { id: 4, action: "حذف تقييم", item: "تقييم غير لائق", time: "منذ 5 ساعات" },
  ];

  return (
    <div className="p-6" dir="rtl">
      <div className="mb-6">
        <h1 className="mb-2">لوحة التحكم الرئيسية</h1>
        <p className="text-gray-600">مرحباً بك في نظام إدارة المكتبة الإلكترونية</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  {stat.change}
                </Badge>
              </div>
              <p className="text-gray-600 mb-1">{stat.title}</p>
              <h2>{stat.value}</h2>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Reviews */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5" style={{ color: 'var(--primary-blue)' }} />
            <h3>أحدث التقييمات</h3>
          </div>
          <Separator className="mb-4" />
          <div className="space-y-4">
            {latestReviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="mb-1">{review.user}</p>
                    <p className="text-gray-600">{review.book}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <Badge
                      variant={review.status === 'approved' ? 'secondary' : 'outline'}
                      className={
                        review.status === 'approved'
                          ? 'bg-green-50 text-green-700 border-green-200'
                          : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                      }
                    >
                      {review.status === 'approved' ? 'معتمد' : 'قيد المراجعة'}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <p className="text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5" style={{ color: 'var(--primary-blue)' }} />
            <h3>النشاط الأخير</h3>
          </div>
          <Separator className="mb-4" />
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 rounded-full bg-[var(--ai-accent-blue)] mt-2" />
                <div className="flex-1">
                  <p className="mb-1">{activity.action}</p>
                  <p className="text-gray-600">{activity.item}</p>
                  <p className="text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
