import DetailCountry from '../components/Country/DetailCountry';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { code } = useParams();
  if (code === undefined) {
    return <div className="flex items-center justify-center h-screen">Country not found</div>;
  }
  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Details Page</h1>
      <section className="flex flex-col gap-6 flex-1 min-w-[600px] max-w-[700px]">
        <DetailCountry code={code} />
      </section>
    </div>
  );
}