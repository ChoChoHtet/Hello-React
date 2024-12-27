import List from "./List.jsx";
import Item from "./Item.jsx";


export default function App() {
    return (
        <div>
            <h1>Hey Yaycha</h1>
            <List>
                <Item content="Hello World" name="Alice"></Item>
                <Item content="Hey Girl" name="Bob"></Item>
            </List>
        </div>
    );
}
