export default function ActiveUser({avatar, name, status, id, onClick}) {
    return (
        <div key={id} className="activeUser">
            <img src={avatar} alt={`${name} avatar`} />
            <h4 onClick={onClick}>{name}</h4>
            <h4 className={`status-${status}`}>{status}</h4>
        </div>
    )
}