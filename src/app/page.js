export default function Home() {
  return (
    <>
      <div>
        <h1 className='my-14 text-5xl text-cyan-300'> Welcome to My Website </h1>
        <div className='flex flex-row'>
          <div className='w-3/5 min-h-64'>
            <h1 className='text-3xl'>My Name is Septiadi</h1>
            <h1 className='text-1xl mt-5'> Check my Website If you want to know about me</h1>
          </div>
          <div className='p-15 w-2/5'>
            <img src='favicon.ico'></img>
          </div>
        </div>
        <div>
          <button className="mt-14 rounded-lg bg-sky-500/100 w-48 min-h-12 text-white">Get Started</button>
        </div>
      </div>
    </>
  );
}
