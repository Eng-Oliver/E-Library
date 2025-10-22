import { Star, Heart, Download, Headphones, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { BookCard } from "./BookCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookDetailsPageProps {
  bookId: string;
  onNavigateToBook: (bookId: string) => void;
  onBack: () => void;
}

export function BookDetailsPage({ bookId, onNavigateToBook, onBack }: BookDetailsPageProps) {
  const book = {
    id: bookId,
    title: "السر",
    author: "روندا بايرن",
    category: "تطوير ذات",
    rating: 4.8,
    reviewsCount: 2453,
    coverUrl: "https://images.unsplash.com/photo-1546913760-e23d946dd386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwaGVscCUyMGJvb2t8ZW58MXx8fHwxNzYxMDY5MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    summary: "يكشف هذا الكتاب السر الأعظم في الكون، وهو قانون الجذب. يعلمك كيف تستخدم قوة عقلك لتحقيق كل ما تريده في الحياة. من خلال تقنيات بسيطة وفعالة، ستتعلم كيف تجذب الصحة والثروة والسعادة إلى حياتك.",
    pages: 198,
    language: "العربية",
    publishYear: 2006,
  };

  const reviews = [
    {
      id: "r1",
      user: "أحمد محمد",
      rating: 5,
      comment: "كتاب رائع غير حياتي بالكامل! أنصح به بشدة لكل من يريد تحسين حياته.",
      date: "منذ أسبوع",
    },
    {
      id: "r2",
      user: "سارة علي",
      rating: 4,
      comment: "محتوى مفيد جداً وأسلوب سلس في الكتابة. استفدت كثيراً من التمارين العملية.",
      date: "منذ أسبوعين",
    },
    {
      id: "r3",
      user: "محمد خالد",
      rating: 5,
      comment: "من أفضل كتب التطوير الذاتي التي قرأتها. معلومات قيمة ومفيدة.",
      date: "منذ شهر",
    },
  ];

  const similarBooks = [
    {
      id: "sim-1",
      title: "العادات الذرية",
      author: "جيمس كلير",
      category: "تطوير ذات",
      rating: 4.9,
      coverUrl: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA1OTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "sim-2",
      title: "قوة العقل الباطن",
      author: "جوزيف ميرفي",
      category: "تطوير ذات",
      rating: 4.7,
      coverUrl: "https://images.unsplash.com/photo-1708591835196-1123f3689e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2t8ZW58MXx8fHwxNzYxMDMzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "sim-3",
      title: "فن اللامبالاة",
      author: "مارك مانسون",
      category: "تطوير ذات",
      rating: 4.5,
      coverUrl: "https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZXxlbnwxfHx8fDE3NjEwNjY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "sim-4",
      title: "قوة الآن",
      author: "إيكهارت تول",
      category: "تطوير ذات",
      rating: 4.6,
      coverUrl: "https://images.unsplash.com/photo-1657388452493-6ca36b8278f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2MTA0NTU3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <button onClick={onBack} className="hover:text-[var(--primary-blue)]">
              الرئيسية
            </button>
            <ChevronRight className="w-4 h-4" />
            <span>{book.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[var(--primary-blue)]">{book.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Book Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Book Cover */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-xl bg-gray-100">
                <ImageWithFallback
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Badge className="mb-3" style={{ backgroundColor: 'var(--ai-accent-blue)', color: 'white' }}>
                {book.category}
              </Badge>
              <h1 className="mb-2">{book.title}</h1>
              <p className="text-gray-600 mb-4">تأليف: {book.author}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(book.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span>{book.rating}</span>
                </div>
                <span className="text-gray-600">({book.reviewsCount} تقييم)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                size="lg"
                className="bg-[var(--primary-blue)] hover:bg-[var(--primary-blue)]/90"
              >
                اقرأ الآن
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--primary-blue)] text-[var(--primary-blue)]"
              >
                <Download className="w-5 h-5 ml-2" />
                تحميل
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--ai-accent-blue)] text-[var(--ai-accent-blue)]"
              >
                <Headphones className="w-5 h-5 ml-2" />
                استمع للكتاب
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5 ml-2" />
                إضافة للمفضلة
              </Button>
            </div>

            {/* Book Info Grid */}
            <Card className="p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-gray-600 mb-1">عدد الصفحات</p>
                  <p>{book.pages}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">اللغة</p>
                  <p>{book.language}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">سنة النشر</p>
                  <p>{book.publishYear}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">التقييم</p>
                  <p>{book.rating} / 5</p>
                </div>
              </div>
            </Card>

            {/* Book Summary */}
            <div className="mb-8">
              <h3 className="mb-4">ملخص الكتاب</h3>
              <p className="text-gray-700 leading-relaxed">{book.summary}</p>
            </div>

            <Separator className="my-8" />

            {/* Reviews Section */}
            <div>
              <h3 className="mb-6">آراء القراء</h3>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="mb-1">{review.user}</p>
                        <p className="text-gray-500">{review.date}</p>
                      </div>
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
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Books - AI Recommendations */}
        <section className="py-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6" style={{ color: 'var(--ai-accent-blue)' }} />
            <h2>قد يعجبك أيضاً</h2>
            <Badge style={{ backgroundColor: 'var(--ai-accent-blue)', color: 'white' }} className="border-none">
              توصيات AI
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {similarBooks.map((book) => (
              <BookCard
                key={book.id}
                {...book}
                onClick={() => onNavigateToBook(book.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
