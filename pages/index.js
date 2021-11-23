import Head from 'next/head';
import FAQs from '../components/FAQs';
import Hero from '../components/Hero';
import Instructor from '../components/Instructor';
import Questions from '../components/Questions';
import ResumeMissingSomething from '../components/ResumeMissingSomething';
import Testimonials from '../components/Testimonials';
import WhatYoullLearn from '../components/WhatYoullLearn';
import YouTubeForMe from '../components/YouTubeForMe';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Education Ecosystem</title>
                <link rel="icon" href="/youtube.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:ital,wght@0,100;1,100&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="">
                <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                    <Hero title="Developer's Guide to Starting a YouTube Channel" />
                </section>

                {/* <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
                    <Questions />
                </section> */}
            </main>
        </div>
    );
}
