import { ArrowDown, Grid3x3Icon } from "lucide-react";

const VerticalBar = () => {
  return (
    <aside className="flex flex-col justify-center gap-18 items-center mt-20 fixed left-5">
      <Grid3x3Icon />
      <div className="flex flex-col gap-32">
        <span className="w-35 rotate-90">(14) 99846-4930</span>
        <p className="w-30 rotate-90 ml-2.5">Role para baixo</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-52 bg-muted/80"></div>
        <ArrowDown className="size-5 relative bottom-1" />
      </div>
    </aside>
  );
};

export default VerticalBar;
