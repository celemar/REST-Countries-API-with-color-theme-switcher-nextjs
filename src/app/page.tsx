import CountriesList from "@/components/countries-list";
import Dropdown from "@/components/dropdown-filter";
import Search from "@/components/search";
import { CountriesParams } from "@/types";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: CountriesParams;
}) {
  const query = searchParams?.query || "";
  const region = searchParams?.region || undefined;
  
  return (
    <main className="min-h-screen flex flex-col items-center max-w-[1440px] md:mx-auto">
      <div className="w-full flex flex-col md:flex-row  md:justify-between md:items-center md:my-4 py-8 px-4 lg:px-8">
        <Search placeholder="Search for a country..." />
        <Dropdown />
      </div>

      <Suspense fallback={<p>Loading Countries...</p>}>
        <CountriesList query={query} region={region} />
      </Suspense>
    </main>
  );
}
