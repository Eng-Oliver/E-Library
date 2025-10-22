import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { BookOpen, Lock, Mail, Shield } from "lucide-react";

interface AdminLoginPageProps {
  onLogin: () => void;
}

export function AdminLoginPage({ onLogin }: AdminLoginPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-blue)] to-[var(--ai-accent-blue)] flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-10 h-10" style={{ color: 'var(--primary-blue)' }} />
            <div className="text-center">
              <div className="font-bold" style={{ color: 'var(--primary-blue)' }}>
                لوحة تحكم المسؤول
              </div>
              <p className="text-gray-600">نظام المكتبة الإلكترونية</p>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-center" style={{ color: 'var(--primary-blue)' }}>
            تسجيل دخول آمن للمسؤولين فقط
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="admin-email">البريد الإلكتروني</Label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="admin-email"
                type="email"
                placeholder="admin@elibrary.com"
                className="pr-10 text-right"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="admin-password">كلمة المرور</Label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="admin-password"
                type="password"
                placeholder="••••••••"
                className="pr-10 text-right"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="hover:underline"
              style={{ color: 'var(--primary-blue)' }}
            >
              نسيت كلمة المرور؟
            </a>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>تذكرني</span>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            style={{ backgroundColor: 'var(--primary-blue)' }}
          >
            <Shield className="w-5 h-5 ml-2" />
            تسجيل دخول المسؤول
          </Button>
        </form>

        <div className="mt-6 text-center text-gray-500">
          <p>مخصص للمسؤولين المعتمدين فقط</p>
        </div>
      </Card>
    </div>
  );
}
