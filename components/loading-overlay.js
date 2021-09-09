export default function LoadingOverlay() {
  return (
    <div className="fixed z-50 inset-0">
      <div className="flex flex-col justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      </div>
    </div>
  );
}
