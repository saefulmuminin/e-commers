// components/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: React.FC) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
