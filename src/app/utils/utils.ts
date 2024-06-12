import fs from "fs/promises";
import { Country } from "@/types";
import path from "path";

/* export async function getCountries(): Promise<Country[]> {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/app/data.json",
      "utf8"
    );
    const fileData: Country[] = JSON.parse(file);
    return fileData;
  } catch (error) {
    console.error(error); 
    return []; 
  }
}
 */
export const getCountries = async (): Promise<Country[]> => {
  const filePath = path.resolve(process.cwd(), "src/app/data.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents) as Country[];
};

/* export const fetchCountry = async (name: string): Promise<Country | null> => {
  const countries = await getCountries();
  const foundCountry = countries.find(country => country.name === name);
  console.log(`Looking for country with name: ${name}, Found:`, foundCountry); // Log the search result
  return foundCountry || null;
}; */

export async function fetchCountry(id: string) {
  try {
    const file = await fs.readFile(
      path.resolve() + "/src/app/data.json",
      "utf8"
    );

    const countries = JSON.parse(file);

    const countrySelected = countries.filter(
      (country: { id: string }) => {
        return country.id === id;
      }
    );

    return countrySelected;
    
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch country.");
  }
} 

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')

}

export const getFilteredCountryNames = (country: Country, allCountries: Country[]): string[] => {
  const borderCountries = country.borders;
  const filteredCountries = allCountries.filter((country) =>
    borderCountries.includes(country.alpha3Code)
  );
  const filteredCountryNames = filteredCountries.map((country) => country.name);
  return filteredCountryNames;
};

/* export const getCountries = async (): Promise<Country[]> => {
  const filePath = path.resolve(process.cwd(), "src/app/data.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents) as Country[];
}; */

