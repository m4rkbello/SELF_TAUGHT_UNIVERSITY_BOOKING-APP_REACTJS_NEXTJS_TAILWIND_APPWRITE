import RoomCard from '@/components/RoomCard';
import Heading from '@/components/Heading';
import rooms from '@/data/rooms.json';

export default function Home() {
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
