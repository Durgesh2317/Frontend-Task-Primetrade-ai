export default function NoteItem({ note, onDelete }) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h2 className="text-lg font-bold">{note.title}</h2>
      <p className="text-gray-600">{note.content}</p>
      <button
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => onDelete(note._id)}
      >
        Delete
      </button>
    </div>
  );
}
