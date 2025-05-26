import { Continent } from "./entities/Continent";
import { Country } from "./entities/Country";
import { db } from "./db";

const continents = [
  { id: 1, name: "Europe" },
  { id: 2, name: "Asie" },
  { id: 3, name: "Afrique" },
  { id: 4, name: "Amérique du Nord" },
  { id: 5, name: "Amérique du Sud" },
  { id: 6, name: "Océanie" },
  { id: 7, name: "Antarctique" },
];

const countries = [
  {
    id: 1,
    name: "France",
    code: "FR",
    emoji: "🇫🇷",
    continentId: 1,
  },
  {
    id: 2,
    name: "Allemagne",
    code: "DE",
    emoji: "🇩🇪",
    continentId: 1,
  },
  {
    id: 3,
    name: "Italie",
    code: "IT",
    emoji: "🇮🇹",
    continentId: 1,
  },
  {
    id: 4,
    name: "Japon",
    code: "JP",
    emoji: "🇯🇵",
    continentId: 2,
  },
];

const resetDb = async () => {
  const continentRepository = db.getRepository(Continent);
  const countryRepository = db.getRepository(Country);

  await continentRepository.clear();
  await countryRepository.clear();

  await continentRepository.save(continents);
  await countryRepository.save(countries);

  console.info(`
📝 Base de données réinitialisée avec succès
✅ ${continents.length} continents créés
✅ ${countries.length} pays créés
  `);
};

resetDb();

async function main() {
  await db.initialize();
  await resetDb();

  const europe = await Continent.create({ name: "Europe" }).save();
  const asia = await Continent.create({ name: "Asia" }).save();
  const oc = await Continent.create({ name: "Oceania" }).save();
  const africa = await Continent.create({ name: "Africa" }).save();
  const na = await Continent.create({ name: "North America" }).save();
  const sa = await Continent.create({ name: "South America" }).save();

  const france = Country.create({
    name: "France",
    code: "FR",
    emoji: "🇫🇷",
  });
  const china = Country.create({
    name: "China",
    code: "CN",
    emoji: "🇨🇳",
  });
  const canada = Country.create({
    name: "Canada",
    code: "CA",
    emoji: "🇨🇦",
  });
  const aus = Country.create({
    name: "Australia",
    code: "AU",
    emoji: "🇦🇺",
  });
  const kenya = Country.create({
    name: "Kenya",
    code: "KE",
    emoji: "🇰🇪",
  });
  const brazil = Country.create({
    name: "Brazil",
    code: "BR",
    emoji: "🇧🇷",
  });

  france.continent = europe;
  china.continent = asia;
  canada.continent = na;
  aus.continent = oc;
  kenya.continent = africa;
  brazil.continent = sa;

  await france.save();
  await china.save();
  await canada.save();
  await aus.save();
  await kenya.save();
  await brazil.save();

  console.log("done !");
}

main();
