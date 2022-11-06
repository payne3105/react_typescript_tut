import React, {useEffect, useState} from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";

function App() {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Card width='200px' height='200px' variant={CardVariant.outlined} >
                <button>Button</button>
                <div>Text</div>
            </Card>
            <List items={users}
                  renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
        </div>
    );
}

export default App;
