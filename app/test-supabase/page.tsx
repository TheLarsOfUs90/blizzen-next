'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestSupabase() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error(error);
      else setMembers(data || []);

      setLoading(false);
    }

    fetchMembers();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">Supabase Members Test</h1>
      {loading ? (
        <p>Lade Mitglieder...</p>
      ) : (
        <div>
          <p>Anzahl Mitglieder: {members.length}</p>
          <pre className="bg-gray-900 p-4 rounded mt-4 overflow-auto">
            {JSON.stringify(members, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}