export default function InfoModal({title, content, id, modalId}) {
    return (
        <div key={title} id={modalId} className="info-modal">
            <h2>{title}</h2>
            <div id={id} className="info-modal-content">
                {content}
            </div>
        </div>
    )
}