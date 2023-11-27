import logo from "./assets/images/logo.svg";
import bgImage from "./assets/images/bg.jpg";

export default function App() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <img src={logo} alt="anvient logo" className="mx-auto w-44 pt-16" />
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="mt-72 font-bold tracking-widest text-mainColor">
          COMING SOON
        </span>
        <h1 className="max-w-4xl text-center text-7xl font-bold leading-snug text-white">
          We create products you all wanted so much
        </h1>
      </div>
    </div>
  );
}
