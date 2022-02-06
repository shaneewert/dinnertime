import Header from './header';

export default function Modal({ onClose, title, children }) {
  return (
    <div className="bg-white overflow-x-hidden overflow-y-auto absolute top-0 h-screen w-full z-20">
      <Header onBack={onClose} title={title} />
      <div className="bg-white">{children}</div>
    </div>
  );
}
