import Head from 'next/head';
import Link from "next/link";

const Layout = ({title, children}) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-700 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>

            <header>
                <nav className="bg-blue-200 w-screen">
                    <div className="flex items-center pl-8 h-14">
                        <div className="flex space-x-4">
                            <Link href="/">
                                <a className="text-gray-700">Home</a>
                            </Link>
                            <Link href="/upload">
                                <a className="text-gray-700">投稿</a>
                            </Link>
                            
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>


        </div>
    )
}

export default Layout;
