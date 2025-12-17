// app/login/page.tsx

import { LoginCard } from "@/components/auth/login-card";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100">
      <Suspense fallback={null}>
        <LoginCard />
      </Suspense>
    </div>
  );
}
