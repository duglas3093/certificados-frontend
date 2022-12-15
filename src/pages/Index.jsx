import hero from '../images/hero.png'
import logo from '../images/logo.svg'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
export const Index = () => {
    return (
        <>
            <Header logo={logo}/>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Certificados digitales UMSS</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Encuentra y descarga tus certificados de la Universidad Mayor de San Simon con solo colocando tú carnet de identidad.</p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 uppercase">Buscar certificados</a>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={hero} alt="hero image" />
                    </div>                
                </div>
            </section>
            <Footer logo={logo}/>
        </>
    )
}