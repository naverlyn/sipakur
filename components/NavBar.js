import Link from "next/link"


export default function NavBar() {
    return (
        <>
            <div className="navbar bg-base-300 sticky backdrop-blur">
                <div className="flex-1 px-2 lg:flex-none">
                    <a className="text-lg font-bold btn btn-ghost" href="/">SICAKUR</a>
                </div>
                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn">Menu</label>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><a href="/about">About</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}