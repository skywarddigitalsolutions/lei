import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function Transformando() {
    return(
    <div className="pt-48 pb-24 bg-gris">
        <VelocityScroll
        text="TRANSFORMANDO IDEAS"
        default_velocity={4}
        className="font-display pb-4 text-center text-4xl font-bold tracking-[-0.02em] text-yellow-200 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
    );
}