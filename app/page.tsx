export default async function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-300 flex">
      {/*L*/}
      <div className="w-1/2 bg-black text-white flex flex-col">
        
        <div className="p-6">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="G" />
          </div>
        </div>
        
        {/*Main*/}
        <div className="flex-1 flex flex-col justify-center px-6 pb-20">
          <h1 className="text-5xl font-bold mb-4">
            This is Grohub.
          </h1>
          
          <p className="text-lg mb-12 opacity-80">
            Text. Text. Text
          </p>
            <div className="flex gap-4">
            <button className="bg-gray-200 text-black px-12 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            </button>
            <button className="bg-gray-500 text-white px-12 py-4 rounded-lg font-medium hover:bg-gray-400 transition-colors">
           </button>
          </div>
        </div>
      </div>
      
      {/*R*/}
      <div className="w-1/2 flex items-center justify-end overflow-hidden relative">
        <img src="/youtube.png" alt="youTube symbol" className="w-100 h-100  object-contain translate-x-20"/>
      </div>
    </div>
      
    </>
);
}
