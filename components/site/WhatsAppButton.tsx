const phoneNumber = "923091045145";
const message =
  "Hi Travel With Neha, I would like to plan a tour in Northern Pakistan.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-emerald-600 sm:right-6 sm:px-4 sm:py-3"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 2a10 10 0 0 0-8.59 15.12L2 22l4.99-1.31A10 10 0 1 0 12 2Zm0 18a7.94 7.94 0 0 1-4.07-1.12l-.29-.17-2.96.78.79-2.89-.19-.3A8 8 0 1 1 12 20Zm4.32-5.9c-.24-.12-1.41-.69-1.63-.76-.22-.08-.38-.12-.54.11-.16.24-.62.76-.76.91-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.95-1.18-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.1-.49.1-.09.24-.24.36-.36.12-.12.16-.2.24-.34.08-.14.04-.26-.02-.38-.06-.12-.54-1.29-.74-1.77-.2-.47-.4-.41-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.56 4.08 3.58.57.25 1.01.39 1.36.49.57.18 1.08.16 1.49.1.45-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      WhatsApp
    </a>
  );
}
