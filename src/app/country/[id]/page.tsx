import { getCountries } from "@/app/utils/utils";
import BackBtn from "@/components/back-btn";
import { Country } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const allCountries = await getCountries();

  const findCountry = async () => {
    return allCountries.find(
      (country) => country.numericCode === params.id
    ) as Country;
  };

  const country = await findCountry();
  const countryBorders = country.borders ?? [];

  const filteredCountryBorders = allCountries.filter((country) =>
    countryBorders.includes(country.alpha3Code)
  );
  const filteredCountryNames = filteredCountryBorders.map(
    (country) => country.name
  );
  console.log(country);
  console.log(filteredCountryNames);

  const languagesString = country.languages
    .map((language) => language.name)
    .join(", ");

  return (
    <main className="mt-8 md:mt-[6vh] mb-10 px-6 dark:text-white max-w-[1440px] mx-auto">
      <BackBtn />
      <section className="mt-12 md:mt-[6vh] text-left md:flex md:items-center md:justify-center md:gap-14">
        <div className="max-w-[560px] md:max-w-[unset] md:w-1/2 mx-auto md:mx-0">
          <Image
            src={country.flags.svg}
            alt={country.name}
            className="object-cover"
            width="560"
            height="320"
            layout="responsive"
            sizes="(max-width:768px) calc(100vw - 48px), 560px"
          />
        </div>
        <div className="mx-auto md:w-1/2">
          <h2 className="text-xl font-extrabold my-8 md:text-2xl">
            {country.name}
          </h2>
          <div className="md:flex">
            <div className="md:w-1/2">
              <p className="mb-2 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">
                  Native Name:
                </span>{" "}
                {country.nativeName}
              </p>
              <p className="mb-2 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="mb-2 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">Region:</span>{" "}
                {country.region}
              </p>
              <p className="mb-2 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p className="mb-10 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>

            <div className="md:w-1/2">
              <p className="mb-2 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">
                  Top Level Domain:
                </span>{" "}
                {country.topLevelDomain}
              </p>
              <p className="mb-2 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">Currencies:</span>{" "}
                {country.currencies[0].name}
              </p>
              <p className="mb-2 dark:text-[#d4e1ea]">
                <span className="font-bold dark:text-[white]">Languages:</span>{" "}
                {languagesString}
              </p>
            </div>
          </div>
          {filteredCountryBorders.length > 0 && (
            <div className="md:flex">
              <h3 className="mt-10 md:mt-0 text-lg font-bold min-w-[14ch]">
                Border Countries:
              </h3>
              <div className="mt-4 md:mt-0 pl-4 flex flex-wrap gap-4">
                {filteredCountryBorders.map((country) => (
                  <Link
                    key={country.numericCode}
                    href={`/country/${country.numericCode}`}
                    className="px-6 py-1 custom-shadow flex-grow text-center dark:bg-[#2b3743] transition duration-200 ease-in-out hover:bg-[#EBEBEB] dark:hover:bg-[gray-700]"
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
