import Filters from '@/components/Filters'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import Header from '@/components/Header'
import { getResources } from '@/sanity/actions'

interface Props {
    searchParams : { [ key : string ] :string | undefined }
}

export const revalidate = 900

const Home = async ({ searchParams } : Props) => {
    console.log({searchParams});
    
    const resources = await getResources({
        query : '',
        category : searchParams?.categary ||  '',
        page : '1'
    })
    
    
    return (
        <main className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 w-full max-w-screen-2xl flex-col'>
            <section className='w-full pt-[98px]'>
                <div className='flex justify-center items-center relative min-h-[278px] w-full rounded-xl bg-banner bg-center bg-cover text-center'>
                    <h1 className='sm:text-[64px] sm:leading-[67.2px] sm:font-bold font-bold text-[48px] leading-[50.4px] mb-6 text-center text-white'>JavaScript Mastery Resources</h1>
                </div>
                <SearchForm />
            </section>
            <Filters />
            
            <section className='flex items-center flex-col justify-center w-full mt-6 max-sm:flex-col sm:mt-20'>
                <Header />
                <div className='mt-12 flex flex-wrap gap-16 w-full justify-center lg:justify-start'>
                    {resources.length > 0 ? (
                        resources.map((resource :any) => (
                            <ResourceCard
                                title={resource.title}
                                key={resource._id}
                                image={resource.image}
                                id={resource._id}
                                downloadNumber={resource.views}
                                />
                        ))
                    ) : (
                    <p
                    className='text[#A3B3BC] text-[16px] font-normal leading-[20.8px]'>
                        No resources found
                    </p>)
                    }
                </div>
            </section>
            
        </main>
    )
}

export default Home
