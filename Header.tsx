import { Search, Menu, User, BookOpen, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isRTL?: boolean;
}

export function Header({ currentPage, onNavigate, isRTL = true }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Navigation Links - Left side for RTL */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-[var(--primary-blue)] transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => onNavigate("search")}
              className="hover:text-[var(--primary-blue)] transition-colors"
            >
              التصنيفات
            </button>
            <button
              onClick={() => onNavigate("library")}
              className="hover:text-[var(--primary-blue)] transition-colors"
            >
              مكتبتي
            </button>
            <button
              onClick={() => onNavigate("login")}
              className="hover:text-[var(--primary-blue)] transition-colors flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              تسجيل دخول
            </button>
          </nav>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن كتاب، مؤلف، أو موضوع..."
                className="w-full pr-10 pl-4 py-2 bg-gray-50 border-gray-200 rounded-lg text-right"
              />
            </div>
          </div>

          {/* Logo - Right side for RTL */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8" style={{ color: 'var(--primary-blue)' }} />
              <div className="hidden sm:block text-right">
                <div className="font-bold" style={{ color: 'var(--primary-blue)' }}>
                  نظام المكتبة الإلكترونية
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
