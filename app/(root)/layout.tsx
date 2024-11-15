import Navbar from "../../components/navbar";

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className="font-sans">
            <Navbar/>
            {children}
        </main>
    )
};