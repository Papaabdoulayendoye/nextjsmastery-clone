import Link from 'next/link'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
interface Props {
    title : string, 
    image : string, 
    id : string, 
    downloadNumber :string ,
}

const ResourceCard = ({title, image, id, downloadNumber} : Props) => {
    return (
    <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px] pb-6'>
        <Link href={`/resource/${id}`}>
            <CardHeader className='flex-center flex-col !p-0 gap-2.5'>
                <div className='h-fit w-full'>
                    <Image src={image} alt={title} width={384} height={440}
                        className='object-cover h-full !rounded-[7px]'
                    />
                </div>
                <CardTitle className='text-white paragraph-semibold line-clamp-1 w-full text-left'>{title}</CardTitle>
            </CardHeader>
        </Link>
        <CardContent
            className='flex-between mt-4 p-0'
        >
            <div
                className='flex-center body-medium gap-1.5 text-white'
            >
                <Image src={'/downloads.svg'} width={20} height={20} alt='download'/>
                {downloadNumber}
            </div>
            <Link href={`/resource/${id}`} className='flex items-center justify-center gap-2 text-gradient_blue-purple body-semibold'>
                Download Now
                <Image alt='arrow right icon' src={'/arrow-blue.svg'} width={13} height={10} />
            </Link>
        </CardContent>
    </Card>
    )
}

export default ResourceCard
