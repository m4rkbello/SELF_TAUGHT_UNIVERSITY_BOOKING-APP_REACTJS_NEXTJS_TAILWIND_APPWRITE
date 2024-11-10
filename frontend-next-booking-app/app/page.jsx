import RoomCard from '@/components/RoomCard';
import Heading from '@/components/Heading';
import rooms from '@/data/rooms.json';
import getAllRooms from './actions/getAllRooms';

export default async function Home() {

const rooms = await getAllRooms();

  
  return (
    <>
    <Heading title='Available' />
        {rooms.length > 0 && rooms.length !== 0 ? (
          rooms.map((room) => <RoomCard room={room} />)
        ) : (
         <p>No rooms available!</p>
        )}
    </>
  );
}
