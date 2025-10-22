import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { BookDetailsPage } from "./components/BookDetailsPage";
import { LoginPage } from "./components/LoginPage";
import { SearchResultsPage } from "./components/SearchResultsPage";
import { MyLibraryPage } from "./components/MyLibraryPage";
import { AdminLoginPage } from "./components/admin/AdminLoginPage";
import { AdminSidebar } from "./components/admin/AdminSidebar";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { BookManagement } from "./components/admin/BookManagement";
import { CategoryManagement } from "./components/admin/CategoryManagement";
import { UserManagement } from "./components/admin/UserManagement";
import { Button } from "./components/ui/button";
import { Shield, User } from "lucide-react";

type UserPage = "home" | "book-details" | "login" | "search" | "library";
type AdminPage = "dashboard" | "books" | "categories" | "users";
type Mode = "user" | "admin" | "admin-login";

export default function App() {
  const [mode, setMode] = useState<Mode>("user");
  const [currentUserPage, setCurrentUserPage] = useState<UserPage>("home");
  const [currentAdminPage, setCurrentAdminPage] = useState<AdminPage>("dashboard");
  const [selectedBookId, setSelectedBookId] = useState<string>("1");

  const handleUserNavigate = (page: string) => {
    setCurrentUserPage(page as UserPage);
  };

  const handleAdminNavigate = (page: string) => {
    setCurrentAdminPage(page as AdminPage);
  };

  const handleNavigateToBook = (bookId: string) => {
    setSelectedBookId(bookId);
    setCurrentUserPage("book-details");
  };

  const handleBack = () => {
    setCurrentUserPage("home");
  };

  const handleAdminLogin = () => {
    setMode("admin");
    setCurrentAdminPage("dashboard");
  };

  const handleAdminLogout = () => {
    setMode("admin-login");
  };

  const handleSwitchToUser = () => {
    setMode("user");
    setCurrentUserPage("home");
  };

  const handleSwitchToAdmin = () => {
    setMode("admin-login");
  };

  // Mode Switcher (visible on user interface)
  const ModeSwitcher = () => (
    <div className="fixed bottom-6 left-6 z-50 flex gap-2">
      {mode === "user" && (
        <Button
          onClick={handleSwitchToAdmin}
          className="shadow-lg"
          style={{ backgroundColor: 'var(--primary-blue)' }}
        >
          <Shield className="w-4 h-4 ml-2" />
          دخول المسؤول
        </Button>
      )}
      {(mode === "admin" || mode === "admin-login") && (
        <Button
          onClick={handleSwitchToUser}
          className="shadow-lg"
          variant="outline"
        >
          <User className="w-4 h-4 ml-2" />
          موقع المستخدمين
        </Button>
      )}
    </div>
  );

  // Render Admin Login
  if (mode === "admin-login") {
    return (
      <>
        <AdminLoginPage onLogin={handleAdminLogin} />
        <ModeSwitcher />
      </>
    );
  }

  // Render Admin Dashboard
  if (mode === "admin") {
    return (
      <div className="flex h-screen bg-gray-50" dir="rtl">
        <AdminSidebar
          currentPage={currentAdminPage}
          onNavigate={handleAdminNavigate}
          onLogout={handleAdminLogout}
        />
        <main className="flex-1 overflow-y-auto">
          {currentAdminPage === "dashboard" && <AdminDashboard />}
          {currentAdminPage === "books" && <BookManagement />}
          {currentAdminPage === "categories" && <CategoryManagement />}
          {currentAdminPage === "users" && <UserManagement />}
        </main>
        <ModeSwitcher />
      </div>
    );
  }

  // Render User Interface
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {currentUserPage !== "login" && (
        <Header
          currentPage={currentUserPage}
          onNavigate={handleUserNavigate}
          isRTL={true}
        />
      )}

      {currentUserPage === "home" && (
        <HomePage onNavigateToBook={handleNavigateToBook} />
      )}

      {currentUserPage === "book-details" && (
        <BookDetailsPage
          bookId={selectedBookId}
          onNavigateToBook={handleNavigateToBook}
          onBack={handleBack}
        />
      )}

      {currentUserPage === "login" && <LoginPage onBack={handleBack} />}

      {currentUserPage === "search" && (
        <SearchResultsPage
          onNavigateToBook={handleNavigateToBook}
          onBack={handleBack}
        />
      )}

      {currentUserPage === "library" && (
        <MyLibraryPage
          onNavigateToBook={handleNavigateToBook}
          onBack={handleBack}
        />
      )}

      <ModeSwitcher />
    </div>
  );
}
