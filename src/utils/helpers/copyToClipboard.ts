import { toast } from 'react-toastify';

export const copyToClipboard = (text: string) =>
    navigator.clipboard
        .writeText(text)
        .then(() => true)
        .catch(err => {
            toast.error('Failed to copy text:', err);

            return false;
        });
