import team from "../assets/team.png"
const MainContent = () => {
  return (
    <main className="py-12">
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">MAXIMIZE <br />IMPACT<span className="text-2xl md:text-3xl font-light"> of</span></h1>
        <h2 className="text-4xl md:text-6xl font-light italic">the IDEAS</h2>
        <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 200 100">
          <path d="M0 50 Q50 0 100 50 T200 50" fill="none" stroke="gold" strokeWidth="0.5" />
          <path d="M0 60 Q50 10 100 60 T200 60" fill="none" stroke="gold" strokeWidth="0.5" />
        </svg>
      </div>

      <p className="mt-8 max-w-2xl text-base md:text-lg">
        We bring powerful buyers for small businesses. Lentera has been helping American brands to achieve outstanding results
      </p>

      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-8">
        <button className="bg-lime-500 text-black px-6 py-3 rounded-full mb-2 md:mb-0">Discuss the task →</button>
        <button className="border border-white px-6 py-3 rounded-full">Learn more</button>
      </div>

      <div className="mt-12">
        <img src={team} alt="Team of professionals" className="w-full object-cover h-64" />
      </div>

      <div className="mt-12">
        <p className="text-3xl font-light mb-8">
          We create and implement effective promotion strategies based on website, targeting, contextual advertising and social networking.
        </p>
        <h2 className="text-xl">150+ projects closed</h2>
      </div>
    </main>
  );
};

export default MainContent;