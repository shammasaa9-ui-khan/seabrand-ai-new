

// import MeetFounder from "@/src/components/founder/founder";
import MeetFounder from "@/src/components/founder/founder";
import FoundersJourney from "@/src/components/founder/foundermessage";


export default function FounderMessagePage() {
  return (
    <main className="min-h-screen bg-[#EFECE6] text-slate-900 pt-10  selection:bg-[#6748FE] selection:text-white w-full overflow-x-hidden">
      <MeetFounder/> 
      <FoundersJourney/>

    </main>
  );
}