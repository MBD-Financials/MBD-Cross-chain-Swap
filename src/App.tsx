import { LiFiWidget } from '@lifi/widget';
import './App.css';
import logo from './assets/logo.png'

function App() {
  return (

    <>
<div className="relative bg-[#02073E]">
  <div className="mx-auto">
    <div className="flex items-center justify-between  py-2 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1 px-6">
        <a href="#">
          <span className="sr-only">MBD Financials</span>
          <img className="h-[85px] w-auto sm:h-[85px]" src={logo} alt="MBD Financials" />
        </a>
      </div>

      <nav className="hidden space-x-10 md:flex">
        
      </nav>
      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <a href="#" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 mx-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Get Started</a>
      </div>
    </div>
  </div>

</div>
<div className="mt-6">
    <LiFiWidget
      config={{
        containerStyle: {
          border: `1px solid rgb(234, 234, 234)`,
          borderRadius: '16px',
        },
      }}
    />
</div>
    </>
  );
}

export default App;
