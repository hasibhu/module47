import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJob] = useState([]);

    const [dataLength, setDataLength]=useState([4])
    useEffect(() => {
        fetch('../../../public/jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])



    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl text-pink-700  font-bold">Featured Jobs {jobs.length}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    // before slicing the data>>>> jobs.map(job=> <Job key={job.id} job={job}></Job>)

                    jobs.slice(0, dataLength).map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>

            {/* after slice, add this div and then onclick function. adding 'hidden' is optional. hiding with ternary :>>  {dataLength === jobs.length ? 'hidden': ''} */}
            <div className="text-center m-4}">
                
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length) && 'hidden'}
                        className="btn btn-accent">See All</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;


