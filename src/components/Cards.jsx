
const Cards = () => {
    return (
        <div className="group hover:rounded-tl-[55px] w-[280px] h-[280px] bg-white rounded-[32px] p-[3px] relative shadow-card-shadow transition-all ease-in-out">
            <button className="absolute right-8 top-6 bg-transparent border-none">
                <svg className="stroke-[#fbb9b6] stroke-[3px] hover:stroke-[#f55d56]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </button>
            <div className="
                absolute 
                top-[3px] 
                left-[3px] 
                w-[calc(100%-6px)] 
                h-[calc(100%-6px)] 
                rounded-[29px] 
                z-[1px] 
                overflow-hidden 
                transition-all 
                ease-in-out
                duration-500 
                group-hover:w-[100px]
                group-hover:h-[100px]
                group-hover:top-[10px]
                group-hover:left-[10px]
                group-hover:rounded-[50%]
                group-hover:z-[3]
                group-hover:shadow-card-shadow-profile-pic
                group-hover:transition-all 
                group-hover:ease-in-out
                group-hover:duration-500
                group-hover:border-[7px]
                group-hover:border-solid
                group-hover:border-[#fbb9b6]
                group-hover:hover:scale-[1.3]
                group-hover:hover:rounded-[0px]
                ">
                <img className="object-cover
                    object-left-top
                    transition-all 
                    ease-in-out
                    group-hover:scale-[2.5]
                    group-hover:object-profile-pic-img
                    group-hover:transition-all
                    group-hover:ease-in-out
                    group-hover:duration-500
                    "
                    src="./6.jpg"
                    alt=""
                />
            </div>
            <div
                style={{
                    transition: 'all 0.5s cubic-bezier(0.645,0.45,0.355,1) 0.0s '
                }}
                className=" 
                    group-hover:top-[20%]
                    group-hover:rounded-t-[80px]
                    group-hover:rounded-r-[29px]
                    group-hover:rounded-b-[29px]
                    group-hover:rounded-l-[29px]
                    group-hover:transition-[all/0.5s/cubic-bezier(0.645,0.045,0.355,1)\0.2s]
                    absolute
                    bottom-[3px]
                    left-[3px]
                    right-[3px]
                    bg-[#fbb9b6]
                    top-[80%]
                    rounded-[29px]
                    z-[2]
                    shadow-card-shadow-bottom
                    overflow-hidden
                "
            >
                <div className="absolute bottom-0 left-6 right-6 h-[160px]">
                    <span className="block text-[1.2rem] text-white font-bold" >My Name</span>
                    <span className="block text-[0.9rem] text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicinFcls </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div className="flex gap-4">
                        <svg className=" h-5 fill-white hover:fill-[#f55d56] hover:scale-[1.2]" xmlns="http://www.w3.org/2000/svg" width="16" height="15.999" viewBox="0 0 16 15.999">
                            <path id="Subtraction_4" data-name="Subtraction 4" d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" transform="translate(6 598)"></path>
                        </svg>
                        <svg className="h-5 fill-white hover:fill-[#f55d56] hover:scale-[1.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                        <svg className="h-5 fill-white hover:fill-[#f55d56] hover:scale-[1.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    </div>
                    <button className="bg-white color-[#fbb9b6] border-none rounded-[20px] text-[0.6rem] py-[0.4rem] px-[0.6rem] shadow-none hover:bg-[#f55d56] hover:text-white ">Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Cards