import Image from "next/image";

export default function contact() {
    return (
        <div className="container py-16">
            
                

                

            
            <div className="grid lg:grid-cols-2 place-items-center ">
            <div className="lg:w-1/2 xl:py-15 lg:py-9">
                    <p className="tracking-widest test-2xl text-gray-500 xl:text-2xl lg:text-4xl">Contact Details</p>
                    <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">Vishal Interiors</h1>
                    <p className="pb-6 text-gray-500 xl:pb-10">
                         Email: vishalinteirors19@gmail.com<br />
Phone: +91-9740885642<br />
Address: Bangalore

                    </p>
                    
                </div>
            <div className="pt-4 text-center border-t-2 lg:pt-0 lg:text-left lg:border-0 lg:pl-20 ">
                
                    <p className="pb-4 text-xl font-semibold">Subscribe for Updates</p>
                    
                    <div className="relative lg:max-w-sm">
                    
                        <input className="w-full px-4 pr-20 border-2 border-gray-300 rounded-full h-14" type="text" placeholder="First Name" />
                        <input className="w-full px-4 pr-10 border-2 border-gray-300 rounded-full h-14" type="text" placeholder="Last Name" />
                        <input className="w-full px-4 pr-10 border-2 border-gray-300 rounded-full h-14" type="text" placeholder="Email Address" /> 
                        <button className="absolute h-10 px-3 text-sm text-white bg-black rounded-full top-50 right-5 hover:border-2 hover:border-black hover:bg-white hover:text-black">Subscribe</button>
                    </div>
                    <br/>
                    <p className="pt-4 text-gray-500">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </div>
            </div>
        </div>
    );
}