import fs from "fs/promises";
import { Country } from "@/types";
import path from "path";

export const getCountries = async (): Promise<Country[]> => {
  const filePath = path.resolve(process.cwd(), "src/app/data.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents) as Country[];
};

/* export async function fetchCountry(id: string) {
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

 */

