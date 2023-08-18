import {	aboutusimg1,
	aboutusimgMission,
	aboutusimgGoal,
	aboutusimgVision,
	aboutusimgtraining,
	aboutusimgPlacement,
	aboutusimgConsultant
} from '../../../assets/images/index'
import data from './data.json'
import Team from './Team'
// import { Link } from "react-router-dom";



export default function Aboutus(){

	const title_text='Starmark is a free job consultancy platform, formed for the convenience of people looking for job opportunities. We work towards a social cause for eradicating unemployment with the vision of giving everyone a chance to support their livelihood. Starmark provides job seekers with verified job opportunities that makes sure you get legitimate opportunities and avoid any future financial or legal troubles. Through this group, 2-5 people get jobs every day. Starmark has provided more than 60,000 jobs in 9 years so far.';

	const missions_text='In the age of the internet it has become overly easy for fraudulent organizations/ individuals to scam honest people of their money while taking advantage of their vulnerability. Starmark is on a mission to help these job seekers, who are looking for an honest job, by bringing in information of verified job opportunities across various fields.';
	const vision_text='Starmark works with the vision of helping the members of the community towards a better livelihood and to help stay aware of scammers. Many people throughout the year get scammed through these illegitimate advances and end up losing their financial aid. Starmark makes sure no job seeker that comes here has to ever fall prey to that.';

	const goals_text='Our goal as an organization is to make sure every member gets access to legitimate job opportunities across all fields. It is to make sure that our members are aware of the fraudulent advances and avoid any kind of financial loss. Starmark makes sure to follow up with the members who have been placed to double check.';

	const placement_text='Starmark helps job-seekers looking for legitimate placements across different fields and levels to find the most suitable job for them by updating them with verified information and guidelines.';

	const consult_text='Starmark works with the vision of helping the members of the community towards a better livelihood and to help stay aware of scammers. Many people throughout the year get scammed through these illegitimate advances and end up losing their financial aid. Starmark makes sure no job seeker that comes here has to ever fall prey to that.';

	// const usertestimonials="There are many variations of passages of Lorem Ipsum available";

	const teamnames=data.map((data)=>{
		return <Team
			name={data.name}
			title={data.title}
			occupation={data.occupation}
			photo={data.photo}
		 />
	})


	return (
		<>
			<div className="part-1 top-desc z-40  sm:h-[90vh] bg-[#18A6D0CC]">
				<div className="flex">
					<div className="graphics-svg-design-top-container  ">
						<div className="flex ">
							<div className="circle sm:inline">
								<svg className="absolute hidden sm:inline top-20 right-44 md:mr-16 lg:mr-20 mt-14" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
								  <g filter="url(#filter0_d_330_306)">
								    <circle cx="15.5" cy="11.5" r="11.5" fill="white"/>
								  </g>
								  <defs>
								    <filter id="filter0_d_330_306" x="0" y="0" width="31" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
								      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
								      <feOffset dy="4"/>
								      <feGaussianBlur stdDeviation="2"/>
								      <feComposite in2="hardAlpha" operator="out"/>
								      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
								      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_330_306"/>
								      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_330_306" result="shape"/>
								    </filter>
								  </defs>
								</svg>
								
								<svg className="absolute hidden sm:inline bottom-16 left-44" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
								  <circle cx="14.5" cy="14.5" r="12.5" fill="#18A6D0" fill-opacity="0.8" stroke="white" stroke-width="4"/>
								</svg>
							</div>
							

							<svg className="absolute top-18 right-0" xmlns="http://www.w3.org/2000/svg" width="164" height="174" viewBox="0 0 164 174" fill="none">
								  <path opacity="0.1" d="M-7.60578e-06 0C-6.87946e-06 22.85 4.50064 45.4763 13.245 66.5869C21.9893 87.6976 34.806 106.879 50.9634 123.037C67.1208 139.194 86.3024 152.011 107.413 160.755C128.524 169.499 151.15 174 174 174L174 58.4631C166.323 58.4631 158.72 56.9509 151.627 54.0129C144.534 51.0748 138.089 46.7685 132.66 41.3397C127.232 35.9109 122.925 29.466 119.987 22.3729C117.049 15.2798 115.537 7.67749 115.537 -5.05028e-06L-7.60578e-06 0Z" fill="white"/>
							</svg>
						</div>
						<div  className="quarter-circle absolute bottom-0 left-0 rotate-180">
							<svg xmlns="http://www.w3.org/2000/svg" width="164" height="174" viewBox="0 0 164 174" fill="none">
								  <path opacity="0.1" d="M-7.60578e-06 0C-6.87946e-06 22.85 4.50064 45.4763 13.245 66.5869C21.9893 87.6976 34.806 106.879 50.9634 123.037C67.1208 139.194 86.3024 152.011 107.413 160.755C128.524 169.499 151.15 174 174 174L174 58.4631C166.323 58.4631 158.72 56.9509 151.627 54.0129C144.534 51.0748 138.089 46.7685 132.66 41.3397C127.232 35.9109 122.925 29.466 119.987 22.3729C117.049 15.2798 115.537 7.67749 115.537 -5.05028e-06L-7.60578e-06 0Z" fill="white"/>
							</svg>
						</div>
					</div>
					
				
					<div className="about-us-typo sm:mt-24 mt-5 pb-20 mx-auto max-w-2xl text-white">
						<div className="font-serif about-us-title leading-loose text-center font-extrabold text-4xl sm:text-7xl">
							ABOUT US
						</div>
						<div className="font-mono sm:mt-5 about-us-content px-4 sm:px-6 sm:text-center font-semibold sm:font-normal text-lg sm:text-2xl leading-6 sm:leading-8">
							{title_text}
						</div>
					</div>
				</div>
			</div>


			<div className="part-2 center-image -mt-20 sm:-mb-34 ">
				<div className="flex">
					<img className="mx-auto h-auto w-[100%] sm:w-[60%] z-40" src={aboutusimg1} />
				</div>
			</div>

			<div className="part-3 flex h-auto">
				<div className="overview-title mx-auto my-10">
					<div className="about-us-container w-[90vw]">

						<div className="hidden sm:inline-block overflow-hidden sm:absolute w-[70%] top-inherit right-0 md:-mt-56 lg:-mt-72">
							<svg  xmlns="http://www.w3.org/2000/svg" width="696" height="1308" viewBox="0 0 696 1308" fill="none">
							  <path d="M107.35 1C25.5589 16.2378 -77.8835 172.626 94.5205 259.241C117.24 268.062 174.869 274.478 223.623 229.567C284.566 173.428 207.585 59.5452 122.586 108.467C37.5871 157.388 76.0773 281.696 180.322 307.36C284.566 333.024 328.669 337.835 359.942 372.321C391.216 406.807 429.706 464.55 404.046 547.155C379.87 624.981 255.334 669.348 267.158 549.472C268.732 533.52 274.904 518.277 283.62 504.824C360.709 385.842 445.892 370.717 472.205 370.717C495.546 370.717 643.141 376.594 587.591 554.965C582.401 571.631 573.011 586.699 561.773 600.056C492.122 682.839 378.661 830.448 359.942 888C345.241 934.833 330.5 1029.5 359.942 1090.5C393.015 1159.02 466.5 1260 706.5 1307" stroke="#7C43FF" stroke-width="0.5" stroke-linecap="round"/>
							</svg>
						</div>
						
						
						<div className="about-us-overview relative ">


							<div className="absolute -bottom-28 sm:bottom-[10%] left-0 -ml-20">
								<svg xmlns="http://www.w3.org/2000/svg" width="174" height="348" viewBox="0 0 174 348" fill="none">
								  <path opacity="0.1" d="M66.5869 13.245C45.4763 4.50064 22.85 0 0 0V115.537C7.67749 115.537 15.2798 117.049 22.3729 119.987C29.4659 122.925 35.9109 127.232 41.3397 132.66C46.7685 138.089 51.0748 144.534 54.0129 151.627C56.9509 158.72 58.4631 166.323 58.4631 174C58.4631 181.677 56.951 189.28 54.0129 196.373C51.0749 203.466 46.7685 209.911 41.3397 215.34C35.9109 220.768 29.466 225.075 22.3729 228.013C15.2798 230.951 7.67749 232.463 0 232.463V348C22.85 348 45.4763 343.499 66.5869 334.755C87.6976 326.011 106.879 313.194 123.037 297.037C139.194 280.879 152.011 261.698 160.755 240.587C169.499 219.476 174 196.85 174 174C174 151.15 169.499 128.524 160.755 107.413C152.011 86.3025 139.194 67.1208 123.037 50.9634C106.879 34.806 87.6976 21.9893 66.5869 13.245Z" fill="#18A6D0" fill-opacity="0.8"/>
								</svg>
							</div>

							<div className="sticky top-0 sm:top-auto bg-white/40 sm:bg-0 sm:bg-none backdrop-blur-sm sm:backdrop-blur-none opacity-100 underline text-center text-zinc-800 z-40 text-[2.7rem] sm:text-[76px] font-bold leading-[76px] z-40">
								OVERVIEW
							</div>

							<div className="about-mission z-30 flex flex-col-reverse sm:flex-row justify-between items-center my-8">
								<img className="sm:w-80 sm:h-80 w-56 h-56 mx-auto " src={aboutusimgMission} />

								<div className="mx-auto sm:w-7/12 px-4">
						          	<div className="min-h-72 ">
						          		<div className="text-slate-900 text-4xl font-semibold leading-10 font-serif mb-3">
						          			Mission
						          		</div>
						          		<div className="font-mono text-zinc-600 font-medium text-xl leading-6">
						          			&emsp;{missions_text}
						          		</div>
						          	</div>
								</div>
			        		</div>

			        		<div className="flex sm:hidden inline-block">
			        			<div className="border-dashed border-t-2 border-[#18A6D0CC] z-30 w-[75%] mx-auto inline-block opacity-40"/>
			        		</div>
			        		

					        <div className="about-vision z-30 flex flex-col sm:flex-row justify-between items-center my-8">

					        	<div className="mx-auto sm:w-7/12 px-4">
					        		<div className="min-h-72">
										<div className="text-slate-900 text-4xl font-semibold leading-10 font-serif mb-3">
											Vision
										</div>
							          	<div className="font-mono text-zinc-600 font-medium text-xl leading-6">
							          		&emsp;{vision_text}
							          	</div>
					        		</div>
								</div>

								<img className="sm:w-80 sm:h-80 w-56 h-56 mx-auto " src={aboutusimgVision} />
										
					        </div>

					        <div className="flex sm:hidden inline-block">
			        			<div className="border-dashed border-t-2 border-[#18A6D0CC] z-30 w-[70vw] mx-auto inline-block opacity-40"/>
			        		</div>

					        <div className="about-goal z-30 flex flex-col-reverse sm:flex-row justify-between items-center my-8">

								<img className="sm:w-80 sm:h-80 w-56 h-56 mx-auto " src={aboutusimgGoal} />

								<div className="mx-auto mx-auto sm:w-7/12 px-4 ">
									<div className="min-h-72 ">
										<div className="text-slate-900 text-4xl font-semibold leading-10 font-serif mb-3">
											Goal
										</div>
							          	<div className="font-mono text-zinc-600 font-medium text-xl leading-6">
							          		&emsp;{goals_text}
							          	</div>
									</div>
								</div>

					        </div>
						</div>
						

						<div className="about-us-services mt-14 relative">

							<div className="absolute overflow-hidden top-[50%] right-0 -mr-[4.9%] ">
								<svg xmlns="http://www.w3.org/2000/svg" width="164" height="348" viewBox="0 0 164 348" fill="none">
								  <path opacity="0.1" d="M107.413 13.245C128.524 4.50064 151.15 0 174 0V115.537C166.323 115.537 158.72 117.049 151.627 119.987C144.534 122.925 138.089 127.232 132.66 132.66C127.232 138.089 122.925 144.534 119.987 151.627C117.049 158.72 115.537 166.323 115.537 174C115.537 181.677 117.049 189.28 119.987 196.373C122.925 203.466 127.232 209.911 132.66 215.34C138.089 220.768 144.534 225.075 151.627 228.013C158.72 230.951 166.323 232.463 174 232.463V348C151.15 348 128.524 343.499 107.413 334.755C86.3024 326.011 67.1208 313.194 50.9634 297.037C34.806 280.879 21.9893 261.698 13.2449 240.587C4.50063 219.476 -1.52587e-05 196.85 0 174C0 151.15 4.50064 128.524 13.2449 107.413C21.9893 86.3025 34.806 67.1208 50.9634 50.9634C67.1208 34.806 86.3024 21.9893 107.413 13.245Z" fill="#18A6D0" fill-opacity="0.8"/>
								</svg>
							</div>


							<div className="sticky top-0 sm:top-auto bg-white/40 sm:bg-0 sm:bg-none backdrop-blur-sm sm:backdrop-blur-none opacity-100 underline text-center text-zinc-800 z-40 text-[2.7rem] sm:text-[76px] font-bold leading-[76px] z-40">
								SERVICES
							</div>

							<div className="about-services-training z-30 flex flex-col sm:flex-row justify-between items-center my-8">

								<div className="mx-auto mx-auto sm:w-7/12 px-4 ">
						          	<div className="min-h-72 ">
						          		<div className="text-slate-900 text-4xl font-semibold leading-10 font-serif mb-3">
						          			Training
						          		</div>
						          		<div className="font-mono text-zinc-600 font-medium text-xl leading-6">
						          			<span className="text-zinc-600 text-xl font-mono font-semibold underline">Hands on technical writing:</span>
						          			<span className="text-zinc-600 text-xl font-mono font-normal "> Starmarks provides interested candidates to build their skill set with hands-on experience with technical writing.<br/></span>
						          			<span className="text-zinc-600 text-xl font-mono font-semibold underline">Industrial Training:</span>
						          			<span className="text-zinc-600 text-xl font-mono font-normal "> Get informational and effective industrial training from Starmark, to get a better idea of the professional world.<br/></span>
						          			<span className="text-zinc-600 text-xl font-mono font-semibold underline">Free Career Consultancy</span>
						          			<span className="text-zinc-600 text-xl font-mono font-normal ">: Clear out doubts and wandering questions about your career decisions with us at Starmark.</span>
						          		</div>
						          	
						          	</div>
								</div>

								<img className="sm:w-80 sm:h-80 w-56 h-56 mx-auto " src={aboutusimgtraining} />
			        		</div>

			        		<div className="flex sm:hidden inline-block">
			        			<div className="border-dashed border-t-2 border-[#18A6D0CC] z-30 w-[75%] mx-auto inline-block opacity-40"/>
			        		</div>

					        <div className="about-services-placement z-30 flex flex-col-reverse sm:flex-row justify-between items-center my-8">

					        	<img className="sm:w-80 sm:h-80 w-56 h-56 mx-auto " src={aboutusimgPlacement} />
					        	<div className="mx-auto mx-auto sm:w-7/12 px-4">
					        		<div className="min-h-72">
										<div className="text-slate-900 text-4xl font-semibold leading-10 font-serif mb-3">
											Placement
										</div>
							          	<div className="font-mono text-zinc-600 font-medium text-xl leading-6">
							          		{placement_text}
							          	</div>
					        		</div>
								</div>

					        </div>

					        <div className="flex sm:hidden inline-block">
			        			<div className="border-dashed border-t-2 border-[#18A6D0CC] z-30 w-[75%] mx-auto inline-block opacity-40"/>
			        		</div>

					        <div className="about-services-consultation z-30 flex flex-col sm:flex-row justify-between items-center  my-8">

								<div className="mx-auto mx-auto sm:w-7/12 px-4 ">
									<div className="min-h-72 ">
										<div className="text-slate-900 text-4xl font-semibold leading-10 font-serif mb-3">
											Consultation
										</div>
							          	<div className="font-mono text-zinc-600 font-medium text-xl leading-6">
							          		{consult_text}
							          	</div>
									</div>
								</div>
								<img className="sm:w-80 sm:h-80 w-56 h-56 mx-auto " src={aboutusimgConsultant} />

					        </div>
						</div>

{/* 
						{/AWARDS SECTION/} */}
						<div className="about-us-awards mt-14 relative">

							<div className="hidden md:inline-block absolute top-[25%] opacity-20 -ml-20 left-0 z-40">
								<svg xmlns="http://www.w3.org/2000/svg" width="165" height="348" viewBox="0 0 165 348" fill="none">
								  <path d="M57.5869 13.245C36.4763 4.50064 13.85 0 -9 0V115.537C-1.32251 115.537 6.27982 117.049 13.3729 119.987C20.4659 122.925 26.9109 127.232 32.3397 132.66C37.7685 138.089 42.0748 144.534 45.0129 151.627C47.9509 158.72 49.4631 166.323 49.4631 174C49.4631 181.677 47.951 189.28 45.0129 196.373C42.0749 203.466 37.7685 209.911 32.3397 215.34C26.9109 220.768 20.466 225.075 13.3729 228.013C6.27982 230.951 -1.32251 232.463 -9 232.463V348C13.85 348 36.4763 343.499 57.5869 334.755C78.6976 326.011 97.8792 313.194 114.037 297.037C130.194 280.879 143.011 261.698 151.755 240.587C160.499 219.476 165 196.85 165 174C165 151.15 160.499 128.524 151.755 107.413C143.011 86.3025 130.194 67.1208 114.037 50.9634C97.8792 34.806 78.6976 21.9893 57.5869 13.245Z" fill="#18A6D0" fill-opacity="0.8"/>
								</svg>
							</div>

							{/*<div className="absolute top-inherit right-0 -mt-72 z-10">
								<svg  xmlns="http://www.w3.org/2000/svg" width="696" height="1308" viewBox="0 0 696 1308" fill="none">
								  <path d="M107.35 1C25.5589 16.2378 -77.8835 172.626 94.5205 259.241C117.24 268.062 174.869 274.478 223.623 229.567C284.566 173.428 207.585 59.5452 122.586 108.467C37.5871 157.388 76.0773 281.696 180.322 307.36C284.566 333.024 328.669 337.835 359.942 372.321C391.216 406.807 429.706 464.55 404.046 547.155C379.87 624.981 255.334 669.348 267.158 549.472C268.732 533.52 274.904 518.277 283.62 504.824C360.709 385.842 445.892 370.717 472.205 370.717C495.546 370.717 643.141 376.594 587.591 554.965C582.401 571.631 573.011 586.699 561.773 600.056C492.122 682.839 378.661 830.448 359.942 888C345.241 934.833 330.5 1029.5 359.942 1090.5C393.015 1159.02 466.5 1260 706.5 1307" stroke="#7C43FF" stroke-width="0.5" stroke-linecap="round"/>
								</svg>
							</div>*/}

							<div className="sticky top-0 sm:top-auto bg-white/40 sm:bg-none backdrop-blur-sm opacity-100 text-center text-zinc-800 z-40 text-[2.7rem] sm:text-[76px] font-bold leading-[43px] sm:leading-tight z-40">
								<span className="underline">Award & Nominations</span>
							</div>
							<div className="my-5 p-2 opacity-100 z-40 text-center text-black text-3xl font-normal leading-9">
								Peek a glance at Starmark’s some of the important milestones:
							</div>


							<div className="about-awards-1 mx-auto md:w-11/12 z-20 flex flex-col sm:flex-row justify-between items-center my-8">

								<div className="mx-auto sm:w-7/12 px-4 sm:px-0">
									
					          		<div className="sm:px-10 px-4 my-7">
						          		<div className=" text-zinc-800 text-4xl sm:text-5xl text-left font-semibold leading-10 mt-10">
						          		JIYO BANGLA FELICITATION FOR STARMARK: (JAN 2020)
						          		</div>
						          	
						          	</div>
								</div>

								<div className="w-96 h-96 bg-sky-200 rounded-lg" />

			        		</div>

			        		<div className="flex sm:hidden inline-block">
			        			<div className="border-dashed border-t-2 border-[#18A6D0CC] z-30 w-[75%] mx-auto inline-block opacity-40"/>
			        		</div>

					        <div className="about-awards-2 mx-auto md:w-11/12 z-30 flex flex-col-reverse sm:flex-row justify-between items-center my-8">

					        	<div className="w-96 h-96 bg-sky-200 rounded-lg " />

									<div className="mx-auto sm:w-7/12 px-4 sm:px-0">
					          			<div className="sm:px-10">
							          		<div className=" text-zinc-800 text-4xl sm:text-5xl font-semibold leading-10">ZEE BANGLA DADAGIRI SEASON 8 FOR STARMARK: (DEC 7, 2019)
							          		</div>
					          		
							          		<div className="my-4">
							          			<a href="https://www.zee5.com/tv-shows/details/dadagiri-unlimited-season-8/0-6-1856/ayana-interacts-with-dada-dadagiri-unlimited-season-8-2019/0-1-manual_i172chmcet40" target="_blank" className="hover:underline text-cyan-500 text-opacity-80 text-4xl font-medium">Click to watch</a>
							          		</div>
					          			</div>
									</div>

						        </div>

							</div>
					</div>
				</div>	
			</div>

			{/* {/TEAM SECTION/} */}

			<div className="part-4 flex h-auto">
				<div className="about-us-team mx-auto my-10">
					<div className="sticky top-0 sm:top-auto bg-white/40 sm:bg-0 sm:bg-none backdrop-blur-sm sm:backdrop-blur-none opacity-100 underline text-center text-zinc-800 z-40 text-[2.5rem] sm:text-[76px] font-bold leading-[76px] z-40 my-5">
						MEET OUR TEAM
					</div>


					<div className="team-list-main-conatainer flex flex-wrap justify-evenly ">

						{teamnames}

					</div>

				</div>
			</div>
		</>
	)
}