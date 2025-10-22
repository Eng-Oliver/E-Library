import { BookCard } from "./BookCard";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { ChevronDown, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface SearchResultsPageProps {
  onNavigateToBook: (bookId: string) => void;
  onBack: () => void;
}

export function SearchResultsPage({ onNavigateToBook, onBack }: SearchResultsPageProps) {
  const [showFilters, setShowFilters] = useState(true);

  const books = [
    {
      id: "s-1",
      title: "السر",
      author: "روندا بايرن",
      category: "تطوير ذات",
      rating: 4.8,
      coverUrl: "https://images.unsplash.com/photo-1546913760-e23d946dd386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwaGVscCUyMGJvb2t8ZW58MXx8fHwxNzYxMDY5MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s-2",
      title: "العادات الذرية",
      author: "جيمس كلير",
      category: "تطوير ذات",
      rating: 4.9,
      coverUrl: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA1OTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s-3",
      title: "قواعد العشق الأربعون",
      author: "أليف شافاق",
      category: "رواية",
      rating: 4.8,
      coverUrl: "https://images.unsplash.com/photo-1708591835196-1123f3689e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2t8ZW58MXx8fHwxNzYxMDMzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s-4",
      title: "مئة عام من العزلة",
      author: "غابرييل غارسيا ماركيز",
      category: "رواية",
      rating: 4.9,
      coverUrl: "https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZXxlbnwxfHx8fDE3NjEwNjY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s-5",
      title: "فن اللامبالاة",
      author: "مارك مانسون",
      category: "تطوير ذات",
      rating: 4.5,
      coverUrl: "https://images.unsplash.com/photo-1657388452493-6ca36b8278f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2MTA0NTU3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s-6",
      title: "1984",
      author: "جورج أورويل",
      category: "رواية",
      rating: 4.7,
      coverUrl: "https://images.unsplash.com/photo-1725870475677-7dc91efe9f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA5NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s-7",
      title: "قوة العقل الباطن",
      author: "جوزيف ميرفي",
      category: "تطوير ذات",
      rating: 4.7,
      coverUrl: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2MTA1OTM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s-8",
      title: "الخيميائي",
      author: "باولو كويلو",
      category: "رواية",
      rating: 4.6,
      coverUrl: "https://images.unsplash.com/photo-1708591835196-1123f3689e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2t8ZW58MXx8fHwxNzYxMDMzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const categories = [
    { id: "cat-1", label: "تطوير ذات", count: 156 },
    { id: "cat-2", label: "رواية", count: 243 },
    { id: "cat-3", label: "علمية", count: 89 },
    { id: "cat-4", label: "تاريخ", count: 72 },
    { id: "cat-5", label: "فلسفة", count: 45 },
  ];

  const authors = [
    { id: "auth-1", label: "روندا بايرن" },
    { id: "auth-2", label: "جيمس كلير" },
    { id: "auth-3", label: "أليف شافاق" },
    { id: "auth-4", label: "غابرييل غارسيا ماركيز" },
    { id: "auth-5", label: "مارك مانسون" },
  ];

  const languages = [
    { id: "lang-1", label: "العربية" },
    { id: "lang-2", label: "English" },
    { id: "lang-3", label: "Français" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4 ml-2" />
              تصفية
            </Button>
            <p className="text-gray-600">وجدنا {books.length} نتيجة</p>
          </div>
          <h2>نتائج البحث</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className={`md:col-span-1 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <Card className="p-4 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" />
                <h3>تصفية النتائج</h3>
              </div>

              <Separator className="mb-4" />

              {/* Categories Filter */}
              <div className="mb-6">
                <h4 className="mb-3">التصنيف</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between">
                      <Label
                        htmlFor={category.id}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Checkbox id={category.id} />
                        <span>{category.label}</span>
                      </Label>
                      <span className="text-gray-500">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="mb-4" />

              {/* Authors Filter */}
              <div className="mb-6">
                <h4 className="mb-3">المؤلف</h4>
                <div className="space-y-2">
                  {authors.map((author) => (
                    <Label
                      key={author.id}
                      htmlFor={author.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox id={author.id} />
                      <span>{author.label}</span>
                    </Label>
                  ))}
                </div>
              </div>

              <Separator className="mb-4" />

              {/* Language Filter */}
              <div className="mb-6">
                <h4 className="mb-3">اللغة</h4>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <Label
                      key={language.id}
                      htmlFor={language.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox id={language.id} />
                      <span>{language.label}</span>
                    </Label>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                style={{ borderColor: 'var(--primary-blue)', color: 'var(--primary-blue)' }}
              >
                إعادة تعيين الفلاتر
              </Button>
            </Card>
          </aside>

          {/* Results Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  {...book}
                  onClick={() => onNavigateToBook(book.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline" disabled>
                السابق
              </Button>
              <Button variant="outline" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">التالي</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
