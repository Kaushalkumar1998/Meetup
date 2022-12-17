import Layout from "../components/layout/Layout"
import MeetupList from "../components/meetups/MeetupList"


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Lotus_Temple_in_New_Delhi_03-2016.jpg',
        address: 'some address ',
        description: 'This Is A first meetup'

    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Lotus_Temple_in_New_Delhi_03-2016.jpg',
        address: 'some address 12345 ',
        description: 'This Is A Second meetup'
    }
]

const HomePage = () => {
    return (

        <MeetupList meetups={DUMMY_MEETUPS} />


    )
}

export default HomePage