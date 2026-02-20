import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative flex items-center justify-center mb-10 py-2.5 min-h-[90vh]">
        <div data-id="WelcomeTest">
          <div className="w-full text-[24px] font-semibold tracking-[.32px] sm:text-[28px] md:text-[32px] text-[#FFFFFF]">
            Create anything you imagine
          </div>
        </div>
      </section>
    </div>
  );
}
