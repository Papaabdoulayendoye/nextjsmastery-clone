import Filters from '@/components/Filters'
import SearchForm from '@/components/SearchForm'
const Home = () => {
    return (
        <main className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 w-full max-w-screen-2xl flex-col'>
            <section className='w-full pt-[98px]'>
                <div className='flex justify-center items-center relative min-h-[278px] w-full rounded-xl bg-banner bg-center bg-cover text-center'>
                    <h1 className='sm:text-[64px] sm:leading-[67.2px] sm:font-bold font-bold text-[48px] leading-[50.4px] mb-6 text-center text-white'>JavaScript Mastery Resources</h1>
                </div>
                <SearchForm />
            </section>
            <Filters />
        </main>
    )
}

export default Home
