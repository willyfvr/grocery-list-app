import React, {useState} from "react";

type Props = {
  onCreate: (name: string) => void;
}

export function CreateListForm({
  onCreate,
}: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    onCreate(name);

    setName("");
  };

  return(
    <form 
      onSubmit={handleSubmit}
      className="space-y-2"
    >
      <input 
        value={name}    
        onChange={(e) => 
          setName(e.target.value)
        }
        placeholder="Nombre de la lista"
        className="w-full rounded border p-2"
      />

      <button
        type="submit"
        className="w-full rounded bg-blue-600 p-2 text-white"
      >
        Crear Lista
      </button>
    </form>
  )
}