import { FC } from 'react';
interface Props {
    onShowPreview: () => void;
}
export const PreviewAction: FC<Props> = ({ onShowPreview }) => (
    <button
        data-testid="show-ticket-preview-action"
        onClick={onShowPreview}
        aria-label="Show preview"
        title="Show preview"
        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
        >
            <path d="M2.25 12s4.5-8.25 9.75-8.25S21.75 12 21.75 12 17.25 20.25 12 20.25 2.25 12 2.25 12z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    </button>
);