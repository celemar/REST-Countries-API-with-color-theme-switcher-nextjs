import { getCountries } from "@/app/utils/utils";
import BackBtn from "@/components/back-btn";
import { Country } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const allCountries = await getCountries();

  const findCountry = async () => {
    return allCountries.find(
      (country) => country.name === params.id
    ) as Country;
  };

  const country = await findCountry();
  const borderCountries = country.borders;

  const filteredBorderCountries = allCountries.filter((country) =>
    borderCountries.includes(country.alpha3Code)
  );
  const filteredCountryNames = filteredBorderCountries.map(
    (country) => country.name
  );
  console.log(country)
  console.log(filteredCountryNames);

  const languagesString = country.languages
    .map((language) => language.name)
    .join(", ");

  return (
    <main className="mt-8 mb-10 px-6 dark:text-white">
      <BackBtn />
      <section className="mt-12 text-left">
        <div className="mx-auto max-w-[530px]">
          <Image
            src={country.flags.svg}
            alt={country.name}
            className="object-cover"
            width="530"
            height="320"
          />
        </div>
        <div className="mt-10 mx-auto">
          <h2 className="text-xl font-extrabold my-6">{country.name}</h2>
          <p className="mb-2">
            <span className="font-semibold">Native Name:</span>{" "}
            {country.nativeName}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Sub Region:</span>{" "}
            {country.subregion}
          </p>
          <p className="mb-10">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {country.topLevelDomain}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Currencies:</span>{" "}
            {country.currencies[0].name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Languages:</span> {languagesString}
          </p>
        </div>

        <h3 className="mt-10 text-lg">
          <span className="font-bold">Border Countries: </span>
        </h3>

        <div className="mt-4 flex flex-wrap gap-4">
          {filteredBorderCountries.map((country) => (
            <Link
              key={country.numericCode}
              href={`/country/${encodeURIComponent(country.name)}`}
              className="px-6 py-1  shadow-md flex-grow text-center dark:bg-[#2b3743]"
            >
              {country.name}
            </Link>
          ))}
        </div>
      {filteredBorderCountries.length > 0 && (
          <>
            <h3 className="mt-10 text-lg">
              <span className="font-bold">Border Countries: </span>
            </h3>

            <div className="mt-4 flex flex-wrap gap-4">
              {filteredBorderCountries.map((country) => (
                <Link
                  key={country.numericCode}
                  href={`/country/${country.name}`}
                  className="px-6 py-1 shadow-md flex-grow text-center dark:bg-[#2b3743]"
                >
                  {country.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
