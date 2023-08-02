import './App.css'
import React from 'react'

// Your task is to create a users page that displays a list of users and their friends.
// Example https://www.figma.com/file/5YZSH0SuUe7XaH1PpV8OG1/Example-Page?type=design&node-id=0%3A1&t=tSzaKVfhNDc3Jjgt-1

// 1. Use TypeScript to define the User type with the following properties: ID (string), rank (number), name (string), email (string), image (string), and friends (array of user IDs).
// 2. Fetch the users' data from an API endpoint when the component mounts. The API response should be an array of User objects.
// 3. Implement a function called formatUser that takes a User object as input. This function should fill in two additional properties: friendNames (an array of all friends' names) and highestRankingFriend (the ID of the friend with the highest rank). The friendNames array should contain the names of the users based on their IDs. Find the optimal place for this function so it's called as infrequently as possible.
// 4. Create a user component called User that receives the following props: user (User object), onClick (function to be called when the user is clicked), and isSelected (boolean indicating if the user is selected).
// 5. Display the list of users on the users page using the User component. Show the user's name, email, and friend names in the component. When a user is clicked, update the selectedUser state variable to the ID of the clicked user.
// 6. Implement memoization for the User components to optimize performance. The components should only re-render when the user data is updated.
// 7. Implement searching functionality by name, ID, or friend's ID. Allow users to search for users by entering a query in an input field. Display only the users that match the search criteria. The search should be case-insensitive and match any part of the user's name, ID, or friend's ID.

export default function App() {
return (<>
{/_ Render user's here _/}
</>)
}

const sampleData: User[] = [
{ id: "1", rank: 1, name: "John Doe", email: "john.doe@example.com", friends: ["2", "3", "4"], image: 'https://picsum.photos/200' },
{ id: "2", rank: 2, name: "Jane Smith", email: "jane.smith@example.com", friends: ["1", "3"], image: 'https://picsum.photos/200' },
{ id: "3", rank: 3, name: "Alex Johnson", email: "alex.johnson@example.com", friends: ["1", "2"], image: 'https://picsum.photos/200' },
{ id: "4", rank: 4, name: "Sarah Williams", email: "sarah.williams@example.com", friends: ["1"], image: 'https://picsum.photos/200' },
{ id: "5", rank: 5, name: "Michael Brown", email: "michael.brown@example.com", friends: [], image: 'https://picsum.photos/200' },
{ id: "6", rank: 6, name: "Emily Davis", email: "emily.davis@example.com", friends: [], image: 'https://picsum.photos/200' },
{ id: "7", rank: 7, name: "Christopher Wilson", email: "christopher.wilson@example.com", friends: [], image: 'https://picsum.photos/200' },
];
