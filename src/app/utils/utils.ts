import fs from "fs/promises";
import path from "path";
import { Country, CountriesParams } from "@/types";

export const getCountries = async (
  params: CountriesParams = {}
): Promise<Country[]> => {
  const filePath = path.resolve(process.cwd(), "src/app/data.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const countries = JSON.parse(fileContents) as Country[];

  if (params?.query) {
    const searchTerm = params.query.toLowerCase();
    return countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
  }

  if (params?.region) {
    return countries.filter((country) => country.region === params.region);
  }

  return countries;
};

