import { signIn } from "@/actions/user";
import { InteractiveHoverButtonDemo } from "@/components/global/ButtonComponent";
import ChatFeaturesSectionDemo from "@/components/global/FeatureSection";
import FancyFooter from "@/components/global/Footer";
import { LampDemo } from "@/components/global/Lamp";
import { AnimatedListDemo } from "@/components/global/NewUser";
import { AuroraTextDemo } from "@/components/global/WelcomeText";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";


export default async function App() {
  const user = await currentUser();
  const info = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.emailAddresses[0]?.emailAddress || "",
    mobileNumber: user?.phoneNumbers[0]?.phoneNumber || "",
  };
  const sign = await signIn(info);
  console.log(sign);

  return (
   <div className="w-screen h-screen flex flex-col bg-slate-100">
     <div className="w-screen h-screen flex justify-center p-10">
     <div className="mt-[10%]">
      {/* @ts-ignore */}
     <AuroraTextDemo text={`Welcome ${sign.message?.firstname || ""} ${sign.message?.lastname || ""} To`} gradient="PingMe"/>
     <div className="mt-10">
     <InteractiveHoverButtonDemo />
     </div>
     </div>
    <div>
      <Image className="rounded-full hover:opacity-80" src={'https://images.pexels.com/photos/5910806/pexels-photo-5910806.jpeg?auto=compress&cs=tinysrgb&w=800'} alt="This is an image" width={800} height={800}/>
    </div>

    </div>
    <div>
      <AnimatedListDemo />
    </div>
    <div>
      <LampDemo />
      <ChatFeaturesSectionDemo />
    </div>
    <div>
      <FancyFooter />
    </div>
   </div>
  );
}
