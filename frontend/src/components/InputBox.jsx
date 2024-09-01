export default function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className=" flex font-semibold  pb-2 pt-1 justify-start">
        {label}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-2 py-1 pb-1 border rounded border-slate-200"
        onChange={onChange}
      />
    </div>
  );
}
