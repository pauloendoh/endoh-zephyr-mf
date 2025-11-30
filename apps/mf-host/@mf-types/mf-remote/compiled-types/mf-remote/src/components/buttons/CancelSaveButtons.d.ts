interface Props {
    submitButtonId?: string;
    isLoading?: boolean;
    disabled?: boolean;
    onSave?: () => void;
    onCancel: () => void;
    onEnabledAndCtrlEnter?: () => void;
    onEnableAndCtrlS?: () => void;
    saveText?: string;
    saveWidth?: number;
}
export declare const CancelSaveButtons: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
