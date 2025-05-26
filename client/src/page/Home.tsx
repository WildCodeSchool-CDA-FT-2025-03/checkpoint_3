import ListeCountries from '../components/Countries/ListeCountries';
import FormCounty from '../components/Country/FormCountry';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <FormCounty />
      <ListeCountries />
    </div>
  );
}