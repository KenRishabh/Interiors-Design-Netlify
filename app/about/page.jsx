import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb"
export default function About() {
    return (
        <div>
            <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">WHO ARE WE?</h1>

            </div>
            <div className="container ">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">We have great idea & Interior Design</h2>
                    <p className="text-2xl font-medium lg:w-1/2">
                        The Vishal interiors design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} alt="" className="" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide">
                        Vishal Interiors – Specialized Interior Services Since 1993
Founded in 1993, Vishal Interiors has specialized in providing exceptional interior design services for residential, commercial, and industrial spaces. Key offerings include:

                            <br />
                            <br />

                            1. Space Planning: Efficient layouts tailored to clients' needs.<br />
2. Custom Interior Design: Creating personalized and aesthetic spaces.<br />
3. Furniture Design & Customization: Tailored, functional, and stylish furniture solutions.<br />
4. Lighting & Color Schemes: Expert selection to enhance ambiance.<br />
5. Renovation & Refurbishment: Transforming existing spaces with a modern touch.<br />
6. 3D Visualization: Bringing design concepts to life for better planning.<br />
<br />

Do create a detail form like this to get client brief and requirement

                            <br />
                            <br />
                            <span className="text-xl font-extrabold tracking-tight">With a focus on quality, innovation, and customer satisfaction, Vishal Interiors continues to redefine spaces.</span>
                        </p>
                        {/* <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="">Read More <TbArrowUpRight className="text-xl" /> </a> */}


                    </div>
                </div>
                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-wider text-center">TEAM</h1>
                    </div>
                    <div className="grid gap-20 py-8 lg:grid-cols-3">
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/photo2v.jpeg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >INTERIOR DESIGNER</h2>
                                <h2 className="py-4 text-sm font-semibold " >VISHAL VISHWAKARMA</h2>
                                <p className="text-sm text-gray-400">
                                    Managing Director of Vishal Interiors. Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/profile2v.jpeg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <h2 className="py-4 text-sm font-semibold " >SUGRIV VISHWAKARMA</h2>
                                <p className="text-sm text-gray-400">
                                    Founder of Vishal Interiors. Managing multiple sites, projects and team at a time with best assistance to labour and project best outcome.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div >
    )
}
