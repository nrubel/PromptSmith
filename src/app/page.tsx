import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="p-6 bg-white shadow-xl rounded-sm border border-collapse border-gray-100 w-5/12">
        <Header />
      </div>
    </div>
  );
}
