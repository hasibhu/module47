import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    if (!job) {
        return null; // Return null if job is undefined
    }
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary, job_description, job_responsibility } = job;
    console.log(job);

    return (
        
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 oy-2 text-[#7E90FE] font-extrabold border rounded-2xl border-[#7E90FE] mr-8">{remote_or_onsite}</button>
                    <button className="px-5 oy-2 text-[#7E90FE] font-extrabold border rounded-2xl border-[#7E90FE] mr-16">{job_type}</button>
                </div>
                <div className="mt-3 flex gap-16">
                    <h2 className="flex flex-row items-center gap-2"><FaLocationDot className="text-2xl " /> {location}</h2>

                    <h2 className="flex flex-row items-center gap-2"> Salary: <AiOutlineDollarCircle className="text-2xl " /> { salary}</h2>

                </div>
                <div className="card-actions justify-start">
                    {/* <button className="btn btn-primary">View Details </button> */}

                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details </button>

                    </Link>
                </div>
            </div>
        </div>


        
    );
};

export default Job;

