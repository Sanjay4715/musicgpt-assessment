import GenerationItem from "@/components/GenerationItem/GenerationItem";
import ProcessingGenerationItem from "@/components/GenerationItem/ProcessingGenerationItem";
import InvalidPromptInfo from "@/components/GenerationItem/InvalidPromptInfo/InvalidPromptInfo";
import TopupInfo from "@/components/GenerationItem/TopupInfo/TopupInfo";
import PromptSection from "@/components/PromptSection/PromptSection";
import ServerBusyInfo from "@/components/GenerationItem/ServerBusyInfo/ServerBusyInfo";

const Create = () => {
  return (
    <div className="w-full min-h-[90vh] px-4 md:px-6 lg:px-8 flex flex-col justify-center">
      <PromptSection />
      <div className="container mx-auto flex flex-col gap-5 justify-center">
        <h2 className="text-[18px] font-semibold text-[#E4E6E8]">
          Recent generations
        </h2>
        {/* <DesktopPlayer /> */}
        <div className="flex flex-col gap-1">
          <TopupInfo />
          <ServerBusyInfo />
          <InvalidPromptInfo />
          <GenerationItem />
          <ProcessingGenerationItem />
        </div>
      </div>
    </div>
  );
};

export default Create;
