import { Modal } from "flowbite-react"


const SyllabusModal = ({openModal, setOpenModal, syllabus, name}) => {
    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>{name}</Modal.Header>
            <Modal.Body>
                <div className="space-y-3">
                    {
                        syllabus?.map(({ week, topic, content }, index) => <div key={index} className="p-4 bg-[#091525] text-white rounded-lg">
                            <p>Week : <span className="text-gray-400">{week}</span></p>
                            <p>Topic : <span className="text-gray-400">{topic}</span></p>
                            <p>Content : <span className="text-gray-400">{content}</span></p>
                        </div>)
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default SyllabusModal