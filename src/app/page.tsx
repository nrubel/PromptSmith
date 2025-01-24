import Footer from "@/components/footer";
import PromptForm from "@/components/form";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div
        className={
          "p-6 bg-white shadow-xl rounded-sm border border-collapse border-gray-100 w-11/12 lg:w-7/12 xl:w-5/12"
        }
      >
        <PromptForm />
        <Footer />
      </div>
    </div>
  );
}
