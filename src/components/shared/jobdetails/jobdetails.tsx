export interface Props {
    role: string;
    functionalArea: string;
    ctc:string;
    experience:string;
    minQualification:string;
    openings:string;
    prefExperience:string;
    prefEducation:string;
    jobType:string;
    jobDescription:string;
    stateCity:string;
    jobRole:string;
    
  }
export default function IndexPage(props: Props){

    

    const mainContStyle={
        backgroundColor: '#FFF',
        boxShadow: '1px 1px 4px #18A6D0'
    }

    return (
        <>
    
            <div className="pb-10 " > 
                {/* Page title starts */}
                <div className=" pt-8 pb-16 relative z-10">
                    <div className="container sm:pr-16 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="flex-col flex lg:flex-row items-start lg:items-center">

                            <button className="focus:outline-none hover:text-[#18A6D0] hover:decoration-[#18A6D0] hover:underline transition duration-150 rounded-lg text-black">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="my-2 mr-1 bi bi-arrow-left"width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>Back
                            </button>

                            <div className="ml-0 md:ml-16 my-6 lg:my-0">
                                <h4 className="text-3xl font-bold leading-tight mb-2 ">Job Role{props.jobRole}</h4>
                                <p className="flex items-center text-xs">
                                    <span>Portal</span>
                                    <span className="mx-2">&gt;</span>
                                    <span>Dashboard</span>
                                    <span className="mx-2">&gt;</span>
                                    <span>KPIs</span>
                                </p>
                            </div>

                        </div>
                        <div>
                            <button className="focus:outline-none mr-3 hover:bg-[#18A6D0] transition duration-150 ease-in-out rounded-lg bg-white hover:text-white text-[#18A6D0] px-3 py-1 text-sm border-2 border-[#18A6D0]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg> Share</button>
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-black hover:text-white border bg-white rounded-lg text-black pl-3 pr-4 py-1  text-sm border-2 border-black"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg> Save</button>
                        </div>
                    </div>
                </div>
                {/* Page title ends */}
                <div className="container px-6 mx-auto" >

                    <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full min-h-[256px]" style={mainContStyle}>

                        <div className="job-desc-container p-4">

                            <div className="job-cont-flex flex">
                                <div className="job-left-cont w-8/12 mr-4">
                                    <div className="job-desc-info mb-4">
                                        <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                            ROLE
                                        </div>
                                        <div className="cnt text-lg leading-6 text-[#212529]">
                                            Web Developer{props.role}
                                        </div>
                                    </div>
                                    <div className="job-desc-info mb-4">
                                        <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                            FUNCTIONAL AREA
                                        </div>
                                        <div className="cnt text-lg leading-6 text-[#212529]">
                                            Web Development{props.functionalArea}
                                        </div>
                                    </div>
                                    <div className="job-desc-info mb-4">
                                        <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                            STATES/CITIES
                                        </div>
                                        <div className="cnt text-lg leading-6 text-[#212529]">
                                            Delhi NCR{props.stateCity}
                                        </div>
                                    </div>

                                    <div className="job-desc-info-flex sm:flex">

                                        <div className="aA w-full sm:w-6/12 mr-2">
                                            <div className="job-desc-info mb-4">
                                                <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                                    CTC
                                                </div>
                                                <div className="cnt text-lg leading-6 text-[#212529]">
                                                    4.8-7.2{props.ctc} LPA
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                                    MINIMUM EXPERIENCE
                                                </div>
                                                <div className="cnt text-lg leading-6 text-[#212529]">
                                                    1{props.experience} YRS
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                                    MINIMUM QUALIFICATION
                                                </div>
                                                <div className="cnt text-lg leading-6 text-[#212529]">
                                                    6 Month Coding course{props.minQualification}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bB w-full sm:w-6/12 mr-2">
                                            <div className="job-desc-info mb-4">
                                                <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                                    OPENINGS
                                                </div>
                                                <div className="cnt text-lg leading-6 text-[#212529]">
                                                    1{props.openings}
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                                    PREFERED EXPERIENCE
                                                </div>
                                                <div className="cnt text-lg leading-6 text-[#212529]">
                                                    2{props.prefExperience} YRS
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                                    PREFERED EDUCATION
                                                </div>
                                                <div className="cnt text-lg leading-6 text-[#212529]">
                                                    B TECH CSE{props.prefEducation}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="job-right-cont w-4/12">
                                    <div className="job-desc-info mb-4">
                                        <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                            SKILLS
                                        </div>
                                        <div className="cnt text-lg leading-6 text-[#212529]">
                                            Web Developer
                                        </div>
                                    </div>

                                    <div className="job-desc-info mb-4">
                                        <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                            JOB TYPE
                                        </div>
                                        <div className="cnt text-lg leading-6 text-[#212529]">
                                            FULL TIME{props.jobType}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="job-info-desc ">
                                <div className="title font-poppins font-semibold leading-5 text-[#6C757D]">
                                    JOB DESCRIPTION
                                </div>
                                <div className="cnt text-lg leading-6 text-[#212529] px-10">
                                    {props.jobDescription}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, turpis vel malesuada convallis, mi risus condimentum neque, id tincidunt nibh lorem pulvinar erat. Sed sit amet nulla porta, imperdiet libero quis, pharetra massa. Nulla semper, ipsum sit amet tincidunt tristique, quam nunc hendrerit erat, quis tincidunt sapien urna finibus velit. Maecenas ac interdum dui, a mattis lacus. Sed metus dolor, rhoncus sed sapien non, rutrum vehicula purus. Sed vehicula sapien id sapien bibendum, a iaculis tellus auctor. Morbi id varius est, vitae lobortis neque. Vivamus at ultricies nisl. Nunc finibus elit vitae nulla gravida pharetra. Donec malesuada sapien pharetra, hendrerit ligula in, tincidunt arcu. Proin accumsan lobortis semper.

                                    Aliquam viverra risus at laoreet sollicitudin. Sed vel ornare lorem. Nunc vel mi ultricies, mollis dolor id, condimentum ipsum. Nam malesuada orci ligula, ut ultrices nibh bibendum ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vulputate purus tellus, quis malesuada tortor elementum et. Etiam id ex vitae ligula eleifend finibus. Integer at elit nec lectus elementum fermentum. Maecenas iaculis dolor metus. Phasellus felis nibh, viverra dignissim rutrum eu, mattis sed tellus. Mauris ac justo vel risus varius maximus mollis a ex.

                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam massa metus, interdum ac tristique non, euismod tempus nisi. Cras dignissim accumsan vehicula. Curabitur maximus massa turpis, et consequat felis eleifend at. Cras pharetra sem dolor. Nullam sem nisl, fringilla eget volutpat quis, posuere non ante. Pellentesque nec efficitur lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis venenatis orci. Aliquam pellentesque neque ut gravida malesuada. Donec scelerisque dolor non odio fermentum fermentum. Donec porttitor pellentesque dolor, ut efficitur dui porta in.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}