import { QueryClient } from "react-query";
import { notification } from "antd";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError,
            onSettled,
        },
        mutations: {
            onError,
            onSettled
        }
    }
});

function onError(error: any) {
    console.table(error);
    notification.error({
        message: error.message,
        type: "error",
    })
}

function onSettled(data: any, error: any) {
}