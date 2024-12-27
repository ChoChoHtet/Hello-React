import List from "./List.jsx";
import Item from "./Item.jsx";
import {useState} from "react";


export default function App() {
    const [data, setData] = useState([
        {id: 1, content: "Hello World!", name: "Alice"},
        {id: 2, content: "I am a little!", name: "Brown"},
        {id: 3, content: "I am a little!", name: "Great"},
    ]);
    return (
        <div style={{maxWidth: 600, margin: "2px auto"}}>
            <h1>Hey Yaycha</h1>
            <List>
                {
                    data.map(item => (<Item key={item.id} content={item.content} name={item.name}/>))
                }
            </List>
        </div>
    );
}
