import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);
    const hasResume = user?.profile?.resume;

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                {/* Top Section: Avatar and Edit Button */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user.profile.profilephoto} alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio || "No bio provided"}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                </div>

                {/* Contact Info */}
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>

                {/* Skills */}
                <div className='my-5'>
                    <h1 className='font-semibold text-md'>Skills</h1>
                    <div className='flex flex-wrap items-center gap-2 mt-2'>
                        {
                            user?.profile?.skills?.length
                                ? user.profile.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
                                : <span className='text-gray-500'>NA</span>
                        }
                    </div>
                </div>

                {/* Resume Link */}
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        hasResume ? (
                            <a
                                href={user.profile.resume}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-500 hover:underline cursor-pointer'
                            >
                                {user.profile.resumeOriginalName || "View Resume"}
                            </a>
                        ) : (
                            <span className='text-gray-500'>NA</span>
                        )
                    } 
                </div>

                {/* Optional Inline Preview (Uncomment if needed) */}
                {/* {
                    hasResume && (
                        <iframe
                            src={`https://docs.google.com/viewer?url=${encodeURIComponent(user.profile.resume)}&embedded=true`}
                            width="100%"
                            height="500px"
                            className="my-4 border rounded"
                            title="Resume Preview"
                        />
                    )
                } */}
            </div>

            {/* Applied Jobs Table */}
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>

            {/* Update Profile Dialog */}
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile;
