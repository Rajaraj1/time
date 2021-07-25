import React from 'react'
import Card from './Card'

const Home = () => {
    return (
        <div>
            {/* <img className='opacity-90 shadow-2xl' src='https://source.unsplash.com/1500x500/?teen,girl' alt='image-not-found'/> */}
            <div class="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10 raja">
		
			<div class="container max-w-4xl mx-auto text-center">
				<h1 class="text-xl leading-tight md:text-3xl text-center text-gray-100 mb-3">Lorem ipsum dolor sit amet</h1>
				<p class="text-md md:text-lg text-center text-white ">Ut enim ad minim veniam, quis nostrud exercitation</p>

				<a href="/register" class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg">Find out more</a>
			</div>

		</div>
            <div className="container py-2">
                <div className="row">
                <div className="col">
                <Card imgsrc='https://source.unsplash.com/1600x900/?teen,girl'/>
                </div>                
                <div className="col">
                <Card imgsrc='https://source.unsplash.com/1600x900/?laptop,macbook'/>
                </div>                
                <div className="col">
                <Card imgsrc='https://source.unsplash.com/1600x900/?android,iphone'/>
                </div>
                </div>
            </div>
            <div className="container py-2">
                <div className="row">
                <div className="col">
                <Card imgsrc='https://source.unsplash.com/1600x900/?teen,girl'/>
                </div>                
                <div className="col">
                <Card imgsrc='https://source.unsplash.com/1600x900/?teen,boy'/>
                </div>                
                <div className="col">
                <Card imgsrc='https://source.unsplash.com/1600x900/?teen,'/>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Home
