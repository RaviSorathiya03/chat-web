import { AuroraText } from "@/components/ui/aurora-text";

export function AuroraTextDemo({text, gradient}:{
    text:string
    gradient:string
}) {
  return (
    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      {text} <AuroraText>{gradient}</AuroraText>
    </h1>
  );
}
