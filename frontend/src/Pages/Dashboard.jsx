import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import NoteItem from "../components/NoteItem";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });

  const loadNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  const createNote = async () => {
    await API.post("/notes", form);
    setForm({ title: "", content: "" });
    loadNotes();
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    loadNotes();
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Notes</h1>

        <div className="bg-white p-4 rounded shadow mb-4">
          <input
            className="border p-2 w-full mb-2"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={createNote}>
            Add Note
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((n) => (
            <NoteItem key={n._id} note={n} onDelete={deleteNote} />
          ))}
        </div>
      </div>
    </div>
  );
}
