import { toast } from 'react-toastify';


export function useNotifier() {

    function handleDefault(message: string) {
        toast(message, {
            position: "top-right",
        });
    }

    function handleError(message: string) {
        toast.error(message, {
            position: "top-right",
        });
    }

    function handleSuccess(message: string) {
        toast.success(message, {
            position: "top-right",
        });
    }

    function handleInfo(message: string) {
        toast.info(message, {
            position: "top-right",
        });
    }

    function handleWarn(message: string) {
        toast.warn(message, {
            position: "top-right",
        });
    }

    function handleCustom(message: string) {
        toast(message, {
            position: "top-right",
        });
    }

    return {
        default: handleDefault,
        error: handleError,
        success: handleSuccess,
        info: handleInfo,
        warn: handleWarn,
        custom: handleCustom,
    }
}