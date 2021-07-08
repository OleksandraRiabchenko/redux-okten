export default function Post({item}) {
    return (
        <div>
            <h3>{item.id} - {item.title}</h3>
            {item.body}
        </div>
    )
}
