export default function Modal({ onClose, children }) {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex flex-col justify-start min-h-screen max-h-screen p-4">
        <div onClick={onClose} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="bg-white rounded-lg overflow-x-hidden overflow-y-auto shadow-xl transform">
          <div className="bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
