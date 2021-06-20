export default function ActiveUser({avatar, name, status, onClick}) {
    return (
        <div className="activeUser">
            <img src={avatar} alt={`${name} avatar`} />
            <h4 onClick={onClick}>{name}</h4>
            <h4 className={`status-${status}`}>{status === "dnd" ? "Don't disturb" : status?.replace(status[0], status[0].toLocaleUpperCase())}</h4>
        </div>
    )
}