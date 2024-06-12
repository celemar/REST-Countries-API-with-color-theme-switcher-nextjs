import CountriesList from "@/components/countries-list";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center max-w-[1440px] mx-auto">
      <CountriesList/>
    </main>
  );
}
