import './FloatingCTA.css';

const WHATSAPP_PHONE = '254700000000';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi I want to order');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-cta"
      aria-label="Order via WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="28" height="28">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.737 5.478 2.025 7.782L0 32l8.424-2.007A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.123 22.437c-.337.945-1.974 1.808-2.717 1.873-.744.065-1.44.348-4.855-1.014-4.1-1.637-6.74-5.826-6.942-6.097-.2-.27-1.638-2.178-1.638-4.155 0-1.977 1.035-2.95 1.404-3.353.368-.403.806-.504 1.073-.504.268 0 .536.003.77.014.246.012.576-.093.9.688.337.8 1.147 2.776 1.247 2.98.1.2.167.436.033.703-.134.268-.2.435-.4.67-.2.235-.42.524-.6.703-.2.2-.408.417-.175.818.234.4 1.04 1.717 2.235 2.78 1.535 1.368 2.83 1.793 3.23 1.993.4.2.634.167.87-.1.234-.268 1.003-1.167 1.27-1.567.268-.4.534-.334.9-.2.368.134 2.335 1.1 2.735 1.3.4.2.668.3.768.467.1.167.1.967-.235 1.9z" />
      </svg>
      <span>Order on WhatsApp</span>
    </a>
  );
}
