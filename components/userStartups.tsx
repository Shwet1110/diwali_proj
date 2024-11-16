import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import StartupCard ,{StartupTypecard} from './startupCard';

const userStartups = async ({id}:{id:string}) => {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY,{id});
  return (
    <>
    {startups.length>0 ? startups.map((startup: StartupTypecard)=>(
      <div  key={startup._id} className='mt-3'>
        <StartupCard post={startup}/>
      </div>
    )):(
        <p className='no-result'>
            No Posts Yet
        </p>
    )}
    </>
  );
};

export default userStartups;