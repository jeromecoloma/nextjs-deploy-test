import { Metadata } from 'next';
import React from 'react';
import { getHello } from '@/actions/actions';
import Hello from '@/components/hello';

export const metadata: Metadata = {
  title: "Hello",
};

export default async function Page() {

  const resultFromServerAction = await getHello();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl">Hello from Server Component</h1>

      <div className="mt-10 text-center">
        Result from server action:
        <div className="text-2xl">{resultFromServerAction}</div>
      </div>

      <Hello />
    </main>
  );
};
