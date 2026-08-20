import { FC } from 'react';

export const DownloadAction: FC = () => (
    <a
        href="/ticket.pdf"
        download="ticket.pdf"
        aria-label="Download"
        title="Download"
        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
        >
            <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
        </svg>
    </a>
);