
import Contact from './Contact.jsx'
const users = [
  {
    name: 'Robert Reyes',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    isOnline: false
  },
  {
    name: 'Nellie Caldwell',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    isOnline: true
  },
  {
    name: 'Vernon Mason',
    image: 'https://randomuser.me/api/portraits/men/84.jpg',
    isOnline: true
  },
  {
    name: 'Erica Hunt',
    image: 'https://randomuser.me/api/portraits/women/87.jpg',
    isOnline: false
  },
  {
    name: 'Juanita Phillips',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    isOnline: true
  }
];

const ContactList =()=>(
  users.map(user => Contact(user))
)
export default ContactList