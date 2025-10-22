import { BookCard } from "./BookCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface HomePageProps {
  onNavigateToBook: (bookId: string) => void;
}

export function HomePage({ onNavigateToBook }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aiRecommendations = [
    {
      id: "ai-1",
      title: "السر",
      author: "روندا بايرن",
      category: "تطوير ذات",
      rating: 4.8,
      coverUrl: "https://images.unsplash.com/photo-1546913760-e23d946dd386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwaGVscCUyMGJvb2t8ZW58MXx8fHwxNzYxMDY5MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ai-2",
      title: "العادات الذرية",
      author: "جيمس كلير",
      category: "تطوير ذات",
      rating: 4.9,
      coverUrl: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA1OTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ai-3",
      title: "قوة العقل الباطن",
      author: "جوزيف ميرفي",
      category: "تطوير ذات",
      rating: 4.7,
      coverUrl: "https://images.unsplash.com/photo-1708591835196-1123f3689e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2t8ZW58MXx8fHwxNzYxMDMzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const topFiction = [
    {
      id: "f-1",
      title: "قواعد العشق الأربعون",
      author: "أليف شافاق",
      category: "رواية",
      rating: 4.8,
      coverUrl: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA1OTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "f-2",
      title: "مئة عام من العزلة",
      author: "غابرييل غارسيا ماركيز",
      category: "رواية",
      rating: 4.9,
      coverUrl: "https://images.unsplash.com/photo-1708591835196-1123f3689e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2t8ZW58MXx8fHwxNzYxMDMzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "f-3",
      title: "1984",
      author: "جورج أورويل",
      category: "رواية",
      rating: 4.7,
      coverUrl: "https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZXxlbnwxfHx8fDE3NjEwNjY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "f-4",
      title: "الخيميائي",
      author: "باولو كويلو",
      category: "رواية",
      rating: 4.6,
      coverUrl: "https://images.unsplash.com/photo-1657388452493-6ca36b8278f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2MTA0NTU3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const newSelfDev = [
    {
      id: "sd-1",
      title: "فن اللامبالاة",
      author: "مارك مانسون",
      category: "تطوير ذات",
      rating: 4.5,
      coverUrl: "https://images.unsplash.com/photo-1546913760-e23d946dd386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwaGVscCUyMGJvb2t8ZW58MXx8fHwxNzYxMDY5MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isNew: true,
    },
    {
      id: "sd-2",
      title: "العقل المنظم",
      author: "دانييل ليفيتين",
      category: "تطوير ذات",
      rating: 4.4,
      coverUrl: "https://images.unsplash.com/photo-1725870475677-7dc91efe9f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA5NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      isNew: true,
    },
    {
      id: "sd-3",
      title: "قوة الآن",
      author: "إيكهارت تول",
      category: "تطوير ذات",
      rating: 4.6,
      coverUrl: "https://images.unsplash.com/photo-1657388452493-6ca36b8278f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2MTA0NTU3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      isNew: true,
    },
    {
      id: "sd-4",
      title: "كيف تكسب الأصدقاء",
      author: "ديل كارنيجي",
      category: "تطوير ذات",
      rating: 4.8,
      coverUrl: "https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZXxlbnwxfHx8fDE3NjEwNjY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* AI Recommendations Hero Carousel */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A3A6F 0%, #4DB8FF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[var(--ai-accent-blue)]" />
            <h2 className="text-white">نرشح لك خصيصاً</h2>
            <Badge className="bg-[var(--ai-accent-blue)] text-white border-none mr-2">
              بواسطة الذكاء الاصطناعي
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiRecommendations.map((book) => (
              <Card key={book.id} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/20 transition-all cursor-pointer" onClick={() => onNavigateToBook(book.id)}>
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-right text-white">
                    <h3 className="mb-2 text-white">{book.title}</h3>
                    <p className="text-white/80 mb-3">{book.author}</p>
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-yellow-400 ${i < Math.floor(book.rating) ? 'opacity-100' : 'opacity-30'}`}>★</span>
                      ))}
                      <span className="mr-2">{book.rating}</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-white hover:bg-gray-100"
                      style={{ color: 'var(--primary-blue)' }}
                    >
                      اقرأ الآن
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Top Fiction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" className="hover:bg-gray-100">
            عرض الكل ←
          </Button>
          <h2>الأكثر قراءة في الروايات</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {topFiction.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onClick={() => onNavigateToBook(book.id)}
            />
          ))}
        </div>
      </section>

      {/* New Self-Development Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" className="hover:bg-gray-100">
            عرض الكل ←
          </Button>
          <h2>جديد في تطوير الذات</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {newSelfDev.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onClick={() => onNavigateToBook(book.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
