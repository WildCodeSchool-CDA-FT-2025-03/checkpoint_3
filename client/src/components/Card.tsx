type Country = {
  name: string;
  flag: string;
}

export default function Card({name, flag} : Country) {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{flag}</p>
      </div>
    </div>
  );
}
