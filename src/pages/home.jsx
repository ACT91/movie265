import axios from "axios";
import { Hero } from "../componets/home/hero";
import { useEffect } from "react";
import urlFetcher from "../config/urlfetcher";

export default function Home() {

    const fetcher = async () => {
        try {
            const res = await urlFetcher("/popular");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetcher();
    }, []);

    return (
        <main className="min-h-screen w-full flex flex-col">
            <Hero />
        </main>
    );
}