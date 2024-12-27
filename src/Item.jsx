// eslint-disable-next-line react/prop-types
export default function Item({item, remove}) {
    return (
        <li style={{
            padding: 10,
            borderBottom: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            {/* eslint-disable-next-line react/prop-types */}
            <span> {item.content} - <b>{item.name}</b></span>
            {/* eslint-disable-next-line react/prop-types */}
            <button onClick={() => remove(item.id)}> Delete</button>
        </li>
    );
}
