import Image from 'next/image'
import jpg from "../public/yano.png";

const Card = ({date,src,title,text,url}) => {
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <Image
                src={src}
                className="object-cover w-full h-64 rounded"
                alt=""
                width={400}
                height={240}
            />
            <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                    {date}
                </p>
                <p className="text-2xl font-bold leading-5">{title}</p>
                <p className="mb-4 text-gray-700">{text}</p>
                <div className="flex space-x-4">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                        </svg>
                    </div>
                    <p className="font-semibold text-gray-400">{url}</p>
                </div>
            </div>
        </div>
    )
}

export default Card