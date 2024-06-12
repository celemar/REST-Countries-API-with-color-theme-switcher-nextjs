import Image from "next/image";
import Link from "next/link";
import { getCountries } from "@/app/utils/utils";

export default async function CountriesList() {

  const countries = await getCountries();
  
  return (
    <main className="mt-16">
      <div>
        {countries.map((country) => (
          <div
            key={country.numericCode}
            className="flex flex-col mx-auto mb-8 shadow rounded-md"
          >
            <Image
              src={country.flags.svg}
              key={country.numericCode}
              alt={country.name}
              className="max-w-[325px] max-h-[200px] object-cover rounded-t-md"
              width="530"
              height="320"
            />
            <div className="flex flex-col bg-[white] dark:bg-[#2b3743] dark:text-[white] max-w-[325px] px-5 py-6 rounded-b-md pb-10">
              <Link
                href={`/country/${encodeURIComponent(country.name)}`}
                className="font-extrabold pb-5 text-lg pointer hover:underline"
              >
                {country.name}
              </Link>
              <p>
                <span className="font-semibold">Population:</span>
                {country.population}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>
                {country.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
