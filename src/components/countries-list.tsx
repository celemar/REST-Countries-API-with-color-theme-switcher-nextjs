import Image from "next/image";
import Link from "next/link";
import { getCountries } from "@/app/utils/utils";
import { CountriesParams } from "@/types";

export default async function CountriesList({
  query,
  region,
}: CountriesParams) {
  const countries = await getCountries({ query, region });

  return (
    <section>
      <div className="flex gap-8 flex-wrap lg:px-10">
        {countries.map((country) => (
          <div
            key={country.numericCode}
            className="flex flex-col mx-auto mb-8 shadow rounded-md max-w-[350px] max-h-[350px] bg-white dark:bg-[#2b3743]"
          >
            <div className="w-[265px] max-h-[160px] h-full ">
              <Image
                src={country.flags.svg}
                key={country.numericCode}
                alt={country.name}
                className="w-full h-full object-cover rounded-t-md"
                width="265"
                height="200"
              />
            </div>

            <div className="flex flex-col bg-[white] dark:bg-[#2b3743] dark:text-[white] w-[265px] px-5 py-6 rounded-b-md mt-auto">
              <Link
                href={`/country/${country.numericCode}`}
                className="font-extrabold pb-5 text-lg pointer hover:underline"
              >
                {country.name}
              </Link>
              <p className="font-light dark:text-[#d4e1ea]">
                <span className="font-semibold dark:text-[white]">
                  Population:{" "}
                </span>
                {country.population}
              </p>
              <p className="font-light dark:text-[#d4e1ea]">
                <span className="font-semibold dark:text-[white]">Region:</span>{" "}
                {country.region}
              </p>
              <p className="font-light dark:text-[#d4e1ea]">
                <span className="font-semibold dark:text-[white]">
                  Capital:{" "}
                </span>
                {country.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
