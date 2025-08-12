import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export interface Project {
 id: string;
 Nome: string;
 Desc: string;
 GitLink: string;
 Link: string;
 Imagem?: string;
 Tags?: string[];
 Prioridade: boolean;
}

export function useProjects() {
 const [projects, setProjects] = useState<Project[]>([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchProjects() {
   try {
    const q = query(collection(db, 'Projetos'), orderBy('Nome', 'asc'));
    const querySnapshot = await getDocs(q);
    const list = querySnapshot.docs.map(doc => ({
     id: doc.id,
     ...(doc.data() as Omit<Project, 'id'>),
    }));
    setProjects(list);
   } catch (error) {
    console.error('Eroo ao buscar projetos:', error);
   } finally {
    setLoading(false);
   }
  }

  fetchProjects();
 }, []);

 return { projects, loading };
}
