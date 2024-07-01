import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
   
    console.log(job);

    // Destructure job data
    // const {
    //     job_description,
    //     job_responsibility,
    //     educational_requirements,
    //     experiences
    // } = job || {}; // Provide default values in case job is undefined


    return (
        <div>
            <h2 className="font-bold p-6">Job details of {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4 mb-4 ml-3">
                <div className="border md:col-span-3 space-y-2">
                    <p className=""><span className="text-xl font-bold">Job Description:</span> {job.job_description}</p>

                    <p><span className="text-xl font-bold">Job Responsibility:</span> {job.job_responsibility} </p>
                    <p className="text-xl font-bold">Educational Qualifications: </p>
                    <p>{job.educational_requirements}</p>
                    <p className="text-xl font-bold">Experiences: </p>
                    <p>{job.experiences}</p>

                </div>
                <div className="md:col-span-1 border">
                    <div className="border border-red-400 mb-3 bg-purple-100">
                        <h2 className="border-b ml-2 mb-5 pb-6">Job Details</h2>
                        <p className="ml-2">Salary: {job.salary}</p>
                        <p className="border-b ml-2 mb-5 pb-6">Job Title: {job.job_title}</p>
                        
                        <h2 className="ml-2 font-bold">Contact Information</h2>
                        <p className="ml-2">Phone : 01750-00 00 00</p>
                        <p className="ml-2">Email : info@gmail.com</p>
                        <p className="ml-2">Address : Dhanmondi 32, Sukrabad
                            Dhaka, Bangladesh</p>
                    </div>
                    <div className="text-center"><button className="btn btn-primary">Apply</button></div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
