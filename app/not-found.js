// app/not-found.js
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-xl mb-6">ขออภัย! ไม่พบหน้าที่คุณกำลังค้นหา</p>
      <Link href="/" className="text-orange-500 hover:underline">
        ← กลับไปหน้าแรก
      </Link>
    </div>
  );
}